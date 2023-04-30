const valores = [7.7, 8.9, 6.3, 9.2]

// Consultando Array. Array faz consultas por indices.
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)

// exibir quantidade do array
console.log(valores.length)

// push adiciona novos elementos no array
valores.push({id:3}, false, null, 'teste')
console.log(valores)

// pop pega o último valor do array (retira e retornar o valor)
console.log(valores.pop())

// Delete faz com que eu remova um item. Exemplo: delete valores[digito algum indice]
delete valores[0]
console.log(valores)

// Array é um object
console.log(typeof valores)