var gulp = require('gulp'),
  bower = require('main-bower-files'),
  serve = require('gulp-serve'),
  react = require('gulp-react');

var paths = {
  build: './build/js',
  src: ['./src/js/**/**/*.js'],
  jsx: './src/js/**/**/*.jsx',
  bower: bower
};

gulp.task('serve', serve('build'));

gulp.task('jsx', function() {
  return gulp.src(paths.jsx)
    .pipe(react())
    .pipe(gulp.dest(paths.build));
});

gulp.task('libs', function() {
  // Move bower main files into `build/js`
  return gulp
    .src(paths.bower())
    .pipe(gulp.dest(paths.build));
});

gulp.task('src', function() {
  // Move `src/js/**/*.js` into `build/js`.
  // That's all it does.
  gulp.src(paths.src)
    .pipe(gulp.dest(paths.build));
});

gulp.task('watch', function() {
  gulp.watch(paths.src, ['src']);
  gulp.watch(paths.jsx, ['jsx']);
});

gulp.task('default', ['watch', 'serve']);
