/* ********************** SOLUÇÃO DO PROFESSOR ********************** */
function fatorial(numero) {
    if(numero == 0) {
        return 1
    } else {
       return numero * fatorial(numero - 1)
    }
}
console.log(fatorial(10))


/* ********************** MINHA SOLUÇÃO ********************** */
// const fatorial = (numero) => {
//     if ( numero === 0 || numero === 1) 
//         return 1

//     for( var i = numero - 1; i >= 1; i-- ) {
//         numero *= i
//     }
    
//     return numero
// }

// console.log(fatorial(10))