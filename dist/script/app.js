const header = document.querySelector(".hero-wrapper");

if (header != null) {
  header.addEventListener("mousemove", function (e) {
    const images = document.querySelectorAll(".header-img");
    images.forEach((el) => {
      const moving = el.getAttribute("data-set");
      const x = (e.clientX * moving) / 250;
      const y = (e.clientY * moving) / 250;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
}

const section = document.querySelectorAll(".observe-section");

function callback(entries, observe) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  else {
    entry.target.style.transform = "translateY(0)";
    entry.target.style.opacity = 1;
  }
  observe.unobserve(entry.target);
}

const revealOptions = {
  root: null,
  threshold: 0.15,
};

let observer = new IntersectionObserver(callback, revealOptions);

if (section != null) {
  section.forEach((el) => {
    el.style.transform = "translateY(10rem)";
    el.style.opacity = 0;
    observer.observe(el);
  });
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
