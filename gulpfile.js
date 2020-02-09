'use strict';

const gulp = require('gulp');
const minify = require('gulp-minify');
const concat = require('gulp-concat');

gulp.task('compress', async function() {
    gulp.src(['*.js', '*.mjs', '!gulpfile.js'])
      .pipe(minify())
      .pipe(gulp.dest('dist'))
});

gulp.task('scripts', async function() {
    return gulp.src(['Mell/html.js', 'Mell/class.js', 'Mell/events.js', 'Mell/index.js'])
      .pipe(concat('mell.js'))
      .pipe(gulp.dest('./'));
});