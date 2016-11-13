var gulp = require('gulp');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var eslint = require('gulp-eslint');
var inject = require('gulp-inject-string');


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
        .pipe(inject.after('<!-- build:analytics -->', "<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-87310885-1', 'auto');ga('send', 'pageview');</script>"))
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