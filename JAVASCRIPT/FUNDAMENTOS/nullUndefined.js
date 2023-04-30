// No JavaScript caso queira deixar zerado uma variavel atribuia a null e deixe que o JS defina sua variavel como undefined
let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Error!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

// Abaixo irei fazer um teste na constante preço retornando undefined
produto.preco = undefined // evite atribuit undefined
console.log(!!produto.produto)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)