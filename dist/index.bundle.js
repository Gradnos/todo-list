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
___CSS_LOADER_EXPORT___.push([module.id, "    :root{\n        --dark: #16205E;\n        --mid: #363E88;\n        --light: #575E9B;\n        --accent: #5C6DFF;\n        --r: #FF7474;\n        --g: #4EEFA3;\n        --b: #43C7FF;\n        --w: #c9d0fa;\n    }\n\n    ::selection{\n        color: black;\n        background-color: white;\n    }\n\n\n    @font-face {\n        font-family: 'cedric';\n        src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype'); \n    }\n\n    @font-face {\n        font-family: 'tiltWrap';\n        src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype'); \n    }\n\n\n    *{\n        font-family: 'tiltWrap';\n    }\n\n    html,\n    body{\n        height: 100%;\n        margin: 0;\n    }\n\n    body{\n        display: flex;\n        flex-direction: column;\n    }\n\n\n    .nodisplay{\n        display: none !important;\n    }\n\n    .content{\n        flex: 1;\n        display: flex;\n        width: 100%;\n    }\n\n    header{\n        background-color: var(--dark);\n        padding: 2rem 2rem 1rem 2rem;\n    }\n\n    a{\n        text-decoration: none;\n        color: var(--w);\n        transition-duration: 0.3s;\n        padding: 0.1rem 0.2rem;\n    }\n\n    a:hover{\n        color: var(--dark);\n        letter-spacing: 0.1rem;\n        background-color: #43C7FF;\n    }\n\n    footer{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        color: var(--accent);\n        padding: 10px;\n        background-color: var(--dark);\n    }\n\n    .projects{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        background-color: var(--light);\n        flex:2.5;\n        gap:15px;\n    }\n\n    .project-container{\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap : 15px;\n    }\n\n    .todo-container{\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap : 15px;\n    }\n\n\n\n    svg{\n        height: 1.7rem;\n        width: auto;\n    }\n\n    .project-div{\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        height: 40px;\n        background-color: var(--dark);\n        color: var(--w);\n        padding: 10px;\n        width: 80%;\n        border-radius: 10px;\n        transition-property: border scale;\n    }\n\n    .project-div.selected{\n        width: 85%;\n        background-color: var(--accent);\n    }\n\n\n    .project-div .project-title{\n        user-select: none;\n        pointer-events: none;\n    }\n\n    .project-div:not(.selected):hover{\n        width: 82%;\n        background-color: rgb(28, 40, 146);\n    }\n\n\n    .project-div span{\n        font-size: 1.1rem;\n        margin-right: auto;\n    }\n\n    .todo-div{\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        height: 80px;\n        background-color: white;\n        color: var(--w);\n        padding: 10px;\n        width: 90%;\n        border-radius: 10px;\n    }\n\n    .todo-div.--r{\n        background-color: var(--r);\n    }\n\n    .todo-div.--g{\n        background-color: var(--g);\n    }\n\n    .todo-div.--b{\n        background-color: var(--b);\n    }\n\n    .todo-div.completed{\n        filter: brightness(0.6);\n    }\n\n    .todo-div *{\n        color: rgba(0, 0, 0, 0.5);\n    }\n\n    .todo-div .todo-title{\n        font-size: 1.3rem;\n        color: rgba(23, 0, 78, 0.9);\n    }\n\n    .todo-div button{\n        filter:opacity(0.5);\n    }\n\n\n\n\n    .todo-div .left-side{\n        display: flex;\n        align-items: center;\n    }\n\n    .todo-div .right-side{\n        display: flex;\n        align-items: center;\n        gap: 20px;\n    }\n\n    .todo-div .todo-dueDate{\n        text-align: center;\n        margin-right: 20px;\n        width: 110px;\n    }\n\n    button{\n        background: transparent;\n        color: black;\n        filter: invert(82%) sepia(3%) saturate(2795%) hue-rotate(196deg) brightness(102%) contrast(96%);\n        border: none;\n        transition-duration: 0.3s;\n        cursor: pointer;\n    }\n\n\n    .edit:hover{\n        filter: invert(64%) sepia(98%) saturate(1347%) hue-rotate(170deg) brightness(102%) contrast(104%) drop-shadow(0 0 0.3rem black);\n    }\n\n    .delete:hover{\n        filter: invert(63%) sepia(72%) saturate(2597%) hue-rotate(316deg) brightness(105%) contrast(104%)  drop-shadow(0 0 0.3rem black);\n    }\n\n    .add-button{\n        margin-bottom: 15px;\n    }\n\n    .add-button:hover{\n        filter: drop-shadow(0 0 0.75rem red);\n        filter: invert(64%) sepia(98%) saturate(1347%) hue-rotate(170deg) brightness(102%) contrast(104%) drop-shadow(0 0 0.3rem black);\n    }\n\n    .todos{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        background-color: var(--mid);\n        flex:6;\n        gap:15px;\n    }\n\n    button{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    h1{\n        line-height: 3rem;\n        font-family: 'cedric';\n        font-weight: 100;\n        margin:0;\n        letter-spacing: 5px;\n        font-size: 5rem;\n        color: var(--w);\n    }\n\n    h2{\n        color: var(--w);\n        margin: 15px 0 0 0 ;\n    }\n\n    h3{\n        margin: 0;\n        color: var(--dark);\n    }\n\n    .button-container{\n        width: 100%;\n        display: flex;\n        gap:15px;\n        align-items: center;\n        justify-content: space-evenly;\n    }\n\n    .popup{\n        position: fixed;\n        display: none;\n        flex-direction: column;\n        background-color: var(--accent);\n        color: var(--w);\n        border-radius: 10px;\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%, -50%);\n        padding: 20px 50px;\n        gap:20px;\n        align-items: center;\n        z-index: 10;\n    }\n\n    .popup button{\n        border-radius: 5px;\n        width: 100px;\n        filter: none;\n        color: var(--w);\n    }\n\n    input:not([type=checkbox]){\n        outline-color: transparent;\n        background-color: var(--w);\n        border: none;\n        border-radius: 10px;\n        width: 100%;\n        padding: 5px 10px;\n    }\n\n\n    input[type=checkbox]{\n        -webkit-appearance: none;\n        appearance: none;\n        background-color:   rgba(255, 255, 255, 1);;\n        margin: 0;\n        cursor: pointer;\n        width: 30px;\n        height: 30px;\n        font: inherit;\n        color: rgba(100, 100, 100, 0.6);\n        border: 0.15em solid rgba(0, 0, 0, 0.5);\n        border-radius: 100px;\n        transform: translateY(0.0em);\n        display: grid;\n        place-content: center;\n    }\n    \n    input[type=\"checkbox\"]::before {\n        content: \"\";\n        width: 30px;\n        height: 30px;\n        border-radius: 100px;\n        transform: scale(0);\n        transition: 120ms transform ease-in-out;\n        background-color:  rgba(0, 0, 0, 0.719);\n        \n      }\n      \n\n    input[type=\"checkbox\"]:checked::before {\n        transform: scale(1);\n    }\n\n    input[type=\"checkbox\"]:focus {\n        outline: max(2px, 0.15em) solid rgba(0, 0, 0, 0.4);\n        outline-offset: max(2px, 0.15em);\n    }\n      \n    \n    select{\n        outline-color: transparent;\n        background-color: var(--w);\n        border: none;\n        border-radius: 10px;\n        width: calc(100% + 20px);\n        padding: 5px 10px;\n    }\n\n    .title-label::after{\n        content: \"*\";\n    }\n\n    .popup button:hover{\n        filter:brightness(0.8);\n    }\n\n    .popup button.confirm{\n        background-color: var(--g);\n        color: var(--dark);\n        padding: 5px;\n    }\n\n    .popup button.cancel{\n        background-color: var(--r);\n        color: var(--dark);\n        padding: 5px;\n    }\n\n    .input-wrapper{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n        width: 250px;\n    }\n\n    .backdrop{\n        pointer-events: none;\n        position: fixed;\n        width: 100%;\n        height: 100%;\n        background: rgba(0, 0, 0, 0.0);\n        transition-duration: 0.3s;\n        z-index: 5;\n    }\n\n    .backdrop.visible{\n        pointer-events:visible;\n        background: rgba(0, 0, 0, 0.4);\n        animation: fade-in 500ms forwards;\n    }\n\n    .popup.visible{\n        display: flex;\n        animation: fade-in 500ms forwards;\n        animation: slide up 500ms forwards;\n    }\n\n    .error{\n        color: var(--r);\n        background-color: var(--dark);\n        padding: 0px 10px;\n    }\n\n    @keyframes fade-in {\n        0%{\n            opacity: 0;\n        }\n\n        100%{\n            opacity: 1;\n        }\n    }\n\n\n    @keyframes fade-out {\n        0%{\n            opacity: 1;\n        }\n\n        100%{\n            opacity: 0;\n        }\n    }\n\n    @keyframes slide-up {\n        0%{\n            transform: translateY(100%);\n        }    \n\n        100%{\n            transform: translateY(0%);\n        }\n\n\n    }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["    :root{\n        --dark: #16205E;\n        --mid: #363E88;\n        --light: #575E9B;\n        --accent: #5C6DFF;\n        --r: #FF7474;\n        --g: #4EEFA3;\n        --b: #43C7FF;\n        --w: #c9d0fa;\n    }\n\n    ::selection{\n        color: black;\n        background-color: white;\n    }\n\n\n    @font-face {\n        font-family: 'cedric';\n        src: url('./CEDRIC\\ demo.ttf') format('truetype'); \n    }\n\n    @font-face {\n        font-family: 'tiltWrap';\n        src: url('./TiltWarp-Regular.ttf') format('truetype'); \n    }\n\n\n    *{\n        font-family: 'tiltWrap';\n    }\n\n    html,\n    body{\n        height: 100%;\n        margin: 0;\n    }\n\n    body{\n        display: flex;\n        flex-direction: column;\n    }\n\n\n    .nodisplay{\n        display: none !important;\n    }\n\n    .content{\n        flex: 1;\n        display: flex;\n        width: 100%;\n    }\n\n    header{\n        background-color: var(--dark);\n        padding: 2rem 2rem 1rem 2rem;\n    }\n\n    a{\n        text-decoration: none;\n        color: var(--w);\n        transition-duration: 0.3s;\n        padding: 0.1rem 0.2rem;\n    }\n\n    a:hover{\n        color: var(--dark);\n        letter-spacing: 0.1rem;\n        background-color: #43C7FF;\n    }\n\n    footer{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        color: var(--accent);\n        padding: 10px;\n        background-color: var(--dark);\n    }\n\n    .projects{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        background-color: var(--light);\n        flex:2.5;\n        gap:15px;\n    }\n\n    .project-container{\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap : 15px;\n    }\n\n    .todo-container{\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap : 15px;\n    }\n\n\n\n    svg{\n        height: 1.7rem;\n        width: auto;\n    }\n\n    .project-div{\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        height: 40px;\n        background-color: var(--dark);\n        color: var(--w);\n        padding: 10px;\n        width: 80%;\n        border-radius: 10px;\n        transition-property: border scale;\n    }\n\n    .project-div.selected{\n        width: 85%;\n        background-color: var(--accent);\n    }\n\n\n    .project-div .project-title{\n        user-select: none;\n        pointer-events: none;\n    }\n\n    .project-div:not(.selected):hover{\n        width: 82%;\n        background-color: rgb(28, 40, 146);\n    }\n\n\n    .project-div span{\n        font-size: 1.1rem;\n        margin-right: auto;\n    }\n\n    .todo-div{\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        height: 80px;\n        background-color: white;\n        color: var(--w);\n        padding: 10px;\n        width: 90%;\n        border-radius: 10px;\n    }\n\n    .todo-div.--r{\n        background-color: var(--r);\n    }\n\n    .todo-div.--g{\n        background-color: var(--g);\n    }\n\n    .todo-div.--b{\n        background-color: var(--b);\n    }\n\n    .todo-div.completed{\n        filter: brightness(0.6);\n    }\n\n    .todo-div *{\n        color: rgba(0, 0, 0, 0.5);\n    }\n\n    .todo-div .todo-title{\n        font-size: 1.3rem;\n        color: rgba(23, 0, 78, 0.9);\n    }\n\n    .todo-div button{\n        filter:opacity(0.5);\n    }\n\n\n\n\n    .todo-div .left-side{\n        display: flex;\n        align-items: center;\n    }\n\n    .todo-div .right-side{\n        display: flex;\n        align-items: center;\n        gap: 20px;\n    }\n\n    .todo-div .todo-dueDate{\n        text-align: center;\n        margin-right: 20px;\n        width: 110px;\n    }\n\n    button{\n        background: transparent;\n        color: black;\n        filter: invert(82%) sepia(3%) saturate(2795%) hue-rotate(196deg) brightness(102%) contrast(96%);\n        border: none;\n        transition-duration: 0.3s;\n        cursor: pointer;\n    }\n\n\n    .edit:hover{\n        filter: invert(64%) sepia(98%) saturate(1347%) hue-rotate(170deg) brightness(102%) contrast(104%) drop-shadow(0 0 0.3rem black);\n    }\n\n    .delete:hover{\n        filter: invert(63%) sepia(72%) saturate(2597%) hue-rotate(316deg) brightness(105%) contrast(104%)  drop-shadow(0 0 0.3rem black);\n    }\n\n    .add-button{\n        margin-bottom: 15px;\n    }\n\n    .add-button:hover{\n        filter: drop-shadow(0 0 0.75rem red);\n        filter: invert(64%) sepia(98%) saturate(1347%) hue-rotate(170deg) brightness(102%) contrast(104%) drop-shadow(0 0 0.3rem black);\n    }\n\n    .todos{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        background-color: var(--mid);\n        flex:6;\n        gap:15px;\n    }\n\n    button{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    h1{\n        line-height: 3rem;\n        font-family: 'cedric';\n        font-weight: 100;\n        margin:0;\n        letter-spacing: 5px;\n        font-size: 5rem;\n        color: var(--w);\n    }\n\n    h2{\n        color: var(--w);\n        margin: 15px 0 0 0 ;\n    }\n\n    h3{\n        margin: 0;\n        color: var(--dark);\n    }\n\n    .button-container{\n        width: 100%;\n        display: flex;\n        gap:15px;\n        align-items: center;\n        justify-content: space-evenly;\n    }\n\n    .popup{\n        position: fixed;\n        display: none;\n        flex-direction: column;\n        background-color: var(--accent);\n        color: var(--w);\n        border-radius: 10px;\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%, -50%);\n        padding: 20px 50px;\n        gap:20px;\n        align-items: center;\n        z-index: 10;\n    }\n\n    .popup button{\n        border-radius: 5px;\n        width: 100px;\n        filter: none;\n        color: var(--w);\n    }\n\n    input:not([type=checkbox]){\n        outline-color: transparent;\n        background-color: var(--w);\n        border: none;\n        border-radius: 10px;\n        width: 100%;\n        padding: 5px 10px;\n    }\n\n\n    input[type=checkbox]{\n        -webkit-appearance: none;\n        appearance: none;\n        background-color:   rgba(255, 255, 255, 1);;\n        margin: 0;\n        cursor: pointer;\n        width: 30px;\n        height: 30px;\n        font: inherit;\n        color: rgba(100, 100, 100, 0.6);\n        border: 0.15em solid rgba(0, 0, 0, 0.5);\n        border-radius: 100px;\n        transform: translateY(0.0em);\n        display: grid;\n        place-content: center;\n    }\n    \n    input[type=\"checkbox\"]::before {\n        content: \"\";\n        width: 30px;\n        height: 30px;\n        border-radius: 100px;\n        transform: scale(0);\n        transition: 120ms transform ease-in-out;\n        background-color:  rgba(0, 0, 0, 0.719);\n        \n      }\n      \n\n    input[type=\"checkbox\"]:checked::before {\n        transform: scale(1);\n    }\n\n    input[type=\"checkbox\"]:focus {\n        outline: max(2px, 0.15em) solid rgba(0, 0, 0, 0.4);\n        outline-offset: max(2px, 0.15em);\n    }\n      \n    \n    select{\n        outline-color: transparent;\n        background-color: var(--w);\n        border: none;\n        border-radius: 10px;\n        width: calc(100% + 20px);\n        padding: 5px 10px;\n    }\n\n    .title-label::after{\n        content: \"*\";\n    }\n\n    .popup button:hover{\n        filter:brightness(0.8);\n    }\n\n    .popup button.confirm{\n        background-color: var(--g);\n        color: var(--dark);\n        padding: 5px;\n    }\n\n    .popup button.cancel{\n        background-color: var(--r);\n        color: var(--dark);\n        padding: 5px;\n    }\n\n    .input-wrapper{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n        width: 250px;\n    }\n\n    .backdrop{\n        pointer-events: none;\n        position: fixed;\n        width: 100%;\n        height: 100%;\n        background: rgba(0, 0, 0, 0.0);\n        transition-duration: 0.3s;\n        z-index: 5;\n    }\n\n    .backdrop.visible{\n        pointer-events:visible;\n        background: rgba(0, 0, 0, 0.4);\n        animation: fade-in 500ms forwards;\n    }\n\n    .popup.visible{\n        display: flex;\n        animation: fade-in 500ms forwards;\n        animation: slide up 500ms forwards;\n    }\n\n    .error{\n        color: var(--r);\n        background-color: var(--dark);\n        padding: 0px 10px;\n    }\n\n    @keyframes fade-in {\n        0%{\n            opacity: 0;\n        }\n\n        100%{\n            opacity: 1;\n        }\n    }\n\n\n    @keyframes fade-out {\n        0%{\n            opacity: 1;\n        }\n\n        100%{\n            opacity: 0;\n        }\n    }\n\n    @keyframes slide-up {\n        0%{\n            transform: translateY(100%);\n        }    \n\n        100%{\n            transform: translateY(0%);\n        }\n\n\n    }"],"sourceRoot":""}]);
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
/* harmony export */   "SelectedProjectChangeStyle": () => (/* binding */ SelectedProjectChangeStyle),
/* harmony export */   "displayError": () => (/* binding */ displayError),
/* harmony export */   "displayPopup": () => (/* binding */ displayPopup),
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "displayTodos": () => (/* binding */ displayTodos),
/* harmony export */   "hidePopup": () => (/* binding */ hidePopup)
/* harmony export */ });
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ "./src/setup.js");


let projectContainer = document.querySelector(".project-container");
let projectTemplate = document.querySelector(".project-template");


let editProjectPopup = document.querySelector(".edit-project-popup");
let editTodoPopup = document.querySelector(".edit-todo-popup");

let confirmDeletePopup = document.querySelector(".confirm-delete-popup");

function displayProjects(user, ProjectContainer, projectTemplate){
    let projectArr = user.projectArr;
    ProjectContainer.innerHTML = "";
    projectArr.forEach(project => {
        let projectClone = projectTemplate.cloneNode(true);
        projectClone.classList.remove("nodisplay", "project-template")
        projectClone.querySelector(".project-title").innerText = project.title;

        let deleteButton = projectClone.querySelector(".delete");

        deleteButton.addEventListener("click", (e) =>{

            confirmDeletePopup.querySelector("h3").innerText = `Delete >>${project.title}<< ?`;
            displayPopup(confirmDeletePopup,_setup__WEBPACK_IMPORTED_MODULE_0__.backdrop);
            let cancelButton = confirmDeletePopup.querySelector(".cancel");
            let confirmButton = confirmDeletePopup.querySelector(".confirm");
        
            cancelButton.addEventListener("click", ()=>{
                hidePopup(confirmDeletePopup,_setup__WEBPACK_IMPORTED_MODULE_0__.backdrop);
            });
        
            confirmButton.addEventListener("click", ()=>{
                hidePopup(confirmDeletePopup,_setup__WEBPACK_IMPORTED_MODULE_0__.backdrop);

                _setup__WEBPACK_IMPORTED_MODULE_0__.CurrentUser.removeProjectByTitle(project.title);
                if(_setup__WEBPACK_IMPORTED_MODULE_0__.currentProject.title === project.title) (0,_setup__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(user.projectArr[0]);
                console.log(JSON.stringify(_setup__WEBPACK_IMPORTED_MODULE_0__.CurrentUser));
                localStorage.setItem('USER', JSON.stringify(_setup__WEBPACK_IMPORTED_MODULE_0__.CurrentUser));
                displayProjects(user, ProjectContainer, projectTemplate);
                SelectedProjectChangeStyle(_setup__WEBPACK_IMPORTED_MODULE_0__.currentProject);
            });


            e.stopPropagation();


        });

        let editButton = projectClone.querySelector(".edit");

        editButton.addEventListener("click", (e) =>{
            editProjectPopup.querySelector(".ipt-title").value = project.title;
            editProjectPopup.querySelector(".ipt-title").placeholder = project.title;


            displayPopup(editProjectPopup,_setup__WEBPACK_IMPORTED_MODULE_0__.backdrop);
            editProjectPopup.dataset.title = project.title;

            e.stopPropagation();
        });

        projectClone.addEventListener("click", (e) =>{
            (0,_setup__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(project);
        });

        ProjectContainer.appendChild(projectClone);
    });

    SelectedProjectChangeStyle(_setup__WEBPACK_IMPORTED_MODULE_0__.currentProject);
}

function displayTodos(project, todoContainer, todoTemplate){

    let priorityColors = ["--r", "--b", "--g"];


    let todoArr = project.todoArr;
    todoContainer.innerHTML = "";
    todoArr.forEach(todo => {
        let todoClone = todoTemplate.cloneNode(true);
        let todoCheckbox = todoClone.querySelector(".todo-completed");


        todoClone.classList.remove("nodisplay", "todo-template")
        todoClone.querySelector(".todo-title").innerText = todo.title;
        todoClone.querySelector(".todo-description").innerText = todo.description;
        todoClone.querySelector(".todo-dueDate").innerText = todo.dueDate;
        todoCheckbox.checked = todo.completed;

    
        todoClone.classList.add(priorityColors[todo.priority]);

        let deleteButton = todoClone.querySelector(".delete");

        deleteButton.addEventListener("click", (e) =>{

            confirmDeletePopup.querySelector("h3").innerText = `Delete >>${todo.title}<< ?`;
            displayPopup(confirmDeletePopup,_setup__WEBPACK_IMPORTED_MODULE_0__.backdrop);
            let cancelButton = confirmDeletePopup.querySelector(".cancel");
            let confirmButton = confirmDeletePopup.querySelector(".confirm");
        
            cancelButton.addEventListener("click", ()=>{
                hidePopup(confirmDeletePopup,_setup__WEBPACK_IMPORTED_MODULE_0__.backdrop);
            });
        
            confirmButton.addEventListener("click", ()=>{
                hidePopup(confirmDeletePopup,_setup__WEBPACK_IMPORTED_MODULE_0__.backdrop);
                console.log("asdsadsadasd");
                _setup__WEBPACK_IMPORTED_MODULE_0__.currentProject.removeTodoByTitle(todo.title);
                localStorage.setItem('USER', JSON.stringify(_setup__WEBPACK_IMPORTED_MODULE_0__.CurrentUser));
                displayTodos(project, todoContainer, todoTemplate);
            });

            e.stopPropagation();

        });

        let editButton = todoClone.querySelector(".edit");

        editButton.addEventListener("click", (e) =>{
            editTodoPopup.querySelector(".ipt-title").value = todo.title;
            editTodoPopup.querySelector(".ipt-title").placeholder = todo.title;

            editTodoPopup.querySelector(".ipt-description").value = todo.description;
            editTodoPopup.querySelector(".ipt-dueDate").value = todo.dueDate;
            editTodoPopup.querySelector(".ipt-priority").value = todo.priority; 

            
            displayPopup(editTodoPopup,_setup__WEBPACK_IMPORTED_MODULE_0__.backdrop);
            editTodoPopup.dataset.title = todo.title;

            e.stopPropagation();
        });

        todoCheckbox.addEventListener("click", (e) =>{
            todo.completed = !todo.completed;
            if(todo.completed) todoClone.classList.add("completed");
            else todoClone.classList.remove("completed");
            e.stopPropagation();
        });


        if(todo.completed) todoClone.classList.add("completed");
        else todoClone.classList.remove("completed");

        todoContainer.appendChild(todoClone);
    });
}

function SelectedProjectChangeStyle(project){
    let title = project.title;
    let projectElements =  projectContainer.querySelectorAll(".project-div");
    projectElements.forEach(projectElement => {
        let titleElement = projectElement.querySelector(".project-title");
        let projectElementTitle = null;
        if(titleElement !== null) projectElementTitle = titleElement.innerText;

        if(projectElementTitle === title){
            projectElement.classList.add("selected");
        } else{
            projectElement.classList.remove("selected");
        }
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




 
function displayError(popup, errorClass, errorText){
    popup.querySelector(errorClass).innerText=errorText;
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
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setup */ "./src/setup.js");
/* harmony import */ var _icons_favicon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/favicon.svg */ "./src/icons/favicon.svg");







let link = document.createElement('link');
link.rel = 'icon';
link.href = _icons_favicon_svg__WEBPACK_IMPORTED_MODULE_3__;
document.head.appendChild(link);


(0,_setup__WEBPACK_IMPORTED_MODULE_2__.setup)();








/***/ }),

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentUser": () => (/* binding */ CurrentUser),
/* harmony export */   "backdrop": () => (/* binding */ backdrop),
/* harmony export */   "currentProject": () => (/* binding */ currentProject),
/* harmony export */   "setCurrentProject": () => (/* binding */ setCurrentProject),
/* harmony export */   "setCurrentUser": () => (/* binding */ setCurrentUser),
/* harmony export */   "setup": () => (/* binding */ setup)
/* harmony export */ });
/* harmony import */ var _displayFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayFunctions */ "./src/displayFunctions.js");
/* harmony import */ var _todoObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoObjects */ "./src/todoObjects.js");





let backdrop = document.querySelector(".backdrop");

let projectContainer = document.querySelector(".project-container");
let projectTemplate = document.querySelector(".project-template");


let todoContainer = document.querySelector(".todo-container");
let todoTemplate = document.querySelector(".todo-template");


let addProjectButton = document.querySelector(".add-project");
let addProjectPopup = document.querySelector(".project-popup");

let addTodoButton = document.querySelector(".add-todo");
let addTodoPopup = document.querySelector(".todo-popup");

let editProjectPopup = document.querySelector(".edit-project-popup");
let editTodoPopup = document.querySelector(".edit-todo-popup");



let CurrentUser;
let currentProject;
function setCurrentUser(user){
    CurrentUser = user;
};
function setCurrentProject(project){
    currentProject = project;
    (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayProjects)(CurrentUser,projectContainer,projectTemplate);
    (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(currentProject,todoContainer,todoTemplate);
    (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.SelectedProjectChangeStyle)(currentProject);
};


let retrievedUser = localStorage.getItem('USER');
let userJson = JSON.parse(retrievedUser);
console.log('USER: ', );
let user

if(userJson === null){
    user = (0,_todoObjects__WEBPACK_IMPORTED_MODULE_1__.userFactory)("Guest");
    user.createTodo("Get A Job", "Learn A Skill", "Web-Development", "2024-01-01", 0);
    user.createTodo("Get A Job", "Apply For Jobs", "", "2024-04-01", 1);
    user.createTodo("Get A Wife", "Find A Woman", "Usually In The Streets", "2023-07-05", 0);
    user.createTodo("Get A Wife", "Talk To A Woman", "Use Words", "2024-12-11", 1);
    user.createTodo("Get A Wife", "Finish This List", "", "", 2);
}else {
    
    user = (0,_todoObjects__WEBPACK_IMPORTED_MODULE_1__.userFactory)(userJson.username);
    let projectArr = userJson.projectArr;
    projectArr.forEach(project => {
        let newProject = (0,_todoObjects__WEBPACK_IMPORTED_MODULE_1__.projectFactory)(project.title);
        user.addProject(newProject);
        let todoArr = project.todoArr;
        todoArr.forEach(todo =>{
            newProject.createTodo(todo.title, todo.description, todo.dueDate, todo.priority, todo.completed);
        });
    });
}



console.log(user);


console.log(JSON.parse(JSON.stringify(user)));

setCurrentUser(user);
setCurrentProject(CurrentUser.projectArr[0]);











function setup(){
    setupAddButtons();
    setupPopupButtons();


}



function setupAddButtons(){
    addProjectButton.addEventListener("click", (e)=>{
            (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayPopup)(addProjectPopup, backdrop);
    });

    addTodoButton.addEventListener("click", (e)=>{
            (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayPopup)(addTodoPopup, backdrop);
    });
}

function setupPopupButtons(){
    let addTodoConfirmButton = addTodoPopup.querySelector(".confirm");
    let addTodoCancelButton = addTodoPopup.querySelector(".cancel");

    addTodoCancelButton.addEventListener("click", (e) =>{
        (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.hidePopup)(addTodoPopup, backdrop);
    });

    addTodoConfirmButton.addEventListener("click", (e) =>{
        let title = addTodoPopup.querySelector(".ipt-title").value;

        if(currentProject.getTodoIdByTitle(title) !== -1) {
            (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayError)(addTodoPopup, ".title-error", "This Title Already Exists!");
            return
        }
        if(title === "") {
            (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayError)(addTodoPopup, ".title-error", "It Must Have A Title!");
            return
        }
        (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayError)(addTodoPopup, ".title-error", "");

        let description = addTodoPopup.querySelector(".ipt-description").value;
        let dueDate = addTodoPopup.querySelector(".ipt-dueDate").value;
        let priority = addTodoPopup.querySelector(".ipt-priority").value;
    
        currentProject.createTodo(title,description,dueDate,priority, false);
        localStorage.setItem('USER', JSON.stringify(CurrentUser));
        (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.hidePopup)(addTodoPopup, backdrop);
        (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(currentProject, todoContainer, todoTemplate);
    });


    let addProjectConfirmButton = addProjectPopup.querySelector(".confirm");
    let addProjectCancelButton = addProjectPopup.querySelector(".cancel");

    addProjectCancelButton.addEventListener("click", (e) =>{
        (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.hidePopup)(addProjectPopup, backdrop);
    });

    addProjectConfirmButton.addEventListener("click", (e) =>{
        let title = addProjectPopup.querySelector(".ipt-title").value;

        if(CurrentUser.projectIdWithTitle(title) !== -1) {
            (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayError)(addProjectPopup, ".title-error", "This Title Already Exists!");
            return
        }
        if(title === "") {
            (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayError)(addProjectPopup, ".title-error", "It Must Have A Title!");
            return
        }
        (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayError)(addProjectPopup, ".title-error", "");

        CurrentUser.createProject(title);
        localStorage.setItem('USER', JSON.stringify(CurrentUser));
        (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.hidePopup)(addProjectPopup, backdrop);
        (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayProjects)(user,projectContainer,projectTemplate);
    });

    let editProjectConfirmButton = editProjectPopup.querySelector(".confirm");
    let editProjectCancelButton = editProjectPopup.querySelector(".cancel");

    editProjectCancelButton.addEventListener("click", (e) =>{
        (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.hidePopup)(editProjectPopup, backdrop);
    });

    editProjectConfirmButton.addEventListener("click", (e) =>{
        let title = editProjectPopup.querySelector(".ipt-title").value;

        if(CurrentUser.projectIdWithTitle(title) !== -1) {
            (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayError)(editProjectPopup, ".title-error", "This Title Already Exists!");
            return
        }
        if(title === "") {
            (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayError)(editProjectPopup, ".title-error", "It Must Have A Title!");
            return
        }
        (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayError)(editProjectPopup, ".title-error", "");

        
        CurrentUser.projectWithTitle(editProjectPopup.dataset.title).title = title;
        localStorage.setItem('USER', JSON.stringify(CurrentUser));
        (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.hidePopup)(editProjectPopup, backdrop);
        (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayProjects)(user,projectContainer,projectTemplate);
    });


    let editTodoConfirmButton = editTodoPopup.querySelector(".confirm");
    let editTodoCancelButton = editTodoPopup.querySelector(".cancel");

    editTodoCancelButton.addEventListener("click", (e) =>{
        (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.hidePopup)(editTodoPopup, backdrop);
    });

    editTodoConfirmButton.addEventListener("click", (e) =>{
        let title = editTodoPopup.querySelector(".ipt-title").value;
        let description = editTodoPopup.querySelector(".ipt-description").value;
        let dueDate = editTodoPopup.querySelector(".ipt-dueDate").value;
        let priority = editTodoPopup.querySelector(".ipt-priority").value;


        if(currentProject.getTodoIdByTitle(title) !== -1) {
            if(title !== editTodoPopup.dataset.title){
            (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayError)(editTodoPopup, ".title-error", "This Title Already Exists!");
            return;
            }
        }
        if(title === "") {
            (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayError)(editTodoPopup, ".title-error", "It Must Have A Title!");
            return;
        }
        (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayError)(editTodoPopup, ".title-error", "");

        console.log(editTodoPopup.dataset.title);
        console.log(currentProject.todoWithTitle(editTodoPopup.dataset.title));

        let editedTodo = currentProject.todoWithTitle(editTodoPopup.dataset.title);

        editedTodo.title = title;
        editedTodo.description = description;
        editedTodo.dueDate = dueDate;


        editedTodo.priority = priority;

        (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.hidePopup)(editTodoPopup, backdrop);

        currentProject.sortTodos();
        localStorage.setItem('USER', JSON.stringify(CurrentUser));
        (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(currentProject,todoContainer,todoTemplate);
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

const todoItemFactory = (title, description, dueDate, priority, completed) =>{
    return{
        title,
        description,
        dueDate,
        priority,
        completed
    };
};


const projectFactory = (title) =>{
    let todoArr = [];

    const addTodo = (todoItem) =>{
        todoArr.push(todoItem);
        sortTodos();
    };

    const sortTodos = ()=>{
        todoArr.sort(sortFn);
        
    };

    const sortFn = (a,b) =>{
        if(a.priority < b.priority) return -1;
    }

    const createTodo = (title, description, dueDate, priority, completed) =>{
        if(completed === null || completed === undefined) completed = false;
        let newTodoItem = todoItemFactory(title, description, dueDate, priority, completed);
        addTodo(newTodoItem);
    };

    const removeTodo = (todoItem) =>{
        let id = getTodoId(todoItem);
        if(id === undefined) return;
        todoArr.splice(id, 1);
    };   

    const removeTodoByTitle = (title) =>{
        let todo = todoArr.find(element => element.title === title);
        if(todo === undefined) return;
        removeTodo(todo);
    };

    const getTodoId = (todoItem) =>{
        return todoArr.findIndex(element => element.title === todoItem.title);
    };

    const getTodoIdByTitle = (title) =>{
        return todoArr.findIndex(element => element.title === title);
    };

    const todoWithTitle = (title) =>{
        return todoArr.find(element => element.title === title);
    }

    return{
        title,
        todoArr,
        addTodo,
        removeTodo,
        createTodo,
        getTodoIdByTitle,
        removeTodoByTitle,
        todoWithTitle,
        sortTodos,
    };
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

    const projectIdWithTitle = (projectName) =>{
        let id = projectArr.findIndex(element =>element.title === projectName);
        return id;
    };


    const createTodo = (projectTitle, todoTitle, description, dueDate, priority, completed) =>{
        let project = projectWithTitle(projectTitle);
        if(project === undefined){
            project = projectFactory(projectTitle);
            addProject(project);
        }
        project.createTodo(todoTitle, description, dueDate, priority, completed);
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

    const removeProjectByTitle = (title) =>{
        let project = projectArr.find(project => project.title === title);
        if(project === undefined) return;
        removeProject(project);
    }

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
        addTodo,
        projectWithTitle,
        projectIdWithTitle,
        removeProjectByTitle
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxRQUFRLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksVUFBVSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFB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QUFHQTs7QUFFQSxRQUFRLDREQUFTOztBQUVqQjtBQUNBO0FBQ0EsUUFBUSwrREFBWTtBQUNwQixLQUFLO0FBQ0w7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1T087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zZXR1cC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb09iamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vQ0VEUklDIGRlbW8udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9UaWx0V2FycC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIgICAgOnJvb3R7XFxuICAgICAgICAtLWRhcms6ICMxNjIwNUU7XFxuICAgICAgICAtLW1pZDogIzM2M0U4ODtcXG4gICAgICAgIC0tbGlnaHQ6ICM1NzVFOUI7XFxuICAgICAgICAtLWFjY2VudDogIzVDNkRGRjtcXG4gICAgICAgIC0tcjogI0ZGNzQ3NDtcXG4gICAgICAgIC0tZzogIzRFRUZBMztcXG4gICAgICAgIC0tYjogIzQzQzdGRjtcXG4gICAgICAgIC0tdzogI2M5ZDBmYTtcXG4gICAgfVxcblxcbiAgICA6OnNlbGVjdGlvbntcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuXFxuXFxuICAgIEBmb250LWZhY2Uge1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICdjZWRyaWMnO1xcbiAgICAgICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTsgXFxuICAgIH1cXG5cXG4gICAgQGZvbnQtZmFjZSB7XFxuICAgICAgICBmb250LWZhbWlseTogJ3RpbHRXcmFwJztcXG4gICAgICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7IFxcbiAgICB9XFxuXFxuXFxuICAgICp7XFxuICAgICAgICBmb250LWZhbWlseTogJ3RpbHRXcmFwJztcXG4gICAgfVxcblxcbiAgICBodG1sLFxcbiAgICBib2R5e1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuXFxuICAgIGJvZHl7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcblxcbiAgICAubm9kaXNwbGF5e1xcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICB9XFxuXFxuICAgIC5jb250ZW50e1xcbiAgICAgICAgZmxleDogMTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICBoZWFkZXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMnJlbSAxcmVtIDJyZW07XFxuICAgIH1cXG5cXG4gICAgYXtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13KTtcXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgICAgICBwYWRkaW5nOiAwLjFyZW0gMC4ycmVtO1xcbiAgICB9XFxuXFxuICAgIGE6aG92ZXJ7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQzQzdGRjtcXG4gICAgfVxcblxcbiAgICBmb290ZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3Rze1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICAgICAgZmxleDoyLjU7XFxuICAgICAgICBnYXA6MTVweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcCA6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXAgOiAxNXB4O1xcbiAgICB9XFxuXFxuXFxuXFxuICAgIHN2Z3tcXG4gICAgICAgIGhlaWdodDogMS43cmVtO1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtZGl2e1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13KTtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJvcmRlciBzY2FsZTtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1kaXYuc2VsZWN0ZWR7XFxuICAgICAgICB3aWR0aDogODUlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgfVxcblxcblxcbiAgICAucHJvamVjdC1kaXYgLnByb2plY3QtdGl0bGV7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWRpdjpub3QoLnNlbGVjdGVkKTpob3ZlcntcXG4gICAgICAgIHdpZHRoOiA4MiU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDQwLCAxNDYpO1xcbiAgICB9XFxuXFxuXFxuICAgIC5wcm9qZWN0LWRpdiBzcGFue1xcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZGl2e1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBoZWlnaHQ6IDgwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13KTtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgfVxcblxcbiAgICAudG9kby1kaXYuLS1ye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcik7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZGl2Li0tZ3tcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWcpO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWRpdi4tLWJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iKTtcXG4gICAgfVxcblxcbiAgICAudG9kby1kaXYuY29tcGxldGVke1xcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNik7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZGl2ICp7XFxuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWRpdiAudG9kby10aXRsZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgY29sb3I6IHJnYmEoMjMsIDAsIDc4LCAwLjkpO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWRpdiBidXR0b257XFxuICAgICAgICBmaWx0ZXI6b3BhY2l0eSgwLjUpO1xcbiAgICB9XFxuXFxuXFxuXFxuXFxuICAgIC50b2RvLWRpdiAubGVmdC1zaWRle1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZGl2IC5yaWdodC1zaWRle1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZGl2IC50b2RvLWR1ZURhdGV7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgICAgICB3aWR0aDogMTEwcHg7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9ue1xcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICBmaWx0ZXI6IGludmVydCg4MiUpIHNlcGlhKDMlKSBzYXR1cmF0ZSgyNzk1JSkgaHVlLXJvdGF0ZSgxOTZkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoOTYlKTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG5cXG4gICAgLmVkaXQ6aG92ZXJ7XFxuICAgICAgICBmaWx0ZXI6IGludmVydCg2NCUpIHNlcGlhKDk4JSkgc2F0dXJhdGUoMTM0NyUpIGh1ZS1yb3RhdGUoMTcwZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDEwNCUpIGRyb3Atc2hhZG93KDAgMCAwLjNyZW0gYmxhY2spO1xcbiAgICB9XFxuXFxuICAgIC5kZWxldGU6aG92ZXJ7XFxuICAgICAgICBmaWx0ZXI6IGludmVydCg2MyUpIHNlcGlhKDcyJSkgc2F0dXJhdGUoMjU5NyUpIGh1ZS1yb3RhdGUoMzE2ZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDEwNCUpICBkcm9wLXNoYWRvdygwIDAgMC4zcmVtIGJsYWNrKTtcXG4gICAgfVxcblxcbiAgICAuYWRkLWJ1dHRvbntcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgLmFkZC1idXR0b246aG92ZXJ7XFxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAwLjc1cmVtIHJlZCk7XFxuICAgICAgICBmaWx0ZXI6IGludmVydCg2NCUpIHNlcGlhKDk4JSkgc2F0dXJhdGUoMTM0NyUpIGh1ZS1yb3RhdGUoMTcwZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDEwNCUpIGRyb3Atc2hhZG93KDAgMCAwLjNyZW0gYmxhY2spO1xcbiAgICB9XFxuXFxuICAgIC50b2Rvc3tcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZCk7XFxuICAgICAgICBmbGV4OjY7XFxuICAgICAgICBnYXA6MTVweDtcXG4gICAgfVxcblxcbiAgICBidXR0b257XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIGgxe1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgICAgICBmb250LWZhbWlseTogJ2NlZHJpYyc7XFxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICAgICAgbWFyZ2luOjA7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXcpO1xcbiAgICB9XFxuXFxuICAgIGgye1xcbiAgICAgICAgY29sb3I6IHZhcigtLXcpO1xcbiAgICAgICAgbWFyZ2luOiAxNXB4IDAgMCAwIDtcXG4gICAgfVxcblxcbiAgICBoM3tcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgfVxcblxcbiAgICAuYnV0dG9uLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGdhcDoxNXB4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB9XFxuXFxuICAgIC5wb3B1cHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13KTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgcGFkZGluZzogMjBweCA1MHB4O1xcbiAgICAgICAgZ2FwOjIwcHg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgei1pbmRleDogMTA7XFxuICAgIH1cXG5cXG4gICAgLnBvcHVwIGJ1dHRvbntcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIGZpbHRlcjogbm9uZTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13KTtcXG4gICAgfVxcblxcbiAgICBpbnB1dDpub3QoW3R5cGU9Y2hlY2tib3hdKXtcXG4gICAgICAgIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdyk7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgfVxcblxcblxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XXtcXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICBmb250OiBpbmhlcml0O1xcbiAgICAgICAgY29sb3I6IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC42KTtcXG4gICAgICAgIGJvcmRlcjogMC4xNWVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuMGVtKTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gICAgXFxuICAgIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMCwgMCwgMCwgMC43MTkpO1xcbiAgICAgICAgXFxuICAgICAgfVxcbiAgICAgIFxcblxcbiAgICBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxuXFxuICAgIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbWF4KDJweCwgMC4xNWVtKSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgICBvdXRsaW5lLW9mZnNldDogbWF4KDJweCwgMC4xNWVtKTtcXG4gICAgfVxcbiAgICAgIFxcbiAgICBcXG4gICAgc2VsZWN0e1xcbiAgICAgICAgb3V0bGluZS1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13KTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgMjBweCk7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgfVxcblxcbiAgICAudGl0bGUtbGFiZWw6OmFmdGVye1xcbiAgICAgICAgY29udGVudDogXFxcIipcXFwiO1xcbiAgICB9XFxuXFxuICAgIC5wb3B1cCBidXR0b246aG92ZXJ7XFxuICAgICAgICBmaWx0ZXI6YnJpZ2h0bmVzcygwLjgpO1xcbiAgICB9XFxuXFxuICAgIC5wb3B1cCBidXR0b24uY29uZmlybXtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWcpO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICB9XFxuXFxuICAgIC5wb3B1cCBidXR0b24uY2FuY2Vse1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcik7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgLmlucHV0LXdyYXBwZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgIH1cXG5cXG4gICAgLmJhY2tkcm9we1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wKTtcXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgICAgICB6LWluZGV4OiA1O1xcbiAgICB9XFxuXFxuICAgIC5iYWNrZHJvcC52aXNpYmxle1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6dmlzaWJsZTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgICAgIGFuaW1hdGlvbjogZmFkZS1pbiA1MDBtcyBmb3J3YXJkcztcXG4gICAgfVxcblxcbiAgICAucG9wdXAudmlzaWJsZXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbmltYXRpb246IGZhZGUtaW4gNTAwbXMgZm9yd2FyZHM7XFxuICAgICAgICBhbmltYXRpb246IHNsaWRlIHVwIDUwMG1zIGZvcndhcmRzO1xcbiAgICB9XFxuXFxuICAgIC5lcnJvcntcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1yKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gICAgICAgIDAle1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAxMDAle1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG5cXG4gICAgQGtleWZyYW1lcyBmYWRlLW91dCB7XFxuICAgICAgICAwJXtcXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgMTAwJXtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBrZXlmcmFtZXMgc2xpZGUtdXAge1xcbiAgICAgICAgMCV7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcbiAgICAgICAgfSAgICBcXG5cXG4gICAgICAgIDEwMCV7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gICAgICAgIH1cXG5cXG5cXG4gICAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIklBQUk7UUFDSSxlQUFlO1FBQ2YsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLFlBQVk7UUFDWixZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7UUFDWix1QkFBdUI7SUFDM0I7OztJQUdBO1FBQ0kscUJBQXFCO1FBQ3JCLCtEQUFpRDtJQUNyRDs7SUFFQTtRQUNJLHVCQUF1QjtRQUN2QiwrREFBcUQ7SUFDekQ7OztJQUdBO1FBQ0ksdUJBQXVCO0lBQzNCOztJ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Qjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFNBQVM7UUFDVCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixXQUFXO1FBQ1gsWUFBWTtRQUNaLDhCQUE4QjtRQUM5Qix5QkFBeUI7UUFDekIsVUFBVTtJQUNkOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLDhCQUE4QjtRQUM5QixpQ0FBaUM7SUFDckM7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsaUNBQWlDO1FBQ2pDLGtDQUFrQztJQUN0Qzs7SUFFQTtRQUNJLGVBQWU7UUFDZiw2QkFBNkI7UUFDN0IsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0k7WUFDSSxVQUFVO1FBQ2Q7O1FBRUE7WUFDSSxVQUFVO1FBQ2Q7SUFDSjs7O0lBR0E7UUFDSTtZQUNJLFVBQVU7UUFDZDs7UUFFQTtZQUNJLFVBQVU7UUFDZDtJQUNKOztJQUVBO1FBQ0k7WUFDSSwyQkFBMkI7UUFDL0I7O1FBRUE7WUFDSSx5QkFBeUI7UUFDN0I7OztJQUdKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiAgICA6cm9vdHtcXG4gICAgICAgIC0tZGFyazogIzE2MjA1RTtcXG4gICAgICAgIC0tbWlkOiAjMzYzRTg4O1xcbiAgICAgICAgLS1saWdodDogIzU3NUU5QjtcXG4gICAgICAgIC0tYWNjZW50OiAjNUM2REZGO1xcbiAgICAgICAgLS1yOiAjRkY3NDc0O1xcbiAgICAgICAgLS1nOiAjNEVFRkEzO1xcbiAgICAgICAgLS1iOiAjNDNDN0ZGO1xcbiAgICAgICAgLS13OiAjYzlkMGZhO1xcbiAgICB9XFxuXFxuICAgIDo6c2VsZWN0aW9ue1xcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIH1cXG5cXG5cXG4gICAgQGZvbnQtZmFjZSB7XFxuICAgICAgICBmb250LWZhbWlseTogJ2NlZHJpYyc7XFxuICAgICAgICBzcmM6IHVybCgnLi9DRURSSUNcXFxcIGRlbW8udHRmJykgZm9ybWF0KCd0cnVldHlwZScpOyBcXG4gICAgfVxcblxcbiAgICBAZm9udC1mYWNlIHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAndGlsdFdyYXAnO1xcbiAgICAgICAgc3JjOiB1cmwoJy4vVGlsdFdhcnAtUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7IFxcbiAgICB9XFxuXFxuXFxuICAgICp7XFxuICAgICAgICBmb250LWZhbWlseTogJ3RpbHRXcmFwJztcXG4gICAgfVxcblxcbiAgICBodG1sLFxcbiAgICBib2R5e1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuXFxuICAgIGJvZHl7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcblxcbiAgICAubm9kaXNwbGF5e1xcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICB9XFxuXFxuICAgIC5jb250ZW50e1xcbiAgICAgICAgZmxleDogMTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICBoZWFkZXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMnJlbSAxcmVtIDJyZW07XFxuICAgIH1cXG5cXG4gICAgYXtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13KTtcXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgICAgICBwYWRkaW5nOiAwLjFyZW0gMC4ycmVtO1xcbiAgICB9XFxuXFxuICAgIGE6aG92ZXJ7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQzQzdGRjtcXG4gICAgfVxcblxcbiAgICBmb290ZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3Rze1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICAgICAgZmxleDoyLjU7XFxuICAgICAgICBnYXA6MTVweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcCA6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXAgOiAxNXB4O1xcbiAgICB9XFxuXFxuXFxuXFxuICAgIHN2Z3tcXG4gICAgICAgIGhlaWdodDogMS43cmVtO1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtZGl2e1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13KTtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJvcmRlciBzY2FsZTtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1kaXYuc2VsZWN0ZWR7XFxuICAgICAgICB3aWR0aDogODUlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgfVxcblxcblxcbiAgICAucHJvamVjdC1kaXYgLnByb2plY3QtdGl0bGV7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWRpdjpub3QoLnNlbGVjdGVkKTpob3ZlcntcXG4gICAgICAgIHdpZHRoOiA4MiU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDQwLCAxNDYpO1xcbiAgICB9XFxuXFxuXFxuICAgIC5wcm9qZWN0LWRpdiBzcGFue1xcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZGl2e1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBoZWlnaHQ6IDgwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13KTtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgfVxcblxcbiAgICAudG9kby1kaXYuLS1ye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcik7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZGl2Li0tZ3tcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWcpO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWRpdi4tLWJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iKTtcXG4gICAgfVxcblxcbiAgICAudG9kby1kaXYuY29tcGxldGVke1xcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNik7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZGl2ICp7XFxuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWRpdiAudG9kby10aXRsZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgY29sb3I6IHJnYmEoMjMsIDAsIDc4LCAwLjkpO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWRpdiBidXR0b257XFxuICAgICAgICBmaWx0ZXI6b3BhY2l0eSgwLjUpO1xcbiAgICB9XFxuXFxuXFxuXFxuXFxuICAgIC50b2RvLWRpdiAubGVmdC1zaWRle1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZGl2IC5yaWdodC1zaWRle1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZGl2IC50b2RvLWR1ZURhdGV7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgICAgICB3aWR0aDogMTEwcHg7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9ue1xcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICBmaWx0ZXI6IGludmVydCg4MiUpIHNlcGlhKDMlKSBzYXR1cmF0ZSgyNzk1JSkgaHVlLXJvdGF0ZSgxOTZkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoOTYlKTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG5cXG4gICAgLmVkaXQ6aG92ZXJ7XFxuICAgICAgICBmaWx0ZXI6IGludmVydCg2NCUpIHNlcGlhKDk4JSkgc2F0dXJhdGUoMTM0NyUpIGh1ZS1yb3RhdGUoMTcwZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDEwNCUpIGRyb3Atc2hhZG93KDAgMCAwLjNyZW0gYmxhY2spO1xcbiAgICB9XFxuXFxuICAgIC5kZWxldGU6aG92ZXJ7XFxuICAgICAgICBmaWx0ZXI6IGludmVydCg2MyUpIHNlcGlhKDcyJSkgc2F0dXJhdGUoMjU5NyUpIGh1ZS1yb3RhdGUoMzE2ZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDEwNCUpICBkcm9wLXNoYWRvdygwIDAgMC4zcmVtIGJsYWNrKTtcXG4gICAgfVxcblxcbiAgICAuYWRkLWJ1dHRvbntcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgLmFkZC1idXR0b246aG92ZXJ7XFxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAwLjc1cmVtIHJlZCk7XFxuICAgICAgICBmaWx0ZXI6IGludmVydCg2NCUpIHNlcGlhKDk4JSkgc2F0dXJhdGUoMTM0NyUpIGh1ZS1yb3RhdGUoMTcwZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDEwNCUpIGRyb3Atc2hhZG93KDAgMCAwLjNyZW0gYmxhY2spO1xcbiAgICB9XFxuXFxuICAgIC50b2Rvc3tcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZCk7XFxuICAgICAgICBmbGV4OjY7XFxuICAgICAgICBnYXA6MTVweDtcXG4gICAgfVxcblxcbiAgICBidXR0b257XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIGgxe1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgICAgICBmb250LWZhbWlseTogJ2NlZHJpYyc7XFxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICAgICAgbWFyZ2luOjA7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXcpO1xcbiAgICB9XFxuXFxuICAgIGgye1xcbiAgICAgICAgY29sb3I6IHZhcigtLXcpO1xcbiAgICAgICAgbWFyZ2luOiAxNXB4IDAgMCAwIDtcXG4gICAgfVxcblxcbiAgICBoM3tcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgfVxcblxcbiAgICAuYnV0dG9uLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGdhcDoxNXB4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB9XFxuXFxuICAgIC5wb3B1cHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13KTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgcGFkZGluZzogMjBweCA1MHB4O1xcbiAgICAgICAgZ2FwOjIwcHg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgei1pbmRleDogMTA7XFxuICAgIH1cXG5cXG4gICAgLnBvcHVwIGJ1dHRvbntcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIGZpbHRlcjogbm9uZTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13KTtcXG4gICAgfVxcblxcbiAgICBpbnB1dDpub3QoW3R5cGU9Y2hlY2tib3hdKXtcXG4gICAgICAgIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdyk7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgfVxcblxcblxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XXtcXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICBmb250OiBpbmhlcml0O1xcbiAgICAgICAgY29sb3I6IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC42KTtcXG4gICAgICAgIGJvcmRlcjogMC4xNWVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuMGVtKTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gICAgXFxuICAgIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMCwgMCwgMCwgMC43MTkpO1xcbiAgICAgICAgXFxuICAgICAgfVxcbiAgICAgIFxcblxcbiAgICBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxuXFxuICAgIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbWF4KDJweCwgMC4xNWVtKSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgICBvdXRsaW5lLW9mZnNldDogbWF4KDJweCwgMC4xNWVtKTtcXG4gICAgfVxcbiAgICAgIFxcbiAgICBcXG4gICAgc2VsZWN0e1xcbiAgICAgICAgb3V0bGluZS1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13KTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgMjBweCk7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgfVxcblxcbiAgICAudGl0bGUtbGFiZWw6OmFmdGVye1xcbiAgICAgICAgY29udGVudDogXFxcIipcXFwiO1xcbiAgICB9XFxuXFxuICAgIC5wb3B1cCBidXR0b246aG92ZXJ7XFxuICAgICAgICBmaWx0ZXI6YnJpZ2h0bmVzcygwLjgpO1xcbiAgICB9XFxuXFxuICAgIC5wb3B1cCBidXR0b24uY29uZmlybXtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWcpO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICB9XFxuXFxuICAgIC5wb3B1cCBidXR0b24uY2FuY2Vse1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcik7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgLmlucHV0LXdyYXBwZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgIH1cXG5cXG4gICAgLmJhY2tkcm9we1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wKTtcXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgICAgICB6LWluZGV4OiA1O1xcbiAgICB9XFxuXFxuICAgIC5iYWNrZHJvcC52aXNpYmxle1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6dmlzaWJsZTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgICAgIGFuaW1hdGlvbjogZmFkZS1pbiA1MDBtcyBmb3J3YXJkcztcXG4gICAgfVxcblxcbiAgICAucG9wdXAudmlzaWJsZXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbmltYXRpb246IGZhZGUtaW4gNTAwbXMgZm9yd2FyZHM7XFxuICAgICAgICBhbmltYXRpb246IHNsaWRlIHVwIDUwMG1zIGZvcndhcmRzO1xcbiAgICB9XFxuXFxuICAgIC5lcnJvcntcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1yKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gICAgICAgIDAle1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAxMDAle1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG5cXG4gICAgQGtleWZyYW1lcyBmYWRlLW91dCB7XFxuICAgICAgICAwJXtcXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgMTAwJXtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBrZXlmcmFtZXMgc2xpZGUtdXAge1xcbiAgICAgICAgMCV7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcbiAgICAgICAgfSAgICBcXG5cXG4gICAgICAgIDEwMCV7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gICAgICAgIH1cXG5cXG5cXG4gICAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjdXJyZW50UHJvamVjdCwgQ3VycmVudFVzZXIsIHNldEN1cnJlbnRQcm9qZWN0LCBzZXRDdXJyZW50VXNlciwgYmFja2Ryb3AgfSBmcm9tIFwiLi9zZXR1cFwiO1xuXG5sZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XG5sZXQgcHJvamVjdFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRlbXBsYXRlXCIpO1xuXG5cbmxldCBlZGl0UHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXByb2plY3QtcG9wdXBcIik7XG5sZXQgZWRpdFRvZG9Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10b2RvLXBvcHVwXCIpO1xuXG5sZXQgY29uZmlybURlbGV0ZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25maXJtLWRlbGV0ZS1wb3B1cFwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cyh1c2VyLCBQcm9qZWN0Q29udGFpbmVyLCBwcm9qZWN0VGVtcGxhdGUpe1xuICAgIGxldCBwcm9qZWN0QXJyID0gdXNlci5wcm9qZWN0QXJyO1xuICAgIFByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBwcm9qZWN0QXJyLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0Q2xvbmUgPSBwcm9qZWN0VGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBwcm9qZWN0Q2xvbmUuY2xhc3NMaXN0LnJlbW92ZShcIm5vZGlzcGxheVwiLCBcInByb2plY3QtdGVtcGxhdGVcIilcbiAgICAgICAgcHJvamVjdENsb25lLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKS5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBwcm9qZWN0Q2xvbmUucXVlcnlTZWxlY3RvcihcIi5kZWxldGVcIik7XG5cbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG5cbiAgICAgICAgICAgIGNvbmZpcm1EZWxldGVQb3B1cC5xdWVyeVNlbGVjdG9yKFwiaDNcIikuaW5uZXJUZXh0ID0gYERlbGV0ZSA+PiR7cHJvamVjdC50aXRsZX08PCA/YDtcbiAgICAgICAgICAgIGRpc3BsYXlQb3B1cChjb25maXJtRGVsZXRlUG9wdXAsYmFja2Ryb3ApO1xuICAgICAgICAgICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGNvbmZpcm1EZWxldGVQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcbiAgICAgICAgICAgIGxldCBjb25maXJtQnV0dG9uID0gY29uZmlybURlbGV0ZVBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybVwiKTtcbiAgICAgICAgXG4gICAgICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICAgICAgaGlkZVBvcHVwKGNvbmZpcm1EZWxldGVQb3B1cCxiYWNrZHJvcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICAgICAgIGhpZGVQb3B1cChjb25maXJtRGVsZXRlUG9wdXAsYmFja2Ryb3ApO1xuXG4gICAgICAgICAgICAgICAgQ3VycmVudFVzZXIucmVtb3ZlUHJvamVjdEJ5VGl0bGUocHJvamVjdC50aXRsZSk7XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFByb2plY3QudGl0bGUgPT09IHByb2plY3QudGl0bGUpIHNldEN1cnJlbnRQcm9qZWN0KHVzZXIucHJvamVjdEFyclswXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoQ3VycmVudFVzZXIpKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVNFUicsIEpTT04uc3RyaW5naWZ5KEN1cnJlbnRVc2VyKSk7XG4gICAgICAgICAgICAgICAgZGlzcGxheVByb2plY3RzKHVzZXIsIFByb2plY3RDb250YWluZXIsIHByb2plY3RUZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgU2VsZWN0ZWRQcm9qZWN0Q2hhbmdlU3R5bGUoY3VycmVudFByb2plY3QpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBlZGl0QnV0dG9uID0gcHJvamVjdENsb25lLnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFwiKTtcblxuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICBlZGl0UHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXRpdGxlXCIpLnZhbHVlID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0UG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtdGl0bGVcIikucGxhY2Vob2xkZXIgPSBwcm9qZWN0LnRpdGxlO1xuXG5cbiAgICAgICAgICAgIGRpc3BsYXlQb3B1cChlZGl0UHJvamVjdFBvcHVwLGJhY2tkcm9wKTtcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0UG9wdXAuZGF0YXNldC50aXRsZSA9IHByb2plY3QudGl0bGU7XG5cbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3RDbG9uZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENsb25lKTtcbiAgICB9KTtcblxuICAgIFNlbGVjdGVkUHJvamVjdENoYW5nZVN0eWxlKGN1cnJlbnRQcm9qZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUb2Rvcyhwcm9qZWN0LCB0b2RvQ29udGFpbmVyLCB0b2RvVGVtcGxhdGUpe1xuXG4gICAgbGV0IHByaW9yaXR5Q29sb3JzID0gW1wiLS1yXCIsIFwiLS1iXCIsIFwiLS1nXCJdO1xuXG5cbiAgICBsZXQgdG9kb0FyciA9IHByb2plY3QudG9kb0FycjtcbiAgICB0b2RvQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgdG9kb0Fyci5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICBsZXQgdG9kb0Nsb25lID0gdG9kb1RlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgbGV0IHRvZG9DaGVja2JveCA9IHRvZG9DbG9uZS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tY29tcGxldGVkXCIpO1xuXG5cbiAgICAgICAgdG9kb0Nsb25lLmNsYXNzTGlzdC5yZW1vdmUoXCJub2Rpc3BsYXlcIiwgXCJ0b2RvLXRlbXBsYXRlXCIpXG4gICAgICAgIHRvZG9DbG9uZS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdGl0bGVcIikuaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcbiAgICAgICAgdG9kb0Nsb25lLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kZXNjcmlwdGlvblwiKS5pbm5lclRleHQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgICAgICB0b2RvQ2xvbmUucXVlcnlTZWxlY3RvcihcIi50b2RvLWR1ZURhdGVcIikuaW5uZXJUZXh0ID0gdG9kby5kdWVEYXRlO1xuICAgICAgICB0b2RvQ2hlY2tib3guY2hlY2tlZCA9IHRvZG8uY29tcGxldGVkO1xuXG4gICAgXG4gICAgICAgIHRvZG9DbG9uZS5jbGFzc0xpc3QuYWRkKHByaW9yaXR5Q29sb3JzW3RvZG8ucHJpb3JpdHldKTtcblxuICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gdG9kb0Nsb25lLnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlXCIpO1xuXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuXG4gICAgICAgICAgICBjb25maXJtRGVsZXRlUG9wdXAucXVlcnlTZWxlY3RvcihcImgzXCIpLmlubmVyVGV4dCA9IGBEZWxldGUgPj4ke3RvZG8udGl0bGV9PDwgP2A7XG4gICAgICAgICAgICBkaXNwbGF5UG9wdXAoY29uZmlybURlbGV0ZVBvcHVwLGJhY2tkcm9wKTtcbiAgICAgICAgICAgIGxldCBjYW5jZWxCdXR0b24gPSBjb25maXJtRGVsZXRlUG9wdXAucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG4gICAgICAgICAgICBsZXQgY29uZmlybUJ1dHRvbiA9IGNvbmZpcm1EZWxldGVQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1cIik7XG4gICAgICAgIFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICAgICAgIGhpZGVQb3B1cChjb25maXJtRGVsZXRlUG9wdXAsYmFja2Ryb3ApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgICAgICBoaWRlUG9wdXAoY29uZmlybURlbGV0ZVBvcHVwLGJhY2tkcm9wKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFzZHNhZHNhZGFzZFwiKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdC5yZW1vdmVUb2RvQnlUaXRsZSh0b2RvLnRpdGxlKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVNFUicsIEpTT04uc3RyaW5naWZ5KEN1cnJlbnRVc2VyKSk7XG4gICAgICAgICAgICAgICAgZGlzcGxheVRvZG9zKHByb2plY3QsIHRvZG9Db250YWluZXIsIHRvZG9UZW1wbGF0ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZWRpdEJ1dHRvbiA9IHRvZG9DbG9uZS5xdWVyeVNlbGVjdG9yKFwiLmVkaXRcIik7XG5cbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC10aXRsZVwiKS52YWx1ZSA9IHRvZG8udGl0bGU7XG4gICAgICAgICAgICBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXRpdGxlXCIpLnBsYWNlaG9sZGVyID0gdG9kby50aXRsZTtcblxuICAgICAgICAgICAgZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC1kZXNjcmlwdGlvblwiKS52YWx1ZSA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgICAgICBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LWR1ZURhdGVcIikudmFsdWUgPSB0b2RvLmR1ZURhdGU7XG4gICAgICAgICAgICBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXByaW9yaXR5XCIpLnZhbHVlID0gdG9kby5wcmlvcml0eTsgXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGlzcGxheVBvcHVwKGVkaXRUb2RvUG9wdXAsYmFja2Ryb3ApO1xuICAgICAgICAgICAgZWRpdFRvZG9Qb3B1cC5kYXRhc2V0LnRpdGxlID0gdG9kby50aXRsZTtcblxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdG9kb0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZDtcbiAgICAgICAgICAgIGlmKHRvZG8uY29tcGxldGVkKSB0b2RvQ2xvbmUuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgICAgIGVsc2UgdG9kb0Nsb25lLmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZWRcIik7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIGlmKHRvZG8uY29tcGxldGVkKSB0b2RvQ2xvbmUuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgZWxzZSB0b2RvQ2xvbmUuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlZFwiKTtcblxuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9DbG9uZSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3RlZFByb2plY3RDaGFuZ2VTdHlsZShwcm9qZWN0KXtcbiAgICBsZXQgdGl0bGUgPSBwcm9qZWN0LnRpdGxlO1xuICAgIGxldCBwcm9qZWN0RWxlbWVudHMgPSAgcHJvamVjdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtZGl2XCIpO1xuICAgIHByb2plY3RFbGVtZW50cy5mb3JFYWNoKHByb2plY3RFbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IHRpdGxlRWxlbWVudCA9IHByb2plY3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKTtcbiAgICAgICAgbGV0IHByb2plY3RFbGVtZW50VGl0bGUgPSBudWxsO1xuICAgICAgICBpZih0aXRsZUVsZW1lbnQgIT09IG51bGwpIHByb2plY3RFbGVtZW50VGl0bGUgPSB0aXRsZUVsZW1lbnQuaW5uZXJUZXh0O1xuXG4gICAgICAgIGlmKHByb2plY3RFbGVtZW50VGl0bGUgPT09IHRpdGxlKXtcbiAgICAgICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UG9wdXAocG9wdXBFbGVtZW50LCBiYWNrZHJvcCl7XG4gICAgcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZVBvcHVwKHBvcHVwRWxlbWVudCwgYmFja2Ryb3Ape1xuICAgIHBvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICBiYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbn1cblxuXG5cblxuIFxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlFcnJvcihwb3B1cCwgZXJyb3JDbGFzcywgZXJyb3JUZXh0KXtcbiAgICBwb3B1cC5xdWVyeVNlbGVjdG9yKGVycm9yQ2xhc3MpLmlubmVyVGV4dD1lcnJvclRleHQ7XG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyB0b2RvSXRlbUZhY3RvcnksIHByb2plY3RGYWN0b3J5LCB1c2VyRmFjdG9yeSB9IGZyb20gJy4vdG9kb09iamVjdHMnO1xuXG5pbXBvcnQgeyBzZXR1cCB9IGZyb20gJy4vc2V0dXAnO1xuaW1wb3J0IEljb24gZnJvbSBcIi4vaWNvbnMvZmF2aWNvbi5zdmdcIjtcblxuXG5sZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbmxpbmsucmVsID0gJ2ljb24nO1xubGluay5ocmVmID0gSWNvbjtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG5cblxuc2V0dXAoKTtcblxuXG5cblxuXG5cbiIsImltcG9ydCB7IGRpc3BsYXlQb3B1cCwgaGlkZVBvcHVwLCBkaXNwbGF5RXJyb3IsIGRpc3BsYXlUb2RvcywgU2VsZWN0ZWRQcm9qZWN0Q2hhbmdlU3R5bGUgfSBmcm9tIFwiLi9kaXNwbGF5RnVuY3Rpb25zXCI7XG5pbXBvcnQgeyB0b2RvSXRlbUZhY3RvcnksIHByb2plY3RGYWN0b3J5LCB1c2VyRmFjdG9yeSB9IGZyb20gJy4vdG9kb09iamVjdHMnO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RzIH0gZnJvbSAnLi9kaXNwbGF5RnVuY3Rpb25zJztcblxuXG5leHBvcnQgbGV0IGJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrZHJvcFwiKTtcblxubGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xubGV0IHByb2plY3RUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10ZW1wbGF0ZVwiKTtcblxuXG5sZXQgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb250YWluZXJcIik7XG5sZXQgdG9kb1RlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXRlbXBsYXRlXCIpO1xuXG5cbmxldCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcbmxldCBhZGRQcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtcG9wdXBcIik7XG5cbmxldCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kb1wiKTtcbmxldCBhZGRUb2RvUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tcG9wdXBcIik7XG5cbmxldCBlZGl0UHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXByb2plY3QtcG9wdXBcIik7XG5sZXQgZWRpdFRvZG9Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10b2RvLXBvcHVwXCIpO1xuXG5cblxuZXhwb3J0IGxldCBDdXJyZW50VXNlcjtcbmV4cG9ydCBsZXQgY3VycmVudFByb2plY3Q7XG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFVzZXIodXNlcil7XG4gICAgQ3VycmVudFVzZXIgPSB1c2VyO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KXtcbiAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gICAgZGlzcGxheVByb2plY3RzKEN1cnJlbnRVc2VyLHByb2plY3RDb250YWluZXIscHJvamVjdFRlbXBsYXRlKTtcbiAgICBkaXNwbGF5VG9kb3MoY3VycmVudFByb2plY3QsdG9kb0NvbnRhaW5lcix0b2RvVGVtcGxhdGUpO1xuICAgIFNlbGVjdGVkUHJvamVjdENoYW5nZVN0eWxlKGN1cnJlbnRQcm9qZWN0KTtcbn07XG5cblxubGV0IHJldHJpZXZlZFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVVNFUicpO1xubGV0IHVzZXJKc29uID0gSlNPTi5wYXJzZShyZXRyaWV2ZWRVc2VyKTtcbmNvbnNvbGUubG9nKCdVU0VSOiAnLCApO1xubGV0IHVzZXJcblxuaWYodXNlckpzb24gPT09IG51bGwpe1xuICAgIHVzZXIgPSB1c2VyRmFjdG9yeShcIkd1ZXN0XCIpO1xuICAgIHVzZXIuY3JlYXRlVG9kbyhcIkdldCBBIEpvYlwiLCBcIkxlYXJuIEEgU2tpbGxcIiwgXCJXZWItRGV2ZWxvcG1lbnRcIiwgXCIyMDI0LTAxLTAxXCIsIDApO1xuICAgIHVzZXIuY3JlYXRlVG9kbyhcIkdldCBBIEpvYlwiLCBcIkFwcGx5IEZvciBKb2JzXCIsIFwiXCIsIFwiMjAyNC0wNC0wMVwiLCAxKTtcbiAgICB1c2VyLmNyZWF0ZVRvZG8oXCJHZXQgQSBXaWZlXCIsIFwiRmluZCBBIFdvbWFuXCIsIFwiVXN1YWxseSBJbiBUaGUgU3RyZWV0c1wiLCBcIjIwMjMtMDctMDVcIiwgMCk7XG4gICAgdXNlci5jcmVhdGVUb2RvKFwiR2V0IEEgV2lmZVwiLCBcIlRhbGsgVG8gQSBXb21hblwiLCBcIlVzZSBXb3Jkc1wiLCBcIjIwMjQtMTItMTFcIiwgMSk7XG4gICAgdXNlci5jcmVhdGVUb2RvKFwiR2V0IEEgV2lmZVwiLCBcIkZpbmlzaCBUaGlzIExpc3RcIiwgXCJcIiwgXCJcIiwgMik7XG59ZWxzZSB7XG4gICAgXG4gICAgdXNlciA9IHVzZXJGYWN0b3J5KHVzZXJKc29uLnVzZXJuYW1lKTtcbiAgICBsZXQgcHJvamVjdEFyciA9IHVzZXJKc29uLnByb2plY3RBcnI7XG4gICAgcHJvamVjdEFyci5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHByb2plY3QudGl0bGUpO1xuICAgICAgICB1c2VyLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgIGxldCB0b2RvQXJyID0gcHJvamVjdC50b2RvQXJyO1xuICAgICAgICB0b2RvQXJyLmZvckVhY2godG9kbyA9PntcbiAgICAgICAgICAgIG5ld1Byb2plY3QuY3JlYXRlVG9kbyh0b2RvLnRpdGxlLCB0b2RvLmRlc2NyaXB0aW9uLCB0b2RvLmR1ZURhdGUsIHRvZG8ucHJpb3JpdHksIHRvZG8uY29tcGxldGVkKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cblxuXG5jb25zb2xlLmxvZyh1c2VyKTtcblxuXG5jb25zb2xlLmxvZyhKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHVzZXIpKSk7XG5cbnNldEN1cnJlbnRVc2VyKHVzZXIpO1xuc2V0Q3VycmVudFByb2plY3QoQ3VycmVudFVzZXIucHJvamVjdEFyclswXSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwKCl7XG4gICAgc2V0dXBBZGRCdXR0b25zKCk7XG4gICAgc2V0dXBQb3B1cEJ1dHRvbnMoKTtcblxuXG59XG5cblxuXG5mdW5jdGlvbiBzZXR1cEFkZEJ1dHRvbnMoKXtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcbiAgICAgICAgICAgIGRpc3BsYXlQb3B1cChhZGRQcm9qZWN0UG9wdXAsIGJhY2tkcm9wKTtcbiAgICB9KTtcblxuICAgIGFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xuICAgICAgICAgICAgZGlzcGxheVBvcHVwKGFkZFRvZG9Qb3B1cCwgYmFja2Ryb3ApO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXR1cFBvcHVwQnV0dG9ucygpe1xuICAgIGxldCBhZGRUb2RvQ29uZmlybUJ1dHRvbiA9IGFkZFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1cIik7XG4gICAgbGV0IGFkZFRvZG9DYW5jZWxCdXR0b24gPSBhZGRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG5cbiAgICBhZGRUb2RvQ2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGhpZGVQb3B1cChhZGRUb2RvUG9wdXAsIGJhY2tkcm9wKTtcbiAgICB9KTtcblxuICAgIGFkZFRvZG9Db25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGxldCB0aXRsZSA9IGFkZFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC10aXRsZVwiKS52YWx1ZTtcblxuICAgICAgICBpZihjdXJyZW50UHJvamVjdC5nZXRUb2RvSWRCeVRpdGxlKHRpdGxlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvcihhZGRUb2RvUG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiVGhpcyBUaXRsZSBBbHJlYWR5IEV4aXN0cyFcIik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZih0aXRsZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yKGFkZFRvZG9Qb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJJdCBNdXN0IEhhdmUgQSBUaXRsZSFcIik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBkaXNwbGF5RXJyb3IoYWRkVG9kb1BvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIlwiKTtcblxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBhZGRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICAgIGxldCBkdWVEYXRlID0gYWRkVG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LWR1ZURhdGVcIikudmFsdWU7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGFkZFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC1wcmlvcml0eVwiKS52YWx1ZTtcbiAgICBcbiAgICAgICAgY3VycmVudFByb2plY3QuY3JlYXRlVG9kbyh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LCBmYWxzZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVU0VSJywgSlNPTi5zdHJpbmdpZnkoQ3VycmVudFVzZXIpKTtcbiAgICAgICAgaGlkZVBvcHVwKGFkZFRvZG9Qb3B1cCwgYmFja2Ryb3ApO1xuICAgICAgICBkaXNwbGF5VG9kb3MoY3VycmVudFByb2plY3QsIHRvZG9Db250YWluZXIsIHRvZG9UZW1wbGF0ZSk7XG4gICAgfSk7XG5cblxuICAgIGxldCBhZGRQcm9qZWN0Q29uZmlybUJ1dHRvbiA9IGFkZFByb2plY3RQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1cIik7XG4gICAgbGV0IGFkZFByb2plY3RDYW5jZWxCdXR0b24gPSBhZGRQcm9qZWN0UG9wdXAucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG5cbiAgICBhZGRQcm9qZWN0Q2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGhpZGVQb3B1cChhZGRQcm9qZWN0UG9wdXAsIGJhY2tkcm9wKTtcbiAgICB9KTtcblxuICAgIGFkZFByb2plY3RDb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGxldCB0aXRsZSA9IGFkZFByb2plY3RQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC10aXRsZVwiKS52YWx1ZTtcblxuICAgICAgICBpZihDdXJyZW50VXNlci5wcm9qZWN0SWRXaXRoVGl0bGUodGl0bGUpICE9PSAtMSkge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yKGFkZFByb2plY3RQb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJUaGlzIFRpdGxlIEFscmVhZHkgRXhpc3RzIVwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmKHRpdGxlID09PSBcIlwiKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoYWRkUHJvamVjdFBvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIkl0IE11c3QgSGF2ZSBBIFRpdGxlIVwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXlFcnJvcihhZGRQcm9qZWN0UG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiXCIpO1xuXG4gICAgICAgIEN1cnJlbnRVc2VyLmNyZWF0ZVByb2plY3QodGl0bGUpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVNFUicsIEpTT04uc3RyaW5naWZ5KEN1cnJlbnRVc2VyKSk7XG4gICAgICAgIGhpZGVQb3B1cChhZGRQcm9qZWN0UG9wdXAsIGJhY2tkcm9wKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKHVzZXIscHJvamVjdENvbnRhaW5lcixwcm9qZWN0VGVtcGxhdGUpO1xuICAgIH0pO1xuXG4gICAgbGV0IGVkaXRQcm9qZWN0Q29uZmlybUJ1dHRvbiA9IGVkaXRQcm9qZWN0UG9wdXAucXVlcnlTZWxlY3RvcihcIi5jb25maXJtXCIpO1xuICAgIGxldCBlZGl0UHJvamVjdENhbmNlbEJ1dHRvbiA9IGVkaXRQcm9qZWN0UG9wdXAucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG5cbiAgICBlZGl0UHJvamVjdENhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICBoaWRlUG9wdXAoZWRpdFByb2plY3RQb3B1cCwgYmFja2Ryb3ApO1xuICAgIH0pO1xuXG4gICAgZWRpdFByb2plY3RDb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGxldCB0aXRsZSA9IGVkaXRQcm9qZWN0UG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtdGl0bGVcIikudmFsdWU7XG5cbiAgICAgICAgaWYoQ3VycmVudFVzZXIucHJvamVjdElkV2l0aFRpdGxlKHRpdGxlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvcihlZGl0UHJvamVjdFBvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIlRoaXMgVGl0bGUgQWxyZWFkeSBFeGlzdHMhXCIpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYodGl0bGUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvcihlZGl0UHJvamVjdFBvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIkl0IE11c3QgSGF2ZSBBIFRpdGxlIVwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXlFcnJvcihlZGl0UHJvamVjdFBvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIlwiKTtcblxuICAgICAgICBcbiAgICAgICAgQ3VycmVudFVzZXIucHJvamVjdFdpdGhUaXRsZShlZGl0UHJvamVjdFBvcHVwLmRhdGFzZXQudGl0bGUpLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVU0VSJywgSlNPTi5zdHJpbmdpZnkoQ3VycmVudFVzZXIpKTtcbiAgICAgICAgaGlkZVBvcHVwKGVkaXRQcm9qZWN0UG9wdXAsIGJhY2tkcm9wKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKHVzZXIscHJvamVjdENvbnRhaW5lcixwcm9qZWN0VGVtcGxhdGUpO1xuICAgIH0pO1xuXG5cbiAgICBsZXQgZWRpdFRvZG9Db25maXJtQnV0dG9uID0gZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1cIik7XG4gICAgbGV0IGVkaXRUb2RvQ2FuY2VsQnV0dG9uID0gZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcblxuICAgIGVkaXRUb2RvQ2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGhpZGVQb3B1cChlZGl0VG9kb1BvcHVwLCBiYWNrZHJvcCk7XG4gICAgfSk7XG5cbiAgICBlZGl0VG9kb0NvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgbGV0IHRpdGxlID0gZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC10aXRsZVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC1kZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LWR1ZURhdGVcIikudmFsdWU7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtcHJpb3JpdHlcIikudmFsdWU7XG5cblxuICAgICAgICBpZihjdXJyZW50UHJvamVjdC5nZXRUb2RvSWRCeVRpdGxlKHRpdGxlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGlmKHRpdGxlICE9PSBlZGl0VG9kb1BvcHVwLmRhdGFzZXQudGl0bGUpe1xuICAgICAgICAgICAgZGlzcGxheUVycm9yKGVkaXRUb2RvUG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiVGhpcyBUaXRsZSBBbHJlYWR5IEV4aXN0cyFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodGl0bGUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvcihlZGl0VG9kb1BvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIkl0IE11c3QgSGF2ZSBBIFRpdGxlIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkaXNwbGF5RXJyb3IoZWRpdFRvZG9Qb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJcIik7XG5cbiAgICAgICAgY29uc29sZS5sb2coZWRpdFRvZG9Qb3B1cC5kYXRhc2V0LnRpdGxlKTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QudG9kb1dpdGhUaXRsZShlZGl0VG9kb1BvcHVwLmRhdGFzZXQudGl0bGUpKTtcblxuICAgICAgICBsZXQgZWRpdGVkVG9kbyA9IGN1cnJlbnRQcm9qZWN0LnRvZG9XaXRoVGl0bGUoZWRpdFRvZG9Qb3B1cC5kYXRhc2V0LnRpdGxlKTtcblxuICAgICAgICBlZGl0ZWRUb2RvLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIGVkaXRlZFRvZG8uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgZWRpdGVkVG9kby5kdWVEYXRlID0gZHVlRGF0ZTtcblxuXG4gICAgICAgIGVkaXRlZFRvZG8ucHJpb3JpdHkgPSBwcmlvcml0eTtcblxuICAgICAgICBoaWRlUG9wdXAoZWRpdFRvZG9Qb3B1cCwgYmFja2Ryb3ApO1xuXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LnNvcnRUb2RvcygpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVNFUicsIEpTT04uc3RyaW5naWZ5KEN1cnJlbnRVc2VyKSk7XG4gICAgICAgIGRpc3BsYXlUb2RvcyhjdXJyZW50UHJvamVjdCx0b2RvQ29udGFpbmVyLHRvZG9UZW1wbGF0ZSk7XG4gICAgfSk7XG4gICAgXG5cblxufVxuXG5cblxuIiwiXG5leHBvcnQgY29uc3QgdG9kb0l0ZW1GYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCkgPT57XG4gICAgcmV0dXJue1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBjb21wbGV0ZWRcbiAgICB9O1xufTtcblxuXG5leHBvcnQgY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUpID0+e1xuICAgIGxldCB0b2RvQXJyID0gW107XG5cbiAgICBjb25zdCBhZGRUb2RvID0gKHRvZG9JdGVtKSA9PntcbiAgICAgICAgdG9kb0Fyci5wdXNoKHRvZG9JdGVtKTtcbiAgICAgICAgc29ydFRvZG9zKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNvcnRUb2RvcyA9ICgpPT57XG4gICAgICAgIHRvZG9BcnIuc29ydChzb3J0Rm4pO1xuICAgICAgICBcbiAgICB9O1xuXG4gICAgY29uc3Qgc29ydEZuID0gKGEsYikgPT57XG4gICAgICAgIGlmKGEucHJpb3JpdHkgPCBiLnByaW9yaXR5KSByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpID0+e1xuICAgICAgICBpZihjb21wbGV0ZWQgPT09IG51bGwgfHwgY29tcGxldGVkID09PSB1bmRlZmluZWQpIGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgbmV3VG9kb0l0ZW0gPSB0b2RvSXRlbUZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKTtcbiAgICAgICAgYWRkVG9kbyhuZXdUb2RvSXRlbSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSAodG9kb0l0ZW0pID0+e1xuICAgICAgICBsZXQgaWQgPSBnZXRUb2RvSWQodG9kb0l0ZW0pO1xuICAgICAgICBpZihpZCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIHRvZG9BcnIuc3BsaWNlKGlkLCAxKTtcbiAgICB9OyAgIFxuXG4gICAgY29uc3QgcmVtb3ZlVG9kb0J5VGl0bGUgPSAodGl0bGUpID0+e1xuICAgICAgICBsZXQgdG9kbyA9IHRvZG9BcnIuZmluZChlbGVtZW50ID0+IGVsZW1lbnQudGl0bGUgPT09IHRpdGxlKTtcbiAgICAgICAgaWYodG9kbyA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIHJlbW92ZVRvZG8odG9kbyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFRvZG9JZCA9ICh0b2RvSXRlbSkgPT57XG4gICAgICAgIHJldHVybiB0b2RvQXJyLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQudGl0bGUgPT09IHRvZG9JdGVtLnRpdGxlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VG9kb0lkQnlUaXRsZSA9ICh0aXRsZSkgPT57XG4gICAgICAgIHJldHVybiB0b2RvQXJyLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQudGl0bGUgPT09IHRpdGxlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdG9kb1dpdGhUaXRsZSA9ICh0aXRsZSkgPT57XG4gICAgICAgIHJldHVybiB0b2RvQXJyLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LnRpdGxlID09PSB0aXRsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJue1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgdG9kb0FycixcbiAgICAgICAgYWRkVG9kbyxcbiAgICAgICAgcmVtb3ZlVG9kbyxcbiAgICAgICAgY3JlYXRlVG9kbyxcbiAgICAgICAgZ2V0VG9kb0lkQnlUaXRsZSxcbiAgICAgICAgcmVtb3ZlVG9kb0J5VGl0bGUsXG4gICAgICAgIHRvZG9XaXRoVGl0bGUsXG4gICAgICAgIHNvcnRUb2RvcyxcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZXJGYWN0b3J5ID0gKHVzZXJuYW1lKSA9PntcbiAgICBsZXQgcHJvamVjdEFyciA9W107XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3RJdGVtKSA9PntcbiAgICAgICAgcHJvamVjdEFyci5wdXNoKHByb2plY3RJdGVtKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAodGl0bGUpID0+e1xuICAgICAgICBhZGRQcm9qZWN0KHByb2plY3RGYWN0b3J5KHRpdGxlKSk7ICAgICAgICBcbiAgICB9O1xuXG4gICAgY29uc3QgcHJvamVjdFdpdGhUaXRsZSA9IChwcm9qZWN0TmFtZSkgPT57XG4gICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdEFyci5maW5kKGVsZW1lbnQgPT5lbGVtZW50LnRpdGxlID09PSBwcm9qZWN0TmFtZSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0SWRXaXRoVGl0bGUgPSAocHJvamVjdE5hbWUpID0+e1xuICAgICAgICBsZXQgaWQgPSBwcm9qZWN0QXJyLmZpbmRJbmRleChlbGVtZW50ID0+ZWxlbWVudC50aXRsZSA9PT0gcHJvamVjdE5hbWUpO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfTtcblxuXG4gICAgY29uc3QgY3JlYXRlVG9kbyA9IChwcm9qZWN0VGl0bGUsIHRvZG9UaXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpID0+e1xuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RXaXRoVGl0bGUocHJvamVjdFRpdGxlKTtcbiAgICAgICAgaWYocHJvamVjdCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShwcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0LmNyZWF0ZVRvZG8odG9kb1RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFRvZG8gPSAocHJvamVjdFRpdGxlLCB0b2RvSXRlbSkgPT57XG4gICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdFdpdGhUaXRsZShwcm9qZWN0VGl0bGUpO1xuICAgICAgICBpZihwcm9qZWN0ID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgcHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHByb2plY3RUaXRsZSk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3QuYWRkVG9kbyh0b2RvSXRlbSk7XG4gICAgfTtcblxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0SXRlbSkgPT57XG4gICAgICAgIGxldCBpZCA9IGdldFRvZG9JZChwcm9qZWN0SXRlbSk7XG4gICAgICAgIGlmKGlkID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgcHJvamVjdEFyci5zcGxpY2UoaWQsIDEpO1xuICAgIH07ICAgXG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0QnlUaXRsZSA9ICh0aXRsZSkgPT57XG4gICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdEFyci5maW5kKHByb2plY3QgPT4gcHJvamVjdC50aXRsZSA9PT0gdGl0bGUpO1xuICAgICAgICBpZihwcm9qZWN0ID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUb2RvSWQgPSAocHJvamVjdEl0ZW0pID0+e1xuICAgICAgICByZXR1cm4gcHJvamVjdEFyci5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50LnRpdGxlID09PSBwcm9qZWN0SXRlbS50aXRsZSk7XG4gICAgfTtcblxuICAgIHJldHVybntcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIHByb2plY3RBcnIsXG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIGNyZWF0ZVByb2plY3QsXG4gICAgICAgIHJlbW92ZVByb2plY3QsXG4gICAgICAgIGNyZWF0ZVRvZG8sXG4gICAgICAgIGFkZFRvZG8sXG4gICAgICAgIHByb2plY3RXaXRoVGl0bGUsXG4gICAgICAgIHByb2plY3RJZFdpdGhUaXRsZSxcbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ5VGl0bGVcbiAgICB9O1xufVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==