// Exemplo 1 = Class
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Bruno')
p1.falar()

// Exemplo 2 = Factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criarPessoa('Neves')
p2.falar()