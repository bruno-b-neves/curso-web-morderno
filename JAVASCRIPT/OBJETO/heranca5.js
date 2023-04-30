console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// 1º Exemplo String.prototype.reverse
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}
console.log('Escola Cod3r'.reverse())

// 2º Exemplo Array.prototype.first
Array.prototype.first = function() {
    return this[0]
}
console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

// 3º Exemplo, ter cuidado ao mexer em funções que já estão presentes em um prototype
String.prototype.toString = function () { 
    return 'Lascou Tudo'
}
console.log('Escola Cod3r'.reverse())