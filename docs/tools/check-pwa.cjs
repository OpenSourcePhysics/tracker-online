const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const manifest = JSON.parse(read('manifest.webmanifest'));
assert.deepStrictEqual(manifest, JSON.parse(read('manifest.json')));
assert.equal(manifest.display, 'standalone');
for (const key of ['name', 'short_name', 'id', 'start_url', 'scope']) assert(manifest[key], 'Missing ' + key);
const base = new URL('https://example.test/tracker/');
for (const url of [manifest.start_url, ...manifest.shortcuts.map(s => s.url), ...manifest.file_handlers.map(h => h.action)]) {
  assert(new URL(url, base).href.startsWith(base.href), 'Out-of-scope URL: ' + url);
  assert(fs.existsSync(path.join(root, url)), 'Missing launch page: ' + url);
}
for (const icon of manifest.icons) {
  const data = fs.readFileSync(path.join(root,icon.src));
  const dimensions = data.readUInt32BE(16) + 'x' + data.readUInt32BE(20);
  assert.equal(icon.sizes, dimensions, 'Wrong icon dimensions: ' + icon.src);
}
const apple = fs.readFileSync(path.join(root,'icons/apple-touch-icon.png'));
assert.equal(apple.readUInt32BE(16),180);assert.equal(apple.readUInt32BE(20),180);
for (const file of fs.readdirSync(root).filter(f => f.endsWith('.html'))) {
  const html = read(file).replace(/<!--[\s\S]*?-->/g, '');
  assert(html.includes('pwa-bootstrap.js'), file + ' lacks offline startup bridge');
  assert(html.includes('rel="manifest"'), file + ' lacks manifest');
  assert(html.includes('apple-mobile-web-app-capable'), file + ' lacks Apple metadata');
  for (const tag of html.matchAll(/<(?:script|link|img)\b[^>]*>/gi)) {
    const attr = tag[0].match(/(?:src|href)\s*=\s*["']([^"']+)/i);
    if (!attr || /^(?:https?:|data:|#)/.test(attr[1])) continue;
    assert(fs.existsSync(path.join(root, attr[1].split(/[?#]/)[0])), file + ': missing ' + attr[1]);
  }
  for (const script of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)) new vm.Script(script[1], {filename:file});
}
for (const file of ['pwa.js','pwa-bootstrap.js','service-worker.js','sw.js','precache-manifest.js']) new vm.Script(read(file), {filename:file});
const context = {self:{}};vm.runInNewContext(read('precache-manifest.js'), context);
assert(context.self.TRACKER_BUILD);
assert(!context.self.TRACKER_PRECACHE.some(file => /^\.\/tracker[-_]?pwa[^/]*\.zip$/i.test(file)), 'Distribution archive must not be precached');
for (const file of context.self.TRACKER_PRECACHE) assert(fs.existsSync(path.join(root,file)), 'Missing precache file: ' + file);
for (const file of ['swingjs/swingjs2.js','swingjs/j2s/core/core_tracker.z.js','swingjs/j2s/core/package.js','swingjs/j2s/core/ES6/MediaInfoModule.wasm']) assert(context.self.TRACKER_PRECACHE.includes('./'+file),'Not precached: '+file);
console.log('PASS: manifests, launch paths, actual icon dimensions, HTML dependencies, script syntax, and ' + context.self.TRACKER_PRECACHE.length + ' offline assets');
