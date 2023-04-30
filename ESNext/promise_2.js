// Com CALLBACK...
// setTimeout recebe uma funcao como parametro
setTimeout(function() {
    console.log('Executando callback...')
    
    setTimeout(function() {
        console.log('Executando callback...')
        
        setTimeout(function() {
            console.log('Executando callback...')     
        }, 2000)
    }, 2000)
}, 2000)

// Com PROMISE
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

esperarPor(3000)
    .then(() => esperarPor())
    .then(esperarPor)