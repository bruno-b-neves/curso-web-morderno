const contrario = (valor) => {
    const tipo = typeof valor
    
    if (tipo == 'boolean') {
        console.log(!valor)
    } else if (tipo == "number") {
        console.log(-valor)
    } else {
        console.log(`Booleano ou número esperado, mas o parâmetro é do tipo ${tipo}`)
    }
}

contrario(true)
contrario(false)
contrario('a')
contrario(2)

