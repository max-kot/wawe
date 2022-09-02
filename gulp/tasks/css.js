const { src, dest, } = require('gulp'); // подключаем галп но будем пользоваться только метода src и dist
const browserSync = require('browser-sync').create();
// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const concat = require('gulp-concat');
const cssimport = require('gulp-cssimport');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const groupCssMediaQueries = require('gulp-group-css-media-queries');
const webpCss = require('gulp-webp-css');

// Конфигурация
const path = require('../config/path.js')
const app = require('../config/app.js')

// Обработка CSS
function css() {
	return src(path.css.src, {
		sourcemaps: true, // чтобы было удобно отлаживать код в инструментах разработчика, показывает в каком модуле записан стиль
	}) // вызываем метод и передаём путь ко всем файлам css в исходникаx
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: 'CSS',
				message: error.message
			}))
		}
		)) // перехватывает ошибки и заменяет уведомления
		.pipe(concat('style.css', {
			sourcemaps: true, // чтобы было удобно отлаживать код в инструментах разработчика, показывает в каком модуле записан стиль
		}))// объединяет все css стили
		.pipe(cssimport())// для работы импорта в css
		.pipe(webpCss()) // автоматом переводит img в webp
		.pipe(autoprefixer())
		.pipe(shorthand()) // краткая форма записи свойств для минификации
		.pipe(groupCssMediaQueries()) // группирует одинковые медиа запросы
		.pipe(dest(path.css.dest, {
			sourcemaps: true, // чтобы было удобно отлаживать код в инструментах разработчика, показывает в каком модуле записан стиль
		})) // метод pipe перехватывает поток и добавлет метод куда передавать файлы
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(size({
			title: 'До сжатия CSS =>'
		}))// метод pipe перехватывает поток и подключаем плагин размера
		.pipe(cssmin())
		.pipe(size({
			title: 'После сжатия CSS =>'
		}))// метод pipe перехватывает поток и подключаем плагин размера
		.pipe(dest(path.css.dest, {
			sourcemaps: true, // чтобы было удобно отлаживать код в инструментах разработчика, показывает в каком модуле записан стиль
		})) // метод pipe перехватывает поток и добавлет метод куда передавать файлы
		.pipe(browserSync.stream())

}

// Экспортируем всю функцию
module.exports = css;