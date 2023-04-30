// O map() ele não transforma o array atual, ele gera um novo array.
// O array original não é modificado.
// 1º Exemplo
const nums = [1, 2, 3, 4, 5]
// map = ao for com propósito
let resultado = nums.map(function(e) {
    return e * 2
})
console.log(resultado)

// 2º Exemplo 
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinhero = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinhero)
console.log(resultado)