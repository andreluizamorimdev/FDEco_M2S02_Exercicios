//Exercicio 01 - Manipulação básica de arrays
// Descrição: Dado um array de números, crie uma função que retorne um novo array, contendo apenas os números pares.
const filtrarPares = require("./Exercicio01");

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filtrarPares(numeros));
// fim do Exercicio 01

// Ex 2 - Manipulação de Objetos
// Descrição: Dado um array de objetos representando pessoas com propriedades nome e idade, crie uma função que retorne um array, contendo apenas os nomes das pessoas com idade maior ou igual a 18 anos.
const filtrarAdultos = require("./Exercicio02");

let pessoas = [
  { nome: "Alice", idade: 17 },
  { nome: "Bob", idade: 22 },
  { nome: "Charlie", idade: 16 },
  { nome: "David", idade: 19 }
];

console.log(filtrarAdultos(pessoas));
// fim do Exercicio 02
