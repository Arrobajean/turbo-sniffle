import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";

export function initGalleryFilter({ firstLoad = false } = {}) {
  const gridElement = document.querySelector(".grid");

  if (!gridElement) {
    console.error("Gallery element not found.");
    return;
  }

  imagesLoaded(gridElement, { background: true }, () => {
    const iso = new Isotope(gridElement, {
      itemSelector: "article",
      layoutMode: "masonry",
      transitionDuration: firstLoad ? "0s" : "0.4s",
      percentPosition: true,
    });

    // Obtiene el filtro inicial desde la URL y aplica formato correcto
    const urlParams = new URLSearchParams(window.location.hash.split("?")[1]);
    let initialFilter = urlParams.get("filter") || "*";
    if (initialFilter !== "*" && !initialFilter.startsWith(".")) {
      initialFilter = `.${initialFilter}`; // Asegura que el filtro tenga el punto
    }

    iso.arrange({
      filter: initialFilter,
    });

    // Configura los botones de filtro
    const filterButtons = document.querySelectorAll(
      ".filters-button-group button"
    );

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filterValue = button.getAttribute("data-filter");
        iso.arrange({ filter: filterValue });

        // Remueve 'is-checked' de todos los botones y luego agrega al seleccionado
        filterButtons.forEach((btn) => btn.classList.remove("is-checked"));
        button.classList.add("is-checked");

        // Actualiza el URL con el filtro correcto
        const newUrl = `${window.location.pathname}#gallery?filter=${filterValue}`;
        window.history.replaceState(null, "", newUrl);
      });
    });

    setTimeout(() => iso.layout(), 500);
  });
}
