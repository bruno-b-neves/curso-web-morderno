const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC/index')
console.log(c.ola2)

// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Bom Dia!')
//     res.end()
// }).listen(8080)

/************************************************************************************
 * Posso importar a partir do require, além dos modulos da propria aplicação usando *
 *                                                                                  *
 * caminhos relativos ou absoluto, posso também importar os modulos dentro da pasta *
 *                                                                                  *
 * node_modules e posso importar os modulos que vem previamente instalados com o    * 
 *                                                                                  *
 * Node que são os modulos CORE                                                     *
************************************************************************************/