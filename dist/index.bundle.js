"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

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
let todoContainer = document.querySelector(".todo-container");
let editProjectPopup = document.querySelector(".edit-project-popup");
let editTodoPopup = document.querySelector(".edit-todo-popup");
let confirmDeletePopup = document.querySelector(".confirm-delete-popup");
function displayProjects(user, ProjectContainer, projectTemplate) {
  let projectArr = user.projectArr;
  ProjectContainer.innerHTML = "";
  projectArr.forEach(project => {
    let projectClone = projectTemplate.cloneNode(true);
    projectClone.classList.remove("nodisplay", "project-template");
    projectClone.querySelector(".project-title").innerText = project.title;
    let deleteButton = projectClone.querySelector(".delete");
    deleteButton.addEventListener("click", e => {
      console.log("project");
      confirmDeletePopup.querySelector("h3").innerText = `Delete >>${project.title}<< ?`;
      displayPopup(confirmDeletePopup, _setup__WEBPACK_IMPORTED_MODULE_0__.backdrop);
      let cancelButton = confirmDeletePopup.querySelector(".cancel");
      let confirmButton = confirmDeletePopup.querySelector(".confirm");
      cancelButton.addEventListener("click", () => {
        hidePopup(confirmDeletePopup, _setup__WEBPACK_IMPORTED_MODULE_0__.backdrop);
      });
      confirmButton.addEventListener("click", () => {
        hidePopup(confirmDeletePopup, _setup__WEBPACK_IMPORTED_MODULE_0__.backdrop);
        _setup__WEBPACK_IMPORTED_MODULE_0__.CurrentUser.removeProjectByTitle(project.title);
        if (_setup__WEBPACK_IMPORTED_MODULE_0__.currentProject.title === project.title) (0,_setup__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(user.projectArr[user.projectArr.length - 1]);
        console.log(JSON.stringify(_setup__WEBPACK_IMPORTED_MODULE_0__.CurrentUser));
        localStorage.setItem('USER', JSON.stringify(_setup__WEBPACK_IMPORTED_MODULE_0__.CurrentUser));
        displayProjects(user, ProjectContainer, projectTemplate);
        if (user.projectArr.length > 0) SelectedProjectChangeStyle(_setup__WEBPACK_IMPORTED_MODULE_0__.currentProject);
      });
      e.stopPropagation();
    });
    let editButton = projectClone.querySelector(".edit");
    editButton.addEventListener("click", e => {
      editProjectPopup.querySelector(".ipt-title").value = project.title;
      editProjectPopup.querySelector(".ipt-title").placeholder = project.title;
      displayPopup(editProjectPopup, _setup__WEBPACK_IMPORTED_MODULE_0__.backdrop);
      editProjectPopup.dataset.title = project.title;
      e.stopPropagation();
    });
    projectClone.addEventListener("click", e => {
      (0,_setup__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(project);
    });
    ProjectContainer.appendChild(projectClone);
  });
  if (user.projectArr.length > 0) SelectedProjectChangeStyle(_setup__WEBPACK_IMPORTED_MODULE_0__.currentProject);
}
function displayTodos(project, todoContainer, todoTemplate) {
  todoContainer.innerHTML = "";
  if (project === undefined) return;
  let priorityColors = ["--r", "--b", "--g"];
  let todoArr = project.todoArr;
  todoArr.forEach(todo => {
    let todoClone = todoTemplate.cloneNode(true);
    let todoCheckbox = todoClone.querySelector(".todo-completed");
    todoClone.classList.remove("nodisplay", "todo-template");
    todoClone.querySelector(".todo-title").innerText = todo.title;
    todoClone.querySelector(".todo-description").innerText = shorterString(todo.description, 40);
    ;
    todoClone.querySelector(".todo-dueDate").innerText = todo.dueDate;
    todoCheckbox.checked = todo.completed;
    todoClone.classList.add(priorityColors[todo.priority]);
    let deleteButton = todoClone.querySelector(".delete");
    deleteButton.addEventListener("click", e => {
      console.log("todo");
      confirmDeletePopup.querySelector("h3").innerText = `Delete >>${todo.title}<< ?`;
      displayPopup(confirmDeletePopup, _setup__WEBPACK_IMPORTED_MODULE_0__.backdrop);
      let oldCancelButton = confirmDeletePopup.querySelector(".cancel");
      let oldConfirmButton = confirmDeletePopup.querySelector(".confirm");
      let cancelButton = oldCancelButton.cloneNode(true);
      oldCancelButton.parentNode.replaceChild(cancelButton, oldCancelButton);
      let confirmButton = oldConfirmButton.cloneNode(true);
      oldConfirmButton.parentNode.replaceChild(confirmButton, oldConfirmButton);
      cancelButton.addEventListener("click", () => {
        hidePopup(confirmDeletePopup, _setup__WEBPACK_IMPORTED_MODULE_0__.backdrop);
      });
      confirmButton.addEventListener("click", () => {
        hidePopup(confirmDeletePopup, _setup__WEBPACK_IMPORTED_MODULE_0__.backdrop);
        _setup__WEBPACK_IMPORTED_MODULE_0__.currentProject.removeTodoByTitle(todo.title);
        localStorage.setItem('USER', JSON.stringify(_setup__WEBPACK_IMPORTED_MODULE_0__.CurrentUser));
        displayTodos(project, todoContainer, todoTemplate);
      });
      e.stopPropagation();
    });
    let editButton = todoClone.querySelector(".edit");
    editButton.addEventListener("click", e => {
      editTodoPopup.querySelector(".ipt-title").value = todo.title;
      editTodoPopup.querySelector(".ipt-title").placeholder = todo.title;
      editTodoPopup.querySelector(".ipt-description").value = todo.description;
      editTodoPopup.querySelector(".ipt-dueDate").value = todo.dueDate;
      editTodoPopup.querySelector(".ipt-priority").value = todo.priority;
      displayPopup(editTodoPopup, _setup__WEBPACK_IMPORTED_MODULE_0__.backdrop);
      editTodoPopup.dataset.title = todo.title;
      e.stopPropagation();
    });
    todoCheckbox.addEventListener("click", e => {
      todo.completed = !todo.completed;
      if (todo.completed) todoClone.classList.add("completed");else todoClone.classList.remove("completed");
      e.stopPropagation();
    });
    todoClone.addEventListener("click", e => {
      if (todoClone.classList.contains("extended")) {
        SelectedTodoExtend(false);
        todoClone.querySelector(".todo-description").innerText = shorterString(todo.description, 40);
      } else {
        SelectedTodoExtend(todo);
        todoClone.querySelector(".todo-description").innerText = todo.description;
      }
    });
    if (todo.completed) todoClone.classList.add("completed");else todoClone.classList.remove("completed");
    todoContainer.appendChild(todoClone);
  });
}
function SelectedProjectChangeStyle(project) {
  if (!project) return console.log("error");
  let title = project.title;
  let projectElements = projectContainer.querySelectorAll(".project-div");
  projectElements.forEach(projectElement => {
    let titleElement = projectElement.querySelector(".project-title");
    let projectElementTitle = null;
    if (titleElement !== null) projectElementTitle = titleElement.innerText;
    if (projectElementTitle === title) {
      projectElement.classList.add("selected");
    } else {
      projectElement.classList.remove("selected");
    }
  });
}
function SelectedTodoExtend(todo) {
  let title = todo.title;
  if (todo === false) title = "";
  let todoElements = todoContainer.querySelectorAll(".todo-div");
  todoElements.forEach(todoElement => {
    let titleElement = todoElement.querySelector(".todo-title");
    let todoElementTitle = null;
    if (titleElement !== null) todoElementTitle = titleElement.innerText;
    if (todoElementTitle === title) {
      todoElement.classList.add("extended");
    } else {
      todoElement.classList.remove("extended");
      let todoTitle = todoElement.querySelector(".todo-title").innerText;
      todoElement.querySelector(".todo-description").innerText = shorterString(_setup__WEBPACK_IMPORTED_MODULE_0__.currentProject.todoWithTitle(todoTitle).description, 40);
    }
  });
}
function displayPopup(popupElement, backdrop) {
  popupElement.classList.add("visible");
  backdrop.classList.add("visible");
}
function hidePopup(popupElement, backdrop) {
  popupElement.classList.remove("visible");
  backdrop.classList.remove("visible");
}
function displayError(popup, errorClass, errorText) {
  popup.querySelector(errorClass).innerText = errorText;
}
function shorterString(string, length) {
  if (string.length < length + 1) return string;
  let shorter = string.slice(0, length);
  return shorter + "...";
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
function setCurrentUser(user) {
  CurrentUser = user;
}
;
function setCurrentProject(project) {
  currentProject = project;
  (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayProjects)(CurrentUser, projectContainer, projectTemplate);
  (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(currentProject, todoContainer, todoTemplate);
  (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.SelectedProjectChangeStyle)(currentProject);
}
;
let retrievedUser = localStorage.getItem('USER');
let userJson = JSON.parse(retrievedUser);
let user;
if (userJson === null) {
  user = (0,_todoObjects__WEBPACK_IMPORTED_MODULE_1__.userFactory)("Guest");
  user.createTodo("Get A Job", "Learn A Skill", "Web-Development", "2024-01-01", 0);
  user.createTodo("Get A Job", "Apply For Jobs", "", "2024-04-01", 1);
  user.createTodo("Get A Wife", "Find A Woman", "Usually In The Streets", "2023-07-05", 0);
  user.createTodo("Get A Wife", "Talk To A Woman", "Use Words", "2024-12-11", 1);
  user.createTodo("Get A Wife", "Finish This List", "", "", 2);
} else {
  user = (0,_todoObjects__WEBPACK_IMPORTED_MODULE_1__.userFactory)(userJson.username);
  let projectArr = userJson.projectArr;
  projectArr.forEach(project => {
    let newProject = (0,_todoObjects__WEBPACK_IMPORTED_MODULE_1__.projectFactory)(project.title);
    user.addProject(newProject);
    let todoArr = project.todoArr;
    todoArr.forEach(todo => {
      newProject.createTodo(todo.title, todo.description, todo.dueDate, todo.priority, todo.completed);
    });
  });
}
setCurrentUser(user);
setCurrentProject(CurrentUser.projectArr[0]);
function setup() {
  setupAddButtons();
  setupPopupButtons();
}
function setupAddButtons() {
  addProjectButton.addEventListener("click", e => {
    (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayPopup)(addProjectPopup, backdrop);
  });
  addTodoButton.addEventListener("click", e => {
    (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayPopup)(addTodoPopup, backdrop);
  });
}
function setupPopupButtons() {
  let addTodoConfirmButton = addTodoPopup.querySelector(".confirm");
  let addTodoCancelButton = addTodoPopup.querySelector(".cancel");
  addTodoCancelButton.addEventListener("click", e => {
    (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.hidePopup)(addTodoPopup, backdrop);
  });
  addTodoConfirmButton.addEventListener("click", e => {
    let title = addTodoPopup.querySelector(".ipt-title").value;
    if (currentProject.getTodoIdByTitle(title) !== -1) {
      (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayError)(addTodoPopup, ".title-error", "This Title Already Exists!");
      return;
    }
    if (title === "") {
      (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayError)(addTodoPopup, ".title-error", "It Must Have A Title!");
      return;
    }
    (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayError)(addTodoPopup, ".title-error", "");
    let description = addTodoPopup.querySelector(".ipt-description").value;
    let dueDate = addTodoPopup.querySelector(".ipt-dueDate").value;
    let priority = addTodoPopup.querySelector(".ipt-priority").value;
    currentProject.createTodo(title, description, dueDate, priority, false);
    localStorage.setItem('USER', JSON.stringify(CurrentUser));
    (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.hidePopup)(addTodoPopup, backdrop);
    (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(currentProject, todoContainer, todoTemplate);
  });
  let addProjectConfirmButton = addProjectPopup.querySelector(".confirm");
  let addProjectCancelButton = addProjectPopup.querySelector(".cancel");
  addProjectCancelButton.addEventListener("click", e => {
    (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.hidePopup)(addProjectPopup, backdrop);
  });
  addProjectConfirmButton.addEventListener("click", e => {
    let title = addProjectPopup.querySelector(".ipt-title").value;
    if (CurrentUser.projectIdWithTitle(title) !== -1) {
      (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayError)(addProjectPopup, ".title-error", "This Title Already Exists!");
      return;
    }
    if (title === "") {
      (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayError)(addProjectPopup, ".title-error", "It Must Have A Title!");
      return;
    }
    (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayError)(addProjectPopup, ".title-error", "");
    CurrentUser.createProject(title);
    setCurrentProject(CurrentUser.projectWithTitle(title));
    localStorage.setItem('USER', JSON.stringify(CurrentUser));
    (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.hidePopup)(addProjectPopup, backdrop);
    (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayProjects)(user, projectContainer, projectTemplate);
  });
  let editProjectConfirmButton = editProjectPopup.querySelector(".confirm");
  let editProjectCancelButton = editProjectPopup.querySelector(".cancel");
  editProjectCancelButton.addEventListener("click", e => {
    (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.hidePopup)(editProjectPopup, backdrop);
  });
  editProjectConfirmButton.addEventListener("click", e => {
    let title = editProjectPopup.querySelector(".ipt-title").value;
    if (CurrentUser.projectIdWithTitle(title) !== -1) {
      (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayError)(editProjectPopup, ".title-error", "This Title Already Exists!");
      return;
    }
    if (title === "") {
      (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayError)(editProjectPopup, ".title-error", "It Must Have A Title!");
      return;
    }
    (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayError)(editProjectPopup, ".title-error", "");
    CurrentUser.projectWithTitle(editProjectPopup.dataset.title).title = title;
    localStorage.setItem('USER', JSON.stringify(CurrentUser));
    (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.hidePopup)(editProjectPopup, backdrop);
    (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayProjects)(user, projectContainer, projectTemplate);
  });
  let editTodoConfirmButton = editTodoPopup.querySelector(".confirm");
  let editTodoCancelButton = editTodoPopup.querySelector(".cancel");
  editTodoCancelButton.addEventListener("click", e => {
    (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.hidePopup)(editTodoPopup, backdrop);
  });
  editTodoConfirmButton.addEventListener("click", e => {
    let title = editTodoPopup.querySelector(".ipt-title").value;
    let description = editTodoPopup.querySelector(".ipt-description").value;
    let dueDate = editTodoPopup.querySelector(".ipt-dueDate").value;
    let priority = editTodoPopup.querySelector(".ipt-priority").value;
    if (currentProject.getTodoIdByTitle(title) !== -1) {
      if (title !== editTodoPopup.dataset.title) {
        (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayError)(editTodoPopup, ".title-error", "This Title Already Exists!");
        return;
      }
    }
    if (title === "") {
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
    (0,_displayFunctions__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(currentProject, todoContainer, todoTemplate);
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
const todoItemFactory = (title, description, dueDate, priority, completed) => {
  return {
    title,
    description,
    dueDate,
    priority,
    completed
  };
};
const projectFactory = title => {
  let todoArr = [];
  const addTodo = todoItem => {
    todoArr.push(todoItem);
    sortTodos();
  };
  const sortTodos = () => {
    todoArr.sort(sortFn);
  };
  const sortFn = (a, b) => {
    if (a.priority < b.priority) return -1;
  };
  const createTodo = (title, description, dueDate, priority, completed) => {
    if (completed === null || completed === undefined) completed = false;
    let newTodoItem = todoItemFactory(title, description, dueDate, priority, completed);
    addTodo(newTodoItem);
  };
  const removeTodo = todoItem => {
    let id = getTodoId(todoItem);
    if (id === undefined) return;
    todoArr.splice(id, 1);
  };
  const removeTodoByTitle = title => {
    let todo = todoArr.find(element => element.title === title);
    if (todo === undefined) return;
    removeTodo(todo);
  };
  const getTodoId = todoItem => {
    return todoArr.findIndex(element => element.title === todoItem.title);
  };
  const getTodoIdByTitle = title => {
    return todoArr.findIndex(element => element.title === title);
  };
  const todoWithTitle = title => {
    return todoArr.find(element => element.title === title);
  };
  return {
    title,
    todoArr,
    addTodo,
    removeTodo,
    createTodo,
    getTodoIdByTitle,
    removeTodoByTitle,
    todoWithTitle,
    sortTodos
  };
};
const userFactory = username => {
  let projectArr = [];
  const addProject = projectItem => {
    projectArr.push(projectItem);
  };
  const createProject = title => {
    addProject(projectFactory(title));
  };
  const projectWithTitle = projectName => {
    let project = projectArr.find(element => element.title === projectName);
    return project;
  };
  const projectIdWithTitle = projectName => {
    let id = projectArr.findIndex(element => element.title === projectName);
    return id;
  };
  const createTodo = (projectTitle, todoTitle, description, dueDate, priority, completed) => {
    let project = projectWithTitle(projectTitle);
    if (project === undefined) {
      project = projectFactory(projectTitle);
      addProject(project);
    }
    project.createTodo(todoTitle, description, dueDate, priority, completed);
  };
  const addTodo = (projectTitle, todoItem) => {
    let project = projectWithTitle(projectTitle);
    if (project === undefined) {
      project = projectFactory(projectTitle);
      addProject(project);
    }
    project.addTodo(todoItem);
  };
  const removeProject = projectItem => {
    let id = getTodoId(projectItem);
    if (id === undefined) return;
    projectArr.splice(id, 1);
  };
  const removeProjectByTitle = title => {
    let project = projectArr.find(project => project.title === title);
    if (project === undefined) return;
    removeProject(project);
  };
  const getTodoId = projectItem => {
    return projectArr.findIndex(element => element.title === projectItem.title);
  };
  return {
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
};

/***/ }),

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
___CSS_LOADER_EXPORT___.push([module.id, "    :root{\n        --dark: #16205E;\n        --mid: #363E88;\n        --light: #575E9B;\n        --accent: #5C6DFF;\n        --r: #FF7474;\n        --g: #4EEFA3;\n        --b: #43C7FF;\n        --w: #c9d0fa;\n    }\n\n    ::selection{\n        color: black;\n        background-color: white;\n    }\n\n\n    @font-face {\n        font-family: 'cedric';\n        src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype'); \n    }\n\n    @font-face {\n        font-family: 'tiltWrap';\n        src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype'); \n    }\n\n\n    *{\n        font-family: 'tiltWrap';\n    }\n\n    html,\n    body{\n        height: 100%;\n        margin: 0;\n    }\n\n    body{\n        display: flex;\n        flex-direction: column;\n    }\n\n\n    .nodisplay{\n        display: none !important;\n    }\n\n    .content{\n        flex: 1;\n        display: flex;\n        width: 100%;\n    }\n\n    header{\n        background-color: var(--dark);\n        padding: 2rem 2rem 1rem 2rem;\n    }\n\n    a{\n        text-decoration: none;\n        color: var(--w);\n        transition-duration: 0.3s;\n        padding: 0.1rem 0.2rem;\n    }\n\n    a:hover{\n        color: var(--dark);\n        letter-spacing: 0.1rem;\n        background-color: #43C7FF;\n    }\n\n    footer{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        color: var(--accent);\n        padding: 10px;\n        background-color: var(--dark);\n    }\n\n    .projects{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        background-color: var(--light);\n        flex:2.5;\n        gap:15px;\n    }\n\n    .project-container{\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap : 15px;\n    }\n\n    .todo-container{\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap : 15px;\n    }\n\n\n    svg{\n        height: 1.7rem;\n        width: auto;\n    }\n\n    .project-div{\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        height: 40px;\n        background-color: var(--dark);\n        color: var(--w);\n        padding: 10px;\n        width: 80%;\n        border-radius: 10px;\n        transition-property: border scale;\n    }\n\n    .project-div.selected{\n        width: 85%;\n        background-color: var(--accent);\n    }\n\n\n    .project-div .project-title{\n        user-select: none;\n        pointer-events: none;\n    }\n\n    .project-div:not(.selected):hover{\n        width: 82%;\n        background-color: rgb(28, 40, 146);\n    }\n\n\n    .project-div span{\n        font-size: 1.1rem;\n        margin-right: auto;\n    }\n\n    .todo-div{\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        height: 80px;\n        background-color: white;\n        color: var(--w);\n        padding: 10px;\n        width: 90%;\n        border-radius: 10px;\n    }\n\n    .todo-div .check-title{\n        align-items: center; \n        display: flex;\n        gap:20px;\n    }\n\n    .todo-div.extended,\n    .todo-div.extended .right-side{\n        flex-direction: column;\n        height: auto;\n        gap:0px;\n    }\n\n    p{\n        text-align: center;\n    }\n\n    .todo-div.extended .todo-description{\n        inline-size: 700px;\n        overflow-wrap: break-word;\n        hyphens: manual;\n    }\n\n    .todo-div.--r{\n        background-color: var(--r);\n    }\n\n    .todo-div.--g{\n        background-color: var(--g);\n    }\n\n    .todo-div.--b{\n        background-color: var(--b);\n    }\n\n    .todo-div.completed{\n        filter: brightness(0.6);\n    }\n\n    .todo-div *{\n        color: rgba(0, 0, 0, 0.5);\n    }\n\n    .todo-div .todo-title{\n        font-size: 1.3rem;\n        color: rgba(23, 0, 78, 0.9);\n    }\n\n    .todo-div button{\n        filter:opacity(0.5);\n    }\n\n\n\n\n    .todo-div .left-side{\n        display: flex;\n        align-items: center;\n    }\n\n    .todo-div .right-side{\n        display: flex;\n        align-items: center;\n        gap: 20px;\n    }\n\n    .todo-div .todo-dueDate{\n        text-align: center;\n        margin-right: 20px;\n    }\n\n    button{\n        background: transparent;\n        color: black;\n        filter: invert(82%) sepia(3%) saturate(2795%) hue-rotate(196deg) brightness(102%) contrast(96%);\n        border: none;\n        transition-duration: 0.3s;\n        cursor: pointer;\n    }\n\n\n    .edit:hover{\n        filter: invert(64%) sepia(98%) saturate(1347%) hue-rotate(170deg) brightness(102%) contrast(104%) drop-shadow(0 0 0.3rem black);\n    }\n\n    .delete:hover{\n        filter: invert(63%) sepia(72%) saturate(2597%) hue-rotate(316deg) brightness(105%) contrast(104%)  drop-shadow(0 0 0.3rem black);\n    }\n\n    .add-button{\n        margin-bottom: 15px;\n    }\n\n    .add-button:hover{\n        filter: drop-shadow(0 0 0.75rem red);\n        filter: invert(64%) sepia(98%) saturate(1347%) hue-rotate(170deg) brightness(102%) contrast(104%) drop-shadow(0 0 0.3rem black);\n    }\n\n    .todos{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        background-color: var(--mid);\n        flex:6;\n        gap:15px;\n    }\n\n    button{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    h1{\n        line-height: 3rem;\n        font-family: 'cedric';\n        font-weight: 100;\n        margin:0;\n        letter-spacing: 5px;\n        font-size: 5rem;\n        color: var(--w);\n    }\n\n    h2{\n        color: var(--w);\n        margin: 15px 0 0 0 ;\n    }\n\n    h3{\n        margin: 0;\n        color: var(--dark);\n    }\n\n    .button-container{\n        width: 100%;\n        display: flex;\n        gap:15px;\n        align-items: center;\n        justify-content: space-evenly;\n    }\n\n    .popup{\n        position: fixed;\n        display: none;\n        flex-direction: column;\n        background-color: var(--accent);\n        color: var(--w);\n        border-radius: 10px;\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%, -50%);\n        padding: 20px 50px;\n        gap:20px;\n        align-items: center;\n        z-index: 10;\n    }\n\n    .popup button{\n        border-radius: 5px;\n        width: 100px;\n        filter: none;\n        color: var(--w);\n    }\n\n    input:not([type=checkbox]){\n        outline-color: transparent;\n        background-color: var(--w);\n        border: none;\n        border-radius: 10px;\n        width: 100%;\n        padding: 5px 10px;\n    }\n\n\n    input[type=checkbox]{\n        -webkit-appearance: none;\n        appearance: none;\n        background-color:   rgba(255, 255, 255, 1);;\n        margin: 0;\n        cursor: pointer;\n        width: 30px;\n        height: 30px;\n        font: inherit;\n        color: rgba(100, 100, 100, 0.6);\n        border: 0.15em solid rgba(0, 0, 0, 0.5);\n        border-radius: 100px;\n        transform: translateY(0.0em);\n        display: grid;\n        place-content: center;\n    }\n    \n    input[type=\"checkbox\"]::before {\n        content: \"\";\n        width: 30px;\n        height: 30px;\n        border-radius: 100px;\n        transform: scale(0);\n        transition: 120ms transform ease-in-out;\n        background-color:  rgba(0, 0, 0, 0.719);\n        \n      }\n      \n\n    input[type=\"checkbox\"]:checked::before {\n        transform: scale(1);\n    }\n\n    input[type=\"checkbox\"]:focus {\n        outline: max(2px, 0.15em) solid rgba(0, 0, 0, 0.4);\n        outline-offset: max(2px, 0.15em);\n    }\n      \n    \n    select{\n        outline-color: transparent;\n        background-color: var(--w);\n        border: none;\n        border-radius: 10px;\n        width: calc(100% + 20px);\n        padding: 5px 10px;\n    }\n\n    .title-label::after{\n        content: \"*\";\n    }\n\n    .popup button:hover{\n        filter:brightness(0.8);\n    }\n\n    .popup button.confirm{\n        background-color: var(--g);\n        color: var(--dark);\n        padding: 5px;\n    }\n\n    .popup button.cancel{\n        background-color: var(--r);\n        color: var(--dark);\n        padding: 5px;\n    }\n\n    .input-wrapper{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n        width: 250px;\n    }\n\n    .backdrop{\n        pointer-events: none;\n        position: fixed;\n        width: 100%;\n        height: 100%;\n        background: rgba(0, 0, 0, 0.0);\n        transition-duration: 0.3s;\n        z-index: 5;\n    }\n\n    .backdrop.visible{\n        pointer-events:visible;\n        background: rgba(0, 0, 0, 0.4);\n        animation: fade-in 500ms forwards;\n    }\n\n    .popup.visible{\n        display: flex;\n        animation: fade-in 500ms forwards;\n        animation: slide up 500ms forwards;\n    }\n\n    .error{\n        color: var(--r);\n        background-color: var(--dark);\n        padding: 0px 10px;\n    }\n\n    @keyframes fade-in {\n        0%{\n            opacity: 0;\n        }\n\n        100%{\n            opacity: 1;\n        }\n    }\n\n\n    @keyframes fade-out {\n        0%{\n            opacity: 1;\n        }\n\n        100%{\n            opacity: 0;\n        }\n    }\n\n    @keyframes slide-up {\n        0%{\n            transform: translateY(100%);\n        }    \n\n        100%{\n            transform: translateY(0%);\n        }\n\n\n    }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["    :root{\n        --dark: #16205E;\n        --mid: #363E88;\n        --light: #575E9B;\n        --accent: #5C6DFF;\n        --r: #FF7474;\n        --g: #4EEFA3;\n        --b: #43C7FF;\n        --w: #c9d0fa;\n    }\n\n    ::selection{\n        color: black;\n        background-color: white;\n    }\n\n\n    @font-face {\n        font-family: 'cedric';\n        src: url('./CEDRIC\\ demo.ttf') format('truetype'); \n    }\n\n    @font-face {\n        font-family: 'tiltWrap';\n        src: url('./TiltWarp-Regular.ttf') format('truetype'); \n    }\n\n\n    *{\n        font-family: 'tiltWrap';\n    }\n\n    html,\n    body{\n        height: 100%;\n        margin: 0;\n    }\n\n    body{\n        display: flex;\n        flex-direction: column;\n    }\n\n\n    .nodisplay{\n        display: none !important;\n    }\n\n    .content{\n        flex: 1;\n        display: flex;\n        width: 100%;\n    }\n\n    header{\n        background-color: var(--dark);\n        padding: 2rem 2rem 1rem 2rem;\n    }\n\n    a{\n        text-decoration: none;\n        color: var(--w);\n        transition-duration: 0.3s;\n        padding: 0.1rem 0.2rem;\n    }\n\n    a:hover{\n        color: var(--dark);\n        letter-spacing: 0.1rem;\n        background-color: #43C7FF;\n    }\n\n    footer{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        color: var(--accent);\n        padding: 10px;\n        background-color: var(--dark);\n    }\n\n    .projects{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        background-color: var(--light);\n        flex:2.5;\n        gap:15px;\n    }\n\n    .project-container{\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap : 15px;\n    }\n\n    .todo-container{\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap : 15px;\n    }\n\n\n    svg{\n        height: 1.7rem;\n        width: auto;\n    }\n\n    .project-div{\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        height: 40px;\n        background-color: var(--dark);\n        color: var(--w);\n        padding: 10px;\n        width: 80%;\n        border-radius: 10px;\n        transition-property: border scale;\n    }\n\n    .project-div.selected{\n        width: 85%;\n        background-color: var(--accent);\n    }\n\n\n    .project-div .project-title{\n        user-select: none;\n        pointer-events: none;\n    }\n\n    .project-div:not(.selected):hover{\n        width: 82%;\n        background-color: rgb(28, 40, 146);\n    }\n\n\n    .project-div span{\n        font-size: 1.1rem;\n        margin-right: auto;\n    }\n\n    .todo-div{\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        height: 80px;\n        background-color: white;\n        color: var(--w);\n        padding: 10px;\n        width: 90%;\n        border-radius: 10px;\n    }\n\n    .todo-div .check-title{\n        align-items: center; \n        display: flex;\n        gap:20px;\n    }\n\n    .todo-div.extended,\n    .todo-div.extended .right-side{\n        flex-direction: column;\n        height: auto;\n        gap:0px;\n    }\n\n    p{\n        text-align: center;\n    }\n\n    .todo-div.extended .todo-description{\n        inline-size: 700px;\n        overflow-wrap: break-word;\n        hyphens: manual;\n    }\n\n    .todo-div.--r{\n        background-color: var(--r);\n    }\n\n    .todo-div.--g{\n        background-color: var(--g);\n    }\n\n    .todo-div.--b{\n        background-color: var(--b);\n    }\n\n    .todo-div.completed{\n        filter: brightness(0.6);\n    }\n\n    .todo-div *{\n        color: rgba(0, 0, 0, 0.5);\n    }\n\n    .todo-div .todo-title{\n        font-size: 1.3rem;\n        color: rgba(23, 0, 78, 0.9);\n    }\n\n    .todo-div button{\n        filter:opacity(0.5);\n    }\n\n\n\n\n    .todo-div .left-side{\n        display: flex;\n        align-items: center;\n    }\n\n    .todo-div .right-side{\n        display: flex;\n        align-items: center;\n        gap: 20px;\n    }\n\n    .todo-div .todo-dueDate{\n        text-align: center;\n        margin-right: 20px;\n    }\n\n    button{\n        background: transparent;\n        color: black;\n        filter: invert(82%) sepia(3%) saturate(2795%) hue-rotate(196deg) brightness(102%) contrast(96%);\n        border: none;\n        transition-duration: 0.3s;\n        cursor: pointer;\n    }\n\n\n    .edit:hover{\n        filter: invert(64%) sepia(98%) saturate(1347%) hue-rotate(170deg) brightness(102%) contrast(104%) drop-shadow(0 0 0.3rem black);\n    }\n\n    .delete:hover{\n        filter: invert(63%) sepia(72%) saturate(2597%) hue-rotate(316deg) brightness(105%) contrast(104%)  drop-shadow(0 0 0.3rem black);\n    }\n\n    .add-button{\n        margin-bottom: 15px;\n    }\n\n    .add-button:hover{\n        filter: drop-shadow(0 0 0.75rem red);\n        filter: invert(64%) sepia(98%) saturate(1347%) hue-rotate(170deg) brightness(102%) contrast(104%) drop-shadow(0 0 0.3rem black);\n    }\n\n    .todos{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        background-color: var(--mid);\n        flex:6;\n        gap:15px;\n    }\n\n    button{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    h1{\n        line-height: 3rem;\n        font-family: 'cedric';\n        font-weight: 100;\n        margin:0;\n        letter-spacing: 5px;\n        font-size: 5rem;\n        color: var(--w);\n    }\n\n    h2{\n        color: var(--w);\n        margin: 15px 0 0 0 ;\n    }\n\n    h3{\n        margin: 0;\n        color: var(--dark);\n    }\n\n    .button-container{\n        width: 100%;\n        display: flex;\n        gap:15px;\n        align-items: center;\n        justify-content: space-evenly;\n    }\n\n    .popup{\n        position: fixed;\n        display: none;\n        flex-direction: column;\n        background-color: var(--accent);\n        color: var(--w);\n        border-radius: 10px;\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%, -50%);\n        padding: 20px 50px;\n        gap:20px;\n        align-items: center;\n        z-index: 10;\n    }\n\n    .popup button{\n        border-radius: 5px;\n        width: 100px;\n        filter: none;\n        color: var(--w);\n    }\n\n    input:not([type=checkbox]){\n        outline-color: transparent;\n        background-color: var(--w);\n        border: none;\n        border-radius: 10px;\n        width: 100%;\n        padding: 5px 10px;\n    }\n\n\n    input[type=checkbox]{\n        -webkit-appearance: none;\n        appearance: none;\n        background-color:   rgba(255, 255, 255, 1);;\n        margin: 0;\n        cursor: pointer;\n        width: 30px;\n        height: 30px;\n        font: inherit;\n        color: rgba(100, 100, 100, 0.6);\n        border: 0.15em solid rgba(0, 0, 0, 0.5);\n        border-radius: 100px;\n        transform: translateY(0.0em);\n        display: grid;\n        place-content: center;\n    }\n    \n    input[type=\"checkbox\"]::before {\n        content: \"\";\n        width: 30px;\n        height: 30px;\n        border-radius: 100px;\n        transform: scale(0);\n        transition: 120ms transform ease-in-out;\n        background-color:  rgba(0, 0, 0, 0.719);\n        \n      }\n      \n\n    input[type=\"checkbox\"]:checked::before {\n        transform: scale(1);\n    }\n\n    input[type=\"checkbox\"]:focus {\n        outline: max(2px, 0.15em) solid rgba(0, 0, 0, 0.4);\n        outline-offset: max(2px, 0.15em);\n    }\n      \n    \n    select{\n        outline-color: transparent;\n        background-color: var(--w);\n        border: none;\n        border-radius: 10px;\n        width: calc(100% + 20px);\n        padding: 5px 10px;\n    }\n\n    .title-label::after{\n        content: \"*\";\n    }\n\n    .popup button:hover{\n        filter:brightness(0.8);\n    }\n\n    .popup button.confirm{\n        background-color: var(--g);\n        color: var(--dark);\n        padding: 5px;\n    }\n\n    .popup button.cancel{\n        background-color: var(--r);\n        color: var(--dark);\n        padding: 5px;\n    }\n\n    .input-wrapper{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n        width: 250px;\n    }\n\n    .backdrop{\n        pointer-events: none;\n        position: fixed;\n        width: 100%;\n        height: 100%;\n        background: rgba(0, 0, 0, 0.0);\n        transition-duration: 0.3s;\n        z-index: 5;\n    }\n\n    .backdrop.visible{\n        pointer-events:visible;\n        background: rgba(0, 0, 0, 0.4);\n        animation: fade-in 500ms forwards;\n    }\n\n    .popup.visible{\n        display: flex;\n        animation: fade-in 500ms forwards;\n        animation: slide up 500ms forwards;\n    }\n\n    .error{\n        color: var(--r);\n        background-color: var(--dark);\n        padding: 0px 10px;\n    }\n\n    @keyframes fade-in {\n        0%{\n            opacity: 0;\n        }\n\n        100%{\n            opacity: 1;\n        }\n    }\n\n\n    @keyframes fade-out {\n        0%{\n            opacity: 1;\n        }\n\n        100%{\n            opacity: 0;\n        }\n    }\n\n    @keyframes slide-up {\n        0%{\n            transform: translateY(100%);\n        }    \n\n        100%{\n            transform: translateY(0%);\n        }\n\n\n    }"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUc7QUFFbkcsSUFBSUssZ0JBQWdCLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0FBRW5FLElBQUlDLGFBQWEsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7QUFFN0QsSUFBSUUsZ0JBQWdCLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0FBQ3BFLElBQUlHLGFBQWEsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7QUFFOUQsSUFBSUksa0JBQWtCLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0FBRWpFLFNBQVNLLGVBQWVBLENBQUNDLElBQUksRUFBRUMsZ0JBQWdCLEVBQUVDLGVBQWUsRUFBQztFQUNwRSxJQUFJQyxVQUFVLEdBQUdILElBQUksQ0FBQ0csVUFBVTtFQUNoQ0YsZ0JBQWdCLENBQUNHLFNBQVMsR0FBRyxFQUFFO0VBQy9CRCxVQUFVLENBQUNFLE9BQU8sQ0FBQ0MsT0FBTyxJQUFJO0lBQzFCLElBQUlDLFlBQVksR0FBR0wsZUFBZSxDQUFDTSxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQ2xERCxZQUFZLENBQUNFLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQztJQUM5REgsWUFBWSxDQUFDYixhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ2lCLFNBQVMsR0FBR0wsT0FBTyxDQUFDTSxLQUFLO0lBRXRFLElBQUlDLFlBQVksR0FBR04sWUFBWSxDQUFDYixhQUFhLENBQUMsU0FBUyxDQUFDO0lBRXhEbUIsWUFBWSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSTtNQUV6Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO01BR3RCbkIsa0JBQWtCLENBQUNKLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQ2lCLFNBQVMsR0FBSSxZQUFXTCxPQUFPLENBQUNNLEtBQU0sTUFBSztNQUNsRk0sWUFBWSxDQUFDcEIsa0JBQWtCLEVBQUNQLDRDQUFRLENBQUM7TUFDekMsSUFBSTRCLFlBQVksR0FBR3JCLGtCQUFrQixDQUFDSixhQUFhLENBQUMsU0FBUyxDQUFDO01BQzlELElBQUkwQixhQUFhLEdBQUd0QixrQkFBa0IsQ0FBQ0osYUFBYSxDQUFDLFVBQVUsQ0FBQztNQUVoRXlCLFlBQVksQ0FBQ0wsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQUk7UUFDdkNPLFNBQVMsQ0FBQ3ZCLGtCQUFrQixFQUFDUCw0Q0FBUSxDQUFDO01BQzFDLENBQUMsQ0FBQztNQUVGNkIsYUFBYSxDQUFDTixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBSTtRQUN4Q08sU0FBUyxDQUFDdkIsa0JBQWtCLEVBQUNQLDRDQUFRLENBQUM7UUFFdENILG9FQUFnQyxDQUFDa0IsT0FBTyxDQUFDTSxLQUFLLENBQUM7UUFDL0MsSUFBR3pCLHdEQUFvQixLQUFLbUIsT0FBTyxDQUFDTSxLQUFLLEVBQUV2Qix5REFBaUIsQ0FBQ1csSUFBSSxDQUFDRyxVQUFVLENBQUNILElBQUksQ0FBQ0csVUFBVSxDQUFDb0IsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZHUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ08sSUFBSSxDQUFDQyxTQUFTLENBQUNyQywrQ0FBVyxDQUFDLENBQUM7UUFDeENzQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLEVBQUVILElBQUksQ0FBQ0MsU0FBUyxDQUFDckMsK0NBQVcsQ0FBQyxDQUFDO1FBQ3pEVyxlQUFlLENBQUNDLElBQUksRUFBRUMsZ0JBQWdCLEVBQUVDLGVBQWUsQ0FBQztRQUN4RCxJQUFHRixJQUFJLENBQUNHLFVBQVUsQ0FBQ29CLE1BQU0sR0FBRyxDQUFDLEVBQUVLLDBCQUEwQixDQUFDekMsa0RBQWMsQ0FBQztNQUM3RSxDQUFDLENBQUM7TUFHRjRCLENBQUMsQ0FBQ2MsZUFBZSxFQUFFO0lBR3ZCLENBQUMsQ0FBQztJQUVGLElBQUlDLFVBQVUsR0FBR3ZCLFlBQVksQ0FBQ2IsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUVwRG9DLFVBQVUsQ0FBQ2hCLGdCQUFnQixDQUFDLE9BQU8sRUFBR0MsQ0FBQyxJQUFJO01BQ3ZDbkIsZ0JBQWdCLENBQUNGLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQ3FDLEtBQUssR0FBR3pCLE9BQU8sQ0FBQ00sS0FBSztNQUNsRWhCLGdCQUFnQixDQUFDRixhQUFhLENBQUMsWUFBWSxDQUFDLENBQUNzQyxXQUFXLEdBQUcxQixPQUFPLENBQUNNLEtBQUs7TUFHeEVNLFlBQVksQ0FBQ3RCLGdCQUFnQixFQUFDTCw0Q0FBUSxDQUFDO01BQ3ZDSyxnQkFBZ0IsQ0FBQ3FDLE9BQU8sQ0FBQ3JCLEtBQUssR0FBR04sT0FBTyxDQUFDTSxLQUFLO01BRTlDRyxDQUFDLENBQUNjLGVBQWUsRUFBRTtJQUN2QixDQUFDLENBQUM7SUFFRnRCLFlBQVksQ0FBQ08sZ0JBQWdCLENBQUMsT0FBTyxFQUFHQyxDQUFDLElBQUk7TUFDekMxQix5REFBaUIsQ0FBQ2lCLE9BQU8sQ0FBQztJQUM5QixDQUFDLENBQUM7SUFFRkwsZ0JBQWdCLENBQUNpQyxXQUFXLENBQUMzQixZQUFZLENBQUM7RUFDOUMsQ0FBQyxDQUFDO0VBRUYsSUFBR1AsSUFBSSxDQUFDRyxVQUFVLENBQUNvQixNQUFNLEdBQUcsQ0FBQyxFQUFFSywwQkFBMEIsQ0FBQ3pDLGtEQUFjLENBQUM7QUFDN0U7QUFFTyxTQUFTZ0QsWUFBWUEsQ0FBQzdCLE9BQU8sRUFBRVgsYUFBYSxFQUFFeUMsWUFBWSxFQUFDO0VBRTlEekMsYUFBYSxDQUFDUyxTQUFTLEdBQUcsRUFBRTtFQUM1QixJQUFHRSxPQUFPLEtBQUsrQixTQUFTLEVBQUU7RUFFMUIsSUFBSUMsY0FBYyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7RUFHMUMsSUFBSUMsT0FBTyxHQUFHakMsT0FBTyxDQUFDaUMsT0FBTztFQUM3QkEsT0FBTyxDQUFDbEMsT0FBTyxDQUFDbUMsSUFBSSxJQUFJO0lBQ3BCLElBQUlDLFNBQVMsR0FBR0wsWUFBWSxDQUFDNUIsU0FBUyxDQUFDLElBQUksQ0FBQztJQUM1QyxJQUFJa0MsWUFBWSxHQUFHRCxTQUFTLENBQUMvQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7SUFLN0QrQyxTQUFTLENBQUNoQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO0lBQ3hEK0IsU0FBUyxDQUFDL0MsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDaUIsU0FBUyxHQUFHNkIsSUFBSSxDQUFDNUIsS0FBSztJQUM3RDZCLFNBQVMsQ0FBQy9DLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDaUIsU0FBUyxHQUFHZ0MsYUFBYSxDQUFDSCxJQUFJLENBQUNJLFdBQVcsRUFBRSxFQUFFLENBQUM7SUFBQztJQUM3RkgsU0FBUyxDQUFDL0MsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDaUIsU0FBUyxHQUFHNkIsSUFBSSxDQUFDSyxPQUFPO0lBQ2pFSCxZQUFZLENBQUNJLE9BQU8sR0FBR04sSUFBSSxDQUFDTyxTQUFTO0lBR3JDTixTQUFTLENBQUNoQyxTQUFTLENBQUN1QyxHQUFHLENBQUNWLGNBQWMsQ0FBQ0UsSUFBSSxDQUFDUyxRQUFRLENBQUMsQ0FBQztJQUV0RCxJQUFJcEMsWUFBWSxHQUFHNEIsU0FBUyxDQUFDL0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUVyRG1CLFlBQVksQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFHQyxDQUFDLElBQUk7TUFFekNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUVuQm5CLGtCQUFrQixDQUFDSixhQUFhLENBQUMsSUFBSSxDQUFDLENBQUNpQixTQUFTLEdBQUksWUFBVzZCLElBQUksQ0FBQzVCLEtBQU0sTUFBSztNQUMvRU0sWUFBWSxDQUFDcEIsa0JBQWtCLEVBQUNQLDRDQUFRLENBQUM7TUFDekMsSUFBSTJELGVBQWUsR0FBR3BELGtCQUFrQixDQUFDSixhQUFhLENBQUMsU0FBUyxDQUFDO01BQ2pFLElBQUl5RCxnQkFBZ0IsR0FBR3JELGtCQUFrQixDQUFDSixhQUFhLENBQUMsVUFBVSxDQUFDO01BRW5FLElBQUl5QixZQUFZLEdBQUcrQixlQUFlLENBQUMxQyxTQUFTLENBQUMsSUFBSSxDQUFDO01BQ2xEMEMsZUFBZSxDQUFDRSxVQUFVLENBQUNDLFlBQVksQ0FBQ2xDLFlBQVksRUFBRStCLGVBQWUsQ0FBQztNQUV0RSxJQUFJOUIsYUFBYSxHQUFHK0IsZ0JBQWdCLENBQUMzQyxTQUFTLENBQUMsSUFBSSxDQUFDO01BQ3BEMkMsZ0JBQWdCLENBQUNDLFVBQVUsQ0FBQ0MsWUFBWSxDQUFDakMsYUFBYSxFQUFFK0IsZ0JBQWdCLENBQUM7TUFFekVoQyxZQUFZLENBQUNMLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFJO1FBQ3ZDTyxTQUFTLENBQUN2QixrQkFBa0IsRUFBQ1AsNENBQVEsQ0FBQztNQUMxQyxDQUFDLENBQUM7TUFFRjZCLGFBQWEsQ0FBQ04sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQUk7UUFDeENPLFNBQVMsQ0FBQ3ZCLGtCQUFrQixFQUFDUCw0Q0FBUSxDQUFDO1FBQ3RDSixvRUFBZ0MsQ0FBQ3FELElBQUksQ0FBQzVCLEtBQUssQ0FBQztRQUM1Q2MsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxFQUFFSCxJQUFJLENBQUNDLFNBQVMsQ0FBQ3JDLCtDQUFXLENBQUMsQ0FBQztRQUN6RCtDLFlBQVksQ0FBQzdCLE9BQU8sRUFBRVgsYUFBYSxFQUFFeUMsWUFBWSxDQUFDO01BQ3RELENBQUMsQ0FBQztNQUVGckIsQ0FBQyxDQUFDYyxlQUFlLEVBQUU7SUFFdkIsQ0FBQyxDQUFDO0lBRUYsSUFBSUMsVUFBVSxHQUFHVyxTQUFTLENBQUMvQyxhQUFhLENBQUMsT0FBTyxDQUFDO0lBRWpEb0MsVUFBVSxDQUFDaEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFHQyxDQUFDLElBQUk7TUFDdkNsQixhQUFhLENBQUNILGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQ3FDLEtBQUssR0FBR1MsSUFBSSxDQUFDNUIsS0FBSztNQUM1RGYsYUFBYSxDQUFDSCxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUNzQyxXQUFXLEdBQUdRLElBQUksQ0FBQzVCLEtBQUs7TUFFbEVmLGFBQWEsQ0FBQ0gsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUNxQyxLQUFLLEdBQUdTLElBQUksQ0FBQ0ksV0FBVztNQUV4RS9DLGFBQWEsQ0FBQ0gsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDcUMsS0FBSyxHQUFHUyxJQUFJLENBQUNLLE9BQU87TUFDaEVoRCxhQUFhLENBQUNILGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQ3FDLEtBQUssR0FBR1MsSUFBSSxDQUFDUyxRQUFRO01BR2xFL0IsWUFBWSxDQUFDckIsYUFBYSxFQUFDTiw0Q0FBUSxDQUFDO01BQ3BDTSxhQUFhLENBQUNvQyxPQUFPLENBQUNyQixLQUFLLEdBQUc0QixJQUFJLENBQUM1QixLQUFLO01BRXhDRyxDQUFDLENBQUNjLGVBQWUsRUFBRTtJQUN2QixDQUFDLENBQUM7SUFFRmEsWUFBWSxDQUFDNUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFHQyxDQUFDLElBQUk7TUFDekN5QixJQUFJLENBQUNPLFNBQVMsR0FBRyxDQUFDUCxJQUFJLENBQUNPLFNBQVM7TUFDaEMsSUFBR1AsSUFBSSxDQUFDTyxTQUFTLEVBQUVOLFNBQVMsQ0FBQ2hDLFNBQVMsQ0FBQ3VDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUNuRFAsU0FBUyxDQUFDaEMsU0FBUyxDQUFDQyxNQUFNLENBQUMsV0FBVyxDQUFDO01BQzVDSyxDQUFDLENBQUNjLGVBQWUsRUFBRTtJQUN2QixDQUFDLENBQUM7SUFFRlksU0FBUyxDQUFDM0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFHQyxDQUFDLElBQUc7TUFDckMsSUFBRzBCLFNBQVMsQ0FBQ2hDLFNBQVMsQ0FBQzhDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBQztRQUN4Q0Msa0JBQWtCLENBQUMsS0FBSyxDQUFDO1FBQ3pCZixTQUFTLENBQUMvQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQ2lCLFNBQVMsR0FBR2dDLGFBQWEsQ0FBQ0gsSUFBSSxDQUFDSSxXQUFXLEVBQUUsRUFBRSxDQUFDO01BQ2hHLENBQUMsTUFBSTtRQUNEWSxrQkFBa0IsQ0FBQ2hCLElBQUksQ0FBQztRQUN4QkMsU0FBUyxDQUFDL0MsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUNpQixTQUFTLEdBQUc2QixJQUFJLENBQUNJLFdBQVc7TUFDN0U7SUFDSixDQUFDLENBQUM7SUFHRixJQUFHSixJQUFJLENBQUNPLFNBQVMsRUFBRU4sU0FBUyxDQUFDaEMsU0FBUyxDQUFDdUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQ25EUCxTQUFTLENBQUNoQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFFNUNmLGFBQWEsQ0FBQ3VDLFdBQVcsQ0FBQ08sU0FBUyxDQUFDO0VBQ3hDLENBQUMsQ0FBQztBQUNOO0FBRU8sU0FBU2IsMEJBQTBCQSxDQUFDdEIsT0FBTyxFQUFDO0VBRS9DLElBQUksQ0FBQ0EsT0FBTyxFQUFFLE9BQU9VLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztFQUV6QyxJQUFJTCxLQUFLLEdBQUdOLE9BQU8sQ0FBQ00sS0FBSztFQUN6QixJQUFJNkMsZUFBZSxHQUFJakUsZ0JBQWdCLENBQUNrRSxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7RUFDeEVELGVBQWUsQ0FBQ3BELE9BQU8sQ0FBQ3NELGNBQWMsSUFBSTtJQUN0QyxJQUFJQyxZQUFZLEdBQUdELGNBQWMsQ0FBQ2pFLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqRSxJQUFJbUUsbUJBQW1CLEdBQUcsSUFBSTtJQUM5QixJQUFHRCxZQUFZLEtBQUssSUFBSSxFQUFFQyxtQkFBbUIsR0FBR0QsWUFBWSxDQUFDakQsU0FBUztJQUV0RSxJQUFHa0QsbUJBQW1CLEtBQUtqRCxLQUFLLEVBQUM7TUFDN0IrQyxjQUFjLENBQUNsRCxTQUFTLENBQUN1QyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQzVDLENBQUMsTUFBSztNQUNGVyxjQUFjLENBQUNsRCxTQUFTLENBQUNDLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDL0M7RUFDSixDQUFDLENBQUM7QUFDTjtBQUVBLFNBQVM4QyxrQkFBa0JBLENBQUNoQixJQUFJLEVBQUM7RUFDN0IsSUFBSTVCLEtBQUssR0FBRzRCLElBQUksQ0FBQzVCLEtBQUs7RUFFdEIsSUFBRzRCLElBQUksS0FBSyxLQUFLLEVBQUU1QixLQUFLLEdBQUcsRUFBRTtFQUU3QixJQUFJa0QsWUFBWSxHQUFJbkUsYUFBYSxDQUFDK0QsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0VBQy9ESSxZQUFZLENBQUN6RCxPQUFPLENBQUMwRCxXQUFXLElBQUk7SUFDaEMsSUFBSUgsWUFBWSxHQUFHRyxXQUFXLENBQUNyRSxhQUFhLENBQUMsYUFBYSxDQUFDO0lBQzNELElBQUlzRSxnQkFBZ0IsR0FBRyxJQUFJO0lBQzNCLElBQUdKLFlBQVksS0FBSyxJQUFJLEVBQUVJLGdCQUFnQixHQUFHSixZQUFZLENBQUNqRCxTQUFTO0lBRW5FLElBQUdxRCxnQkFBZ0IsS0FBS3BELEtBQUssRUFBQztNQUMxQm1ELFdBQVcsQ0FBQ3RELFNBQVMsQ0FBQ3VDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDekMsQ0FBQyxNQUFLO01BQ0ZlLFdBQVcsQ0FBQ3RELFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFVBQVUsQ0FBQztNQUN4QyxJQUFJdUQsU0FBUyxHQUFHRixXQUFXLENBQUNyRSxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUNpQixTQUFTO01BQ2xFb0QsV0FBVyxDQUFDckUsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUNpQixTQUFTLEdBQUdnQyxhQUFhLENBQUN4RCxnRUFBNEIsQ0FBQzhFLFNBQVMsQ0FBQyxDQUFDckIsV0FBVyxFQUFFLEVBQUUsQ0FBQztJQUNySTtFQUNKLENBQUMsQ0FBQztBQUNOO0FBR08sU0FBUzFCLFlBQVlBLENBQUNpRCxZQUFZLEVBQUU1RSxRQUFRLEVBQUM7RUFDaEQ0RSxZQUFZLENBQUMxRCxTQUFTLENBQUN1QyxHQUFHLENBQUMsU0FBUyxDQUFDO0VBQ3JDekQsUUFBUSxDQUFDa0IsU0FBUyxDQUFDdUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztBQUNyQztBQUVPLFNBQVMzQixTQUFTQSxDQUFDOEMsWUFBWSxFQUFFNUUsUUFBUSxFQUFDO0VBQzdDNEUsWUFBWSxDQUFDMUQsU0FBUyxDQUFDQyxNQUFNLENBQUMsU0FBUyxDQUFDO0VBQ3hDbkIsUUFBUSxDQUFDa0IsU0FBUyxDQUFDQyxNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ3hDO0FBTU8sU0FBUzBELFlBQVlBLENBQUNDLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxTQUFTLEVBQUM7RUFDdERGLEtBQUssQ0FBQzNFLGFBQWEsQ0FBQzRFLFVBQVUsQ0FBQyxDQUFDM0QsU0FBUyxHQUFDNEQsU0FBUztBQUN2RDtBQUVBLFNBQVM1QixhQUFhQSxDQUFDNkIsTUFBTSxFQUFFakQsTUFBTSxFQUFDO0VBQ2xDLElBQUlpRCxNQUFNLENBQUNqRCxNQUFNLEdBQUdBLE1BQU0sR0FBRyxDQUFDLEVBQUUsT0FBT2lELE1BQU07RUFDN0MsSUFBSUMsT0FBTyxHQUFHRCxNQUFNLENBQUNFLEtBQUssQ0FBQyxDQUFDLEVBQUVuRCxNQUFNLENBQUM7RUFDckMsT0FBT2tELE9BQU8sR0FBRyxLQUFLO0FBQzFCOzs7Ozs7Ozs7Ozs7Ozs7QUM5T3FCO0FBQ3dEO0FBRTdDO0FBQ087QUFHdkMsSUFBSU8sSUFBSSxHQUFHdkYsUUFBUSxDQUFDd0YsYUFBYSxDQUFDLE1BQU0sQ0FBQztBQUN6Q0QsSUFBSSxDQUFDRSxHQUFHLEdBQUcsTUFBTTtBQUNqQkYsSUFBSSxDQUFDRyxJQUFJLEdBQUdKLCtDQUFJO0FBQ2hCdEYsUUFBUSxDQUFDMkYsSUFBSSxDQUFDbEQsV0FBVyxDQUFDOEMsSUFBSSxDQUFDO0FBRy9CRiw2Q0FBSyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiOEc7QUFDeEM7QUFDeEI7QUFHOUMsSUFBSXZGLFFBQVEsR0FBR0UsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0FBRXpELElBQUlGLGdCQUFnQixHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztBQUNuRSxJQUFJUSxlQUFlLEdBQUdULFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0FBR2pFLElBQUlDLGFBQWEsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7QUFDN0QsSUFBSTBDLFlBQVksR0FBRzNDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBRzNELElBQUkyRixnQkFBZ0IsR0FBRzVGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUM3RCxJQUFJNEYsZUFBZSxHQUFHN0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFFOUQsSUFBSTZGLGFBQWEsR0FBRzlGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUN2RCxJQUFJOEYsWUFBWSxHQUFHL0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0FBRXhELElBQUlFLGdCQUFnQixHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztBQUNwRSxJQUFJRyxhQUFhLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0FBSXZELElBQUlOLFdBQVc7QUFDZixJQUFJRCxjQUFjO0FBQ2xCLFNBQVNHLGNBQWNBLENBQUNVLElBQUksRUFBQztFQUNoQ1osV0FBVyxHQUFHWSxJQUFJO0FBQ3RCO0FBQUM7QUFDTSxTQUFTWCxpQkFBaUJBLENBQUNpQixPQUFPLEVBQUM7RUFDdENuQixjQUFjLEdBQUdtQixPQUFPO0VBQ3hCUCxrRUFBZSxDQUFDWCxXQUFXLEVBQUNJLGdCQUFnQixFQUFDVSxlQUFlLENBQUM7RUFDN0RpQywrREFBWSxDQUFDaEQsY0FBYyxFQUFDUSxhQUFhLEVBQUN5QyxZQUFZLENBQUM7RUFDdkRSLDZFQUEwQixDQUFDekMsY0FBYyxDQUFDO0FBQzlDO0FBQUM7QUFJRCxJQUFJc0csYUFBYSxHQUFHL0QsWUFBWSxDQUFDZ0UsT0FBTyxDQUFDLE1BQU0sQ0FBQztBQUNoRCxJQUFJQyxRQUFRLEdBQUduRSxJQUFJLENBQUNvRSxLQUFLLENBQUNILGFBQWEsQ0FBQztBQUN4QyxJQUFJekYsSUFBSTtBQUVSLElBQUcyRixRQUFRLEtBQUssSUFBSSxFQUFDO0VBQ2pCM0YsSUFBSSxHQUFHNkUseURBQVcsQ0FBQyxPQUFPLENBQUM7RUFDM0I3RSxJQUFJLENBQUM2RixVQUFVLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0VBQ2pGN0YsSUFBSSxDQUFDNkYsVUFBVSxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztFQUNuRTdGLElBQUksQ0FBQzZGLFVBQVUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLHdCQUF3QixFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7RUFDeEY3RixJQUFJLENBQUM2RixVQUFVLENBQUMsWUFBWSxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0VBQzlFN0YsSUFBSSxDQUFDNkYsVUFBVSxDQUFDLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNoRSxDQUFDLE1BQUs7RUFFRjdGLElBQUksR0FBRzZFLHlEQUFXLENBQUNjLFFBQVEsQ0FBQ0csUUFBUSxDQUFDO0VBQ3JDLElBQUkzRixVQUFVLEdBQUd3RixRQUFRLENBQUN4RixVQUFVO0VBQ3BDQSxVQUFVLENBQUNFLE9BQU8sQ0FBQ0MsT0FBTyxJQUFJO0lBQzFCLElBQUl5RixVQUFVLEdBQUduQiw0REFBYyxDQUFDdEUsT0FBTyxDQUFDTSxLQUFLLENBQUM7SUFDOUNaLElBQUksQ0FBQ2dHLFVBQVUsQ0FBQ0QsVUFBVSxDQUFDO0lBQzNCLElBQUl4RCxPQUFPLEdBQUdqQyxPQUFPLENBQUNpQyxPQUFPO0lBQzdCQSxPQUFPLENBQUNsQyxPQUFPLENBQUNtQyxJQUFJLElBQUc7TUFDbkJ1RCxVQUFVLENBQUNGLFVBQVUsQ0FBQ3JELElBQUksQ0FBQzVCLEtBQUssRUFBRTRCLElBQUksQ0FBQ0ksV0FBVyxFQUFFSixJQUFJLENBQUNLLE9BQU8sRUFBRUwsSUFBSSxDQUFDUyxRQUFRLEVBQUVULElBQUksQ0FBQ08sU0FBUyxDQUFDO0lBQ3BHLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNOO0FBS0F6RCxjQUFjLENBQUNVLElBQUksQ0FBQztBQUNwQlgsaUJBQWlCLENBQUNELFdBQVcsQ0FBQ2UsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBWXJDLFNBQVMyRSxLQUFLQSxDQUFBLEVBQUU7RUFDbkJtQixlQUFlLEVBQUU7RUFDakJDLGlCQUFpQixFQUFFO0FBR3ZCO0FBSUEsU0FBU0QsZUFBZUEsQ0FBQSxFQUFFO0VBQ3RCWixnQkFBZ0IsQ0FBQ3ZFLGdCQUFnQixDQUFDLE9BQU8sRUFBR0MsQ0FBQyxJQUFHO0lBQ3hDRywrREFBWSxDQUFDb0UsZUFBZSxFQUFFL0YsUUFBUSxDQUFDO0VBQy9DLENBQUMsQ0FBQztFQUVGZ0csYUFBYSxDQUFDekUsZ0JBQWdCLENBQUMsT0FBTyxFQUFHQyxDQUFDLElBQUc7SUFDckNHLCtEQUFZLENBQUNzRSxZQUFZLEVBQUVqRyxRQUFRLENBQUM7RUFDNUMsQ0FBQyxDQUFDO0FBQ047QUFFQSxTQUFTMkcsaUJBQWlCQSxDQUFBLEVBQUU7RUFDeEIsSUFBSUMsb0JBQW9CLEdBQUdYLFlBQVksQ0FBQzlGLGFBQWEsQ0FBQyxVQUFVLENBQUM7RUFDakUsSUFBSTBHLG1CQUFtQixHQUFHWixZQUFZLENBQUM5RixhQUFhLENBQUMsU0FBUyxDQUFDO0VBRS9EMEcsbUJBQW1CLENBQUN0RixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSTtJQUNoRE0sNERBQVMsQ0FBQ21FLFlBQVksRUFBRWpHLFFBQVEsQ0FBQztFQUNyQyxDQUFDLENBQUM7RUFFRjRHLG9CQUFvQixDQUFDckYsZ0JBQWdCLENBQUMsT0FBTyxFQUFHQyxDQUFDLElBQUk7SUFDakQsSUFBSUgsS0FBSyxHQUFHNEUsWUFBWSxDQUFDOUYsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDcUMsS0FBSztJQUUxRCxJQUFHNUMsY0FBYyxDQUFDa0gsZ0JBQWdCLENBQUN6RixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtNQUM5Q3dELCtEQUFZLENBQUNvQixZQUFZLEVBQUUsY0FBYyxFQUFFLDRCQUE0QixDQUFDO01BQ3hFO0lBQ0o7SUFDQSxJQUFHNUUsS0FBSyxLQUFLLEVBQUUsRUFBRTtNQUNid0QsK0RBQVksQ0FBQ29CLFlBQVksRUFBRSxjQUFjLEVBQUUsdUJBQXVCLENBQUM7TUFDbkU7SUFDSjtJQUNBcEIsK0RBQVksQ0FBQ29CLFlBQVksRUFBRSxjQUFjLEVBQUUsRUFBRSxDQUFDO0lBRTlDLElBQUk1QyxXQUFXLEdBQUc0QyxZQUFZLENBQUM5RixhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQ3FDLEtBQUs7SUFDdEUsSUFBSWMsT0FBTyxHQUFHMkMsWUFBWSxDQUFDOUYsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDcUMsS0FBSztJQUM5RCxJQUFJa0IsUUFBUSxHQUFHdUMsWUFBWSxDQUFDOUYsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDcUMsS0FBSztJQUVoRTVDLGNBQWMsQ0FBQzBHLFVBQVUsQ0FBQ2pGLEtBQUssRUFBQ2dDLFdBQVcsRUFBQ0MsT0FBTyxFQUFDSSxRQUFRLEVBQUUsS0FBSyxDQUFDO0lBQ3BFdkIsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxFQUFFSCxJQUFJLENBQUNDLFNBQVMsQ0FBQ3JDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pEaUMsNERBQVMsQ0FBQ21FLFlBQVksRUFBRWpHLFFBQVEsQ0FBQztJQUNqQzRDLCtEQUFZLENBQUNoRCxjQUFjLEVBQUVRLGFBQWEsRUFBRXlDLFlBQVksQ0FBQztFQUM3RCxDQUFDLENBQUM7RUFHRixJQUFJa0UsdUJBQXVCLEdBQUdoQixlQUFlLENBQUM1RixhQUFhLENBQUMsVUFBVSxDQUFDO0VBQ3ZFLElBQUk2RyxzQkFBc0IsR0FBR2pCLGVBQWUsQ0FBQzVGLGFBQWEsQ0FBQyxTQUFTLENBQUM7RUFFckU2RyxzQkFBc0IsQ0FBQ3pGLGdCQUFnQixDQUFDLE9BQU8sRUFBR0MsQ0FBQyxJQUFJO0lBQ25ETSw0REFBUyxDQUFDaUUsZUFBZSxFQUFFL0YsUUFBUSxDQUFDO0VBQ3hDLENBQUMsQ0FBQztFQUVGK0csdUJBQXVCLENBQUN4RixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSTtJQUNwRCxJQUFJSCxLQUFLLEdBQUcwRSxlQUFlLENBQUM1RixhQUFhLENBQUMsWUFBWSxDQUFDLENBQUNxQyxLQUFLO0lBRTdELElBQUczQyxXQUFXLENBQUNvSCxrQkFBa0IsQ0FBQzVGLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO01BQzdDd0QsK0RBQVksQ0FBQ2tCLGVBQWUsRUFBRSxjQUFjLEVBQUUsNEJBQTRCLENBQUM7TUFDM0U7SUFDSjtJQUNBLElBQUcxRSxLQUFLLEtBQUssRUFBRSxFQUFFO01BQ2J3RCwrREFBWSxDQUFDa0IsZUFBZSxFQUFFLGNBQWMsRUFBRSx1QkFBdUIsQ0FBQztNQUN0RTtJQUNKO0lBQ0FsQiwrREFBWSxDQUFDa0IsZUFBZSxFQUFFLGNBQWMsRUFBRSxFQUFFLENBQUM7SUFFakRsRyxXQUFXLENBQUNxSCxhQUFhLENBQUM3RixLQUFLLENBQUM7SUFDaEN2QixpQkFBaUIsQ0FBQ0QsV0FBVyxDQUFDc0gsZ0JBQWdCLENBQUM5RixLQUFLLENBQUMsQ0FBQztJQUN0RGMsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxFQUFFSCxJQUFJLENBQUNDLFNBQVMsQ0FBQ3JDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pEaUMsNERBQVMsQ0FBQ2lFLGVBQWUsRUFBRS9GLFFBQVEsQ0FBQztJQUNwQ1Esa0VBQWUsQ0FBQ0MsSUFBSSxFQUFDUixnQkFBZ0IsRUFBQ1UsZUFBZSxDQUFDO0VBQzFELENBQUMsQ0FBQztFQUVGLElBQUl5Ryx3QkFBd0IsR0FBRy9HLGdCQUFnQixDQUFDRixhQUFhLENBQUMsVUFBVSxDQUFDO0VBQ3pFLElBQUlrSCx1QkFBdUIsR0FBR2hILGdCQUFnQixDQUFDRixhQUFhLENBQUMsU0FBUyxDQUFDO0VBRXZFa0gsdUJBQXVCLENBQUM5RixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSTtJQUNwRE0sNERBQVMsQ0FBQ3pCLGdCQUFnQixFQUFFTCxRQUFRLENBQUM7RUFDekMsQ0FBQyxDQUFDO0VBRUZvSCx3QkFBd0IsQ0FBQzdGLGdCQUFnQixDQUFDLE9BQU8sRUFBR0MsQ0FBQyxJQUFJO0lBQ3JELElBQUlILEtBQUssR0FBR2hCLGdCQUFnQixDQUFDRixhQUFhLENBQUMsWUFBWSxDQUFDLENBQUNxQyxLQUFLO0lBRTlELElBQUczQyxXQUFXLENBQUNvSCxrQkFBa0IsQ0FBQzVGLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO01BQzdDd0QsK0RBQVksQ0FBQ3hFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSw0QkFBNEIsQ0FBQztNQUM1RTtJQUNKO0lBQ0EsSUFBR2dCLEtBQUssS0FBSyxFQUFFLEVBQUU7TUFDYndELCtEQUFZLENBQUN4RSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsdUJBQXVCLENBQUM7TUFDdkU7SUFDSjtJQUNBd0UsK0RBQVksQ0FBQ3hFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxFQUFFLENBQUM7SUFHbERSLFdBQVcsQ0FBQ3NILGdCQUFnQixDQUFDOUcsZ0JBQWdCLENBQUNxQyxPQUFPLENBQUNyQixLQUFLLENBQUMsQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0lBQzFFYyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLEVBQUVILElBQUksQ0FBQ0MsU0FBUyxDQUFDckMsV0FBVyxDQUFDLENBQUM7SUFDekRpQyw0REFBUyxDQUFDekIsZ0JBQWdCLEVBQUVMLFFBQVEsQ0FBQztJQUNyQ1Esa0VBQWUsQ0FBQ0MsSUFBSSxFQUFDUixnQkFBZ0IsRUFBQ1UsZUFBZSxDQUFDO0VBQzFELENBQUMsQ0FBQztFQUdGLElBQUkyRyxxQkFBcUIsR0FBR2hILGFBQWEsQ0FBQ0gsYUFBYSxDQUFDLFVBQVUsQ0FBQztFQUNuRSxJQUFJb0gsb0JBQW9CLEdBQUdqSCxhQUFhLENBQUNILGFBQWEsQ0FBQyxTQUFTLENBQUM7RUFFakVvSCxvQkFBb0IsQ0FBQ2hHLGdCQUFnQixDQUFDLE9BQU8sRUFBR0MsQ0FBQyxJQUFJO0lBQ2pETSw0REFBUyxDQUFDeEIsYUFBYSxFQUFFTixRQUFRLENBQUM7RUFDdEMsQ0FBQyxDQUFDO0VBRUZzSCxxQkFBcUIsQ0FBQy9GLGdCQUFnQixDQUFDLE9BQU8sRUFBR0MsQ0FBQyxJQUFJO0lBQ2xELElBQUlILEtBQUssR0FBR2YsYUFBYSxDQUFDSCxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUNxQyxLQUFLO0lBQzNELElBQUlhLFdBQVcsR0FBRy9DLGFBQWEsQ0FBQ0gsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUNxQyxLQUFLO0lBQ3ZFLElBQUljLE9BQU8sR0FBR2hELGFBQWEsQ0FBQ0gsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDcUMsS0FBSztJQUMvRCxJQUFJa0IsUUFBUSxHQUFHcEQsYUFBYSxDQUFDSCxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUNxQyxLQUFLO0lBR2pFLElBQUc1QyxjQUFjLENBQUNrSCxnQkFBZ0IsQ0FBQ3pGLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO01BQzlDLElBQUdBLEtBQUssS0FBS2YsYUFBYSxDQUFDb0MsT0FBTyxDQUFDckIsS0FBSyxFQUFDO1FBQ3pDd0QsK0RBQVksQ0FBQ3ZFLGFBQWEsRUFBRSxjQUFjLEVBQUUsNEJBQTRCLENBQUM7UUFDekU7TUFDQTtJQUNKO0lBQ0EsSUFBR2UsS0FBSyxLQUFLLEVBQUUsRUFBRTtNQUNid0QsK0RBQVksQ0FBQ3ZFLGFBQWEsRUFBRSxjQUFjLEVBQUUsdUJBQXVCLENBQUM7TUFDcEU7SUFDSjtJQUNBdUUsK0RBQVksQ0FBQ3ZFLGFBQWEsRUFBRSxjQUFjLEVBQUUsRUFBRSxDQUFDO0lBRS9DbUIsT0FBTyxDQUFDQyxHQUFHLENBQUNwQixhQUFhLENBQUNvQyxPQUFPLENBQUNyQixLQUFLLENBQUM7SUFDeENJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDOUIsY0FBYyxDQUFDK0UsYUFBYSxDQUFDckUsYUFBYSxDQUFDb0MsT0FBTyxDQUFDckIsS0FBSyxDQUFDLENBQUM7SUFFdEUsSUFBSW1HLFVBQVUsR0FBRzVILGNBQWMsQ0FBQytFLGFBQWEsQ0FBQ3JFLGFBQWEsQ0FBQ29DLE9BQU8sQ0FBQ3JCLEtBQUssQ0FBQztJQUUxRW1HLFVBQVUsQ0FBQ25HLEtBQUssR0FBR0EsS0FBSztJQUN4Qm1HLFVBQVUsQ0FBQ25FLFdBQVcsR0FBR0EsV0FBVztJQUNwQ21FLFVBQVUsQ0FBQ2xFLE9BQU8sR0FBR0EsT0FBTztJQUc1QmtFLFVBQVUsQ0FBQzlELFFBQVEsR0FBR0EsUUFBUTtJQUU5QjVCLDREQUFTLENBQUN4QixhQUFhLEVBQUVOLFFBQVEsQ0FBQztJQUVsQ0osY0FBYyxDQUFDNkgsU0FBUyxFQUFFO0lBQzFCdEYsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxFQUFFSCxJQUFJLENBQUNDLFNBQVMsQ0FBQ3JDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pEK0MsK0RBQVksQ0FBQ2hELGNBQWMsRUFBQ1EsYUFBYSxFQUFDeUMsWUFBWSxDQUFDO0VBQzNELENBQUMsQ0FBQztBQUlOOzs7Ozs7Ozs7Ozs7Ozs7O0FDek9PLE1BQU11QyxlQUFlLEdBQUdBLENBQUMvRCxLQUFLLEVBQUVnQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUksUUFBUSxFQUFFRixTQUFTLEtBQUk7RUFDaEYsT0FBTTtJQUNGbkMsS0FBSztJQUNMZ0MsV0FBVztJQUNYQyxPQUFPO0lBQ1BJLFFBQVE7SUFDUkY7RUFDSixDQUFDO0FBQ0wsQ0FBQztBQUdNLE1BQU02QixjQUFjLEdBQUloRSxLQUFLLElBQUk7RUFDcEMsSUFBSTJCLE9BQU8sR0FBRyxFQUFFO0VBRWhCLE1BQU0wRSxPQUFPLEdBQUlDLFFBQVEsSUFBSTtJQUN6QjNFLE9BQU8sQ0FBQzRFLElBQUksQ0FBQ0QsUUFBUSxDQUFDO0lBQ3RCRixTQUFTLEVBQUU7RUFDZixDQUFDO0VBRUQsTUFBTUEsU0FBUyxHQUFHQSxDQUFBLEtBQUk7SUFDbEJ6RSxPQUFPLENBQUM2RSxJQUFJLENBQUNDLE1BQU0sQ0FBQztFQUV4QixDQUFDO0VBRUQsTUFBTUEsTUFBTSxHQUFHQSxDQUFDQyxDQUFDLEVBQUNDLENBQUMsS0FBSTtJQUNuQixJQUFHRCxDQUFDLENBQUNyRSxRQUFRLEdBQUdzRSxDQUFDLENBQUN0RSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7RUFDekMsQ0FBQztFQUVELE1BQU00QyxVQUFVLEdBQUdBLENBQUNqRixLQUFLLEVBQUVnQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUksUUFBUSxFQUFFRixTQUFTLEtBQUk7SUFDcEUsSUFBR0EsU0FBUyxLQUFLLElBQUksSUFBSUEsU0FBUyxLQUFLVixTQUFTLEVBQUVVLFNBQVMsR0FBRyxLQUFLO0lBQ25FLElBQUl5RSxXQUFXLEdBQUc3QyxlQUFlLENBQUMvRCxLQUFLLEVBQUVnQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUksUUFBUSxFQUFFRixTQUFTLENBQUM7SUFDbkZrRSxPQUFPLENBQUNPLFdBQVcsQ0FBQztFQUN4QixDQUFDO0VBRUQsTUFBTUMsVUFBVSxHQUFJUCxRQUFRLElBQUk7SUFDNUIsSUFBSVEsRUFBRSxHQUFHQyxTQUFTLENBQUNULFFBQVEsQ0FBQztJQUM1QixJQUFHUSxFQUFFLEtBQUtyRixTQUFTLEVBQUU7SUFDckJFLE9BQU8sQ0FBQ3FGLE1BQU0sQ0FBQ0YsRUFBRSxFQUFFLENBQUMsQ0FBQztFQUN6QixDQUFDO0VBRUQsTUFBTXBFLGlCQUFpQixHQUFJMUMsS0FBSyxJQUFJO0lBQ2hDLElBQUk0QixJQUFJLEdBQUdELE9BQU8sQ0FBQ3NGLElBQUksQ0FBQ0MsT0FBTyxJQUFJQSxPQUFPLENBQUNsSCxLQUFLLEtBQUtBLEtBQUssQ0FBQztJQUMzRCxJQUFHNEIsSUFBSSxLQUFLSCxTQUFTLEVBQUU7SUFDdkJvRixVQUFVLENBQUNqRixJQUFJLENBQUM7RUFDcEIsQ0FBQztFQUVELE1BQU1tRixTQUFTLEdBQUlULFFBQVEsSUFBSTtJQUMzQixPQUFPM0UsT0FBTyxDQUFDd0YsU0FBUyxDQUFDRCxPQUFPLElBQUlBLE9BQU8sQ0FBQ2xILEtBQUssS0FBS3NHLFFBQVEsQ0FBQ3RHLEtBQUssQ0FBQztFQUN6RSxDQUFDO0VBRUQsTUFBTXlGLGdCQUFnQixHQUFJekYsS0FBSyxJQUFJO0lBQy9CLE9BQU8yQixPQUFPLENBQUN3RixTQUFTLENBQUNELE9BQU8sSUFBSUEsT0FBTyxDQUFDbEgsS0FBSyxLQUFLQSxLQUFLLENBQUM7RUFDaEUsQ0FBQztFQUVELE1BQU1zRCxhQUFhLEdBQUl0RCxLQUFLLElBQUk7SUFDNUIsT0FBTzJCLE9BQU8sQ0FBQ3NGLElBQUksQ0FBQ0MsT0FBTyxJQUFJQSxPQUFPLENBQUNsSCxLQUFLLEtBQUtBLEtBQUssQ0FBQztFQUMzRCxDQUFDO0VBRUQsT0FBTTtJQUNGQSxLQUFLO0lBQ0wyQixPQUFPO0lBQ1AwRSxPQUFPO0lBQ1BRLFVBQVU7SUFDVjVCLFVBQVU7SUFDVlEsZ0JBQWdCO0lBQ2hCL0MsaUJBQWlCO0lBQ2pCWSxhQUFhO0lBQ2I4QztFQUNKLENBQUM7QUFDTCxDQUFDO0FBRU0sTUFBTW5DLFdBQVcsR0FBSWlCLFFBQVEsSUFBSTtFQUNwQyxJQUFJM0YsVUFBVSxHQUFFLEVBQUU7RUFFbEIsTUFBTTZGLFVBQVUsR0FBSWdDLFdBQVcsSUFBSTtJQUMvQjdILFVBQVUsQ0FBQ2dILElBQUksQ0FBQ2EsV0FBVyxDQUFDO0VBQ2hDLENBQUM7RUFFRCxNQUFNdkIsYUFBYSxHQUFJN0YsS0FBSyxJQUFJO0lBQzVCb0YsVUFBVSxDQUFDcEIsY0FBYyxDQUFDaEUsS0FBSyxDQUFDLENBQUM7RUFDckMsQ0FBQztFQUVELE1BQU04RixnQkFBZ0IsR0FBSXVCLFdBQVcsSUFBSTtJQUNyQyxJQUFJM0gsT0FBTyxHQUFHSCxVQUFVLENBQUMwSCxJQUFJLENBQUNDLE9BQU8sSUFBR0EsT0FBTyxDQUFDbEgsS0FBSyxLQUFLcUgsV0FBVyxDQUFDO0lBQ3RFLE9BQU8zSCxPQUFPO0VBQ2xCLENBQUM7RUFFRCxNQUFNa0csa0JBQWtCLEdBQUl5QixXQUFXLElBQUk7SUFDdkMsSUFBSVAsRUFBRSxHQUFHdkgsVUFBVSxDQUFDNEgsU0FBUyxDQUFDRCxPQUFPLElBQUdBLE9BQU8sQ0FBQ2xILEtBQUssS0FBS3FILFdBQVcsQ0FBQztJQUN0RSxPQUFPUCxFQUFFO0VBQ2IsQ0FBQztFQUdELE1BQU03QixVQUFVLEdBQUdBLENBQUNxQyxZQUFZLEVBQUVqRSxTQUFTLEVBQUVyQixXQUFXLEVBQUVDLE9BQU8sRUFBRUksUUFBUSxFQUFFRixTQUFTLEtBQUk7SUFDdEYsSUFBSXpDLE9BQU8sR0FBR29HLGdCQUFnQixDQUFDd0IsWUFBWSxDQUFDO0lBQzVDLElBQUc1SCxPQUFPLEtBQUsrQixTQUFTLEVBQUM7TUFDckIvQixPQUFPLEdBQUdzRSxjQUFjLENBQUNzRCxZQUFZLENBQUM7TUFDdENsQyxVQUFVLENBQUMxRixPQUFPLENBQUM7SUFDdkI7SUFDQUEsT0FBTyxDQUFDdUYsVUFBVSxDQUFDNUIsU0FBUyxFQUFFckIsV0FBVyxFQUFFQyxPQUFPLEVBQUVJLFFBQVEsRUFBRUYsU0FBUyxDQUFDO0VBQzVFLENBQUM7RUFFRCxNQUFNa0UsT0FBTyxHQUFHQSxDQUFDaUIsWUFBWSxFQUFFaEIsUUFBUSxLQUFJO0lBQ3ZDLElBQUk1RyxPQUFPLEdBQUdvRyxnQkFBZ0IsQ0FBQ3dCLFlBQVksQ0FBQztJQUM1QyxJQUFHNUgsT0FBTyxLQUFLK0IsU0FBUyxFQUFDO01BQ3JCL0IsT0FBTyxHQUFHc0UsY0FBYyxDQUFDc0QsWUFBWSxDQUFDO01BQ3RDbEMsVUFBVSxDQUFDMUYsT0FBTyxDQUFDO0lBQ3ZCO0lBQ0FBLE9BQU8sQ0FBQzJHLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDO0VBQzdCLENBQUM7RUFHRCxNQUFNaUIsYUFBYSxHQUFJSCxXQUFXLElBQUk7SUFDbEMsSUFBSU4sRUFBRSxHQUFHQyxTQUFTLENBQUNLLFdBQVcsQ0FBQztJQUMvQixJQUFHTixFQUFFLEtBQUtyRixTQUFTLEVBQUU7SUFDckJsQyxVQUFVLENBQUN5SCxNQUFNLENBQUNGLEVBQUUsRUFBRSxDQUFDLENBQUM7RUFDNUIsQ0FBQztFQUVELE1BQU1wRyxvQkFBb0IsR0FBSVYsS0FBSyxJQUFJO0lBQ25DLElBQUlOLE9BQU8sR0FBR0gsVUFBVSxDQUFDMEgsSUFBSSxDQUFDdkgsT0FBTyxJQUFJQSxPQUFPLENBQUNNLEtBQUssS0FBS0EsS0FBSyxDQUFDO0lBQ2pFLElBQUdOLE9BQU8sS0FBSytCLFNBQVMsRUFBRTtJQUMxQjhGLGFBQWEsQ0FBQzdILE9BQU8sQ0FBQztFQUMxQixDQUFDO0VBRUQsTUFBTXFILFNBQVMsR0FBSUssV0FBVyxJQUFJO0lBQzlCLE9BQU83SCxVQUFVLENBQUM0SCxTQUFTLENBQUNELE9BQU8sSUFBSUEsT0FBTyxDQUFDbEgsS0FBSyxLQUFLb0gsV0FBVyxDQUFDcEgsS0FBSyxDQUFDO0VBQy9FLENBQUM7RUFFRCxPQUFNO0lBQ0ZrRixRQUFRO0lBQ1IzRixVQUFVO0lBQ1Y2RixVQUFVO0lBQ1ZTLGFBQWE7SUFDYjBCLGFBQWE7SUFDYnRDLFVBQVU7SUFDVm9CLE9BQU87SUFDUFAsZ0JBQWdCO0lBQ2hCRixrQkFBa0I7SUFDbEJsRjtFQUNKLENBQUM7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdJRDtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywrR0FBb0M7QUFDaEYsNENBQTRDLHlIQUF5QztBQUNyRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLG9EQUFvRCwwQkFBMEIseUJBQXlCLDJCQUEyQiw0QkFBNEIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLE9BQU8sb0JBQW9CLHVCQUF1QixrQ0FBa0MsT0FBTyxzQkFBc0IsZ0NBQWdDLG1GQUFtRixPQUFPLG9CQUFvQixrQ0FBa0MsbUZBQW1GLE9BQU8sWUFBWSxrQ0FBa0MsT0FBTyx3QkFBd0IsdUJBQXVCLG9CQUFvQixPQUFPLGFBQWEsd0JBQXdCLGlDQUFpQyxPQUFPLHFCQUFxQixtQ0FBbUMsT0FBTyxpQkFBaUIsa0JBQWtCLHdCQUF3QixzQkFBc0IsT0FBTyxlQUFlLHdDQUF3Qyx1Q0FBdUMsT0FBTyxVQUFVLGdDQUFnQywwQkFBMEIsb0NBQW9DLGlDQUFpQyxPQUFPLGdCQUFnQiw2QkFBNkIsaUNBQWlDLG9DQUFvQyxPQUFPLGVBQWUsd0JBQXdCLGtDQUFrQyw4QkFBOEIsK0JBQStCLHdCQUF3Qix3Q0FBd0MsT0FBTyxrQkFBa0Isd0JBQXdCLGlDQUFpQyw4QkFBOEIseUNBQXlDLG1CQUFtQixtQkFBbUIsT0FBTywyQkFBMkIsc0JBQXNCLHdCQUF3QixpQ0FBaUMsOEJBQThCLHFCQUFxQixPQUFPLHdCQUF3QixzQkFBc0Isd0JBQXdCLGlDQUFpQyw4QkFBOEIscUJBQXFCLE9BQU8sY0FBYyx5QkFBeUIsc0JBQXNCLE9BQU8scUJBQXFCLDBCQUEwQix3QkFBd0IsOEJBQThCLHVCQUF1Qix3Q0FBd0MsMEJBQTBCLHdCQUF3QixxQkFBcUIsOEJBQThCLDRDQUE0QyxPQUFPLDhCQUE4QixxQkFBcUIsMENBQTBDLE9BQU8sc0NBQXNDLDRCQUE0QiwrQkFBK0IsT0FBTywwQ0FBMEMscUJBQXFCLDZDQUE2QyxPQUFPLDRCQUE0Qiw0QkFBNEIsNkJBQTZCLE9BQU8sa0JBQWtCLHdCQUF3Qiw4QkFBOEIseUNBQXlDLHVCQUF1QixrQ0FBa0MsMEJBQTBCLHdCQUF3QixxQkFBcUIsOEJBQThCLE9BQU8sK0JBQStCLCtCQUErQix3QkFBd0IsbUJBQW1CLE9BQU8sZ0VBQWdFLGlDQUFpQyx1QkFBdUIsa0JBQWtCLE9BQU8sVUFBVSw2QkFBNkIsT0FBTyw2Q0FBNkMsNkJBQTZCLG9DQUFvQywwQkFBMEIsT0FBTyxzQkFBc0IscUNBQXFDLE9BQU8sc0JBQXNCLHFDQUFxQyxPQUFPLHNCQUFzQixxQ0FBcUMsT0FBTyw0QkFBNEIsa0NBQWtDLE9BQU8sb0JBQW9CLG9DQUFvQyxPQUFPLDhCQUE4Qiw0QkFBNEIsc0NBQXNDLE9BQU8seUJBQXlCLDhCQUE4QixPQUFPLG1DQUFtQyx3QkFBd0IsOEJBQThCLE9BQU8sOEJBQThCLHdCQUF3Qiw4QkFBOEIsb0JBQW9CLE9BQU8sZ0NBQWdDLDZCQUE2Qiw2QkFBNkIsT0FBTyxlQUFlLGtDQUFrQyx1QkFBdUIsMEdBQTBHLHVCQUF1QixvQ0FBb0MsMEJBQTBCLE9BQU8sc0JBQXNCLDBJQUEwSSxPQUFPLHNCQUFzQiwySUFBMkksT0FBTyxvQkFBb0IsOEJBQThCLE9BQU8sMEJBQTBCLCtDQUErQywwSUFBMEksT0FBTyxlQUFlLHdCQUF3QixpQ0FBaUMsOEJBQThCLHVDQUF1QyxpQkFBaUIsbUJBQW1CLE9BQU8sZUFBZSx3QkFBd0Isa0NBQWtDLDhCQUE4QixPQUFPLFdBQVcsNEJBQTRCLGdDQUFnQywyQkFBMkIsbUJBQW1CLDhCQUE4QiwwQkFBMEIsMEJBQTBCLE9BQU8sV0FBVywwQkFBMEIsOEJBQThCLE9BQU8sV0FBVyxvQkFBb0IsNkJBQTZCLE9BQU8sMEJBQTBCLHNCQUFzQix3QkFBd0IsbUJBQW1CLDhCQUE4Qix3Q0FBd0MsT0FBTyxlQUFlLDBCQUEwQix3QkFBd0IsaUNBQWlDLDBDQUEwQywwQkFBMEIsOEJBQThCLG9CQUFvQixtQkFBbUIsMkNBQTJDLDZCQUE2QixtQkFBbUIsOEJBQThCLHNCQUFzQixPQUFPLHNCQUFzQiw2QkFBNkIsdUJBQXVCLHVCQUF1QiwwQkFBMEIsT0FBTyxtQ0FBbUMscUNBQXFDLHFDQUFxQyx1QkFBdUIsOEJBQThCLHNCQUFzQiw0QkFBNEIsT0FBTywrQkFBK0IsbUNBQW1DLDJCQUEyQixzREFBc0Qsb0JBQW9CLDBCQUEwQixzQkFBc0IsdUJBQXVCLHdCQUF3QiwwQ0FBMEMsa0RBQWtELCtCQUErQix1Q0FBdUMsd0JBQXdCLGdDQUFnQyxPQUFPLDhDQUE4Qyx3QkFBd0Isc0JBQXNCLHVCQUF1QiwrQkFBK0IsOEJBQThCLGtEQUFrRCxrREFBa0QsbUJBQW1CLDBEQUEwRCw4QkFBOEIsT0FBTyx3Q0FBd0MsNkRBQTZELDJDQUEyQyxPQUFPLDJCQUEyQixxQ0FBcUMscUNBQXFDLHVCQUF1Qiw4QkFBOEIsbUNBQW1DLDRCQUE0QixPQUFPLDRCQUE0Qix5QkFBeUIsT0FBTyw0QkFBNEIsaUNBQWlDLE9BQU8sOEJBQThCLHFDQUFxQyw2QkFBNkIsdUJBQXVCLE9BQU8sNkJBQTZCLHFDQUFxQyw2QkFBNkIsdUJBQXVCLE9BQU8sdUJBQXVCLHdCQUF3QixpQ0FBaUMsOEJBQThCLG9CQUFvQix1QkFBdUIsT0FBTyxrQkFBa0IsK0JBQStCLDBCQUEwQixzQkFBc0IsdUJBQXVCLHlDQUF5QyxvQ0FBb0MscUJBQXFCLE9BQU8sMEJBQTBCLGlDQUFpQyx5Q0FBeUMsNENBQTRDLE9BQU8sdUJBQXVCLHdCQUF3Qiw0Q0FBNEMsNkNBQTZDLE9BQU8sZUFBZSwwQkFBMEIsd0NBQXdDLDRCQUE0QixPQUFPLDRCQUE0QixhQUFhLHlCQUF5QixXQUFXLGlCQUFpQix5QkFBeUIsV0FBVyxPQUFPLCtCQUErQixhQUFhLHlCQUF5QixXQUFXLGlCQUFpQix5QkFBeUIsV0FBVyxPQUFPLDZCQUE2QixhQUFhLDBDQUEwQyxlQUFlLGlCQUFpQix3Q0FBd0MsV0FBVyxXQUFXLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxVQUFVLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZ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QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zZXR1cC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb09iamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VycmVudFByb2plY3QsIEN1cnJlbnRVc2VyLCBzZXRDdXJyZW50UHJvamVjdCwgc2V0Q3VycmVudFVzZXIsIGJhY2tkcm9wIH0gZnJvbSBcIi4vc2V0dXBcIjtcblxubGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xuXG5sZXQgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb250YWluZXJcIik7XG5cbmxldCBlZGl0UHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXByb2plY3QtcG9wdXBcIik7XG5sZXQgZWRpdFRvZG9Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10b2RvLXBvcHVwXCIpO1xuXG5sZXQgY29uZmlybURlbGV0ZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25maXJtLWRlbGV0ZS1wb3B1cFwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cyh1c2VyLCBQcm9qZWN0Q29udGFpbmVyLCBwcm9qZWN0VGVtcGxhdGUpe1xuICAgIGxldCBwcm9qZWN0QXJyID0gdXNlci5wcm9qZWN0QXJyO1xuICAgIFByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBwcm9qZWN0QXJyLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0Q2xvbmUgPSBwcm9qZWN0VGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBwcm9qZWN0Q2xvbmUuY2xhc3NMaXN0LnJlbW92ZShcIm5vZGlzcGxheVwiLCBcInByb2plY3QtdGVtcGxhdGVcIilcbiAgICAgICAgcHJvamVjdENsb25lLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKS5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBwcm9qZWN0Q2xvbmUucXVlcnlTZWxlY3RvcihcIi5kZWxldGVcIik7XG5cbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvamVjdFwiKTtcblxuXG4gICAgICAgICAgICBjb25maXJtRGVsZXRlUG9wdXAucXVlcnlTZWxlY3RvcihcImgzXCIpLmlubmVyVGV4dCA9IGBEZWxldGUgPj4ke3Byb2plY3QudGl0bGV9PDwgP2A7XG4gICAgICAgICAgICBkaXNwbGF5UG9wdXAoY29uZmlybURlbGV0ZVBvcHVwLGJhY2tkcm9wKTtcbiAgICAgICAgICAgIGxldCBjYW5jZWxCdXR0b24gPSBjb25maXJtRGVsZXRlUG9wdXAucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG4gICAgICAgICAgICBsZXQgY29uZmlybUJ1dHRvbiA9IGNvbmZpcm1EZWxldGVQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1cIik7XG4gICAgICAgIFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICAgICAgIGhpZGVQb3B1cChjb25maXJtRGVsZXRlUG9wdXAsYmFja2Ryb3ApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgICAgICBoaWRlUG9wdXAoY29uZmlybURlbGV0ZVBvcHVwLGJhY2tkcm9wKTtcblxuICAgICAgICAgICAgICAgIEN1cnJlbnRVc2VyLnJlbW92ZVByb2plY3RCeVRpdGxlKHByb2plY3QudGl0bGUpO1xuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRQcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0LnRpdGxlKSBzZXRDdXJyZW50UHJvamVjdCh1c2VyLnByb2plY3RBcnJbdXNlci5wcm9qZWN0QXJyLmxlbmd0aC0xXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoQ3VycmVudFVzZXIpKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVNFUicsIEpTT04uc3RyaW5naWZ5KEN1cnJlbnRVc2VyKSk7XG4gICAgICAgICAgICAgICAgZGlzcGxheVByb2plY3RzKHVzZXIsIFByb2plY3RDb250YWluZXIsIHByb2plY3RUZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgaWYodXNlci5wcm9qZWN0QXJyLmxlbmd0aCA+IDApIFNlbGVjdGVkUHJvamVjdENoYW5nZVN0eWxlKGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZWRpdEJ1dHRvbiA9IHByb2plY3RDbG9uZS5xdWVyeVNlbGVjdG9yKFwiLmVkaXRcIik7XG5cbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgZWRpdFByb2plY3RQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC10aXRsZVwiKS52YWx1ZSA9IHByb2plY3QudGl0bGU7XG4gICAgICAgICAgICBlZGl0UHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXRpdGxlXCIpLnBsYWNlaG9sZGVyID0gcHJvamVjdC50aXRsZTtcblxuXG4gICAgICAgICAgICBkaXNwbGF5UG9wdXAoZWRpdFByb2plY3RQb3B1cCxiYWNrZHJvcCk7XG4gICAgICAgICAgICBlZGl0UHJvamVjdFBvcHVwLmRhdGFzZXQudGl0bGUgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICBwcm9qZWN0Q2xvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICBQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDbG9uZSk7XG4gICAgfSk7XG5cbiAgICBpZih1c2VyLnByb2plY3RBcnIubGVuZ3RoID4gMCkgU2VsZWN0ZWRQcm9qZWN0Q2hhbmdlU3R5bGUoY3VycmVudFByb2plY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvZG9zKHByb2plY3QsIHRvZG9Db250YWluZXIsIHRvZG9UZW1wbGF0ZSl7XG4gICAgXG4gICAgdG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGlmKHByb2plY3QgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgbGV0IHByaW9yaXR5Q29sb3JzID0gW1wiLS1yXCIsIFwiLS1iXCIsIFwiLS1nXCJdO1xuXG5cbiAgICBsZXQgdG9kb0FyciA9IHByb2plY3QudG9kb0FycjtcbiAgICB0b2RvQXJyLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGxldCB0b2RvQ2xvbmUgPSB0b2RvVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBsZXQgdG9kb0NoZWNrYm94ID0gdG9kb0Nsb25lLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb21wbGV0ZWRcIik7XG5cblxuXG5cbiAgICAgICAgdG9kb0Nsb25lLmNsYXNzTGlzdC5yZW1vdmUoXCJub2Rpc3BsYXlcIiwgXCJ0b2RvLXRlbXBsYXRlXCIpXG4gICAgICAgIHRvZG9DbG9uZS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdGl0bGVcIikuaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcbiAgICAgICAgdG9kb0Nsb25lLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kZXNjcmlwdGlvblwiKS5pbm5lclRleHQgPSBzaG9ydGVyU3RyaW5nKHRvZG8uZGVzY3JpcHRpb24sIDQwKTs7XG4gICAgICAgIHRvZG9DbG9uZS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZHVlRGF0ZVwiKS5pbm5lclRleHQgPSB0b2RvLmR1ZURhdGU7XG4gICAgICAgIHRvZG9DaGVja2JveC5jaGVja2VkID0gdG9kby5jb21wbGV0ZWQ7XG5cbiAgICBcbiAgICAgICAgdG9kb0Nsb25lLmNsYXNzTGlzdC5hZGQocHJpb3JpdHlDb2xvcnNbdG9kby5wcmlvcml0eV0pO1xuXG4gICAgICAgIGxldCBkZWxldGVCdXR0b24gPSB0b2RvQ2xvbmUucXVlcnlTZWxlY3RvcihcIi5kZWxldGVcIik7XG5cbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG9kb1wiKTtcblxuICAgICAgICAgICAgY29uZmlybURlbGV0ZVBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKS5pbm5lclRleHQgPSBgRGVsZXRlID4+JHt0b2RvLnRpdGxlfTw8ID9gO1xuICAgICAgICAgICAgZGlzcGxheVBvcHVwKGNvbmZpcm1EZWxldGVQb3B1cCxiYWNrZHJvcCk7XG4gICAgICAgICAgICBsZXQgb2xkQ2FuY2VsQnV0dG9uID0gY29uZmlybURlbGV0ZVBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xuICAgICAgICAgICAgbGV0IG9sZENvbmZpcm1CdXR0b24gPSBjb25maXJtRGVsZXRlUG9wdXAucXVlcnlTZWxlY3RvcihcIi5jb25maXJtXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2FuY2VsQnV0dG9uID0gb2xkQ2FuY2VsQnV0dG9uLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIG9sZENhbmNlbEJ1dHRvbi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjYW5jZWxCdXR0b24sIG9sZENhbmNlbEJ1dHRvbik7XG5cbiAgICAgICAgICAgIGxldCBjb25maXJtQnV0dG9uID0gb2xkQ29uZmlybUJ1dHRvbi5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICBvbGRDb25maXJtQnV0dG9uLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNvbmZpcm1CdXR0b24sIG9sZENvbmZpcm1CdXR0b24pO1xuICAgICAgICBcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgICAgICBoaWRlUG9wdXAoY29uZmlybURlbGV0ZVBvcHVwLGJhY2tkcm9wKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICAgICAgaGlkZVBvcHVwKGNvbmZpcm1EZWxldGVQb3B1cCxiYWNrZHJvcCk7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3QucmVtb3ZlVG9kb0J5VGl0bGUodG9kby50aXRsZSk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VTRVInLCBKU09OLnN0cmluZ2lmeShDdXJyZW50VXNlcikpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlUb2Rvcyhwcm9qZWN0LCB0b2RvQ29udGFpbmVyLCB0b2RvVGVtcGxhdGUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGVkaXRCdXR0b24gPSB0b2RvQ2xvbmUucXVlcnlTZWxlY3RvcihcIi5lZGl0XCIpO1xuXG4gICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgIGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtdGl0bGVcIikudmFsdWUgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC10aXRsZVwiKS5wbGFjZWhvbGRlciA9IHRvZG8udGl0bGU7XG5cbiAgICAgICAgICAgIGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtZGVzY3JpcHRpb25cIikudmFsdWUgPSB0b2RvLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgICAgICBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LWR1ZURhdGVcIikudmFsdWUgPSB0b2RvLmR1ZURhdGU7XG4gICAgICAgICAgICBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXByaW9yaXR5XCIpLnZhbHVlID0gdG9kby5wcmlvcml0eTsgXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGlzcGxheVBvcHVwKGVkaXRUb2RvUG9wdXAsYmFja2Ryb3ApO1xuICAgICAgICAgICAgZWRpdFRvZG9Qb3B1cC5kYXRhc2V0LnRpdGxlID0gdG9kby50aXRsZTtcblxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdG9kb0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZDtcbiAgICAgICAgICAgIGlmKHRvZG8uY29tcGxldGVkKSB0b2RvQ2xvbmUuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgICAgIGVsc2UgdG9kb0Nsb25lLmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZWRcIik7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0b2RvQ2xvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xuICAgICAgICAgICAgaWYodG9kb0Nsb25lLmNsYXNzTGlzdC5jb250YWlucyhcImV4dGVuZGVkXCIpKXtcbiAgICAgICAgICAgICAgICBTZWxlY3RlZFRvZG9FeHRlbmQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRvZG9DbG9uZS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGVzY3JpcHRpb25cIikuaW5uZXJUZXh0ID0gc2hvcnRlclN0cmluZyh0b2RvLmRlc2NyaXB0aW9uLCA0MCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBTZWxlY3RlZFRvZG9FeHRlbmQodG9kbyk7XG4gICAgICAgICAgICAgICAgdG9kb0Nsb25lLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kZXNjcmlwdGlvblwiKS5pbm5lclRleHQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGlmKHRvZG8uY29tcGxldGVkKSB0b2RvQ2xvbmUuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgZWxzZSB0b2RvQ2xvbmUuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlZFwiKTtcblxuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9DbG9uZSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3RlZFByb2plY3RDaGFuZ2VTdHlsZShwcm9qZWN0KXtcblxuICAgIGlmICghcHJvamVjdCkgcmV0dXJuIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG5cbiAgICBsZXQgdGl0bGUgPSBwcm9qZWN0LnRpdGxlO1xuICAgIGxldCBwcm9qZWN0RWxlbWVudHMgPSAgcHJvamVjdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtZGl2XCIpO1xuICAgIHByb2plY3RFbGVtZW50cy5mb3JFYWNoKHByb2plY3RFbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IHRpdGxlRWxlbWVudCA9IHByb2plY3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKTtcbiAgICAgICAgbGV0IHByb2plY3RFbGVtZW50VGl0bGUgPSBudWxsO1xuICAgICAgICBpZih0aXRsZUVsZW1lbnQgIT09IG51bGwpIHByb2plY3RFbGVtZW50VGl0bGUgPSB0aXRsZUVsZW1lbnQuaW5uZXJUZXh0O1xuXG4gICAgICAgIGlmKHByb2plY3RFbGVtZW50VGl0bGUgPT09IHRpdGxlKXtcbiAgICAgICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIFNlbGVjdGVkVG9kb0V4dGVuZCh0b2RvKXtcbiAgICBsZXQgdGl0bGUgPSB0b2RvLnRpdGxlO1xuXG4gICAgaWYodG9kbyA9PT0gZmFsc2UpIHRpdGxlID0gXCJcIjsgXG5cbiAgICBsZXQgdG9kb0VsZW1lbnRzID0gIHRvZG9Db250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi50b2RvLWRpdlwiKTtcbiAgICB0b2RvRWxlbWVudHMuZm9yRWFjaCh0b2RvRWxlbWVudCA9PiB7XG4gICAgICAgIGxldCB0aXRsZUVsZW1lbnQgPSB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdGl0bGVcIik7XG4gICAgICAgIGxldCB0b2RvRWxlbWVudFRpdGxlID0gbnVsbDtcbiAgICAgICAgaWYodGl0bGVFbGVtZW50ICE9PSBudWxsKSB0b2RvRWxlbWVudFRpdGxlID0gdGl0bGVFbGVtZW50LmlubmVyVGV4dDtcblxuICAgICAgICBpZih0b2RvRWxlbWVudFRpdGxlID09PSB0aXRsZSl7XG4gICAgICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZXh0ZW5kZWRcIik7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJleHRlbmRlZFwiKTtcbiAgICAgICAgICAgIGxldCB0b2RvVGl0bGUgPSB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdGl0bGVcIikuaW5uZXJUZXh0XG4gICAgICAgICAgICB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGVzY3JpcHRpb25cIikuaW5uZXJUZXh0ID0gc2hvcnRlclN0cmluZyhjdXJyZW50UHJvamVjdC50b2RvV2l0aFRpdGxlKHRvZG9UaXRsZSkuZGVzY3JpcHRpb24sIDQwKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UG9wdXAocG9wdXBFbGVtZW50LCBiYWNrZHJvcCl7XG4gICAgcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZVBvcHVwKHBvcHVwRWxlbWVudCwgYmFja2Ryb3Ape1xuICAgIHBvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICBiYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbn1cblxuXG5cblxuIFxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlFcnJvcihwb3B1cCwgZXJyb3JDbGFzcywgZXJyb3JUZXh0KXtcbiAgICBwb3B1cC5xdWVyeVNlbGVjdG9yKGVycm9yQ2xhc3MpLmlubmVyVGV4dD1lcnJvclRleHQ7XG59XG5cbmZ1bmN0aW9uIHNob3J0ZXJTdHJpbmcoc3RyaW5nLCBsZW5ndGgpe1xuICAgIGlmIChzdHJpbmcubGVuZ3RoIDwgbGVuZ3RoICsgMSkgcmV0dXJuIHN0cmluZzsgXG4gICAgbGV0IHNob3J0ZXIgPSBzdHJpbmcuc2xpY2UoMCwgbGVuZ3RoKTtcbiAgICByZXR1cm4gc2hvcnRlciArIFwiLi4uXCI7XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHRvZG9JdGVtRmFjdG9yeSwgcHJvamVjdEZhY3RvcnksIHVzZXJGYWN0b3J5IH0gZnJvbSAnLi90b2RvT2JqZWN0cyc7XG5cbmltcG9ydCB7IHNldHVwIH0gZnJvbSAnLi9zZXR1cCc7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi9pY29ucy9mYXZpY29uLnN2Z1wiO1xuXG5cbmxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xubGluay5yZWwgPSAnaWNvbic7XG5saW5rLmhyZWYgPSBJY29uO1xuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcblxuXG5zZXR1cCgpO1xuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgZGlzcGxheVBvcHVwLCBoaWRlUG9wdXAsIGRpc3BsYXlFcnJvciwgZGlzcGxheVRvZG9zLCBTZWxlY3RlZFByb2plY3RDaGFuZ2VTdHlsZSB9IGZyb20gXCIuL2Rpc3BsYXlGdW5jdGlvbnNcIjtcbmltcG9ydCB7IHRvZG9JdGVtRmFjdG9yeSwgcHJvamVjdEZhY3RvcnksIHVzZXJGYWN0b3J5IH0gZnJvbSAnLi90b2RvT2JqZWN0cyc7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfSBmcm9tICcuL2Rpc3BsYXlGdW5jdGlvbnMnO1xuXG5cbmV4cG9ydCBsZXQgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhY2tkcm9wXCIpO1xuXG5sZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XG5sZXQgcHJvamVjdFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRlbXBsYXRlXCIpO1xuXG5cbmxldCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWNvbnRhaW5lclwiKTtcbmxldCB0b2RvVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdGVtcGxhdGVcIik7XG5cblxubGV0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xubGV0IGFkZFByb2plY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1wb3B1cFwiKTtcblxubGV0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvXCIpO1xubGV0IGFkZFRvZG9Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1wb3B1cFwiKTtcblxubGV0IGVkaXRQcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtcHJvamVjdC1wb3B1cFwiKTtcbmxldCBlZGl0VG9kb1BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRvZG8tcG9wdXBcIik7XG5cblxuXG5leHBvcnQgbGV0IEN1cnJlbnRVc2VyO1xuZXhwb3J0IGxldCBjdXJyZW50UHJvamVjdDtcbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50VXNlcih1c2VyKXtcbiAgICBDdXJyZW50VXNlciA9IHVzZXI7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3Qpe1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICBkaXNwbGF5UHJvamVjdHMoQ3VycmVudFVzZXIscHJvamVjdENvbnRhaW5lcixwcm9qZWN0VGVtcGxhdGUpO1xuICAgIGRpc3BsYXlUb2RvcyhjdXJyZW50UHJvamVjdCx0b2RvQ29udGFpbmVyLHRvZG9UZW1wbGF0ZSk7XG4gICAgU2VsZWN0ZWRQcm9qZWN0Q2hhbmdlU3R5bGUoY3VycmVudFByb2plY3QpO1xufTtcblxuXG5cbmxldCByZXRyaWV2ZWRVc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1VTRVInKTtcbmxldCB1c2VySnNvbiA9IEpTT04ucGFyc2UocmV0cmlldmVkVXNlcik7XG5sZXQgdXNlclxuXG5pZih1c2VySnNvbiA9PT0gbnVsbCl7XG4gICAgdXNlciA9IHVzZXJGYWN0b3J5KFwiR3Vlc3RcIik7XG4gICAgdXNlci5jcmVhdGVUb2RvKFwiR2V0IEEgSm9iXCIsIFwiTGVhcm4gQSBTa2lsbFwiLCBcIldlYi1EZXZlbG9wbWVudFwiLCBcIjIwMjQtMDEtMDFcIiwgMCk7XG4gICAgdXNlci5jcmVhdGVUb2RvKFwiR2V0IEEgSm9iXCIsIFwiQXBwbHkgRm9yIEpvYnNcIiwgXCJcIiwgXCIyMDI0LTA0LTAxXCIsIDEpO1xuICAgIHVzZXIuY3JlYXRlVG9kbyhcIkdldCBBIFdpZmVcIiwgXCJGaW5kIEEgV29tYW5cIiwgXCJVc3VhbGx5IEluIFRoZSBTdHJlZXRzXCIsIFwiMjAyMy0wNy0wNVwiLCAwKTtcbiAgICB1c2VyLmNyZWF0ZVRvZG8oXCJHZXQgQSBXaWZlXCIsIFwiVGFsayBUbyBBIFdvbWFuXCIsIFwiVXNlIFdvcmRzXCIsIFwiMjAyNC0xMi0xMVwiLCAxKTtcbiAgICB1c2VyLmNyZWF0ZVRvZG8oXCJHZXQgQSBXaWZlXCIsIFwiRmluaXNoIFRoaXMgTGlzdFwiLCBcIlwiLCBcIlwiLCAyKTtcbn1lbHNlIHtcbiAgICBcbiAgICB1c2VyID0gdXNlckZhY3RvcnkodXNlckpzb24udXNlcm5hbWUpO1xuICAgIGxldCBwcm9qZWN0QXJyID0gdXNlckpzb24ucHJvamVjdEFycjtcbiAgICBwcm9qZWN0QXJyLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkocHJvamVjdC50aXRsZSk7XG4gICAgICAgIHVzZXIuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgbGV0IHRvZG9BcnIgPSBwcm9qZWN0LnRvZG9BcnI7XG4gICAgICAgIHRvZG9BcnIuZm9yRWFjaCh0b2RvID0+e1xuICAgICAgICAgICAgbmV3UHJvamVjdC5jcmVhdGVUb2RvKHRvZG8udGl0bGUsIHRvZG8uZGVzY3JpcHRpb24sIHRvZG8uZHVlRGF0ZSwgdG9kby5wcmlvcml0eSwgdG9kby5jb21wbGV0ZWQpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuXG5cblxuc2V0Q3VycmVudFVzZXIodXNlcik7XG5zZXRDdXJyZW50UHJvamVjdChDdXJyZW50VXNlci5wcm9qZWN0QXJyWzBdKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXAoKXtcbiAgICBzZXR1cEFkZEJ1dHRvbnMoKTtcbiAgICBzZXR1cFBvcHVwQnV0dG9ucygpO1xuXG5cbn1cblxuXG5cbmZ1bmN0aW9uIHNldHVwQWRkQnV0dG9ucygpe1xuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xuICAgICAgICAgICAgZGlzcGxheVBvcHVwKGFkZFByb2plY3RQb3B1cCwgYmFja2Ryb3ApO1xuICAgIH0pO1xuXG4gICAgYWRkVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XG4gICAgICAgICAgICBkaXNwbGF5UG9wdXAoYWRkVG9kb1BvcHVwLCBiYWNrZHJvcCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldHVwUG9wdXBCdXR0b25zKCl7XG4gICAgbGV0IGFkZFRvZG9Db25maXJtQnV0dG9uID0gYWRkVG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybVwiKTtcbiAgICBsZXQgYWRkVG9kb0NhbmNlbEJ1dHRvbiA9IGFkZFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcblxuICAgIGFkZFRvZG9DYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgaGlkZVBvcHVwKGFkZFRvZG9Qb3B1cCwgYmFja2Ryb3ApO1xuICAgIH0pO1xuXG4gICAgYWRkVG9kb0NvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgbGV0IHRpdGxlID0gYWRkVG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXRpdGxlXCIpLnZhbHVlO1xuXG4gICAgICAgIGlmKGN1cnJlbnRQcm9qZWN0LmdldFRvZG9JZEJ5VGl0bGUodGl0bGUpICE9PSAtMSkge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yKGFkZFRvZG9Qb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJUaGlzIFRpdGxlIEFscmVhZHkgRXhpc3RzIVwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmKHRpdGxlID09PSBcIlwiKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoYWRkVG9kb1BvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIkl0IE11c3QgSGF2ZSBBIFRpdGxlIVwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXlFcnJvcihhZGRUb2RvUG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiXCIpO1xuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGFkZFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC1kZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBhZGRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gYWRkVG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXByaW9yaXR5XCIpLnZhbHVlO1xuICAgIFxuICAgICAgICBjdXJyZW50UHJvamVjdC5jcmVhdGVUb2RvKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksIGZhbHNlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VTRVInLCBKU09OLnN0cmluZ2lmeShDdXJyZW50VXNlcikpO1xuICAgICAgICBoaWRlUG9wdXAoYWRkVG9kb1BvcHVwLCBiYWNrZHJvcCk7XG4gICAgICAgIGRpc3BsYXlUb2RvcyhjdXJyZW50UHJvamVjdCwgdG9kb0NvbnRhaW5lciwgdG9kb1RlbXBsYXRlKTtcbiAgICB9KTtcblxuXG4gICAgbGV0IGFkZFByb2plY3RDb25maXJtQnV0dG9uID0gYWRkUHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybVwiKTtcbiAgICBsZXQgYWRkUHJvamVjdENhbmNlbEJ1dHRvbiA9IGFkZFByb2plY3RQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcblxuICAgIGFkZFByb2plY3RDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgaGlkZVBvcHVwKGFkZFByb2plY3RQb3B1cCwgYmFja2Ryb3ApO1xuICAgIH0pO1xuXG4gICAgYWRkUHJvamVjdENvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgbGV0IHRpdGxlID0gYWRkUHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXRpdGxlXCIpLnZhbHVlO1xuXG4gICAgICAgIGlmKEN1cnJlbnRVc2VyLnByb2plY3RJZFdpdGhUaXRsZSh0aXRsZSkgIT09IC0xKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoYWRkUHJvamVjdFBvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIlRoaXMgVGl0bGUgQWxyZWFkeSBFeGlzdHMhXCIpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYodGl0bGUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvcihhZGRQcm9qZWN0UG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiSXQgTXVzdCBIYXZlIEEgVGl0bGUhXCIpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheUVycm9yKGFkZFByb2plY3RQb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJcIik7XG5cbiAgICAgICAgQ3VycmVudFVzZXIuY3JlYXRlUHJvamVjdCh0aXRsZSk7XG4gICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KEN1cnJlbnRVc2VyLnByb2plY3RXaXRoVGl0bGUodGl0bGUpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VTRVInLCBKU09OLnN0cmluZ2lmeShDdXJyZW50VXNlcikpO1xuICAgICAgICBoaWRlUG9wdXAoYWRkUHJvamVjdFBvcHVwLCBiYWNrZHJvcCk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cyh1c2VyLHByb2plY3RDb250YWluZXIscHJvamVjdFRlbXBsYXRlKTtcbiAgICB9KTtcblxuICAgIGxldCBlZGl0UHJvamVjdENvbmZpcm1CdXR0b24gPSBlZGl0UHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybVwiKTtcbiAgICBsZXQgZWRpdFByb2plY3RDYW5jZWxCdXR0b24gPSBlZGl0UHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xuXG4gICAgZWRpdFByb2plY3RDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgaGlkZVBvcHVwKGVkaXRQcm9qZWN0UG9wdXAsIGJhY2tkcm9wKTtcbiAgICB9KTtcblxuICAgIGVkaXRQcm9qZWN0Q29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICBsZXQgdGl0bGUgPSBlZGl0UHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXRpdGxlXCIpLnZhbHVlO1xuXG4gICAgICAgIGlmKEN1cnJlbnRVc2VyLnByb2plY3RJZFdpdGhUaXRsZSh0aXRsZSkgIT09IC0xKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoZWRpdFByb2plY3RQb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJUaGlzIFRpdGxlIEFscmVhZHkgRXhpc3RzIVwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmKHRpdGxlID09PSBcIlwiKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoZWRpdFByb2plY3RQb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJJdCBNdXN0IEhhdmUgQSBUaXRsZSFcIik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBkaXNwbGF5RXJyb3IoZWRpdFByb2plY3RQb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJcIik7XG5cbiAgICAgICAgXG4gICAgICAgIEN1cnJlbnRVc2VyLnByb2plY3RXaXRoVGl0bGUoZWRpdFByb2plY3RQb3B1cC5kYXRhc2V0LnRpdGxlKS50aXRsZSA9IHRpdGxlO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVNFUicsIEpTT04uc3RyaW5naWZ5KEN1cnJlbnRVc2VyKSk7XG4gICAgICAgIGhpZGVQb3B1cChlZGl0UHJvamVjdFBvcHVwLCBiYWNrZHJvcCk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cyh1c2VyLHByb2plY3RDb250YWluZXIscHJvamVjdFRlbXBsYXRlKTtcbiAgICB9KTtcblxuXG4gICAgbGV0IGVkaXRUb2RvQ29uZmlybUJ1dHRvbiA9IGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5jb25maXJtXCIpO1xuICAgIGxldCBlZGl0VG9kb0NhbmNlbEJ1dHRvbiA9IGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG5cbiAgICBlZGl0VG9kb0NhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICBoaWRlUG9wdXAoZWRpdFRvZG9Qb3B1cCwgYmFja2Ryb3ApO1xuICAgIH0pO1xuXG4gICAgZWRpdFRvZG9Db25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGxldCB0aXRsZSA9IGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtdGl0bGVcIikudmFsdWU7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICAgIGxldCBkdWVEYXRlID0gZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC1kdWVEYXRlXCIpLnZhbHVlO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXByaW9yaXR5XCIpLnZhbHVlO1xuXG5cbiAgICAgICAgaWYoY3VycmVudFByb2plY3QuZ2V0VG9kb0lkQnlUaXRsZSh0aXRsZSkgIT09IC0xKSB7XG4gICAgICAgICAgICBpZih0aXRsZSAhPT0gZWRpdFRvZG9Qb3B1cC5kYXRhc2V0LnRpdGxlKXtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvcihlZGl0VG9kb1BvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIlRoaXMgVGl0bGUgQWxyZWFkeSBFeGlzdHMhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRpdGxlID09PSBcIlwiKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoZWRpdFRvZG9Qb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJJdCBNdXN0IEhhdmUgQSBUaXRsZSFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheUVycm9yKGVkaXRUb2RvUG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiXCIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGVkaXRUb2RvUG9wdXAuZGF0YXNldC50aXRsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0LnRvZG9XaXRoVGl0bGUoZWRpdFRvZG9Qb3B1cC5kYXRhc2V0LnRpdGxlKSk7XG5cbiAgICAgICAgbGV0IGVkaXRlZFRvZG8gPSBjdXJyZW50UHJvamVjdC50b2RvV2l0aFRpdGxlKGVkaXRUb2RvUG9wdXAuZGF0YXNldC50aXRsZSk7XG5cbiAgICAgICAgZWRpdGVkVG9kby50aXRsZSA9IHRpdGxlO1xuICAgICAgICBlZGl0ZWRUb2RvLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIGVkaXRlZFRvZG8uZHVlRGF0ZSA9IGR1ZURhdGU7XG5cblxuICAgICAgICBlZGl0ZWRUb2RvLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbiAgICAgICAgaGlkZVBvcHVwKGVkaXRUb2RvUG9wdXAsIGJhY2tkcm9wKTtcblxuICAgICAgICBjdXJyZW50UHJvamVjdC5zb3J0VG9kb3MoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VTRVInLCBKU09OLnN0cmluZ2lmeShDdXJyZW50VXNlcikpO1xuICAgICAgICBkaXNwbGF5VG9kb3MoY3VycmVudFByb2plY3QsdG9kb0NvbnRhaW5lcix0b2RvVGVtcGxhdGUpO1xuICAgIH0pO1xuICAgIFxuXG5cbn1cblxuXG5cbiIsIlxuZXhwb3J0IGNvbnN0IHRvZG9JdGVtRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpID0+e1xuICAgIHJldHVybntcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgY29tcGxldGVkXG4gICAgfTtcbn07XG5cblxuZXhwb3J0IGNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlKSA9PntcbiAgICBsZXQgdG9kb0FyciA9IFtdO1xuXG4gICAgY29uc3QgYWRkVG9kbyA9ICh0b2RvSXRlbSkgPT57XG4gICAgICAgIHRvZG9BcnIucHVzaCh0b2RvSXRlbSk7XG4gICAgICAgIHNvcnRUb2RvcygpO1xuICAgIH07XG5cbiAgICBjb25zdCBzb3J0VG9kb3MgPSAoKT0+e1xuICAgICAgICB0b2RvQXJyLnNvcnQoc29ydEZuKTtcbiAgICAgICAgXG4gICAgfTtcblxuICAgIGNvbnN0IHNvcnRGbiA9IChhLGIpID0+e1xuICAgICAgICBpZihhLnByaW9yaXR5IDwgYi5wcmlvcml0eSkgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKSA9PntcbiAgICAgICAgaWYoY29tcGxldGVkID09PSBudWxsIHx8IGNvbXBsZXRlZCA9PT0gdW5kZWZpbmVkKSBjb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IG5ld1RvZG9JdGVtID0gdG9kb0l0ZW1GYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCk7XG4gICAgICAgIGFkZFRvZG8obmV3VG9kb0l0ZW0pO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVUb2RvID0gKHRvZG9JdGVtKSA9PntcbiAgICAgICAgbGV0IGlkID0gZ2V0VG9kb0lkKHRvZG9JdGVtKTtcbiAgICAgICAgaWYoaWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgICB0b2RvQXJyLnNwbGljZShpZCwgMSk7XG4gICAgfTsgICBcblxuICAgIGNvbnN0IHJlbW92ZVRvZG9CeVRpdGxlID0gKHRpdGxlKSA9PntcbiAgICAgICAgbGV0IHRvZG8gPSB0b2RvQXJyLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LnRpdGxlID09PSB0aXRsZSk7XG4gICAgICAgIGlmKHRvZG8gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgICByZW1vdmVUb2RvKHRvZG8pO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRUb2RvSWQgPSAodG9kb0l0ZW0pID0+e1xuICAgICAgICByZXR1cm4gdG9kb0Fyci5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50LnRpdGxlID09PSB0b2RvSXRlbS50aXRsZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFRvZG9JZEJ5VGl0bGUgPSAodGl0bGUpID0+e1xuICAgICAgICByZXR1cm4gdG9kb0Fyci5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50LnRpdGxlID09PSB0aXRsZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZG9XaXRoVGl0bGUgPSAodGl0bGUpID0+e1xuICAgICAgICByZXR1cm4gdG9kb0Fyci5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC50aXRsZSA9PT0gdGl0bGUpO1xuICAgIH1cblxuICAgIHJldHVybntcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHRvZG9BcnIsXG4gICAgICAgIGFkZFRvZG8sXG4gICAgICAgIHJlbW92ZVRvZG8sXG4gICAgICAgIGNyZWF0ZVRvZG8sXG4gICAgICAgIGdldFRvZG9JZEJ5VGl0bGUsXG4gICAgICAgIHJlbW92ZVRvZG9CeVRpdGxlLFxuICAgICAgICB0b2RvV2l0aFRpdGxlLFxuICAgICAgICBzb3J0VG9kb3MsXG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VyRmFjdG9yeSA9ICh1c2VybmFtZSkgPT57XG4gICAgbGV0IHByb2plY3RBcnIgPVtdO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0SXRlbSkgPT57XG4gICAgICAgIHByb2plY3RBcnIucHVzaChwcm9qZWN0SXRlbSk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHRpdGxlKSA9PntcbiAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0RmFjdG9yeSh0aXRsZSkpOyAgICAgICAgXG4gICAgfTtcblxuICAgIGNvbnN0IHByb2plY3RXaXRoVGl0bGUgPSAocHJvamVjdE5hbWUpID0+e1xuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RBcnIuZmluZChlbGVtZW50ID0+ZWxlbWVudC50aXRsZSA9PT0gcHJvamVjdE5hbWUpO1xuICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICB9O1xuXG4gICAgY29uc3QgcHJvamVjdElkV2l0aFRpdGxlID0gKHByb2plY3ROYW1lKSA9PntcbiAgICAgICAgbGV0IGlkID0gcHJvamVjdEFyci5maW5kSW5kZXgoZWxlbWVudCA9PmVsZW1lbnQudGl0bGUgPT09IHByb2plY3ROYW1lKTtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH07XG5cblxuICAgIGNvbnN0IGNyZWF0ZVRvZG8gPSAocHJvamVjdFRpdGxlLCB0b2RvVGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKSA9PntcbiAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0V2l0aFRpdGxlKHByb2plY3RUaXRsZSk7XG4gICAgICAgIGlmKHByb2plY3QgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBwcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkocHJvamVjdFRpdGxlKTtcbiAgICAgICAgICAgIGFkZFByb2plY3QocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdC5jcmVhdGVUb2RvKHRvZG9UaXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRUb2RvID0gKHByb2plY3RUaXRsZSwgdG9kb0l0ZW0pID0+e1xuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RXaXRoVGl0bGUocHJvamVjdFRpdGxlKTtcbiAgICAgICAgaWYocHJvamVjdCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShwcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0LmFkZFRvZG8odG9kb0l0ZW0pO1xuICAgIH07XG5cblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdEl0ZW0pID0+e1xuICAgICAgICBsZXQgaWQgPSBnZXRUb2RvSWQocHJvamVjdEl0ZW0pO1xuICAgICAgICBpZihpZCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIHByb2plY3RBcnIuc3BsaWNlKGlkLCAxKTtcbiAgICB9OyAgIFxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdEJ5VGl0bGUgPSAodGl0bGUpID0+e1xuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RBcnIuZmluZChwcm9qZWN0ID0+IHByb2plY3QudGl0bGUgPT09IHRpdGxlKTtcbiAgICAgICAgaWYocHJvamVjdCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIHJlbW92ZVByb2plY3QocHJvamVjdCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VG9kb0lkID0gKHByb2plY3RJdGVtKSA9PntcbiAgICAgICAgcmV0dXJuIHByb2plY3RBcnIuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC50aXRsZSA9PT0gcHJvamVjdEl0ZW0udGl0bGUpO1xuICAgIH07XG5cbiAgICByZXR1cm57XG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBwcm9qZWN0QXJyLFxuICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICBjcmVhdGVQcm9qZWN0LFxuICAgICAgICByZW1vdmVQcm9qZWN0LFxuICAgICAgICBjcmVhdGVUb2RvLFxuICAgICAgICBhZGRUb2RvLFxuICAgICAgICBwcm9qZWN0V2l0aFRpdGxlLFxuICAgICAgICBwcm9qZWN0SWRXaXRoVGl0bGUsXG4gICAgICAgIHJlbW92ZVByb2plY3RCeVRpdGxlXG4gICAgfTtcbn1cblxuXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9DRURSSUMgZGVtby50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL1RpbHRXYXJwLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiAgICA6cm9vdHtcXG4gICAgICAgIC0tZGFyazogIzE2MjA1RTtcXG4gICAgICAgIC0tbWlkOiAjMzYzRTg4O1xcbiAgICAgICAgLS1saWdodDogIzU3NUU5QjtcXG4gICAgICAgIC0tYWNjZW50OiAjNUM2REZGO1xcbiAgICAgICAgLS1yOiAjRkY3NDc0O1xcbiAgICAgICAgLS1nOiAjNEVFRkEzO1xcbiAgICAgICAgLS1iOiAjNDNDN0ZGO1xcbiAgICAgICAgLS13OiAjYzlkMGZhO1xcbiAgICB9XFxuXFxuICAgIDo6c2VsZWN0aW9ue1xcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIH1cXG5cXG5cXG4gICAgQGZvbnQtZmFjZSB7XFxuICAgICAgICBmb250LWZhbWlseTogJ2NlZHJpYyc7XFxuICAgICAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpOyBcXG4gICAgfVxcblxcbiAgICBAZm9udC1mYWNlIHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAndGlsdFdyYXAnO1xcbiAgICAgICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTsgXFxuICAgIH1cXG5cXG5cXG4gICAgKntcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAndGlsdFdyYXAnO1xcbiAgICB9XFxuXFxuICAgIGh0bWwsXFxuICAgIGJvZHl7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG5cXG4gICAgYm9keXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuXFxuICAgIC5ub2Rpc3BsYXl7XFxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnR7XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgcGFkZGluZzogMnJlbSAycmVtIDFyZW0gMnJlbTtcXG4gICAgfVxcblxcbiAgICBhe1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXcpO1xcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gICAgICAgIHBhZGRpbmc6IDAuMXJlbSAwLjJyZW07XFxuICAgIH1cXG5cXG4gICAgYTpob3ZlcntcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDNDN0ZGO1xcbiAgICB9XFxuXFxuICAgIGZvb3RlcntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdHN7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgICAgICBmbGV4OjIuNTtcXG4gICAgICAgIGdhcDoxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwIDogMTVweDtcXG4gICAgfVxcblxcbiAgICAudG9kby1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcCA6IDE1cHg7XFxuICAgIH1cXG5cXG5cXG4gICAgc3Zne1xcbiAgICAgICAgaGVpZ2h0OiAxLjdyZW07XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1kaXZ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXcpO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm9yZGVyIHNjYWxlO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWRpdi5zZWxlY3RlZHtcXG4gICAgICAgIHdpZHRoOiA4NSU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICB9XFxuXFxuXFxuICAgIC5wcm9qZWN0LWRpdiAucHJvamVjdC10aXRsZXtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtZGl2Om5vdCguc2VsZWN0ZWQpOmhvdmVye1xcbiAgICAgICAgd2lkdGg6IDgyJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgNDAsIDE0Nik7XFxuICAgIH1cXG5cXG5cXG4gICAgLnByb2plY3QtZGl2IHNwYW57XFxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgfVxcblxcbiAgICAudG9kby1kaXZ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGhlaWdodDogODBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXcpO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWRpdiAuY2hlY2stdGl0bGV7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6MjBweDtcXG4gICAgfVxcblxcbiAgICAudG9kby1kaXYuZXh0ZW5kZWQsXFxuICAgIC50b2RvLWRpdi5leHRlbmRlZCAucmlnaHQtc2lkZXtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBnYXA6MHB4O1xcbiAgICB9XFxuXFxuICAgIHB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZGl2LmV4dGVuZGVkIC50b2RvLWRlc2NyaXB0aW9ue1xcbiAgICAgICAgaW5saW5lLXNpemU6IDcwMHB4O1xcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgICAgIGh5cGhlbnM6IG1hbnVhbDtcXG4gICAgfVxcblxcbiAgICAudG9kby1kaXYuLS1ye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcik7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZGl2Li0tZ3tcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWcpO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWRpdi4tLWJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iKTtcXG4gICAgfVxcblxcbiAgICAudG9kby1kaXYuY29tcGxldGVke1xcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNik7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZGl2ICp7XFxuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWRpdiAudG9kby10aXRsZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgY29sb3I6IHJnYmEoMjMsIDAsIDc4LCAwLjkpO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWRpdiBidXR0b257XFxuICAgICAgICBmaWx0ZXI6b3BhY2l0eSgwLjUpO1xcbiAgICB9XFxuXFxuXFxuXFxuXFxuICAgIC50b2RvLWRpdiAubGVmdC1zaWRle1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZGl2IC5yaWdodC1zaWRle1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZGl2IC50b2RvLWR1ZURhdGV7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9ue1xcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICBmaWx0ZXI6IGludmVydCg4MiUpIHNlcGlhKDMlKSBzYXR1cmF0ZSgyNzk1JSkgaHVlLXJvdGF0ZSgxOTZkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoOTYlKTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG5cXG4gICAgLmVkaXQ6aG92ZXJ7XFxuICAgICAgICBmaWx0ZXI6IGludmVydCg2NCUpIHNlcGlhKDk4JSkgc2F0dXJhdGUoMTM0NyUpIGh1ZS1yb3RhdGUoMTcwZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDEwNCUpIGRyb3Atc2hhZG93KDAgMCAwLjNyZW0gYmxhY2spO1xcbiAgICB9XFxuXFxuICAgIC5kZWxldGU6aG92ZXJ7XFxuICAgICAgICBmaWx0ZXI6IGludmVydCg2MyUpIHNlcGlhKDcyJSkgc2F0dXJhdGUoMjU5NyUpIGh1ZS1yb3RhdGUoMzE2ZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDEwNCUpICBkcm9wLXNoYWRvdygwIDAgMC4zcmVtIGJsYWNrKTtcXG4gICAgfVxcblxcbiAgICAuYWRkLWJ1dHRvbntcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgLmFkZC1idXR0b246aG92ZXJ7XFxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAwLjc1cmVtIHJlZCk7XFxuICAgICAgICBmaWx0ZXI6IGludmVydCg2NCUpIHNlcGlhKDk4JSkgc2F0dXJhdGUoMTM0NyUpIGh1ZS1yb3RhdGUoMTcwZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDEwNCUpIGRyb3Atc2hhZG93KDAgMCAwLjNyZW0gYmxhY2spO1xcbiAgICB9XFxuXFxuICAgIC50b2Rvc3tcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZCk7XFxuICAgICAgICBmbGV4OjY7XFxuICAgICAgICBnYXA6MTVweDtcXG4gICAgfVxcblxcbiAgICBidXR0b257XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIGgxe1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgICAgICBmb250LWZhbWlseTogJ2NlZHJpYyc7XFxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICAgICAgbWFyZ2luOjA7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXcpO1xcbiAgICB9XFxuXFxuICAgIGgye1xcbiAgICAgICAgY29sb3I6IHZhcigtLXcpO1xcbiAgICAgICAgbWFyZ2luOiAxNXB4IDAgMCAwIDtcXG4gICAgfVxcblxcbiAgICBoM3tcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgfVxcblxcbiAgICAuYnV0dG9uLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGdhcDoxNXB4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB9XFxuXFxuICAgIC5wb3B1cHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13KTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgcGFkZGluZzogMjBweCA1MHB4O1xcbiAgICAgICAgZ2FwOjIwcHg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgei1pbmRleDogMTA7XFxuICAgIH1cXG5cXG4gICAgLnBvcHVwIGJ1dHRvbntcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIGZpbHRlcjogbm9uZTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13KTtcXG4gICAgfVxcblxcbiAgICBpbnB1dDpub3QoW3R5cGU9Y2hlY2tib3hdKXtcXG4gICAgICAgIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdyk7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgfVxcblxcblxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XXtcXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICBmb250OiBpbmhlcml0O1xcbiAgICAgICAgY29sb3I6IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC42KTtcXG4gICAgICAgIGJvcmRlcjogMC4xNWVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuMGVtKTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gICAgXFxuICAgIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMCwgMCwgMCwgMC43MTkpO1xcbiAgICAgICAgXFxuICAgICAgfVxcbiAgICAgIFxcblxcbiAgICBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxuXFxuICAgIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbWF4KDJweCwgMC4xNWVtKSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgICBvdXRsaW5lLW9mZnNldDogbWF4KDJweCwgMC4xNWVtKTtcXG4gICAgfVxcbiAgICAgIFxcbiAgICBcXG4gICAgc2VsZWN0e1xcbiAgICAgICAgb3V0bGluZS1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13KTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgMjBweCk7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgfVxcblxcbiAgICAudGl0bGUtbGFiZWw6OmFmdGVye1xcbiAgICAgICAgY29udGVudDogXFxcIipcXFwiO1xcbiAgICB9XFxuXFxuICAgIC5wb3B1cCBidXR0b246aG92ZXJ7XFxuICAgICAgICBmaWx0ZXI6YnJpZ2h0bmVzcygwLjgpO1xcbiAgICB9XFxuXFxuICAgIC5wb3B1cCBidXR0b24uY29uZmlybXtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWcpO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICB9XFxuXFxuICAgIC5wb3B1cCBidXR0b24uY2FuY2Vse1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcik7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgLmlucHV0LXdyYXBwZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgIH1cXG5cXG4gICAgLmJhY2tkcm9we1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wKTtcXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgICAgICB6LWluZGV4OiA1O1xcbiAgICB9XFxuXFxuICAgIC5iYWNrZHJvcC52aXNpYmxle1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6dmlzaWJsZTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgICAgIGFuaW1hdGlvbjogZmFkZS1pbiA1MDBtcyBmb3J3YXJkcztcXG4gICAgfVxcblxcbiAgICAucG9wdXAudmlzaWJsZXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbmltYXRpb246IGZhZGUtaW4gNTAwbXMgZm9yd2FyZHM7XFxuICAgICAgICBhbmltYXRpb246IHNsaWRlIHVwIDUwMG1zIGZvcndhcmRzO1xcbiAgICB9XFxuXFxuICAgIC5lcnJvcntcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1yKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gICAgICAgIDAle1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAxMDAle1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG5cXG4gICAgQGtleWZyYW1lcyBmYWRlLW91dCB7XFxuICAgICAgICAwJXtcXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgMTAwJXtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBrZXlmcmFtZXMgc2xpZGUtdXAge1xcbiAgICAgICAgMCV7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcbiAgICAgICAgfSAgICBcXG5cXG4gICAgICAgIDEwMCV7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gICAgICAgIH1cXG5cXG5cXG4gICAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIklBQUk7UUFDSSxlQUFlO1FBQ2YsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLFlBQVk7UUFDWixZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7UUFDWix1QkFBdUI7SUFDM0I7OztJQUdBO1FBQ0kscUJBQXFCO1FBQ3JCLCtEQUFpRDtJQUNyRDs7SUFFQTtRQUNJLHVCQUF1QjtRQUN2QiwrREFBcUQ7SUFDekQ7OztJQUdBO1FBQ0ksdUJBQXVCO0lBQzNCOztJQUVBOztRQUVJLFlBQVk7UUFDWixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO0lBQzFCOzs7SUFHQTtRQUNJLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLE9BQU87UUFDUCxhQUFhO1FBQ2IsV0FBVztJQUNmOztJQUVBO1FBQ0ksNkJBQTZCO1FBQzdCLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YseUJBQXlCO1FBQ3pCLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLGFBQWE7UUFDYiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNC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UUFDakMsa0NBQWtDO0lBQ3RDOztJQUVBO1FBQ0ksZUFBZTtRQUNmLDZCQUE2QjtRQUM3QixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSTtZQUNJLFVBQVU7UUFDZDs7UUFFQTtZQUNJLFVBQVU7UUFDZDtJQUNKOzs7SUFHQTtRQUNJO1lBQ0ksVUFBVTtRQUNkOztRQUVBO1lBQ0ksVUFBVTtRQUNkO0lBQ0o7O0lBRUE7UUFDSTtZQUNJLDJCQUEyQjtRQUMvQjs7UUFFQTtZQUNJLHlCQUF5QjtRQUM3Qjs7O0lBR0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiICAgIDpyb290e1xcbiAgICAgICAgLS1kYXJrOiAjMTYyMDVFO1xcbiAgICAgICAgLS1taWQ6ICMzNjNFODg7XFxuICAgICAgICAtLWxpZ2h0OiAjNTc1RTlCO1xcbiAgICAgICAgLS1hY2NlbnQ6ICM1QzZERkY7XFxuICAgICAgICAtLXI6ICNGRjc0NzQ7XFxuICAgICAgICAtLWc6ICM0RUVGQTM7XFxuICAgICAgICAtLWI6ICM0M0M3RkY7XFxuICAgICAgICAtLXc6ICNjOWQwZmE7XFxuICAgIH1cXG5cXG4gICAgOjpzZWxlY3Rpb257XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcblxcblxcbiAgICBAZm9udC1mYWNlIHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnY2VkcmljJztcXG4gICAgICAgIHNyYzogdXJsKCcuL0NFRFJJQ1xcXFwgZGVtby50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7IFxcbiAgICB9XFxuXFxuICAgIEBmb250LWZhY2Uge1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICd0aWx0V3JhcCc7XFxuICAgICAgICBzcmM6IHVybCgnLi9UaWx0V2FycC1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTsgXFxuICAgIH1cXG5cXG5cXG4gICAgKntcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAndGlsdFdyYXAnO1xcbiAgICB9XFxuXFxuICAgIGh0bWwsXFxuICAgIGJvZHl7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG5cXG4gICAgYm9keXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuXFxuICAgIC5ub2Rpc3BsYXl7XFxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnR7XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgcGFkZGluZzogMnJlbSAycmVtIDFyZW0gMnJlbTtcXG4gICAgfVxcblxcbiAgICBhe1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXcpO1xcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gICAgICAgIHBhZGRpbmc6IDAuMXJlbSAwLjJyZW07XFxuICAgIH1cXG5cXG4gICAgYTpob3ZlcntcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDNDN0ZGO1xcbiAgICB9XFxuXFxuICAgIGZvb3RlcntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdHN7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgICAgICBmbGV4OjIuNTtcXG4gICAgICAgIGdhcDoxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwIDogMTVweDtcXG4gICAgfVxcblxcbiAgICAudG9kby1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcCA6IDE1cHg7XFxuICAgIH1cXG5cXG5cXG4gICAgc3Zne1xcbiAgICAgICAgaGVpZ2h0OiAxLjdyZW07XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1kaXZ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXcpO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm9yZGVyIHNjYWxlO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWRpdi5zZWxlY3RlZHtcXG4gICAgICAgIHdpZHRoOiA4NSU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICB9XFxuXFxuXFxuICAgIC5wcm9qZWN0LWRpdiAucHJvamVjdC10aXRsZXtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtZGl2Om5vdCguc2VsZWN0ZWQpOmhvdmVye1xcbiAgICAgICAgd2lkdGg6IDgyJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgNDAsIDE0Nik7XFxuICAgIH1cXG5cXG5cXG4gICAgLnByb2plY3QtZGl2IHNwYW57XFxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgfVxcblxcbiAgICAudG9kby1kaXZ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGhlaWdodDogODBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXcpO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWRpdiAuY2hlY2stdGl0bGV7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6MjBweDtcXG4gICAgfVxcblxcbiAgICAudG9kby1kaXYuZXh0ZW5kZWQsXFxuICAgIC50b2RvLWRpdi5leHRlbmRlZCAucmlnaHQtc2lkZXtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBnYXA6MHB4O1xcbiAgICB9XFxuXFxuICAgIHB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZGl2LmV4dGVuZGVkIC50b2RvLWRlc2NyaXB0aW9ue1xcbiAgICAgICAgaW5saW5lLXNpemU6IDcwMHB4O1xcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgICAgIGh5cGhlbnM6IG1hbnVhbDtcXG4gICAgfVxcblxcbiAgICAudG9kby1kaXYuLS1ye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcik7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZGl2Li0tZ3tcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWcpO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWRpdi4tLWJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iKTtcXG4gICAgfVxcblxcbiAgICAudG9kby1kaXYuY29tcGxldGVke1xcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNik7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZGl2ICp7XFxuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWRpdiAudG9kby10aXRsZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgY29sb3I6IHJnYmEoMjMsIDAsIDc4LCAwLjkpO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWRpdiBidXR0b257XFxuICAgICAgICBmaWx0ZXI6b3BhY2l0eSgwLjUpO1xcbiAgICB9XFxuXFxuXFxuXFxuXFxuICAgIC50b2RvLWRpdiAubGVmdC1zaWRle1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZGl2IC5yaWdodC1zaWRle1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZGl2IC50b2RvLWR1ZURhdGV7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9ue1xcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICBmaWx0ZXI6IGludmVydCg4MiUpIHNlcGlhKDMlKSBzYXR1cmF0ZSgyNzk1JSkgaHVlLXJvdGF0ZSgxOTZkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoOTYlKTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG5cXG4gICAgLmVkaXQ6aG92ZXJ7XFxuICAgICAgICBmaWx0ZXI6IGludmVydCg2NCUpIHNlcGlhKDk4JSkgc2F0dXJhdGUoMTM0NyUpIGh1ZS1yb3RhdGUoMTcwZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDEwNCUpIGRyb3Atc2hhZG93KDAgMCAwLjNyZW0gYmxhY2spO1xcbiAgICB9XFxuXFxuICAgIC5kZWxldGU6aG92ZXJ7XFxuICAgICAgICBmaWx0ZXI6IGludmVydCg2MyUpIHNlcGlhKDcyJSkgc2F0dXJhdGUoMjU5NyUpIGh1ZS1yb3RhdGUoMzE2ZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDEwNCUpICBkcm9wLXNoYWRvdygwIDAgMC4zcmVtIGJsYWNrKTtcXG4gICAgfVxcblxcbiAgICAuYWRkLWJ1dHRvbntcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgLmFkZC1idXR0b246aG92ZXJ7XFxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAwLjc1cmVtIHJlZCk7XFxuICAgICAgICBmaWx0ZXI6IGludmVydCg2NCUpIHNlcGlhKDk4JSkgc2F0dXJhdGUoMTM0NyUpIGh1ZS1yb3RhdGUoMTcwZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDEwNCUpIGRyb3Atc2hhZG93KDAgMCAwLjNyZW0gYmxhY2spO1xcbiAgICB9XFxuXFxuICAgIC50b2Rvc3tcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZCk7XFxuICAgICAgICBmbGV4OjY7XFxuICAgICAgICBnYXA6MTVweDtcXG4gICAgfVxcblxcbiAgICBidXR0b257XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIGgxe1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgICAgICBmb250LWZhbWlseTogJ2NlZHJpYyc7XFxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICAgICAgbWFyZ2luOjA7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXcpO1xcbiAgICB9XFxuXFxuICAgIGgye1xcbiAgICAgICAgY29sb3I6IHZhcigtLXcpO1xcbiAgICAgICAgbWFyZ2luOiAxNXB4IDAgMCAwIDtcXG4gICAgfVxcblxcbiAgICBoM3tcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgfVxcblxcbiAgICAuYnV0dG9uLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGdhcDoxNXB4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB9XFxuXFxuICAgIC5wb3B1cHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13KTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgcGFkZGluZzogMjBweCA1MHB4O1xcbiAgICAgICAgZ2FwOjIwcHg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgei1pbmRleDogMTA7XFxuICAgIH1cXG5cXG4gICAgLnBvcHVwIGJ1dHRvbntcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIGZpbHRlcjogbm9uZTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13KTtcXG4gICAgfVxcblxcbiAgICBpbnB1dDpub3QoW3R5cGU9Y2hlY2tib3hdKXtcXG4gICAgICAgIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdyk7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgfVxcblxcblxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XXtcXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICBmb250OiBpbmhlcml0O1xcbiAgICAgICAgY29sb3I6IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC42KTtcXG4gICAgICAgIGJvcmRlcjogMC4xNWVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuMGVtKTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gICAgXFxuICAgIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMCwgMCwgMCwgMC43MTkpO1xcbiAgICAgICAgXFxuICAgICAgfVxcbiAgICAgIFxcblxcbiAgICBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxuXFxuICAgIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbWF4KDJweCwgMC4xNWVtKSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgICBvdXRsaW5lLW9mZnNldDogbWF4KDJweCwgMC4xNWVtKTtcXG4gICAgfVxcbiAgICAgIFxcbiAgICBcXG4gICAgc2VsZWN0e1xcbiAgICAgICAgb3V0bGluZS1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13KTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgMjBweCk7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgfVxcblxcbiAgICAudGl0bGUtbGFiZWw6OmFmdGVye1xcbiAgICAgICAgY29udGVudDogXFxcIipcXFwiO1xcbiAgICB9XFxuXFxuICAgIC5wb3B1cCBidXR0b246aG92ZXJ7XFxuICAgICAgICBmaWx0ZXI6YnJpZ2h0bmVzcygwLjgpO1xcbiAgICB9XFxuXFxuICAgIC5wb3B1cCBidXR0b24uY29uZmlybXtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWcpO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICB9XFxuXFxuICAgIC5wb3B1cCBidXR0b24uY2FuY2Vse1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcik7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgLmlucHV0LXdyYXBwZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgIH1cXG5cXG4gICAgLmJhY2tkcm9we1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wKTtcXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgICAgICB6LWluZGV4OiA1O1xcbiAgICB9XFxuXFxuICAgIC5iYWNrZHJvcC52aXNpYmxle1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6dmlzaWJsZTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgICAgIGFuaW1hdGlvbjogZmFkZS1pbiA1MDBtcyBmb3J3YXJkcztcXG4gICAgfVxcblxcbiAgICAucG9wdXAudmlzaWJsZXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbmltYXRpb246IGZhZGUtaW4gNTAwbXMgZm9yd2FyZHM7XFxuICAgICAgICBhbmltYXRpb246IHNsaWRlIHVwIDUwMG1zIGZvcndhcmRzO1xcbiAgICB9XFxuXFxuICAgIC5lcnJvcntcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1yKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gICAgICAgIDAle1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAxMDAle1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG5cXG4gICAgQGtleWZyYW1lcyBmYWRlLW91dCB7XFxuICAgICAgICAwJXtcXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgMTAwJXtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBrZXlmcmFtZXMgc2xpZGUtdXAge1xcbiAgICAgICAgMCV7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcbiAgICAgICAgfSAgICBcXG5cXG4gICAgICAgIDEwMCV7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gICAgICAgIH1cXG5cXG5cXG4gICAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiY3VycmVudFByb2plY3QiLCJDdXJyZW50VXNlciIsInNldEN1cnJlbnRQcm9qZWN0Iiwic2V0Q3VycmVudFVzZXIiLCJiYWNrZHJvcCIsInByb2plY3RDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2RvQ29udGFpbmVyIiwiZWRpdFByb2plY3RQb3B1cCIsImVkaXRUb2RvUG9wdXAiLCJjb25maXJtRGVsZXRlUG9wdXAiLCJkaXNwbGF5UHJvamVjdHMiLCJ1c2VyIiwiUHJvamVjdENvbnRhaW5lciIsInByb2plY3RUZW1wbGF0ZSIsInByb2plY3RBcnIiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwicHJvamVjdCIsInByb2plY3RDbG9uZSIsImNsb25lTm9kZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImlubmVyVGV4dCIsInRpdGxlIiwiZGVsZXRlQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb25zb2xlIiwibG9nIiwiZGlzcGxheVBvcHVwIiwiY2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbiIsImhpZGVQb3B1cCIsInJlbW92ZVByb2plY3RCeVRpdGxlIiwibGVuZ3RoIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJTZWxlY3RlZFByb2plY3RDaGFuZ2VTdHlsZSIsInN0b3BQcm9wYWdhdGlvbiIsImVkaXRCdXR0b24iLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwiZGF0YXNldCIsImFwcGVuZENoaWxkIiwiZGlzcGxheVRvZG9zIiwidG9kb1RlbXBsYXRlIiwidW5kZWZpbmVkIiwicHJpb3JpdHlDb2xvcnMiLCJ0b2RvQXJyIiwidG9kbyIsInRvZG9DbG9uZSIsInRvZG9DaGVja2JveCIsInNob3J0ZXJTdHJpbmciLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJjaGVja2VkIiwiY29tcGxldGVkIiwiYWRkIiwicHJpb3JpdHkiLCJvbGRDYW5jZWxCdXR0b24iLCJvbGRDb25maXJtQnV0dG9uIiwicGFyZW50Tm9kZSIsInJlcGxhY2VDaGlsZCIsInJlbW92ZVRvZG9CeVRpdGxlIiwiY29udGFpbnMiLCJTZWxlY3RlZFRvZG9FeHRlbmQiLCJwcm9qZWN0RWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicHJvamVjdEVsZW1lbnQiLCJ0aXRsZUVsZW1lbnQiLCJwcm9qZWN0RWxlbWVudFRpdGxlIiwidG9kb0VsZW1lbnRzIiwidG9kb0VsZW1lbnQiLCJ0b2RvRWxlbWVudFRpdGxlIiwidG9kb1RpdGxlIiwidG9kb1dpdGhUaXRsZSIsInBvcHVwRWxlbWVudCIsImRpc3BsYXlFcnJvciIsInBvcHVwIiwiZXJyb3JDbGFzcyIsImVycm9yVGV4dCIsInN0cmluZyIsInNob3J0ZXIiLCJzbGljZSIsInRvZG9JdGVtRmFjdG9yeSIsInByb2plY3RGYWN0b3J5IiwidXNlckZhY3RvcnkiLCJzZXR1cCIsIkljb24iLCJsaW5rIiwiY3JlYXRlRWxlbWVudCIsInJlbCIsImhyZWYiLCJoZWFkIiwiYWRkUHJvamVjdEJ1dHRvbiIsImFkZFByb2plY3RQb3B1cCIsImFkZFRvZG9CdXR0b24iLCJhZGRUb2RvUG9wdXAiLCJyZXRyaWV2ZWRVc2VyIiwiZ2V0SXRlbSIsInVzZXJKc29uIiwicGFyc2UiLCJjcmVhdGVUb2RvIiwidXNlcm5hbWUiLCJuZXdQcm9qZWN0IiwiYWRkUHJvamVjdCIsInNldHVwQWRkQnV0dG9ucyIsInNldHVwUG9wdXBCdXR0b25zIiwiYWRkVG9kb0NvbmZpcm1CdXR0b24iLCJhZGRUb2RvQ2FuY2VsQnV0dG9uIiwiZ2V0VG9kb0lkQnlUaXRsZSIsImFkZFByb2plY3RDb25maXJtQnV0dG9uIiwiYWRkUHJvamVjdENhbmNlbEJ1dHRvbiIsInByb2plY3RJZFdpdGhUaXRsZSIsImNyZWF0ZVByb2plY3QiLCJwcm9qZWN0V2l0aFRpdGxlIiwiZWRpdFByb2plY3RDb25maXJtQnV0dG9uIiwiZWRpdFByb2plY3RDYW5jZWxCdXR0b24iLCJlZGl0VG9kb0NvbmZpcm1CdXR0b24iLCJlZGl0VG9kb0NhbmNlbEJ1dHRvbiIsImVkaXRlZFRvZG8iLCJzb3J0VG9kb3MiLCJhZGRUb2RvIiwidG9kb0l0ZW0iLCJwdXNoIiwic29ydCIsInNvcnRGbiIsImEiLCJiIiwibmV3VG9kb0l0ZW0iLCJyZW1vdmVUb2RvIiwiaWQiLCJnZXRUb2RvSWQiLCJzcGxpY2UiLCJmaW5kIiwiZWxlbWVudCIsImZpbmRJbmRleCIsInByb2plY3RJdGVtIiwicHJvamVjdE5hbWUiLCJwcm9qZWN0VGl0bGUiLCJyZW1vdmVQcm9qZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==