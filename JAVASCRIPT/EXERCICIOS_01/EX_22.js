const valorAPagar = (mes, valor) => {
    let montante = valor * Math.pow((1 + 0.05), mes - 1)
    return montante.toFixed(2)
}

console.log(valorAPagar(1, 100))
console.log(valorAPagar(2, 100))
console.log(valorAPagar(4, 100))