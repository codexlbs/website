function createStarryBackground() {
  const starsContainer = document.getElementById('stars');
  const numberOfStars = 1000; // Increased number of stars
  
  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    
    // Varied star sizes
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = star.style.width;
    
    // Enhanced star appearance
    const brightness = Math.random() * 0.7 + 0.3;
    star.style.background = `radial-gradient(circle at center, 
      rgba(255,255,255,${brightness}) 0%,
      rgba(255,255,255,${brightness * 0.8}) 50%,
      rgba(255,255,255,0) 100%)`;
    star.style.borderRadius = '50%';
    star.style.opacity = brightness;
    
    // Random animation duration and delay
    const duration = Math.random() * 4 + 2;
    const delay = Math.random() * 4;
    star.style.animation = `twinkle ${duration}s ${delay}s infinite`;
    
    starsContainer.appendChild(star);
  }
}

function handleScroll() {
  const elements = document.querySelectorAll('.animate-fade-up');
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight * 0.8;
    if (isVisible) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  createStarryBackground();
  window.addEventListener('scroll', handleScroll);
  handleScroll();
  
  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Handle redirect for /home route
  document.querySelectorAll('a[href="/home"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const homeSection = document.getElementById('hero');
      if (homeSection) {
        homeSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
