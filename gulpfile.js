var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var notify = require('gulp-notify');

gulp.task('browserify', function () {
    gulp.src('src/js/main.js')
        .pipe(browserify({transform: 'reactify'}))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dest/js'))
        .pipe(notify("Browserify task done."));
});

gulp.task('copy', function () {
    gulp.src('src/css/**/*.*')
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dest/css'))
        .pipe(notify("Copy task done."));

});

gulp.task('default', ['browserify', 'copy']);

gulp.task('watch', function () {
    gulp.watch('src/**/*.*', ['default']);
});