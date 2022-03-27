/*
class criarProd {
  constructor(nome, preco) {
    this.nome = nome
    this.preco = preco
  }

  mostrarProd() {
    console.log(`Produto ${this.nome}, Preço R$${this.preco}`)
  }
}

const item1 = new criarProd("Ipad", 5199.7)
item1.mostrarProd()

const item2 = new criarProd("Tab S7", 6700.0)
item2.mostrarProd()
*/

function Pessoa(nome) {
  this.nome = nome

  this.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa("João")
p1.falar()