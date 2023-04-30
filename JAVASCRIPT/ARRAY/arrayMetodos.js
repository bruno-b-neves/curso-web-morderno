const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o último elemento do Array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona elemento ao Array
console.log(pilotos)

pilotos.shift() // Remove a primeiro elemento do Array
console.log(pilotos)

pilotos.unshift('Hamilton') // Muito parecido com push, esse na verdade adiciona na primeira posição do array.
console.log(pilotos)

// splice pode adicionar e remover elementos
// adicionar com splice
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover elementos com splice
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)// novo array
console.log(algunsPilotos1)

const algunsPilotos = pilotos.slice(1, 4)
console.log(algunsPilotos1)