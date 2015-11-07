var gulp = require("gulp");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var watch = require("gulp-watch");
var sourcemaps = require("gulp-sourcemaps");

gulp.task("build", function () {
  return gulp.src(["js/pico/Pico.js", "js/pico/*.js", "js/pico/ui/PicoObject.js", "js/pico/ui/*.js"])
    .pipe(sourcemaps.init())
    .pipe(concat("pico.js"))
    .pipe(babel({
        presets: ['es2015', 'stage-0']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest("js"));
});
gulp.task("watch", ['build'], function() {
     gulp.watch('js/pico/**/*.js', ['build']);
});
gulp.task("default", ['build', 'watch']);