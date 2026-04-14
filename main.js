const revealTargets = document.querySelectorAll('[data-reveal]');
const yearNode = document.querySelector('.footer-year');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add a small delay based on order if multiple items intersect at once
          setTimeout(() => {
            entry.target.classList.add('is-revealed');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  revealTargets.forEach((node) => observer.observe(node));
} else {
  revealTargets.forEach((node) => node.classList.add('is-revealed'));
}

// Subtle parallax for background elements.
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;

  const clouds = document.querySelectorAll('.cloud');
  clouds.forEach((cloud, index) => {
    const speed = (index + 1) * 0.15;
    cloud.style.transform = `translateY(${scrolled * speed}px)`;
  });

  const hills = document.querySelectorAll('.hill');
  if (hills[0]) hills[0].style.transform = `translateY(${scrolled * 0.1}px) scaleY(0.82)`;
  if (hills[1]) hills[1].style.transform = `translateY(${scrolled * 0.05}px)`;
});
