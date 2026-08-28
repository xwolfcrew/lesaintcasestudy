document.addEventListener("DOMContentLoaded", () => {
  const absoluteImages = document.querySelectorAll(".absolute-image");
  const parallaxSpeed = 0.15;

  let ticking = false;

  function updateParallax() {
    const windowHeight = window.innerHeight;

    absoluteImages.forEach((image) => {
      const rect = image.getBoundingClientRect();

      if (rect.top < windowHeight && rect.bottom > 0) {
        const translateY = (rect.top - windowHeight / 2) * parallaxSpeed;

        image.style.transform = `translate3d(0, ${translateY}px, 0)`;
      }
    });

    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  });

  updateParallax();
});
