const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const source = fs.readFileSync(require('node:path').join(__dirname, '../pwa-bootstrap.js'), 'utf8');
const base = 'https://example.test/tracker/';
function start({cached = false, stall = false} = {}) {
  const requests = [], children = [], transports = [];
  let setups = 0;
  const element = () => ({style:{},setAttribute(){},append(child){children.push(child);}});
  const splash = element();
  const doc = {baseURI:base, currentScript:{src:base+'pwa-bootstrap.js'}, body:element(),
    getElementById(id){return id === 'tracker-online-splash' ? splash : null;},
    addEventListener(){},createElement:element};
  const bytes = new Uint8Array([80,75,3,4]);
  const response = url => new Response(url.endsWith('.zip') ? bytes : 'runtime', {headers:{'content-type':'application/octet-stream'}});
  const context = {URL, Map, Set, Promise, Array, Error, TextDecoder, AbortController, console:{log:console.log,warn:console.warn,error(){}},
    document:doc, location:{reload(){}},
    setTimeout(fn, ms){return setTimeout(fn, ms === 30000 ? 30 : ms === 2000 ? 10 : ms);},clearTimeout,
    TRACKER_BUILD:'test',TRACKER_PRECACHE:['./swingjs/j2s/core/core_tracker.z.js','./swingjs/j2s/tracker-assets.zip',
      './examples/large.trz','./swingjs/j2s/examples/large.trz','./swingjs/j2s/core/ES6/MediaInfoModule.wasm'],
    J2S:{_addExec(){}},jQuery:{ajaxTransport(types,handler){transports.push(handler);}},
    caches:{async open(name){assert.equal(name,'tracker-pwa-'+encodeURIComponent(base)+'-test');return {async match(url){return cached ? response(url) : undefined;}};}},
    fetch(url,options){requests.push(String(url));if(stall)return new Promise((resolve,reject)=>options.signal.addEventListener('abort',()=>reject(Error('aborted'))));return Promise.resolve(response(String(url)));}};
  context.self=context;
  vm.runInNewContext(source,context);
  const applet={_setupJS(){setups++;}};
  context.J2S._addExec([applet]);context.J2S._addExec([applet]);
  return {context,requests,children,transports,get setups(){return setups;}};
}
(async()=>{
  const cold=start();await cold.context.trackerPWAReady;
  assert.equal(cold.setups,1,'Start each applet once after dependencies finish');
  assert.equal(cold.requests.length,2,'Samples and WASM must not block startup or consume startup buffers');
  const local=start({cached:true});await local.context.trackerPWAReady;
  assert.equal(local.requests.length,0,'Installed offline startup must read its build cache without waking the worker or network');
  const transport=local.transports[0]({async:false,type:'GET',url:base+'swingjs/j2s/tracker-assets.zip',dataTypes:['binary']});
  let result;transport.send({},(status,label,data)=>{assert.equal(status,200);result=data.binary;});
  assert.deepEqual([...new Uint8Array(result)],[80,75,3,4],'Preserve ZIP bytes for synchronous Java reads');
  assert.equal(local.transports[0]({async:true,type:'GET',url:base+'swingjs/j2s/tracker-assets.zip'}),undefined,'Do not intercept async requests');
  const stalled=start({stall:true});await assert.rejects(stalled.context.trackerPWAReady,/timed out/);
  assert.equal(stalled.setups,0,'Do not start an incomplete runtime');
  assert(stalled.children.some(child=>child.textContent==='Retry loading'&&child.style.pointerEvents==='auto'),'A stalled download must expose a usable retry button');
  console.log('PASS: cache-first offline startup, no sample/WASM startup gate, binary transport, one applet start, bounded failed downloads and usable retry');
})().catch(error=>{console.error(error);process.exit(1);});
