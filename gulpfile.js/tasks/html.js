// Export configs
const path = require('../config/path.js');
const settings = require('../config/settings.js');

// Html
function html() {
	return $.gulp.src(path.html.src)
		.pipe($.plumber({
			errorHandler: $.notify.onError(error => ({
				title: 'HTML',
				message: error.message
			}))
		}
		)) // перехватывает ошибки и заменяет уведомления
		.pipe($.fileInclude())
		.pipe($.webpHtml())// чтобы автоматом ставил тег picture для webp
		.pipe($.size({ title: 'До сжатия HTML =>' }))
		.pipe($.htmlmin(settings.htmlmin)) // убирает пробелы
		.pipe($.size({ title: 'После сжатия HTML =>' }))
		.pipe($.gulp.dest(path.html.dest))
		.pipe($.browserSync.stream()) // подклюяаем live server
}

module.exports = html;
