class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: rgba(17, 24, 39, 0.9);
          color: white;
          padding: 2.5rem 1rem;
          text-align: center;
          margin-top: auto;
          border-top: 1px solid rgba(59, 130, 246, 0.1);
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-links a:hover {
          color: #3b82f6;
        }
        .copyright {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.9rem;
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin: 1.5rem 0;
        }
        .social-links a {
          color: white;
          background: rgba(255, 255, 255, 0.1);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .social-links a:hover {
          background: #3b82f6;
          transform: translateY(-3px);
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-links">
             <a href="#hero" class="nav-link active">Início</a>
          <a href="#about" class="nav-link">Sobre</a>
          <a href="#formacoes" class="nav-link">Formações</a>
          <a href="#projects" class="nav-link">Projetos</a>
          <a href="#galeria" class="nav-link">Galeria</a>
          <a href="#contact" class="nav-link">Contato</a>
          </div>
          <div class="social-links">
            <a href="#"><i data-feather="github"></i></a>
            <a href="#"><i data-feather="linkedin"></i></a>
            <a href="#"><i data-feather="twitter"></i></a>
            <a href="#"><i data-feather="mail"></i></a>
          </div>
          <p class="copyright">&copy; ${new Date().getFullYear()} Euro-Tecno HUB. Todos os direitos reservados.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);