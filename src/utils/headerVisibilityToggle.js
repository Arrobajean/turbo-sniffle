let lastScrollTop = 0;
const header = document.querySelector(".navigation-bar");
const logo = document.querySelector(".logo");
const hamburgerMenu = document.querySelector(".ham"); // Selecciona el menú hamburguesa

export function headerVisibilityToggle() {
  // Aplica una transición de posición para el header, logo y menú hamburguesa
  header.style.transition = "top 0.3s ease";
  logo.style.transition = "top 0.3s ease";
  hamburgerMenu.style.transition = "top 0.3s ease"; // Transición suave para el menú hamburguesa

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scroll hacia abajo, oculta el header, el logo y el menú hamburguesa
      header.style.top = "-80px";
      logo.style.top = "-90px";
      hamburgerMenu.style.top = "-90px"; // Oculta el menú hamburguesa de la misma manera que el header y el logo
    } else {
      // Scroll hacia arriba, muestra el header, el logo y el menú hamburguesa
      header.style.top = "0";
      logo.style.top = "0";
      hamburgerMenu.style.top = "10px"; // Ajusta la posición del menú hamburguesa
    }

    lastScrollTop = scrollTop;
  });
}
