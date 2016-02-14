var gulp = require('gulp'),
    sass = require('gulp-sass'),
    nodemon = require('gulp-nodemon');
    
gulp.task('default', ['copy-html', 'copy-assets', 'copy-javascript', 'build-css', 'start-server', 'watch']);


// Copy HTML
gulp.task('copy-html', function() {
  gulp.src('./src/app/**/*.html')
  .pipe(gulp.dest('./dist'));
});

// Copy Assets
gulp.task('copy-assets', function() {
  gulp.src('./src/app/assets/**/*')
  .pipe(gulp.dest('./dist/assets'));
});

// Copy Javascript
gulp.task('copy-javascript', function() {
  gulp.src('./src/app/**/*.js')
  .pipe(gulp.dest('./dist'));
});

// Compile CSS
gulp.task('build-css', function() {
  return gulp.src('./src/app/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./dist'));
});

// Watch app for changes
gulp.task('watch', function() {
  gulp.watch('./src/app/**/*.scss', ['build-css']);
  gulp.watch('./src/app/**/*.html', ['copy-html']);
  gulp.watch('./src/app/**/*.js', ['copy-javascript']);
  gulp.watch('./src/app/assets/**/*.js', ['copy-assets']);
});

// Start the server
gulp.task('start-server', function () {
  nodemon({
    script: 'server.js', 
    ext: 'js html', 
    env: { 'NODE_ENV': 'development' }
  });
});
