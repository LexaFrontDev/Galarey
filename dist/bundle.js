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

/***/ "./src/js/Routes.js":
/*!**************************!*\
  !*** ./src/js/Routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Router: () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _pages_HomePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/HomePage.js */ \"./src/js/pages/HomePage.js\");\n/* harmony import */ var _pages_NotFoundPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/NotFoundPage.js */ \"./src/js/pages/NotFoundPage.js\");\n\r\n\r\n\r\nclass Routes{\r\n    routes;\r\n\r\n    constructor(routes){\r\n        this.routes = routes;\r\n        window.addEventListener('popstate', () => this.handleRouting());\r\n    }\r\n\r\n\r\n    handleRouting(){\r\n        const path = window.location.pathname;\r\n        const Page = routes[path] || _pages_NotFoundPage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n        document.getElementById('app').innerHTML = Page();\r\n    }\r\n\r\n    navigateTo(path) {\r\n        window.history.pushState({}, path, window.location.origin + path);\r\n        this.handleRouting();\r\n    }\r\n}\r\n\r\n\r\nconst routes = {\r\n    '/': _pages_HomePage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n};\r\n\r\nconst Router = new Routes(routes);\r\nrouter.handleRouting();\r\n\n\n//# sourceURL=webpack:///./src/js/Routes.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Routes.js */ \"./src/js/Routes.js\");\n\r\n\r\nconst router = new _Routes_js__WEBPACK_IMPORTED_MODULE_0__.Router(); \r\n\r\nwindow.navigateTo = router.navigateTo.bind(router); \r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    router.handleRouting(); \r\n});\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/pages/HomePage.js":
/*!**********************************!*\
  !*** ./src/js/pages/HomePage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n\r\n\r\n\r\nfunction HomePage() {\r\n    return `\r\n        <h1>Главная страница</h1>\r\n        <p>Добро пожаловать!</p>\r\n        <button onclick=\"navigateTo('/about')\">Перейти на страницу \"О нас\"</button>\r\n    `;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/pages/HomePage.js?");

/***/ }),

/***/ "./src/js/pages/NotFoundPage.js":
/*!**************************************!*\
  !*** ./src/js/pages/NotFoundPage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\nfunction HomePage() {\r\n    return `\r\n        <h1>Not found:(</h1>\r\n        <p>Такой страницы не существуеть:(</p>\r\n        `;\r\n}\n\n//# sourceURL=webpack:///./src/js/pages/NotFoundPage.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;