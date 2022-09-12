global.$ = {
	gulp: require('gulp'),
	browserSync: require('browser-sync').create(),
	size: require('gulp-size'),
	plumber: require('gulp-plumber'),
	notify: require('gulp-notify'),
	del: require('del'),
	fileInclude: require('gulp-file-include'),
	htmlmin: require('gulp-htmlmin'),
	sass: require('gulp-sass')(require('sass')),
	autoprefixer: require('gulp-autoprefixer'),
	cssmin: require('gulp-csso'),
	rename: require('gulp-rename'),
	shorthand: require('gulp-shorthand'),
	groupCssMediaQueries: require('gulp-group-css-media-queries'),
	uglify: require('gulp-uglify'),
	concat: require('gulp-concat'),
	imagemin: require('gulp-imagemin'),
	newer: require('gulp-newer'),
	webp: require('gulp-webp'),
	webpHtml: require('gulp-webp-html'),
	webpCss: require('gulp-webp-css'),
	fonter: require('gulp-fonter'),
	ttf2woff2: require('gulp-ttf2woff2'),
}

// Export configs
const path = require('./config/path.js');
const settings = require('./config/settings.js');

// Plugins
const plugins = require('./tasks/plugins.js');

// Export tasks
const html = require('./tasks/html.js');
const clear = require('./tasks/clear.js');
const server = require('./tasks/server.js');
const scss = require('./tasks/scss.js');
const script = require('./tasks/script.js');
const img = require('./tasks/img.js');
const fonts = require('./tasks/fonts.js');


// Watcher
function watcher() {
	//gulp.watch('dist/').on('change', browserSync.reload); // следит за dist и при перезагружает страницу

	$.gulp.watch(path.html.watch, html); // за чем следить и что запускать
	$.gulp.watch(path.scss.watch, scss);
	$.gulp.watch(path.js.watch, script);
	$.gulp.watch(path.img.watch, img);
	$.gulp.watch(path.fonts.watch, fonts);
}









// gulp build
const build = $.gulp.series(
	clear,
	$.gulp.series(
		plugins.normalize,
		plugins.jquery,
		plugins.slick,
		plugins.fancybox,
		plugins.mixitup,
	),
	$.gulp.parallel(
		html,
		scss,
		script,
		img,
		fonts,
	)
)

// gulp dev
const dev = $.gulp.series(
	build,
	$.gulp.parallel(watcher, server),
)

// Launch tasks
exports.server = server;
exports.clear = clear;
exports.html = html;
exports.scss = scss;
exports.script = script;
exports.img = img;
exports.fonts = fonts;
exports.build = build;
exports.dev = dev;

// launch plugins
exports.jquery = plugins.jquery;
exports.mixitup = plugins.mixitup;
exports.slick = plugins.slick;
exports.normalize = plugins.normalize;
exports.fancybox = plugins.fancybox;


// Default gulp
exports.default = dev;

