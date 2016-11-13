var gulp = require('gulp');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var eslint = require('gulp-eslint');


var runSequence = require('run-sequence');
var pump = require('pump');


var DEST = 'dist';

gulp.task('lint', function () {
    return pump(
        gulp.src(['app/**/*.js',
            '!app/bower_components/**/*',
            '!dist/**/*']),
        eslint(),
        eslint.format()
    );
});

gulp.task('build-dependencies', function () {
    return gulp.src('app/index.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cleanCss({processImportFrom:['local']})))
        .pipe(gulp.dest(DEST));
});

gulp.task('build-resources', function () {
    return pump(
        gulp.src(['app/**/*', '!**/*.js', '!**/*.css',
            '!app/index.html'], {load: false}),
        gulp.dest(DEST)
    );
});

gulp.task('build', function (cb) {
    return runSequence(
        'build-dependencies',
        'build-resources'
        , cb);
});

gulp.task('clean', function () {
    return pump(
        gulp.src('dist/*', {read: false}),
        clean()
    );
});

gulp.task('clean-build', function (cb) {
    runSequence(
        'clean',
        'build',
        cb);
});

gulp.task('default', function (cb) {
    runSequence(
        'lint',
        'clean-build',
        cb);
});