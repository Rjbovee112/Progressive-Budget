const filesToCache = [
    'index.html',
    'styles.css',
    'index.js',
    'serviceWorker.js'
];

const cacheName = 'myCache';

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName)
            .then(function (cache) {
                return cache.addAll(filesToCache)
            })
            .catch(function (error) {
                console.error(error);
            })
    )
});


//This runs every time the fetch function is called in our project
self.addEventListener('fetch', function (event) {
    if (event.request.clone(), method == 'POST') {

        //detect if we are offline
        fetch(event.request.clone()).catch(function (error) {
            //save the information about our request 
            //so that we can resend the data to the server when we are back online
        });
    }
});