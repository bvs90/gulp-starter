var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass');
    
gulp.task('default', ['watch']);


// Compile CSS
gulp.task('build-css', function() {
  return gulp.src('./src/app/styles/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./dist/styles/'));
});

// Watch app for changes
gulp.task('watch', function() {
  gulp.watch('./src/app/styles/*.scss', ['build-css']);
});

