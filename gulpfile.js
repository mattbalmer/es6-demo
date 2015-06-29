var gulp = require('gulp');

var recipes = {
    es6: require('./recipes/ngm-js')
};

gulp.task('js', recipes.es6({
    input: 'client/index.js',
    output: 'public/js',
    name: 'app'
}));

gulp.task('watch', function() {
    return gulp.watch('client/**/*', ['compile']);
});

gulp.task('compile', ['js']);
gulp.task('default', ['compile', 'watch']);