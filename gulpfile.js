var gulp = require('gulp');
var traceur = require('gulp-traceur');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

gulp.task('dist', function () {
    gulp.src('src/*.js')
        .pipe(traceur())
        .pipe(uglify({
            mangle: false
        }))
        .pipe(rename('ng-prevent.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['dist'], function () {
    gulp.src('src/*.js')
        .pipe(traceur())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('src/*.js', ['default']);
});