"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["setup"],{

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





/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/setup.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEI2RDs7QUFFdEQ7QUFDUDtBQUNBO0FBQ0E7OztBQUdBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSwrREFBWTtBQUN4QixLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0EsWUFBWSwrREFBWTtBQUN4QixLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2V0dXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cyh1c2VyLCBQcm9qZWN0Q29udGFpbmVyLCBwcm9qZWN0VGVtcGxhdGUpe1xuICAgIGxldCBwcm9qZWN0QXJyID0gdXNlci5wcm9qZWN0QXJyO1xuICAgIFByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zb2xlLmxvZyhQcm9qZWN0Q29udGFpbmVyKTtcbiAgICBwcm9qZWN0QXJyLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0Q2xvbmUgPSBwcm9qZWN0VGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBwcm9qZWN0Q2xvbmUuY2xhc3NMaXN0LnJlbW92ZShcIm5vZGlzcGxheVwiLCBcInByb2plY3QtdGVtcGxhdGVcIilcbiAgICAgICAgcHJvamVjdENsb25lLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKS5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICBQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDbG9uZSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UG9wdXAocG9wdXBFbGVtZW50LCBiYWNrZHJvcCl7XG4gICAgcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZVBvcHVwKHBvcHVwRWxlbWVudCwgYmFja2Ryb3Ape1xuICAgIHBvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICBiYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbn0iLCJpbXBvcnQgeyBkaXNwbGF5UG9wdXAsIGhpZGVQb3B1cCB9IGZyb20gXCIuL2Rpc3BsYXlGdW5jdGlvbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwKCl7XG4gICAgbGV0IGJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrZHJvcFwiKTtcbiAgICBjb25zb2xlLmxvZyhiYWNrZHJvcCk7XG4gICAgc2V0dXBBZGRCdXR0b25zKCk7XG5cblxufVxuXG5cblxuZnVuY3Rpb24gc2V0dXBBZGRCdXR0b25zKCl7XG4gICAgbGV0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xuICAgIGxldCBhZGRQcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtcG9wdXBcIik7XG5cbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcbiAgICAgICAgICAgIGRpc3BsYXlQb3B1cChhZGRQcm9qZWN0UG9wdXAsIGJhY2tkcm9wKTtcbiAgICB9KTtcblxuXG4gICAgbGV0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvXCIpO1xuICAgIGxldCBhZGRUb2RvUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tcG9wdXBcIik7XG5cbiAgICBhZGRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcbiAgICAgICAgICAgIGRpc3BsYXlQb3B1cChhZGRUb2RvUG9wdXAsIGJhY2tkcm9wKTtcbiAgICB9KTtcbn1cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==