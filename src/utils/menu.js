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

// Hacer que la función sea global
window.toggleMenu = toggleMenu;
