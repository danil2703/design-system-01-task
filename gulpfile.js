const gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var concatJs = require('gulp-concat');
 
gulp.task('default', function () {
  return gulp.src('src/*/*/*.css')
    .pipe(concatCss("/style.css"))
    .pipe(gulp.dest('build'));

});

gulp.task('buildjs', function() {
  return gulp.src('src/*/*/*.js')
      .pipe(concatJs("/script.js"))
      .pipe(gulp.dest('build'));
});