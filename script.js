// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handler
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the data to a server
        console.log({ name, email, message });
        
        // Show success message
        alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
        contactForm.reset();
    });
}
// Back to top button functionality
const backToTopButton = document.createElement('div');
backToTopButton.className = 'back-to-top';
backToTopButton.innerHTML = '<i data-feather="arrow-up"></i>';
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  backToTopButton.classList.remove('pulse');
  setTimeout(() => backToTopButton.classList.add('pulse'), 1000);
});

// Initialize pulse animation
setTimeout(() => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('show', 'pulse');
  }
}, 2000);
let lastScroll = 0;
const navbar = document.querySelector('custom-navbar')?.shadowRoot?.getElementById('navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Show/hide back to top button
  if (currentScroll > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }

  // Hide navbar when scrolling down, show when scrolling up
  if (navbar) {
    if (currentScroll > lastScroll && currentScroll > 100) {
      // Scrolling down
      navbar.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      navbar.style.transform = 'translateY(0)';
    }
    
    if (currentScroll <= 0) {
      navbar.classList.remove('scrolled');
    } else {
      navbar.classList.add('scrolled');
    }
  }

  lastScroll = currentScroll;
});

feather.replace();

// Add gradient animation speed control
document.addEventListener('DOMContentLoaded', () => {
  const gradientElement = document.querySelector('.group-hover\\:opacity-100');
  if (gradientElement) {
    gradientElement.addEventListener('mouseenter', () => {
      gradientElement.style.animationDuration = '1s';
      gradientElement.style.animationDirection = 'alternate';
    });
    gradientElement.addEventListener('mouseleave', () => {
      gradientElement.style.animationDuration = '4s';
      gradientElement.style.animationDirection = 'normal';
    });
  }
});

// Typing animation for title
const typingText = document.querySelector('.typing-text');
const cursor = document.querySelector('.cursor');
const professions = [
    'Desenvolvedor de Sistemas',
    'Gestor de Redes', 
    'Administrador de Servidores',
    'Especialista em Infraestrutura',
    'Arquiteto de Soluções'
];
let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function type() {
    const currentProfession = professions[professionIndex];
    
    if (!isDeleting && charIndex < currentProfession.length) {
        typingText.textContent += currentProfession.charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        typingText.textContent = currentProfession.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(type, typingSpeed / 2);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            professionIndex = (professionIndex + 1) % professions.length;
        }
        setTimeout(type, typingSpeed);
    }
}

// Start typing animation
type();

// Cursor blink animation
setInterval(() => {
    cursor.classList.toggle('opacity-0');
}, 500);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
        }
    });
}, observerOptions);

document.querySelectorAll('#about, #projects, #contact').forEach(section => {
    observer.observe(section);
});