function revealOnScroll() {
  const elements = document.querySelectorAll('.info-section .text');
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add('reveal');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
