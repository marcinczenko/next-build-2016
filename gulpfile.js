var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var mold = require('mold-source-map');
var exorcist = require('exorcist');

var browserSync = require('browser-sync').create();
var historyApiFallback = require('connect-history-api-fallback')

watchify.args.debug = true;
var bundler = watchify(browserify('app/js/app.js', {
  cache: {},
  packageCache: {},
  debug: true
}));

bundler.transform(babelify);

bundler.on('update', bundle);

function bundle() {
  gutil.log('Compiling JS...');

  return bundler.bundle()
    .on('error', function(err) {
      gutil.log(err.message);
      browserSync.notify('Browserify error!');
      this.emit('end');
    })
    .pipe(mold.transformSourcesRelativeTo('app/js'))
    .pipe(exorcist('dist/js/bundle.js.map'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream({once: true}));
}

gulp.task('bundle', function() {
  return bundle();
});

gulp.task('html', function() {
  "use strict";
  return gulp.src(['app/index.html', 'app/favicon.ico', 'app/main.css'])
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});


gulp.task('less',function() {
  return gulp.src(['app/less/index.less'])
      .pipe(plumber())
      .pipe(less()).pipe(rename('style.css'))
      .pipe(autoprefixer({
        browsers: ['last 2 version'],
        cascade: false
      }))
      .pipe(gulp.dest('dist/css/'))
      .pipe(browserSync.stream());
});

gulp.task('default', ['bundle', 'html', 'less'], function() {
  gulp.watch('app/index.html', ['html']);
  gulp.watch(['app/less/*.less', 'app/less/**/*.less'], ['less']);
  browserSync.init({
    server: 'dist',
    middleware : [ historyApiFallback() ],
    ghostMode: false,
    browser: "google chrome"
  });
});
