// src/router/router.js
import homeView from "../views/home";
import aboutView from "../views/about";
import galleryView from "../views/gallery";
import contactView from "../views/contact";
import {
  resetBackgroundLoad,
  loadBackgroundImages,
} from "../utils/backgroundLoader";
import { resetCursor, initCursor } from "../utils/cursor";
import { initSliderEffect } from "../utils/slider"; // Importa la función de efecto del slider

const routes = {
  "#home": homeView,
  "#about": aboutView,
  "#gallery": galleryView,
  "#contact": contactView,
};

async function loadView() {
  const content = document.getElementById("views");
  const [hash, queryString] = window.location.hash.split("?");
  const urlParams = new URLSearchParams(queryString);
  const filter = urlParams.get("filter");

  // Reinicia los estados de carga de fondo y cursor al cambiar de vista
  resetBackgroundLoad();
  resetCursor();

  content.innerHTML = "";

  if (routes[hash]) {
    try {
      // Comprueba si la vista es una función asincrónica
      const view = await routes[hash]();
      content.appendChild(view);

      // Ejecuta `loadBackgroundImages`, `initCursor`, y `initSliderEffect` después de cargar la vista home
      if (hash === "#home") {
        loadBackgroundImages();
        initCursor();
        initSliderEffect();
      }

      if (hash === "#gallery" && filter) {
        setTimeout(() => {
          view.applyFilter && view.applyFilter(filter);
        }, 0);
      }
    } catch (error) {
      console.error(`Error al cargar la vista "${hash}":`, error);
    }
  } else {
    console.error(`Ruta "${hash}" no definida.`);
  }
}

export function initRouter() {
  window.addEventListener("hashchange", loadView);
  loadView();
}
