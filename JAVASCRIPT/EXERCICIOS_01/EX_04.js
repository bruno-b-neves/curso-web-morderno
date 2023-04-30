/***************************************************************************************************************
*                                                                                                              *
* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá                   *
* imprimir o resultado e o resto da divisão destes dois valores.                                               *
*                                                                                                              *
***************************************************************************************************************/

// Modelo certo
function divisao(dividendo, divisor) {
    console.log('Resultado: ' + Math.floor(dividendo/divisor))
    console.log(`Resto: ${dividendo % divisor}`)
}
divisao(8,5)


/* // Meu modelo está errado!
function dividendoEResto(dividendo, divisor) {
    return ((dividendo % divisor) + dividendo) % divisor

}
console.log(8 % 5)
console.log(dividendoEResto(5, 6)) */