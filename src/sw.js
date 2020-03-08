
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

self.addEventListener('install', (event) => {
  console.log("El service worker ha sido instalado!");
});

self.addEventListener('activate', (e) => {
  console.log('activado');
});

self.addEventListener('message', (e) => {
  if (e.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});