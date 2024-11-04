import $ from "jquery";
import throttle from "lodash/throttle";

export function initSliderEffect() {
  let currentIndex = 0;
  const totalItems = $(".slider-name").length;

  function activateSlider(index) {
    if (index < 0 || index >= totalItems) return; // Verifica que el índice esté dentro de los límites

    $(".slider-name.active").removeClass("active");
    $(".slider-images li.show").removeClass("show");

    // Usa un selector seguro con `eq` para evitar problemas con `:nth-child`
    $(".slider-images li").eq(index).addClass("show");
    $(".slider-name").eq(index).addClass("active");
  }

  // Activa la primera imagen y opción del slider al cargar
  activateSlider(currentIndex);

  $(".slider-name").on("mouseenter", function () {
    currentIndex = $(this).index();
    activateSlider(currentIndex);
  });

  $(window).on(
    "wheel",
    throttle((event) => {
      const scrollTop = $(window).scrollTop();
      if (scrollTop === 0) {
        event.preventDefault();
        currentIndex =
          event.originalEvent.deltaY < 0
            ? (currentIndex - 1 + totalItems) % totalItems
            : (currentIndex + 1) % totalItems;
        activateSlider(currentIndex);
      }
    }, 500)
  );
}
