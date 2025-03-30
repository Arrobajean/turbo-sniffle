// src/views/home.js
export default function Home() {
  const homeContent = document.createElement("div");
  homeContent.classList.add("home-content");

  // Estructura principal del slider para la página de inicio
  homeContent.innerHTML = `
    <section class="slider">
      <!-- Slider Wrapper -->
      <ul class="slider-wrapper">
        <li class="slider-name">
          <a href="#gallery?filter=masks" class="page-link" data-category="masks" aria-label="View slider about Masks">MASKS</a>
        </li>
        <li class="slider-name">
          <a href="#gallery?filter=sculptures" class="page-link" data-category="sculptures" aria-label="View slider about Sculptures">SCULPTURES</a>
        </li>
        <li class="slider-name">
          <a href="#gallery?filter=collages" class="page-link" data-category="collages" aria-label="View slider about Collages">COLLAGES</a>
        </li>
        <li class="slider-name">
          <a href="#gallery?filter=performance" class="page-link" data-category="performance" aria-label="View slider about Performance">PERFORMANCE</a>
        </li>
      </ul>

   <!-- Slider Images -->
<ul class="slider-images">
  <li>
    <div class="dark-over-hero"></div>
    <div class="img-hero-background">
      <img data-src="showcase-mask" alt="Máscara de Los Diablos en exhibición" />
    </div>
    <div class="slider-title">Los Diablos</div>
  </li>
  <li>
    <div class="dark-over-hero"></div>
    <div class="img-hero-background">
      <img data-src="showcase-sculptures" alt="Jarrón inspirado en la Diabla de Mar" />
    </div>
    <div class="slider-title">Diabla de Mar</div>
  </li>
  <li>
    <div class="dark-over-hero"></div>
    <div class="img-hero-background">
      <img data-src="showcase-collage" alt="Collage artístico titulado Cosmos Fragmentado" />
    </div>
    <div class="slider-title">Cosmos Fragmentado</div>
  </li>
  <li>
    <div class="dark-over-hero"></div>
    <div class="img-hero-background">
      <img data-src="showcase-performance" alt="Performance artística El Cuerpo En Rojo" />
    </div>
    <div class="slider-title">El Cuerpo en Rojo</div>
  </li>
</ul>
  `;

  return homeContent;
}
