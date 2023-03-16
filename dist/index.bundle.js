"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./CEDRIC demo.ttf */ "./src/CEDRIC demo.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./TiltWarp-Regular.ttf */ "./src/TiltWarp-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --dark: #16205E;\n    --mid: #363E88;\n    --light: #575E9B;\n    --accent: #5C6DFF;\n    --g: #4EEFA3;\n    --b: #43C7FF;\n    --r: #FF7474;\n    --w: #c9d0fa;\n}\n\n@font-face {\n    font-family: 'cedric';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype'); \n}\n\n@font-face {\n    font-family: 'tiltWrap';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype'); \n}\n\n\n*{\n    font-family: 'tiltWrap';\n}\n\nhtml,\nbody{\n    height: 100%;\n    margin: 0;\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n}\n\n\n.nodisplay{\n    display: none !important;\n}\n\n.content{\n    flex: 1;\n    display: flex;\n    width: 100%;\n}\n\nheader{\n    background-color: var(--dark);\n    padding: 2rem 2rem 1rem 2rem;\n}\n\na{\n    text-decoration: none;\n    color: var(--w);\n    transition-duration: 0.3s;\n    padding: 0.1rem 0.2rem;\n}\n\na:hover{\n    color: var(--dark);\n    letter-spacing: 0.1rem;\n    background-color: #43C7FF;\n}\n\nfooter{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--accent);\n    padding: 10px;\n    background-color: var(--dark);\n}\n\n.projects{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--light);\n    flex:2.5;\n    gap:15px;\n}\n\n.project-container{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap : 15px;\n}\n\n\nsvg{\n    height: 1.7rem;\n    width: auto;\n}\n\n.project-div{\n    display: flex;\n    align-items: center;\n    height: 40px;\n    background-color: var(--dark);\n    color: var(--w);\n    padding: 10px;\n    width: 80%;\n    border-radius: 10px;\n}\n\n.project-div span{\n    font-size: 1.1rem;\n    margin-right: auto;\n}\n\nbutton{\n    background: transparent;\n    color: black;\n    filter: invert(82%) sepia(3%) saturate(2795%) hue-rotate(196deg) brightness(102%) contrast(96%);\n    border: none;\n    transition-duration: 0.3s;\n}\n\n\n.edit:hover{\n    filter: invert(64%) sepia(98%) saturate(1347%) hue-rotate(170deg) brightness(102%) contrast(104%);\n}\n\n.delete:hover{\n    filter: invert(63%) sepia(72%) saturate(2597%) hue-rotate(316deg) brightness(105%) contrast(104%);\n}\n\n.add-button:hover{\n    filter: invert(64%) sepia(98%) saturate(1347%) hue-rotate(170deg) brightness(102%) contrast(104%);\n}\n\n.todos{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--mid);\n    flex:7;\n    gap:15px;\n}\n\nbutton{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nh1{\n    line-height: 3rem;\n    font-family: 'cedric';\n    font-weight: 100;\n    margin:0;\n    letter-spacing: 5px;\n    font-size: 5rem;\n    color: var(--w);\n}\n\nh2{\n    color: var(--w);\n    margin: 15px 0 0 0 ;\n}\n\nh3{\n    margin: 0;\n    color: var(--dark);\n}\n\n.button-container{\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.popup{\n    position: fixed;\n    display: none;\n    flex-direction: column;\n    background-color: var(--accent);\n    color: var(--w);\n    border-radius: 10px;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    padding: 20px 50px;\n    gap:20px;\n    align-items: center;\n    z-index: 10;\n}\n\n.popup button{\n    border-radius: 5px;\n    width: 100px;\n    filter: none;\n    color: var(--w);\n}\n\ninput{\n    outline-color: transparent;\n    background-color: var(--w);\n    border: none;\n    border-radius: 10px;\n    padding: 5px 10px;\n}\n\n.popup button:hover{\n    filter:brightness(0.8);\n}\n\n.popup button.confirm{\n    background-color: var(--g);\n    color: var(--dark);\n    padding: 5px;\n}\n\n.popup button.cancel{\n    background-color: var(--r);\n    color: var(--dark);\n    padding: 5px;\n}\n\n.input-wrapper{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n\n.backdrop{\n    pointer-events: none;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.0);\n    transition-duration: 0.3s;\n    z-index: 5;\n}\n\n.backdrop.visible{\n    background: rgba(0, 0, 0, 0.4);\n}\n\n.popup.visible{\n    display: flex;\n    animation: fade-in 500ms forwards;\n}\n\n@keyframes fade-in {\n    0%{\n        opacity: 0;\n    }\n\n    100%{\n        opacity: 1;\n    }\n}\n\n\n@keyframes fade-out {\n    0%{\n        opacity: 1;\n    }\n\n    100%{\n        opacity: 0;\n    }\n}\n\n@keyframes slide-up {\n    0%{\n        transform: translateY(100%);\n    }    \n\n    100%{\n        transform: translateY(0%);\n    }\n\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --dark: #16205E;\n    --mid: #363E88;\n    --light: #575E9B;\n    --accent: #5C6DFF;\n    --g: #4EEFA3;\n    --b: #43C7FF;\n    --r: #FF7474;\n    --w: #c9d0fa;\n}\n\n@font-face {\n    font-family: 'cedric';\n    src: url('./CEDRIC\\ demo.ttf') format('truetype'); \n}\n\n@font-face {\n    font-family: 'tiltWrap';\n    src: url('./TiltWarp-Regular.ttf') format('truetype'); \n}\n\n\n*{\n    font-family: 'tiltWrap';\n}\n\nhtml,\nbody{\n    height: 100%;\n    margin: 0;\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n}\n\n\n.nodisplay{\n    display: none !important;\n}\n\n.content{\n    flex: 1;\n    display: flex;\n    width: 100%;\n}\n\nheader{\n    background-color: var(--dark);\n    padding: 2rem 2rem 1rem 2rem;\n}\n\na{\n    text-decoration: none;\n    color: var(--w);\n    transition-duration: 0.3s;\n    padding: 0.1rem 0.2rem;\n}\n\na:hover{\n    color: var(--dark);\n    letter-spacing: 0.1rem;\n    background-color: #43C7FF;\n}\n\nfooter{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--accent);\n    padding: 10px;\n    background-color: var(--dark);\n}\n\n.projects{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--light);\n    flex:2.5;\n    gap:15px;\n}\n\n.project-container{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap : 15px;\n}\n\n\nsvg{\n    height: 1.7rem;\n    width: auto;\n}\n\n.project-div{\n    display: flex;\n    align-items: center;\n    height: 40px;\n    background-color: var(--dark);\n    color: var(--w);\n    padding: 10px;\n    width: 80%;\n    border-radius: 10px;\n}\n\n.project-div span{\n    font-size: 1.1rem;\n    margin-right: auto;\n}\n\nbutton{\n    background: transparent;\n    color: black;\n    filter: invert(82%) sepia(3%) saturate(2795%) hue-rotate(196deg) brightness(102%) contrast(96%);\n    border: none;\n    transition-duration: 0.3s;\n}\n\n\n.edit:hover{\n    filter: invert(64%) sepia(98%) saturate(1347%) hue-rotate(170deg) brightness(102%) contrast(104%);\n}\n\n.delete:hover{\n    filter: invert(63%) sepia(72%) saturate(2597%) hue-rotate(316deg) brightness(105%) contrast(104%);\n}\n\n.add-button:hover{\n    filter: invert(64%) sepia(98%) saturate(1347%) hue-rotate(170deg) brightness(102%) contrast(104%);\n}\n\n.todos{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--mid);\n    flex:7;\n    gap:15px;\n}\n\nbutton{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nh1{\n    line-height: 3rem;\n    font-family: 'cedric';\n    font-weight: 100;\n    margin:0;\n    letter-spacing: 5px;\n    font-size: 5rem;\n    color: var(--w);\n}\n\nh2{\n    color: var(--w);\n    margin: 15px 0 0 0 ;\n}\n\nh3{\n    margin: 0;\n    color: var(--dark);\n}\n\n.button-container{\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.popup{\n    position: fixed;\n    display: none;\n    flex-direction: column;\n    background-color: var(--accent);\n    color: var(--w);\n    border-radius: 10px;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    padding: 20px 50px;\n    gap:20px;\n    align-items: center;\n    z-index: 10;\n}\n\n.popup button{\n    border-radius: 5px;\n    width: 100px;\n    filter: none;\n    color: var(--w);\n}\n\ninput{\n    outline-color: transparent;\n    background-color: var(--w);\n    border: none;\n    border-radius: 10px;\n    padding: 5px 10px;\n}\n\n.popup button:hover{\n    filter:brightness(0.8);\n}\n\n.popup button.confirm{\n    background-color: var(--g);\n    color: var(--dark);\n    padding: 5px;\n}\n\n.popup button.cancel{\n    background-color: var(--r);\n    color: var(--dark);\n    padding: 5px;\n}\n\n.input-wrapper{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n\n.backdrop{\n    pointer-events: none;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.0);\n    transition-duration: 0.3s;\n    z-index: 5;\n}\n\n.backdrop.visible{\n    background: rgba(0, 0, 0, 0.4);\n}\n\n.popup.visible{\n    display: flex;\n    animation: fade-in 500ms forwards;\n}\n\n@keyframes fade-in {\n    0%{\n        opacity: 0;\n    }\n\n    100%{\n        opacity: 1;\n    }\n}\n\n\n@keyframes fade-out {\n    0%{\n        opacity: 1;\n    }\n\n    100%{\n        opacity: 0;\n    }\n}\n\n@keyframes slide-up {\n    0%{\n        transform: translateY(100%);\n    }    \n\n    100%{\n        transform: translateY(0%);\n    }\n\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/displayFunctions.js":
/*!*********************************!*\
  !*** ./src/displayFunctions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayPopup": () => (/* binding */ displayPopup),
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "hidePopup": () => (/* binding */ hidePopup)
/* harmony export */ });
function displayProjects(user, ProjectContainer, projectTemplate){
    let projectArr = user.projectArr;
    ProjectContainer.innerHTML = "";
    console.log(ProjectContainer);
    projectArr.forEach(project => {
        let projectClone = projectTemplate.cloneNode(true);
        projectClone.classList.remove("nodisplay", "project-template")
        projectClone.querySelector(".project-title").innerText = project.title;
        ProjectContainer.appendChild(projectClone);
    });
}

function displayPopup(popupElement, backdrop){
    popupElement.classList.add("visible");
    backdrop.classList.add("visible");
}

function hidePopup(popupElement, backdrop){
    popupElement.classList.remove("visible");
    backdrop.classList.remove("visible");
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todoObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoObjects */ "./src/todoObjects.js");
/* harmony import */ var _displayFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayFunctions */ "./src/displayFunctions.js");
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setup */ "./src/setup.js");
/* harmony import */ var _icons_favicon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/favicon.svg */ "./src/icons/favicon.svg");






let link = document.createElement('link');
link.rel = 'icon';
link.href = _icons_favicon_svg__WEBPACK_IMPORTED_MODULE_4__;
document.head.appendChild(link);

let ProjectContainer = document.querySelector(".project-container");
let projectTemplate = document.querySelector(".project-template");

(0,_setup__WEBPACK_IMPORTED_MODULE_3__.setup)();



let user = (0,_todoObjects__WEBPACK_IMPORTED_MODULE_1__.userFactory)("Guest");
user.createProject("Get A Wife")
user.createTodo("Get A Job", "as", "aa", "111", 1);

(0,_displayFunctions__WEBPACK_IMPORTED_MODULE_2__.displayProjects)(user,ProjectContainer,projectTemplate);





/***/ }),

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setup": () => (/* binding */ setup)
/* harmony export */ });
/* harmony import */ var _displayFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayFunctions */ "./src/displayFunctions.js");


function setup(){
    let backdrop = document.querySelector(".backdrop");
    console.log(backdrop);
    setupAddButtons();


}



function setupAddButtons(){
    let addProjectButton = document.querySelector(".add-project");
    let addProjectPopup = document.querySelector(".project-popup");

    addProjectButton.addEventListener("click", (e)=>{
            (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayPopup)(addProjectPopup, backdrop);
    });


    let addTodoButton = document.querySelector(".add-todo");
    let addTodoPopup = document.querySelector(".todo-popup");

    addTodoButton.addEventListener("click", (e)=>{
            (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayPopup)(addTodoPopup, backdrop);
    });
}





/***/ }),

/***/ "./src/todoObjects.js":
/*!****************************!*\
  !*** ./src/todoObjects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory),
/* harmony export */   "todoItemFactory": () => (/* binding */ todoItemFactory),
/* harmony export */   "userFactory": () => (/* binding */ userFactory)
/* harmony export */ });
const todoItemFactory = (title, description, dueDate, priority) =>{
    return{
        title,
        description,
        dueDate,
        priority
    }
};


const projectFactory = (title) =>{
    let todoArr = [];

    const addTodo = (todoItem) =>{
        todoArr.push(todoItem);
    }

    const createTodo = (title, description, dueDate, priority) =>{
        let newTodoItem = todoItemFactory(title, description, dueDate, priority);
        addTodo(newTodoItem);
    }

    const removeTodo = (todoItem) =>{
        let id = getTodoId(todoItem);
        if(id === undefined) return;
        todoArr.splice(id, 1);
    }   

    const getTodoId = (todoItem) =>{
        return todoArr.findIndex(element => element.title === todoItem.title);
    }

    return{
        title,
        todoArr,
        addTodo,
        removeTodo,
        createTodo
    }
};

const userFactory = (username) =>{
    let projectArr =[];

    const addProject = (projectItem) =>{
        projectArr.push(projectItem);
    };
    
    const createProject = (title) =>{
        addProject(projectFactory(title));        
    };

    const projectWithTitle = (projectName) =>{
        let project = projectArr.find(element =>element.title === projectName);
        return project;
    };


    const createTodo = (projectTitle, todoTitle, description, dueDate, priority) =>{
        let project = projectWithTitle(projectTitle);
        if(project === undefined){
            project = projectFactory(projectTitle);
            addProject(project);
        }
        project.createTodo(todoTitle, description, dueDate, priority);
    };

    const addTodo = (projectTitle, todoItem) =>{
        let project = projectWithTitle(projectTitle);
        if(project === undefined){
            project = projectFactory(projectTitle);
            addProject(project);
        }
        project.addTodo(todoItem);
    };


    const removeProject = (projectItem) =>{
        let id = getTodoId(projectItem);
        if(id === undefined) return;
        projectArr.splice(id, 1);
    };   

    const getTodoId = (projectItem) =>{
        return projectArr.findIndex(element => element.title === projectItem.title);
    };

    return{
        username,
        projectArr,
        addProject,
        createProject,
        removeProject,
        createTodo,
        addTodo
    };
}




/***/ }),

/***/ "./src/CEDRIC demo.ttf":
/*!*****************************!*\
  !*** ./src/CEDRIC demo.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "48ad908af540a73560bf.ttf";

/***/ }),

/***/ "./src/TiltWarp-Regular.ttf":
/*!**********************************!*\
  !*** ./src/TiltWarp-Regular.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "114dee3c9a42dbe62bec.ttf";

/***/ }),

/***/ "./src/icons/favicon.svg":
/*!*******************************!*\
  !*** ./src/icons/favicon.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d7cbf3a8b44b90a2e11.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZ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QUNBO0FBQ0E7QUFDQTs7O0FBR087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zZXR1cC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb09iamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vQ0VEUklDIGRlbW8udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9UaWx0V2FycC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS1kYXJrOiAjMTYyMDVFO1xcbiAgICAtLW1pZDogIzM2M0U4ODtcXG4gICAgLS1saWdodDogIzU3NUU5QjtcXG4gICAgLS1hY2NlbnQ6ICM1QzZERkY7XFxuICAgIC0tZzogIzRFRUZBMztcXG4gICAgLS1iOiAjNDNDN0ZGO1xcbiAgICAtLXI6ICNGRjc0NzQ7XFxuICAgIC0tdzogI2M5ZDBmYTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnY2VkcmljJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTsgXFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3RpbHRXcmFwJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTsgXFxufVxcblxcblxcbip7XFxuICAgIGZvbnQtZmFtaWx5OiAndGlsdFdyYXAnO1xcbn1cXG5cXG5odG1sLFxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5cXG4ubm9kaXNwbGF5e1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jb250ZW50e1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaGVhZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgcGFkZGluZzogMnJlbSAycmVtIDFyZW0gMnJlbTtcXG59XFxuXFxuYXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tdyk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgIHBhZGRpbmc6IDAuMXJlbSAwLjJyZW07XFxufVxcblxcbmE6aG92ZXJ7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzQzdGRjtcXG59XFxuXFxuZm9vdGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbn1cXG5cXG4ucHJvamVjdHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXG4gICAgZmxleDoyLjU7XFxuICAgIGdhcDoxNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXAgOiAxNXB4O1xcbn1cXG5cXG5cXG5zdmd7XFxuICAgIGhlaWdodDogMS43cmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnByb2plY3QtZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBjb2xvcjogdmFyKC0tdyk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWRpdiBzcGFue1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG5idXR0b257XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDgyJSkgc2VwaWEoMyUpIHNhdHVyYXRlKDI3OTUlKSBodWUtcm90YXRlKDE5NmRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCg5NiUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxufVxcblxcblxcbi5lZGl0OmhvdmVye1xcbiAgICBmaWx0ZXI6IGludmVydCg2NCUpIHNlcGlhKDk4JSkgc2F0dXJhdGUoMTM0NyUpIGh1ZS1yb3RhdGUoMTcwZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDEwNCUpO1xcbn1cXG5cXG4uZGVsZXRlOmhvdmVye1xcbiAgICBmaWx0ZXI6IGludmVydCg2MyUpIHNlcGlhKDcyJSkgc2F0dXJhdGUoMjU5NyUpIGh1ZS1yb3RhdGUoMzE2ZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDEwNCUpO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbjpob3ZlcntcXG4gICAgZmlsdGVyOiBpbnZlcnQoNjQlKSBzZXBpYSg5OCUpIHNhdHVyYXRlKDEzNDclKSBodWUtcm90YXRlKDE3MGRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCgxMDQlKTtcXG59XFxuXFxuLnRvZG9ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWQpO1xcbiAgICBmbGV4Ojc7XFxuICAgIGdhcDoxNXB4O1xcbn1cXG5cXG5idXR0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMXtcXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnY2VkcmljJztcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgbWFyZ2luOjA7XFxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXcpO1xcbn1cXG5cXG5oMntcXG4gICAgY29sb3I6IHZhcigtLXcpO1xcbiAgICBtYXJnaW46IDE1cHggMCAwIDAgO1xcbn1cXG5cXG5oM3tcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5wb3B1cHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBjb2xvcjogdmFyKC0tdyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHg7XFxuICAgIGdhcDoyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLnBvcHVwIGJ1dHRvbntcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGZpbHRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXcpO1xcbn1cXG5cXG5pbnB1dHtcXG4gICAgb3V0bGluZS1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXcpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG5cXG4ucG9wdXAgYnV0dG9uOmhvdmVye1xcbiAgICBmaWx0ZXI6YnJpZ2h0bmVzcygwLjgpO1xcbn1cXG5cXG4ucG9wdXAgYnV0dG9uLmNvbmZpcm17XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWcpO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnBvcHVwIGJ1dHRvbi5jYW5jZWx7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXIpO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmlucHV0LXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmJhY2tkcm9we1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMCk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgIHotaW5kZXg6IDU7XFxufVxcblxcbi5iYWNrZHJvcC52aXNpYmxle1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5wb3B1cC52aXNpYmxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbmltYXRpb246IGZhZGUtaW4gNTAwbXMgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAgIDAle1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcblxcbiAgICAxMDAle1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcXG4gICAgMCV7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuXFxuICAgIDEwMCV7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xcbiAgICAwJXtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG4gICAgfSAgICBcXG5cXG4gICAgMTAwJXtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICAgIH1cXG5cXG5cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLCtEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QiwrREFBcUQ7QUFDekQ7OztBQUdBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLFlBQVk7SUFDWixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsUUFBUTtJQUNSLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7OztBQUdBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsYUFBYTtJQUNiLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWiwrRkFBK0Y7SUFDL0YsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7O0FBR0E7SUFDSSxpR0FBaUc7QUFDckc7O0FBRUE7SUFDSSxpR0FBaUc7QUFDckc7O0FBRUE7SUFDSSxpR0FBaUc7QUFDckc7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsTUFBTTtJQUNOLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFFBQVE7SUFDUixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7O0FBR0E7SUFDSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSx5QkFBeUI7SUFDN0I7OztBQUdKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLWRhcms6ICMxNjIwNUU7XFxuICAgIC0tbWlkOiAjMzYzRTg4O1xcbiAgICAtLWxpZ2h0OiAjNTc1RTlCO1xcbiAgICAtLWFjY2VudDogIzVDNkRGRjtcXG4gICAgLS1nOiAjNEVFRkEzO1xcbiAgICAtLWI6ICM0M0M3RkY7XFxuICAgIC0tcjogI0ZGNzQ3NDtcXG4gICAgLS13OiAjYzlkMGZhO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdjZWRyaWMnO1xcbiAgICBzcmM6IHVybCgnLi9DRURSSUNcXFxcIGRlbW8udHRmJykgZm9ybWF0KCd0cnVldHlwZScpOyBcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAndGlsdFdyYXAnO1xcbiAgICBzcmM6IHVybCgnLi9UaWx0V2FycC1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTsgXFxufVxcblxcblxcbip7XFxuICAgIGZvbnQtZmFtaWx5OiAndGlsdFdyYXAnO1xcbn1cXG5cXG5odG1sLFxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5cXG4ubm9kaXNwbGF5e1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jb250ZW50e1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaGVhZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgcGFkZGluZzogMnJlbSAycmVtIDFyZW0gMnJlbTtcXG59XFxuXFxuYXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tdyk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgIHBhZGRpbmc6IDAuMXJlbSAwLjJyZW07XFxufVxcblxcbmE6aG92ZXJ7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzQzdGRjtcXG59XFxuXFxuZm9vdGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbn1cXG5cXG4ucHJvamVjdHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXG4gICAgZmxleDoyLjU7XFxuICAgIGdhcDoxNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXAgOiAxNXB4O1xcbn1cXG5cXG5cXG5zdmd7XFxuICAgIGhlaWdodDogMS43cmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnByb2plY3QtZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBjb2xvcjogdmFyKC0tdyk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWRpdiBzcGFue1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG5idXR0b257XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDgyJSkgc2VwaWEoMyUpIHNhdHVyYXRlKDI3OTUlKSBodWUtcm90YXRlKDE5NmRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCg5NiUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxufVxcblxcblxcbi5lZGl0OmhvdmVye1xcbiAgICBmaWx0ZXI6IGludmVydCg2NCUpIHNlcGlhKDk4JSkgc2F0dXJhdGUoMTM0NyUpIGh1ZS1yb3RhdGUoMTcwZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDEwNCUpO1xcbn1cXG5cXG4uZGVsZXRlOmhvdmVye1xcbiAgICBmaWx0ZXI6IGludmVydCg2MyUpIHNlcGlhKDcyJSkgc2F0dXJhdGUoMjU5NyUpIGh1ZS1yb3RhdGUoMzE2ZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDEwNCUpO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbjpob3ZlcntcXG4gICAgZmlsdGVyOiBpbnZlcnQoNjQlKSBzZXBpYSg5OCUpIHNhdHVyYXRlKDEzNDclKSBodWUtcm90YXRlKDE3MGRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCgxMDQlKTtcXG59XFxuXFxuLnRvZG9ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWQpO1xcbiAgICBmbGV4Ojc7XFxuICAgIGdhcDoxNXB4O1xcbn1cXG5cXG5idXR0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMXtcXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnY2VkcmljJztcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgbWFyZ2luOjA7XFxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXcpO1xcbn1cXG5cXG5oMntcXG4gICAgY29sb3I6IHZhcigtLXcpO1xcbiAgICBtYXJnaW46IDE1cHggMCAwIDAgO1xcbn1cXG5cXG5oM3tcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5wb3B1cHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBjb2xvcjogdmFyKC0tdyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHg7XFxuICAgIGdhcDoyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLnBvcHVwIGJ1dHRvbntcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGZpbHRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXcpO1xcbn1cXG5cXG5pbnB1dHtcXG4gICAgb3V0bGluZS1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXcpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG5cXG4ucG9wdXAgYnV0dG9uOmhvdmVye1xcbiAgICBmaWx0ZXI6YnJpZ2h0bmVzcygwLjgpO1xcbn1cXG5cXG4ucG9wdXAgYnV0dG9uLmNvbmZpcm17XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWcpO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnBvcHVwIGJ1dHRvbi5jYW5jZWx7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXIpO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmlucHV0LXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmJhY2tkcm9we1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMCk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgIHotaW5kZXg6IDU7XFxufVxcblxcbi5iYWNrZHJvcC52aXNpYmxle1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5wb3B1cC52aXNpYmxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbmltYXRpb246IGZhZGUtaW4gNTAwbXMgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAgIDAle1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcblxcbiAgICAxMDAle1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcXG4gICAgMCV7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuXFxuICAgIDEwMCV7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xcbiAgICAwJXtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG4gICAgfSAgICBcXG5cXG4gICAgMTAwJXtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICAgIH1cXG5cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHModXNlciwgUHJvamVjdENvbnRhaW5lciwgcHJvamVjdFRlbXBsYXRlKXtcbiAgICBsZXQgcHJvamVjdEFyciA9IHVzZXIucHJvamVjdEFycjtcbiAgICBQcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc29sZS5sb2coUHJvamVjdENvbnRhaW5lcik7XG4gICAgcHJvamVjdEFyci5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdENsb25lID0gcHJvamVjdFRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgcHJvamVjdENsb25lLmNsYXNzTGlzdC5yZW1vdmUoXCJub2Rpc3BsYXlcIiwgXCJwcm9qZWN0LXRlbXBsYXRlXCIpXG4gICAgICAgIHByb2plY3RDbG9uZS5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIikuaW5uZXJUZXh0ID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q2xvbmUpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVBvcHVwKHBvcHVwRWxlbWVudCwgYmFja2Ryb3Ape1xuICAgIHBvcHVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVQb3B1cChwb3B1cEVsZW1lbnQsIGJhY2tkcm9wKXtcbiAgICBwb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgYmFja2Ryb3AuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyB0b2RvSXRlbUZhY3RvcnksIHByb2plY3RGYWN0b3J5LCB1c2VyRmFjdG9yeSB9IGZyb20gJy4vdG9kb09iamVjdHMnO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RzIH0gZnJvbSAnLi9kaXNwbGF5RnVuY3Rpb25zJztcbmltcG9ydCB7IHNldHVwIH0gZnJvbSAnLi9zZXR1cCc7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi9pY29ucy9mYXZpY29uLnN2Z1wiO1xuXG5sZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbmxpbmsucmVsID0gJ2ljb24nO1xubGluay5ocmVmID0gSWNvbjtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG5cbmxldCBQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKTtcbmxldCBwcm9qZWN0VGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGVtcGxhdGVcIik7XG5cbnNldHVwKCk7XG5cblxuXG5sZXQgdXNlciA9IHVzZXJGYWN0b3J5KFwiR3Vlc3RcIik7XG51c2VyLmNyZWF0ZVByb2plY3QoXCJHZXQgQSBXaWZlXCIpXG51c2VyLmNyZWF0ZVRvZG8oXCJHZXQgQSBKb2JcIiwgXCJhc1wiLCBcImFhXCIsIFwiMTExXCIsIDEpO1xuXG5kaXNwbGF5UHJvamVjdHModXNlcixQcm9qZWN0Q29udGFpbmVyLHByb2plY3RUZW1wbGF0ZSk7XG5cblxuXG4iLCJpbXBvcnQgeyBkaXNwbGF5UG9wdXAsIGhpZGVQb3B1cCB9IGZyb20gXCIuL2Rpc3BsYXlGdW5jdGlvbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwKCl7XG4gICAgbGV0IGJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrZHJvcFwiKTtcbiAgICBjb25zb2xlLmxvZyhiYWNrZHJvcCk7XG4gICAgc2V0dXBBZGRCdXR0b25zKCk7XG5cblxufVxuXG5cblxuZnVuY3Rpb24gc2V0dXBBZGRCdXR0b25zKCl7XG4gICAgbGV0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xuICAgIGxldCBhZGRQcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtcG9wdXBcIik7XG5cbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcbiAgICAgICAgICAgIGRpc3BsYXlQb3B1cChhZGRQcm9qZWN0UG9wdXAsIGJhY2tkcm9wKTtcbiAgICB9KTtcblxuXG4gICAgbGV0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvXCIpO1xuICAgIGxldCBhZGRUb2RvUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tcG9wdXBcIik7XG5cbiAgICBhZGRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcbiAgICAgICAgICAgIGRpc3BsYXlQb3B1cChhZGRUb2RvUG9wdXAsIGJhY2tkcm9wKTtcbiAgICB9KTtcbn1cblxuXG5cbiIsImV4cG9ydCBjb25zdCB0b2RvSXRlbUZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT57XG4gICAgcmV0dXJue1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5XG4gICAgfVxufTtcblxuXG5leHBvcnQgY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUpID0+e1xuICAgIGxldCB0b2RvQXJyID0gW107XG5cbiAgICBjb25zdCBhZGRUb2RvID0gKHRvZG9JdGVtKSA9PntcbiAgICAgICAgdG9kb0Fyci5wdXNoKHRvZG9JdGVtKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+e1xuICAgICAgICBsZXQgbmV3VG9kb0l0ZW0gPSB0b2RvSXRlbUZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgICAgIGFkZFRvZG8obmV3VG9kb0l0ZW0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSAodG9kb0l0ZW0pID0+e1xuICAgICAgICBsZXQgaWQgPSBnZXRUb2RvSWQodG9kb0l0ZW0pO1xuICAgICAgICBpZihpZCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIHRvZG9BcnIuc3BsaWNlKGlkLCAxKTtcbiAgICB9ICAgXG5cbiAgICBjb25zdCBnZXRUb2RvSWQgPSAodG9kb0l0ZW0pID0+e1xuICAgICAgICByZXR1cm4gdG9kb0Fyci5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50LnRpdGxlID09PSB0b2RvSXRlbS50aXRsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJue1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgdG9kb0FycixcbiAgICAgICAgYWRkVG9kbyxcbiAgICAgICAgcmVtb3ZlVG9kbyxcbiAgICAgICAgY3JlYXRlVG9kb1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCB1c2VyRmFjdG9yeSA9ICh1c2VybmFtZSkgPT57XG4gICAgbGV0IHByb2plY3RBcnIgPVtdO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0SXRlbSkgPT57XG4gICAgICAgIHByb2plY3RBcnIucHVzaChwcm9qZWN0SXRlbSk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHRpdGxlKSA9PntcbiAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0RmFjdG9yeSh0aXRsZSkpOyAgICAgICAgXG4gICAgfTtcblxuICAgIGNvbnN0IHByb2plY3RXaXRoVGl0bGUgPSAocHJvamVjdE5hbWUpID0+e1xuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RBcnIuZmluZChlbGVtZW50ID0+ZWxlbWVudC50aXRsZSA9PT0gcHJvamVjdE5hbWUpO1xuICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICB9O1xuXG5cbiAgICBjb25zdCBjcmVhdGVUb2RvID0gKHByb2plY3RUaXRsZSwgdG9kb1RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+e1xuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RXaXRoVGl0bGUocHJvamVjdFRpdGxlKTtcbiAgICAgICAgaWYocHJvamVjdCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShwcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0LmNyZWF0ZVRvZG8odG9kb1RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRUb2RvID0gKHByb2plY3RUaXRsZSwgdG9kb0l0ZW0pID0+e1xuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RXaXRoVGl0bGUocHJvamVjdFRpdGxlKTtcbiAgICAgICAgaWYocHJvamVjdCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShwcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0LmFkZFRvZG8odG9kb0l0ZW0pO1xuICAgIH07XG5cblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdEl0ZW0pID0+e1xuICAgICAgICBsZXQgaWQgPSBnZXRUb2RvSWQocHJvamVjdEl0ZW0pO1xuICAgICAgICBpZihpZCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIHByb2plY3RBcnIuc3BsaWNlKGlkLCAxKTtcbiAgICB9OyAgIFxuXG4gICAgY29uc3QgZ2V0VG9kb0lkID0gKHByb2plY3RJdGVtKSA9PntcbiAgICAgICAgcmV0dXJuIHByb2plY3RBcnIuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC50aXRsZSA9PT0gcHJvamVjdEl0ZW0udGl0bGUpO1xuICAgIH07XG5cbiAgICByZXR1cm57XG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBwcm9qZWN0QXJyLFxuICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICBjcmVhdGVQcm9qZWN0LFxuICAgICAgICByZW1vdmVQcm9qZWN0LFxuICAgICAgICBjcmVhdGVUb2RvLFxuICAgICAgICBhZGRUb2RvXG4gICAgfTtcbn1cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=