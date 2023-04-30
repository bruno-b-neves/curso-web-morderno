function multiplica (x, y) {
    let resultado = 0

    for(let i = 0; i < y; i++) {
        resultado += x
    }

    return resultado
}

console.log(multiplica(5, 5))
console.log(multiplica(0, 7))