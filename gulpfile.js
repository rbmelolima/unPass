"use strict";

const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const minify = require('gulp-minify');


sass.compiler = require('node-sass');

gulp.task('sass', watchSass);
gulp.task('minifyCss', minifyCss);
gulp.task('expandedCss', expandedCss);
gulp.task('js', minifyJs);

function minifyCss() {
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

function watchSass() {
    gulp.watch("css/sass/**/*.scss", minifyCss);
}

function minifyJs() {
    return gulp
        .src('./js/unpass.js')
        .pipe(minify())
        .pipe(gulp.dest('./js'));
}