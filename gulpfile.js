//var gulp = require('gulp');
//var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');
//var watch = require('gulp-watch');
//var sourcemaps = require('gulp-sourcemaps');
//var ngHtml2Js = require("gulp-ng-html2js");
//gulp.task('scripts', function () {
//	gulp.src(['./app_client/**/*.js', '!./app_client/**/*.test.js', '!./app_client/app.min.js']).pipe(sourcemaps.init()).pipe(concat('./app.min.js')).pipe(uglify({
//		mangle: true
//	})).pipe(gulp.dest('app_client')).pipe(sourcemaps.write('./')).pipe(gulp.dest('app_client'));
//});
//gulp.task('watch', function () {
//	watch(['./app_client/**/*.js', '!./app_client/**/*.test.js', '!./app_client/app.min.js'], function () {
//		gulp.start('scripts');
//	});
//});
//gulp.task('default', ['scripts', 'watch']);
var elixir = require('laravel-elixir')
elixir(function (mix) {
	mix.sass("./src/assets/sass/*.scss", "./app_client/assets/css/app.min.css");
	mix.webpack("./src/**/*.js", "./app_client/app.min.js");
	//	mix.webpack("./src/app/app.js", "./deploy/app/app.js");
	mix.webpack("./node_modules/angular/angular.js", "./vendors/lib/angular/angular.js");
	mix.webpack("./node_modules/angular-route/angular-route.js", "./vendors/lib/angular/angular-route.js");
	mix.webpack("./node_modules/bootstrap/dist/js/bootstrap.js", "./vendors/lib/bootstrap/js/bootstrap.js");
	mix.sass("./node_modules/bootstrap/dist/css/bootstrap.css", "./vendors/lib/bootstrap/css/bootstrap.css");
	mix.copy('./node_modules/bootstrap/dist/fonts/', 'vendors/lib/bootstrap/fonts/');
	//mix.copy('src/assets/fonts/', './deploy/assets/fonts/');
	//mix.copy('src/assets/images/', './deploy/assets/images/');
	//mix.version(['./web-dev/assets/css/main.css', './web-dev/assets/js/main.js']);
	mix.copy("./src/**/*.html", "./app_client");
});