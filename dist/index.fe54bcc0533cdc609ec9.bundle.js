/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_normalize_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/normalize.scss */ \"./src/css/normalize.scss\");\n/* harmony import */ var _css_normalize_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/index.scss */ \"./src/css/index.scss\");\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/header.scss */ \"./src/css/header.scss\");\n/* harmony import */ var _css_header_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_header_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _views_header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/header.js */ \"./src/views/header.js\");\n\n\n\n\n\n\nconsole.log(\"Hello World\");\n\n//# sourceURL=webpack://kolonia_webpack/./src/index.js?");

/***/ }),

/***/ "./src/views/header.js":
/*!*****************************!*\
  !*** ./src/views/header.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.scss */ \"./src/css/index.scss\");\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/header.scss */ \"./src/css/header.scss\");\n/* harmony import */ var _css_header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_header_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar navResponse = document.getElementById(\"topNav\");\n\nfunction menu() {\n  //alert(\"Hello! I am an alert box!!\")\n  if (navResponse.className === \"nav_item\") {\n    navResponse.className += \" responsive\";\n  } else {\n    navResponse.className = \"nav_item\";\n  }\n}\n\nnavResponse.addEventListener(\"click\", function () {\n  return menu();\n});\n\n//# sourceURL=webpack://kolonia_webpack/./src/views/header.js?");

/***/ }),

/***/ "./src/css/header.scss":
/*!*****************************!*\
  !*** ./src/css/header.scss ***!
  \*****************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '@' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> @import \\\"index.scss\\\";\\n| \\n| nav {\");\n\n//# sourceURL=webpack://kolonia_webpack/./src/css/header.scss?");

/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '@' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> @import url(\\\"https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400;1,500&display=swap\\\");\\n| \\n| $color_descripttion: #2c2c2a;\");\n\n//# sourceURL=webpack://kolonia_webpack/./src/css/index.scss?");

/***/ }),

/***/ "./src/css/normalize.scss":
/*!********************************!*\
  !*** ./src/css/normalize.scss ***!
  \********************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (10:32)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|  */\\n| \\n>  $legacy_browser_support: false !default;\\n| \\n|  /* Base\");\n\n//# sourceURL=webpack://kolonia_webpack/./src/css/normalize.scss?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;