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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/core/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/style/style.scss":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/style/style.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "html {\n  height: 100%; }\n\nbody {\n  font-family: 'open sans',arial,sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100%; }\n\np {\n  font-size: 15px;\n  color: #818d9a; }\n\n#appContainer {\n  height: 100%;\n  background: #f0f4f7; }\n  #appContainer.dark-theme {\n    background: #3d4a54; }\n\n.pageContent {\n  width: calc(100% - 200px);\n  height: calc(100% - 80px);\n  margin-top: 60px;\n  margin-left: 180px;\n  vertical-align: top;\n  display: inline-block;\n  padding: 10px; }\n\n/* Color variables */\n.c-primary-btn {\n  padding: 5px 15px;\n  margin: 0 15px;\n  background: #2eade3;\n  border: 1px solid #2eade3;\n  border-radius: 4px;\n  color: white;\n  font-size: 14px;\n  display: inline;\n  cursor: pointer; }\n  .c-primary-btn:hover {\n    background: #147097;\n    border: #147097; }\n\n.c-secondary-btn {\n  padding: 5px 15px;\n  margin: 0 15px;\n  background: transparent;\n  border: 1px solid #bbbbbb;\n  border-radius: 4px;\n  color: white;\n  font-size: 14px;\n  color: #626262;\n  display: inline; }\n  .c-secondary-btn:hover {\n    background: #1a91c4;\n    border: #1a91c4;\n    color: white; }\n\n.navContainer {\n  height: 100%;\n  background: #1a91c4;\n  width: 180px;\n  display: inline-block;\n  position: fixed;\n  z-index: 10; }\n\n.navItem {\n  color: #fff;\n  text-align: left;\n  padding: 16px 18px 16px 22px;\n  cursor: pointer;\n  transition: .1s ease;\n  position: relative;\n  height: 25px; }\n\n.navItem:hover,\n.navItem.active {\n  background: #147097; }\n\n.navItem:hover .navItemTool {\n  display: block; }\n\n.navItemTool {\n  display: none;\n  position: absolute;\n  background: rgba(0, 0, 0, 0.8);\n  padding: 10px 20px;\n  font-size: 14px;\n  width: 100px;\n  text-align: left;\n  border-radius: 5px;\n  left: 65px;\n  top: calc(50% - 18px); }\n\n.navItemTool:after {\n  content: '';\n  position: absolute;\n  left: -7px;\n  top: 12px;\n  border-right: 7px solid rgba(0, 0, 0, 0.8);\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent; }\n\n.navItem > i {\n  vertical-align: bottom;\n  margin-right: 10px; }\n\n.navContainer.dark-theme {\n  height: 100%;\n  background: #213136;\n  width: 180px;\n  display: inline-block;\n  position: fixed;\n  z-index: 10; }\n  .navContainer.dark-theme .navItem {\n    color: #fff;\n    text-align: left;\n    padding: 16px 18px 16px 22px;\n    cursor: pointer;\n    transition: .1s ease;\n    position: relative;\n    height: 25px; }\n    .navContainer.dark-theme .navItem i {\n      opacity: .6; }\n  .navContainer.dark-theme .navItem:hover,\n  .navContainer.dark-theme .navItem.active {\n    background: #15252A;\n    color: #fff; }\n    .navContainer.dark-theme .navItem:hover i,\n    .navContainer.dark-theme .navItem.active i {\n      opacity: 1;\n      color: #fff; }\n  .navContainer.dark-theme .navItem:hover .navItemTool {\n    display: block; }\n  .navContainer.dark-theme .navItemTool {\n    display: none;\n    position: absolute;\n    background: rgba(0, 0, 0, 0.8);\n    padding: 10px 20px;\n    font-size: 14px;\n    width: 100px;\n    text-align: left;\n    border-radius: 5px;\n    left: 65px;\n    top: calc(50% - 18px); }\n  .navContainer.dark-theme .navItemTool:after {\n    content: '';\n    position: absolute;\n    left: -7px;\n    top: 12px;\n    border-right: 7px solid rgba(0, 0, 0, 0.8);\n    border-top: 7px solid transparent;\n    border-bottom: 7px solid transparent; }\n  .navContainer.dark-theme .toggleThemeBtn {\n    position: absolute;\n    bottom: 0;\n    border: 1px solid #ddd;\n    border-radius: 8px;\n    padding: 7px 12px;\n    margin: 0 auto;\n    color: #fff; }\n    .navContainer.dark-theme .toggleThemeBtn .toggleThemeIcon {\n      display: inline-block;\n      color: #efefef; }\n\n.headerContainer {\n  position: fixed;\n  top: 0;\n  width: calc(100% - 224px);\n  margin-left: 180px;\n  padding: 16px 22px;\n  background: #fff;\n  box-shadow: 0 0 3px #e7e7e7;\n  z-index: 9; }\n\n.headerTitle {\n  font-size: 15px;\n  font-weight: 600;\n  color: #555;\n  display: inline-block; }\n\n.headerAccount {\n  float: right;\n  font-size: 14px;\n  vertical-align: top;\n  color: #888;\n  cursor: pointer; }\n  .headerAccount:hover .headerProfileDropdown {\n    background: #1da2db; }\n    .headerAccount:hover .headerProfileDropdown i {\n      color: #fff; }\n  .headerAccount:hover .headerUserName {\n    color: #333; }\n\n.headerUserName {\n  font-size: 15px;\n  font-weight: 500;\n  color: #888;\n  position: absolute;\n  padding: 10px 55px;\n  right: 22px;\n  top: 7px; }\n\n.headerProfileDropdown {\n  padding: 5px;\n  border: 2px solid #1da2db;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 25px;\n  top: 10px; }\n  .headerProfileDropdown > i {\n    font-size: 20px;\n    float: right;\n    color: #888;\n    margin-left: 7px;\n    position: relative; }\n\n/*** Dark theme ***/\n.headerContainer.dark-theme {\n  position: fixed;\n  top: 0;\n  height: 24px;\n  width: calc(100% - 224px);\n  margin-left: 180px;\n  padding: 16px 22px;\n  background: #1a91c4;\n  box-shadow: 0 0 3px #1a91c4;\n  z-index: 9; }\n  .headerContainer.dark-theme .headerTitle {\n    font-size: 15px;\n    font-weight: 600;\n    color: #fff;\n    display: inline-block; }\n  .headerContainer.dark-theme .headerAccount {\n    float: right;\n    font-size: 14px;\n    vertical-align: top;\n    color: #fff;\n    cursor: pointer; }\n    .headerContainer.dark-theme .headerAccount:hover .headerProfileDropdown {\n      background: #fff; }\n      .headerContainer.dark-theme .headerAccount:hover .headerProfileDropdown i {\n        color: #1da2db; }\n    .headerContainer.dark-theme .headerAccount:hover .headerUserName {\n      color: #fff; }\n  .headerContainer.dark-theme .headerUserName {\n    font-size: 15px;\n    font-weight: 500;\n    color: #fff;\n    position: absolute;\n    padding: 10px 55px;\n    right: 22px;\n    top: 7px; }\n  .headerContainer.dark-theme .headerProfileDropdown {\n    padding: 5px;\n    border: 2px solid #ddd;\n    border-radius: 50%;\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    right: 25px;\n    top: 10px; }\n    .headerContainer.dark-theme .headerProfileDropdown > i {\n      font-size: 20px;\n      float: right;\n      color: #fff;\n      margin-left: 7px;\n      position: relative; }\n\n.widget {\n  background: #fff;\n  border-radius: 5px;\n  box-shadow: 0 0 4px #ddd;\n  display: inline-block;\n  margin: 10px;\n  vertical-align: top; }\n  .widget .widgetHeader {\n    color: #777;\n    padding: 10px 15px;\n    border-bottom: 1px solid #ddd;\n    font-size: 15px;\n    font-weight: bold; }\n  .widget .widgetContent {\n    padding: 10px 15px; }\n\n.pageContent.dark-theme .widget {\n  background: #213136;\n  box-shadow: 0 0 4px #333; }\n  .pageContent.dark-theme .widget .widgetHeader {\n    color: #fff;\n    padding: 10px 15px;\n    border-bottom: 1px solid #333;\n    font-size: 15px;\n    font-weight: bold; }\n  .pageContent.dark-theme .widget .widgetContent {\n    padding: 10px 15px; }\n    .pageContent.dark-theme .widget .widgetContent p {\n      color: #dedede; }\n\n/* WIDGET WIDTH CLASSES */\n.width-25 {\n  width: calc(25% - 22px); }\n\n.width-30 {\n  width: calc(33.3333% - 22px); }\n\n.width-50 {\n  width: calc(50% - 22px); }\n\n.width-70 {\n  width: calc(66.6666% - 22px); }\n\n.width-100 {\n  width: calc(100% - 22px); }\n\n@media screen and (max-width: 1200px) {\n  .width-25 {\n    width: calc(33% - 22px); } }\n\n@media screen and (max-width: 900px) {\n  .width-25 {\n    width: calc(50% - 22px); }\n  .width-30 {\n    width: calc(50% - 22px); } }\n\n@media screen and (max-width: 700px) {\n  .width-25 {\n    width: calc(100% - 22px); }\n  .width-30 {\n    width: calc(100% - 22px); }\n  .width-50 {\n    width: calc(100% - 22px); }\n  .width-70 {\n    width: calc(100% - 22px); } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ "./node_modules/history/DOMUtils.js":
/*!******************************************!*\
  !*** ./node_modules/history/DOMUtils.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),

/***/ "./node_modules/history/LocationUtils.js":
/*!***********************************************!*\
  !*** ./node_modules/history/LocationUtils.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.createLocation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _resolvePathname = __webpack_require__(/*! resolve-pathname */ "./node_modules/resolve-pathname/index.js");

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__(/*! value-equal */ "./node_modules/value-equal/index.js");

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/PathUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
};

/***/ }),

/***/ "./node_modules/history/PathUtils.js":
/*!*******************************************!*\
  !*** ./node_modules/history/PathUtils.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),

/***/ "./node_modules/history/createBrowserHistory.js":
/*!******************************************************!*\
  !*** ./node_modules/history/createBrowserHistory.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/LocationUtils.js");

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/PathUtils.js");

var _createTransitionManager = __webpack_require__(/*! ./createTransitionManager */ "./node_modules/history/createTransitionManager.js");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(/*! ./DOMUtils */ "./node_modules/history/DOMUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;

/***/ }),

/***/ "./node_modules/history/createTransitionManager.js":
/*!*********************************************************!*\
  !*** ./node_modules/history/createTransitionManager.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

exports.default = createTransitionManager;

/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/resolve-pathname/index.js":
/*!************************************************!*\
  !*** ./node_modules/resolve-pathname/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);

/***/ }),

/***/ "./node_modules/style-loader/addStyles.js":
/*!************************************************!*\
  !*** ./node_modules/style-loader/addStyles.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/value-equal/index.js":
/*!*******************************************!*\
  !*** ./node_modules/value-equal/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);

/***/ }),

/***/ "./node_modules/warning/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _buttons = __webpack_require__(/*! ../utilities/buttons */ "./src/utilities/buttons.js");

var _buttons2 = _interopRequireDefault(_buttons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (style) {
  const appContainer = document.getElementById('appContainer');
  var headerContainer = document.createElement('div');
  const headerTitle = document.createElement('div');
  const headerAccount = document.createElement('div');
  const headerProfile = document.createElement('div');
  var headerProfileDropdown = document.createElement('div');

  headerContainer.className = 'headerContainer';
  headerTitle.className = 'headerTitle';
  headerAccount.className = 'headerAccount';
  headerProfile.className = 'headerProfile';
  headerProfileDropdown.className = 'headerProfileDropdown';

  headerContainer.appendChild(headerTitle);
  headerContainer.appendChild(headerAccount);
  headerAccount.appendChild(headerProfile);
  headerAccount.appendChild(headerProfileDropdown);

  const addBtn = new _buttons2.default('');
  headerContainer.appendChild(addBtn.btn);
  addBtn.btn.style.display = 'none';

  if (style === "light-theme") {
    headerContainer.className = 'headerContainer';
  } else if (style === "dark-theme") {
    headerContainer.className = 'headerContainer dark-theme';
  }

  /* Render to DOM */
  appContainer.appendChild(headerContainer);

  /* Methods */
  function renderHeaderTitle(title) {
    headerTitle.innerHTML = title;
    if (title != 'Dashboard') {
      addBtn.btn.style.display = 'inline';
      addBtn.update('Add ' + title);
    } else {
      addBtn.btn.style.display = 'none';
    }
  }

  function renderHeaderAccount(account) {
    headerAccount.innerHTML = account + '<i class="material-icons">account_circle</i>';
  }

  function renderHeaderProfile(user) {
    const userName = document.createElement('div');
    headerProfile.appendChild(userName);
    userName.innerHTML = user;
    userName.className = 'headerUserName';
    headerProfileDropdown.innerHTML = '<i class="material-icons">person</i>';
  }

  function toggleTheme(color) {
    if (color === "light-theme") {
      headerContainer.className = 'headerContainer';
    } else if (color === "dark-theme") {
      headerContainer.className = 'headerContainer dark-theme';
    }
  }

  return {
    renderHeaderTitle: renderHeaderTitle,
    renderHeaderAccount: renderHeaderAccount,
    renderHeaderProfile: renderHeaderProfile,
    profileIcon: headerAccount,
    theme: toggleTheme
  };
}; /* Header Component*/


module.exports = Header;

/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _layoutConstructor = __webpack_require__(/*! ../core/layoutConstructor */ "./src/core/layoutConstructor.js");

var _layoutConstructor2 = _interopRequireDefault(_layoutConstructor);

var _createBrowserHistory = __webpack_require__(/*! history/createBrowserHistory */ "./node_modules/history/createBrowserHistory.js");

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const history = (0, _createBrowserHistory2.default)();
const location = history.location;

//NAV BAR COMPONENT
const navItems = [{
  path: '/dashboard',
  text: 'Dashboard',
  icon: 'camera'
}, {
  path: '/organizations',
  text: 'Organizations',
  icon: 'person'
}, {
  path: '/fundraisers',
  text: 'Fundraisers',
  icon: 'insert_chart'
}, {
  path: '/people',
  text: 'People',
  icon: 'settings'
}];

var NavBar = function (style) {
  var appContainer = document.getElementById('appContainer');
  var navContainer = document.createElement('div');
  if (style === "light-theme") {
    navContainer.className = 'navContainer';
  } else if (style === "dark-theme") {
    navContainer.className = 'navContainer dark-theme';
  }
  navItems.forEach(function (item) {
    const navItem = document.createElement('div');
    navItem.className = 'navItem';
    navItem.innerHTML = '<i class="material-icons">' + item.icon + '</i>' + item.text;
    navContainer.appendChild(navItem);
    navItem.addEventListener('click', function () {
      history.push(item.path, { state: item.path });
      document.title = item.text + ' | ProgressHub';
      _layoutConstructor2.default.renderContent(item.path);
    });
    if (item.path == location.pathname) {
      navItem.className = 'navItem active';
    }
    if (item.path == '/dashboard' && location.pathname == '/') {
      navItem.className = 'navItem active';
      document.title = item.text + ' | ProgressHub';
    }
    history.listen(function (location) {
      if (item.path == location.pathname) {
        navItem.className = 'navItem active';
        _layoutConstructor2.default.renderContent(item.path);
      } else {
        navItem.className = 'navItem';
      }
    });
  });

  /** Start ToDo **/

  //Toggle theme color button
  var toggleThemeBtn = document.createElement('div');
  toggleThemeBtn.className = 'toggleThemeBtn';
  var themeBtnText = style === 'dark-theme' ? 'Lights On?' : 'Lights Off?';
  toggleThemeBtn.innerHTML = themeBtnText;
  var toggleThemeIcon = document.createElement('div');
  toggleThemeIcon.className = 'toggleThemeIcon';
  toggleThemeIcon.innerHTML = '<i class="material-icons">highlight</i>';
  toggleThemeBtn.appendChild(toggleThemeIcon);
  //navContainer.appendChild(toggleThemeBtn);

  /** End ToDo **/

  function toggleTheme(color) {
    if (color === "light-theme") {
      navContainer.className = 'navContainer';
    } else if (color === "dark-theme") {
      navContainer.className = 'navContainer dark-theme';
    }
  }

  appContainer.appendChild(navContainer);

  return {
    theme: toggleTheme
  };
};
module.exports = NavBar;

/***/ }),

/***/ "./src/components/widgetTemplate.js":
/*!******************************************!*\
  !*** ./src/components/widgetTemplate.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = widgetTemplate;
//WIDGET TEMPLATE COMPONENT
function widgetTemplate(title, width, container, id) {
  var widget = document.createElement('div');
  var widgetHeader = document.createElement('div');
  var widgetHeaderTitle = document.createElement('div');
  var widgetContent = document.createElement('div');
  if (id) {
    widgetContent.setAttribute('id', id);
  }

  var appendContent = function (content) {
    widgetContent.appendChild(content);
  };
  var appendWidget = function (container) {
    container.appendChild(widget);
  };

  widget.className = 'widget';
  widgetHeader.className = 'widgetHeader';
  widgetHeaderTitle.className = 'widgetHeaderTitle';
  widgetContent.className = 'widgetContent';
  widgetHeaderTitle.innerHTML = title;
  widgetHeader.appendChild(widgetHeaderTitle);
  widget.appendChild(widgetHeader);
  widget.appendChild(widgetContent);
  if (width != null) {
    widget.className = 'widget width-' + width;
  }
  if (container != null) {
    appendWidget(container);
  }

  return {
    appendContent: appendContent,
    appendWidget: appendWidget,
    widgetContent: widgetContent
  };
}

/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../style/style.scss */ "./src/style/style.scss");

var _layoutConstructor = __webpack_require__(/*! ./layoutConstructor */ "./src/core/layoutConstructor.js");

var _layoutConstructor2 = _interopRequireDefault(_layoutConstructor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/core/layoutConstructor.js":
/*!***************************************!*\
  !*** ./src/core/layoutConstructor.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _navbar = __webpack_require__(/*! ../components/navbar */ "./src/components/navbar.js");

var _navbar2 = _interopRequireDefault(_navbar);

var _header = __webpack_require__(/*! ../components/header */ "./src/components/header.js");

var _header2 = _interopRequireDefault(_header);

var _dashboard = __webpack_require__(/*! ../modules/dashboard */ "./src/modules/dashboard.js");

var _dashboard2 = _interopRequireDefault(_dashboard);

var _users = __webpack_require__(/*! ../modules/users */ "./src/modules/users.js");

var _users2 = _interopRequireDefault(_users);

var _fundraisers = __webpack_require__(/*! ../modules/fundraisers */ "./src/modules/fundraisers.js");

var _fundraisers2 = _interopRequireDefault(_fundraisers);

var _createBrowserHistory = __webpack_require__(/*! history/createBrowserHistory */ "./node_modules/history/createBrowserHistory.js");

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/default */
const history = (0, _createBrowserHistory2.default)();
const location = history.location;

function layoutConstructor() {
  const appContainer = document.getElementById('appContainer');

  // specify 'dark-theme' or 'light-theme' in the new NavBar instance.
  var colorTheme = 'dark-theme';

  var navbar = new _navbar2.default(colorTheme);
  var header = new _header2.default(colorTheme);
  var pageContent = document.createElement('div');
  if (colorTheme === "light-theme") {
    pageContent.className = 'pageContent';
  } else if (colorTheme === "dark-theme") {
    pageContent.className = 'pageContent dark-theme';
    appContainer.className = 'dark-theme';
  }
  appContainer.appendChild(pageContent);

  header.renderHeaderProfile('Test User');

  var themeToggle = header.profileIcon;
  themeToggle.addEventListener('click', function () {
    if (colorTheme === "light-theme") {
      colorTheme = 'dark-theme';
      appContainer.className = 'dark-theme';
    } else if (colorTheme === 'dark-theme') {
      colorTheme = "light-theme";
      appContainer.className = '';
    }
    toggleTheme();
  });

  function toggleTheme() {
    navbar.theme(colorTheme);
    header.theme(colorTheme);
    navbar.theme(colorTheme);
    if (colorTheme === "light-theme") {
      pageContent.className = 'pageContent';
    } else if (colorTheme === "dark-theme") {
      pageContent.className = 'pageContent dark-theme';
      appContainer.className = 'dark-theme';
    }
  }

  function renderContent(path) {
    pageContent.innerHTML = '';
    if (path == '/' || path == '/dashboard') {
      (0, _dashboard2.default)(colorTheme);
      header.renderHeaderTitle('Dashboard');
    } else if (path == '/organizations') {
      header.renderHeaderTitle('Organizations');
    } else if (path == '/fundraisers') {
      (0, _fundraisers2.default)(colorTheme);
      header.renderHeaderTitle('Fundraisers');
    } else if (path == '/people') {
      (0, _users2.default)(colorTheme);
      header.renderHeaderTitle('People');
    }
  }
  return {
    renderContent: renderContent
  };
}
var layout = layoutConstructor();
layout.renderContent(location.pathname);

exports.default = layout;

/***/ }),

/***/ "./src/modules/dashboard.js":
/*!**********************************!*\
  !*** ./src/modules/dashboard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _widgetTemplate = __webpack_require__(/*! ../components/widgetTemplate */ "./src/components/widgetTemplate.js");

var _widgetTemplate2 = _interopRequireDefault(_widgetTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dashboard = function () {
  var pageContainer = document.getElementsByClassName('pageContent')[0];

  var widgetOne = new _widgetTemplate2.default('Status', 50, pageContainer, 'widgetOne');
  var widgetTwo = new _widgetTemplate2.default('Event Feed', 50, pageContainer, 'widgetTwo');
  var widgetThree = new _widgetTemplate2.default('Items', 100, pageContainer, 'widgetThree');

  var content1 = document.createElement('p');
  var content2 = document.createElement('p');
  var content3 = document.createElement('p');
  content1.innerHTML = 'Here is some test content for each of the widgets on the dashboard.';
  content2.innerHTML = 'Here is some test content for each of the widgets on the dashboard.';
  content3.innerHTML = 'Here is some test content for each of the widgets on the dashboard.';
  widgetOne.appendContent(content1);
  widgetTwo.appendContent(content2);
  widgetThree.appendContent(content3);
};

module.exports = dashboard;

/***/ }),

/***/ "./src/modules/fundraisers.js":
/*!************************************!*\
  !*** ./src/modules/fundraisers.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _widgetTemplate = __webpack_require__(/*! ../components/widgetTemplate */ "./src/components/widgetTemplate.js");

var _widgetTemplate2 = _interopRequireDefault(_widgetTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fundraisers = function () {
  var pageContainer = document.getElementsByClassName('pageContent')[0];

  var numOfUsers = 18;
  for (var i = 0; i < numOfUsers; i++) {
    var widget = new _widgetTemplate2.default('Test Fundraiser', 25);
    var content = document.createElement('p');
    content.innerHTML = 'Fundraiser widget content example.';
    widget.appendContent(content);
    widget.appendWidget(pageContainer);
  }
};

module.exports = fundraisers;

/***/ }),

/***/ "./src/modules/users.js":
/*!******************************!*\
  !*** ./src/modules/users.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _widgetTemplate = __webpack_require__(/*! ../components/widgetTemplate */ "./src/components/widgetTemplate.js");

var _widgetTemplate2 = _interopRequireDefault(_widgetTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var users = function () {
  var pageContainer = document.getElementsByClassName('pageContent')[0];

  var numOfUsers = 15;
  for (var i = 0; i < numOfUsers; i++) {
    var widget = new _widgetTemplate2.default('Test User', 25);
    var content = document.createElement('p');
    content.innerHTML = 'User widget content example.';
    widget.appendContent(content);
    widget.appendWidget(pageContainer);
  }
};

module.exports = users;

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/style/style.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/utilities/buttons.js":
/*!**********************************!*\
  !*** ./src/utilities/buttons.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const PrimaryBtn = function (text, _callback) {
    const btn = document.createElement('btn');
    btn.setAttribute('type', 'button');
    btn.className = 'c-primary-btn';
    btn.innerHTML = text;
    if (_callback) {
        btn.addEventListener('click', function (e) {
            _callback(e);
        });
    }

    /* Methods */
    function update(text, _callback) {
        btn.removeEventListener('click', {});
        btn.innerHTML = text;
        if (_callback) {
            btn.addEventListener('click', function (e) {
                _callback(e);
            });
        }
    }
    return {
        update: update,
        btn: btn
    };
};

module.exports = PrimaryBtn;

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map