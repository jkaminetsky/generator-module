var gulp = require('gulp'),
    babel = require('gulp-babel'),
    jshint = require('gulp-jshint'),
    runSequence = require('run-sequence'),
    args = require('yargs').argv,
    del = require('del'),
    stylish = require('jshint-stylish'),
    tapStream = require('tap-stream-helpers').tapStream,

    // arguments
    jshintOut = args.jshintOut,
    fileToLint = args.file;

require('gulp-help')(gulp);

gulp.task('compile', 'Builds the app', function (cb) {
    del('generators/app/**/*', function (err) {
        if (err) {
            process.stderr.write(err);
            cb();
        } else {
            return gulp.src('src/generators/app/index.js')
                .pipe(babel())
                .pipe(gulp.dest('generators/app'));
        }
    });
});

gulp.task('test', 'Runs all tests and linters', function (cb) {
    runSequence('jshint', cb);
});

/**
* To lint (jshint) an individual file:
* gulp jshint --file src/www/myfile.js
* Multiple TAP files can be created for each set of tests
* To send output to tap file with format build/results/jshint**.tap
* where ** is an index incremented for each file analyzed:
* gulp jshint --jshintOut build/results/jshint
*/

gulp.task(
    'jshint',
    'Lints all javascript source files to determine if they match coding standards, using jshint.',
    function () {
        var srcToLint = ['src/**/*.js', '!node_modules/**/*'];

        srcToLint = fileToLint || srcToLint;

        jshintOut = jshintOut || './build/results/jshint';

        // clean out existing jshint files
        del([jshintOut + '*']);

        return gulp
            .src(srcToLint)
            .pipe(jshint())
            .pipe(jshint.reporter(stylish))
            .pipe(tapStream(jshintOut, function (f) {
                if (f.jshint.results) {
                    return f.jshint.results.map(function (result) {
                        return {
                            isOk: false,
                            file: f.path,
                            line: result.error.line,
                            column: result.error.character,
                            message: result.error.reason
                        };
                    });
                }
            }));
    },
    {
        options: {
            file: 'A specific file to lint.'
        }
    }
);
