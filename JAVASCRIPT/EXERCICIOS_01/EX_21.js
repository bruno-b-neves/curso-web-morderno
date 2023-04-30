const conveniado = (idade) => {
    let valorTotal = 100

    if( idade <= 10 ) {
        return valorTotal += 80
    } else if (idade >= 10 && idade <= 30) {
        return valorTotal += 50
    } else if (idade >= 30 && idade <= 60) {
        return valorTotal += 95
    } else if (idade >= 60) {
        return valorTotal += 130
    } else {
        return 'Dados inválidos'
    }
}

console.log(conveniado(10))
console.log(conveniado(61))