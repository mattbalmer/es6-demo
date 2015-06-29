var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    through2 = require('through2');

module.exports = function(params) {
    return function() {
        return gulp.src(params.input)
            .pipe(through2.obj(function(file, enc, next) {
                browserify(file.path, {debug: true})
                    .transform(babelify)
                    .bundle(function(err, res) {
                        if(err) {return next(err);}

                        file.contents = res;
                        next(null, file);
                    });
            }))
            .on('error', function(error) {
                console.log(error.stack);
                this.emit('end');
            })
            .pipe(rename(params.name + '.js'))
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(uglify())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(params.output));
    };
};