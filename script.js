// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar scroll effect
const header = document.getElementById('site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// Hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// Consultation form
function handleConsultation(e) {
  e.preventDefault();
  const msg = document.getElementById('consult-success');
  if (msg) {
    msg.style.display = 'block';
    e.target.reset();
    setTimeout(() => msg.style.display = 'none', 6000);
  }
}

// Animate stat numbers on scroll
const stats = document.querySelectorAll('.stat-num');
if (stats.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        if (!target) return;
        let current = 0;
        const step = Math.ceil(target / 40);
        const tick = setInterval(() => {
          current = Math.min(current + step, target);
          el.firstChild.textContent = current;
          if (current >= target) clearInterval(tick);
        }, 40);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  stats.forEach(s => observer.observe(s));
}
