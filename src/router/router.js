import { gsap } from "gsap";
import homeView from "../views/home";
import aboutView from "../views/about";
import galleryView from "../views/gallery";
import contactView from "../views/contact";
import {
  resetBackgroundLoad,
  loadBackgroundImages,
} from "../utils/backgroundLoader";
import { resetCursor, initCursor } from "../utils/cursor";
import { initSliderEffect } from "../utils/slider";
import { closeMenuOnNavigation } from "../utils/menu";

// Definición de rutas
const routes = {
  "#home": homeView,
  "#about": aboutView,
  "#gallery": galleryView,
  "#contact": contactView,
};

const content = document.getElementById("views");

async function pageTransition(destPath) {
  await gsap
    .timeline()
    .to(content, { duration: 0.5, opacity: 0 }) // Transición de salida
    .add(async () => {
      content.innerHTML = ""; // Limpia el contenido actual

      // Carga la nueva vista
      const view = await routes[destPath]?.();
      if (view) {
        content.appendChild(view);
      }

      // Ejecuta funciones específicas solo para la vista de inicio
      if (destPath === "#home") {
        loadBackgroundImages();
        initCursor();
        initSliderEffect();
      }
    })
    .to(content, { duration: 0.5, opacity: 1 }); // Transición de entrada
}

async function loadView() {
  const [hash, queryString] = window.location.hash.split("?");
  const urlParams = new URLSearchParams(queryString);
  const filter = urlParams.get("filter");

  // Actualiza el filtro en formato correcto para `Gallery.js`
  const formattedFilter = filter ? `.${filter.replace(".", "")}` : "*";

  // Resetear estados para cada vista
  resetBackgroundLoad();
  resetCursor();
  closeMenuOnNavigation();

  // Verifica si la ruta existe y ejecuta la transición
  if (routes[hash]) {
    await pageTransition(hash);
    if (hash === "#gallery" && filter) {
      setTimeout(() => {
        const view = routes[hash];
        view.applyFilter && view.applyFilter(formattedFilter);
      }, 0);
    }
  } else {
    console.error(`Ruta "${hash}" no definida.`);
  }
}

// Inicializar el enrutador y cargar la vista inicial
export function initRouter() {
  window.addEventListener("hashchange", loadView);

  // Cargar la vista inicial (incluye función para rutas sin hash)
  if (!window.location.hash) {
    window.location.hash = "#home";
  }
  loadView();
}
