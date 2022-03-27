const nome = "Andrew"
const concatenacao = "Olá " + nome + '!'

const templete = `
  Olá
  ${nome} !` // usa à cráse para delimitar a templeteString
console.log(concatenacao, templete)

//expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = s => s.toUpperCase() // Função Arrow
console.log(`Ei... ${up("cuidado!!!")}`)