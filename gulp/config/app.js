module.exports = {
	htmlmin: {
		collapseWhitespace: true, // убирает все пробелы
	},

	imagemin: {
		vebose: true, // для просмотра размера
	},

	fonter: {
		formats: ['ttf', 'woff', 'eot', 'svg']
	},

	webpack: {
		'mode': 'development',//-> подключение через модули
	}
}