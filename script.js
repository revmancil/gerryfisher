// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Contact form (index)
function handleSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById('form-success');
  msg.style.display = 'block';
  e.target.reset();
  setTimeout(() => msg.style.display = 'none', 5000);
}

// Consultation form
function handleConsultation(e) {
  e.preventDefault();
  const msg = document.getElementById('consult-success');
  msg.style.display = 'block';
  e.target.reset();
  setTimeout(() => msg.style.display = 'none', 6000);
}
