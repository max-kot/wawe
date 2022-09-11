global.settings = {
	htmlmin: {
		collapseWhitespace: true
	},
	autoprefixer: {
		overrideBrowserslist: ['last 10 version'],
	},
	imagemin: {
		vebose: true, // для просмотра размера
	},
	fonter: {
		formats: ['ttf', 'woff', 'eot', 'svg']
	},
}

module.exports = settings;