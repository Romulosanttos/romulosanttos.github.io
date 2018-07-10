//Add this below content to your HTML page, or add the js file to your page at the very top to register service worker
if (navigator.serviceWorker.controller) {
  // console.log('[RS Builder] active service worker found, no need to register')
} else {

//registrando
  navigator.serviceWorker
      .register('./serviceWorker/rsbuilder-sw.js')
      .then(function(reg) {
        // console.log('Service worker has been registered for scope:'+ reg.scope);
      });
}

