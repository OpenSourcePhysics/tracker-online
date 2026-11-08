// Cache refresh requested 2026-11-07T22:43:02.015444+00:00
/* Generated asset list/version: node tools/build-precache.cjs */
importScripts('./precache-manifest.js');
const CACHE_PREFIX = 'tracker-pwa-' + encodeURIComponent(self.registration.scope) + '-';
const CACHE_NAME = CACHE_PREFIX + self.TRACKER_BUILD;
const scopeURL = new URL(self.registration.scope);
const assetURLs = self.TRACKER_PRECACHE.map(path => new URL(path, scopeURL).href);
const assets = new Set(assetURLs);

self.addEventListener('install', event => {
  // A failed essential download must leave the working installation intact.
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    let next = 0;
    await Promise.all(Array.from({length: 6}, async () => {
      while (next < assetURLs.length) {
        const url = assetURLs[next++];
        const response = await fetch(url, {cache: 'reload'});
        if (!response.ok) throw new Error('Precache failed: ' + response.status + ' ' + url);
        await cache.put(url, response);
      }
    }));
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const name of await caches.keys()) {
      if (name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME) await caches.delete(name);
      // Migration from this project's original, unscoped cache names.
      if (/^tracker-pwa-v1\./.test(name)) await caches.delete(name);
    }
    await self.clients.claim();
  })());
});

async function rangeResponse(request, response) {
  const value = request.headers.get('range');
  if (!value) return response;
  const data = await response.arrayBuffer();
  const match = /^bytes=(\d*)-(\d*)$/.exec(value);
  let start, end;
  if (match && (match[1] || match[2])) {
    start = match[1] ? Number(match[1]) : Math.max(0, data.byteLength - Number(match[2]));
    end = match[1] && match[2] ? Math.min(Number(match[2]), data.byteLength - 1) : data.byteLength - 1;
  }
  if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start > end || start >= data.byteLength) {
    return new Response(null, {status: 416, headers: {'Content-Range': 'bytes */' + data.byteLength}});
  }
  const headers = new Headers(response.headers);
  headers.delete('Content-Encoding');
  headers.set('Accept-Ranges', 'bytes');
  headers.set('Content-Range', `bytes ${start}-${end}/${data.byteLength}`);
  headers.set('Content-Length', String(end - start + 1));
  return new Response(data.slice(start, end + 1), {status: 206, headers});
}
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  // Leave external collections, analytics, camera blobs, and other apps alone.
  if (request.method !== 'GET' || url.origin !== scopeURL.origin || !url.pathname.startsWith(scopeURL.pathname)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    let cached = await cache.match(request);
    const canonical = new URL(url); canonical.search = ''; canonical.hash = ''; canonical.pathname = canonical.pathname.replace(/\/{2,}/g, '/');
    if (!cached && assets.has(canonical.href)) cached = await cache.match(canonical.href);
    if (!cached && request.mode === 'navigate' && url.pathname === scopeURL.pathname) cached = await cache.match(new URL('index.html', scopeURL).href);
    if (cached) return rangeResponse(request, cached);
    try {
      const response = await fetch(request);
      if (response.ok && response.status === 200 && !request.headers.has('range')) {
        event.waitUntil(cache.put(request, response.clone()).catch(error => console.warn('[PWA] Runtime cache:', error)));
      }
      return response;
    } catch (error) {
      // Never return HTML for a missing script, video, or distinct launch page.
      if (request.mode === 'navigate') return new Response('This page is not available offline. Reconnect and try again.', {status: 503, headers: {'Content-Type': 'text/plain; charset=utf-8'}});
      throw error;
    }
  })());
});
self.addEventListener('message', event => {
  if (event.data && event.data.action === 'skipWaiting') event.waitUntil(self.skipWaiting());
});
