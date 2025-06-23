self.addEventListener('install', event => {
  console.log('[SW] Instalado');
  event.waitUntil(
    caches.open('static-v1').then(cache => {
      return cache.addAll([
        'index.html',
        'tasas.html',
        'contacto.html',
        'servicios.html',
        'ubicacion.html',
        'css/estilos.css',
        'js/app.js',
        'img/logo.png'
      ]);
    })
  );
});

self.addEventListener('activate', event => {
  console.log('[SW] Activado');
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
