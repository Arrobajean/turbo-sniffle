import { initGalleryFilter } from "../utils/galleryFilter";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";

// Función para cargar todas las imágenes de una carpeta específica
function importAll(r) {
  return r.keys().map(r);
}

// Carga todas las imágenes en las diferentes carpetas
const imagesByCategory = {
  masks: importAll(require.context("../assets/gallery/masks", false, /\.(png|jpe?g|svg)$/)),
  sculptures: importAll(require.context("../assets/gallery/sculptures", false, /\.(png|jpe?g|svg)$/)),
  collages: importAll(require.context("../assets/gallery/collage", false, /\.(png|jpe?g|svg)$/)),
  performance: importAll(require.context("../assets/gallery/perfomance", false, /\.(png|jpe?g|svg)$/)),
};

// Función para generar el HTML de las imágenes de cada categoría
function generateCategoryHTML(category, images) {
  return images
    .map(
      (image, index) => `
        <article class="${category}">
          <a href="${image}" class="glightbox" data-gallery="gallery">
            <img src="${image}" alt="${category} ${index + 1}" class="img-responsive" />
          </a>
        </article>
      `
    )
    .join("");
}

export default async function Gallery() {
  // Genera el contenido de la galería fuera del DOM
  const galleryContent = document.createElement("div");
  galleryContent.classList.add("gallery-content");

  galleryContent.innerHTML = `
    <div class="button-group filters-button-group">
      <button class="button is-checked" data-filter="*">ALL</button>
      <button class="button" data-filter=".masks">MASKS</button>
      <button class="button" data-filter=".sculptures">SCULPTURES</button>
      <button class="button" data-filter=".collages">COLLAGES</button>
      <button class="button" data-filter=".performance">PERFORMANCE</button>
    </div>

    <section id="grid-container" class="grid">
      ${Object.entries(imagesByCategory)
        .map(([category, images]) => generateCategoryHTML(category, images))
        .join("")}
    </section>
  `;

  // Inserta el contenido de la galería en el DOM una vez esté listo
  document.getElementById("views").appendChild(galleryContent);

  // Configura Isotope y GLightbox después de que el contenido esté listo
  setTimeout(() => {
    // Desactiva transición inicial para Isotope
    initGalleryFilter({ firstLoad: true });

    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      zoomable: true,
    });

    // Activa la transición después de la primera carga
    setTimeout(() => {
      initGalleryFilter({ firstLoad: false });
    }, 500); // Ajusta el tiempo si es necesario
  }, 0);

  return galleryContent;
}
