const pessoa = {
  saudacao: "Bom Dia!!!",
  falar(){
    console.log(this.saudacao)
  }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas : Funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()