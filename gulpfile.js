var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var connect = require('gulp-connect');

gulp.task('browserify', function () {
    gulp.src('src/js/main.js')
        .pipe(browserify({transform: 'reactify'}))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(notify("Browserify task done."));
});


gulp.task('serve', function() {
    connect.server({
        root: './',
        port: 8001,
        livereload: true
    });
});


gulp.task('copy', function () {
    gulp.src('src/css/**/*.*')
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(notify("Copy task done."));

});

gulp.task('default', ['browserify', 'copy']);

gulp.task('watch', function () {
    gulp.watch('src/**/*.*', ['default']);
});