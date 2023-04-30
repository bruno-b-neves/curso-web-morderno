// 1º Exemplo o this aponta para o global
let comparaComThis = function(param) {
    console.log(this === param)
}
comparaComThis(global)

// 2º Exemplo o this não aponta para o global, mas aponta para o objeto.
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

// 3º Exemplo o this com Arrow Function: o this não aponta para o global, mas aponta para o objeto this
// e aponta para a função module.exports
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(this)
comparaComThisArrow(module.exports)

// 4º Exemplo: Quem seria mais forte bind ou arrow function? R: Arrow Function. Ela não irá mudar e mantará
// a guarda firme. O this vai apontar para função que foi escrita e não consigo mudar por conta disso.
// e ele continuará apontando para a função module.exports
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
