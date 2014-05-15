
var gulp = require('gulp');
var amdOptimize = require('amd-optimize');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('scripts:c', function() {
	gulp.src('js/*.js')
		.pipe(amdOptimize('c'))
		.pipe(concat('c.js'))
		.pipe(uglify('c.js'))
		.pipe(gulp.dest('build/js/'))
});