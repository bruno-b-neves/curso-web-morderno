function verificaNumero (numero) {
    if(numero % 3 == 0){
        console.log(`O número ${numero} é divisivel por 3`)
        return true
    }else{
        return false
    }
}

console.log(verificaNumero(3))
console.log(verificaNumero(2))
console.log(verificaNumero(150))
