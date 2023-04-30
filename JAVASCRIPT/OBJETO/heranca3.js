const pai = { nome: 'Pedro', corCabelo: 'preto' }

// 1º Exemplo
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

// 2º Exemplo: Crio outros atributos, se será numerado, se será escrito!!
const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})
console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

// 3º Exemplo
for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}
