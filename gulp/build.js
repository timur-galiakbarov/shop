var gulp = require('gulp');
var browserSync = require("browser-sync");
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var reload = browserSync.reload;
var runSequence = require('gulp-run-sequence');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var path = require('./path.js');

gulp.task('html:build', function () {
    return gulp.src([path.src.html, '!'+path.src.dir+'index.html']) //������� ����� �� ������� ����
        .pipe(gulp.dest(path.build.html)) //�������� �� � ����� build
        .pipe(reload({stream: true})); //� ������������ ��� ������ ��� ����������
});

gulp.task('indexHtml:build', function () {
    return gulp.src(path.src.dir+'index.html') //������� ����� �� ������� ����
        .pipe(gulp.dest(path.build.dir)) //�������� �� � ����� build
        .pipe(reload({stream: true})); //� ������������ ��� ������ ��� ����������
});

gulp.task('css:build', function () {
    return gulp.src(path.src.css) //������� ����� �� ������� ����
        .pipe(concat('commonStyles.css'))
        .pipe(gulp.dest(path.build.css)) //�������� �� � ����� build
        .pipe(reload({stream: true})); //� ������������ ��� ������ ��� ����������
});

gulp.task('js:build', function () {
    return browserify({entries: path.src.js}, {debug: false})
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        //.pipe(uglify()) //������ ��� js
        .pipe(gulp.dest(path.build.js)); //�������� ������� ���� � build
});

gulp.task('fonts:build', function () {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', ['bower_components'], function (done) {
    runSequence(
        'indexHtml:build',
        'html:build',
        'css:build',
        'js:build',
        'fonts:build',done);
});