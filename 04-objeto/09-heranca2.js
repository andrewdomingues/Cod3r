// Cadeia de protótipos (prototype chain)
Object.prototype.atrr0 = "0"
const avo = {atrr1: "A"}
const pai = {__proto__: avo, atrr2: "B"}
const filho = {__proto__: pai, atrr3: "C"}

console.log(filho.atrr0, filho.atrr1, filho.atrr2, filho.atrr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}`
    }
}


const ferrari = {
    modelo: "F40",
    velMax: 324 // Shadowing
}

const volvo = {
    modelo: "V40",
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())