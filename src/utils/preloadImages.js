// src/utils/preloadImages.js
export default async function preloadImages(images) {
  return Promise.all(
    images.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
        })
    )
  );
}
