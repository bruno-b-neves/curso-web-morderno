console.log(typeof Object) // function
console.log(typeof new Object) // obeject 

// posso omitir os parenteses que o resultado será o mesmo

const Cliente = function() {}
console.log(typeof Cliente) // function
console.log(typeof new Cliente) // object

class Produto {} // ES 2015 (ES6) - padrão
console.log(typeof Produto) // function
console.log(typeof new Produto()) // object