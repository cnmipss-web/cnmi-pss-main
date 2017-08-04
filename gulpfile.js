/**
 * Custom Gulpfile for Full Stack MERN Development
 *
 * gulp static
 *      -- copies static resources from /client/static to /public/static
 * gulp html
 *      -- copies html files from /client/html to /public/html
 * gulp styles
 *      -- compiles SCSS style sheets and places minified output in /public/css
 * gulp react-redux-dev
 *      -- transpiles client side JS code w/ webpack using dev settings
 * gulp react-redux-production
 *      -- transpiles client side JS code w/ webpack using production settings
 * gulp clean
 *      -- cleans /public folder of old files
 * gulp default
 *      -- runs static, html, styles, react-redux-dev
 * gulp watch
 *      -- runs static, html, styles, react-redux-dev, and starts nodemon
 * gulp build
 *      -- runs clean, static, html, styles, react-redux-production
 */

const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const livereload = require('gulp-livereload');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');


const webpack = require('webpack');
const webpackStream = require('webpack-stream');
// const WEBPACK_DEV = require('./webpack.config.dev.js');
// const WEBPACK_PROD = require('./webpack.config.production.js');

// File Paths
const CLIENT = './wp-content/src/js/';
const CLJS = './wp-content/src/cljs/dev-resources/public/js/';
const DIST = './wp-content/dist/';
const JS_BUNDLE = 'bundle.js';
const STYLES = './wp-content/src/scss/';

// SCSS fonts
const FONTS = {
  in: [
    CLIENT + './wp-content/src/static/fonts/*.*',
    'node_modules/font-awesome/fonts/*.*',
    'node_modules/bootstrap-sass/assets/fonts/bootstrap/*.*',
    'src/slick-1.6.0/slick/fonts/*.*',
  ],
  out: DIST + 'css/fonts/',
};

const SCSS = {
  in: STYLES,
  out: DIST + 'css/',
  watch: STYLES + '**/*.scss',
  sassOpts: {
    outputStyle: 'compressed',
    precison: 3,
    errLogToConsole: true,
    includePaths: [
      'node_modules/bootstrap-sass/assets/stylesheets/',
      'node_modules/font-awesome/css',
      STYLES + 'base/',
      STYLES + 'components/',
    ],
  },
};

gulp.task('fonts', () => {
  return gulp
    .src(FONTS. in)
    .pipe(gulp.dest(FONTS.out));
});

// Styles
gulp.task('styles', () => {
  const prefixOpts = {
    browsers: [
      "> 1%",
      "last 2 versions",
      "iOS 8.1"
    ],
  };
  return gulp
    .src(SCSS. in + 'main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(SCSS.sassOpts))
    .pipe(autoprefixer(prefixOpts))
    .pipe(cleanCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(SCSS.out))
    .pipe(livereload());
});

// Scripts
gulp.task('dist-cljs', () => {
  return gulp
    .src('./wp-content/src/cljs/cnmipss/resources/public/js/compiled/**/*')
    .pipe(gulp.dest('js/compiled/'))
    .pipe(livereload());
});

gulp.task('default', [
  'fonts', 'styles',
], () => {});

gulp.task('reload', () => {
  return gulp.src(CLJS + 'theme.js').pipe(livereload());
});

gulp.task('watch', [
  'styles',
], () => {
  livereload.listen();
  gulp.watch(SCSS.in + '**/*.scss', ['styles'])
  // gulp.watch(CLJS + '**/*\.js.map', ['reload']);
  // gulp.watch(CLIENT + '/**/*.js',  ['webpack-dev']);
  // gulp.watch(CLJS + '*.js', ['webpack-dev']);
});
