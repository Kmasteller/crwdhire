var less = require('gulp-less');
var path = require('path');
var gulp = require("gulp");
 
gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/less/css'));
});