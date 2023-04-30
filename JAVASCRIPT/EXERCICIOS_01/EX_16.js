/* ******** MINHA SOLUÇÃO ******** */
const calculadora = (value1, value2, operation) => {
    switch(operation) {
        case '+':
            console.log( value1 + value2 )
            break
        case '-':
            console.log( value1 - value2 )
            break
        case '*':
            console.log( value1 * value2 )
            break
        case '/':
            console.log( value1 / value2 )
            break
        default:
            console.log('Desculpe, sua operação é inválida!')
    }
}
calculadora(2, 3, '+')
calculadora(30, 5, '-')
calculadora(5, 8, '*')
calculadora(50, 20, '/')
calculadora(50, 50, '//')

/* ******** SOLUÇÃO DO PROFESSOR ******** */
// function calculadora (valor1, operacao, valor2) {
//     switch (operacao) {
//         case '+':
//             return valor1 + valor2
//         case '-':
//             return valor1 - valor2
//         case '*':
//             return valor1 * valor2
//         case '/':
//             return valor1 / valor2
//         default:
//             return 'Operação inválida'
//     }
// }

// console.log(calculadora(2, '+', 3));
// console.log(calculadora(2, '-', 3));
// console.log(calculadora(2, '*', 3));
// console.log(calculadora(2, '/', 3));
// console.log(calculadora(2, 'a', 3));


