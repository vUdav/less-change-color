'use strict';

var gulp = require('gulp'),
		browserSync = require("browser-sync"),
		ghPages = require('gulp-gh-pages');

// Webserver
gulp.task('webserver', function () {
	browserSync({
		server: './src',
		baseDir: './src',
		host: 'localhost',
		port: 9000,
		injectChanges: true,
		tunnel: false,
	});
});

/* GitHub Pages */
gulp.task('gh-pages', function() {
	return gulp.src("./src/**/*")
		.pipe(ghPages({
			remoteUrl: "git@github.com:vUdav/less-change-color.git"
		}));
});

gulp.task('default',['webserver'],function(){})