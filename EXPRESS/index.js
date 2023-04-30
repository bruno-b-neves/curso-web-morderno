// CONFIGURAÇÃO & LAUNCHER #1
const body_parse = require('body-parser')
const express = require('express')
const App = express()

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
require('./api/produtos')(App, 'com param!')


App.post('/usuario', usuarioApi.salvar)
App.get('/usuario', usuarioApi.obter)


App.use(body_parse.text())
App.use(body_parse.json())
App.use(body_parse.urlencoded({ extended: true }))


App.use(saudacao('Bruno'))

App.use((req, res, next) => {
    console.log('Antes')
    next()
})


App.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relátorio: completo = ${req.query.completo} | ano = ${req.query.ano}`)
})

App.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })
    
    // req.on('end', function() {
    //     res.json(JSON.parse(corpo))
    // })
    res.send(JSON.stringify(req.body))
})

App.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})


// App.get('/opa', (req, res, next) => {

//     console.log('Durante...')
//     res.json({
//         data: [
//             { id: 7, name: 'Ana', position: 1 },
//             { id: 34, name: 'Bia', position: 2 },
//             { id: 73, name: 'Carlos', position: 3 },
//         ],
//         count: 30,
//         skip: 0,
//         limit: 3,
//         status: 200
//     })


//     // res.send('<h1>Estou bem!</h1><br>')

//     // res.json({ 
//     //     name: 'Ipad 32GB', 
//     //     price: 1899.00, 
//     //     discount: 0.12 
//     // })

//     // res.json([
//     //     { id: 7, name: 'Ana', position: 1},
//     //     { id: 34, name: 'Bia', position: 2},
//     //     { id: 73, name: 'Carlos', position: 3},
//     // ])

//     next()
// })


App.use((req, res) => {
    console.log('Depois')
})


// App.listen(3001, () => {
//     console.log('Em execução...')
// })