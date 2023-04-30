// Reduce percorre o Array, com mais propósito.
// Reduce é uma função que serve por exemplo para transformar um Array em um único elemento
// não obrigatoriamente em um único elemento, ele pode ser transformado em um Array com outro
// Array, Array com número ou Array com String, depende do critério definido.

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Fernanda', nota: 8.7, bolsista: true },
]

console.log( alunos.map(a => a.nota) )

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)
