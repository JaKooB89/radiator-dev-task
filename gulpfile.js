/* MODULES */
const
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat')

/* PATHS */
const paths = {
  html: {
    src: 'index.html',
  },
  styles: {
    src: 'sass/**/*.sass',
    dest: 'css/',
    min: 'css/min',
  },
  js: {
    src: 'scripts/*.js',
    min: 'scripts/min/',
  }
}

/* TASKS */
function compileSass() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
    })).on('error', sass.logError)
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(postcss([cssnano()]))
    .pipe(concat('main.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.styles.min));
}

function compileJs() {
  return gulp
    .src([paths.js.src])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.js.min));
}

function watcher() {
  gulp.watch(paths.styles.src, compileSass);
  gulp.watch(paths.js.src, compileJs);
}

/* COMMANDS */

// Watch - runs on change
exports.watcher = watcher

// Tasks - runs once
exports.css = compileSass
exports.js = compileJs