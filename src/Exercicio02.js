function filtrarAdultos(pessoas) {
  const resultado = pessoas.filter((pessoa) => pessoa.idade >= 18);
  return resultado.map((pessoa) => pessoa.nome);
}

module.exports = filtrarAdultos;
