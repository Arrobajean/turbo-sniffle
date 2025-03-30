export default function Contact() {
  const contactContent = document.createElement("div");
  contactContent.classList.add("about"); // Utilizamos la misma clase para heredar los estilos de "About"

  contactContent.innerHTML = `
    <div class="container-fluid">
    
      <h1>Dear Watcher,</h1>

      <p>
        If you feel somehow inspired by my work, I wholeheartedly encourage you to reach out regarding the availability of the pieces or any other inquiries you may have. Your time spent viewing a piece of my world means so much, and I am always open to discuss and share more about these creations.
      </p>

      <p>
        Many of these pieces carry a purpose beyond art; they donate part of their value to non-governmental organizations actively working in Venezuela and Palestine. Each purchase not only supports the art but also contributes individually to these causes, helping create a positive impact in communities that are dear to my heart.
      </p>

      <p>
        Thank you for your time, your heart, and your interest. I look forward to connecting with you and exploring how my work can become a meaningful part of your life.
      </p>

      <h6>Feel free to reach out at:</h6>

      <div class="social-buttons">
        <a href="https://x.com/tu_usuario" class="social-button social-button--twitter" aria-label="X (Twitter)" target="_blank">
          <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://www.instagram.com/anandadesov" class="social-button social-button--instagram" aria-label="Instagram" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="mailto:anandadesousa@gmail.com" class="social-button social-button--mail" aria-label="Mail">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
      
    </div>
  `;

  return contactContent;
}
