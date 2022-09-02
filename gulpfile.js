// Плагины
const { watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();


// Конфигурация
const path = require('./gulp/config/path.js')

// Задачи
const clear = require('./gulp/tasks/clear.js');
const html = require('./gulp/tasks/html.js');
//const css = require('./gulp/tasks/css.js');
const scss = require('./gulp/tasks/scss.js');
const js = require('./gulp/tasks/js.js');
const img = require('./gulp/tasks/img.js');
const fonts = require('./gulp/tasks/fonts.js');





// Наблюдение
function watcher() {
	// LIVE Сервер
	browserSync.init({
		server: {
			baseDir: path.root // указываем директорию
		}
	})
	watch(path.html.dest).on('change', browserSync.reload); // за чем следим и что запускать + live server
	watch(path.html.watch, html)
	//watch(path.css.watch, css).on('all', browserSync.reload);
	watch(path.scss.watch, scss)//.on('all', browserSync.reload);
	watch(path.js.watch, js)//.on('all', browserSync.reload);
	watch(path.img.watch, img)//.on('all', browserSync.reload);
	watch(path.fonts.watch, fonts)//.on('all', browserSync.reload);
}



// Продакшен
const build = series(
	clear,
	parallel(html, scss, js, img, fonts), //css
)// сотавляем всё что связано со сброкой файлов

// Разработка
const dev = series(
	build,
	watcher
)// сначало идёт удаление сборки => параллельное выполнение html и css => параллельное выполнение watcher и server

// Задачи
exports.html = html;
//exports.css = css;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.fonts = fonts;


exports.build = build;
exports.dev = dev;
exports.default = dev;