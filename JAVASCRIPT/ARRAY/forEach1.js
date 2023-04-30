const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// percorre a lista | Dentro eu crio a função callback
// o próprio array é passado como terceiro parametro
// para a função callback que pode passar para o forEach
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
}) 

// Percorre a lista com uma função Arrow Function Callback
aprovados.forEach( nome => console.log(nome) )

// Outra maneira é armazenar uma função em uma 
// variavel e passar essa função para o forEach
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)