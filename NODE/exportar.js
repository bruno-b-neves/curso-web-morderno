console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null 
console.log(module.exports)

// module.exports continua apontando para { a: 1, b: 2, c: 3 } mesmo que exports seja null, mas por que?
// Res: exports é simplemente uma outra variável que aponta para o mesmo objeto! Tanto faz adicionar com o module.exports, 
// como diretamente em exports, como em relação ao this irei apontar para a mesma referencia em memoria!
// Mas no final das contas quem será retornado é o module.exports

exports = {
    nome: 'Teste'
}
console.log(module.exports)

module.exports = { publico: true }