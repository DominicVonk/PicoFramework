var gulp = require("gulp");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var watch = require("gulp-watch");
var minify = require('gulp-minify');
var rename = require("gulp-rename");

var dir = 'js/pico';
var ext = 'js';
var buildList = [
	'Pico',
	'AlignMode',
	'Color',
	'Cursor',
	'Font',
	'Margin',
	'Padding',
	'Position',
	'Size',
	'SizeMode',
	'ui/_Elements',
	'ui/_Event',
	'ui/Control',
	'ui/Panel',
	'ui/Window',
	'ui/Label',
	'ui/LinkLabel',
	'ui/Picture',
	'ui/Button',
	'ui/TextBox',
	'ui/CheckBox',
	'ui/ProgressBar'
];
gulp.task("build", function () {
	var list = [];
	for (var i in buildList) {
		var item = buildList[i];
		list.push(dir + '/' + item + '.' + ext);
	}
  return gulp.src(list)
    .pipe(concat("pico.js"))
    .pipe(babel({
        presets: ['es2015', 'stage-0']
    }))
    .pipe(gulp.dest("js"))
    .pipe(minify())
    .pipe(gulp.dest("js"));
});
gulp.task("watch", ['build'], function() {
     gulp.watch('js/pico/**/*.js', ['build']);
});
gulp.task("default", ['build', 'watch']);
