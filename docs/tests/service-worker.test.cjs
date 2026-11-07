const fs = require('fs');
const vm = require('vm');
const assert = require('assert');
const source = fs.readFileSync(require('path').join(__dirname,'../service-worker.js'),'utf8');
const scope = 'https://example.test/tracker/';
const handlers = {};
const stores = new Map();
const keyOf = r => typeof r === 'string' ? r : r.url;
let fail = false, skipped = 0, claimed = 0;
const context = vm.createContext({URL, Headers, Response, Request, console,
  importScripts() {},
  self: {TRACKER_BUILD:'test-build', TRACKER_PRECACHE:['./index.html','./video.mp4'], registration:{scope},
    addEventListener(type, fn){handlers[type]=fn;}, clients:{async claim(){claimed++;}}, async skipWaiting(){skipped++;}},
  caches:{async keys(){return [...stores.keys()];}, async delete(key){return stores.delete(key);},
    async open(name){if(!stores.has(name))stores.set(name,new Map());const store=stores.get(name);return {
      async put(req,response){store.set(keyOf(req),response.clone());},
      async match(req){const r=store.get(keyOf(req));return r&&r.clone();}};}},
  async fetch(url){if(fail)throw Error('network unavailable');return new Response(new Uint8Array([0,1,2,3,4,5,6,7,8,9]),{headers:{'Content-Type':'video/mp4'}});}
});
vm.runInContext(source,context);
async function lifecycle(type){let work;handlers[type]({waitUntil(p){work=p;}});await work;}
async function request(path,headers){let response;const work=[];handlers.fetch({request:new Request(new URL(path,scope),{headers}),respondWith(p){response=p;},waitUntil(p){work.push(p);}});const result=await response;await Promise.all(work);return result;}
(async()=>{
 fail=true;await assert.rejects(lifecycle('install'),/network unavailable/);assert.equal(skipped,0,'Must not activate a partial installation');
 fail=false;await lifecycle('install');assert.equal(skipped,0,'Updates must wait for consent');
 stores.set('unrelated-app',new Map());stores.set('tracker-pwa-'+encodeURIComponent(scope)+'-old',new Map());
 stores.set('tracker-pwa-'+encodeURIComponent('https://example.test/another/')+'-old',new Map());
 await lifecycle('activate');assert.equal(claimed,1);assert(stores.has('unrelated-app'));assert(!stores.has('tracker-pwa-'+encodeURIComponent(scope)+'-old'));assert(stores.has('tracker-pwa-'+encodeURIComponent('https://example.test/another/')+'-old'));
 fail=true;let r=await request('video.mp4',{Range:'bytes=2-4'});assert.equal(r.status,206);assert.equal(r.headers.get('Content-Range'),'bytes 2-4/10');assert.deepStrictEqual([...new Uint8Array(await r.arrayBuffer())],[2,3,4]);
 r=await request('video.mp4',{Range:'bytes=-3'});assert.deepStrictEqual([...new Uint8Array(await r.arrayBuffer())],[7,8,9]);
 assert.equal((await request('video.mp4',{Range:'bytes=20-30'})).status,416);
 assert.equal((await request('./sub/../video.mp4?version=1')).status,200);
 assert.equal((await request('./'+ '/video.mp4'.replace(/^\//,''))).status,200);
 assert.equal((await request('https://example.test/tracker//video.mp4?x=1')).status,200);
 await assert.rejects(request('missing.js'),/network unavailable/);
 let intercepted=false;handlers.fetch({request:new Request('https://remote.test/library.zip'),respondWith(){intercepted=true;}});assert.equal(intercepted,false);
 let done;handlers.message({data:{action:'skipWaiting'},waitUntil(p){done=p;}});await done;assert.equal(skipped,1);
 console.log('PASS: failed installs, update consent, scoped cache cleanup, offline query/double-slash paths, byte ranges, missing scripts, external requests');
})().catch(e=>{console.error(e);process.exit(1);});
