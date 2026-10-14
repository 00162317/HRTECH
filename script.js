const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
  nav.classList.toggle('open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
    nav.classList.remove('open');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const form = document.querySelector('#contact-form');
const feedback = document.querySelector('#form-feedback');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  feedback.classList.remove('error');

  if (!form.reportValidity()) {
    feedback.textContent = 'Revisa los campos marcados antes de continuar.';
    feedback.classList.add('error');
    return;
  }

  feedback.textContent = 'Los datos cumplen la validación, pero el envío no está habilitado. No se envió ni almacenó la información.';
  feedback.classList.add('error');
});
