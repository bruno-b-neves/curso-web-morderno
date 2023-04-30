const numeroInteiro = (numero, divisivel) => {
    var divisivel = 3
    if(numero % divisivel == 0) {
        console.log(`O número ${numero} é divisivel por ${divisivel}`)
        return true
    } else {
        console.log(`O número ${numero} não é divisivel por ${divisivel}`)
        return false
    }
}

console.log(numeroInteiro(3))
console.log(numeroInteiro(2))
console.log(numeroInteiro(150))

/* ************************* UMA DAS POSSÍVEIS SOLUÇÕES ************************* */
// const numeroInteiro = (x, y) => {
//     if(Number.isInteger(y / x)) {
//         return `O número ${y} é divisivel por ${x}`
//     } else {
//         return `O número ${y} não é divisivel por ${x}`
//     }
// }

// console.log(numeroInteiro(3, 6))
// console.log(numeroInteiro(3, 2))
// console.log(numeroInteiro(3, 150))