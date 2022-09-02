const { src, dest, } = require('gulp'); // подключаем галп но будем пользоваться только метода src и dist
const browserSync = require('browser-sync').create();

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const babel = require('gulp-babel');
//const uglify = require('gulp-uglify');
const size = require('gulp-size')
const webpack = require('webpack-stream')

// Конфигурация
const path = require('../config/path.js')
const app = require('../config/app.js');
const BrowserSync = require('browser-sync/dist/browser-sync.js');

// Обработка js
function js() {
	return src(path.js.src, {
		sourcemaps: true, // чтобы было удобно отлаживать код в инструментах разработчика, показывает в каком модуле записан стиль
	}) // вызываем метод и передаём путь ко всем файлам js в исходникаx
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: 'JavaScript',
				message: error.message
			}))
		}
		)) // перехватывает ошибки и заменяет уведомления
		.pipe(babel()) // обрабатываем babel
		.pipe(webpack(app.webpack)) // обрабатываем webpack 
		.pipe(size({
			title: 'До сжатия JS =>'
		}))
		//.pipe(uglify())//минифицируем js -> не нужно с бабелом
		.pipe(size({
			title: 'После сжатия JS =>'
		}))
		.pipe(dest(path.js.dest, {
			sourcemaps: true, // чтобы было удобно отлаживать код в инструментах разработчика, показывает в каком модуле записан стиль
		})) // метод pipe перехватывает поток и добавлет метод куда передавать файлы
		.pipe(browserSync.stream())

}

// Экспортируем всю функцию
module.exports = js;