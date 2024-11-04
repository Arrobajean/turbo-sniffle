import "./styles/main.scss";
import { initRouter } from "./router/router";
import { loadBackgroundImages } from "./utils/backgroundLoader";
import { initCursor } from "./utils/cursor";
import { initSliderEffect } from "./utils/slider";
import { toggleMenu } from "./utils/menu";
import { setLogo } from "./utils/logo";
import { headerVisibilityToggle } from "./utils/headerVisibilityToggle";


document.addEventListener("DOMContentLoaded", () => {
  initRouter(); // Inicializa el enrutador
  loadBackgroundImages(); // Carga las imágenes de fondo
  initCursor(); // Inicia el efecto del cursor
  initSliderEffect(); // Inicia el efecto del slider
  setLogo(); // Configura el logo
  headerVisibilityToggle(); // Llama a la función para el efecto de visibilidad del header
});
