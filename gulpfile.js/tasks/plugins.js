// Export configs
const path = require('../config/path.js');
const settings = require('../config/settings.js');

global.plugins = {
	jquery() {
		return $.gulp.src('./node_modules/jquery/dist/jquery.js')
			.pipe($.uglify())
			.pipe($.concat('jquery.min.js'))
			.pipe($.gulp.dest(path.dest + '/js/'))
	},

	mixitup() {
		return $.gulp.src('./node_modules/mixitup/dist/mixitup.js')
			.pipe($.uglify())
			.pipe($.concat('mixitup.min.js'))
			.pipe($.gulp.dest(path.dest + '/js/'))
	},

	slick() {
		return $.gulp.src('./node_modules/slick-carousel/slick/slick.js')
			.pipe($.uglify())
			.pipe($.concat('slick.min.js'))
			.pipe($.gulp.dest(path.dest + '/js/'))
			.pipe($.gulp.src('./node_modules/slick-carousel/slick/slick.css'))
			.pipe($.concat('slick.min.css'))
			.pipe($.cssmin())
			.pipe($.gulp.dest(path.dest + '/css/'))
	},
}


module.exports = plugins;