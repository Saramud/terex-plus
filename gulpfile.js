const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const imageminJpg  = require('imagemin-jpeg-recompress');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const pug = require('gulp-pug');
const sourcemaps = require('gulp-sourcemaps'); 

const styleFiles = [
    './src/sass/main.scss',
    './src/sass/sections.scss',
]

const jsFiles = [
    './src/js/lib.js',
    './src/js/filter.js',
]

function pugs(){
    return gulp.src('./src/pug/pages/**/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./'))
}

function pugsTech(){
    return gulp.src('./src/pug/technics/**/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./technics'))
}

function img(){
    return gulp.src('src/img/*')
        .pipe(gulp.dest('./build/img'))
}

function styles(){
    return gulp.src('./src/sass/**/*.scss')
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(concat('all.css'))
            .pipe(autoprefixer({
                overrideBrowserslist: ['last 2 versions'],
                cascade: false
            }))
            .pipe(cleanCSS({compatibility: 'ie9'}))
            .pipe(gulp.dest('./build/css'))
}

function scripts(){
    return gulp.src(jsFiles)
        .pipe(babel())
        .pipe(concat('all.js'))
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./",
        },
        tunnel: false,
    });
    gulp.watch('./src/sass/*.scss', styles).on('change', browserSync.reload);
    gulp.watch('./src/js/**/*.js', scripts);
    gulp.watch('./src/img/**/*.webp', img);
    gulp.watch('./src/pug/**/*.pug', pugsTech);
    gulp.watch('./src/pug/**/*.pug', pugs);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

function clean() {
    return del(['build/*']);
}

gulp.task('pugs', pugs); 
gulp.task('pugsTech', pugsTech)
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean,
                    gulp.parallel(styles, scripts, img)
                    ));
gulp.task('dev', gulp.series('build', 'watch'));

