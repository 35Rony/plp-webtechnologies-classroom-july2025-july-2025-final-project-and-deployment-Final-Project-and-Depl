document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav ul');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
});
