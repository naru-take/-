// v15: Service Worker intentionally disabled.
// This worker removes old caches and unregisters itself.

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map(k => caches.delete(k)));
      await self.registration.unregister();
      const clientsList = await self.clients.matchAll({
        type: "window",
        includeUncontrolled: true
      });
      for (const client of clientsList) {
        client.navigate(client.url);
      }
    } catch (e) {}
  })());
});
