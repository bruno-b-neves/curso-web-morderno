const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

const transformJS = (call) => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ['env'],
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
}

const fim = call => {
    console.log('Fiimm!!')
    return call()
}

exports.default = series(transformJS, fim)