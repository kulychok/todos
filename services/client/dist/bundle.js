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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todos/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://todos/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/EventEmitter.js":
/*!*****************************!*\
  !*** ./src/EventEmitter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass EventEmitter {\n  constructor() {\n    this._events = {};\n  }\n\n  on(eventName, func) {\n    if (!this._events[eventName]) {\n      this._events[eventName] = [];\n    }\n\n    this._events[eventName].push(func);\n  }\n\n  removeListener(eventName, listenerToRemove) {\n    if (this._events[eventName]) {\n      throw new Error(`Can't remove a listener. Event \"${eventName}\" doesn't exits.`);\n    }\n\n    this._events[eventName] = this._events[eventName].filter(listener => listener !== listenerToRemove);\n  }\n\n  emit(eventName, data) {\n    const event = this._events[eventName];\n\n    if (event) {\n      event.forEach(func => func.call(null, data));\n    }\n  }\n\n}\n\nconst eventEmitter = new EventEmitter();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventEmitter);\n\n//# sourceURL=webpack://todos/./src/EventEmitter.js?");

/***/ }),

/***/ "./src/api/callAPI.js":
/*!****************************!*\
  !*** ./src/api/callAPI.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_httpMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/httpMethods */ \"./src/constants/httpMethods.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/api/config.js\");\n\n\n\nconst callApi = async (path, method, headers = {\n  'Content-Type': 'application/json'\n}, body = null) => {\n  const options = {\n    method: method,\n    headers: { ...headers\n    },\n    credentials: 'include'\n  };\n  if (method !== _constants_httpMethods__WEBPACK_IMPORTED_MODULE_0__.default.GET) options.body = JSON.stringify({ ...body\n  });\n  const response = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__.default.domain}${path}`, options);\n  return response;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callApi);\n\n//# sourceURL=webpack://todos/./src/api/callAPI.js?");

/***/ }),

/***/ "./src/api/config.js":
/*!***************************!*\
  !*** ./src/api/config.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst config = {\n  domain: 'http://127.0.0.1:3030'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n//# sourceURL=webpack://todos/./src/api/config.js?");

/***/ }),

/***/ "./src/api/context.js":
/*!****************************!*\
  !*** ./src/api/context.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Context = {\n  token: document.cookie.split('=')[1] || null,\n  user: {}\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);\n\n//# sourceURL=webpack://todos/./src/api/context.js?");

/***/ }),

/***/ "./src/api/todo/active/get.js":
/*!************************************!*\
  !*** ./src/api/todo/active/get.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_httpMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/httpMethods */ \"./src/constants/httpMethods.js\");\n/* harmony import */ var _callAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../callAPI */ \"./src/api/callAPI.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context */ \"./src/api/context.js\");\n\n\n\n\nconst getActiveTodo = async (page = 0) => {\n  const headers = {\n    'Content-Type': 'application/json',\n    Authorization: `Bearer ${_context__WEBPACK_IMPORTED_MODULE_2__.default.token}`\n  };\n  const response = await (0,_callAPI__WEBPACK_IMPORTED_MODULE_1__.default)(`/private/todo/active/?page=${page}`, _constants_httpMethods__WEBPACK_IMPORTED_MODULE_0__.default.GET, headers);\n  const {\n    count,\n    todoList\n  } = await response.json();\n  return {\n    count,\n    todoList\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getActiveTodo);\n\n//# sourceURL=webpack://todos/./src/api/todo/active/get.js?");

/***/ }),

/***/ "./src/api/todo/byId/delete.js":
/*!*************************************!*\
  !*** ./src/api/todo/byId/delete.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../../constants/httpMethods.js.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _callAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../callAPI */ \"./src/api/callAPI.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context */ \"./src/api/context.js\");\n\n\n\n\nconst delTodo = async id => {\n  const headers = {\n    'Content-Type': 'application/json',\n    Authorization: `Bearer ${_context__WEBPACK_IMPORTED_MODULE_2__.default.token}`\n  };\n  await (0,_callAPI__WEBPACK_IMPORTED_MODULE_1__.default)(`/private/todo/${id}`, Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../../constants/httpMethods.js.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), headers);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (delTodo);\n\n//# sourceURL=webpack://todos/./src/api/todo/byId/delete.js?");

/***/ }),

/***/ "./src/api/todo/byId/patch.js":
/*!************************************!*\
  !*** ./src/api/todo/byId/patch.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../../constants/httpMethods.js.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _callAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../callAPI */ \"./src/api/callAPI.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context */ \"./src/api/context.js\");\n\n\n\n\nconst editTodo = async (id, body) => {\n  const headers = {\n    'Content-Type': 'application/json',\n    Authorization: `Bearer ${_context__WEBPACK_IMPORTED_MODULE_2__.default.token}`\n  };\n  await (0,_callAPI__WEBPACK_IMPORTED_MODULE_1__.default)(`/private/todo/${id}`, Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../../constants/httpMethods.js.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), headers, body);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTodo);\n\n//# sourceURL=webpack://todos/./src/api/todo/byId/patch.js?");

/***/ }),

/***/ "./src/api/todo/completed/get.js":
/*!***************************************!*\
  !*** ./src/api/todo/completed/get.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_httpMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/httpMethods */ \"./src/constants/httpMethods.js\");\n/* harmony import */ var _callAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../callAPI */ \"./src/api/callAPI.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context */ \"./src/api/context.js\");\n\n\n\n\nconst getCompletedTodo = async (page = 0) => {\n  const headers = {\n    'Content-Type': 'application/json',\n    Authorization: `Bearer ${_context__WEBPACK_IMPORTED_MODULE_2__.default.token}`\n  };\n  const response = await (0,_callAPI__WEBPACK_IMPORTED_MODULE_1__.default)(`/private/todo/completed/?page=${page}`, _constants_httpMethods__WEBPACK_IMPORTED_MODULE_0__.default.GET, headers);\n  const {\n    count,\n    todoList\n  } = await response.json();\n  return {\n    count,\n    todoList\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCompletedTodo);\n\n//# sourceURL=webpack://todos/./src/api/todo/completed/get.js?");

/***/ }),

/***/ "./src/api/todo/count/get.js":
/*!***********************************!*\
  !*** ./src/api/todo/count/get.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_httpMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/httpMethods */ \"./src/constants/httpMethods.js\");\n/* harmony import */ var _callAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../callAPI */ \"./src/api/callAPI.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context */ \"./src/api/context.js\");\n\n\n\n\nconst getCount = async (page = 0) => {\n  const headers = {\n    'Content-Type': 'application/json',\n    Authorization: `Bearer ${_context__WEBPACK_IMPORTED_MODULE_2__.default.token}`\n  };\n  const response = await (0,_callAPI__WEBPACK_IMPORTED_MODULE_1__.default)(`/private/todo/count`, _constants_httpMethods__WEBPACK_IMPORTED_MODULE_0__.default.GET, headers);\n  const {\n    all,\n    active,\n    completed\n  } = await response.json();\n  return {\n    all,\n    active,\n    completed\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCount);\n\n//# sourceURL=webpack://todos/./src/api/todo/count/get.js?");

/***/ }),

/***/ "./src/api/todo/get.js":
/*!*****************************!*\
  !*** ./src/api/todo/get.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_httpMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/httpMethods */ \"./src/constants/httpMethods.js\");\n/* harmony import */ var _callAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../callAPI */ \"./src/api/callAPI.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./src/api/context.js\");\n\n\n\n\nconst getTodo = async (page = 0) => {\n  const headers = {\n    'Content-Type': 'application/json',\n    Authorization: `Bearer ${_context__WEBPACK_IMPORTED_MODULE_2__.default.token}`\n  };\n  const response = await (0,_callAPI__WEBPACK_IMPORTED_MODULE_1__.default)(`/private/todo/?page=${page}`, _constants_httpMethods__WEBPACK_IMPORTED_MODULE_0__.default.GET, headers);\n  const {\n    count,\n    todoList\n  } = await response.json();\n  return {\n    count,\n    todoList\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTodo);\n\n//# sourceURL=webpack://todos/./src/api/todo/get.js?");

/***/ }),

/***/ "./src/api/todo/post.js":
/*!******************************!*\
  !*** ./src/api/todo/post.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_httpMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/httpMethods */ \"./src/constants/httpMethods.js\");\n/* harmony import */ var _callAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../callAPI */ \"./src/api/callAPI.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./src/api/context.js\");\n\n\n\n\nconst postTodo = async body => {\n  const headers = {\n    'Content-Type': 'application/json',\n    Authorization: `Bearer ${_context__WEBPACK_IMPORTED_MODULE_2__.default.token}`\n  };\n  await (0,_callAPI__WEBPACK_IMPORTED_MODULE_1__.default)('/private/todo', _constants_httpMethods__WEBPACK_IMPORTED_MODULE_0__.default.POST, headers, body);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postTodo);\n\n//# sourceURL=webpack://todos/./src/api/todo/post.js?");

/***/ }),

/***/ "./src/api/user/get.js":
/*!*****************************!*\
  !*** ./src/api/user/get.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../helpers/constants/httpMethods.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _callAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../callAPI */ \"./src/api/callAPI.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./src/api/context.js\");\n\n\n\n\nconst getUser = async () => {\n  const headers = {\n    'Content-Type': 'application/json',\n    Authorization: `Bearer ${_context__WEBPACK_IMPORTED_MODULE_2__.default.token}`\n  };\n  const response = await (0,_callAPI__WEBPACK_IMPORTED_MODULE_1__.default)('/private/user', Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../helpers/constants/httpMethods.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), headers);\n  const user = await response.json();\n  _context__WEBPACK_IMPORTED_MODULE_2__.default.user = { ...user\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUser);\n\n//# sourceURL=webpack://todos/./src/api/user/get.js?");

/***/ }),

/***/ "./src/api/user/login.js":
/*!*******************************!*\
  !*** ./src/api/user/login.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../helpers/constants/httpMethods.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _callAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../callAPI */ \"./src/api/callAPI.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./src/api/context.js\");\n\n\n\n\nconst login = async body => {\n  const headers = {\n    'Content-Type': 'application/json'\n  };\n  const response = await (0,_callAPI__WEBPACK_IMPORTED_MODULE_1__.default)('/auth/login', Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../helpers/constants/httpMethods.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), headers, body);\n  const {\n    user\n  } = await response.json();\n  const token = document.cookie.split('=')[1];\n  _context__WEBPACK_IMPORTED_MODULE_2__.default.token = token;\n  _context__WEBPACK_IMPORTED_MODULE_2__.default.user = { ...user\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);\n\n//# sourceURL=webpack://todos/./src/api/user/login.js?");

/***/ }),

/***/ "./src/api/user/signup.js":
/*!********************************!*\
  !*** ./src/api/user/signup.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../helpers/constants/httpMethods.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _callAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../callAPI */ \"./src/api/callAPI.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./src/api/context.js\");\n\n\n\n\nconst signup = async body => {\n  const headers = {\n    'Content-Type': 'application/json'\n  };\n  const response = await (0,_callAPI__WEBPACK_IMPORTED_MODULE_1__.default)('/auth/signup', Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../helpers/constants/httpMethods.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), headers, body);\n  const user = await response.json();\n  const token = document.cookie.split('=')[1];\n  _context__WEBPACK_IMPORTED_MODULE_2__.default.token = token;\n  _context__WEBPACK_IMPORTED_MODULE_2__.default.user = { ...user\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (signup);\n\n//# sourceURL=webpack://todos/./src/api/user/signup.js?");

/***/ }),

/***/ "./src/constants/filters.js":
/*!**********************************!*\
  !*** ./src/constants/filters.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst FILTERS = {\n  ALL: {\n    value: 'ALL',\n    label: 'all'\n  },\n  DONE: {\n    value: 'DONE',\n    label: 'done'\n  },\n  NOT_DONE: {\n    value: 'NOT_DONE',\n    label: 'notDone'\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FILTERS);\n\n//# sourceURL=webpack://todos/./src/constants/filters.js?");

/***/ }),

/***/ "./src/constants/httpMethods.js":
/*!**************************************!*\
  !*** ./src/constants/httpMethods.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst METHODS = {\n  GET: 'GET',\n  POST: 'POST',\n  DELETE: 'DELETE',\n  PATCH: 'PATCH'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (METHODS);\n\n//# sourceURL=webpack://todos/./src/constants/httpMethods.js?");

/***/ }),

/***/ "./src/constants/limit.js":
/*!********************************!*\
  !*** ./src/constants/limit.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst PAGE_LIMIT = 5;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PAGE_LIMIT);\n\n//# sourceURL=webpack://todos/./src/constants/limit.js?");

/***/ }),

/***/ "./src/constants/status.js":
/*!*********************************!*\
  !*** ./src/constants/status.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst STATUS = {\n  ACTIVE: {\n    value: 'ACTIVE',\n    label: 'active'\n  },\n  COMPLETED: {\n    value: 'COMPLETED',\n    label: 'completed'\n  },\n  DELETED: {\n    value: 'DELETED',\n    label: 'deleted'\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (STATUS);\n\n//# sourceURL=webpack://todos/./src/constants/status.js?");

/***/ }),

/***/ "./src/helpers/utils.js":
/*!******************************!*\
  !*** ./src/helpers/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isValidEmail\": () => (/* binding */ isValidEmail),\n/* harmony export */   \"isValidPassword\": () => (/* binding */ isValidPassword),\n/* harmony export */   \"isValidTodoTitle\": () => (/* binding */ isValidTodoTitle)\n/* harmony export */ });\nconst isValidEmail = email => {\n  return /\\S+@\\S+\\.\\S+/.test(email);\n};\n\nconst isValidPassword = pass => {\n  return /^(?=.*[0-9])[a-zA-Z0-9]{6,}$/.test(pass);\n};\n\nconst isValidTodoTitle = string => {\n  return /^[a-z0-9а-я ]+$/i.test(string);\n};\n\n\n\n//# sourceURL=webpack://todos/./src/helpers/utils.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './helpers/constants/httpMethods.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventEmitter.js */ \"./src/EventEmitter.js\");\n/* harmony import */ var _ui_pages_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/pages/Auth */ \"./src/ui/pages/Auth.js\");\n/* harmony import */ var _ui_pages_Home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/pages/Home.js */ \"./src/ui/pages/Home.js\");\n/* harmony import */ var _ui_styles_normalize_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/styles/normalize.css */ \"./src/ui/styles/normalize.css\");\n/* harmony import */ var _ui_styles_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/styles/styles.css */ \"./src/ui/styles/styles.css\");\n/* harmony import */ var _api_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/context */ \"./src/api/context.js\");\n/* harmony import */ var _api_user_signup_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/user/signup.js */ \"./src/api/user/signup.js\");\n/* harmony import */ var _api_user_login_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api/user/login.js */ \"./src/api/user/login.js\");\n/* harmony import */ var _api_user_get_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api/user/get.js */ \"./src/api/user/get.js\");\n\n\n\n\n\n\n\n\n\n\n\nclass App {\n  constructor() {\n    this.init();\n  }\n\n  init() {\n    this.dom = document.getElementById('root');\n    this.Home = new _ui_pages_Home_js__WEBPACK_IMPORTED_MODULE_3__.default({\n      dom: this.dom\n    });\n    this.Auth = new _ui_pages_Auth__WEBPACK_IMPORTED_MODULE_2__.default();\n    _EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.default.on('signUp', this.signUp.bind(this));\n    _EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.default.on('logIn', this.logIn.bind(this));\n    _EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.default.on('logOut', this.logOutHandler.bind(this));\n    _EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.default.on('showError', this.showError.bind(this));\n  }\n\n  async update() {\n    _api_context__WEBPACK_IMPORTED_MODULE_6__.default.token && (await (0,_api_user_get_js__WEBPACK_IMPORTED_MODULE_9__.default)());\n    const isAuthorized = !!_api_context__WEBPACK_IMPORTED_MODULE_6__.default.user.id;\n    this.render(isAuthorized);\n  }\n\n  render(isAuthorized) {\n    this.dom.innerHTML = '';\n\n    if (isAuthorized) {\n      this.Home.render({\n        dom: this.dom,\n        user: { ..._api_context__WEBPACK_IMPORTED_MODULE_6__.default.user\n        }\n      });\n    } else {\n      this.Auth.render({\n        dom: this.dom\n      });\n    }\n  }\n\n  async signUp({\n    email,\n    pass,\n    messageField\n  }) {\n    try {\n      await (0,_api_user_signup_js__WEBPACK_IMPORTED_MODULE_7__.default)({\n        email,\n        password: pass\n      });\n    } catch (error) {\n      _EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.default.emit('showError', {\n        isError: true,\n        message: error.message,\n        messageField\n      });\n    }\n\n    this.update();\n  }\n\n  async logIn({\n    email,\n    pass,\n    messageField\n  }) {\n    try {\n      await (0,_api_user_login_js__WEBPACK_IMPORTED_MODULE_8__.default)({\n        email,\n        password: pass\n      });\n    } catch (error) {\n      _EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.default.emit('showError', {\n        isError: true,\n        message: error.message,\n        messageField\n      });\n    }\n\n    this.update();\n  }\n\n  logOutHandler() {\n    _api_context__WEBPACK_IMPORTED_MODULE_6__.default.user = {};\n    _api_context__WEBPACK_IMPORTED_MODULE_6__.default.token = null;\n    document.cookie = 'token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';\n    this.update();\n  }\n\n  showError({\n    isError,\n    message,\n    currentField,\n    messageField\n  }) {\n    if (isError) {\n      messageField.classList.remove('hidden');\n      messageField.textContent = message;\n      currentField?.classList.add('invalid-input');\n    } else {\n      messageField.classList.add('hidden');\n      currentField?.classList.remove('invalid-input');\n    }\n  }\n\n}\n\nconst app = new App();\napp.update();\n\n//# sourceURL=webpack://todos/./src/index.js?");

/***/ }),

/***/ "./src/ui/components/Counter.js":
/*!**************************************!*\
  !*** ./src/ui/components/Counter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass CounterComponent {\n  constructor() {\n    this.init();\n  }\n\n  init() {\n    this.todosCounter = document.createElement('div');\n    this.todosCounter.classList.add('todos-counter');\n    this.allTodos = document.createElement('div');\n    this.doneTodos = document.createElement('div');\n    this.notDoneTodos = document.createElement('div');\n  }\n\n  render({\n    dom,\n    count\n  }) {\n    this.allTodos.textContent = `You have ${count.all} todos`;\n    this.doneTodos.textContent = `${count.completed} is done`;\n    this.notDoneTodos.textContent = `${count.active} should be done`;\n    this.todosCounter.append(this.allTodos, this.doneTodos, this.notDoneTodos);\n    dom.appendChild(this.todosCounter);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CounterComponent);\n\n//# sourceURL=webpack://todos/./src/ui/components/Counter.js?");

/***/ }),

/***/ "./src/ui/components/Filters.js":
/*!**************************************!*\
  !*** ./src/ui/components/Filters.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../EventEmitter */ \"./src/EventEmitter.js\");\n\n\nclass FiltersComponent {\n  constructor(filters) {\n    this.init(filters);\n  }\n\n  init(filters) {\n    this.filters = document.createElement('div');\n    this.filters.classList.add('filters');\n    Object.values(filters).map(i => {\n      const btn = document.createElement('div');\n      btn.classList.add(`filter-${i.label}-button`);\n      if (i.label === 'all') btn.textContent = i.label;\n      btn.addEventListener('click', () => {\n        _EventEmitter__WEBPACK_IMPORTED_MODULE_0__.default.emit('filterTodo', i.value);\n      });\n      this.filters.append(btn);\n    });\n  }\n\n  render({\n    dom\n  }) {\n    dom.appendChild(this.filters);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FiltersComponent);\n\n//# sourceURL=webpack://todos/./src/ui/components/Filters.js?");

/***/ }),

/***/ "./src/ui/components/Input.js":
/*!************************************!*\
  !*** ./src/ui/components/Input.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../EventEmitter */ \"./src/EventEmitter.js\");\n\n\nclass InputComponent {\n  constructor() {\n    this.init();\n  }\n\n  init() {\n    this.inputField = document.createElement('input');\n    this.inputField.classList.add('input-field');\n    this.inputField.type = 'text';\n    this.inputField.addEventListener('input', event => {\n      _EventEmitter__WEBPACK_IMPORTED_MODULE_0__.default.emit('inputTodo', {\n        string: event.target.value,\n        currentField: event.target\n      });\n    });\n    this.inputField.addEventListener('change', event => {\n      if (this.isValid) {\n        _EventEmitter__WEBPACK_IMPORTED_MODULE_0__.default.emit('addTodo', event);\n        this.inputField.focus();\n      }\n    });\n  }\n\n  render({\n    dom,\n    isValid\n  }) {\n    this.isValid = isValid;\n    dom?.appendChild(this.inputField);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputComponent);\n\n//# sourceURL=webpack://todos/./src/ui/components/Input.js?");

/***/ }),

/***/ "./src/ui/components/InvalidInputMessage.js":
/*!**************************************************!*\
  !*** ./src/ui/components/InvalidInputMessage.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass InvalidInputMessageComponent {\n  constructor() {\n    this.init();\n  }\n\n  init() {\n    this.invalidInput = document.createElement('div');\n    this.invalidInput.classList.add('invalid-input-message');\n  }\n\n  render({\n    dom\n  }) {\n    dom?.appendChild(this.invalidInput);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvalidInputMessageComponent);\n\n//# sourceURL=webpack://todos/./src/ui/components/InvalidInputMessage.js?");

/***/ }),

/***/ "./src/ui/components/LogIn.js":
/*!************************************!*\
  !*** ./src/ui/components/LogIn.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../EventEmitter.js */ \"./src/EventEmitter.js\");\n/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/utils.js */ \"./src/helpers/utils.js\");\n\n\n\nclass LogInComponent {\n  constructor({\n    messageField\n  }) {\n    this.init({\n      messageField\n    });\n  }\n\n  init({\n    messageField\n  }) {\n    this.logIn = document.createElement('div');\n    this.logIn.classList.add('auth-form');\n    const username = document.createElement('input');\n    username.classList.add('auth-input');\n    username.type = 'text';\n    username.placeholder = 'Email';\n    const usernameErrorField = document.createElement('div');\n    usernameErrorField.classList.add('auth-error-message', 'hidden');\n    const password = document.createElement('input');\n    password.classList.add('auth-input');\n    password.type = 'password';\n    password.placeholder = 'Password';\n    const passwordErrorField = document.createElement('div');\n    passwordErrorField.classList.add('auth-error-message', 'hidden');\n    const submit = document.createElement('input');\n    submit.type = 'submit';\n    submit.classList.add('submit-btn');\n    username.addEventListener('input', event => {\n      this.isValidEmail = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isValidEmail)(event.target.value);\n      _EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.default.emit('showError', {\n        isError: !this.isValidEmail,\n        message: 'Your email must be like user@domain.com',\n        currentField: event.target,\n        messageField: usernameErrorField\n      });\n    });\n    password.addEventListener('input', event => {\n      this.isValidPass = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isValidPassword)(event.target.value);\n      _EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.default.emit('showError', {\n        isError: !this.isValidPass,\n        message: 'Must includes 6 symbols (at least 1 number and 1 letter)',\n        currentField: event.target,\n        messageField: passwordErrorField\n      });\n    });\n    submit.addEventListener('click', () => {\n      if (this.isValidEmail && this.isValidPass) {\n        _EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.default.emit('logIn', {\n          email: username.value,\n          pass: password.value,\n          messageField\n        });\n      }\n    });\n    this.logIn.append(username, usernameErrorField, password, passwordErrorField, submit);\n  }\n\n  render({\n    dom\n  }) {\n    dom.appendChild(this.logIn);\n  }\n\n  removeChildEl({\n    dom\n  }) {\n    try {\n      dom.removeChild(this.logIn);\n    } catch (err) {}\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogInComponent);\n\n//# sourceURL=webpack://todos/./src/ui/components/LogIn.js?");

/***/ }),

/***/ "./src/ui/components/Paginator.js":
/*!****************************************!*\
  !*** ./src/ui/components/Paginator.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../EventEmitter */ \"./src/EventEmitter.js\");\n/* harmony import */ var _constants_limit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/limit */ \"./src/constants/limit.js\");\n\n\n\nclass PaginatorComponent {\n  constructor() {\n    this.init();\n  }\n\n  init() {\n    this.pgButtons = document.createElement('div');\n    this.pgButtons.classList.add('page-buttons');\n  }\n\n  render({\n    dom,\n    count,\n    currentPage\n  }) {\n    this.pgButtons.innerHTML = '';\n\n    if (count >= _constants_limit__WEBPACK_IMPORTED_MODULE_1__.default) {\n      for (let i = 1; i <= count / _constants_limit__WEBPACK_IMPORTED_MODULE_1__.default + 1; i++) {\n        const pgBtn = document.createElement('button');\n        pgBtn.classList.add('page-button');\n        pgBtn.num = i - 1;\n        pgBtn.textContent = i;\n\n        if (i === currentPage) {\n          pgBtn.classList.add('current-page');\n        }\n\n        pgBtn.addEventListener('click', () => {\n          _EventEmitter__WEBPACK_IMPORTED_MODULE_0__.default.emit('choosePage', pgBtn.num);\n        });\n        this.pgButtons.appendChild(pgBtn);\n      }\n    }\n\n    dom.appendChild(this.pgButtons);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaginatorComponent);\n\n//# sourceURL=webpack://todos/./src/ui/components/Paginator.js?");

/***/ }),

/***/ "./src/ui/components/SignUp.js":
/*!*************************************!*\
  !*** ./src/ui/components/SignUp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../EventEmitter.js */ \"./src/EventEmitter.js\");\n/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/utils.js */ \"./src/helpers/utils.js\");\n\n\n\nclass SignUpComponent {\n  constructor({\n    messageField\n  }) {\n    this.init({\n      messageField\n    });\n  }\n\n  init({\n    messageField\n  }) {\n    this.signUp = document.createElement('div');\n    this.signUp.classList.add('auth-form');\n    const username = document.createElement('input');\n    username.classList.add('auth-input');\n    username.type = 'text';\n    username.placeholder = 'Email';\n    const usernameErrorField = document.createElement('div');\n    usernameErrorField.classList.add('auth-error-message', 'hidden');\n    const password = document.createElement('input');\n    password.classList.add('auth-input');\n    password.type = 'password';\n    password.placeholder = 'Password'; // const passwordErrorField = document.createElement('div');\n    // passwordErrorField.classList.add('auth-error-message', 'hidden');\n\n    const passwordRepeat = document.createElement('input');\n    passwordRepeat.classList.add('auth-input');\n    passwordRepeat.type = 'password';\n    passwordRepeat.placeholder = 'Repeat password';\n    const passwordRepeatErrorField = document.createElement('div');\n    passwordRepeatErrorField.classList.add('auth-error-message', 'hidden');\n    const submit = document.createElement('input');\n    submit.type = 'submit';\n    submit.classList.add('submit-btn');\n    username.addEventListener('input', event => {\n      this.isValidEmail = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isValidEmail)(event.target.value);\n      _EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.default.emit('showError', {\n        isError: !this.isValidEmail,\n        message: 'Your email must be like user@domain.com',\n        currentField: event.target,\n        messageField: usernameErrorField\n      });\n    });\n    password.addEventListener('input', event => {\n      this.passwordChecker(event.target.value, null, event.target, passwordRepeatErrorField);\n    });\n    passwordRepeat.addEventListener('input', event => {\n      this.passwordChecker(null, event.target.value, password, passwordRepeatErrorField);\n      this.passwordChecker(null, event.target.value, event.target, passwordRepeatErrorField);\n    });\n    submit.addEventListener('click', () => {\n      if (this.isValidEmail && this.isValidPass) {\n        _EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.default.emit('signUp', {\n          email: username.value,\n          pass: password.value,\n          messageField\n        });\n        username.value = '';\n        password.value = '';\n        passwordRepeat.value = '';\n      }\n    });\n    this.signUp.append(username, usernameErrorField, password, passwordRepeat, passwordRepeatErrorField, submit);\n  }\n\n  render({\n    dom\n  }) {\n    dom.appendChild(this.signUp);\n  }\n\n  removeChildEl({\n    dom\n  }) {\n    try {\n      dom.removeChild(this.signUp);\n    } catch (err) {}\n  }\n\n  passwordChecker(password1, password2, currentField, messageField) {\n    password1 && (this.password1 = password1);\n    password2 && (this.password2 = password2);\n\n    if (this.password1 === this.password2) {\n      this.isValidPass = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isValidPassword)(password2);\n      _EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.default.emit('showError', {\n        isError: !this.isValidPass,\n        message: 'Your password must includes 6 symbols (at least 1 number and 1 letter)',\n        currentField,\n        messageField\n      });\n    } else {\n      _EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.default.emit('showError', {\n        isError: true,\n        message: 'Your passwords are different',\n        currentField,\n        messageField\n      });\n    }\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpComponent);\n\n//# sourceURL=webpack://todos/./src/ui/components/SignUp.js?");

/***/ }),

/***/ "./src/ui/components/Todo.js":
/*!***********************************!*\
  !*** ./src/ui/components/Todo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../constants/status.js.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../EventEmitter */ \"./src/EventEmitter.js\");\n\n\n\nclass TodoComponent {\n  constructor() {\n    this.init();\n  }\n\n  init() {\n    this.todoItem = document.createElement('li');\n    this.todoItem.classList.add('todos-item');\n    this.todoItemText = document.createElement('div');\n    this.todoItemText.classList.add('todos-item-text');\n    this.todoItemText.spellcheck = false;\n    this.isDoneItem = document.createElement('div');\n    this.isDoneItem.classList.add('is-done-item');\n    this.deleteItem = document.createElement('div');\n    this.deleteItem.classList.add('delete-item');\n  }\n\n  render({\n    dom,\n    todo,\n    isValid\n  }) {\n    this.isValid = isValid;\n    const {\n      id,\n      title,\n      status\n    } = todo;\n    this.todoItem.todoId = id;\n    this.todoItemText.textContent = title;\n\n    if (status === Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../constants/status.js.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) {\n      this.isDoneItem.classList.add('done');\n      this.todoItemText.classList.add('todo-is-done');\n    } else {\n      this.isDoneItem.classList.remove('done');\n      this.todoItemText.classList.remove('todo-is-done');\n    }\n\n    this.todoItemText.addEventListener('click', event => {\n      event.target.contentEditable = true;\n    });\n    this.todoItemText.addEventListener('input', event => {\n      _EventEmitter__WEBPACK_IMPORTED_MODULE_1__.default.emit('inputTodo', {\n        string: event.target.textContent,\n        currentField: event.target\n      });\n\n      if (this.isValid) {\n        _EventEmitter__WEBPACK_IMPORTED_MODULE_1__.default.emit('editTodo', {\n          id: event.target.parentNode.todoId,\n          title: event.target.textContent\n        });\n      }\n    });\n    this.todoItemText.addEventListener('keypress', event => {\n      if (event.code === 'Enter') {\n        _EventEmitter__WEBPACK_IMPORTED_MODULE_1__.default.emit('finishEditTodo', []);\n      }\n    });\n    this.deleteItem.addEventListener('click', event => {\n      _EventEmitter__WEBPACK_IMPORTED_MODULE_1__.default.emit('deleteTodo', event.target.parentNode.todoId);\n    });\n    this.isDoneItem.addEventListener('click', event => {\n      _EventEmitter__WEBPACK_IMPORTED_MODULE_1__.default.emit('toggleTodo', event.target.parentNode.todoId);\n    });\n    this.todoItem.append(this.isDoneItem, this.todoItemText, this.deleteItem);\n    dom.appendChild(this.todoItem);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoComponent);\n\n//# sourceURL=webpack://todos/./src/ui/components/Todo.js?");

/***/ }),

/***/ "./src/ui/components/TodoHeader.js":
/*!*****************************************!*\
  !*** ./src/ui/components/TodoHeader.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass TodoHeaderComponent {\n  constructor() {\n    this.init();\n  }\n\n  init() {\n    this.header = document.createElement('h1');\n    this.header.classList.add('todos-header');\n  }\n\n  render({\n    dom\n  }) {\n    this.header.textContent = 'todos';\n    dom.appendChild(this.header);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoHeaderComponent);\n\n//# sourceURL=webpack://todos/./src/ui/components/TodoHeader.js?");

/***/ }),

/***/ "./src/ui/components/TodoList.js":
/*!***************************************!*\
  !*** ./src/ui/components/TodoList.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo.js */ \"./src/ui/components/Todo.js\");\n\n\nclass TodoListComponent {\n  constructor() {\n    this.init();\n  }\n\n  init() {\n    this.todosList = document.createElement('ul');\n    this.todosList.classList.add('todos-list', 'hidden');\n  }\n\n  render({\n    dom,\n    todos,\n    inputField,\n    isValid\n  }) {\n    const todosKeys = Object.keys(todos);\n    this.todosList.innerHTML = '';\n\n    if (todosKeys.length) {\n      todosKeys.forEach(id => {\n        const todo = {\n          id,\n          ...todos[id]\n        };\n        const Todo = new _Todo_js__WEBPACK_IMPORTED_MODULE_0__.default();\n        Todo.render({\n          dom: this.todosList,\n          todo,\n          isValid\n        });\n      });\n      this.todosList.classList.remove('hidden');\n    } else {\n      this.todosList.classList.add('hidden');\n    }\n\n    this.hideList(inputField);\n    dom.appendChild(this.todosList);\n  }\n\n  hideList(inputField) {\n    if (!this.todosList.children.length) {\n      this.todosList.classList.add('hidden');\n      inputField.classList.remove('with-roled-edges');\n    } else {\n      inputField.classList.add('with-roled-edges');\n      this.todosList.classList.remove('hidden');\n    }\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoListComponent);\n\n//# sourceURL=webpack://todos/./src/ui/components/TodoList.js?");

/***/ }),

/***/ "./src/ui/components/User.js":
/*!***********************************!*\
  !*** ./src/ui/components/User.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../EventEmitter */ \"./src/EventEmitter.js\");\n\n\nclass UserComponent {\n  constructor() {\n    this.init();\n  }\n\n  init() {\n    this.userBlock = document.createElement('div');\n    this.userBlock.classList.add('user-block');\n    this.userName = document.createElement('div');\n    this.logOut = document.createElement('div');\n    this.logOut.classList.add('log-out-button');\n    this.logOut.textContent = 'Log out';\n    this.logOut.addEventListener('click', () => {\n      _EventEmitter__WEBPACK_IMPORTED_MODULE_0__.default.emit('logOut', []);\n    });\n    this.userBlock.append(this.userName, this.logOut);\n  }\n\n  render({\n    dom,\n    userName\n  }) {\n    this.userName.textContent = userName;\n    dom.append(this.userBlock);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserComponent);\n\n//# sourceURL=webpack://todos/./src/ui/components/User.js?");

/***/ }),

/***/ "./src/ui/pages/Auth.js":
/*!******************************!*\
  !*** ./src/ui/pages/Auth.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_InvalidInputMessage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/InvalidInputMessage.js */ \"./src/ui/components/InvalidInputMessage.js\");\n/* harmony import */ var _components_LogIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/LogIn.js */ \"./src/ui/components/LogIn.js\");\n/* harmony import */ var _components_SignUp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SignUp.js */ \"./src/ui/components/SignUp.js\");\n/* harmony import */ var _components_TodoHeader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TodoHeader.js */ \"./src/ui/components/TodoHeader.js\");\n\n\n\n\n\nclass AuthComponent {\n  constructor() {\n    this.init();\n  }\n\n  init() {\n    this.TodoHeader = new _components_TodoHeader_js__WEBPACK_IMPORTED_MODULE_3__.default();\n    this.ErrorMessage = new _components_InvalidInputMessage_js__WEBPACK_IMPORTED_MODULE_0__.default();\n    this.authPanel = document.createElement('div');\n    this.authPanel.classList.add('auth-panel');\n    const logInBtn = document.createElement('div');\n    logInBtn.classList.add('auth-panel-button');\n    logInBtn.textContent = 'Log in';\n    const signUpBtn = document.createElement('div');\n    signUpBtn.classList.add('auth-panel-button');\n    signUpBtn.textContent = 'Sign up';\n    this.LogIn = new _components_LogIn_js__WEBPACK_IMPORTED_MODULE_1__.default({\n      messageField: this.ErrorMessage.invalidInput\n    });\n    this.SignUp = new _components_SignUp_js__WEBPACK_IMPORTED_MODULE_2__.default({\n      messageField: this.ErrorMessage.invalidInput\n    });\n    logInBtn.addEventListener('click', () => {\n      this.SignUp.removeChildEl({\n        dom: this.authPanel\n      });\n      this.LogIn.render({\n        dom: this.authPanel\n      });\n    });\n    signUpBtn.addEventListener('click', () => {\n      this.LogIn.removeChildEl({\n        dom: this.authPanel\n      });\n      this.SignUp.render({\n        dom: this.authPanel\n      });\n    });\n    this.authPanel.append(logInBtn, signUpBtn);\n    this.LogIn.render({\n      dom: this.authPanel\n    });\n  }\n\n  render({\n    dom\n  }) {\n    this.TodoHeader.render({\n      dom\n    });\n    this.ErrorMessage.render({\n      dom\n    });\n    dom.append(this.authPanel);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthComponent);\n\n//# sourceURL=webpack://todos/./src/ui/pages/Auth.js?");

/***/ }),

/***/ "./src/ui/pages/Home.js":
/*!******************************!*\
  !*** ./src/ui/pages/Home.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Counter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Counter.js */ \"./src/ui/components/Counter.js\");\n/* harmony import */ var _components_Filters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Filters.js */ \"./src/ui/components/Filters.js\");\n/* harmony import */ var _components_Input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Input.js */ \"./src/ui/components/Input.js\");\n/* harmony import */ var _components_InvalidInputMessage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/InvalidInputMessage.js */ \"./src/ui/components/InvalidInputMessage.js\");\n/* harmony import */ var _components_TodoHeader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TodoHeader.js */ \"./src/ui/components/TodoHeader.js\");\n/* harmony import */ var _components_TodoList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TodoList.js */ \"./src/ui/components/TodoList.js\");\n/* harmony import */ var _components_User_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/User.js */ \"./src/ui/components/User.js\");\n/* harmony import */ var _constants_filters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/filters */ \"./src/constants/filters.js\");\n/* harmony import */ var _constants_status__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/status */ \"./src/constants/status.js\");\n/* harmony import */ var _EventEmitter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../EventEmitter.js */ \"./src/EventEmitter.js\");\n/* harmony import */ var _api_todo_get_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../api/todo/get.js */ \"./src/api/todo/get.js\");\n/* harmony import */ var _api_todo_post_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../api/todo/post.js */ \"./src/api/todo/post.js\");\n/* harmony import */ var _api_todo_byId_delete_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../api/todo/byId/delete.js */ \"./src/api/todo/byId/delete.js\");\n/* harmony import */ var _api_todo_byId_patch_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../api/todo/byId/patch.js */ \"./src/api/todo/byId/patch.js\");\n/* harmony import */ var _api_context_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../api/context.js */ \"./src/api/context.js\");\n/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../helpers/utils.js */ \"./src/helpers/utils.js\");\n/* harmony import */ var _components_Paginator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Paginator.js */ \"./src/ui/components/Paginator.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../constants/limit.js.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _api_todo_completed_get_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../api/todo/completed/get.js */ \"./src/api/todo/completed/get.js\");\n/* harmony import */ var _api_todo_active_get_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../api/todo/active/get.js */ \"./src/api/todo/active/get.js\");\n/* harmony import */ var _api_todo_count_get_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../api/todo/count/get.js */ \"./src/api/todo/count/get.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass HomePage {\n  constructor({\n    dom\n  }) {\n    this.init({\n      dom\n    });\n    this._todos = {};\n  }\n\n  init({\n    dom\n  }) {\n    this.dom = dom;\n    this._filterType = _constants_filters__WEBPACK_IMPORTED_MODULE_7__.default.ALL.value;\n    this.countPage = 0;\n    this.currentPage = 0;\n    this.TodoHeader = new _components_TodoHeader_js__WEBPACK_IMPORTED_MODULE_4__.default();\n    this.InvalidInputMessage = new _components_InvalidInputMessage_js__WEBPACK_IMPORTED_MODULE_3__.default();\n    this.Input = new _components_Input_js__WEBPACK_IMPORTED_MODULE_2__.default();\n    this.TodoList = new _components_TodoList_js__WEBPACK_IMPORTED_MODULE_5__.default();\n    this.Filters = new _components_Filters_js__WEBPACK_IMPORTED_MODULE_1__.default(_constants_filters__WEBPACK_IMPORTED_MODULE_7__.default);\n    this.Counter = new _components_Counter_js__WEBPACK_IMPORTED_MODULE_0__.default();\n    this.UserBlock = new _components_User_js__WEBPACK_IMPORTED_MODULE_6__.default();\n    this.Paginator = new _components_Paginator_js__WEBPACK_IMPORTED_MODULE_16__.default();\n    _EventEmitter_js__WEBPACK_IMPORTED_MODULE_9__.default.on('addTodo', this.addTodo.bind(this));\n    _EventEmitter_js__WEBPACK_IMPORTED_MODULE_9__.default.on('filterTodo', this.changeFilterType.bind(this));\n    _EventEmitter_js__WEBPACK_IMPORTED_MODULE_9__.default.on('deleteTodo', this.deleteTodo.bind(this));\n    _EventEmitter_js__WEBPACK_IMPORTED_MODULE_9__.default.on('editTodo', this.editTodo.bind(this));\n    _EventEmitter_js__WEBPACK_IMPORTED_MODULE_9__.default.on('finishEditTodo', this.finishTodoEditing.bind(this));\n    _EventEmitter_js__WEBPACK_IMPORTED_MODULE_9__.default.on('toggleTodo', this.toggleTodo.bind(this));\n    _EventEmitter_js__WEBPACK_IMPORTED_MODULE_9__.default.on('inputTodo', this.validateTodo.bind(this));\n    _EventEmitter_js__WEBPACK_IMPORTED_MODULE_9__.default.on('choosePage', this.choosePage.bind(this));\n  }\n\n  async render({\n    dom,\n    user\n  }) {\n    this._todos = {};\n    const count = await (0,_api_todo_count_get_js__WEBPACK_IMPORTED_MODULE_20__.default)();\n    await this.getTodo(this.currentPage);\n    user && (this.user = user);\n    this.TodoHeader.render({\n      dom\n    });\n    this.InvalidInputMessage.render({\n      dom: this.dom\n    });\n    this.Input.render({\n      dom,\n      isValid: this.isValid\n    });\n    this.TodoList.render({\n      dom,\n      todos: this._todos,\n      inputField: this.Input.inputField,\n      isValid: this.isValid\n    });\n    this.Filters.render({\n      dom\n    });\n    this.Counter.render({\n      dom,\n      count\n    });\n    this.UserBlock.render({\n      dom,\n      userName: _api_context_js__WEBPACK_IMPORTED_MODULE_14__.default.user.email\n    });\n    this.Paginator.render({\n      dom,\n      count: this.countPage,\n      currentPage: this.currentPage + 1\n    });\n    this.Input.inputField.focus();\n  }\n\n  async getTodo(page) {\n    try {\n      const {\n        count,\n        todoList\n      } = await this.filterTodo(page);\n      this.countPage = count;\n\n      for (let i in todoList) {\n        this._todos[todoList[i].id] = {\n          title: todoList[i].title,\n          status: todoList[i].status\n        };\n      }\n    } catch (error) {\n      console.log(error.message);\n    }\n  }\n\n  async addTodo(event) {\n    const newTodo = {\n      title: event.target.value,\n      status: _constants_status__WEBPACK_IMPORTED_MODULE_8__.default.ACTIVE.value\n    };\n\n    if (this.countPage >= Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../constants/limit.js.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) {\n      this.currentPage = Math.floor(this.countPage / Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../constants/limit.js.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n    } else {\n      this.currentPage = 0;\n    }\n\n    await (0,_api_todo_post_js__WEBPACK_IMPORTED_MODULE_11__.default)(newTodo);\n    this.render({\n      dom: this.dom\n    });\n    event.target.value = '';\n  }\n\n  async deleteTodo(id) {\n    await (0,_api_todo_byId_delete_js__WEBPACK_IMPORTED_MODULE_12__.default)(id);\n    this.render({\n      dom: this.dom\n    });\n  }\n\n  async editTodo({\n    id,\n    title\n  }) {\n    await (0,_api_todo_byId_patch_js__WEBPACK_IMPORTED_MODULE_13__.default)(id, {\n      title\n    });\n  }\n\n  finishTodoEditing() {\n    this.render({\n      dom: this.dom\n    });\n    this.Input.inputField.focus();\n  }\n\n  async toggleTodo(id) {\n    let status = _constants_status__WEBPACK_IMPORTED_MODULE_8__.default.COMPLETED.value;\n\n    if (this._todos[id].status === _constants_status__WEBPACK_IMPORTED_MODULE_8__.default.COMPLETED.value) {\n      status = _constants_status__WEBPACK_IMPORTED_MODULE_8__.default.ACTIVE.value;\n    }\n\n    await (0,_api_todo_byId_patch_js__WEBPACK_IMPORTED_MODULE_13__.default)(id, {\n      status\n    });\n    this.render({\n      dom: this.dom\n    });\n  }\n\n  changeFilterType(filterType) {\n    this._filterType = filterType;\n    this.currentPage = 0;\n    this.render({\n      dom: this.dom\n    });\n  }\n\n  async choosePage(num) {\n    this.currentPage = num;\n    this.render({\n      dom: this.dom\n    });\n  }\n\n  validateTodo({\n    string,\n    currentField\n  }) {\n    this.isValid = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_15__.isValidTodoTitle)(string);\n    _EventEmitter_js__WEBPACK_IMPORTED_MODULE_9__.default.emit('showError', {\n      isError: !this.isValid,\n      message: 'You can type only letters and numbers',\n      currentField,\n      messageField: this.InvalidInputMessage.invalidInput\n    });\n    this.Input.render({\n      isValid: this.isValid\n    });\n  }\n\n  async filterTodo(page) {\n    let todosWithCount;\n\n    if (this._filterType === _constants_filters__WEBPACK_IMPORTED_MODULE_7__.default.DONE.value) {\n      todosWithCount = await (0,_api_todo_completed_get_js__WEBPACK_IMPORTED_MODULE_18__.default)(page);\n    } else if (this._filterType === _constants_filters__WEBPACK_IMPORTED_MODULE_7__.default.NOT_DONE.value) {\n      todosWithCount = await (0,_api_todo_active_get_js__WEBPACK_IMPORTED_MODULE_19__.default)(page);\n    } else {\n      todosWithCount = await (0,_api_todo_get_js__WEBPACK_IMPORTED_MODULE_10__.default)(page);\n    }\n\n    return todosWithCount;\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n\n//# sourceURL=webpack://todos/./src/ui/pages/Home.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui/styles/normalize.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui/styles/normalize.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n\\n/* Document\\n   ========================================================================== */\\n\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\n\\nhtml {\\n  line-height: 1.15; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/* Sections\\n   ========================================================================== */\\n\\n/**\\n * Remove the margin in all browsers.\\n */\\n\\nbody {\\n  margin: 0;\\n}\\n\\n/**\\n * Render the `main` element consistently in IE.\\n */\\n\\nmain {\\n  display: block;\\n}\\n\\n/**\\n * Correct the font size and margin on `h1` elements within `section` and\\n * `article` contexts in Chrome, Firefox, and Safari.\\n */\\n\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0;\\n}\\n\\n/* Grouping content\\n   ========================================================================== */\\n\\n/**\\n * 1. Add the correct box sizing in Firefox.\\n * 2. Show the overflow in Edge and IE.\\n */\\n\\nhr {\\n  box-sizing: content-box; /* 1 */\\n  height: 0; /* 1 */\\n  overflow: visible; /* 2 */\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\npre {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n\\n/**\\n * Remove the gray background on active links in IE 10.\\n */\\n\\na {\\n  background-color: transparent;\\n}\\n\\n/**\\n * 1. Remove the bottom border in Chrome 57-\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\n\\nabbr[title] {\\n  border-bottom: none; /* 1 */\\n  text-decoration: underline; /* 2 */\\n  text-decoration: underline dotted; /* 2 */\\n}\\n\\n/**\\n * Add the correct font weight in Chrome, Edge, and Safari.\\n */\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/**\\n * Add the correct font size in all browsers.\\n */\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/* Embedded content\\n   ========================================================================== */\\n\\n/**\\n * Remove the border on images inside links in IE 10.\\n */\\n\\nimg {\\n  border-style: none;\\n}\\n\\n/* Forms\\n   ========================================================================== */\\n\\n/**\\n * 1. Change the font styles in all browsers.\\n * 2. Remove the margin in Firefox and Safari.\\n */\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  line-height: 1.15; /* 1 */\\n  margin: 0; /* 2 */\\n}\\n\\n/**\\n * Show the overflow in IE.\\n * 1. Show the overflow in Edge.\\n */\\n\\nbutton,\\ninput { /* 1 */\\n  overflow: visible;\\n}\\n\\n/**\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n * 1. Remove the inheritance of text transform in Firefox.\\n */\\n\\nbutton,\\nselect { /* 1 */\\n  text-transform: none;\\n}\\n\\n/**\\n * Correct the inability to style clickable types in iOS and Safari.\\n */\\n\\nbutton,\\n[type=\\\"button\\\"],\\n[type=\\\"reset\\\"],\\n[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n}\\n\\n/**\\n * Remove the inner border and padding in Firefox.\\n */\\n\\nbutton::-moz-focus-inner,\\n[type=\\\"button\\\"]::-moz-focus-inner,\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0;\\n}\\n\\n/**\\n * Restore the focus styles unset by the previous rule.\\n */\\n\\nbutton:-moz-focusring,\\n[type=\\\"button\\\"]:-moz-focusring,\\n[type=\\\"reset\\\"]:-moz-focusring,\\n[type=\\\"submit\\\"]:-moz-focusring {\\n  outline: 1px dotted ButtonText;\\n}\\n\\n/**\\n * Correct the padding in Firefox.\\n */\\n\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em;\\n}\\n\\n/**\\n * 1. Correct the text wrapping in Edge and IE.\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\n * 3. Remove the padding so developers are not caught out when they zero out\\n *    `fieldset` elements in all browsers.\\n */\\n\\nlegend {\\n  box-sizing: border-box; /* 1 */\\n  color: inherit; /* 2 */\\n  display: table; /* 1 */\\n  max-width: 100%; /* 1 */\\n  padding: 0; /* 3 */\\n  white-space: normal; /* 1 */\\n}\\n\\n/**\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/**\\n * Remove the default vertical scrollbar in IE 10+.\\n */\\n\\ntextarea {\\n  overflow: auto;\\n}\\n\\n/**\\n * 1. Add the correct box sizing in IE 10.\\n * 2. Remove the padding in IE 10.\\n */\\n\\n[type=\\\"checkbox\\\"],\\n[type=\\\"radio\\\"] {\\n  box-sizing: border-box; /* 1 */\\n  padding: 0; /* 2 */\\n}\\n\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\n\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/**\\n * 1. Correct the odd appearance in Chrome and Safari.\\n * 2. Correct the outline style in Safari.\\n */\\n\\n[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/**\\n * Remove the inner padding in Chrome and Safari on macOS.\\n */\\n\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Change font properties to `inherit` in Safari.\\n */\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/* Interactive\\n   ========================================================================== */\\n\\n/*\\n * Add the correct display in Edge, IE 10+, and Firefox.\\n */\\n\\ndetails {\\n  display: block;\\n}\\n\\n/*\\n * Add the correct display in all browsers.\\n */\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/* Misc\\n   ========================================================================== */\\n\\n/**\\n * Add the correct display in IE 10+.\\n */\\n\\ntemplate {\\n  display: none;\\n}\\n\\n/**\\n * Add the correct display in IE 10.\\n */\\n\\n[hidden] {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todos/./src/ui/styles/normalize.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui/styles/styles.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui/styles/styles.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_bg_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/bg.jpg */ \"./src/ui/img/bg.jpg\");\n/* harmony import */ var _img_trash_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/trash.png */ \"./src/ui/img/trash.png\");\n/* harmony import */ var _img_not_done_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/not-done.png */ \"./src/ui/img/not-done.png\");\n/* harmony import */ var _img_done_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/done.png */ \"./src/ui/img/done.png\");\n// Imports\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_bg_jpg__WEBPACK_IMPORTED_MODULE_2__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_trash_png__WEBPACK_IMPORTED_MODULE_3__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_not_done_png__WEBPACK_IMPORTED_MODULE_4__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_done_png__WEBPACK_IMPORTED_MODULE_5__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") fixed;\\n}\\n\\n#root {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  font-family: 'Roboto', sans-serif;\\n}\\n\\n.todos-header {\\n  font-size: 5vw;\\n  font-weight: 600;\\n  margin: 2vw 0 0 0;\\n  color: #fff;\\n  text-shadow: 0 0 20px #fff;\\n}\\n\\n.input-field {\\n  width: 27vw;\\n  height: 7vh;\\n  font-size: 1.7vw;\\n  border: 0;\\n  background-color: rgba(255, 255, 255, 0);\\n  font-weight: 700;\\n  background-color: rgba(255, 255, 255, 0.603);\\n  border-radius: 15px 15px 15px 15px;\\n  padding: 0 1.5vw;\\n}\\n\\n.input-field:focus {\\n  outline: none;\\n}\\n\\n.with-roled-edges {\\n  border-radius: 15px 15px 0 0;\\n}\\n\\n.todos-list {\\n  font-size: 2vw;\\n  padding: 0 0 1vh 0;\\n  width: 30vw;\\n  margin: 0;\\n  border-radius: 0 0 15px 15px;\\n  border-top: 0;\\n  background: rgba(255, 255, 255, 0.603);\\n}\\n\\n.todos-item {\\n  display: flex;\\n  height: 7vh;\\n\\n  justify-content: space-between;\\n  align-items: center;\\n  margin: 0 1vw;\\n  border-top: 1px solid rgba(119, 119, 119, 0.13);\\n}\\n\\n.todos-item-text {\\n  width: 25vw;\\n}\\n\\n.todos-item-text:focus {\\n  outline: none;\\n}\\n\\n.delete-item {\\n  cursor: pointer;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") center / 1.5vw no-repeat;\\n  min-height: 4vh;\\n  min-width: 1.5vw;\\n}\\n\\n.invalid-input-message {\\n  height: 5vh;\\n  color: rgb(211, 1, 1);\\n  font-size: 2vw;\\n  text-shadow: 0 0 15px rgba(255, 255, 255, 0.712);\\n}\\n\\n.invalid-edit {\\n  border-bottom: 1px solid rgb(211, 1, 1);\\n}\\n\\n.todos-counter {\\n  color: #fff;\\n  position: fixed;\\n  bottom: 5vh;\\n  right: 3vw;\\n}\\n\\n.is-done-item {\\n  min-width: 2vw;\\n  min-height: 5vh;\\n  margin: 0 0.5vw;\\n  cursor: pointer;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") center / 1.5vw no-repeat;\\n}\\n\\n.is-done-item.done {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n}\\n\\n.todo-is-done {\\n  text-decoration: line-through #000;\\n}\\n\\n.filters {\\n  display: flex;\\n  justify-content: space-around;\\n  margin: 2vh 0;\\n  width: 10vw;\\n  height: 5vh;\\n}\\n\\n.filter-all-button {\\n  width: 2vw;\\n  height: 1.8vw;\\n  border-radius: 50%;\\n  border: none;\\n  outline: none;\\n  font-family: 'Roboto', sans-serif;\\n  font-weight: 500;\\n  padding: 0.2vw 0 0 0;\\n  font-size: 1.4vw;\\n  text-align: center;\\n  background: rgba(255, 255, 255, 0.603);\\n  cursor: pointer;\\n}\\n\\n.filter-done-button {\\n  width: 2vw;\\n  height: 2vw;\\n  border-radius: 50%;\\n  border: none;\\n  outline: none;\\n  background: rgba(255, 255, 255, 0.603) url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") center / 1.7vw\\n    no-repeat;\\n  cursor: pointer;\\n  opacity: 1;\\n  transition: all 0.3s;\\n}\\n\\n.filter-notDone-button {\\n  width: 2vw;\\n  height: 2vw;\\n  border-radius: 50%;\\n  border: none;\\n  outline: none;\\n  background: rgba(255, 255, 255, 0.603) url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") center /\\n    1.7vw no-repeat;\\n  cursor: pointer;\\n  opacity: 1;\\n  transition: all 0.3s;\\n}\\n\\n/* TODO */\\n.current-filter {\\n  background: rgba(255, 100, 100, 0.801);\\n}\\n\\n.auth-panel {\\n  width: 30vw;\\n  height: 30vh;\\n\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 7fr;\\n  grid-template-areas:\\n    'logIn signUp'\\n    'form form';\\n\\n  background-color: rgba(255, 255, 255, 0.603);\\n  border-radius: 15px;\\n}\\n\\n.auth-panel-button {\\n  text-align: center;\\n  padding: 1vh;\\n  border-bottom: 1px dashed rgb(128, 128, 128);\\n\\n  cursor: pointer;\\n}\\n\\n.auth-panel-button:hover {\\n  color: rgb(99, 35, 78);\\n}\\n\\n.auth-form {\\n  grid-area: form;\\n\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-around;\\n  align-items: center;\\n}\\n\\n.auth-input {\\n  margin: 0 0 0 0;\\n  width: 25vw;\\n  outline: none;\\n  background: rgba(255, 255, 255, 0);\\n\\n  border: 0;\\n  border-bottom: 1px solid rgb(128, 128, 128);\\n}\\n\\n.user-block {\\n  position: fixed;\\n  left: 5vw;\\n  top: 5vh;\\n  color: #fff;\\n}\\n\\n.log-out-button {\\n  text-decoration: underline;\\n  cursor: pointer;\\n}\\n\\n.submit-btn {\\n  width: 10vw;\\n  align-self: center;\\n  border-radius: 15px;\\n  border: 0;\\n  cursor: pointer;\\n}\\n\\n.auth-error-message {\\n  font-size: 1vw;\\n  color: rgb(211, 1, 1);\\n  text-align: center;\\n}\\n\\n.invalid-input {\\n  border-bottom: 1px solid rgb(211, 1, 1);\\n}\\n\\n.page-buttons {\\n  position: fixed;\\n  min-width: 50%;\\n  display: flex;\\n  justify-content: center;\\n  bottom: 5vh;\\n}\\n\\n.page-button {\\n  width: 2vw;\\n  height: 2vw;\\n  margin: 0 0.2vw;\\n  border-radius: 50%;\\n  border: none;\\n  outline: none;\\n  font-family: 'Roboto', sans-serif;\\n\\n  background: rgba(255, 255, 255, 0.603);\\n  cursor: pointer;\\n}\\n\\n.current-page {\\n  background: rgba(255, 100, 100, 0.801);\\n}\\n\\n.hidden {\\n  opacity: 0;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todos/./src/ui/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/ui/img/bg.jpg":
/*!***************************!*\
  !*** ./src/ui/img/bg.jpg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"8b9141ad11d31328f26498ac35dc7d38.jpg\");\n\n//# sourceURL=webpack://todos/./src/ui/img/bg.jpg?");

/***/ }),

/***/ "./src/ui/img/done.png":
/*!*****************************!*\
  !*** ./src/ui/img/done.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"e7f5430c80920ae6a0b8013c44a1801d.png\");\n\n//# sourceURL=webpack://todos/./src/ui/img/done.png?");

/***/ }),

/***/ "./src/ui/img/not-done.png":
/*!*********************************!*\
  !*** ./src/ui/img/not-done.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"76adbcf878d30792ee24ba4f1797ffdd.png\");\n\n//# sourceURL=webpack://todos/./src/ui/img/not-done.png?");

/***/ }),

/***/ "./src/ui/img/trash.png":
/*!******************************!*\
  !*** ./src/ui/img/trash.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"e87a6bfe67e94805cd9b86a503fa83c2.png\");\n\n//# sourceURL=webpack://todos/./src/ui/img/trash.png?");

/***/ }),

/***/ "./src/ui/styles/normalize.css":
/*!*************************************!*\
  !*** ./src/ui/styles/normalize.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./normalize.css */ \"./node_modules/css-loader/dist/cjs.js!./src/ui/styles/normalize.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://todos/./src/ui/styles/normalize.css?");

/***/ }),

/***/ "./src/ui/styles/styles.css":
/*!**********************************!*\
  !*** ./src/ui/styles/styles.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/ui/styles/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://todos/./src/ui/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todos/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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