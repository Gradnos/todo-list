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
                if(_setup__WEBPACK_IMPORTED_MODULE_0__.currentProject.title === project.title) (0,_setup__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(user.projectArr[user.projectArr.length-1]);
                console.log(JSON.stringify(_setup__WEBPACK_IMPORTED_MODULE_0__.CurrentUser));
                localStorage.setItem('USER', JSON.stringify(_setup__WEBPACK_IMPORTED_MODULE_0__.CurrentUser));
                displayProjects(user, ProjectContainer, projectTemplate);
                if(user.projectArr.length > 0) SelectedProjectChangeStyle(_setup__WEBPACK_IMPORTED_MODULE_0__.currentProject);
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

    if(user.projectArr.length > 0) SelectedProjectChangeStyle(_setup__WEBPACK_IMPORTED_MODULE_0__.currentProject);
}

function displayTodos(project, todoContainer, todoTemplate){
    
    todoContainer.innerHTML = "";
    if(project === undefined) return;

    let priorityColors = ["--r", "--b", "--g"];


    let todoArr = project.todoArr;
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

    if (!project) return console.log("error");

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
        setCurrentProject(CurrentUser.projectWithTitle(title));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxRQUFRLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksVUFBVSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFB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QUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsUUFBUSw0REFBUzs7QUFFakI7QUFDQTtBQUNBLFFBQVEsK0RBQVk7QUFDcEIsS0FBSztBQUNMOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN09PO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5RnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2V0dXAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9PYmplY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0NFRFJJQyBkZW1vLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vVGlsdFdhcnAtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiICAgIDpyb290e1xcbiAgICAgICAgLS1kYXJrOiAjMTYyMDVFO1xcbiAgICAgICAgLS1taWQ6ICMzNjNFODg7XFxuICAgICAgICAtLWxpZ2h0OiAjNTc1RTlCO1xcbiAgICAgICAgLS1hY2NlbnQ6ICM1QzZERkY7XFxuICAgICAgICAtLXI6ICNGRjc0NzQ7XFxuICAgICAgICAtLWc6ICM0RUVGQTM7XFxuICAgICAgICAtLWI6ICM0M0M3RkY7XFxuICAgICAgICAtLXc6ICNjOWQwZmE7XFxuICAgIH1cXG5cXG4gICAgOjpzZWxlY3Rpb257XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcblxcblxcbiAgICBAZm9udC1mYWNlIHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnY2VkcmljJztcXG4gICAgICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7IFxcbiAgICB9XFxuXFxuICAgIEBmb250LWZhY2Uge1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICd0aWx0V3JhcCc7XFxuICAgICAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpOyBcXG4gICAgfVxcblxcblxcbiAgICAqe1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICd0aWx0V3JhcCc7XFxuICAgIH1cXG5cXG4gICAgaHRtbCxcXG4gICAgYm9keXtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICBib2R5e1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG5cXG4gICAgLm5vZGlzcGxheXtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgfVxcblxcbiAgICAuY29udGVudHtcXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgICAgICBwYWRkaW5nOiAycmVtIDJyZW0gMXJlbSAycmVtO1xcbiAgICB9XFxuXFxuICAgIGF7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdyk7XFxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgICAgICAgcGFkZGluZzogMC4xcmVtIDAuMnJlbTtcXG4gICAgfVxcblxcbiAgICBhOmhvdmVye1xcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0M0M3RkY7XFxuICAgIH1cXG5cXG4gICAgZm9vdGVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0c3tcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXG4gICAgICAgIGZsZXg6Mi41O1xcbiAgICAgICAgZ2FwOjE1cHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXAgOiAxNXB4O1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwIDogMTVweDtcXG4gICAgfVxcblxcblxcblxcbiAgICBzdmd7XFxuICAgICAgICBoZWlnaHQ6IDEuN3JlbTtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWRpdntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdyk7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3JkZXIgc2NhbGU7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtZGl2LnNlbGVjdGVke1xcbiAgICAgICAgd2lkdGg6IDg1JTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIH1cXG5cXG5cXG4gICAgLnByb2plY3QtZGl2IC5wcm9qZWN0LXRpdGxle1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1kaXY6bm90KC5zZWxlY3RlZCk6aG92ZXJ7XFxuICAgICAgICB3aWR0aDogODIlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCA0MCwgMTQ2KTtcXG4gICAgfVxcblxcblxcbiAgICAucHJvamVjdC1kaXYgc3BhbntcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWRpdntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdyk7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZGl2Li0tcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXIpO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWRpdi4tLWd7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nKTtcXG4gICAgfVxcblxcbiAgICAudG9kby1kaXYuLS1ie1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYik7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZGl2LmNvbXBsZXRlZHtcXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjYpO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWRpdiAqe1xcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgfVxcblxcbiAgICAudG9kby1kaXYgLnRvZG8tdGl0bGV7XFxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgICAgIGNvbG9yOiByZ2JhKDIzLCAwLCA3OCwgMC45KTtcXG4gICAgfVxcblxcbiAgICAudG9kby1kaXYgYnV0dG9ue1xcbiAgICAgICAgZmlsdGVyOm9wYWNpdHkoMC41KTtcXG4gICAgfVxcblxcblxcblxcblxcbiAgICAudG9kby1kaXYgLmxlZnQtc2lkZXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWRpdiAucmlnaHQtc2lkZXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWRpdiAudG9kby1kdWVEYXRle1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICAgICAgd2lkdGg6IDExMHB4O1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbntcXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoODIlKSBzZXBpYSgzJSkgc2F0dXJhdGUoMjc5NSUpIGh1ZS1yb3RhdGUoMTk2ZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDk2JSk7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuXFxuICAgIC5lZGl0OmhvdmVye1xcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoNjQlKSBzZXBpYSg5OCUpIHNhdHVyYXRlKDEzNDclKSBodWUtcm90YXRlKDE3MGRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCgxMDQlKSBkcm9wLXNoYWRvdygwIDAgMC4zcmVtIGJsYWNrKTtcXG4gICAgfVxcblxcbiAgICAuZGVsZXRlOmhvdmVye1xcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoNjMlKSBzZXBpYSg3MiUpIHNhdHVyYXRlKDI1OTclKSBodWUtcm90YXRlKDMxNmRlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCgxMDQlKSAgZHJvcC1zaGFkb3coMCAwIDAuM3JlbSBibGFjayk7XFxuICAgIH1cXG5cXG4gICAgLmFkZC1idXR0b257XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5hZGQtYnV0dG9uOmhvdmVye1xcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC43NXJlbSByZWQpO1xcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoNjQlKSBzZXBpYSg5OCUpIHNhdHVyYXRlKDEzNDclKSBodWUtcm90YXRlKDE3MGRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCgxMDQlKSBkcm9wLXNoYWRvdygwIDAgMC4zcmVtIGJsYWNrKTtcXG4gICAgfVxcblxcbiAgICAudG9kb3N7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWQpO1xcbiAgICAgICAgZmxleDo2O1xcbiAgICAgICAgZ2FwOjE1cHg7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9ue1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICBoMXtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICdjZWRyaWMnO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgICAgIG1hcmdpbjowO1xcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13KTtcXG4gICAgfVxcblxcbiAgICBoMntcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13KTtcXG4gICAgICAgIG1hcmdpbjogMTVweCAwIDAgMCA7XFxuICAgIH1cXG5cXG4gICAgaDN7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIH1cXG5cXG4gICAgLmJ1dHRvbi1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6MTVweDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgfVxcblxcbiAgICAucG9wdXB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdyk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHggNTBweDtcXG4gICAgICAgIGdhcDoyMHB4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHotaW5kZXg6IDEwO1xcbiAgICB9XFxuXFxuICAgIC5wb3B1cCBidXR0b257XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICBmaWx0ZXI6IG5vbmU7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdyk7XFxuICAgIH1cXG5cXG4gICAgaW5wdXQ6bm90KFt0eXBlPWNoZWNrYm94XSl7XFxuICAgICAgICBvdXRsaW5lLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXcpO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIH1cXG5cXG5cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF17XFxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpOztcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgZm9udDogaW5oZXJpdDtcXG4gICAgICAgIGNvbG9yOiByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuNik7XFxuICAgICAgICBib3JkZXI6IDAuMTVlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjBlbSk7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuICAgIFxcbiAgICBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2JhKDAsIDAsIDAsIDAuNzE5KTtcXG4gICAgICAgIFxcbiAgICAgIH1cXG4gICAgICBcXG5cXG4gICAgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcblxcbiAgICBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG1heCgycHgsIDAuMTVlbSkgc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICAgICAgb3V0bGluZS1vZmZzZXQ6IG1heCgycHgsIDAuMTVlbSk7XFxuICAgIH1cXG4gICAgICBcXG4gICAgXFxuICAgIHNlbGVjdHtcXG4gICAgICAgIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdyk7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDIwcHgpO1xcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLnRpdGxlLWxhYmVsOjphZnRlcntcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCIqXFxcIjtcXG4gICAgfVxcblxcbiAgICAucG9wdXAgYnV0dG9uOmhvdmVye1xcbiAgICAgICAgZmlsdGVyOmJyaWdodG5lc3MoMC44KTtcXG4gICAgfVxcblxcbiAgICAucG9wdXAgYnV0dG9uLmNvbmZpcm17XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nKTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgfVxcblxcbiAgICAucG9wdXAgYnV0dG9uLmNhbmNlbHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXIpO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICB9XFxuXFxuICAgIC5pbnB1dC13cmFwcGVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcbiAgICB9XFxuXFxuICAgIC5iYWNrZHJvcHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMCk7XFxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgICAgICAgei1pbmRleDogNTtcXG4gICAgfVxcblxcbiAgICAuYmFja2Ryb3AudmlzaWJsZXtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOnZpc2libGU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgICBhbmltYXRpb246IGZhZGUtaW4gNTAwbXMgZm9yd2FyZHM7XFxuICAgIH1cXG5cXG4gICAgLnBvcHVwLnZpc2libGV7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlLWluIDUwMG1zIGZvcndhcmRzO1xcbiAgICAgICAgYW5pbWF0aW9uOiBzbGlkZSB1cCA1MDBtcyBmb3J3YXJkcztcXG4gICAgfVxcblxcbiAgICAuZXJyb3J7XFxuICAgICAgICBjb2xvcjogdmFyKC0tcik7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgICB9XFxuXFxuICAgIEBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAgICAgICAwJXtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgMTAwJXtcXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuXFxuICAgIEBrZXlmcmFtZXMgZmFkZS1vdXQge1xcbiAgICAgICAgMCV7XFxuICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDEwMCV7XFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBAa2V5ZnJhbWVzIHNsaWRlLXVwIHtcXG4gICAgICAgIDAle1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG4gICAgICAgIH0gICAgXFxuXFxuICAgICAgICAxMDAle1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICAgICAgICB9XFxuXFxuXFxuICAgIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJJQUFJO1FBQ0ksZUFBZTtRQUNmLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixZQUFZO1FBQ1osWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osdUJBQXVCO0lBQzNCOzs7SUFHQTtRQUNJLHFCQUFxQjtRQUNyQiwrREFBaUQ7SUFDckQ7O0lBRUE7UUFDSSx1QkFBdUI7UUFDdkIsK0RBQXFEO0lBQ3pEOzs7SUFH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a0JBQWtCO1FBQ2xCLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixTQUFTO1FBQ1QsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2YsV0FBVztRQUNYLFlBQVk7UUFDWiw4QkFBOEI7UUFDOUIseUJBQXlCO1FBQ3pCLFVBQVU7SUFDZDs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0Qiw4QkFBOEI7UUFDOUIsaUNBQWlDO0lBQ3JDOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGlDQUFpQztRQUNqQyxrQ0FBa0M7SUFDdEM7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsNkJBQTZCO1FBQzdCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJO1lBQ0ksVUFBVTtRQUNkOztRQUVBO1lBQ0ksVUFBVTtRQUNkO0lBQ0o7OztJQUdBO1FBQ0k7WUFDSSxVQUFVO1FBQ2Q7O1FBRUE7WUFDSSxVQUFVO1FBQ2Q7SUFDSjs7SUFFQTtRQUNJO1lBQ0ksMkJBQTJCO1FBQy9COztRQUVBO1lBQ0kseUJBQXlCO1FBQzdCOzs7SUFHSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIgICAgOnJvb3R7XFxuICAgICAgICAtLWRhcms6ICMxNjIwNUU7XFxuICAgICAgICAtLW1pZDogIzM2M0U4ODtcXG4gICAgICAgIC0tbGlnaHQ6ICM1NzVFOUI7XFxuICAgICAgICAtLWFjY2VudDogIzVDNkRGRjtcXG4gICAgICAgIC0tcjogI0ZGNzQ3NDtcXG4gICAgICAgIC0tZzogIzRFRUZBMztcXG4gICAgICAgIC0tYjogIzQzQzdGRjtcXG4gICAgICAgIC0tdzogI2M5ZDBmYTtcXG4gICAgfVxcblxcbiAgICA6OnNlbGVjdGlvbntcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuXFxuXFxuICAgIEBmb250LWZhY2Uge1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICdjZWRyaWMnO1xcbiAgICAgICAgc3JjOiB1cmwoJy4vQ0VEUklDXFxcXCBkZW1vLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTsgXFxuICAgIH1cXG5cXG4gICAgQGZvbnQtZmFjZSB7XFxuICAgICAgICBmb250LWZhbWlseTogJ3RpbHRXcmFwJztcXG4gICAgICAgIHNyYzogdXJsKCcuL1RpbHRXYXJwLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpOyBcXG4gICAgfVxcblxcblxcbiAgICAqe1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICd0aWx0V3JhcCc7XFxuICAgIH1cXG5cXG4gICAgaHRtbCxcXG4gICAgYm9keXtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICBib2R5e1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG5cXG4gICAgLm5vZGlzcGxheXtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgfVxcblxcbiAgICAuY29udGVudHtcXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgICAgICBwYWRkaW5nOiAycmVtIDJyZW0gMXJlbSAycmVtO1xcbiAgICB9XFxuXFxuICAgIGF7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdyk7XFxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgICAgICAgcGFkZGluZzogMC4xcmVtIDAuMnJlbTtcXG4gICAgfVxcblxcbiAgICBhOmhvdmVye1xcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0M0M3RkY7XFxuICAgIH1cXG5cXG4gICAgZm9vdGVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0c3tcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXG4gICAgICAgIGZsZXg6Mi41O1xcbiAgICAgICAgZ2FwOjE1cHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXAgOiAxNXB4O1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwIDogMTVweDtcXG4gICAgfVxcblxcblxcblxcbiAgICBzdmd7XFxuICAgICAgICBoZWlnaHQ6IDEuN3JlbTtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWRpdntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdyk7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3JkZXIgc2NhbGU7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtZGl2LnNlbGVjdGVke1xcbiAgICAgICAgd2lkdGg6IDg1JTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIH1cXG5cXG5cXG4gICAgLnByb2plY3QtZGl2IC5wcm9qZWN0LXRpdGxle1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1kaXY6bm90KC5zZWxlY3RlZCk6aG92ZXJ7XFxuICAgICAgICB3aWR0aDogODIlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCA0MCwgMTQ2KTtcXG4gICAgfVxcblxcblxcbiAgICAucHJvamVjdC1kaXYgc3BhbntcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWRpdntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdyk7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZGl2Li0tcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXIpO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWRpdi4tLWd7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nKTtcXG4gICAgfVxcblxcbiAgICAudG9kby1kaXYuLS1ie1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYik7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZGl2LmNvbXBsZXRlZHtcXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjYpO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWRpdiAqe1xcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgfVxcblxcbiAgICAudG9kby1kaXYgLnRvZG8tdGl0bGV7XFxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgICAgIGNvbG9yOiByZ2JhKDIzLCAwLCA3OCwgMC45KTtcXG4gICAgfVxcblxcbiAgICAudG9kby1kaXYgYnV0dG9ue1xcbiAgICAgICAgZmlsdGVyOm9wYWNpdHkoMC41KTtcXG4gICAgfVxcblxcblxcblxcblxcbiAgICAudG9kby1kaXYgLmxlZnQtc2lkZXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWRpdiAucmlnaHQtc2lkZXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWRpdiAudG9kby1kdWVEYXRle1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICAgICAgd2lkdGg6IDExMHB4O1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbntcXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoODIlKSBzZXBpYSgzJSkgc2F0dXJhdGUoMjc5NSUpIGh1ZS1yb3RhdGUoMTk2ZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDk2JSk7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuXFxuICAgIC5lZGl0OmhvdmVye1xcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoNjQlKSBzZXBpYSg5OCUpIHNhdHVyYXRlKDEzNDclKSBodWUtcm90YXRlKDE3MGRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCgxMDQlKSBkcm9wLXNoYWRvdygwIDAgMC4zcmVtIGJsYWNrKTtcXG4gICAgfVxcblxcbiAgICAuZGVsZXRlOmhvdmVye1xcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoNjMlKSBzZXBpYSg3MiUpIHNhdHVyYXRlKDI1OTclKSBodWUtcm90YXRlKDMxNmRlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCgxMDQlKSAgZHJvcC1zaGFkb3coMCAwIDAuM3JlbSBibGFjayk7XFxuICAgIH1cXG5cXG4gICAgLmFkZC1idXR0b257XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5hZGQtYnV0dG9uOmhvdmVye1xcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC43NXJlbSByZWQpO1xcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoNjQlKSBzZXBpYSg5OCUpIHNhdHVyYXRlKDEzNDclKSBodWUtcm90YXRlKDE3MGRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCgxMDQlKSBkcm9wLXNoYWRvdygwIDAgMC4zcmVtIGJsYWNrKTtcXG4gICAgfVxcblxcbiAgICAudG9kb3N7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWQpO1xcbiAgICAgICAgZmxleDo2O1xcbiAgICAgICAgZ2FwOjE1cHg7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9ue1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICBoMXtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICdjZWRyaWMnO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgICAgIG1hcmdpbjowO1xcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13KTtcXG4gICAgfVxcblxcbiAgICBoMntcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13KTtcXG4gICAgICAgIG1hcmdpbjogMTVweCAwIDAgMCA7XFxuICAgIH1cXG5cXG4gICAgaDN7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIH1cXG5cXG4gICAgLmJ1dHRvbi1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6MTVweDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgfVxcblxcbiAgICAucG9wdXB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdyk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHggNTBweDtcXG4gICAgICAgIGdhcDoyMHB4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHotaW5kZXg6IDEwO1xcbiAgICB9XFxuXFxuICAgIC5wb3B1cCBidXR0b257XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICBmaWx0ZXI6IG5vbmU7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdyk7XFxuICAgIH1cXG5cXG4gICAgaW5wdXQ6bm90KFt0eXBlPWNoZWNrYm94XSl7XFxuICAgICAgICBvdXRsaW5lLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXcpO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIH1cXG5cXG5cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF17XFxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpOztcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgZm9udDogaW5oZXJpdDtcXG4gICAgICAgIGNvbG9yOiByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuNik7XFxuICAgICAgICBib3JkZXI6IDAuMTVlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjBlbSk7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuICAgIFxcbiAgICBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2JhKDAsIDAsIDAsIDAuNzE5KTtcXG4gICAgICAgIFxcbiAgICAgIH1cXG4gICAgICBcXG5cXG4gICAgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcblxcbiAgICBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG1heCgycHgsIDAuMTVlbSkgc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICAgICAgb3V0bGluZS1vZmZzZXQ6IG1heCgycHgsIDAuMTVlbSk7XFxuICAgIH1cXG4gICAgICBcXG4gICAgXFxuICAgIHNlbGVjdHtcXG4gICAgICAgIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdyk7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDIwcHgpO1xcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLnRpdGxlLWxhYmVsOjphZnRlcntcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCIqXFxcIjtcXG4gICAgfVxcblxcbiAgICAucG9wdXAgYnV0dG9uOmhvdmVye1xcbiAgICAgICAgZmlsdGVyOmJyaWdodG5lc3MoMC44KTtcXG4gICAgfVxcblxcbiAgICAucG9wdXAgYnV0dG9uLmNvbmZpcm17XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nKTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgfVxcblxcbiAgICAucG9wdXAgYnV0dG9uLmNhbmNlbHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXIpO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICB9XFxuXFxuICAgIC5pbnB1dC13cmFwcGVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcbiAgICB9XFxuXFxuICAgIC5iYWNrZHJvcHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMCk7XFxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgICAgICAgei1pbmRleDogNTtcXG4gICAgfVxcblxcbiAgICAuYmFja2Ryb3AudmlzaWJsZXtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOnZpc2libGU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgICBhbmltYXRpb246IGZhZGUtaW4gNTAwbXMgZm9yd2FyZHM7XFxuICAgIH1cXG5cXG4gICAgLnBvcHVwLnZpc2libGV7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlLWluIDUwMG1zIGZvcndhcmRzO1xcbiAgICAgICAgYW5pbWF0aW9uOiBzbGlkZSB1cCA1MDBtcyBmb3J3YXJkcztcXG4gICAgfVxcblxcbiAgICAuZXJyb3J7XFxuICAgICAgICBjb2xvcjogdmFyKC0tcik7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgICB9XFxuXFxuICAgIEBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAgICAgICAwJXtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgMTAwJXtcXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuXFxuICAgIEBrZXlmcmFtZXMgZmFkZS1vdXQge1xcbiAgICAgICAgMCV7XFxuICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDEwMCV7XFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBAa2V5ZnJhbWVzIHNsaWRlLXVwIHtcXG4gICAgICAgIDAle1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG4gICAgICAgIH0gICAgXFxuXFxuICAgICAgICAxMDAle1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICAgICAgICB9XFxuXFxuXFxuICAgIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3VycmVudFByb2plY3QsIEN1cnJlbnRVc2VyLCBzZXRDdXJyZW50UHJvamVjdCwgc2V0Q3VycmVudFVzZXIsIGJhY2tkcm9wIH0gZnJvbSBcIi4vc2V0dXBcIjtcblxubGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xubGV0IHByb2plY3RUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10ZW1wbGF0ZVwiKTtcblxuXG5sZXQgZWRpdFByb2plY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1wcm9qZWN0LXBvcHVwXCIpO1xubGV0IGVkaXRUb2RvUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdG9kby1wb3B1cFwiKTtcblxubGV0IGNvbmZpcm1EZWxldGVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybS1kZWxldGUtcG9wdXBcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHModXNlciwgUHJvamVjdENvbnRhaW5lciwgcHJvamVjdFRlbXBsYXRlKXtcbiAgICBsZXQgcHJvamVjdEFyciA9IHVzZXIucHJvamVjdEFycjtcbiAgICBQcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgcHJvamVjdEFyci5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdENsb25lID0gcHJvamVjdFRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgcHJvamVjdENsb25lLmNsYXNzTGlzdC5yZW1vdmUoXCJub2Rpc3BsYXlcIiwgXCJwcm9qZWN0LXRlbXBsYXRlXCIpXG4gICAgICAgIHByb2plY3RDbG9uZS5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIikuaW5uZXJUZXh0ID0gcHJvamVjdC50aXRsZTtcblxuICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gcHJvamVjdENsb25lLnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlXCIpO1xuXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuXG4gICAgICAgICAgICBjb25maXJtRGVsZXRlUG9wdXAucXVlcnlTZWxlY3RvcihcImgzXCIpLmlubmVyVGV4dCA9IGBEZWxldGUgPj4ke3Byb2plY3QudGl0bGV9PDwgP2A7XG4gICAgICAgICAgICBkaXNwbGF5UG9wdXAoY29uZmlybURlbGV0ZVBvcHVwLGJhY2tkcm9wKTtcbiAgICAgICAgICAgIGxldCBjYW5jZWxCdXR0b24gPSBjb25maXJtRGVsZXRlUG9wdXAucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG4gICAgICAgICAgICBsZXQgY29uZmlybUJ1dHRvbiA9IGNvbmZpcm1EZWxldGVQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1cIik7XG4gICAgICAgIFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICAgICAgIGhpZGVQb3B1cChjb25maXJtRGVsZXRlUG9wdXAsYmFja2Ryb3ApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgICAgICBoaWRlUG9wdXAoY29uZmlybURlbGV0ZVBvcHVwLGJhY2tkcm9wKTtcblxuICAgICAgICAgICAgICAgIEN1cnJlbnRVc2VyLnJlbW92ZVByb2plY3RCeVRpdGxlKHByb2plY3QudGl0bGUpO1xuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRQcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0LnRpdGxlKSBzZXRDdXJyZW50UHJvamVjdCh1c2VyLnByb2plY3RBcnJbdXNlci5wcm9qZWN0QXJyLmxlbmd0aC0xXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoQ3VycmVudFVzZXIpKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVNFUicsIEpTT04uc3RyaW5naWZ5KEN1cnJlbnRVc2VyKSk7XG4gICAgICAgICAgICAgICAgZGlzcGxheVByb2plY3RzKHVzZXIsIFByb2plY3RDb250YWluZXIsIHByb2plY3RUZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgaWYodXNlci5wcm9qZWN0QXJyLmxlbmd0aCA+IDApIFNlbGVjdGVkUHJvamVjdENoYW5nZVN0eWxlKGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZWRpdEJ1dHRvbiA9IHByb2plY3RDbG9uZS5xdWVyeVNlbGVjdG9yKFwiLmVkaXRcIik7XG5cbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgZWRpdFByb2plY3RQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC10aXRsZVwiKS52YWx1ZSA9IHByb2plY3QudGl0bGU7XG4gICAgICAgICAgICBlZGl0UHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXRpdGxlXCIpLnBsYWNlaG9sZGVyID0gcHJvamVjdC50aXRsZTtcblxuXG4gICAgICAgICAgICBkaXNwbGF5UG9wdXAoZWRpdFByb2plY3RQb3B1cCxiYWNrZHJvcCk7XG4gICAgICAgICAgICBlZGl0UHJvamVjdFBvcHVwLmRhdGFzZXQudGl0bGUgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICBwcm9qZWN0Q2xvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICBQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDbG9uZSk7XG4gICAgfSk7XG5cbiAgICBpZih1c2VyLnByb2plY3RBcnIubGVuZ3RoID4gMCkgU2VsZWN0ZWRQcm9qZWN0Q2hhbmdlU3R5bGUoY3VycmVudFByb2plY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvZG9zKHByb2plY3QsIHRvZG9Db250YWluZXIsIHRvZG9UZW1wbGF0ZSl7XG4gICAgXG4gICAgdG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGlmKHByb2plY3QgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgbGV0IHByaW9yaXR5Q29sb3JzID0gW1wiLS1yXCIsIFwiLS1iXCIsIFwiLS1nXCJdO1xuXG5cbiAgICBsZXQgdG9kb0FyciA9IHByb2plY3QudG9kb0FycjtcbiAgICB0b2RvQXJyLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGxldCB0b2RvQ2xvbmUgPSB0b2RvVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBsZXQgdG9kb0NoZWNrYm94ID0gdG9kb0Nsb25lLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb21wbGV0ZWRcIik7XG5cblxuICAgICAgICB0b2RvQ2xvbmUuY2xhc3NMaXN0LnJlbW92ZShcIm5vZGlzcGxheVwiLCBcInRvZG8tdGVtcGxhdGVcIilcbiAgICAgICAgdG9kb0Nsb25lLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10aXRsZVwiKS5pbm5lclRleHQgPSB0b2RvLnRpdGxlO1xuICAgICAgICB0b2RvQ2xvbmUucXVlcnlTZWxlY3RvcihcIi50b2RvLWRlc2NyaXB0aW9uXCIpLmlubmVyVGV4dCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgIHRvZG9DbG9uZS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZHVlRGF0ZVwiKS5pbm5lclRleHQgPSB0b2RvLmR1ZURhdGU7XG4gICAgICAgIHRvZG9DaGVja2JveC5jaGVja2VkID0gdG9kby5jb21wbGV0ZWQ7XG5cbiAgICBcbiAgICAgICAgdG9kb0Nsb25lLmNsYXNzTGlzdC5hZGQocHJpb3JpdHlDb2xvcnNbdG9kby5wcmlvcml0eV0pO1xuXG4gICAgICAgIGxldCBkZWxldGVCdXR0b24gPSB0b2RvQ2xvbmUucXVlcnlTZWxlY3RvcihcIi5kZWxldGVcIik7XG5cbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG5cbiAgICAgICAgICAgIGNvbmZpcm1EZWxldGVQb3B1cC5xdWVyeVNlbGVjdG9yKFwiaDNcIikuaW5uZXJUZXh0ID0gYERlbGV0ZSA+PiR7dG9kby50aXRsZX08PCA/YDtcbiAgICAgICAgICAgIGRpc3BsYXlQb3B1cChjb25maXJtRGVsZXRlUG9wdXAsYmFja2Ryb3ApO1xuICAgICAgICAgICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGNvbmZpcm1EZWxldGVQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcbiAgICAgICAgICAgIGxldCBjb25maXJtQnV0dG9uID0gY29uZmlybURlbGV0ZVBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybVwiKTtcbiAgICAgICAgXG4gICAgICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICAgICAgaGlkZVBvcHVwKGNvbmZpcm1EZWxldGVQb3B1cCxiYWNrZHJvcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICAgICAgIGhpZGVQb3B1cChjb25maXJtRGVsZXRlUG9wdXAsYmFja2Ryb3ApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXNkc2Fkc2FkYXNkXCIpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LnJlbW92ZVRvZG9CeVRpdGxlKHRvZG8udGl0bGUpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVU0VSJywgSlNPTi5zdHJpbmdpZnkoQ3VycmVudFVzZXIpKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5VG9kb3MocHJvamVjdCwgdG9kb0NvbnRhaW5lciwgdG9kb1RlbXBsYXRlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBlZGl0QnV0dG9uID0gdG9kb0Nsb25lLnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFwiKTtcblxuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXRpdGxlXCIpLnZhbHVlID0gdG9kby50aXRsZTtcbiAgICAgICAgICAgIGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtdGl0bGVcIikucGxhY2Vob2xkZXIgPSB0b2RvLnRpdGxlO1xuXG4gICAgICAgICAgICBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LWRlc2NyaXB0aW9uXCIpLnZhbHVlID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtZHVlRGF0ZVwiKS52YWx1ZSA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgICAgIGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtcHJpb3JpdHlcIikudmFsdWUgPSB0b2RvLnByaW9yaXR5OyBcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBkaXNwbGF5UG9wdXAoZWRpdFRvZG9Qb3B1cCxiYWNrZHJvcCk7XG4gICAgICAgICAgICBlZGl0VG9kb1BvcHVwLmRhdGFzZXQudGl0bGUgPSB0b2RvLnRpdGxlO1xuXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0b2RvQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgIHRvZG8uY29tcGxldGVkID0gIXRvZG8uY29tcGxldGVkO1xuICAgICAgICAgICAgaWYodG9kby5jb21wbGV0ZWQpIHRvZG9DbG9uZS5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgICAgICAgICAgZWxzZSB0b2RvQ2xvbmUuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgaWYodG9kby5jb21wbGV0ZWQpIHRvZG9DbG9uZS5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgICAgICBlbHNlIHRvZG9DbG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkXCIpO1xuXG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Nsb25lKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdGVkUHJvamVjdENoYW5nZVN0eWxlKHByb2plY3Qpe1xuXG4gICAgaWYgKCFwcm9qZWN0KSByZXR1cm4gY29uc29sZS5sb2coXCJlcnJvclwiKTtcblxuICAgIGxldCB0aXRsZSA9IHByb2plY3QudGl0bGU7XG4gICAgbGV0IHByb2plY3RFbGVtZW50cyA9ICBwcm9qZWN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1kaXZcIik7XG4gICAgcHJvamVjdEVsZW1lbnRzLmZvckVhY2gocHJvamVjdEVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgdGl0bGVFbGVtZW50ID0gcHJvamVjdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpO1xuICAgICAgICBsZXQgcHJvamVjdEVsZW1lbnRUaXRsZSA9IG51bGw7XG4gICAgICAgIGlmKHRpdGxlRWxlbWVudCAhPT0gbnVsbCkgcHJvamVjdEVsZW1lbnRUaXRsZSA9IHRpdGxlRWxlbWVudC5pbm5lclRleHQ7XG5cbiAgICAgICAgaWYocHJvamVjdEVsZW1lbnRUaXRsZSA9PT0gdGl0bGUpe1xuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQb3B1cChwb3B1cEVsZW1lbnQsIGJhY2tkcm9wKXtcbiAgICBwb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlUG9wdXAocG9wdXBFbGVtZW50LCBiYWNrZHJvcCl7XG4gICAgcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xufVxuXG5cblxuXG4gXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUVycm9yKHBvcHVwLCBlcnJvckNsYXNzLCBlcnJvclRleHQpe1xuICAgIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoZXJyb3JDbGFzcykuaW5uZXJUZXh0PWVycm9yVGV4dDtcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHRvZG9JdGVtRmFjdG9yeSwgcHJvamVjdEZhY3RvcnksIHVzZXJGYWN0b3J5IH0gZnJvbSAnLi90b2RvT2JqZWN0cyc7XG5cbmltcG9ydCB7IHNldHVwIH0gZnJvbSAnLi9zZXR1cCc7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi9pY29ucy9mYXZpY29uLnN2Z1wiO1xuXG5cbmxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xubGluay5yZWwgPSAnaWNvbic7XG5saW5rLmhyZWYgPSBJY29uO1xuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcblxuXG5zZXR1cCgpO1xuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgZGlzcGxheVBvcHVwLCBoaWRlUG9wdXAsIGRpc3BsYXlFcnJvciwgZGlzcGxheVRvZG9zLCBTZWxlY3RlZFByb2plY3RDaGFuZ2VTdHlsZSB9IGZyb20gXCIuL2Rpc3BsYXlGdW5jdGlvbnNcIjtcbmltcG9ydCB7IHRvZG9JdGVtRmFjdG9yeSwgcHJvamVjdEZhY3RvcnksIHVzZXJGYWN0b3J5IH0gZnJvbSAnLi90b2RvT2JqZWN0cyc7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfSBmcm9tICcuL2Rpc3BsYXlGdW5jdGlvbnMnO1xuXG5cbmV4cG9ydCBsZXQgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhY2tkcm9wXCIpO1xuXG5sZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XG5sZXQgcHJvamVjdFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRlbXBsYXRlXCIpO1xuXG5cbmxldCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWNvbnRhaW5lclwiKTtcbmxldCB0b2RvVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdGVtcGxhdGVcIik7XG5cblxubGV0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xubGV0IGFkZFByb2plY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1wb3B1cFwiKTtcblxubGV0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvXCIpO1xubGV0IGFkZFRvZG9Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1wb3B1cFwiKTtcblxubGV0IGVkaXRQcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtcHJvamVjdC1wb3B1cFwiKTtcbmxldCBlZGl0VG9kb1BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRvZG8tcG9wdXBcIik7XG5cblxuXG5leHBvcnQgbGV0IEN1cnJlbnRVc2VyO1xuZXhwb3J0IGxldCBjdXJyZW50UHJvamVjdDtcbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50VXNlcih1c2VyKXtcbiAgICBDdXJyZW50VXNlciA9IHVzZXI7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3Qpe1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICBkaXNwbGF5UHJvamVjdHMoQ3VycmVudFVzZXIscHJvamVjdENvbnRhaW5lcixwcm9qZWN0VGVtcGxhdGUpO1xuICAgIGRpc3BsYXlUb2RvcyhjdXJyZW50UHJvamVjdCx0b2RvQ29udGFpbmVyLHRvZG9UZW1wbGF0ZSk7XG4gICAgU2VsZWN0ZWRQcm9qZWN0Q2hhbmdlU3R5bGUoY3VycmVudFByb2plY3QpO1xufTtcblxuXG5sZXQgcmV0cmlldmVkVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdVU0VSJyk7XG5sZXQgdXNlckpzb24gPSBKU09OLnBhcnNlKHJldHJpZXZlZFVzZXIpO1xuY29uc29sZS5sb2coJ1VTRVI6ICcsICk7XG5sZXQgdXNlclxuXG5pZih1c2VySnNvbiA9PT0gbnVsbCl7XG4gICAgdXNlciA9IHVzZXJGYWN0b3J5KFwiR3Vlc3RcIik7XG4gICAgdXNlci5jcmVhdGVUb2RvKFwiR2V0IEEgSm9iXCIsIFwiTGVhcm4gQSBTa2lsbFwiLCBcIldlYi1EZXZlbG9wbWVudFwiLCBcIjIwMjQtMDEtMDFcIiwgMCk7XG4gICAgdXNlci5jcmVhdGVUb2RvKFwiR2V0IEEgSm9iXCIsIFwiQXBwbHkgRm9yIEpvYnNcIiwgXCJcIiwgXCIyMDI0LTA0LTAxXCIsIDEpO1xuICAgIHVzZXIuY3JlYXRlVG9kbyhcIkdldCBBIFdpZmVcIiwgXCJGaW5kIEEgV29tYW5cIiwgXCJVc3VhbGx5IEluIFRoZSBTdHJlZXRzXCIsIFwiMjAyMy0wNy0wNVwiLCAwKTtcbiAgICB1c2VyLmNyZWF0ZVRvZG8oXCJHZXQgQSBXaWZlXCIsIFwiVGFsayBUbyBBIFdvbWFuXCIsIFwiVXNlIFdvcmRzXCIsIFwiMjAyNC0xMi0xMVwiLCAxKTtcbiAgICB1c2VyLmNyZWF0ZVRvZG8oXCJHZXQgQSBXaWZlXCIsIFwiRmluaXNoIFRoaXMgTGlzdFwiLCBcIlwiLCBcIlwiLCAyKTtcbn1lbHNlIHtcbiAgICBcbiAgICB1c2VyID0gdXNlckZhY3RvcnkodXNlckpzb24udXNlcm5hbWUpO1xuICAgIGxldCBwcm9qZWN0QXJyID0gdXNlckpzb24ucHJvamVjdEFycjtcbiAgICBwcm9qZWN0QXJyLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkocHJvamVjdC50aXRsZSk7XG4gICAgICAgIHVzZXIuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgbGV0IHRvZG9BcnIgPSBwcm9qZWN0LnRvZG9BcnI7XG4gICAgICAgIHRvZG9BcnIuZm9yRWFjaCh0b2RvID0+e1xuICAgICAgICAgICAgbmV3UHJvamVjdC5jcmVhdGVUb2RvKHRvZG8udGl0bGUsIHRvZG8uZGVzY3JpcHRpb24sIHRvZG8uZHVlRGF0ZSwgdG9kby5wcmlvcml0eSwgdG9kby5jb21wbGV0ZWQpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuXG5cbmNvbnNvbGUubG9nKHVzZXIpO1xuXG5cbmNvbnNvbGUubG9nKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodXNlcikpKTtcblxuc2V0Q3VycmVudFVzZXIodXNlcik7XG5zZXRDdXJyZW50UHJvamVjdChDdXJyZW50VXNlci5wcm9qZWN0QXJyWzBdKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXAoKXtcbiAgICBzZXR1cEFkZEJ1dHRvbnMoKTtcbiAgICBzZXR1cFBvcHVwQnV0dG9ucygpO1xuXG5cbn1cblxuXG5cbmZ1bmN0aW9uIHNldHVwQWRkQnV0dG9ucygpe1xuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xuICAgICAgICAgICAgZGlzcGxheVBvcHVwKGFkZFByb2plY3RQb3B1cCwgYmFja2Ryb3ApO1xuICAgIH0pO1xuXG4gICAgYWRkVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XG4gICAgICAgICAgICBkaXNwbGF5UG9wdXAoYWRkVG9kb1BvcHVwLCBiYWNrZHJvcCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldHVwUG9wdXBCdXR0b25zKCl7XG4gICAgbGV0IGFkZFRvZG9Db25maXJtQnV0dG9uID0gYWRkVG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybVwiKTtcbiAgICBsZXQgYWRkVG9kb0NhbmNlbEJ1dHRvbiA9IGFkZFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcblxuICAgIGFkZFRvZG9DYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgaGlkZVBvcHVwKGFkZFRvZG9Qb3B1cCwgYmFja2Ryb3ApO1xuICAgIH0pO1xuXG4gICAgYWRkVG9kb0NvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgbGV0IHRpdGxlID0gYWRkVG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXRpdGxlXCIpLnZhbHVlO1xuXG4gICAgICAgIGlmKGN1cnJlbnRQcm9qZWN0LmdldFRvZG9JZEJ5VGl0bGUodGl0bGUpICE9PSAtMSkge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yKGFkZFRvZG9Qb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJUaGlzIFRpdGxlIEFscmVhZHkgRXhpc3RzIVwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmKHRpdGxlID09PSBcIlwiKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoYWRkVG9kb1BvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIkl0IE11c3QgSGF2ZSBBIFRpdGxlIVwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXlFcnJvcihhZGRUb2RvUG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiXCIpO1xuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGFkZFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC1kZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBhZGRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gYWRkVG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXByaW9yaXR5XCIpLnZhbHVlO1xuICAgIFxuICAgICAgICBjdXJyZW50UHJvamVjdC5jcmVhdGVUb2RvKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksIGZhbHNlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VTRVInLCBKU09OLnN0cmluZ2lmeShDdXJyZW50VXNlcikpO1xuICAgICAgICBoaWRlUG9wdXAoYWRkVG9kb1BvcHVwLCBiYWNrZHJvcCk7XG4gICAgICAgIGRpc3BsYXlUb2RvcyhjdXJyZW50UHJvamVjdCwgdG9kb0NvbnRhaW5lciwgdG9kb1RlbXBsYXRlKTtcbiAgICB9KTtcblxuXG4gICAgbGV0IGFkZFByb2plY3RDb25maXJtQnV0dG9uID0gYWRkUHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybVwiKTtcbiAgICBsZXQgYWRkUHJvamVjdENhbmNlbEJ1dHRvbiA9IGFkZFByb2plY3RQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcblxuICAgIGFkZFByb2plY3RDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgaGlkZVBvcHVwKGFkZFByb2plY3RQb3B1cCwgYmFja2Ryb3ApO1xuICAgIH0pO1xuXG4gICAgYWRkUHJvamVjdENvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgbGV0IHRpdGxlID0gYWRkUHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXRpdGxlXCIpLnZhbHVlO1xuXG4gICAgICAgIGlmKEN1cnJlbnRVc2VyLnByb2plY3RJZFdpdGhUaXRsZSh0aXRsZSkgIT09IC0xKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoYWRkUHJvamVjdFBvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIlRoaXMgVGl0bGUgQWxyZWFkeSBFeGlzdHMhXCIpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYodGl0bGUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvcihhZGRQcm9qZWN0UG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiSXQgTXVzdCBIYXZlIEEgVGl0bGUhXCIpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheUVycm9yKGFkZFByb2plY3RQb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJcIik7XG5cbiAgICAgICAgQ3VycmVudFVzZXIuY3JlYXRlUHJvamVjdCh0aXRsZSk7XG4gICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KEN1cnJlbnRVc2VyLnByb2plY3RXaXRoVGl0bGUodGl0bGUpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VTRVInLCBKU09OLnN0cmluZ2lmeShDdXJyZW50VXNlcikpO1xuICAgICAgICBoaWRlUG9wdXAoYWRkUHJvamVjdFBvcHVwLCBiYWNrZHJvcCk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cyh1c2VyLHByb2plY3RDb250YWluZXIscHJvamVjdFRlbXBsYXRlKTtcbiAgICB9KTtcblxuICAgIGxldCBlZGl0UHJvamVjdENvbmZpcm1CdXR0b24gPSBlZGl0UHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybVwiKTtcbiAgICBsZXQgZWRpdFByb2plY3RDYW5jZWxCdXR0b24gPSBlZGl0UHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xuXG4gICAgZWRpdFByb2plY3RDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgaGlkZVBvcHVwKGVkaXRQcm9qZWN0UG9wdXAsIGJhY2tkcm9wKTtcbiAgICB9KTtcblxuICAgIGVkaXRQcm9qZWN0Q29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICBsZXQgdGl0bGUgPSBlZGl0UHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXRpdGxlXCIpLnZhbHVlO1xuXG4gICAgICAgIGlmKEN1cnJlbnRVc2VyLnByb2plY3RJZFdpdGhUaXRsZSh0aXRsZSkgIT09IC0xKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoZWRpdFByb2plY3RQb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJUaGlzIFRpdGxlIEFscmVhZHkgRXhpc3RzIVwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmKHRpdGxlID09PSBcIlwiKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoZWRpdFByb2plY3RQb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJJdCBNdXN0IEhhdmUgQSBUaXRsZSFcIik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBkaXNwbGF5RXJyb3IoZWRpdFByb2plY3RQb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJcIik7XG5cbiAgICAgICAgXG4gICAgICAgIEN1cnJlbnRVc2VyLnByb2plY3RXaXRoVGl0bGUoZWRpdFByb2plY3RQb3B1cC5kYXRhc2V0LnRpdGxlKS50aXRsZSA9IHRpdGxlO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVNFUicsIEpTT04uc3RyaW5naWZ5KEN1cnJlbnRVc2VyKSk7XG4gICAgICAgIGhpZGVQb3B1cChlZGl0UHJvamVjdFBvcHVwLCBiYWNrZHJvcCk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cyh1c2VyLHByb2plY3RDb250YWluZXIscHJvamVjdFRlbXBsYXRlKTtcbiAgICB9KTtcblxuXG4gICAgbGV0IGVkaXRUb2RvQ29uZmlybUJ1dHRvbiA9IGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5jb25maXJtXCIpO1xuICAgIGxldCBlZGl0VG9kb0NhbmNlbEJ1dHRvbiA9IGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG5cbiAgICBlZGl0VG9kb0NhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICBoaWRlUG9wdXAoZWRpdFRvZG9Qb3B1cCwgYmFja2Ryb3ApO1xuICAgIH0pO1xuXG4gICAgZWRpdFRvZG9Db25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGxldCB0aXRsZSA9IGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtdGl0bGVcIikudmFsdWU7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICAgIGxldCBkdWVEYXRlID0gZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC1kdWVEYXRlXCIpLnZhbHVlO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXByaW9yaXR5XCIpLnZhbHVlO1xuXG5cbiAgICAgICAgaWYoY3VycmVudFByb2plY3QuZ2V0VG9kb0lkQnlUaXRsZSh0aXRsZSkgIT09IC0xKSB7XG4gICAgICAgICAgICBpZih0aXRsZSAhPT0gZWRpdFRvZG9Qb3B1cC5kYXRhc2V0LnRpdGxlKXtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvcihlZGl0VG9kb1BvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIlRoaXMgVGl0bGUgQWxyZWFkeSBFeGlzdHMhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRpdGxlID09PSBcIlwiKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoZWRpdFRvZG9Qb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJJdCBNdXN0IEhhdmUgQSBUaXRsZSFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheUVycm9yKGVkaXRUb2RvUG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiXCIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGVkaXRUb2RvUG9wdXAuZGF0YXNldC50aXRsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0LnRvZG9XaXRoVGl0bGUoZWRpdFRvZG9Qb3B1cC5kYXRhc2V0LnRpdGxlKSk7XG5cbiAgICAgICAgbGV0IGVkaXRlZFRvZG8gPSBjdXJyZW50UHJvamVjdC50b2RvV2l0aFRpdGxlKGVkaXRUb2RvUG9wdXAuZGF0YXNldC50aXRsZSk7XG5cbiAgICAgICAgZWRpdGVkVG9kby50aXRsZSA9IHRpdGxlO1xuICAgICAgICBlZGl0ZWRUb2RvLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIGVkaXRlZFRvZG8uZHVlRGF0ZSA9IGR1ZURhdGU7XG5cblxuICAgICAgICBlZGl0ZWRUb2RvLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbiAgICAgICAgaGlkZVBvcHVwKGVkaXRUb2RvUG9wdXAsIGJhY2tkcm9wKTtcblxuICAgICAgICBjdXJyZW50UHJvamVjdC5zb3J0VG9kb3MoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VTRVInLCBKU09OLnN0cmluZ2lmeShDdXJyZW50VXNlcikpO1xuICAgICAgICBkaXNwbGF5VG9kb3MoY3VycmVudFByb2plY3QsdG9kb0NvbnRhaW5lcix0b2RvVGVtcGxhdGUpO1xuICAgIH0pO1xuICAgIFxuXG5cbn1cblxuXG5cbiIsIlxuZXhwb3J0IGNvbnN0IHRvZG9JdGVtRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpID0+e1xuICAgIHJldHVybntcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgY29tcGxldGVkXG4gICAgfTtcbn07XG5cblxuZXhwb3J0IGNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlKSA9PntcbiAgICBsZXQgdG9kb0FyciA9IFtdO1xuXG4gICAgY29uc3QgYWRkVG9kbyA9ICh0b2RvSXRlbSkgPT57XG4gICAgICAgIHRvZG9BcnIucHVzaCh0b2RvSXRlbSk7XG4gICAgICAgIHNvcnRUb2RvcygpO1xuICAgIH07XG5cbiAgICBjb25zdCBzb3J0VG9kb3MgPSAoKT0+e1xuICAgICAgICB0b2RvQXJyLnNvcnQoc29ydEZuKTtcbiAgICAgICAgXG4gICAgfTtcblxuICAgIGNvbnN0IHNvcnRGbiA9IChhLGIpID0+e1xuICAgICAgICBpZihhLnByaW9yaXR5IDwgYi5wcmlvcml0eSkgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKSA9PntcbiAgICAgICAgaWYoY29tcGxldGVkID09PSBudWxsIHx8IGNvbXBsZXRlZCA9PT0gdW5kZWZpbmVkKSBjb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IG5ld1RvZG9JdGVtID0gdG9kb0l0ZW1GYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCk7XG4gICAgICAgIGFkZFRvZG8obmV3VG9kb0l0ZW0pO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVUb2RvID0gKHRvZG9JdGVtKSA9PntcbiAgICAgICAgbGV0IGlkID0gZ2V0VG9kb0lkKHRvZG9JdGVtKTtcbiAgICAgICAgaWYoaWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgICB0b2RvQXJyLnNwbGljZShpZCwgMSk7XG4gICAgfTsgICBcblxuICAgIGNvbnN0IHJlbW92ZVRvZG9CeVRpdGxlID0gKHRpdGxlKSA9PntcbiAgICAgICAgbGV0IHRvZG8gPSB0b2RvQXJyLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LnRpdGxlID09PSB0aXRsZSk7XG4gICAgICAgIGlmKHRvZG8gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgICByZW1vdmVUb2RvKHRvZG8pO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRUb2RvSWQgPSAodG9kb0l0ZW0pID0+e1xuICAgICAgICByZXR1cm4gdG9kb0Fyci5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50LnRpdGxlID09PSB0b2RvSXRlbS50aXRsZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFRvZG9JZEJ5VGl0bGUgPSAodGl0bGUpID0+e1xuICAgICAgICByZXR1cm4gdG9kb0Fyci5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50LnRpdGxlID09PSB0aXRsZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZG9XaXRoVGl0bGUgPSAodGl0bGUpID0+e1xuICAgICAgICByZXR1cm4gdG9kb0Fyci5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC50aXRsZSA9PT0gdGl0bGUpO1xuICAgIH1cblxuICAgIHJldHVybntcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHRvZG9BcnIsXG4gICAgICAgIGFkZFRvZG8sXG4gICAgICAgIHJlbW92ZVRvZG8sXG4gICAgICAgIGNyZWF0ZVRvZG8sXG4gICAgICAgIGdldFRvZG9JZEJ5VGl0bGUsXG4gICAgICAgIHJlbW92ZVRvZG9CeVRpdGxlLFxuICAgICAgICB0b2RvV2l0aFRpdGxlLFxuICAgICAgICBzb3J0VG9kb3MsXG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VyRmFjdG9yeSA9ICh1c2VybmFtZSkgPT57XG4gICAgbGV0IHByb2plY3RBcnIgPVtdO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0SXRlbSkgPT57XG4gICAgICAgIHByb2plY3RBcnIucHVzaChwcm9qZWN0SXRlbSk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHRpdGxlKSA9PntcbiAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0RmFjdG9yeSh0aXRsZSkpOyAgICAgICAgXG4gICAgfTtcblxuICAgIGNvbnN0IHByb2plY3RXaXRoVGl0bGUgPSAocHJvamVjdE5hbWUpID0+e1xuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RBcnIuZmluZChlbGVtZW50ID0+ZWxlbWVudC50aXRsZSA9PT0gcHJvamVjdE5hbWUpO1xuICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICB9O1xuXG4gICAgY29uc3QgcHJvamVjdElkV2l0aFRpdGxlID0gKHByb2plY3ROYW1lKSA9PntcbiAgICAgICAgbGV0IGlkID0gcHJvamVjdEFyci5maW5kSW5kZXgoZWxlbWVudCA9PmVsZW1lbnQudGl0bGUgPT09IHByb2plY3ROYW1lKTtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH07XG5cblxuICAgIGNvbnN0IGNyZWF0ZVRvZG8gPSAocHJvamVjdFRpdGxlLCB0b2RvVGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKSA9PntcbiAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0V2l0aFRpdGxlKHByb2plY3RUaXRsZSk7XG4gICAgICAgIGlmKHByb2plY3QgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBwcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkocHJvamVjdFRpdGxlKTtcbiAgICAgICAgICAgIGFkZFByb2plY3QocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdC5jcmVhdGVUb2RvKHRvZG9UaXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRUb2RvID0gKHByb2plY3RUaXRsZSwgdG9kb0l0ZW0pID0+e1xuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RXaXRoVGl0bGUocHJvamVjdFRpdGxlKTtcbiAgICAgICAgaWYocHJvamVjdCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShwcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0LmFkZFRvZG8odG9kb0l0ZW0pO1xuICAgIH07XG5cblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdEl0ZW0pID0+e1xuICAgICAgICBsZXQgaWQgPSBnZXRUb2RvSWQocHJvamVjdEl0ZW0pO1xuICAgICAgICBpZihpZCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIHByb2plY3RBcnIuc3BsaWNlKGlkLCAxKTtcbiAgICB9OyAgIFxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdEJ5VGl0bGUgPSAodGl0bGUpID0+e1xuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RBcnIuZmluZChwcm9qZWN0ID0+IHByb2plY3QudGl0bGUgPT09IHRpdGxlKTtcbiAgICAgICAgaWYocHJvamVjdCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIHJlbW92ZVByb2plY3QocHJvamVjdCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VG9kb0lkID0gKHByb2plY3RJdGVtKSA9PntcbiAgICAgICAgcmV0dXJuIHByb2plY3RBcnIuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC50aXRsZSA9PT0gcHJvamVjdEl0ZW0udGl0bGUpO1xuICAgIH07XG5cbiAgICByZXR1cm57XG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBwcm9qZWN0QXJyLFxuICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICBjcmVhdGVQcm9qZWN0LFxuICAgICAgICByZW1vdmVQcm9qZWN0LFxuICAgICAgICBjcmVhdGVUb2RvLFxuICAgICAgICBhZGRUb2RvLFxuICAgICAgICBwcm9qZWN0V2l0aFRpdGxlLFxuICAgICAgICBwcm9qZWN0SWRXaXRoVGl0bGUsXG4gICAgICAgIHJlbW92ZVByb2plY3RCeVRpdGxlXG4gICAgfTtcbn1cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=