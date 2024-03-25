/*
Como você pode verificar se um valor está contido em um array 
em JavaScript?
*/
let array = [1, 2, 3, 4, 5];
let valor = 3;
let contido = false;

for (let i = 0; i < array.length; i++) {
  if (array[i] === valor) {
    contido = true;
    break;
  }
}

if (contido) {
  console.log(`${valor} está contido no array.`);
} else {
  console.log(`${valor} não está contido no array.`);
}