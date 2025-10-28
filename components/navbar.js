class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: rgba(17, 24, 39, 0.9);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
align-items: center;
          gap: 3rem;
          backdrop-filter: blur(16px);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          border-bottom: 1px solid rgba(59, 130, 246, 0.2);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }
nav.scrolled {
          padding: 0.75rem 2rem;
          background: rgba(17, 24, 39, 0.95);
          border-bottom: 1px solid rgba(59, 130, 246, 0.3);
          transition: transform 0.3s ease, padding 0.3s ease, background 0.3s ease;
        }
.logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo-icon {
          width: 24px;
          height: 24px;
          background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
.nav-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 500;
          padding: 0.5rem 0;
          position: relative;
        }

        .nav-link:hover {
          color: #3b82f6;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #3b82f6;
          transition: width 0.3s ease, opacity 0.3s ease;
          opacity: 0;
        }

        .nav-link:hover::before {
          width: 100%;
          opacity: 1;
        }

        .nav-link.active {
          color: #3b82f6;
        }

        .nav-link.active::before {
          width: 100%;
          opacity: 1;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 0.25rem;
          transition: background-color 0.3s ease;
        }

        .mobile-menu-btn:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .mobile-menu-btn i {
          width: 24px;
          height: 24px;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(17, 24, 39, 0.98);
            padding: 1rem 2rem;
            border-bottom: 1px solid rgba(59, 130, 246, 0.3);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }

          .nav-links.active {
            display: flex;
            animation: slideDown 0.3s ease-out;
          }

          .nav-link {
            padding: 0.75rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }

          .nav-link:last-child {
            border-bottom: none;
          }

          .mobile-menu-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
</style>
      <nav id="navbar">
        <div class="logo">
          <div class="logo-icon"></div>
          Euro-Tecno HUB
        </div>
        <button class="mobile-menu-btn" id="menuBtn" aria-label="Menu">
          <i data-feather="menu"></i>
        </button>
        <div class="nav-links" id="navLinks">
          <a href="#hero" class="nav-link active">Início</a>
          <a href="#about" class="nav-link">Sobre</a>
          <a href="#formacoes" class="nav-link">Formações</a>
          <a href="#projects" class="nav-link">Projetos</a>
          <a href="#galeria" class="nav-link">Galeria</a>
          <a href="#contact" class="nav-link">Contato</a>
        </div>
      </nav>
`;
  }
}

customElements.define('custom-navbar', CustomNavbar);
// Initialize navbar functionality after component is loaded
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('custom-navbar')?.shadowRoot?.getElementById('navbar');
  const menuBtn = document.querySelector('custom-navbar')?.shadowRoot?.getElementById('menuBtn');
  const navLinks = document.querySelector('custom-navbar')?.shadowRoot?.getElementById('navLinks');
  const navItems = document.querySelector('custom-navbar')?.shadowRoot?.querySelectorAll('.nav-link');

  // Mobile menu toggle
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      feather.replace();
    });
  }

  // Close mobile menu when clicking a link
  if (navItems) {
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.classList.remove('active');
        }
      });
    });
  }

  // Scroll effect for navbar
  if (navbar) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll <= 0) {
        navbar.classList.remove('scrolled');
        return;
      }

      if (currentScroll > lastScroll) {
        // Scrolling down
        navbar.classList.add('scrolled');
      } else {
        // Scrolling up
        navbar.classList.add('scrolled');
      }

      lastScroll = currentScroll;
    });

    // Highlight active section
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 300) {
          current = section.getAttribute('id');
        }
      });

      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
          item.classList.add('active');
        }
      });
    });
  }
});
