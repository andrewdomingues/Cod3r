// Armazenando uma função em uma váriavel

const imprimirSoma = function(a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma váriavel
const soma = (a, b) => {
  return a + b
}
console.log(soma(5, 3))

//Retorno implícito
const subtracao = (a, b) => a - b 
console.log(subtracao(9, 3))