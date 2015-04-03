var gulp = require('gulp');
var concat = require('gulp-concat');
var traceur = require('gulp-traceur');
var uglify = require('gulp-uglify');

var sourceFilesPath = 'src/**/*';

gulp.task('dist', function () {
    gulp.src(sourceFilesPath)
        .pipe(concat('ng-prevent.min.js'))
        .pipe(traceur())
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['dist'], function () {
    gulp.src(sourceFilesPath)
        .pipe(concat('ng-prevent.js'))
        .pipe(traceur())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch(sourceFilesPath, ['default']);
});