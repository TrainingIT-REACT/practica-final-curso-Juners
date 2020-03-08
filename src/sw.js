self.addEventListener('install', (event) => {
  console.log("El service worker ha sido instalado!");
});

self.addEventListener('message', (e) => {
  if (e.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});