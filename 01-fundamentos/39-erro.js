function tratarErroELancar(e) {
  // throw new Error("....")
  throw "Algo deu errado"
}


function imprimirNomeGritado(obj) {
  try{
    console.log(obj.name.toUpperCase() + "!!!")
  } catch(e) {
      tratarErroELancar(e)
  } finally {
    console.log("final")
  }
}

const obj = {nome: "Roberto"}
imprimirNomeGritado(obj)