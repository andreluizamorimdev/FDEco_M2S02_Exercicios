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

// Ex 3 - Agrupamento de dados
// Descrição: Dado um array de objetos representando produtos com propriedades categoria e preco, crie uma função que agrupe os produtos por categoria e calcule o preço total de cada categoria.
const agruparPorCategoria = require("./Exercicio03");

let produtos = [
  { categoria: "eletrônicos", preco: 99.99 },
  { categoria: "livros", preco: 19.99 },
  { categoria: "eletrônicos", preco: 199.99 },
  { categoria: "livros", preco: 29.99 },
  { categoria: "roupas", preco: 49.99 }
];

console.log(agruparPorCategoria(produtos));
// fim do Exercicio 03
