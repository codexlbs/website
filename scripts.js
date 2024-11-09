<script>
function createStarryBackground() {
  const starsContainer = document.getElementById('stars');
  const numberOfStars = 50; // Changed to 50 stars
  
  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    
    const size = Math.random() * 4 + 1;
    star.style.width = `${size}px`;
    star.style.height = star.style.width;
    
    const brightness = Math.random() * 0.7 + 0.3;
    star.style.background = `radial-gradient(circle at center, 
      rgba(255,255,255,${brightness}) 0%,
      rgba(255,255,255,${brightness * 0.8}) 50%,
      rgba(255,255,255,0) 100%)`;
    star.style.borderRadius = '50%';
    star.style.opacity = brightness;
    
    const duration = Math.random() * 4 + 2;
    const delay = Math.random() * 4;
    star.style.animation = `twinkle ${duration}s ${delay}s infinite`;
    
    starsContainer.appendChild(star);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  createStarryBackground();
});
</script>
