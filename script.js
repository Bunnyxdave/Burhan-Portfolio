const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.bubble-items');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    menu.classList.toggle('show', !open);
  });
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menu.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}
