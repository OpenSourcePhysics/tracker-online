/* SwingJS uses synchronous XHR, which bypasses service workers. Prepare only
   synchronous runtime dependencies before Java starts; videos and WebAssembly
   are loaded asynchronously when needed, including from the offline cache. */
(function () {
  'use strict';
  const StartupError = Error;
  const addExec = J2S._addExec;
  const pending = [];
  J2S._addExec = function (job) { pending.push(job); };
  const base = new URL('./', document.currentScript.src);
  const buffers = new Map();
  let statusText = 'Preparing Tracker…';
  let statusNode;
  function status(message) {
    statusText = message;
    const target = document.getElementById('tracker-online-splash') || document.getElementById('tracker-loading-splash');
    if (!target) return;
    if (!statusNode) {
      statusNode = document.createElement('p');
      statusNode.setAttribute('role', 'status');
      target.append(statusNode);
    }
    statusNode.textContent = message;
  }
  document.addEventListener('DOMContentLoaded', () => status(statusText), {once:true});
  function canonical(value) {
    try {
      const url = new URL(value, document.baseURI);
      url.search = ''; url.hash = ''; url.pathname = url.pathname.replace(/\/{2,}/g, '/');
      return url.href;
    } catch (_) { return ''; }
  }
  function timeout(work, milliseconds, message, onTimeout) {
    let timer;
    const limit = new Promise((resolve, reject) => {
      timer = setTimeout(() => {
        reject(new StartupError(message));
        if (onTimeout) onTimeout();
      }, milliseconds);
    });
    return Promise.race([work, limit]).finally(() => clearTimeout(timer));
  }
  // Do not hold sample archives/videos or WASM in the page's memory or make
  // startup wait for them. The worker still installs these for offline use.
  const files = self.TRACKER_PRECACHE.filter(file => file.startsWith('./swingjs/') &&
    !file.includes('/resources/help') && !file.includes('/examples/') &&
    !file.endsWith('.wasm') && file !== './swingjs/swingjs2.js');
  async function prepare() {
    let cache;
    try {
      if ('caches' in self) {
        const name = 'tracker-pwa-' + encodeURIComponent(base.href) + '-' + self.TRACKER_BUILD;
        cache = await timeout(caches.open(name), 2000, 'Offline storage did not respond');
      }
    } catch (error) { console.warn('[PWA] Startup cache:', error); }
    async function resource(url) {
      // Use this build's cache directly on Home Screen launches. This avoids
      // making every startup read wait for a suspended worker to start again.
      if (cache) {
        try {
          const cached = await timeout(cache.match(url.href), 2000, 'Offline read did not respond');
          if (cached && cached.ok) return cached;
        } catch (error) { console.warn('[PWA] Startup cache:', error); }
      }
      return fetch(url, {cache:'no-cache', signal:controller.signal});
    }
    let next = 0, completed = 0;
    const controller = new AbortController();
    status('Preparing Tracker (0/' + files.length + ')…');
    try {
      await Promise.all(Array.from({length:3}, async () => {
        while (next < files.length && !controller.signal.aborted) {
          const url = new URL(files[next++],base);
          const loaded = await timeout((async () => {
            const response = await resource(url);
            if (!response.ok) throw new StartupError('Runtime resource unavailable: ' + url.pathname + ' (' + response.status + ')');
            return {bytes:await response.arrayBuffer(),type:response.headers.get('content-type') || 'application/octet-stream'};
          })(), 30000, 'Startup download timed out: ' + url.pathname, () => controller.abort());
          if (controller.signal.aborted) return;
          buffers.set(canonical(url), loaded);
          status('Preparing Tracker (' + (++completed) + '/' + files.length + ')…');
        }
      }));
    } catch (error) { controller.abort(); buffers.clear(); throw error; }
    // SwingJS supplies its own binary transport, so prepend ours to all types.
    jQuery.ajaxTransport('+binary +text +script +json +*', options => {
      if (options.async !== false || options.type !== 'GET') return;
      const key = canonical(options.url);
      const resource = buffers.get(key);
      if (!resource) return;
      return {
        send(headers, complete) {
          const binary = options.dataTypes[0] === 'binary';
          const responses = binary ? {binary:resource.bytes} : {text:new TextDecoder().decode(resource.bytes)};
          // The core is evaluated once. Do not retain another 13 MiB copy for
          // the lifetime of the installed app after handing it to SwingJS.
          if (/\/core\/core[^/]*\.z\.js$/.test(key)) buffers.delete(key);
          complete(200,'OK',responses,'Content-Type: '+resource.type+'\r\n');
        },
        abort() {}
      };
    });
    status('Starting Tracker…');
    J2S._addExec = addExec;
    // The initial startup timer may have expired during preparation. Re-enter
    // setup to enqueue jobs and schedule SwingJS's normal execution timer.
    for (const applet of new Set(pending.map(job => job[0]))) applet._setupJS();
    pending.length = 0;
  }
  self.trackerPWAReady = prepare().catch(error => {
    console.error('[PWA] Startup:',error);
    const show = () => {
      status('Tracker could not finish loading. Check your connection, then retry.');
      const target = document.getElementById('tracker-online-splash') || document.getElementById('tracker-loading-splash') || document.body;
      if (!statusNode) {
        const message = document.createElement('p');
        message.textContent = 'Tracker could not finish loading. Check your connection, then retry.';
        target.append(message);
      }
      const retry = document.createElement('button');
      retry.textContent = 'Retry loading';
      retry.style.pointerEvents = 'auto';
      retry.onclick = () => location.reload();
      target.append(retry);
    };
    if (document.body) show(); else document.addEventListener('DOMContentLoaded',show,{once:true});
    throw error;
  });
})();
