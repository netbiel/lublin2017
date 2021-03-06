'use strict';


require('es6-promise').polyfill();
var gulp         = require('gulp'),
    cssnano      = require('gulp-cssnano'),
    sass         = require('gulp-sass');

var supported = [
    'last 2 versions',
    'safari >= 8',
    'ie >= 10',
    'ff >= 20',
    'ios 6',
    'android 4'
];

gulp.task('css', function(){
    return gulp.src(['src/sass/**/*.scss'])
        .pipe(sass())

        .pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
    gulp.watch('src/sass/**/*.scss', ['css']);
    // Other watchers
});

gulp.task('default', ['watch']);