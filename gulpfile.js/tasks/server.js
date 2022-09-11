// Export configs
const path = require('../config/path.js');
const settings = require('../config/settings.js');

// Live server
function server() {
	return $.browserSync.init({
		server: { baseDir: path.dest }
	})
}

module.exports = server;