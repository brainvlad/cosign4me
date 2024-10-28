const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs');
const groupMedia = require('gulp-group-css-media-queries');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const webpack = require('webpack-stream');
const babel = require('gulp-babel');
const copy = require('gulp-copy');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const htmlclean = require('gulp-htmlclean');

const fileIncludeSettings = {
    prefix: '@@',
    basepath: '@file'
}

const serverOptions = {
    livereload: true,
    open: true,
}

const plumberNotify = (title) => {
    return {
        errorHandler: notify.onError({
            title: title,
            message: 'Error: <%= error.message %>',
            sound: false
        })
    }
}

gulp.task('js:docs', function() {
    return gulp
        .src('./src/js/*.js')
        .pipe(plumber(plumberNotify('JS')))
        .pipe(babel())
        .pipe(webpack(require('../webpack.config.js')))
        .pipe(gulp.dest('./docs/js'));
});

gulp.task('clean:docs', function(done) {
    if (fs.existsSync('./docs/')) {
        return gulp
            .src('./docs/', { read: false })
            .pipe(clean());
    }
    done();
});

gulp.task('html:docs', function() {
    return gulp
        .src(['./src/html/**/*.html', '!./src/html/components/*.html'])
        .pipe(plumber(plumberNotify('HTML')))
        .pipe(fileInclude(fileIncludeSettings))
        .pipe(htmlclean())
        .pipe(gulp.dest('./docs/'));
});

gulp.task('sass:docs', function() {
    return gulp
        .src('./src/scss/*.scss')
        .pipe(plumber(plumberNotify('SASS')))
        .pipe(autoprefixer())
        .pipe(sassGlob())
        .pipe(groupMedia())
        .pipe(sass().on('error', sass.logError))
        .pipe(csso())
        .pipe(gulp.dest('./docs/css/'));
});

gulp.task('images:docs', function() {
    return gulp
        .src('./src/img/**/*')
        .pipe(copy('./docs/img/', { prefix: 2 }));
});

gulp.task('fonts:docs', function() {
    return gulp
        .src('./src/fonts/**/*')
        .pipe(copy('./docs/fonts/', { prefix: 2 }));
});

gulp.task('files:docs', function() {
    return gulp
        .src('./src/files/**/*')
        .pipe(copy('./docs/files/', { prefix: 2 }));;
});

gulp.task('server:docs', function() {
    return gulp
        .src('./docs/')
        .pipe(server(serverOptions));
});
