function classificacaoAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if(notaCorrigida >= 40) {
        console.log(`Aprovado com a nota ${notaCorrigida}`)
    }else {
        console.log(`Reprovado com a nota ${notaCorrigida}`)
    }
}

function arredondar(nota) {
    if(nota % 5 > 2) {
        return nota + (5 - (nota % 2))
    } else {
        return nota
    }
}

classificacaoAluno(100)
classificacaoAluno(30)
classificacaoAluno(38)
classificacaoAluno(88)
classificacaoAluno(61)