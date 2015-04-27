var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

var sourceFilesPath = 'src/**/*';

gulp.task('dist', function () {
    gulp.src(sourceFilesPath)
        .pipe(concat('ng-prevent.min.js'))
        .pipe(babel())
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['dist'], function () {
    gulp.src(sourceFilesPath)
        .pipe(concat('ng-prevent.js'))
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch(sourceFilesPath, ['default']);
});