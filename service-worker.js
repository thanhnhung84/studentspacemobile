const CACHE_NAME = "vocab-pwa-v1";

const ASSETS = [
  "./",
  "./Matchinglop2/Matchl2u1.html",
  "./Matchinglop2/manifest.json",
  "./Matchinglop2/service-worker.js",

  "./correctsound.mp3",
  "./error sound.mp3",

  "./Flashcards/IM15.png",
  "./Flashcards/IM16.png",
  "./Flashcards/IM17.png",
  "./Flashcards/IM18.png",
  "./Flashcards/IM19.png",
  "./Flashcards/IM20.png",
  "./Flashcards/IM21.png",
  "./Flashcards/IM22.png",
  "./Flashcards/IM23.png",
  "./Flashcards/IM24.png",
  "./Flashcards/IM25.png",
  "./Flashcards/IM26.png",
  "./Flashcards/IM27.png",
  "./Flashcards/IM28.png",
  "./Flashcards/IM29.png",
  "./Flashcards/IM30.png",
  "./Flashcards/IM31.png",
  "./Flashcards/IM32.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
