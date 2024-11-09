function createEnhancedStars() {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 200; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.width = `${Math.random() * 3}px`;
      star.style.height = star.style.width;
      star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
      starsContainer.appendChild(star);
    }
  }

  // Initialize
  createEnhancedStars();

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
