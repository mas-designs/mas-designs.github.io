const pageCache = 'mas-cache';
const filesToCache = [
    'css/page.css',        
    'fonts/BebasNeue.otf',    
    'img/logo.png',
    'index.html'    
];
self.addEventListener('install', function(event) {
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
        caches.open(pageCache)
            .then(function(cache) {
                return cache.addAll(filesToCache);
            }).catch((error)=> console.log('caches open: ',error))
    );
});
