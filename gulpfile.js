'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const nodemon = require('gulp-nodemon');
const webpack = require('webpack-stream');
const sass = require('gulp-sass');

function startBrowserSync(){
  browserSync.init({
    proxy: "http://localhost:3000",
    port: 7000,
    reloadDelay: 1000
  });
}

function browsersyncReload(cb){
  browserSync.reload();
  cb();
}

function buildStyles() {
  return gulp.src('./app/styles/**/*.scss')
    .pipe(sass({
      includePaths: ['node_modules']
    }).on('error', sass.logError))
    //outputs same name as main scss file (style.scss)
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.reload({stream:true}));
};
exports.buildStyles = buildStyles;

function watchSass() {
  gulp.watch('./app/styles/**/*.scss', gulp.series(buildStyles, browsersyncReload));
}

exports.watchSass = watchSass;

function startWebpack(){
    return gulp.src('./app/app.tsx')
    .pipe(webpack(require('./webpack.config.js') ))
    .pipe(gulp.dest('./'));
}
exports.startWebpack = startWebpack;

function startServer(cb){
  var started = false;

  return nodemon({ script:
            'server.js'
          , watch: ['*.js'],
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
    })
      .on('restart', function () {
        console.log('restarted!')
      })
      .on('crash', function() {
        console.error('Application has crashed!\n')
         stream.emit('restart', 10)  // restart the server in 10 seconds
      })
    .on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true;
		}
    browserSync.reload();
	})
  .once('quit', function () {
		// handle ctrl+c without a big weep
		process.exit();
	});
}
exports.startServer = startServer;



exports.default = gulp.parallel(buildStyles, watchSass, startBrowserSync,  startServer, startWebpack);
