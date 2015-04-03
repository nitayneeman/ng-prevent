var gulp = require('gulp');
var concat = require('gulp-concat');
var traceur = require('gulp-traceur');
var uglify = require('gulp-uglify');

gulp.task('dist', function () {
    gulp.src('src/*/*.js')
        .pipe(concat('ng-prevent.min.js'))
        .pipe(traceur())
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['dist'], function () {
    gulp.src('src/*/*.js')
        .pipe(concat('ng-prevent.js'))
        .pipe(traceur())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('src/*.js', ['default']);
});