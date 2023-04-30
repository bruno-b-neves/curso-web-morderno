const a = 1
const b = 2
const c = 3

// 1º Exemplo
const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c }
console.log(obj1, obj2)

// 2º Exemplo
const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

// 3º Exemplo
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

// 4º Exemplo
const obj5 = {
    funcao1: function() {
        // ...
    },
    funcao2() {
        // ...
    }
}
console.log(obj5)
