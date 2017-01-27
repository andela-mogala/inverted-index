const gulp = require('gulp');
const gutil = require('gulp-util');
const connect = require('gulp-connect');
const browserSync = require('browser-sync').create();


const htmlSources = ['**/*.html'],
  jsSources = ['src/js/*.js', 'jasmine/spec/*.js']
  cssSources = ['src/css/*.css']

gulp.task('copy', () => {
  gulp.src('README.md')
    .pipe(gulp.dest('src'));
});

gulp.task('log', () => {
  gutil.log('==My log task==');
});

gulp.task('watch', () => {
  gulp.watch('src/*.js', ['js']);
  gulp.watch(jsSources, ['js']);
  gulp.watch(htmlSources, ['html']);
});

gulp.task('html', () => {
  gulp.src(htmlSources)
    .pipe(connect.reload());
});

gulp.task('js', () => {
  gulp.src(jsSources)
    .pipe(connect.reload());
});

gulp.task('css', () => {
  gulp.src(cssSources)
    .pipe(connect.reload());
});

gulp.task('connect', () => {
  connect.server({
    root: '.',
    livereload: true
  });
});

gulp.task('default', ['html', 'js', 'css', 'connect', 'watch']);


