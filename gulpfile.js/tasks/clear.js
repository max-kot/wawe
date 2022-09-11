// Export configs
const path = require('../config/path.js');
const settings = require('../config/settings.js');


// Delete directory
function clear() {
	return $.del(path.dest)
}

module.exports = clear;