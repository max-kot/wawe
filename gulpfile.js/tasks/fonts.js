// Export configs
const path = require('../config/path.js');
const settings = require('../config/settings.js');


function fonts() {
	return $.gulp.src(path.fonts.src) // вызываем метод и передаём путь ко всем файлам fonts в исходникаx
		.pipe($.plumber({
			errorHandler: $.notify.onError(error => ({
				title: 'FONTS',
				message: error.message
			}))
		}
		)) // перехватывает ошибки и заменяет уведомления
		.pipe($.newer(path.fonts.dest)) // плагин не даёт обрабатывать что было уже обработано
		.pipe($.fonter(settings.fonter)) // плагин конвертирует шрифты
		.pipe($.gulp.dest(path.fonts.dest))
		.pipe($.ttf2woff2()) // плагин конвертирует шрифты в ttf2 и woff2
		.pipe($.gulp.dest(path.fonts.dest))
}

module.exports = fonts;