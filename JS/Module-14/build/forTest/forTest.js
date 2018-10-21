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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/model.1.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/model.1.js":
/*!***************************!*\
  !*** ./src/js/model.1.js ***!
  \***************************/
/*! exports provided: default */
/***/ exports  = (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Model; });\n/* harmony import */ var _services_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/localStorage */ \"./src/js/services/localStorage.js\");\n/* harmony import */ var _services_EncoderURl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/EncoderURl */ \"./src/js/services/EncoderURl.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar BASE_URL = \"http://api.linkpreview.net\";\nvar TOKEN = \"5bb905e4709c07d0c5dcce206d1a180df48ebcbd42e33\";\n\nvar Model =\n/*#__PURE__*/\nfunction () {\n  function Model() {\n    _classCallCheck(this, Model);\n\n    this.items = this.getAllBookmarks();\n  }\n\n  _createClass(Model, [{\n    key: \"getAllBookmarks\",\n    value: function getAllBookmarks() {\n      return _services_localStorage__WEBPACK_IMPORTED_MODULE_0__[\"LOCALSTORAGE\"].getAll();\n    }\n  }, {\n    key: \"addBookmark\",\n    value: function addBookmark(_url) {\n      var _this = this;\n\n      if (this.items.length === 0 || !this.items.find(function (elem) {\n        return elem.url === _url;\n      })) {\n        return fetch(\"\".concat(BASE_URL, \"/?key=\").concat(TOKEN, \"&q=\").concat(Object(_services_EncoderURl__WEBPACK_IMPORTED_MODULE_1__[\"encodeRFC5987ValueChars\"])(_url))).then(function (response) {\n          if (response.ok) return response.json();\n          alert(\"Error while fetching\", response.statusText);\n          throw new Error(\"Error while fetching: \".concat(response.statusText));\n        }).then(function (data) {\n          _this.items.unshift(data);\n\n          _services_localStorage__WEBPACK_IMPORTED_MODULE_0__[\"LOCALSTORAGE\"].set(data.url, data);\n          return data;\n        }).catch(function (error) {\n          return console.log(error);\n        });\n      } else {\n        alert('такая закладка уже есть');\n      }\n    }\n  }]);\n\n  return Model;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/model.1.js?");

/***/ }),

/***/ "./src/js/services/EncoderURl.js":
/*!***************************************!*\
  !*** ./src/js/services/EncoderURl.js ***!
  \***************************************/
/*! exports provided: encodeRFC5987ValueChars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"encodeRFC5987ValueChars\", function() { return encodeRFC5987ValueChars; });\nfunction encodeRFC5987ValueChars(str) {\n  return encodeURIComponent(str). // Замечание: хотя RFC3986 резервирует \"!\", RFC5987 это не делает, так что нам не нужно избегать этого\n  replace(/['()]/g, escape). // i.e., %27 %28 %29\n  replace(/\\*/g, '%2A'). // Следующее не требуется для кодирования процентов для RFC5987, так что мы можем разрешить немного больше читаемости через провод: |`^\n  replace(/%(?:7C|60|5E)/g, unescape);\n}\n\n//# sourceURL=webpack:///./src/js/services/EncoderURl.js?");

/***/ }),

/***/ "./src/js/services/localStorage.js":
/*!*****************************************!*\
  !*** ./src/js/services/localStorage.js ***!
  \*****************************************/
/*! exports provided: LOCALSTORAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOCALSTORAGE\", function() { return LOCALSTORAGE; });\nvar LOCALSTORAGE = function (w) {\n  if (!w) return;\n  var isActive = \"localStorage\" in w;\n\n  var get = function get(key) {\n    try {\n      var serializedState = localStorage.getItem(key);\n      return serializedState === null ? undefined : JSON.parse(serializedState);\n    } catch (err) {\n      console.error(\"Get state error: \", err);\n    }\n  };\n\n  var set = function set(key, value) {\n    try {\n      var serializedState = JSON.stringify(value);\n      localStorage.setItem(key, serializedState);\n    } catch (err) {\n      console.error(\"Set state error: \", err);\n    }\n  };\n\n  var getAll = function getAll() {\n    try {\n      var elements = [];\n      var element = {};\n\n      for (var key in localStorage) {\n        element = JSON.parse(localStorage.getItem(key)); // console.log(element);\n\n        if (element !== null && element.hasOwnProperty(\"title\") && element.hasOwnProperty(\"url\") && element.hasOwnProperty(\"image\") && element.hasOwnProperty(\"description\")) {\n          elements.push(element);\n        }\n      } // console.log(elements);\n\n\n      return elements;\n    } catch (err) {\n      console.error(\"GetAll state error: \", err);\n    }\n  };\n\n  var remove = function remove(key) {\n    try {\n      localStorage.removeItem(key);\n    } catch (err) {\n      console.error(\"Remove state error: \", err);\n    }\n  };\n\n  var publicAPI = {\n    isActive: isActive,\n    get: get,\n    set: set,\n    getAll: getAll,\n    remove: remove\n  };\n  return publicAPI;\n}(window); // console.log(LOCALSTORAGE); // {isActive: true, get: ƒ, set: ƒ}\n\n//# sourceURL=webpack:///./src/js/services/localStorage.js?");

/***/ })

/******/ });