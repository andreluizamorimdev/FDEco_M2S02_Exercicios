function agruparPorCategoria(produtos) {
  const totaisPorCategoria = {};

  produtos.forEach((produto) => {
    const { categoria, preco } = produto;

    if (totaisPorCategoria[categoria]) {
      totaisPorCategoria[categoria] += preco;
    } else {
      totaisPorCategoria[categoria] = preco;
    }
  });

  return totaisPorCategoria;
}

module.exports = agruparPorCategoria;
