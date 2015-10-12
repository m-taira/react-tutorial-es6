var gulp = require('gulp');
var webpack = require('gulp-webpack');
var config = require('./config');

gulp.task("build", () => {
  gulp.src(config.webpack.entry)
    .pipe(webpack(config.webpack))
    .pipe(gulp.dest(config.js.dest));

  gulp.src('src/*.html').pipe(gulp.dest('./build'));
  gulp.src('src/css/*.css').pipe(gulp.dest('./build/css'))
});



gulp.task('watch', () => {
  gulp.watch(['./src/**/*.es6', './src/**/*.js', './src/*.html', './src/templates/*.jade', './src/css/*.css'], ['build'])
});
