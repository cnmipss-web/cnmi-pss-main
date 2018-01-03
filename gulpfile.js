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

const REGISTERED_TASKS = [];
const WP_THEMES = [{
  name: 'cnmi-pss-district-website',
  devTask: 'cnmi-pss-district-website-style',
  prodTask: 'cnmi-pss-district-website-prod-style',
  src: './wp-content/themes/cnmi-pss/scss/style.scss',
  dist: './wp-content/themes/cnmi-pss/',
  prefixOpts: {
    browsers: [
      "> 1%",
      "last 2 versions",
      "iOS 8.1"
    ],
  },
  sassOpts: {
    outputStyle: 'compressed',
    precison: 3,
    errLogToConsole: true,
    includePaths: [],
  },
}, {
  name: 'cnmi-pss-school-website',
  devTask: 'cnmi-pss-school-website-style',
  prodTask: 'cnmi-pss-school-website-prod-style',
  src: './wp-content/themes/cnmi-pss-school/scss/style.scss',
  dist: './wp-content/themes/cnmi-pss-school/',
  prefixOpts: {
    browsers: [
      "> 1%",
      "last 2 versions",
      "iOS 8.1"
    ],
  },
  sassOpts: {
    outputStyle: 'compressed',
    precison: 3,
    errLogToConsole: true,
    includePaths: [],
  },
}]

WP_THEMES.forEach(createDevTask);
WP_THEMES.forEach(createProdTask);

const DEV_TASKS = WP_THEMES.map(style => style.devTask);
const PROD_TASKS = WP_THEMES.map(style => style.prodTask)

gulp.task('default', DEV_TASKS);
gulp.task('production', PROD_TASKS);

gulp.task('watch', DEV_TASKS, () => {
  livereload.listen();
  WP_THEMES.forEach((style) => {
    gulp.watch(style.src.substring(0, style.src.lastIndexOf('/')) + '/**/*.scss', [style.devTask]);
  });
});

/**
 * Register a gulp task to compile the given style with development settings.
 * 
 * @param {Object} style Object specifying properties of the style 
 * @param {string} style.name Name of the style
 * @param {string} style.src Src directorty the SASS files
 * @param {string} style.dist Output directory of the compiled CSS file
 * @param {Object} style.sassOpts SASS compilation options for this style
 * @param {Object} style.prefixOpts autoprefixes options for this style
 */
function createDevTask(style) {
  gulp.task(style.devTask, () => {
    return gulp
      .src(style.src)
      .pipe(sourcemaps.init())
      .pipe(sass(style.sassOpts))
      .pipe(autoprefixer(style.prefixOpts))
      .pipe(cleanCss())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(style.dist))
      .pipe(livereload());
  });
}


/**
 * Register a gulp taks to compile the given style with production settings
 * 
 * @param {Object} style Object specifying properties of the style 
 * @param {string} style.name Name of the style
 * @param {string} style.src Src directorty the SASS files
 * @param {string} style.dist Output directory of the compiled CSS file
 * @param {Object} style.sassOpts SASS compilation options for this style
 * @param {Object} style.prefixOpts autoprefixes options for this style
 */
function createProdTask(style) {
  gulp.task(style.prodTask, () => {
    return gulp
      .src(style.src)
      .pipe(sass(style.sassOpts))
      .pipe(autoprefixer(style.prefixOpts))
      .pipe(cleanCss())
      .pipe(gulp.dest(style.dist))
      .pipe(livereload());
  });
}