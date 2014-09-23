var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	nib = require('nib'),
	stylusDir = './stylus';

gulp.task('stylus', function () {
	return gulp.src(stylusDir + '/main.styl')
	.pipe(stylus({
		errors: true,
		use: [ nib() ]
	}))
	.pipe(gulp.dest(stylusDir));
});

gulp.task('watch', function () {
	return gulp.watch(stylusDir + '/**/*', [ 'stylus' ]);
});

gulp.task('default', [ 'stylus', 'watch' ]);
