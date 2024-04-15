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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ \"./src/router.js\");\n\n\nclass App{\n    constructor() {\n        new _router__WEBPACK_IMPORTED_MODULE_0__.Router()\n\n    }\n}\n\n(new App())\n\n//# sourceURL=webpack://studio/./src/app.js?");

/***/ }),

/***/ "./src/components/dashboard.js":
/*!*************************************!*\
  !*** ./src/components/dashboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Dashboard: () => (/* binding */ Dashboard)\n/* harmony export */ });\nclass Dashboard{\n    constructor(){\n        console.log('Dashboard')\n    }\n}\n\n//# sourceURL=webpack://studio/./src/components/dashboard.js?");

/***/ }),

/***/ "./src/components/login.js":
/*!*********************************!*\
  !*** ./src/components/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Login: () => (/* binding */ Login)\n/* harmony export */ });\nclass Login{\n    constructor(){\n        console.log('Login')\n    }\n}\n\n//# sourceURL=webpack://studio/./src/components/login.js?");

/***/ }),

/***/ "./src/components/sign-up.js":
/*!***********************************!*\
  !*** ./src/components/sign-up.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SignUp: () => (/* binding */ SignUp)\n/* harmony export */ });\nclass SignUp{\n    constructor(){\n        console.log('SignUp')\n    }\n}\n\n//# sourceURL=webpack://studio/./src/components/sign-up.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Router: () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _components_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dashboard */ \"./src/components/dashboard.js\");\n/* harmony import */ var _components_sign_up__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sign-up */ \"./src/components/sign-up.js\");\n/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login */ \"./src/components/login.js\");\n\n\n\n\nclass Router{\n    constructor(){\n        this.titlePageElement = document.getElementById('title')\n        this.contentPageElement = document.getElementById('content')\n\n        this.initEvents()\n        this.routes = [\n            {\n                route: '/',\n                title: 'Дашборд',\n                filePathTemplate: '/templates/dashboard.html',\n                load: () => {\n                    new _components_dashboard__WEBPACK_IMPORTED_MODULE_0__.Dashboard()\n                }\n            },\n            {\n                route: '/404',\n                title: 'Страница не найдена',\n                filePathTemplate: '/templates/404.html'\n\n            },\n            {\n                route: '/login',\n                title: 'Авторизация',\n                filePathTemplate: '/templates/login.html',\n                load: () => {\n                    new _components_login__WEBPACK_IMPORTED_MODULE_2__.Login()\n                }\n\n            },\n            {\n                route: '/sign-up',\n                title: 'Регистрация',\n                filePathTemplate: '/templates/sign-up.html',\n                load: () => {\n                    new _components_sign_up__WEBPACK_IMPORTED_MODULE_1__.SignUp()\n                }\n\n            },\n\n        ]\n    }\n\n    initEvents(){\n        window.addEventListener('DOMContentLoaded', this.activateRoute.bind(this));\n        window.addEventListener('popstate', this.activateRoute.bind(this));\n    }\n\n    async activateRoute(){\n        const urlRoute = window.location.pathname\n        const newRoute = this.route.find(item => item.route === urlRoute)\n\n        if(newRoute){\n            if (newRoute.title){\n                this.titlePageElement.innerText = newRoute.title + ' | Freelance Studio'\n            }\n            if (newRoute.filePathTemplate){\n                this.contentPageElement.innerHTML = await fetch(newRoute.filePathTemplate).then(response => response.text())\n            }\n\n            if (newRoute.load && typeof  newRoute.load === 'function'){\n                newRoute.load()\n            }\n        } else {\n            console.log('No route found')\n            window.location = '/404'\n        }\n    }\n}\n\n//# sourceURL=webpack://studio/./src/router.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;