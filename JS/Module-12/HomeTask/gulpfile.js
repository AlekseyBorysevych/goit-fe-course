'use strict';
const gulp = require('gulp');

const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('gulp-cssnano');
const gcmq = require('gulp-group-css-media-queries');
const del = require('del');
const htmlmin = require('gulp-htmlmin');
const plumber = require('gulp-plumber');
const rigger = require('gulp-rigger');
const stylelint = require('gulp-stylelint');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sequence = require('run-sequence');

gulp.task('html', () =>
  gulp
    .src('./src/html/*.html')
    .pipe(rigger())
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      }),
    )
    .pipe(gulp.dest('./build')),
);

gulp.task('styles', () =>
  gulp
    .src('./src/style/style.css')
    .pipe(plumber())
    .pipe(
      stylelint({
        reporters: [{ formatter: 'string', console: true }],
      }),
    )
    .pipe(postcss([autoprefixer()]))
    .pipe(gcmq())
    .pipe(gulp.dest('./build/style'))
    .pipe(cssnano())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./build/style'))
);

gulp.task('scripts', () =>
  gulp
    .src('./src/js/*.js')
    .pipe(plumber())
    .pipe(
      babel({
        presets: ['env'],
      }),
    )
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./build/js'))
    .pipe(uglify())
    .pipe(rename('index.min.js'))
    .pipe(gulp.dest('./build/js')),
);

gulp.task('del:build', () => del('./build'));

gulp.task('build', cb =>
  sequence(
    'del:build',
    'styles',
    'html',
    'scripts',
    cb,
  ),
);