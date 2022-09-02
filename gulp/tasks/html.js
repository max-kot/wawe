const { src, dest, } = require('gulp'); // подключаем галп но будем пользоваться только метода src и dist
const browserSync = require('browser-sync').create();
// Плагины
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const webpHtml = require('gulp-webp-html');

// Конфигурация
const path = require('../config/path.js')
const app = require('../config//app.js')

// Шаблонизация и минификация HTML
function html() {
	return src(path.html.src) // вызываем метод и передаём путь ко всем файлам html в исходникаx
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: 'HTML',
				message: error.message
			}))
		}
		)) // перехватывает ошибки и заменяет уведомления
		.pipe(fileInclude()) // метод pipe перехватывает поток и подключаем плагин шаблонизации html
		.pipe(webpHtml())// чтобы автоматом ставил тег picture для webp
		.pipe(size({
			title: 'До сжатия HTML =>'
		}))// метод pipe перехватывает поток и подключаем плагин размера
		.pipe(htmlmin(app.htmlmin)) // метод pipe перехватывает поток и подключаем плагин минификации html
		.pipe(size({
			title: 'После сжатия HTML =>'
		}))// метод pipe перехватывает поток и подключаем плагин размера
		.pipe(dest(path.html.dest)) // метод pipe перехватывает поток и добавлет метод куда передавать файлы
		.pipe(browserSync.stream())
}

// Экспортируем всю функцию
module.exports = html;