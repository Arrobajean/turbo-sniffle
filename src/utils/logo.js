// src/utils/logo.js
import logoImage from "../assets/ui/logo.png";

export function setLogo() {
  const logoElement = document.querySelector(".logo-img");
  if (logoElement) {
    logoElement.src = logoImage;
  } else {
    console.warn("Elemento de logo no encontrado en el DOM.");
  }
}
