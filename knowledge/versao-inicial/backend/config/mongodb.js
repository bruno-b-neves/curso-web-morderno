const mongoose = require('mongoose')
const url = 'mongodb://localhost/knowledge_stats'

mongoose.connect(url, {useNewUrlParser: true})
    .catch(e => {
        const msg = "ERRO: Nao foi possivel conectar com o MongoDB!";
        console.log("\x1b[41m%s\x1b[37m", msg, "\x1b[0m");
    })