function criarProduto(nome, preco){
  return {
    nome,
    preco,
    desconto: 0.1
  }
}

console.log(criarProduto("Notebook", 7122.6))
console.log(criarProduto("Ipad", 4999.5))