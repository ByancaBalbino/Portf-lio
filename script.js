// Aqui eu pego os elementos que vou usar no menu e no formulário.
const botaoMenu = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const formulario = document.querySelector('#formulario-contato');
const mensagemSucesso = document.querySelector('#mensagem-sucesso');

// Esse trecho faz o menu abrir e fechar no celular.
if (botaoMenu && navLinks) {
  botaoMenu.addEventListener('click', () => {
    navLinks.classList.toggle('aberto');
    const expanded = botaoMenu.getAttribute('aria-expanded') === 'true';
    botaoMenu.setAttribute('aria-expanded', String(!expanded));
  });
}

// Aqui eu deixei o envio do formulário com validação e mensagem de sucesso.
if (formulario) {
  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    if (!formulario.checkValidity()) {
      formulario.reportValidity();
      return;
    }

    mensagemSucesso.textContent = 'Mensagem enviada com sucesso!';
    formulario.reset();
  });
}
