function calcularProduto(numeros) {
  return numeros.reduce((acumulador, numero) => acumulador * numero, 1);
}

module.exports = calcularProduto;
