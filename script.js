// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  $(document).ready(function() {
    $('.skills-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true
    });
  });

  AOS.init();
  
  const toggleDarkMode = document.getElementById('dark-mode-toggle');
  toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
  });
