const bissexto = (ano) => {
    if(ano <= 0) {
        console.log(`O ano ${ano} não é bissexto` )
        return false
    } else if(ano % 400 == 0) {
        console.log(`O ano ${ano} é bissexto` )
        return true
    } else if(ano % 100 == 0) {
        console.log(`O ano ${ano} não é bissexto` )
        return false
    } else if(ano % 4 == 0) {
        console.log(`O ano ${ano} é bissexto` )
        return true
    }
}

console.log(bissexto(0))
console.log(bissexto(4))
console.log(bissexto(100))
console.log(bissexto(400))
console.log(bissexto(500))
console.log(bissexto(800))