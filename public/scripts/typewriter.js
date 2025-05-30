export function typewriterEffect(el, text, speed = 40) {
  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

export function observeTypewriter(selector) {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const text = el.getAttribute('data-typewriter');
          if (!el.classList.contains('typed')) {
            el.classList.add('typed');
            typewriterEffect(el, text);
          }
          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.6 }
  );

  elements.forEach(el => observer.observe(el));
}