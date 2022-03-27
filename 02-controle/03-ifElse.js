const imprimirResuldado = function(nota){
  if(nota >= 7) {
    console.log("Aprovado")
  } else {
    console.log("Reprovado")
  }
}

imprimirResuldado(10)
imprimirResuldado(4)
imprimirResuldado("Epa!")