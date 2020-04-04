var urlsToCache = [
    './index.html',
    './styles.css',
    './index.js',
];

self.addEventListener('install', function (event) {
    // install the file when offline
    event.waitUnitl(
        caches.open('offline-form')
            .then(fuction(cache) {
                return cache.addAll(urlsToCache);
            })
            .cache(funtion(error) {
                console.log(error);
            })
    )
});


self.addEventListener('fetch', function (event) {
    //try to resend data to server when back online
    console.log(`Fetch executed: ${event}`);
});