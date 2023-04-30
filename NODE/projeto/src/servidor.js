// port é um processo entre computadores
const porta = 3003

const express = require('express')
const App = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

// App.use(bodyParser.json())
App.use(bodyParser.urlencoded({ extended: true }))




// Abaixo será necessario fazer um function middleware
App.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
    // res.send({ nome: 'Notebook', preco: 123.45 })   // Converter para JSON
})

App.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

App.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // Converte para JSON
})

App.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // Converte para JSON
})

App.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // Converte para JSON
})

App.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`)
})