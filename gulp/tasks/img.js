const { src, dest, } = require('gulp'); // подключаем галп но будем пользоваться только метода src и dist
const browserSync = require('browser-sync').create();

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const webp = require('gulp-webp');


// Конфигурация
const path = require('../config/path.js')
const app = require('../config/app.js')

// Обработка img
function img() {
	return src(path.img.src) // вызываем метод и передаём путь ко всем файлам img в исходникаx
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: 'IMAGES',
				message: error.message
			}))
		}
		)) // перехватывает ошибки и заменяет уведомления
		.pipe(newer(path.img.dest)) // плагин не даёт обрабатывать что было уже обработано
		.pipe(webp())
		.pipe(dest(path.img.dest)) // метод pipe перехватывает поток и добавлет метод куда передавать файлы
		.pipe(src(path.img.src)) // метод pipe перехватывает поток и добавлет метод куда передавать файлы
		.pipe(newer(path.img.dest)) // плагин не даёт обрабатывать что было уже обработано
		.pipe(imagemin(app.imagemin))
		.pipe(dest(path.img.dest)) // метод pipe перехватывает поток и добавлет метод куда передавать файлы
		.pipe(browserSync.stream())
}

// Экспортируем всю функцию
module.exports = img;