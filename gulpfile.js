var gulp = require('gulp');
var uglify = require('gulp-uglify');
var traceur = require('gulp-traceur');

gulp.task('default', function () {
    return gulp.src('src/*.js')
        .pipe(traceur())
        .pipe(gulp.dest('dist'));
});

gulp.task('dist', function () {
    gulp.src('src/*.js')
        .pipe(traceur())
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest('dist'))
});