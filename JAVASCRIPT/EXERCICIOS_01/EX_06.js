function jurosSimples (capitalInicial, taxaDeJuros, tempoAplicado) {
    return capitalInicial + (capitalInicial * taxaDeJuros * tempoAplicado)
}

function jurosComposto(capitalInicial, taxaDeJuros, tempoAplicado) {
    return capitalInicial * (1 + taxaDeJuros) ** tempoAplicado
}

console.log(`Juros Simples: ${jurosSimples(100, 10 / 100, 2).toFixed(2)}`)
console.log(`Juros Composto: ${jurosComposto(100, 10 / 100, 2).toFixed(2)}`)