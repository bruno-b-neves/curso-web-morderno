// Criar um object vazio e declarar fora das { }
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaço

console.log(prod1)

//  Criar um object com os itens dentro das { }
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

// '{"nome": "Camisa Polo", "preco": 79.90}' Formato padrão de JSON

console.log(prod2)