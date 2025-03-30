export function toggleHeaderOnScroll() {
  const header = document.querySelector(".navigation-bar");
  const logo = document.querySelector(".logo");
  const hamburgerMenu = document.querySelector(".ham");
  
  const isMobile = window.innerWidth <= 750;

  if (isMobile) {
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        header.classList.remove("hidden");
        logo.classList.remove("hidden");
        hamburgerMenu.classList.remove("hidden");
      } else {
        header.classList.add("hidden");
        logo.classList.add("hidden");
        hamburgerMenu.classList.add("hidden");
      }
    });
  } else {
    header.classList.remove("hidden");
    logo.classList.remove("hidden");
    hamburgerMenu.classList.remove("hidden");
  }
}
