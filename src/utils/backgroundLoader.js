// src/utils/backgroundLoader.js
import showcaseMask from "../assets/ui/showcase-mask.jpg";
import showcaseSculptures from "../assets/ui/showcase-sculptures.jpg";
import showcaseSculpturesMobile from "../assets/ui/showcase-Sculptures-mobile.jpg";
import showcaseCollage from "../assets/ui/showcase-collage.jpg";
import showcasePerformance from "../assets/ui/showcase-perfomance.jpg";
import showcasePerformanceMobile from "../assets/ui/showcase-perfomance-mobile.jpg";

let isBackgroundLoaded = false;

function waitForElements(selector, callback) {
  const elements = document.querySelectorAll(selector);
  if (elements.length > 0) {
    callback(elements);
  } else {
    setTimeout(() => waitForElements(selector, callback), 100);
  }
}

export function loadBackgroundImages() {
  console.log("Ejecutando loadBackgroundImages");

  if (!isBackgroundLoaded) {
    waitForElements(".img-hero-background img", (imgHeroBackgrounds) => {
      const mobileQuery = window.matchMedia("(max-width: 767px)");

      console.log("Imágenes importadas:", {
        showcaseMask,
        showcaseSculptures,
        showcaseSculpturesMobile,
        showcaseCollage,
        showcasePerformance,
        showcasePerformanceMobile,
      });

      function updateImages(isMobile) {
        const images = {
          "showcase-mask": showcaseMask,
          "showcase-sculptures": isMobile
            ? showcaseSculpturesMobile
            : showcaseSculptures,
          "showcase-collage": showcaseCollage,
          "showcase-performance": isMobile
            ? showcasePerformanceMobile
            : showcasePerformance,
        };

        imgHeroBackgrounds.forEach((img) => {
          const imageName = img.getAttribute("data-src");
          console.log(`Asignando imagen para ${imageName}`);

          if (images[imageName]) {
            img.src = images[imageName];
            console.log(`Imagen asignada: ${img.src}`);
          } else {
            console.warn(`No se encontró una imagen para ${imageName}`);
          }
        });
      }

      // Establece una imagen por defecto al cargar `home`
      function setDefaultImage() {
        if (imgHeroBackgrounds.length > 0) {
          const firstImage = imgHeroBackgrounds[0];
          firstImage.classList.add("active"); // Clase para mostrar la imagen por defecto
          firstImage.src = showcaseMask; // Asegura que showcaseMask esté visible por defecto
          console.log("Imagen por defecto asignada a showcase-mask.");
        }
      }

      // Actualiza las imágenes en función del tamaño de pantalla
      updateImages(mobileQuery.matches);
      setDefaultImage();

      // Actualiza las imágenes al cambiar el tamaño de pantalla
      mobileQuery.addEventListener("change", (e) => updateImages(e.matches));

      isBackgroundLoaded = true;
    });
  }
}

export function resetBackgroundLoad() {
  console.log("Reseteando isBackgroundLoaded a false");
  isBackgroundLoaded = false;
}
