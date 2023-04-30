/* ************************* SOLUÇÃO DO PROFESSOR ************************* */
function venderFruta (fruta) {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui.')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwi.')
            break
        case 'melancia':
            console.log('Aqui está, custa R$ 3,00 o quilo.')
            break
        default:
            console.log('Erro, fruta inválida.')
    }
}

venderFruta('maçã')
venderFruta('kiwi')
venderFruta('melancia')
venderFruta('alcatra')

/* ************************* MINHA SOLUÇÃO ************************* */
// const fruta = (fruta) => {
//     switch (fruta) {
//         case 'Maçã':
//             return `${fruta} não vendemos está fruta aqui!`
//         case 'Kiwi':
//             return `Estamos com escassez de ${fruta}!`
//         case 'Melancia':
//             return `Aqui está a ${fruta}, são R$3,00 o quilo!`
//         default:
//             return 'Não entendi o seu pedido'
//     }
// }

// console.log(fruta('Maçã'))
// console.log(fruta('Kiwi'))
// console.log(fruta('Melancia'))
// console.log(fruta('Pera'))
