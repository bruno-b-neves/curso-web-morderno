const aumentoSalario = (planoTrabalho, salarioAtual) => {
    switch(planoTrabalho) {
        case 'a':
            console.log(`O novo salário é R$ ${salarioAtual * 1.1}`)
            break
        case 'b':
            console.log(`O novo salário é R$ ${salarioAtual * 1.15}`)
            break
        case 'c':
            console.log(`O novo salário é R$ ${salarioAtual * 2.0}`)
            break
        default:
            console.log('Plano inválido')
    }
}

aumentoSalario('a', 1000)
aumentoSalario('b', 1000)
aumentoSalario('c', 1000)