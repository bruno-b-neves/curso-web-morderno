console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log('Aponta para o global ->', this === global)
    console.log('Não aponta para o exports ->', this === exports)
    console.log('Não aponta para o module.exports ->', this === module.exports)

    console.log('\n')
    console.log('O this nesta função é um objeto GLOBAL -> ', this)
}
logThis()

console.log('\n')

const arrowFunction = () => {
    console.log('Dentro de uma função...')
    console.log('Não aponta para o global ->', this == global)
    console.log('Aponta para o exports ->', this === exports)
    console.log('Aponta para o module.exports (que é basicamente o mesmo que exports) ->', this === module.exports)

    console.log('\n')
    console.log('O this nesta função NÃO É GLOBAL -> ', this)
    console.log('O this nesta função É O MODULE.EXPORTS -> ', this === module.exports)

}
arrowFunction()