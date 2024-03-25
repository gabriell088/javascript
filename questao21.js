/*
Como você pode verificar se um objeto contém uma determinada 
propriedade em JavaScript?
*/
let meuObjeto = {
  propriedade1: "valor1",
  propriedade2: "valor2"
};

if ('propriedade1' in meuObjeto) {
  console.log("meuObjeto contém a propriedade 'propriedade1'.");
} else {
  console.log("meuObjeto não contém a propriedade 'propriedade1'.");
}