/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _math_lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-lib.js */ \"./math-lib.js\");\n// main.js\r\nconsole.log('main.js');\r\n\r\n\r\n\r\nconst resultElement = document.getElementById('result');\r\n\r\n// Perform some math operations\r\nconst a = 10;\r\nconst b = 5;\r\nconst sum = (0,_math_lib_js__WEBPACK_IMPORTED_MODULE_0__.add)(a, b);\r\nconst difference = (0,_math_lib_js__WEBPACK_IMPORTED_MODULE_0__.subtract)(a, b);\r\nconst product = (0,_math_lib_js__WEBPACK_IMPORTED_MODULE_0__.multiply)(a, b);\r\nconst quotient = (0,_math_lib_js__WEBPACK_IMPORTED_MODULE_0__.divide)(a, b);\r\n\r\n// Display results in the HTML\r\nresultElement.textContent = `\r\n    Sum: ${sum}, \r\n    Difference: ${difference}, \r\n    Product: ${product}, \r\n    Quotient: ${quotient}\r\n`;\r\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./math-lib.js":
/*!*********************!*\
  !*** ./math-lib.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   add: () => (/* binding */ add),\n/* harmony export */   divide: () => (/* binding */ divide),\n/* harmony export */   multiply: () => (/* binding */ multiply),\n/* harmony export */   subtract: () => (/* binding */ subtract)\n/* harmony export */ });\n// math-lib.js\r\nfunction add(a, b) {\r\n    return a + b;\r\n}\r\n\r\nfunction subtract(a, b) {\r\n    return a - b;\r\n}\r\n\r\nfunction multiply(a, b) {\r\n    return a * b;\r\n}\r\n\r\nfunction divide(a, b) {\r\n    if (b === 0) {\r\n        throw new Error('Division by zero is not allowed.');\r\n    }\r\n    return a / b;\r\n}\r\n\n\n//# sourceURL=webpack:///./math-lib.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;