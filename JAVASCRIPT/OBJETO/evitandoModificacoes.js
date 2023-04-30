// 1º Exemplo
// Object.preventExtensions - Não posso adicionar novos atributos, posso excluir!!
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('É Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// 2º Exemplo
// Object.seal - Não consigo adicionar ou excluir atributos, mas consigo alterar novos atributos
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// 3º Exemplo
// Object.freeze = selado + valores constantes