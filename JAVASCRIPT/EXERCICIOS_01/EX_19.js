/* ************************** MINHA SOLUÇÃO ************************** */
const produto = (quant, valor) => {
    switch(quant, valor) {
        case '100':
            console.log(`Código Digitado: 100 | Produto: Cachorro Quente | Valor: R$ 3,00 | Quantidade: ${quant} | Total do pedido: R$${(quant * 3).toFixed(2)}`)
            break
        case '200':
            console.log(`Código Digitado: 200 | Produto: Hambúrguer Simples | Valor: R$ 4,00 | Quantidade: ${quant} | Total do pedido: R$${(quant * 4).toFixed(2)}`)
            break
        case '300':
            console.log(`Código Digitado: 300 | Produto: Cheeseburguer | Valor: R$ 5,50 | Quantidade: ${quant} | Total do pedido: R$${(quant * 5).toFixed(2)}`)
            break
        case '400':
            console.log(`Código Digitado: 400 | Produto: Bauru | Valor: R$ 7,50 | Quantidade: ${quant} | Total do pedido: R$${(quant * 7.50).toFixed(2)}`)
            break
        case '500':
            console.log(`Código Digitado: 500 | Produto: Refrigerente | Valor: R$ 3,50 | Quantidade: ${quant} | Total do pedido: R$${(quant * 3.50).toFixed(2)}`)
            break
        case '600':
            console.log(`Código Digitado: 600 | Produto: Suco | Valor: R$ 2,80 | Quantidade: ${quant} | Total do pedido: R$${(quant * 2.80).toFixed(2)}`)
            break
        default: 
            console.log('Produto não existente!')
    }
}

produto(3, '100')
produto(2, '200')
produto(4, '300')
produto(2, '400')
produto(1, '500')
produto(4, '600')
produto(8, '700')

/* ************************** SOLUÇÃO DO PROFESSOR ************************** */
function calcularVenda(codigoProduto, qtd) {
    switch (codigoProduto) {
        case 100:
            return qtd * 3
        case 200:
            return qtd * 4
        case 300:
            return qtd * 5.5
        case 400:
            return qtd * 7.5
        case 500:
            return qtd * 3.5
        case 600:
            return qtd * 2.8
        default:
            return 'Produto não existente.'
    }
}

console.log(calcularVenda(100, 2))
console.log(calcularVenda(200, 2))
console.log(calcularVenda(300, 2))
console.log(calcularVenda(400, 2))
console.log(calcularVenda(500, 2))
console.log(calcularVenda(600, 2))
console.log(calcularVenda(700, 2))
