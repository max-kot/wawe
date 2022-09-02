/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function () { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function () {

				eval("/*---Menu---*/\r\nconst menuBtn = document.querySelector('.menu-btn');\r\nconst menuList = document.querySelector('.menu__list');\r\nconst body = document.querySelector('body');\r\nconst menuLinks = document.querySelectorAll('.menu a')\r\n\r\nmenuBtn.addEventListener('click', function () {\r\n\tbody.classList.toggle('no-scroll');\r\n\tmenuList.classList.toggle('active');\r\n\tmenuBtn.classList.toggle('active');\r\n\r\n})\r\nmenuLinks.forEach(function (link) {\r\n\tlink.addEventListener('click', function () {\r\n\t\tmenuList.classList.remove('active');\r\n\t\tbody.classList.remove('no-scroll');\r\n\t\tmenuBtn.classList.remove('active');\r\n\t})\r\n})\r\n\r\n\n\n//# sourceURL=webpack://gulp-codequest-base/./src/js/main.js?");

				/***/
})

		/******/
});
/************************************************************************/
/******/
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
	/******/
	/******/
})()
	;