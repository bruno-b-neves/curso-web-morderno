function receberNumeros (numero, minimo, maximo, inclusivo = false) {
   if (inclusivo) {
    return numero >= minimo && numero <= maximo
   }
   return numero > minimo && numero < maximo
}

console.log(receberNumeros(10, 100, 50))
console.log(receberNumeros(16, 100, 50))