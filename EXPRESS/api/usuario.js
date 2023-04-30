const salvar = (req, res) => { 
    res.send('Usuário > salvar')
}

const obter = (req, res) => {
    res.send('Usuário > obter')
}

module.exports = { salvar, obter}