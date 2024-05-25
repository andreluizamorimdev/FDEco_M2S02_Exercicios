function contador() {
  let valor = 0;
  return function () {
    valor += 1;
    return valor;
  };
}

module.exports = contador;
