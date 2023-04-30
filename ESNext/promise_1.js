// let a = 1
// console.log(a)
// then é um método que também recebe uma função como parametro
// o the pode ser chamado várias vezes
// Se caso precisar acessar um valor especifico dentro do objeto coloque o nomeDoParametro.nomeDoObjeto
// assim retornará o objeto em especifico.

// p.then(function(valor) {
//     console.log(valor)
// })
// p.then(valor => console.log(valor))

const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

// promisse é uma função que recebe outra função como parametro
new Promise(function(resolve) {
    // A promise passará um único valor 
    // Para passsar mais valores se faz necessario criar um objeto e chama-lo .then, mesmo com um único ou mais valores.
    // resolve(3)
    // resolve({ x: 5, y: 4 })
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
    
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    // .then(v => console.log(v))
    .then(console.log)



  