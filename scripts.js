// Parallax Scrolling Effect
window.addEventListener("scroll", function() {
  const heroImage = document.querySelector(".hero-image");
  const scrollY = window.scrollY;
  heroImage.style.transform = `translateY(${scrollY * 0.5}px)`;
});
