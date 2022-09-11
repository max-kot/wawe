// Export configs
const path = require('../config/path.js');
const settings = require('../config/settings.js');

function script() {
	return $.gulp.src(
		/*['node_modules/jquery/dist/jquery.js'],*/
		path.js.src,
	)
		.pipe($.plumber({
			errorHandler: $.notify.onError(error => ({
				title: 'JavaScript',
				message: error.message
			}))
		}
		))
		.pipe($.concat('main.min.js'))//объединям
		.pipe($.size({
			title: 'До сжатия JS =>'
		}))
		.pipe($.uglify())//сжимаем
		.pipe($.size({
			title: 'После сжатия JS =>'
		}))
		.pipe($.gulp.dest(path.js.dest))
		.pipe($.browserSync.stream()) // подклюяаем live server
}

module.exports = script;