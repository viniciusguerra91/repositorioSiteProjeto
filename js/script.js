document.addEventListener("DOMContentLoaded", () => {
  //
  const menuResponsivo = document.getElementById("menuResponsivo");
  const navMenu = document.getElementById("nav-menu");
  // Abre e fecha o menu responsivo
  menuResponsivo.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
  // Fecha o menu ao clicar em um link
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let slideAtual = 0;
  let slideIntervalo;

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slideAtual = (index + slides.length) % slides.length;

    slides[slideAtual].classList.add("active");
    dots[slideAtual].classList.add("active");
  }

  function nextSlide() {
    showSlide(slideAtual + 1);
  }
  function prevSlide() {
    showSlide(slideAtual - 1);
  }
  function startSlide() {
    slideIntervalo = setInterval(nextSlide, 5000);
  }
  function stopSlide() {
    console.log("Valor intervalo", slideIntervalo);
    clearInterval(slideIntervalo);
  }
  nextBtn.addEventListener("click", () => {
    nextSlide();
    stopSlide();
    startSlide();
  });
  prevBtn.addEventListener("click", () => {
    prevSlide();
    stopSlide();
    startSlide();
  });
  startSlide();
}); // Final do evento
