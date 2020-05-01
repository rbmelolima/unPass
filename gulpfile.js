"use strict";

const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('default', watch);
gulp.task('sassprod', minifyScss);
gulp.task('dev', expandedCss);

function minifyScss() {
    return gulp
        .src("css/sass/style.scss")
        .pipe(rename('style.min.css'))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest("css"));
};

function expandedCss() {
    return gulp
        .src("css/sass/style.scss")
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(gulp.dest("css"));
};

function watch() {
    gulp.watch("css/sass/**/*.scss", minifyScss);
}

//Para executar o gulp basta digitar "gulp" no terminal