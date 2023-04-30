/**********************************************************************************************************
*                                                                                                         *
* 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.  *
*                                                                                                         *
**********************************************************************************************************/

// Pode ser feito dos dois métodos

// Método Novo
function expoente(base, expoente) {
    return base ** expoente
}
console.log(expoente(5,4))
console.log(expoente(3,6))
console.log(expoente(2,8))

console.log('---------------------------------------------------')
console.log('---------------------------------------------------')

// Método antigo
function expoente2(base, expoente) {
    let resultado = Math.pow(base, expoente)
    resultado = base ** expoente

    return resultado
}

console.log(expoente2(6,4))
console.log(expoente2(10,20))
console.log(expoente2(3,12))
