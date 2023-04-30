const pessoa = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // O bind é responsavel por amarrar um objeto this.
falarDePessoa()