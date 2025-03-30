import { initGalleryFilter } from "../utils/galleryFilter";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import imagesByCategory from "../utils/loadImages";
import generateCategoryHTML from "../utils/generateCategoryHTML";
import updateDescription from "../utils/updateDescription";

// Función para crear el contenedor de botones de filtro
function createFilterButtons() {
  return `
    <div class="button-group filters-button-group">
      <button class="button is-checked" data-filter="*">ALL</button>
      <button class="button" data-filter=".masks">MASKS</button>
      <button class="button" data-filter=".sculptures">SCULPTURES</button>
      <button class="button" data-filter=".collages">COLLAGES</button>
      <button class="button" data-filter=".performance">PERFORMANCE</button>
    </div>
  `;
}

// Función principal para inicializar la galería
export default async function Gallery() {
  const galleryContent = document.createElement("div");
  galleryContent.classList.add("gallery-content");

  galleryContent.innerHTML = `
    ${createFilterButtons()}
    <div class="description-container container-fluid hidden"></div>
    <section id="grid-container" class="grid">
      ${Object.entries(imagesByCategory)
        .map(([category, images]) => generateCategoryHTML(category, images))
        .join("")}
    </section>
  `;

  document.getElementById("views").appendChild(galleryContent);

  const descriptionContainer = galleryContent.querySelector(
    ".description-container"
  );

  setTimeout(() => {
    initGalleryFilter({ firstLoad: true });

    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      zoomable: true,
    });

    // Configura el evento de clic en los botones de filtro para actualizar la descripción
    const filterButtons = document.querySelectorAll(
      ".filters-button-group button"
    );
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filterValue = button.getAttribute("data-filter");
        updateDescription(filterValue, descriptionContainer);
      });
    });

    // Activa la descripción inicial en función del filtro de la URL si está presente
    const urlParams = new URLSearchParams(window.location.hash.split("?")[1]);
    const initialFilter = urlParams.get("filter") || "*";
    updateDescription(initialFilter, descriptionContainer);

    // Activa la transición después de la primera carga
    setTimeout(() => {
      initGalleryFilter({ firstLoad: false });
    }, 500);
  }, 0);

  return galleryContent;
}
