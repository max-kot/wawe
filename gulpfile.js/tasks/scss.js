// Export configs
const path = require('../config/path.js');
const settings = require('../config/settings.js');

function scss() {
	return $.gulp.src(path.scss.src)
		.pipe($.plumber({
			errorHandler: $.notify.onError(error => ({
				title: 'SCSS',
				message: error.message
			}))
		}
		)) // перехватывает ошибки и заменяет уведомления
		.pipe($.sass())
		.pipe($.webpCss()) // автоматом переводит img в webp
		.pipe($.autoprefixer(settings.autoprefixer))
		.pipe($.groupCssMediaQueries()) // группирует одинковые медиа запросы
		.pipe($.gulp.dest(path.scss.dest))
		.pipe($.concat('style.min.css'))// переименование файла со стилями
		.pipe($.size({
			title: 'До сжатия CSS =>'
		}))
		.pipe($.cssmin())
		.pipe($.size({
			title: 'После сжатия CSS =>'
		}))
		.pipe($.gulp.dest(path.scss.dest))
		.pipe($.browserSync.stream())

}

module.exports = scss;