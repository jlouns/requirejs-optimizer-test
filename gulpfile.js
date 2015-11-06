'use strict';

var gulp = require('gulp'),
    gulpIf = require('gulp-if'),
    requirejsOptimize = require('gulp-requirejs-optimize');

var commonIncludes = [
    'common',
    'jquery',
    'underscore',
    'backbone',
    'localstorage',
    'helpers',
    'BaseView',
    'UserModel',
    'UsersCollection',
    'users'
];

var commonOptions = {
    mainConfigFile: 'js/common.js',
    name: 'common',
    include: commonIncludes
};

var moduleOptions = function(file) {
    var moduleName = file.relative.split('-')[0];

    return {
        mainConfigFile: 'js/common.js',
        name: moduleName + '-script',
        include: 'app/' + moduleName + '-init',
        exclude: commonIncludes
    }
};

gulp.task('scripts', function() {
    return gulp.src(['js/*.js'])
        .pipe(gulpIf('common.js',
            requirejsOptimize(commonOptions),
            requirejsOptimize(moduleOptions)))
        .pipe(gulp.dest('dist/js'));
});

// Default task
gulp.task('default', ['scripts']);
