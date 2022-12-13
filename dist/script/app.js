const header = document.querySelector('.hero-wrapper')

if (header != null) {
  header.addEventListener('mousemove', function (e) {
    const images = document.querySelectorAll('.header-img');
    images.forEach(el => {
      const moving = el.getAttribute('data-set');
      const x = e.clientX * moving / 250;
      const y = e.clientY * moving / 250;
      el.style.transform = `translate(${x}px, ${y}px)`
    });
  });
}