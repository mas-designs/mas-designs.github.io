const pageCache = 'mas-cache';
const filesToCache = [
    'css/github.css',
    'fonts/BebasNeue.otf',    
    'img/logo.png',
    'index.html',
    '/',
    '/sw.js'
];
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(pageCache)
            .then(function(cache) {
                return cache.addAll(filesToCache);
            })
    );
});
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});