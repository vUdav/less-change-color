'use strict';

var gulp = require('gulp'),
		browserSync = require("browser-sync");

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

gulp.task('default',['webserver'],function(){})