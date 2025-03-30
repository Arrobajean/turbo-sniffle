export function toggleMenu() {
  const menuIcon = document.querySelector(".ham");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuIcon && mobileMenu) {
    menuIcon.classList.toggle("active");
    mobileMenu.classList.toggle("active");

    // Añadir o quitar la clase que desactiva el scroll en el body
    document.body.classList.toggle(
      "no-scroll",
      mobileMenu.classList.contains("active")
    );
  } else {
    console.warn("Menu icon or mobile menu not found in the DOM.");
  }
}

// Función para cerrar el menú al navegar
export function closeMenuOnNavigation() {
  const menuIcon = document.querySelector(".ham");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuIcon && mobileMenu && mobileMenu.classList.contains("active")) {
    // Cierra el menú si está activo
    menuIcon.classList.remove("active");
    mobileMenu.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
}

// Hacer que las funciones sean globales si se necesita
window.toggleMenu = toggleMenu;
window.closeMenuOnNavigation = closeMenuOnNavigation;
