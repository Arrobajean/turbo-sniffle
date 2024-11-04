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
            <img data-src="showcase-mask" alt="Mask Showcase" />
          </div>
          <div class="hero-number">01</div>
          <div class="slider-title">Los Diablos</div>
        </li>
        <li>
          <div class="dark-over-hero"></div>
          <div class="img-hero-background">
            <img data-src="showcase-sculptures" alt="Sculptures Showcase" />
          </div>
          <div class="hero-number">02</div>
          <div class="slider-title">Sculptures Showcase</div>
        </li>
        <li>
          <div class="dark-over-hero"></div>
          <div class="img-hero-background">
            <img data-src="showcase-collage" alt="Collage Showcase" />
          </div>
          <div class="hero-number">03</div>
          <div class="slider-title">Collage Showcase</div>
        </li>
        <li>
          <div class="dark-over-hero"></div>
          <div class="img-hero-background">
            <img data-src="showcase-performance" alt="Performance Showcase" />
          </div>
          <div class="hero-number">04</div>
          <div class="slider-title">El Cuerpo En Rojo</div>
        </li>
      </ul>
    </section>
  `;

  return homeContent;
}
