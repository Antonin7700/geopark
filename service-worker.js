self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('geopark-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        // Ajoutez d'autres ressources nécessaires ici
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
