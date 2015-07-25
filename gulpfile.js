var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
  return gulp.src("src/*.js")
    .pipe(babel({optional: ['es7.classProperties']}))
    .pipe(gulp.dest("lib"));
});
