export function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  
  // Llama a la función al cargar la página y cuando se redimensiona la ventana
  window.addEventListener("resize", setViewportHeight);
  setViewportHeight();
  