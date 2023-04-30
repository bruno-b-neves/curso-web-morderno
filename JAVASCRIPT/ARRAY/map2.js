const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.92 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

// Retornar um array apenas com os preços
// 1º Metodo: Chamar o JSON.parse() para transformar as strings em objeto
// 2º Metodo: Vai simplesmente receber um objeto como um elemento de entrada e 
// vai retornar o indice

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)