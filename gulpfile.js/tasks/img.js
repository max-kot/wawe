// Export configs
const path = require('../config/path.js');
const settings = require('../config/settings.js');

function img() {
	return $.gulp.src(path.img.src)
		.pipe($.plumber({
			errorHandler: $.notify.onError(error => ({
				title: 'IMAGES',
				message: error.message
			}))
		}
		)) // перехватывает ошибки и заменяет уведомления
		.pipe($.webp())
		.pipe($.gulp.dest(path.img.dest))
		.pipe($.gulp.src(path.img.src))
		.pipe($.newer(path.img.dest)) // плагин не даёт обрабатывать что было уже обработано
		.pipe($.imagemin(settings.imagemin))
		.pipe($.gulp.dest(path.img.dest))
		.pipe($.browserSync.stream())

}

module.exports = img;