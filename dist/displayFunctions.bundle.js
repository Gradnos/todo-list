"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["displayFunctions"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/displayFunctions.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssS0FBS0EsS0FBSyxDQUFDO0lBQ2pFLElBQUdOLE9BQU8sS0FBSytCLFNBQVMsRUFBRTtJQUMxQndGLGFBQWEsQ0FBQ3ZILE9BQU8sQ0FBQztFQUMxQixDQUFDO0VBRUQsTUFBTStHLFNBQVMsR0FBSUssV0FBVyxJQUFJO0lBQzlCLE9BQU92SCxVQUFVLENBQUNzSCxTQUFTLENBQUNELE9BQU8sSUFBSUEsT0FBTyxDQUFDNUcsS0FBSyxLQUFLOEcsV0FBVyxDQUFDOUcsS0FBSyxDQUFDO0VBQy9FLENBQUM7RUFFRCxPQUFNO0lBQ0YyRSxRQUFRO0lBQ1JwRixVQUFVO0lBQ1ZzRixVQUFVO0lBQ1ZVLGFBQWE7SUFDYjBCLGFBQWE7SUFDYnZDLFVBQVU7SUFDVnFCLE9BQU87SUFDUFAsZ0JBQWdCO0lBQ2hCRixrQkFBa0I7SUFDbEI1RTtFQUNKLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NldHVwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvT2JqZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXJyZW50UHJvamVjdCwgQ3VycmVudFVzZXIsIHNldEN1cnJlbnRQcm9qZWN0LCBzZXRDdXJyZW50VXNlciwgYmFja2Ryb3AgfSBmcm9tIFwiLi9zZXR1cFwiO1xuXG5sZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XG5cbmxldCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWNvbnRhaW5lclwiKTtcblxubGV0IGVkaXRQcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtcHJvamVjdC1wb3B1cFwiKTtcbmxldCBlZGl0VG9kb1BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRvZG8tcG9wdXBcIik7XG5cbmxldCBjb25maXJtRGVsZXRlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm0tZGVsZXRlLXBvcHVwXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKHVzZXIsIFByb2plY3RDb250YWluZXIsIHByb2plY3RUZW1wbGF0ZSl7XG4gICAgbGV0IHByb2plY3RBcnIgPSB1c2VyLnByb2plY3RBcnI7XG4gICAgUHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHByb2plY3RBcnIuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgbGV0IHByb2plY3RDbG9uZSA9IHByb2plY3RUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIHByb2plY3RDbG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwibm9kaXNwbGF5XCIsIFwicHJvamVjdC10ZW1wbGF0ZVwiKVxuICAgICAgICBwcm9qZWN0Q2xvbmUucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpLmlubmVyVGV4dCA9IHByb2plY3QudGl0bGU7XG5cbiAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IHByb2plY3RDbG9uZS5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZVwiKTtcblxuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm9qZWN0XCIpO1xuXG5cbiAgICAgICAgICAgIGNvbmZpcm1EZWxldGVQb3B1cC5xdWVyeVNlbGVjdG9yKFwiaDNcIikuaW5uZXJUZXh0ID0gYERlbGV0ZSA+PiR7cHJvamVjdC50aXRsZX08PCA/YDtcbiAgICAgICAgICAgIGRpc3BsYXlQb3B1cChjb25maXJtRGVsZXRlUG9wdXAsYmFja2Ryb3ApO1xuICAgICAgICAgICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGNvbmZpcm1EZWxldGVQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcbiAgICAgICAgICAgIGxldCBjb25maXJtQnV0dG9uID0gY29uZmlybURlbGV0ZVBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybVwiKTtcbiAgICAgICAgXG4gICAgICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICAgICAgaGlkZVBvcHVwKGNvbmZpcm1EZWxldGVQb3B1cCxiYWNrZHJvcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICAgICAgIGhpZGVQb3B1cChjb25maXJtRGVsZXRlUG9wdXAsYmFja2Ryb3ApO1xuXG4gICAgICAgICAgICAgICAgQ3VycmVudFVzZXIucmVtb3ZlUHJvamVjdEJ5VGl0bGUocHJvamVjdC50aXRsZSk7XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFByb2plY3QudGl0bGUgPT09IHByb2plY3QudGl0bGUpIHNldEN1cnJlbnRQcm9qZWN0KHVzZXIucHJvamVjdEFyclt1c2VyLnByb2plY3RBcnIubGVuZ3RoLTFdKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShDdXJyZW50VXNlcikpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVU0VSJywgSlNPTi5zdHJpbmdpZnkoQ3VycmVudFVzZXIpKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5UHJvamVjdHModXNlciwgUHJvamVjdENvbnRhaW5lciwgcHJvamVjdFRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICBpZih1c2VyLnByb2plY3RBcnIubGVuZ3RoID4gMCkgU2VsZWN0ZWRQcm9qZWN0Q2hhbmdlU3R5bGUoY3VycmVudFByb2plY3QpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBlZGl0QnV0dG9uID0gcHJvamVjdENsb25lLnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFwiKTtcblxuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICBlZGl0UHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXRpdGxlXCIpLnZhbHVlID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0UG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtdGl0bGVcIikucGxhY2Vob2xkZXIgPSBwcm9qZWN0LnRpdGxlO1xuXG5cbiAgICAgICAgICAgIGRpc3BsYXlQb3B1cChlZGl0UHJvamVjdFBvcHVwLGJhY2tkcm9wKTtcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0UG9wdXAuZGF0YXNldC50aXRsZSA9IHByb2plY3QudGl0bGU7XG5cbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3RDbG9uZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENsb25lKTtcbiAgICB9KTtcblxuICAgIGlmKHVzZXIucHJvamVjdEFyci5sZW5ndGggPiAwKSBTZWxlY3RlZFByb2plY3RDaGFuZ2VTdHlsZShjdXJyZW50UHJvamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VG9kb3MocHJvamVjdCwgdG9kb0NvbnRhaW5lciwgdG9kb1RlbXBsYXRlKXtcbiAgICBcbiAgICB0b2RvQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgaWYocHJvamVjdCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICBsZXQgcHJpb3JpdHlDb2xvcnMgPSBbXCItLXJcIiwgXCItLWJcIiwgXCItLWdcIl07XG5cblxuICAgIGxldCB0b2RvQXJyID0gcHJvamVjdC50b2RvQXJyO1xuICAgIHRvZG9BcnIuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgbGV0IHRvZG9DbG9uZSA9IHRvZG9UZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGxldCB0b2RvQ2hlY2tib3ggPSB0b2RvQ2xvbmUucXVlcnlTZWxlY3RvcihcIi50b2RvLWNvbXBsZXRlZFwiKTtcblxuXG5cblxuICAgICAgICB0b2RvQ2xvbmUuY2xhc3NMaXN0LnJlbW92ZShcIm5vZGlzcGxheVwiLCBcInRvZG8tdGVtcGxhdGVcIilcbiAgICAgICAgdG9kb0Nsb25lLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10aXRsZVwiKS5pbm5lclRleHQgPSB0b2RvLnRpdGxlO1xuICAgICAgICB0b2RvQ2xvbmUucXVlcnlTZWxlY3RvcihcIi50b2RvLWRlc2NyaXB0aW9uXCIpLmlubmVyVGV4dCA9IHNob3J0ZXJTdHJpbmcodG9kby5kZXNjcmlwdGlvbiwgNDApOztcbiAgICAgICAgdG9kb0Nsb25lLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kdWVEYXRlXCIpLmlubmVyVGV4dCA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgdG9kb0NoZWNrYm94LmNoZWNrZWQgPSB0b2RvLmNvbXBsZXRlZDtcblxuICAgIFxuICAgICAgICB0b2RvQ2xvbmUuY2xhc3NMaXN0LmFkZChwcmlvcml0eUNvbG9yc1t0b2RvLnByaW9yaXR5XSk7XG5cbiAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IHRvZG9DbG9uZS5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZVwiKTtcblxuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b2RvXCIpO1xuXG4gICAgICAgICAgICBjb25maXJtRGVsZXRlUG9wdXAucXVlcnlTZWxlY3RvcihcImgzXCIpLmlubmVyVGV4dCA9IGBEZWxldGUgPj4ke3RvZG8udGl0bGV9PDwgP2A7XG4gICAgICAgICAgICBkaXNwbGF5UG9wdXAoY29uZmlybURlbGV0ZVBvcHVwLGJhY2tkcm9wKTtcbiAgICAgICAgICAgIGxldCBvbGRDYW5jZWxCdXR0b24gPSBjb25maXJtRGVsZXRlUG9wdXAucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG4gICAgICAgICAgICBsZXQgb2xkQ29uZmlybUJ1dHRvbiA9IGNvbmZpcm1EZWxldGVQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1cIik7XG5cbiAgICAgICAgICAgIGxldCBjYW5jZWxCdXR0b24gPSBvbGRDYW5jZWxCdXR0b24uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgb2xkQ2FuY2VsQnV0dG9uLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNhbmNlbEJ1dHRvbiwgb2xkQ2FuY2VsQnV0dG9uKTtcblxuICAgICAgICAgICAgbGV0IGNvbmZpcm1CdXR0b24gPSBvbGRDb25maXJtQnV0dG9uLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIG9sZENvbmZpcm1CdXR0b24ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY29uZmlybUJ1dHRvbiwgb2xkQ29uZmlybUJ1dHRvbik7XG4gICAgICAgIFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICAgICAgIGhpZGVQb3B1cChjb25maXJtRGVsZXRlUG9wdXAsYmFja2Ryb3ApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgICAgICBoaWRlUG9wdXAoY29uZmlybURlbGV0ZVBvcHVwLGJhY2tkcm9wKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdC5yZW1vdmVUb2RvQnlUaXRsZSh0b2RvLnRpdGxlKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVNFUicsIEpTT04uc3RyaW5naWZ5KEN1cnJlbnRVc2VyKSk7XG4gICAgICAgICAgICAgICAgZGlzcGxheVRvZG9zKHByb2plY3QsIHRvZG9Db250YWluZXIsIHRvZG9UZW1wbGF0ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZWRpdEJ1dHRvbiA9IHRvZG9DbG9uZS5xdWVyeVNlbGVjdG9yKFwiLmVkaXRcIik7XG5cbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC10aXRsZVwiKS52YWx1ZSA9IHRvZG8udGl0bGU7XG4gICAgICAgICAgICBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXRpdGxlXCIpLnBsYWNlaG9sZGVyID0gdG9kby50aXRsZTtcblxuICAgICAgICAgICAgZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC1kZXNjcmlwdGlvblwiKS52YWx1ZSA9IHRvZG8uZGVzY3JpcHRpb247XG5cbiAgICAgICAgICAgIGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtZHVlRGF0ZVwiKS52YWx1ZSA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgICAgIGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtcHJpb3JpdHlcIikudmFsdWUgPSB0b2RvLnByaW9yaXR5OyBcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBkaXNwbGF5UG9wdXAoZWRpdFRvZG9Qb3B1cCxiYWNrZHJvcCk7XG4gICAgICAgICAgICBlZGl0VG9kb1BvcHVwLmRhdGFzZXQudGl0bGUgPSB0b2RvLnRpdGxlO1xuXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0b2RvQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgIHRvZG8uY29tcGxldGVkID0gIXRvZG8uY29tcGxldGVkO1xuICAgICAgICAgICAgaWYodG9kby5jb21wbGV0ZWQpIHRvZG9DbG9uZS5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgICAgICAgICAgZWxzZSB0b2RvQ2xvbmUuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRvZG9DbG9uZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XG4gICAgICAgICAgICBpZih0b2RvQ2xvbmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXh0ZW5kZWRcIikpe1xuICAgICAgICAgICAgICAgIFNlbGVjdGVkVG9kb0V4dGVuZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgdG9kb0Nsb25lLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kZXNjcmlwdGlvblwiKS5pbm5lclRleHQgPSBzaG9ydGVyU3RyaW5nKHRvZG8uZGVzY3JpcHRpb24sIDQwKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIFNlbGVjdGVkVG9kb0V4dGVuZCh0b2RvKTtcbiAgICAgICAgICAgICAgICB0b2RvQ2xvbmUucXVlcnlTZWxlY3RvcihcIi50b2RvLWRlc2NyaXB0aW9uXCIpLmlubmVyVGV4dCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgaWYodG9kby5jb21wbGV0ZWQpIHRvZG9DbG9uZS5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgICAgICBlbHNlIHRvZG9DbG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkXCIpO1xuXG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Nsb25lKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdGVkUHJvamVjdENoYW5nZVN0eWxlKHByb2plY3Qpe1xuXG4gICAgaWYgKCFwcm9qZWN0KSByZXR1cm4gY29uc29sZS5sb2coXCJlcnJvclwiKTtcblxuICAgIGxldCB0aXRsZSA9IHByb2plY3QudGl0bGU7XG4gICAgbGV0IHByb2plY3RFbGVtZW50cyA9ICBwcm9qZWN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1kaXZcIik7XG4gICAgcHJvamVjdEVsZW1lbnRzLmZvckVhY2gocHJvamVjdEVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgdGl0bGVFbGVtZW50ID0gcHJvamVjdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpO1xuICAgICAgICBsZXQgcHJvamVjdEVsZW1lbnRUaXRsZSA9IG51bGw7XG4gICAgICAgIGlmKHRpdGxlRWxlbWVudCAhPT0gbnVsbCkgcHJvamVjdEVsZW1lbnRUaXRsZSA9IHRpdGxlRWxlbWVudC5pbm5lclRleHQ7XG5cbiAgICAgICAgaWYocHJvamVjdEVsZW1lbnRUaXRsZSA9PT0gdGl0bGUpe1xuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gU2VsZWN0ZWRUb2RvRXh0ZW5kKHRvZG8pe1xuICAgIGxldCB0aXRsZSA9IHRvZG8udGl0bGU7XG5cbiAgICBpZih0b2RvID09PSBmYWxzZSkgdGl0bGUgPSBcIlwiOyBcblxuICAgIGxldCB0b2RvRWxlbWVudHMgPSAgdG9kb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG8tZGl2XCIpO1xuICAgIHRvZG9FbGVtZW50cy5mb3JFYWNoKHRvZG9FbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IHRpdGxlRWxlbWVudCA9IHRvZG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10aXRsZVwiKTtcbiAgICAgICAgbGV0IHRvZG9FbGVtZW50VGl0bGUgPSBudWxsO1xuICAgICAgICBpZih0aXRsZUVsZW1lbnQgIT09IG51bGwpIHRvZG9FbGVtZW50VGl0bGUgPSB0aXRsZUVsZW1lbnQuaW5uZXJUZXh0O1xuXG4gICAgICAgIGlmKHRvZG9FbGVtZW50VGl0bGUgPT09IHRpdGxlKXtcbiAgICAgICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJleHRlbmRlZFwiKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImV4dGVuZGVkXCIpO1xuICAgICAgICAgICAgbGV0IHRvZG9UaXRsZSA9IHRvZG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10aXRsZVwiKS5pbm5lclRleHRcbiAgICAgICAgICAgIHRvZG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kZXNjcmlwdGlvblwiKS5pbm5lclRleHQgPSBzaG9ydGVyU3RyaW5nKGN1cnJlbnRQcm9qZWN0LnRvZG9XaXRoVGl0bGUodG9kb1RpdGxlKS5kZXNjcmlwdGlvbiwgNDApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQb3B1cChwb3B1cEVsZW1lbnQsIGJhY2tkcm9wKXtcbiAgICBwb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlUG9wdXAocG9wdXBFbGVtZW50LCBiYWNrZHJvcCl7XG4gICAgcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xufVxuXG5cblxuXG4gXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUVycm9yKHBvcHVwLCBlcnJvckNsYXNzLCBlcnJvclRleHQpe1xuICAgIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoZXJyb3JDbGFzcykuaW5uZXJUZXh0PWVycm9yVGV4dDtcbn1cblxuZnVuY3Rpb24gc2hvcnRlclN0cmluZyhzdHJpbmcsIGxlbmd0aCl7XG4gICAgaWYgKHN0cmluZy5sZW5ndGggPCBsZW5ndGggKyAxKSByZXR1cm4gc3RyaW5nOyBcbiAgICBsZXQgc2hvcnRlciA9IHN0cmluZy5zbGljZSgwLCBsZW5ndGgpO1xuICAgIHJldHVybiBzaG9ydGVyICsgXCIuLi5cIjtcbn1cbiIsImltcG9ydCB7IGRpc3BsYXlQb3B1cCwgaGlkZVBvcHVwLCBkaXNwbGF5RXJyb3IsIGRpc3BsYXlUb2RvcywgU2VsZWN0ZWRQcm9qZWN0Q2hhbmdlU3R5bGUgfSBmcm9tIFwiLi9kaXNwbGF5RnVuY3Rpb25zXCI7XG5pbXBvcnQgeyB0b2RvSXRlbUZhY3RvcnksIHByb2plY3RGYWN0b3J5LCB1c2VyRmFjdG9yeSB9IGZyb20gJy4vdG9kb09iamVjdHMnO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RzIH0gZnJvbSAnLi9kaXNwbGF5RnVuY3Rpb25zJztcblxuXG5leHBvcnQgbGV0IGJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrZHJvcFwiKTtcblxubGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xubGV0IHByb2plY3RUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10ZW1wbGF0ZVwiKTtcblxuXG5sZXQgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb250YWluZXJcIik7XG5sZXQgdG9kb1RlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXRlbXBsYXRlXCIpO1xuXG5cbmxldCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcbmxldCBhZGRQcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtcG9wdXBcIik7XG5cbmxldCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kb1wiKTtcbmxldCBhZGRUb2RvUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tcG9wdXBcIik7XG5cbmxldCBlZGl0UHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXByb2plY3QtcG9wdXBcIik7XG5sZXQgZWRpdFRvZG9Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10b2RvLXBvcHVwXCIpO1xuXG5cblxuZXhwb3J0IGxldCBDdXJyZW50VXNlcjtcbmV4cG9ydCBsZXQgY3VycmVudFByb2plY3Q7XG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFVzZXIodXNlcil7XG4gICAgQ3VycmVudFVzZXIgPSB1c2VyO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KXtcbiAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gICAgZGlzcGxheVByb2plY3RzKEN1cnJlbnRVc2VyLHByb2plY3RDb250YWluZXIscHJvamVjdFRlbXBsYXRlKTtcbiAgICBkaXNwbGF5VG9kb3MoY3VycmVudFByb2plY3QsdG9kb0NvbnRhaW5lcix0b2RvVGVtcGxhdGUpO1xuICAgIFNlbGVjdGVkUHJvamVjdENoYW5nZVN0eWxlKGN1cnJlbnRQcm9qZWN0KTtcbn07XG5cblxuXG5sZXQgcmV0cmlldmVkVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdVU0VSJyk7XG5sZXQgdXNlckpzb24gPSBKU09OLnBhcnNlKHJldHJpZXZlZFVzZXIpO1xubGV0IHVzZXJcblxuaWYodXNlckpzb24gPT09IG51bGwpe1xuICAgIHVzZXIgPSB1c2VyRmFjdG9yeShcIkd1ZXN0XCIpO1xuICAgIHVzZXIuY3JlYXRlVG9kbyhcIkdldCBBIEpvYlwiLCBcIkxlYXJuIEEgU2tpbGxcIiwgXCJXZWItRGV2ZWxvcG1lbnRcIiwgXCIyMDI0LTAxLTAxXCIsIDApO1xuICAgIHVzZXIuY3JlYXRlVG9kbyhcIkdldCBBIEpvYlwiLCBcIkFwcGx5IEZvciBKb2JzXCIsIFwiXCIsIFwiMjAyNC0wNC0wMVwiLCAxKTtcbiAgICB1c2VyLmNyZWF0ZVRvZG8oXCJHZXQgQSBXaWZlXCIsIFwiRmluZCBBIFdvbWFuXCIsIFwiVXN1YWxseSBJbiBUaGUgU3RyZWV0c1wiLCBcIjIwMjMtMDctMDVcIiwgMCk7XG4gICAgdXNlci5jcmVhdGVUb2RvKFwiR2V0IEEgV2lmZVwiLCBcIlRhbGsgVG8gQSBXb21hblwiLCBcIlVzZSBXb3Jkc1wiLCBcIjIwMjQtMTItMTFcIiwgMSk7XG4gICAgdXNlci5jcmVhdGVUb2RvKFwiR2V0IEEgV2lmZVwiLCBcIkZpbmlzaCBUaGlzIExpc3RcIiwgXCJcIiwgXCJcIiwgMik7XG59ZWxzZSB7XG4gICAgXG4gICAgdXNlciA9IHVzZXJGYWN0b3J5KHVzZXJKc29uLnVzZXJuYW1lKTtcbiAgICBsZXQgcHJvamVjdEFyciA9IHVzZXJKc29uLnByb2plY3RBcnI7XG4gICAgcHJvamVjdEFyci5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHByb2plY3QudGl0bGUpO1xuICAgICAgICB1c2VyLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgIGxldCB0b2RvQXJyID0gcHJvamVjdC50b2RvQXJyO1xuICAgICAgICB0b2RvQXJyLmZvckVhY2godG9kbyA9PntcbiAgICAgICAgICAgIG5ld1Byb2plY3QuY3JlYXRlVG9kbyh0b2RvLnRpdGxlLCB0b2RvLmRlc2NyaXB0aW9uLCB0b2RvLmR1ZURhdGUsIHRvZG8ucHJpb3JpdHksIHRvZG8uY29tcGxldGVkKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cblxuXG5cbnNldEN1cnJlbnRVc2VyKHVzZXIpO1xuc2V0Q3VycmVudFByb2plY3QoQ3VycmVudFVzZXIucHJvamVjdEFyclswXSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwKCl7XG4gICAgc2V0dXBBZGRCdXR0b25zKCk7XG4gICAgc2V0dXBQb3B1cEJ1dHRvbnMoKTtcblxuXG59XG5cblxuXG5mdW5jdGlvbiBzZXR1cEFkZEJ1dHRvbnMoKXtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcbiAgICAgICAgICAgIGRpc3BsYXlQb3B1cChhZGRQcm9qZWN0UG9wdXAsIGJhY2tkcm9wKTtcbiAgICB9KTtcblxuICAgIGFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xuICAgICAgICAgICAgZGlzcGxheVBvcHVwKGFkZFRvZG9Qb3B1cCwgYmFja2Ryb3ApO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXR1cFBvcHVwQnV0dG9ucygpe1xuICAgIGxldCBhZGRUb2RvQ29uZmlybUJ1dHRvbiA9IGFkZFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1cIik7XG4gICAgbGV0IGFkZFRvZG9DYW5jZWxCdXR0b24gPSBhZGRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG5cbiAgICBhZGRUb2RvQ2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGhpZGVQb3B1cChhZGRUb2RvUG9wdXAsIGJhY2tkcm9wKTtcbiAgICB9KTtcblxuICAgIGFkZFRvZG9Db25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGxldCB0aXRsZSA9IGFkZFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC10aXRsZVwiKS52YWx1ZTtcblxuICAgICAgICBpZihjdXJyZW50UHJvamVjdC5nZXRUb2RvSWRCeVRpdGxlKHRpdGxlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvcihhZGRUb2RvUG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiVGhpcyBUaXRsZSBBbHJlYWR5IEV4aXN0cyFcIik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZih0aXRsZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yKGFkZFRvZG9Qb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJJdCBNdXN0IEhhdmUgQSBUaXRsZSFcIik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBkaXNwbGF5RXJyb3IoYWRkVG9kb1BvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIlwiKTtcblxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBhZGRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICAgIGxldCBkdWVEYXRlID0gYWRkVG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LWR1ZURhdGVcIikudmFsdWU7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGFkZFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC1wcmlvcml0eVwiKS52YWx1ZTtcbiAgICBcbiAgICAgICAgY3VycmVudFByb2plY3QuY3JlYXRlVG9kbyh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LCBmYWxzZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVU0VSJywgSlNPTi5zdHJpbmdpZnkoQ3VycmVudFVzZXIpKTtcbiAgICAgICAgaGlkZVBvcHVwKGFkZFRvZG9Qb3B1cCwgYmFja2Ryb3ApO1xuICAgICAgICBkaXNwbGF5VG9kb3MoY3VycmVudFByb2plY3QsIHRvZG9Db250YWluZXIsIHRvZG9UZW1wbGF0ZSk7XG4gICAgfSk7XG5cblxuICAgIGxldCBhZGRQcm9qZWN0Q29uZmlybUJ1dHRvbiA9IGFkZFByb2plY3RQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1cIik7XG4gICAgbGV0IGFkZFByb2plY3RDYW5jZWxCdXR0b24gPSBhZGRQcm9qZWN0UG9wdXAucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG5cbiAgICBhZGRQcm9qZWN0Q2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGhpZGVQb3B1cChhZGRQcm9qZWN0UG9wdXAsIGJhY2tkcm9wKTtcbiAgICB9KTtcblxuICAgIGFkZFByb2plY3RDb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGxldCB0aXRsZSA9IGFkZFByb2plY3RQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC10aXRsZVwiKS52YWx1ZTtcblxuICAgICAgICBpZihDdXJyZW50VXNlci5wcm9qZWN0SWRXaXRoVGl0bGUodGl0bGUpICE9PSAtMSkge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yKGFkZFByb2plY3RQb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJUaGlzIFRpdGxlIEFscmVhZHkgRXhpc3RzIVwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmKHRpdGxlID09PSBcIlwiKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoYWRkUHJvamVjdFBvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIkl0IE11c3QgSGF2ZSBBIFRpdGxlIVwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXlFcnJvcihhZGRQcm9qZWN0UG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiXCIpO1xuXG4gICAgICAgIEN1cnJlbnRVc2VyLmNyZWF0ZVByb2plY3QodGl0bGUpO1xuICAgICAgICBzZXRDdXJyZW50UHJvamVjdChDdXJyZW50VXNlci5wcm9qZWN0V2l0aFRpdGxlKHRpdGxlKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVU0VSJywgSlNPTi5zdHJpbmdpZnkoQ3VycmVudFVzZXIpKTtcbiAgICAgICAgaGlkZVBvcHVwKGFkZFByb2plY3RQb3B1cCwgYmFja2Ryb3ApO1xuICAgICAgICBkaXNwbGF5UHJvamVjdHModXNlcixwcm9qZWN0Q29udGFpbmVyLHByb2plY3RUZW1wbGF0ZSk7XG4gICAgfSk7XG5cbiAgICBsZXQgZWRpdFByb2plY3RDb25maXJtQnV0dG9uID0gZWRpdFByb2plY3RQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1cIik7XG4gICAgbGV0IGVkaXRQcm9qZWN0Q2FuY2VsQnV0dG9uID0gZWRpdFByb2plY3RQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcblxuICAgIGVkaXRQcm9qZWN0Q2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGhpZGVQb3B1cChlZGl0UHJvamVjdFBvcHVwLCBiYWNrZHJvcCk7XG4gICAgfSk7XG5cbiAgICBlZGl0UHJvamVjdENvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgbGV0IHRpdGxlID0gZWRpdFByb2plY3RQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC10aXRsZVwiKS52YWx1ZTtcblxuICAgICAgICBpZihDdXJyZW50VXNlci5wcm9qZWN0SWRXaXRoVGl0bGUodGl0bGUpICE9PSAtMSkge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yKGVkaXRQcm9qZWN0UG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiVGhpcyBUaXRsZSBBbHJlYWR5IEV4aXN0cyFcIik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZih0aXRsZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yKGVkaXRQcm9qZWN0UG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiSXQgTXVzdCBIYXZlIEEgVGl0bGUhXCIpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheUVycm9yKGVkaXRQcm9qZWN0UG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiXCIpO1xuXG4gICAgICAgIFxuICAgICAgICBDdXJyZW50VXNlci5wcm9qZWN0V2l0aFRpdGxlKGVkaXRQcm9qZWN0UG9wdXAuZGF0YXNldC50aXRsZSkudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VTRVInLCBKU09OLnN0cmluZ2lmeShDdXJyZW50VXNlcikpO1xuICAgICAgICBoaWRlUG9wdXAoZWRpdFByb2plY3RQb3B1cCwgYmFja2Ryb3ApO1xuICAgICAgICBkaXNwbGF5UHJvamVjdHModXNlcixwcm9qZWN0Q29udGFpbmVyLHByb2plY3RUZW1wbGF0ZSk7XG4gICAgfSk7XG5cblxuICAgIGxldCBlZGl0VG9kb0NvbmZpcm1CdXR0b24gPSBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybVwiKTtcbiAgICBsZXQgZWRpdFRvZG9DYW5jZWxCdXR0b24gPSBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xuXG4gICAgZWRpdFRvZG9DYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgaGlkZVBvcHVwKGVkaXRUb2RvUG9wdXAsIGJhY2tkcm9wKTtcbiAgICB9KTtcblxuICAgIGVkaXRUb2RvQ29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICBsZXQgdGl0bGUgPSBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXRpdGxlXCIpLnZhbHVlO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC1wcmlvcml0eVwiKS52YWx1ZTtcblxuXG4gICAgICAgIGlmKGN1cnJlbnRQcm9qZWN0LmdldFRvZG9JZEJ5VGl0bGUodGl0bGUpICE9PSAtMSkge1xuICAgICAgICAgICAgaWYodGl0bGUgIT09IGVkaXRUb2RvUG9wdXAuZGF0YXNldC50aXRsZSl7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoZWRpdFRvZG9Qb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJUaGlzIFRpdGxlIEFscmVhZHkgRXhpc3RzIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZih0aXRsZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yKGVkaXRUb2RvUG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiSXQgTXVzdCBIYXZlIEEgVGl0bGUhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXlFcnJvcihlZGl0VG9kb1BvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIlwiKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhlZGl0VG9kb1BvcHVwLmRhdGFzZXQudGl0bGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC50b2RvV2l0aFRpdGxlKGVkaXRUb2RvUG9wdXAuZGF0YXNldC50aXRsZSkpO1xuXG4gICAgICAgIGxldCBlZGl0ZWRUb2RvID0gY3VycmVudFByb2plY3QudG9kb1dpdGhUaXRsZShlZGl0VG9kb1BvcHVwLmRhdGFzZXQudGl0bGUpO1xuXG4gICAgICAgIGVkaXRlZFRvZG8udGl0bGUgPSB0aXRsZTtcbiAgICAgICAgZWRpdGVkVG9kby5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBlZGl0ZWRUb2RvLmR1ZURhdGUgPSBkdWVEYXRlO1xuXG5cbiAgICAgICAgZWRpdGVkVG9kby5wcmlvcml0eSA9IHByaW9yaXR5O1xuXG4gICAgICAgIGhpZGVQb3B1cChlZGl0VG9kb1BvcHVwLCBiYWNrZHJvcCk7XG5cbiAgICAgICAgY3VycmVudFByb2plY3Quc29ydFRvZG9zKCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVU0VSJywgSlNPTi5zdHJpbmdpZnkoQ3VycmVudFVzZXIpKTtcbiAgICAgICAgZGlzcGxheVRvZG9zKGN1cnJlbnRQcm9qZWN0LHRvZG9Db250YWluZXIsdG9kb1RlbXBsYXRlKTtcbiAgICB9KTtcbiAgICBcblxuXG59XG5cblxuXG4iLCJcbmV4cG9ydCBjb25zdCB0b2RvSXRlbUZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKSA9PntcbiAgICByZXR1cm57XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIGNvbXBsZXRlZFxuICAgIH07XG59O1xuXG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0RmFjdG9yeSA9ICh0aXRsZSkgPT57XG4gICAgbGV0IHRvZG9BcnIgPSBbXTtcblxuICAgIGNvbnN0IGFkZFRvZG8gPSAodG9kb0l0ZW0pID0+e1xuICAgICAgICB0b2RvQXJyLnB1c2godG9kb0l0ZW0pO1xuICAgICAgICBzb3J0VG9kb3MoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc29ydFRvZG9zID0gKCk9PntcbiAgICAgICAgdG9kb0Fyci5zb3J0KHNvcnRGbik7XG4gICAgICAgIFxuICAgIH07XG5cbiAgICBjb25zdCBzb3J0Rm4gPSAoYSxiKSA9PntcbiAgICAgICAgaWYoYS5wcmlvcml0eSA8IGIucHJpb3JpdHkpIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCkgPT57XG4gICAgICAgIGlmKGNvbXBsZXRlZCA9PT0gbnVsbCB8fCBjb21wbGV0ZWQgPT09IHVuZGVmaW5lZCkgY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIGxldCBuZXdUb2RvSXRlbSA9IHRvZG9JdGVtRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpO1xuICAgICAgICBhZGRUb2RvKG5ld1RvZG9JdGVtKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlVG9kbyA9ICh0b2RvSXRlbSkgPT57XG4gICAgICAgIGxldCBpZCA9IGdldFRvZG9JZCh0b2RvSXRlbSk7XG4gICAgICAgIGlmKGlkID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgdG9kb0Fyci5zcGxpY2UoaWQsIDEpO1xuICAgIH07ICAgXG5cbiAgICBjb25zdCByZW1vdmVUb2RvQnlUaXRsZSA9ICh0aXRsZSkgPT57XG4gICAgICAgIGxldCB0b2RvID0gdG9kb0Fyci5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC50aXRsZSA9PT0gdGl0bGUpO1xuICAgICAgICBpZih0b2RvID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgcmVtb3ZlVG9kbyh0b2RvKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VG9kb0lkID0gKHRvZG9JdGVtKSA9PntcbiAgICAgICAgcmV0dXJuIHRvZG9BcnIuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC50aXRsZSA9PT0gdG9kb0l0ZW0udGl0bGUpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRUb2RvSWRCeVRpdGxlID0gKHRpdGxlKSA9PntcbiAgICAgICAgcmV0dXJuIHRvZG9BcnIuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC50aXRsZSA9PT0gdGl0bGUpO1xuICAgIH07XG5cbiAgICBjb25zdCB0b2RvV2l0aFRpdGxlID0gKHRpdGxlKSA9PntcbiAgICAgICAgcmV0dXJuIHRvZG9BcnIuZmluZChlbGVtZW50ID0+IGVsZW1lbnQudGl0bGUgPT09IHRpdGxlKTtcbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIHRpdGxlLFxuICAgICAgICB0b2RvQXJyLFxuICAgICAgICBhZGRUb2RvLFxuICAgICAgICByZW1vdmVUb2RvLFxuICAgICAgICBjcmVhdGVUb2RvLFxuICAgICAgICBnZXRUb2RvSWRCeVRpdGxlLFxuICAgICAgICByZW1vdmVUb2RvQnlUaXRsZSxcbiAgICAgICAgdG9kb1dpdGhUaXRsZSxcbiAgICAgICAgc29ydFRvZG9zLFxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlckZhY3RvcnkgPSAodXNlcm5hbWUpID0+e1xuICAgIGxldCBwcm9qZWN0QXJyID1bXTtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdEl0ZW0pID0+e1xuICAgICAgICBwcm9qZWN0QXJyLnB1c2gocHJvamVjdEl0ZW0pO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9ICh0aXRsZSkgPT57XG4gICAgICAgIGFkZFByb2plY3QocHJvamVjdEZhY3RvcnkodGl0bGUpKTsgICAgICAgIFxuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0V2l0aFRpdGxlID0gKHByb2plY3ROYW1lKSA9PntcbiAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0QXJyLmZpbmQoZWxlbWVudCA9PmVsZW1lbnQudGl0bGUgPT09IHByb2plY3ROYW1lKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfTtcblxuICAgIGNvbnN0IHByb2plY3RJZFdpdGhUaXRsZSA9IChwcm9qZWN0TmFtZSkgPT57XG4gICAgICAgIGxldCBpZCA9IHByb2plY3RBcnIuZmluZEluZGV4KGVsZW1lbnQgPT5lbGVtZW50LnRpdGxlID09PSBwcm9qZWN0TmFtZSk7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9O1xuXG5cbiAgICBjb25zdCBjcmVhdGVUb2RvID0gKHByb2plY3RUaXRsZSwgdG9kb1RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCkgPT57XG4gICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdFdpdGhUaXRsZShwcm9qZWN0VGl0bGUpO1xuICAgICAgICBpZihwcm9qZWN0ID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgcHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHByb2plY3RUaXRsZSk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3QuY3JlYXRlVG9kbyh0b2RvVGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkVG9kbyA9IChwcm9qZWN0VGl0bGUsIHRvZG9JdGVtKSA9PntcbiAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0V2l0aFRpdGxlKHByb2plY3RUaXRsZSk7XG4gICAgICAgIGlmKHByb2plY3QgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBwcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkocHJvamVjdFRpdGxlKTtcbiAgICAgICAgICAgIGFkZFByb2plY3QocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdC5hZGRUb2RvKHRvZG9JdGVtKTtcbiAgICB9O1xuXG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3RJdGVtKSA9PntcbiAgICAgICAgbGV0IGlkID0gZ2V0VG9kb0lkKHByb2plY3RJdGVtKTtcbiAgICAgICAgaWYoaWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgICBwcm9qZWN0QXJyLnNwbGljZShpZCwgMSk7XG4gICAgfTsgICBcblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3RCeVRpdGxlID0gKHRpdGxlKSA9PntcbiAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0QXJyLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlID09PSB0aXRsZSk7XG4gICAgICAgIGlmKHByb2plY3QgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgICByZW1vdmVQcm9qZWN0KHByb2plY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFRvZG9JZCA9IChwcm9qZWN0SXRlbSkgPT57XG4gICAgICAgIHJldHVybiBwcm9qZWN0QXJyLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQudGl0bGUgPT09IHByb2plY3RJdGVtLnRpdGxlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJue1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcHJvamVjdEFycixcbiAgICAgICAgYWRkUHJvamVjdCxcbiAgICAgICAgY3JlYXRlUHJvamVjdCxcbiAgICAgICAgcmVtb3ZlUHJvamVjdCxcbiAgICAgICAgY3JlYXRlVG9kbyxcbiAgICAgICAgYWRkVG9kbyxcbiAgICAgICAgcHJvamVjdFdpdGhUaXRsZSxcbiAgICAgICAgcHJvamVjdElkV2l0aFRpdGxlLFxuICAgICAgICByZW1vdmVQcm9qZWN0QnlUaXRsZVxuICAgIH07XG59XG5cblxuIl0sIm5hbWVzIjpbImN1cnJlbnRQcm9qZWN0IiwiQ3VycmVudFVzZXIiLCJzZXRDdXJyZW50UHJvamVjdCIsInNldEN1cnJlbnRVc2VyIiwiYmFja2Ryb3AiLCJwcm9qZWN0Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidG9kb0NvbnRhaW5lciIsImVkaXRQcm9qZWN0UG9wdXAiLCJlZGl0VG9kb1BvcHVwIiwiY29uZmlybURlbGV0ZVBvcHVwIiwiZGlzcGxheVByb2plY3RzIiwidXNlciIsIlByb2plY3RDb250YWluZXIiLCJwcm9qZWN0VGVtcGxhdGUiLCJwcm9qZWN0QXJyIiwiaW5uZXJIVE1MIiwiZm9yRWFjaCIsInByb2plY3QiLCJwcm9qZWN0Q2xvbmUiLCJjbG9uZU5vZGUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJpbm5lclRleHQiLCJ0aXRsZSIsImRlbGV0ZUJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29uc29sZSIsImxvZyIsImRpc3BsYXlQb3B1cCIsImNhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b24iLCJoaWRlUG9wdXAiLCJyZW1vdmVQcm9qZWN0QnlUaXRsZSIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiU2VsZWN0ZWRQcm9qZWN0Q2hhbmdlU3R5bGUiLCJzdG9wUHJvcGFnYXRpb24iLCJlZGl0QnV0dG9uIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsImRhdGFzZXQiLCJhcHBlbmRDaGlsZCIsImRpc3BsYXlUb2RvcyIsInRvZG9UZW1wbGF0ZSIsInVuZGVmaW5lZCIsInByaW9yaXR5Q29sb3JzIiwidG9kb0FyciIsInRvZG8iLCJ0b2RvQ2xvbmUiLCJ0b2RvQ2hlY2tib3giLCJzaG9ydGVyU3RyaW5nIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwiY2hlY2tlZCIsImNvbXBsZXRlZCIsImFkZCIsInByaW9yaXR5Iiwib2xkQ2FuY2VsQnV0dG9uIiwib2xkQ29uZmlybUJ1dHRvbiIsInBhcmVudE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJyZW1vdmVUb2RvQnlUaXRsZSIsImNvbnRhaW5zIiwiU2VsZWN0ZWRUb2RvRXh0ZW5kIiwicHJvamVjdEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInByb2plY3RFbGVtZW50IiwidGl0bGVFbGVtZW50IiwicHJvamVjdEVsZW1lbnRUaXRsZSIsInRvZG9FbGVtZW50cyIsInRvZG9FbGVtZW50IiwidG9kb0VsZW1lbnRUaXRsZSIsInRvZG9UaXRsZSIsInRvZG9XaXRoVGl0bGUiLCJwb3B1cEVsZW1lbnQiLCJkaXNwbGF5RXJyb3IiLCJwb3B1cCIsImVycm9yQ2xhc3MiLCJlcnJvclRleHQiLCJzdHJpbmciLCJzaG9ydGVyIiwic2xpY2UiLCJ0b2RvSXRlbUZhY3RvcnkiLCJwcm9qZWN0RmFjdG9yeSIsInVzZXJGYWN0b3J5IiwiYWRkUHJvamVjdEJ1dHRvbiIsImFkZFByb2plY3RQb3B1cCIsImFkZFRvZG9CdXR0b24iLCJhZGRUb2RvUG9wdXAiLCJyZXRyaWV2ZWRVc2VyIiwiZ2V0SXRlbSIsInVzZXJKc29uIiwicGFyc2UiLCJjcmVhdGVUb2RvIiwidXNlcm5hbWUiLCJuZXdQcm9qZWN0IiwiYWRkUHJvamVjdCIsInNldHVwIiwic2V0dXBBZGRCdXR0b25zIiwic2V0dXBQb3B1cEJ1dHRvbnMiLCJhZGRUb2RvQ29uZmlybUJ1dHRvbiIsImFkZFRvZG9DYW5jZWxCdXR0b24iLCJnZXRUb2RvSWRCeVRpdGxlIiwiYWRkUHJvamVjdENvbmZpcm1CdXR0b24iLCJhZGRQcm9qZWN0Q2FuY2VsQnV0dG9uIiwicHJvamVjdElkV2l0aFRpdGxlIiwiY3JlYXRlUHJvamVjdCIsInByb2plY3RXaXRoVGl0bGUiLCJlZGl0UHJvamVjdENvbmZpcm1CdXR0b24iLCJlZGl0UHJvamVjdENhbmNlbEJ1dHRvbiIsImVkaXRUb2RvQ29uZmlybUJ1dHRvbiIsImVkaXRUb2RvQ2FuY2VsQnV0dG9uIiwiZWRpdGVkVG9kbyIsInNvcnRUb2RvcyIsImFkZFRvZG8iLCJ0b2RvSXRlbSIsInB1c2giLCJzb3J0Iiwic29ydEZuIiwiYSIsImIiLCJuZXdUb2RvSXRlbSIsInJlbW92ZVRvZG8iLCJpZCIsImdldFRvZG9JZCIsInNwbGljZSIsImZpbmQiLCJlbGVtZW50IiwiZmluZEluZGV4IiwicHJvamVjdEl0ZW0iLCJwcm9qZWN0TmFtZSIsInByb2plY3RUaXRsZSIsInJlbW92ZVByb2plY3QiXSwic291cmNlUm9vdCI6IiJ9