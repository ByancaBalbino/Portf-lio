const botaoMenu = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (botaoMenu && navLinks) {
  botaoMenu.addEventListener('click', () => {
    navLinks.classList.toggle('aberto');
    const expanded = botaoMenu.getAttribute('aria-expanded') === 'true';
    botaoMenu.setAttribute('aria-expanded', String(!expanded));
  });
}
