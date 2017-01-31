/* global require */
/* eslint-disable no-console */

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const livereload = require('gulp-livereload');
const autoprefixer = require('gulp-autoprefixer');

const htmlFiles = './public/*.html';
const scssDir = './style/*.scss';
const scssEntry = './style/style.scss';
const output = './public';

gulp.task('sass', function () {
  return gulp
    .src(scssEntry)
    .pipe(sourcemaps.init())
    .pipe(sass({ errLogToConsole: true }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output))
    .pipe(livereload());
});

gulp.task('reload', () => {
  livereload.reload();
});

gulp.task('watch', function() {
  livereload.listen();

  const onChange = e =>
    console.log('File ' + e.path + ' was ' + e.type + ', running tasks...');
  gulp
    .watch(scssDir, ['sass'])
    .on('change', onChange);
  gulp
    .watch(htmlFiles, ['reload'])
    .on('change', onChange);
});

gulp.task('default', ['sass', 'watch']);

gulp.task('prod', [], function () {
  return gulp
    .src(scssEntry)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(output));
});
