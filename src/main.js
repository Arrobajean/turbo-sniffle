import "./styles/main.scss";
import { initRouter } from "./router/router";
import { loadBackgroundImages } from "./utils/backgroundLoader";
import { initCursor } from "./utils/cursor";
import { initSliderEffect } from "./utils/slider";
import { toggleMenu } from "./utils/menu";
import { setLogo } from "./utils/logo";
import { toggleHeaderOnScroll } from "./utils/headerVisibilityToggle";

import { setViewportHeight } from "./utils/setViewportHeight"; // Importa la función

document.addEventListener("DOMContentLoaded", () => {
  setViewportHeight(); // Ejecuta la función para ajustar el viewport
  initRouter();
  loadBackgroundImages();
  initCursor();
  initSliderEffect();
  setLogo();
  toggleHeaderOnScroll();
});
