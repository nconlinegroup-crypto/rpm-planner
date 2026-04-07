// RPM Planner Service Worker v7 — forces complete cache bust
const CACHE = 'rpm-pwa-v7';

self.addEventListener('install', e => {
  // Skip waiting immediately — don't cache anything on install
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  // Delete ALL old caches
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Always network first — never serve stale cache
  e.respondWith(
    fetch(e.request, { cache: 'no-cache' }).catch(() =>
      caches.match(e.request)
    )
  );
});
