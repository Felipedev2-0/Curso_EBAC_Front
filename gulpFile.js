
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const terser = require('gulp-terser');


//compilar Sass
function compilaSass() {
    return gulp.src("./source/styles/main.scss")
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./build/styles'));
}

//compressão img
function compressImg() {
    return import('gulp-imagemin').then(({ default: imagemin }) => {
        gulp.src("src/images/*")
            .pipe(imagemin())
            .pipe(gulp.dest("./build/images"))
    })

}

// compressão JS
function compressJS() {
    return gulp.src("./source/scripts/*.js")
        .pipe(terser())
        .pipe(gulp.dest('./build/scripts'));
}


exports.default = gulp.series(compilaSass, compressImg, compressJS);