const imprimirData = function (data) {
    switch(data) {
        case 1:
            return 'Fim de semana'
        case 2: case 3: case 4: case 5: case 6:
            return 'Dia útil'
        case 7:
            return 'Fim de semana'
        default:
            return 'Dia inválido'
    }
}

console.log(imprimirData(1))
console.log(imprimirData(2))
console.log(imprimirData(3))
console.log(imprimirData(4))
console.log(imprimirData(5))
console.log(imprimirData(6))
console.log(imprimirData(7))
console.log(imprimirData('a'))

/* ************ MINHA SOLUÇÃO ************ */
// const imprimirData = function(data) {
//     switch (data) {
//         case 7:
//             console.log(`O ${data} é Sábado e, é final de semana`)
//             break
//         case 6:
//             console.log(`O ${data} é Sexta-Feira e, é dia útil`)
//             break;
//         case 5:
//             console.log(`O ${data} é Quinta-feira e, é dia útil`)
//             break
//         case 4:
//             console.log(`O ${data} é Quarta-Feira e, é dia útil`)
//             break
//         case 3:
//             console.log(`O ${data} é Terça-Feira e, é dia útil`)
//             break
//         case 2:
//             console.log(`O ${data} é Segunda-Feira e, é dia útil`)
//             break
//         case 1:
//             console.log(`O ${data} é Domingo e, é final de semana`)
//             break
//         default:
//             console.log(`O número ${data} que você digitou é inválido, e por isso não foi possível te ajudar!`)
//     }
// }

// imprimirData(10)
// imprimirData(7)
// imprimirData(6)
// imprimirData(1)
// imprimirData(20)
