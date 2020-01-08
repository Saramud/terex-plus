const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const babel = require("gulp-babel");
const pug = require("gulp-pug");

const styleFiles = [
    './src/sass/about.scss',
    './src/sass/main.scss',
    // './src/css/bootstrap.min.css'
]

const jsFiles = [
    './src/js/lib.js',
    './src/js/filter.js',
]
function pugs(){
    return gulp.src('src/pug/pages/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./'))
}

function img(){
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img'))
};

function styles(){
    return gulp.src(styleFiles)
            .pipe(sass())
            .pipe(concat('all.css'))
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(cleanCSS({
                level: 2
            }))
            .pipe(gulp.dest('./build/css'))
            .pipe(browserSync.stream());
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
    gulp.watch('./src/sass/**/*.scss', styles);
    gulp.watch('./src/js/**/*.js', scripts);
    gulp.watch('./src/img/**/*.jpg', img);
    gulp.watch('./src/**/*.pug', pugs);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

function clean() {
    return del(['build/*']);
}
gulp.task('pugs', pugs); 
gulp.task('watch', watch); 
gulp.task('build', gulp.series(clean,
                    gulp.parallel(styles, scripts, img)
                    ));
gulp.task('dev', gulp.series('build', 'watch'));

