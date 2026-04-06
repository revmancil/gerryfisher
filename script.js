// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById('form-success');
  msg.style.display = 'block';
  e.target.reset();
  setTimeout(() => msg.style.display = 'none', 5000);
}
