let dobro = function (a) {
    return 2 * a
}
dobro = (a) => {
    return 2 * a
}
dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

// 2º Exemplo

let ola = function() {
    return 'Olá'
}
ola = () => 'Olá'
ola = _ => 'Olá' // Underline também pode ser usado como parâmetro no lugar ()
console.log(ola())

