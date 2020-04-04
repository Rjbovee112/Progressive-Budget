let datab;

const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function (event) {
    const datab = event.target.result;
    datab.createObjectStore("pending", { autoIncrement: true });
};

request.onsuccess = function (event) {
    datab = event.target.result;
    if (navigator.onLine) {
        checkDatabase();
    }
};

request.onerror = function (event) {
    console.log("Nope! " + event.target.errorCode);
};