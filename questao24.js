/*
 Como você pode adicionar um evento de clique a um elemento 
HTML em JavaScript?
*/
// Seleciona o botão pelo ID
let botao = document.getElementById('meuBotao');

// Adiciona um ouvinte de evento de clique ao botão
botao.addEventListener('click', function() {
  console.log('O botão foi clicado!');
});
