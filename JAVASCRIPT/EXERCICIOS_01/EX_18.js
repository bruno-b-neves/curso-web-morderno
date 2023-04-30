const numero = (numeroExtenso) => {
    switch(numeroExtenso) {
        case 0: 
            console.log('Zero')
            break
        case 1:
            console.log('Um')
            break
        case 2:
            console.log('Dois')
            break
        case 3: 
            console.log('Trêz')
            break
        case 4:
            console.log('Quatro')
            break
        case 5: 
            console.log('Cinco')
            break 
        case 6:
            console.log('Seis')
            break
        case 7:
            console.log('Sete')
            break
        case 8:
            console.log('Oito')
            break
        case 9: 
            console.log('Nove')
            break
        case 10:
            console.log('Dez')
            break
        default: 
            return 'Número fora do intervalo'
    }
}

numero(1)
numero(2)
numero(3)
numero(4)
numero(5)
numero(6)
numero(7)
numero(8)
numero(9)
numero(10)