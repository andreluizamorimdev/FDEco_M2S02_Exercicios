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

// Ex 4 - Funções que Retornam Funções (Closures)
// Descrição: Crie uma função contador que retorna uma outra função que incrementa um valor interno e retorna o valor atualizado a cada chamada.
const contador = require("./Exercicio04");
let contador1 = contador();

console.log(contador1());
console.log(contador1());
console.log(contador1());

let contador2 = contador();
console.log(contador2());
console.log(contador2());
// fim do Exercicio 04

// Ex 5 - Redução de Arrays
// Descrição: Dado um array de números, crie uma função que use reduce para calcular o produto de todos os números no array.
const calcularProduto = require("./Exercicio05");

let numerosEx05 = [1, 2, 3, 4, 5];
console.log(
  "\n resultado ex05 redução de arrays: ",
  calcularProduto(numerosEx05)
);
// fim do Exercicio 05

// Ex 6 - Funções de Alta Ordem
// Descrição: Crie uma função transformarArray, que recebe um array e uma função de transformação e retorna um novo array, onde cada elemento é o resultado da aplicação da função de transformação ao elemento correspondente do array original.
const transformarArray = require("./Exercicio06");

let numerosEx06 = [1, 2, 3, 4, 5];
function dobrar(numero) {
  return numero * 2;
}

console.log(
  "\n resultado ex06 funções de alta ordem: ",
  transformarArray(numerosEx06, dobrar)
);
// fim do Exercicio 06
