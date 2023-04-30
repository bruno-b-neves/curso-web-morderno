const gulp = require('gulp')
const { series, parallel } = require('gulp')

const antes1 = (call) => {
    console.log('Tarefa antes 1')

    return call()
}

const antes2 = (call) => {
    console.log('Tarefa antes 2')

    return call()
}

const copiar = (call) => {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')
        // .pipe(imagePelaMetade())
        // .pipe(imagemEmPretoEBranco())
        // .pipe(transformacaoA())
        // .pipe(transformacaoB())
        // .pipe(transformacaoC())
        .pipe(gulp.dest('pastaB'))

    return call()
}

const fim = (call) => {
    console.log('Fim!!!')

    return call()
}

// Caso tenhamos o erro task not defined : default
// A forma de corrigir isso é colocando module.exports.default
module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
)
