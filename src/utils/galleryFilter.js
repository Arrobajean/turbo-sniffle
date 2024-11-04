import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";

export function initGalleryFilter({ firstLoad = false } = {}) {
  const gridElement = document.querySelector(".grid");

  if (!gridElement) {
    console.error("Elemento de galería no encontrado.");
    return;
  }

  imagesLoaded(gridElement, { background: true }, () => {
    const iso = new Isotope(gridElement, {
      itemSelector: "article",
      layoutMode: "masonry",
      transitionDuration: firstLoad ? "0s" : "0.4s", // Desactiva la transición en la primera carga
      percentPosition: true,
    });

    const urlParams = new URLSearchParams(window.location.hash.split("?")[1]);
    const initialFilter = urlParams.get("filter") || "*";
    iso.arrange({
      filter: initialFilter === "*" ? "*" : `.${initialFilter}`,
    });

    // Configura el filtrado al hacer clic en los botones de categoría
    const filterButtons = document.querySelectorAll(
      ".filters-button-group button"
    );
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filterValue = button.getAttribute("data-filter");
        iso.arrange({ filter: filterValue });

        filterButtons.forEach((btn) => btn.classList.remove("is-checked"));
        button.classList.add("is-checked");
      });
    });

    setTimeout(() => iso.layout(), 500); // Fuerza layout adicional para asegurar el orden
  });
}
