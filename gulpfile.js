var gulp = require('gulp'),
  bower = require('main-bower-files'),
  serve = require('gulp-serve'),
  watch = require('gulp-watch');

var paths = {
  build: './build/js',
  src: ['./src/js/**/**/*.js'],
  bower: bower
};

gulp.task('serve', serve('build'));

gulp.task('libs', function() {
  // Move bower main files into `build/js`
  return gulp
    .src(paths.bower())
    .pipe(gulp.dest(paths.build));
});

gulp.task('watch', function() {
  // Move `src/js/**/*.js` into `build/js`.
  // That's all it does.
  gulp.src(paths.src)
    .pipe(watch(paths.src))
    .pipe(gulp.dest(paths.build));
});

gulp.task('default', ['libs', 'watch', 'serve']);
