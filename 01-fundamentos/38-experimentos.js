let a = 3

globalThis.b = 123

this.c = 456
this.e = false
this.d = "teste"

console.log(a)
console.log(globalThis.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma váriavel maluca: sem let ou var

abc = 3 // não faça isso em casa
console.log(global.abc)

//module.exports = { e: 456, f: false, g: 'teste' }