// Uma outra forma de percorrer um array com mais propósito é utilizando o .filter()
// Sempre que precisar transformar um array em outro array, usar o .map()
// Sempre que precisar filtrar um array usar o .filter()

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad', preco: 4199, fragil: true },
    { nome: 'Copo', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

// 1º Exemplo
console.log(produtos.filter(function(p) {
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
