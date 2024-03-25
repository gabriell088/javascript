/*
Como você pode remover um elemento específico de um array 
em JavaScript?
*/
let indice = array.indexOf(3); // Encontra o índice do elemento a ser removido
if (indice !== -1) {
  array.splice(indice, 1); // Remove o elemento do array
}

console.log(array); // Saída: [1, 2, 4, 5]
