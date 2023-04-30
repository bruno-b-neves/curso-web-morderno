// Array também é obj, é um obj especial que trabalha de forma indexada, percorrendo indices[0, 1, 2, ...]
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') // Não é muito uzual
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // Mais uzual
console.log(`${aprovados[0]}, ${aprovados[1]}, ${aprovados[2]}, ${aprovados[3]}`)

aprovados[3] = 'Paulo' // modo mais apropriado para substituir um elemento no array
aprovados.push('Abia') // mais apropriado para adicionar um novo elemento no array
console.log(aprovados.length) // Percorre a quantidade de Itens em um Array

aprovados[9] = 'Rafael'
console.log(aprovados.length) 
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // Reorganiza o Array
console.log(aprovados)

delete aprovados[1] // Exclui o indice[1] do Array
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // Splice serve para adicionar ou remover determinado elemento no Array
console.log(aprovados)
