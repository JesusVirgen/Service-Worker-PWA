const cacheName = 'apv-v1';
const files = [
    '/',
    '/index.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js'
];

self.addEventListener('install', e => {
    console.log('Service worker instalado');

    e.waitUntil(
        caches.open(cacheName)
            .then( cache => {
                console.log('cache')
                cache.addAll(files)
            })
    )
});

self.addEventListener('activate', e => {
    console.log('service worker activado');

    console.log(e)
});

self.addEventListener('fetch', e => {
    console.log('Fetch...', e);
})