// src/utils/generateCategoryHTML.js
export default function generateCategoryHTML(category, images) {
    return images
    .map(
        (image, index) => `
          <article class="${category}">
            <a href="${image}" class="glightbox" data-gallery="gallery">
              <img src="${image}" alt="${category} ${index + 1}" class="img-responsive lazy-image" loading="lazy" />
            </a>
          </article>
        `
      )
      .join("");
  }



