function soBoaNoticia(nota) {
  if(nota >= 7) {
    console.log(`Aprovado com a nota ${nota}`)
  }
}

function boaNota(nota){
  nota = nota >= 7 ? "Aprovado" : "Reprovado"
  console.log(nota)
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

boaNota(10)

function seForVerdade(valor){
  if(valor){
    console.log("E verdade... " + valor)
  }
}

seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade('')
seForVerdade(' ')
seForVerdade(-1)