  document.addEventListener('DOMContentLoaded', function() {
    const scrollDown = document.querySelector('.scroll-down');
    let isScrolling = false;
    let scrollTimer;

    // Hide when scrolling starts
    window.addEventListener('scroll', function() {
      if (!isScrolling) {
        isScrolling = true;
        scrollDown.classList.add('hide');
      }
      
      // Clear any existing timeout
      clearTimeout(scrollTimer);
      
      // Show again if user returns to top
      scrollTimer = setTimeout(function() {
        if (window.pageYOffset === 0) {
          isScrolling = false;
          scrollDown.classList.remove('hide');
        }
      }, 100);
    });

    // Optional: Smooth scroll when clicked
    scrollDown.addEventListener('click', function() {
      window.scrollBy({
        top: window.innerHeight - 100,
        behavior: 'smooth'
      });
    });
  });

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            } else {
              entry.target.classList.remove('visible'); // Re-trigger on scroll up
            }
          });
        }, {
          threshold: 0.1
        });
    
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
          observer.observe(el);
        });
    
    
    
      // Particle Config
      const canvas = document.getElementById("particles-canvas");
      const ctx = canvas.getContext("2d");
    
      let particlesArray = [];
      const colors = ["#ff00ff", "#00ffff", "#ffffff"];
    
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    
      window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    
      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 2 + 1;
          this.speedX = (Math.random() - 0.5) * 0.7;
          this.speedY = (Math.random() - 0.5) * 0.7;
          this.color = colors[Math.floor(Math.random() * colors.length)];
        }
    
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
    
          if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
          if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
    
        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 10;
          ctx.fill();
        }
      }
    
      function initParticles(count) {
        particlesArray = [];
        for (let i = 0; i < count; i++) {
          particlesArray.push(new Particle());
        }
      }
    
      function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particlesArray.forEach(particle => {
          particle.update();
          particle.draw();
        });
        requestAnimationFrame(animateParticles);
      }
    
      initParticles(80);
      animateParticles();
    
    
    
      const particleContainer = document.querySelector('.particle-container');
    
      for (let i = 0; i < 60; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
    
        // Random size between 4px and 12px
        const size = Math.random() * 8 + 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
    
        // Random horizontal position
        particle.style.left = `${Math.random() * 100}%`;
    
        // Random animation duration between 5s and 15s
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
    
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 10}s`;
    
        // Optional: Vary opacity a bit
        particle.style.opacity = (Math.random() * 0.4 + 0.4).toFixed(2);
    
        particleContainer.appendChild(particle);
      }