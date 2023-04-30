const trueOrFalse = (valor1, valor2) => {
    if(typeof valor1 != typeof valor2) {
        console.log(false)
    } else {
        console.log(valor1 >= valor2)
    }
}

trueOrFalse(0, 0)
trueOrFalse(0, "0")
trueOrFalse(5, 1)
