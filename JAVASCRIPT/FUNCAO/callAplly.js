function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}
const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
global.preco = 20
global.desc = 0.1

// Exemplo 1
console.log(getPreco())
console.log(produto.getPreco())

// Exemplo 2
const carro = { preco: 49900, desc: 0.20 }
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// Exemplo de impressões no console.log
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$']))

// Qual a diferença em chamar uma função com Call ou Apply?
// A diferença é só a passagem dos parâmetros.