// src/utils/cursor.js

let isCursorInitialized = false;

export function initCursor() {
  if (!isCursorInitialized) {
    waitForElements(["#cursor", "#cursor2", "#cursor3"], (cursorElements) => {
      console.log("Cursor elements found in the DOM.");

      const [cursor, cursor2, cursor3] = cursorElements;

      document.body.addEventListener("mousemove", (event) => {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
        cursor2.style.left = `${event.clientX}px`;
        cursor2.style.top = `${event.clientY}px`;
        cursor3.style.left = `${event.clientX}px`;
        cursor3.style.top = `${event.clientY}px`;
      });

      cursorElements.forEach((el) => el.classList.add("cursor-initialized"));

      isCursorInitialized = true;
    });
  }
}

// Función para esperar los elementos en el DOM
function waitForElements(selectors, callback) {
  const elements = selectors.map((selector) =>
    document.querySelector(selector)
  );
  if (elements.every((el) => el !== null)) {
    callback(elements);
  } else {
    setTimeout(() => waitForElements(selectors, callback), 100);
  }
}

// Resetea la inicialización del cursor al cambiar de vista
export function resetCursor() {
  console.log("Reseteando isCursorInitialized a false");
  isCursorInitialized = false;
}
