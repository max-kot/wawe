// подключаем плагины
const del = require('del');

// Удаление директории
function clear() {
	return del('./dist')
}

// Экспортируем наружу
module.exports = clear;