// v17 - no persistent service worker
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",event=>event.waitUntil((async()=>{try{for(const k of await caches.keys())await caches.delete(k);await self.registration.unregister();}catch(e){}})()));
