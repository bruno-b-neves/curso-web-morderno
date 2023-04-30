const fs = require('fs')
const path = require('path')

const lerArquivo = function(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler o arquivo!')
    }) 
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(', '))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)


// Uma das formas de resolver
// const promise = new Promise((resolve) => {
//     resolve(fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString())))
//     return
// }, 2000)

// promise.then(console.log)