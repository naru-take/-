// v23 - no persistent cache
self.addEventListener('install',()=>self.skipWaiting());self.addEventListener('activate',e=>e.waitUntil(self.registration.unregister()));
