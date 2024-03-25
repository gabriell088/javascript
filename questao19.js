/*
Como você pode definir uma função de retorno de chamada 
(callback) em JavaScript?
*/
function fazerAlgo(callback) {
    // Executar alguma lógica...
    callback(); // Chamada à função de retorno de chamada
  }
  
  // Chamando a função `fazerAlgo` com uma função de retorno de chamada anônima
  fazerAlgo(function() {
    console.log("Isso é uma função de retorno de chamada!");
  });