import anandaProfileImg from "@/assets/images/ananda-profile.jpg"; // Importa la imagen con Webpack

export default function About() {
  const aboutContent = document.createElement("div");
  aboutContent.classList.add("about");

  aboutContent.innerHTML = `
    <div class="container-fluid">
      <div class="content-wrapper">
        <!-- Lado izquierdo: Imagen -->
        <div class="artist-image-container">
          <img src="${anandaProfileImg}" alt="Ananda de Sousa" class="artist-image">
        </div>

        <!-- Lado derecho: Título y texto -->
        <div class="about-text">
          <h1>Hi, my name is <span class="highlighted-text">Ananda de Sousa</span></h1>
          <p><strong>Los Teques, 1994</strong> - I'm a Venezuelan multidisciplinary artist based in Madrid.</p>

          <p>
            My work explores phenomena such as migration, the semiotics of color as a political-social and cultural element in Venezuela,
            cultural reappropriation, exodus, and the forms of longing that emerge from these experiences. Through these themes, I seek to
            offer a window to the world, an opportunity to observe realities that, although they appear distant, invite us to establish
            deep emotional bonds that allow us to feel the distant as close as our own home.
          </p>
          
          <p>
            Currently, my artistic practice focuses on the production of high-temperature ceramic sculptures, a discipline that allows me
            to materialize and transmit these reflections in objects that inhabit various spaces. Projects like <em>Los Diablos</em> and
            <em>Ausencias</em> are closely related to my personal journey as a migrant woman, channeling the tensions, absences, and 
            transformations that displacement entails.
          </p>
          
          <p>
            My work is, in essence, a bridge between individual and collective experiences, an invitation to reflect on how art can 
            connect us with others and make us participate in stories from other worlds.
          </p>
        </div>
      </div>
    </div>
  `;

  return aboutContent;
}
