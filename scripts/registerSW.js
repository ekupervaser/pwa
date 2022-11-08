if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../serviceworker.js').then((message)=> {
        console.log('El Service Worker está listo');
    })
} else {
    console.log('El Service Worker no está soportado en este navegador.');
}