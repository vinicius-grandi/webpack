/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/belugs/src/index.js":
/*!******************************************!*\
  !*** ./node_modules/belugs/src/index.js ***!
  \******************************************/
/*! exports provided: getMedia, getRamdonNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_getMedia_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/getMedia.js */ \"./node_modules/belugs/src/lib/getMedia.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getMedia\", function() { return _lib_getMedia_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _lib_getRamdonNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/getRamdonNumber.js */ \"./node_modules/belugs/src/lib/getRamdonNumber.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getRamdonNumber\", function() { return _lib_getRamdonNumber_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\nconsole.log(Object(_lib_getMedia_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, 2, 3, 4));\n\n\n\n\n//# sourceURL=webpack:///./node_modules/belugs/src/index.js?");

/***/ }),

/***/ "./node_modules/belugs/src/lib/getMedia.js":
/*!*************************************************!*\
  !*** ./node_modules/belugs/src/lib/getMedia.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getMedia; });\nfunction getMedia() {\r\n    let args = Array.from(arguments).filter(n => typeof n === \"number\");\r\n\r\n    if (!args.length) return 0;\r\n    let media =\r\n        args.reduce((current, s) => {\r\n            return current + s;\r\n        }) / args.length;\r\n    return media;\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/belugs/src/lib/getMedia.js?");

/***/ }),

/***/ "./node_modules/belugs/src/lib/getRamdonNumber.js":
/*!********************************************************!*\
  !*** ./node_modules/belugs/src/lib/getRamdonNumber.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getRamdonNumber; });\nfunction getRamdonNumber(min, max, integer = true) {\n    let r = Math.random() * (max - min + 1) + min;\n    return integer ? parseInt(r) : parseFloat(r);\n}\n\n\n//# sourceURL=webpack:///./node_modules/belugs/src/lib/getRamdonNumber.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var belugs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! belugs */ \"./node_modules/belugs/src/index.js\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nlet students = null;\n\nconst createDomIntoList = (luckyStudents) => {\n  const str = luckyStudents\n    .map((s) => `\n              <li class=\"list-group-item\" id=\"student-${s.i}\">${s.nome} <span style=\"float:right\">${s.media} </span></li>\n          `)\n    .join('');\n\n  document.querySelector('#results ul').innerHTML = str;\n};\n\nconst createDomIntoTable = (s) => {\n  const str = s\n    .map((student) => `\n          <tr>\n              <td>${student.nome}</td>\n              ${student.notas.map((nota) => `<td> ${nota} </td>`).join('')}\n              <td>${Object(belugs__WEBPACK_IMPORTED_MODULE_0__[\"getMedia\"])(...student.notas)} </td>\n          </tr>\n          `)\n    .join('');\n  document.querySelector('#content-students').innerHTML = str;\n};\n\nconst showsTheWinner = (luckyStudent) => {\n  document.querySelector(`#student-${luckyStudent.i}`).style.backgroundColor = 'green';\n};\n\nconst addListenerToButton = () => {\n  const $btn = document.querySelector('#btn-init');\n  $btn.removeAttribute('disabled');\n  $btn.addEventListener('click', () => {\n    const studentsArr = Array.from(students);\n    const luckyStudents = [];\n\n    while (luckyStudents.length < 5) {\n      const nRandon = Object(belugs__WEBPACK_IMPORTED_MODULE_0__[\"getRamdonNumber\"])(0, studentsArr.length - 1);\n\n      const student = studentsArr.splice(nRandon, 1);\n      luckyStudents.push(student[0]);\n    }\n\n    const medias = [];\n\n    luckyStudents.map((ls, i) => {\n      const lsReference = ls;\n      medias[i] = ls.media;\n      lsReference.i = i;\n      return ls;\n    });\n\n    createDomIntoList(luckyStudents);\n\n    const maxValue = Math.max(...medias);\n\n    const studentsWinner = luckyStudents.filter((student) => student.media === maxValue);\n\n    if (studentsWinner.length === 1) {\n      showsTheWinner(studentsWinner[0]);\n    } else {\n      const nLucky = Object(belugs__WEBPACK_IMPORTED_MODULE_0__[\"getRamdonNumber\"])(0, studentsWinner.length - 1);\n      showsTheWinner(studentsWinner[nLucky]);\n    }\n  });\n};\n\nconst init = (studentsArr) => {\n  students = studentsArr;\n  createDomIntoTable(studentsArr);\n  addListenerToButton();\n};\n\nconst getStudents = async () => {\n  const urlJson = 'https://serfrontend.com/fakeapi/alunos.json';\n  const response = await fetch(urlJson);\n  const data = await response.json();\n\n  data.forEach((s) => {\n    const sRef = s;\n    sRef.media = parseFloat(Object(belugs__WEBPACK_IMPORTED_MODULE_0__[\"getMedia\"])(...s.notas));\n    return s;\n  });\n\n  if (response.status !== 200) {\n    throw Error(data.detail);\n  }\n  return data;\n};\ngetStudents()\n  .then((s) => init(s))\n  .catch((err) => console.error(err));\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ })

/******/ });