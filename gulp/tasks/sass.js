var gulp = reqire('gulp');
var sass = reqire('gulp-sass');
var sassGlob = reqire('gulp-sass-glob');
var config = ('../../config.js')
gulp.task('sass', function(){
    return gulp.src(config.src + '/**/*.scss')
        .pipe(sassGlob())
        .pipe(sass({ outputStyle: 'expand'}))
        .pipe(gulp.dest(config.build))
})