const { src, dest, } = require('gulp'); // подключаем галп но будем пользоваться только метода src и dist
const browserSync = require('browser-sync').create();

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const newer = require('gulp-newer');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');


// Конфигурация
const path = require('../config/path.js')
const app = require('../config/app.js')

// Обработка fonts
function fonts() {
	return src(path.fonts.src) // вызываем метод и передаём путь ко всем файлам fonts в исходникаx
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: 'FONTS',
				message: error.message
			}))
		}
		)) // перехватывает ошибки и заменяет уведомления
		.pipe(newer(path.fonts.dest)) // плагин не даёт обрабатывать что было уже обработано
		.pipe(fonter(app.fonter)) // плагин конвертирует шрифты
		.pipe(dest(path.fonts.dest)) // метод pipe перехватывает поток и добавлет метод куда передавать файлы
		.pipe(ttf2woff2()) // плагин конвертирует шрифты в ttf2 и woff2
		.pipe(dest(path.fonts.dest)) // метод pipe перехватывает поток и добавлет метод куда передавать файлы
		.pipe(browserSync.stream())

}

// Экспортируем всю функцию
module.exports = fonts;