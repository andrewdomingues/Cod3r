let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 
console.log(!!isAtivo) //Quando se coloca negação duas vezes ele mostra o valor boleano do dado.

console.log("Os Verdadeiros!!!")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("Os falsos")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!undefined)
console.log(!!NaN)
console.log(!!(isAtivo = false))

console.log("Para Finalizar")
console.log(!!('' || null || 0 || ' '))

let nome = ''
console.log(nome || 'Desconhecido')