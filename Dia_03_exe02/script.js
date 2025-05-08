const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault(); // Impede o envio padrão do formulário

  const nome = document.getElementById('nome').value;
  console.log('Nome digitado:', nome);
});

