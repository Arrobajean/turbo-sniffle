import updateDescription from "./updateDescription";

export default function setupFilterButtons(descriptionContainer) {
  // Genera el HTML de los botones de filtro
  const filterButtonsHTML = `
    <div class="button-group filters-button-group">
      <button class="button is-checked" data-filter="*">ALL</button>
      <button class="button" data-filter=".masks">MASKS</button>
      <button class="button" data-filter=".sculptures">SCULPTURES</button>
      <button class="button" data-filter=".collages">COLLAGES</button>
      <button class="button" data-filter=".performance">PERFORMANCE</button>
    </div>
  `;

  // Inserta el HTML de los botones de filtro
  const container = document.createElement("div");
  container.innerHTML = filterButtonsHTML;
  const filterButtonsContainer = container.firstElementChild;

  // Agrega eventos de clic a cada botón para actualizar la descripción y el estado del botón activo
  const filterButtons = filterButtonsContainer.querySelectorAll("button");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterValue = button.getAttribute("data-filter");
      updateDescription(filterValue, descriptionContainer);

      // Actualiza el estilo del botón seleccionado
      filterButtons.forEach((btn) => btn.classList.remove("is-checked"));
      button.classList.add("is-checked");
    });
  });

  return filterButtonsContainer;
}
