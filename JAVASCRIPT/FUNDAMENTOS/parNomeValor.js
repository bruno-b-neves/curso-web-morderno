// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Bruno',
    idade: 27,
    peso: 90,
    endereco: {
        logradouro: 'Rua da Sorte',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)