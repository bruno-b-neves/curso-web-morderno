// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // estrutura destructuring
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // estrutura destructuring criando variaveis
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // estrutura destructuring undefined
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa // estrutura destructuring acessando o objeto dentro de objeto
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa
console.log(ag, num)