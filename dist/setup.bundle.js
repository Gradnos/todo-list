"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["setup"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/setup.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssQ0FBQztJQUNqRSxJQUFHTixPQUFPLEtBQUsrQixTQUFTLEVBQUU7SUFDMUJ3RixhQUFhLENBQUN2SCxPQUFPLENBQUM7RUFDMUIsQ0FBQztFQUVELE1BQU0rRyxTQUFTLEdBQUlLLFdBQVcsSUFBSTtJQUM5QixPQUFPdkgsVUFBVSxDQUFDc0gsU0FBUyxDQUFDRCxPQUFPLElBQUlBLE9BQU8sQ0FBQzVHLEtBQUssS0FBSzhHLFdBQVcsQ0FBQzlHLEtBQUssQ0FBQztFQUMvRSxDQUFDO0VBRUQsT0FBTTtJQUNGMkUsUUFBUTtJQUNScEYsVUFBVTtJQUNWc0YsVUFBVTtJQUNWVSxhQUFhO0lBQ2IwQixhQUFhO0lBQ2J2QyxVQUFVO0lBQ1ZxQixPQUFPO0lBQ1BQLGdCQUFnQjtJQUNoQkYsa0JBQWtCO0lBQ2xCNUU7RUFDSixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5RnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zZXR1cC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb09iamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VycmVudFByb2plY3QsIEN1cnJlbnRVc2VyLCBzZXRDdXJyZW50UHJvamVjdCwgc2V0Q3VycmVudFVzZXIsIGJhY2tkcm9wIH0gZnJvbSBcIi4vc2V0dXBcIjtcblxubGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xuXG5sZXQgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb250YWluZXJcIik7XG5cbmxldCBlZGl0UHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXByb2plY3QtcG9wdXBcIik7XG5sZXQgZWRpdFRvZG9Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10b2RvLXBvcHVwXCIpO1xuXG5sZXQgY29uZmlybURlbGV0ZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25maXJtLWRlbGV0ZS1wb3B1cFwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cyh1c2VyLCBQcm9qZWN0Q29udGFpbmVyLCBwcm9qZWN0VGVtcGxhdGUpe1xuICAgIGxldCBwcm9qZWN0QXJyID0gdXNlci5wcm9qZWN0QXJyO1xuICAgIFByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBwcm9qZWN0QXJyLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0Q2xvbmUgPSBwcm9qZWN0VGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBwcm9qZWN0Q2xvbmUuY2xhc3NMaXN0LnJlbW92ZShcIm5vZGlzcGxheVwiLCBcInByb2plY3QtdGVtcGxhdGVcIilcbiAgICAgICAgcHJvamVjdENsb25lLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKS5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBwcm9qZWN0Q2xvbmUucXVlcnlTZWxlY3RvcihcIi5kZWxldGVcIik7XG5cbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvamVjdFwiKTtcblxuXG4gICAgICAgICAgICBjb25maXJtRGVsZXRlUG9wdXAucXVlcnlTZWxlY3RvcihcImgzXCIpLmlubmVyVGV4dCA9IGBEZWxldGUgPj4ke3Byb2plY3QudGl0bGV9PDwgP2A7XG4gICAgICAgICAgICBkaXNwbGF5UG9wdXAoY29uZmlybURlbGV0ZVBvcHVwLGJhY2tkcm9wKTtcbiAgICAgICAgICAgIGxldCBjYW5jZWxCdXR0b24gPSBjb25maXJtRGVsZXRlUG9wdXAucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG4gICAgICAgICAgICBsZXQgY29uZmlybUJ1dHRvbiA9IGNvbmZpcm1EZWxldGVQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1cIik7XG4gICAgICAgIFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICAgICAgIGhpZGVQb3B1cChjb25maXJtRGVsZXRlUG9wdXAsYmFja2Ryb3ApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgICAgICBoaWRlUG9wdXAoY29uZmlybURlbGV0ZVBvcHVwLGJhY2tkcm9wKTtcblxuICAgICAgICAgICAgICAgIEN1cnJlbnRVc2VyLnJlbW92ZVByb2plY3RCeVRpdGxlKHByb2plY3QudGl0bGUpO1xuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRQcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0LnRpdGxlKSBzZXRDdXJyZW50UHJvamVjdCh1c2VyLnByb2plY3RBcnJbdXNlci5wcm9qZWN0QXJyLmxlbmd0aC0xXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoQ3VycmVudFVzZXIpKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVNFUicsIEpTT04uc3RyaW5naWZ5KEN1cnJlbnRVc2VyKSk7XG4gICAgICAgICAgICAgICAgZGlzcGxheVByb2plY3RzKHVzZXIsIFByb2plY3RDb250YWluZXIsIHByb2plY3RUZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgaWYodXNlci5wcm9qZWN0QXJyLmxlbmd0aCA+IDApIFNlbGVjdGVkUHJvamVjdENoYW5nZVN0eWxlKGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZWRpdEJ1dHRvbiA9IHByb2plY3RDbG9uZS5xdWVyeVNlbGVjdG9yKFwiLmVkaXRcIik7XG5cbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgZWRpdFByb2plY3RQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC10aXRsZVwiKS52YWx1ZSA9IHByb2plY3QudGl0bGU7XG4gICAgICAgICAgICBlZGl0UHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXRpdGxlXCIpLnBsYWNlaG9sZGVyID0gcHJvamVjdC50aXRsZTtcblxuXG4gICAgICAgICAgICBkaXNwbGF5UG9wdXAoZWRpdFByb2plY3RQb3B1cCxiYWNrZHJvcCk7XG4gICAgICAgICAgICBlZGl0UHJvamVjdFBvcHVwLmRhdGFzZXQudGl0bGUgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICBwcm9qZWN0Q2xvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICBQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDbG9uZSk7XG4gICAgfSk7XG5cbiAgICBpZih1c2VyLnByb2plY3RBcnIubGVuZ3RoID4gMCkgU2VsZWN0ZWRQcm9qZWN0Q2hhbmdlU3R5bGUoY3VycmVudFByb2plY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvZG9zKHByb2plY3QsIHRvZG9Db250YWluZXIsIHRvZG9UZW1wbGF0ZSl7XG4gICAgXG4gICAgdG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGlmKHByb2plY3QgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgbGV0IHByaW9yaXR5Q29sb3JzID0gW1wiLS1yXCIsIFwiLS1iXCIsIFwiLS1nXCJdO1xuXG5cbiAgICBsZXQgdG9kb0FyciA9IHByb2plY3QudG9kb0FycjtcbiAgICB0b2RvQXJyLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGxldCB0b2RvQ2xvbmUgPSB0b2RvVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBsZXQgdG9kb0NoZWNrYm94ID0gdG9kb0Nsb25lLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb21wbGV0ZWRcIik7XG5cblxuXG5cbiAgICAgICAgdG9kb0Nsb25lLmNsYXNzTGlzdC5yZW1vdmUoXCJub2Rpc3BsYXlcIiwgXCJ0b2RvLXRlbXBsYXRlXCIpXG4gICAgICAgIHRvZG9DbG9uZS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdGl0bGVcIikuaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcbiAgICAgICAgdG9kb0Nsb25lLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kZXNjcmlwdGlvblwiKS5pbm5lclRleHQgPSBzaG9ydGVyU3RyaW5nKHRvZG8uZGVzY3JpcHRpb24sIDQwKTs7XG4gICAgICAgIHRvZG9DbG9uZS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZHVlRGF0ZVwiKS5pbm5lclRleHQgPSB0b2RvLmR1ZURhdGU7XG4gICAgICAgIHRvZG9DaGVja2JveC5jaGVja2VkID0gdG9kby5jb21wbGV0ZWQ7XG5cbiAgICBcbiAgICAgICAgdG9kb0Nsb25lLmNsYXNzTGlzdC5hZGQocHJpb3JpdHlDb2xvcnNbdG9kby5wcmlvcml0eV0pO1xuXG4gICAgICAgIGxldCBkZWxldGVCdXR0b24gPSB0b2RvQ2xvbmUucXVlcnlTZWxlY3RvcihcIi5kZWxldGVcIik7XG5cbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG9kb1wiKTtcblxuICAgICAgICAgICAgY29uZmlybURlbGV0ZVBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKS5pbm5lclRleHQgPSBgRGVsZXRlID4+JHt0b2RvLnRpdGxlfTw8ID9gO1xuICAgICAgICAgICAgZGlzcGxheVBvcHVwKGNvbmZpcm1EZWxldGVQb3B1cCxiYWNrZHJvcCk7XG4gICAgICAgICAgICBsZXQgb2xkQ2FuY2VsQnV0dG9uID0gY29uZmlybURlbGV0ZVBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xuICAgICAgICAgICAgbGV0IG9sZENvbmZpcm1CdXR0b24gPSBjb25maXJtRGVsZXRlUG9wdXAucXVlcnlTZWxlY3RvcihcIi5jb25maXJtXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2FuY2VsQnV0dG9uID0gb2xkQ2FuY2VsQnV0dG9uLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIG9sZENhbmNlbEJ1dHRvbi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjYW5jZWxCdXR0b24sIG9sZENhbmNlbEJ1dHRvbik7XG5cbiAgICAgICAgICAgIGxldCBjb25maXJtQnV0dG9uID0gb2xkQ29uZmlybUJ1dHRvbi5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICBvbGRDb25maXJtQnV0dG9uLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNvbmZpcm1CdXR0b24sIG9sZENvbmZpcm1CdXR0b24pO1xuICAgICAgICBcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgICAgICBoaWRlUG9wdXAoY29uZmlybURlbGV0ZVBvcHVwLGJhY2tkcm9wKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICAgICAgaGlkZVBvcHVwKGNvbmZpcm1EZWxldGVQb3B1cCxiYWNrZHJvcCk7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3QucmVtb3ZlVG9kb0J5VGl0bGUodG9kby50aXRsZSk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VTRVInLCBKU09OLnN0cmluZ2lmeShDdXJyZW50VXNlcikpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlUb2Rvcyhwcm9qZWN0LCB0b2RvQ29udGFpbmVyLCB0b2RvVGVtcGxhdGUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGVkaXRCdXR0b24gPSB0b2RvQ2xvbmUucXVlcnlTZWxlY3RvcihcIi5lZGl0XCIpO1xuXG4gICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgIGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtdGl0bGVcIikudmFsdWUgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC10aXRsZVwiKS5wbGFjZWhvbGRlciA9IHRvZG8udGl0bGU7XG5cbiAgICAgICAgICAgIGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtZGVzY3JpcHRpb25cIikudmFsdWUgPSB0b2RvLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgICAgICBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LWR1ZURhdGVcIikudmFsdWUgPSB0b2RvLmR1ZURhdGU7XG4gICAgICAgICAgICBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXByaW9yaXR5XCIpLnZhbHVlID0gdG9kby5wcmlvcml0eTsgXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGlzcGxheVBvcHVwKGVkaXRUb2RvUG9wdXAsYmFja2Ryb3ApO1xuICAgICAgICAgICAgZWRpdFRvZG9Qb3B1cC5kYXRhc2V0LnRpdGxlID0gdG9kby50aXRsZTtcblxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdG9kb0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZDtcbiAgICAgICAgICAgIGlmKHRvZG8uY29tcGxldGVkKSB0b2RvQ2xvbmUuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgICAgIGVsc2UgdG9kb0Nsb25lLmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZWRcIik7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0b2RvQ2xvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xuICAgICAgICAgICAgaWYodG9kb0Nsb25lLmNsYXNzTGlzdC5jb250YWlucyhcImV4dGVuZGVkXCIpKXtcbiAgICAgICAgICAgICAgICBTZWxlY3RlZFRvZG9FeHRlbmQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRvZG9DbG9uZS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGVzY3JpcHRpb25cIikuaW5uZXJUZXh0ID0gc2hvcnRlclN0cmluZyh0b2RvLmRlc2NyaXB0aW9uLCA0MCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBTZWxlY3RlZFRvZG9FeHRlbmQodG9kbyk7XG4gICAgICAgICAgICAgICAgdG9kb0Nsb25lLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kZXNjcmlwdGlvblwiKS5pbm5lclRleHQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGlmKHRvZG8uY29tcGxldGVkKSB0b2RvQ2xvbmUuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgZWxzZSB0b2RvQ2xvbmUuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlZFwiKTtcblxuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9DbG9uZSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3RlZFByb2plY3RDaGFuZ2VTdHlsZShwcm9qZWN0KXtcblxuICAgIGlmICghcHJvamVjdCkgcmV0dXJuIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG5cbiAgICBsZXQgdGl0bGUgPSBwcm9qZWN0LnRpdGxlO1xuICAgIGxldCBwcm9qZWN0RWxlbWVudHMgPSAgcHJvamVjdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtZGl2XCIpO1xuICAgIHByb2plY3RFbGVtZW50cy5mb3JFYWNoKHByb2plY3RFbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IHRpdGxlRWxlbWVudCA9IHByb2plY3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKTtcbiAgICAgICAgbGV0IHByb2plY3RFbGVtZW50VGl0bGUgPSBudWxsO1xuICAgICAgICBpZih0aXRsZUVsZW1lbnQgIT09IG51bGwpIHByb2plY3RFbGVtZW50VGl0bGUgPSB0aXRsZUVsZW1lbnQuaW5uZXJUZXh0O1xuXG4gICAgICAgIGlmKHByb2plY3RFbGVtZW50VGl0bGUgPT09IHRpdGxlKXtcbiAgICAgICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIFNlbGVjdGVkVG9kb0V4dGVuZCh0b2RvKXtcbiAgICBsZXQgdGl0bGUgPSB0b2RvLnRpdGxlO1xuXG4gICAgaWYodG9kbyA9PT0gZmFsc2UpIHRpdGxlID0gXCJcIjsgXG5cbiAgICBsZXQgdG9kb0VsZW1lbnRzID0gIHRvZG9Db250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi50b2RvLWRpdlwiKTtcbiAgICB0b2RvRWxlbWVudHMuZm9yRWFjaCh0b2RvRWxlbWVudCA9PiB7XG4gICAgICAgIGxldCB0aXRsZUVsZW1lbnQgPSB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdGl0bGVcIik7XG4gICAgICAgIGxldCB0b2RvRWxlbWVudFRpdGxlID0gbnVsbDtcbiAgICAgICAgaWYodGl0bGVFbGVtZW50ICE9PSBudWxsKSB0b2RvRWxlbWVudFRpdGxlID0gdGl0bGVFbGVtZW50LmlubmVyVGV4dDtcblxuICAgICAgICBpZih0b2RvRWxlbWVudFRpdGxlID09PSB0aXRsZSl7XG4gICAgICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZXh0ZW5kZWRcIik7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJleHRlbmRlZFwiKTtcbiAgICAgICAgICAgIGxldCB0b2RvVGl0bGUgPSB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdGl0bGVcIikuaW5uZXJUZXh0XG4gICAgICAgICAgICB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGVzY3JpcHRpb25cIikuaW5uZXJUZXh0ID0gc2hvcnRlclN0cmluZyhjdXJyZW50UHJvamVjdC50b2RvV2l0aFRpdGxlKHRvZG9UaXRsZSkuZGVzY3JpcHRpb24sIDQwKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UG9wdXAocG9wdXBFbGVtZW50LCBiYWNrZHJvcCl7XG4gICAgcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZVBvcHVwKHBvcHVwRWxlbWVudCwgYmFja2Ryb3Ape1xuICAgIHBvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICBiYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbn1cblxuXG5cblxuIFxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlFcnJvcihwb3B1cCwgZXJyb3JDbGFzcywgZXJyb3JUZXh0KXtcbiAgICBwb3B1cC5xdWVyeVNlbGVjdG9yKGVycm9yQ2xhc3MpLmlubmVyVGV4dD1lcnJvclRleHQ7XG59XG5cbmZ1bmN0aW9uIHNob3J0ZXJTdHJpbmcoc3RyaW5nLCBsZW5ndGgpe1xuICAgIGlmIChzdHJpbmcubGVuZ3RoIDwgbGVuZ3RoICsgMSkgcmV0dXJuIHN0cmluZzsgXG4gICAgbGV0IHNob3J0ZXIgPSBzdHJpbmcuc2xpY2UoMCwgbGVuZ3RoKTtcbiAgICByZXR1cm4gc2hvcnRlciArIFwiLi4uXCI7XG59XG4iLCJpbXBvcnQgeyBkaXNwbGF5UG9wdXAsIGhpZGVQb3B1cCwgZGlzcGxheUVycm9yLCBkaXNwbGF5VG9kb3MsIFNlbGVjdGVkUHJvamVjdENoYW5nZVN0eWxlIH0gZnJvbSBcIi4vZGlzcGxheUZ1bmN0aW9uc1wiO1xuaW1wb3J0IHsgdG9kb0l0ZW1GYWN0b3J5LCBwcm9qZWN0RmFjdG9yeSwgdXNlckZhY3RvcnkgfSBmcm9tICcuL3RvZG9PYmplY3RzJztcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0cyB9IGZyb20gJy4vZGlzcGxheUZ1bmN0aW9ucyc7XG5cblxuZXhwb3J0IGxldCBiYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFja2Ryb3BcIik7XG5cbmxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKTtcbmxldCBwcm9qZWN0VGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGVtcGxhdGVcIik7XG5cblxubGV0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tY29udGFpbmVyXCIpO1xubGV0IHRvZG9UZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10ZW1wbGF0ZVwiKTtcblxuXG5sZXQgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIik7XG5sZXQgYWRkUHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXBvcHVwXCIpO1xuXG5sZXQgYWRkVG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG9cIik7XG5sZXQgYWRkVG9kb1BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXBvcHVwXCIpO1xuXG5sZXQgZWRpdFByb2plY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1wcm9qZWN0LXBvcHVwXCIpO1xubGV0IGVkaXRUb2RvUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdG9kby1wb3B1cFwiKTtcblxuXG5cbmV4cG9ydCBsZXQgQ3VycmVudFVzZXI7XG5leHBvcnQgbGV0IGN1cnJlbnRQcm9qZWN0O1xuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRVc2VyKHVzZXIpe1xuICAgIEN1cnJlbnRVc2VyID0gdXNlcjtcbn07XG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFByb2plY3QocHJvamVjdCl7XG4gICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICAgIGRpc3BsYXlQcm9qZWN0cyhDdXJyZW50VXNlcixwcm9qZWN0Q29udGFpbmVyLHByb2plY3RUZW1wbGF0ZSk7XG4gICAgZGlzcGxheVRvZG9zKGN1cnJlbnRQcm9qZWN0LHRvZG9Db250YWluZXIsdG9kb1RlbXBsYXRlKTtcbiAgICBTZWxlY3RlZFByb2plY3RDaGFuZ2VTdHlsZShjdXJyZW50UHJvamVjdCk7XG59O1xuXG5cblxubGV0IHJldHJpZXZlZFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVVNFUicpO1xubGV0IHVzZXJKc29uID0gSlNPTi5wYXJzZShyZXRyaWV2ZWRVc2VyKTtcbmxldCB1c2VyXG5cbmlmKHVzZXJKc29uID09PSBudWxsKXtcbiAgICB1c2VyID0gdXNlckZhY3RvcnkoXCJHdWVzdFwiKTtcbiAgICB1c2VyLmNyZWF0ZVRvZG8oXCJHZXQgQSBKb2JcIiwgXCJMZWFybiBBIFNraWxsXCIsIFwiV2ViLURldmVsb3BtZW50XCIsIFwiMjAyNC0wMS0wMVwiLCAwKTtcbiAgICB1c2VyLmNyZWF0ZVRvZG8oXCJHZXQgQSBKb2JcIiwgXCJBcHBseSBGb3IgSm9ic1wiLCBcIlwiLCBcIjIwMjQtMDQtMDFcIiwgMSk7XG4gICAgdXNlci5jcmVhdGVUb2RvKFwiR2V0IEEgV2lmZVwiLCBcIkZpbmQgQSBXb21hblwiLCBcIlVzdWFsbHkgSW4gVGhlIFN0cmVldHNcIiwgXCIyMDIzLTA3LTA1XCIsIDApO1xuICAgIHVzZXIuY3JlYXRlVG9kbyhcIkdldCBBIFdpZmVcIiwgXCJUYWxrIFRvIEEgV29tYW5cIiwgXCJVc2UgV29yZHNcIiwgXCIyMDI0LTEyLTExXCIsIDEpO1xuICAgIHVzZXIuY3JlYXRlVG9kbyhcIkdldCBBIFdpZmVcIiwgXCJGaW5pc2ggVGhpcyBMaXN0XCIsIFwiXCIsIFwiXCIsIDIpO1xufWVsc2Uge1xuICAgIFxuICAgIHVzZXIgPSB1c2VyRmFjdG9yeSh1c2VySnNvbi51c2VybmFtZSk7XG4gICAgbGV0IHByb2plY3RBcnIgPSB1c2VySnNvbi5wcm9qZWN0QXJyO1xuICAgIHByb2plY3RBcnIuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeShwcm9qZWN0LnRpdGxlKTtcbiAgICAgICAgdXNlci5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgICBsZXQgdG9kb0FyciA9IHByb2plY3QudG9kb0FycjtcbiAgICAgICAgdG9kb0Fyci5mb3JFYWNoKHRvZG8gPT57XG4gICAgICAgICAgICBuZXdQcm9qZWN0LmNyZWF0ZVRvZG8odG9kby50aXRsZSwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5kdWVEYXRlLCB0b2RvLnByaW9yaXR5LCB0b2RvLmNvbXBsZXRlZCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5cblxuXG5zZXRDdXJyZW50VXNlcih1c2VyKTtcbnNldEN1cnJlbnRQcm9qZWN0KEN1cnJlbnRVc2VyLnByb2plY3RBcnJbMF0pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cCgpe1xuICAgIHNldHVwQWRkQnV0dG9ucygpO1xuICAgIHNldHVwUG9wdXBCdXR0b25zKCk7XG5cblxufVxuXG5cblxuZnVuY3Rpb24gc2V0dXBBZGRCdXR0b25zKCl7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XG4gICAgICAgICAgICBkaXNwbGF5UG9wdXAoYWRkUHJvamVjdFBvcHVwLCBiYWNrZHJvcCk7XG4gICAgfSk7XG5cbiAgICBhZGRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcbiAgICAgICAgICAgIGRpc3BsYXlQb3B1cChhZGRUb2RvUG9wdXAsIGJhY2tkcm9wKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0dXBQb3B1cEJ1dHRvbnMoKXtcbiAgICBsZXQgYWRkVG9kb0NvbmZpcm1CdXR0b24gPSBhZGRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5jb25maXJtXCIpO1xuICAgIGxldCBhZGRUb2RvQ2FuY2VsQnV0dG9uID0gYWRkVG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xuXG4gICAgYWRkVG9kb0NhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICBoaWRlUG9wdXAoYWRkVG9kb1BvcHVwLCBiYWNrZHJvcCk7XG4gICAgfSk7XG5cbiAgICBhZGRUb2RvQ29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICBsZXQgdGl0bGUgPSBhZGRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtdGl0bGVcIikudmFsdWU7XG5cbiAgICAgICAgaWYoY3VycmVudFByb2plY3QuZ2V0VG9kb0lkQnlUaXRsZSh0aXRsZSkgIT09IC0xKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoYWRkVG9kb1BvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIlRoaXMgVGl0bGUgQWxyZWFkeSBFeGlzdHMhXCIpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYodGl0bGUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvcihhZGRUb2RvUG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiSXQgTXVzdCBIYXZlIEEgVGl0bGUhXCIpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheUVycm9yKGFkZFRvZG9Qb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJcIik7XG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gYWRkVG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IGFkZFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC1kdWVEYXRlXCIpLnZhbHVlO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBhZGRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtcHJpb3JpdHlcIikudmFsdWU7XG4gICAgXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LmNyZWF0ZVRvZG8odGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSwgZmFsc2UpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVNFUicsIEpTT04uc3RyaW5naWZ5KEN1cnJlbnRVc2VyKSk7XG4gICAgICAgIGhpZGVQb3B1cChhZGRUb2RvUG9wdXAsIGJhY2tkcm9wKTtcbiAgICAgICAgZGlzcGxheVRvZG9zKGN1cnJlbnRQcm9qZWN0LCB0b2RvQ29udGFpbmVyLCB0b2RvVGVtcGxhdGUpO1xuICAgIH0pO1xuXG5cbiAgICBsZXQgYWRkUHJvamVjdENvbmZpcm1CdXR0b24gPSBhZGRQcm9qZWN0UG9wdXAucXVlcnlTZWxlY3RvcihcIi5jb25maXJtXCIpO1xuICAgIGxldCBhZGRQcm9qZWN0Q2FuY2VsQnV0dG9uID0gYWRkUHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xuXG4gICAgYWRkUHJvamVjdENhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICBoaWRlUG9wdXAoYWRkUHJvamVjdFBvcHVwLCBiYWNrZHJvcCk7XG4gICAgfSk7XG5cbiAgICBhZGRQcm9qZWN0Q29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICBsZXQgdGl0bGUgPSBhZGRQcm9qZWN0UG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtdGl0bGVcIikudmFsdWU7XG5cbiAgICAgICAgaWYoQ3VycmVudFVzZXIucHJvamVjdElkV2l0aFRpdGxlKHRpdGxlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvcihhZGRQcm9qZWN0UG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiVGhpcyBUaXRsZSBBbHJlYWR5IEV4aXN0cyFcIik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZih0aXRsZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yKGFkZFByb2plY3RQb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJJdCBNdXN0IEhhdmUgQSBUaXRsZSFcIik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBkaXNwbGF5RXJyb3IoYWRkUHJvamVjdFBvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIlwiKTtcblxuICAgICAgICBDdXJyZW50VXNlci5jcmVhdGVQcm9qZWN0KHRpdGxlKTtcbiAgICAgICAgc2V0Q3VycmVudFByb2plY3QoQ3VycmVudFVzZXIucHJvamVjdFdpdGhUaXRsZSh0aXRsZSkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVNFUicsIEpTT04uc3RyaW5naWZ5KEN1cnJlbnRVc2VyKSk7XG4gICAgICAgIGhpZGVQb3B1cChhZGRQcm9qZWN0UG9wdXAsIGJhY2tkcm9wKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKHVzZXIscHJvamVjdENvbnRhaW5lcixwcm9qZWN0VGVtcGxhdGUpO1xuICAgIH0pO1xuXG4gICAgbGV0IGVkaXRQcm9qZWN0Q29uZmlybUJ1dHRvbiA9IGVkaXRQcm9qZWN0UG9wdXAucXVlcnlTZWxlY3RvcihcIi5jb25maXJtXCIpO1xuICAgIGxldCBlZGl0UHJvamVjdENhbmNlbEJ1dHRvbiA9IGVkaXRQcm9qZWN0UG9wdXAucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG5cbiAgICBlZGl0UHJvamVjdENhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICBoaWRlUG9wdXAoZWRpdFByb2plY3RQb3B1cCwgYmFja2Ryb3ApO1xuICAgIH0pO1xuXG4gICAgZWRpdFByb2plY3RDb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGxldCB0aXRsZSA9IGVkaXRQcm9qZWN0UG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtdGl0bGVcIikudmFsdWU7XG5cbiAgICAgICAgaWYoQ3VycmVudFVzZXIucHJvamVjdElkV2l0aFRpdGxlKHRpdGxlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvcihlZGl0UHJvamVjdFBvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIlRoaXMgVGl0bGUgQWxyZWFkeSBFeGlzdHMhXCIpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYodGl0bGUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvcihlZGl0UHJvamVjdFBvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIkl0IE11c3QgSGF2ZSBBIFRpdGxlIVwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXlFcnJvcihlZGl0UHJvamVjdFBvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIlwiKTtcblxuICAgICAgICBcbiAgICAgICAgQ3VycmVudFVzZXIucHJvamVjdFdpdGhUaXRsZShlZGl0UHJvamVjdFBvcHVwLmRhdGFzZXQudGl0bGUpLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVU0VSJywgSlNPTi5zdHJpbmdpZnkoQ3VycmVudFVzZXIpKTtcbiAgICAgICAgaGlkZVBvcHVwKGVkaXRQcm9qZWN0UG9wdXAsIGJhY2tkcm9wKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKHVzZXIscHJvamVjdENvbnRhaW5lcixwcm9qZWN0VGVtcGxhdGUpO1xuICAgIH0pO1xuXG5cbiAgICBsZXQgZWRpdFRvZG9Db25maXJtQnV0dG9uID0gZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1cIik7XG4gICAgbGV0IGVkaXRUb2RvQ2FuY2VsQnV0dG9uID0gZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcblxuICAgIGVkaXRUb2RvQ2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGhpZGVQb3B1cChlZGl0VG9kb1BvcHVwLCBiYWNrZHJvcCk7XG4gICAgfSk7XG5cbiAgICBlZGl0VG9kb0NvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgbGV0IHRpdGxlID0gZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC10aXRsZVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC1kZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LWR1ZURhdGVcIikudmFsdWU7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtcHJpb3JpdHlcIikudmFsdWU7XG5cblxuICAgICAgICBpZihjdXJyZW50UHJvamVjdC5nZXRUb2RvSWRCeVRpdGxlKHRpdGxlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGlmKHRpdGxlICE9PSBlZGl0VG9kb1BvcHVwLmRhdGFzZXQudGl0bGUpe1xuICAgICAgICAgICAgZGlzcGxheUVycm9yKGVkaXRUb2RvUG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiVGhpcyBUaXRsZSBBbHJlYWR5IEV4aXN0cyFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodGl0bGUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvcihlZGl0VG9kb1BvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIkl0IE11c3QgSGF2ZSBBIFRpdGxlIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkaXNwbGF5RXJyb3IoZWRpdFRvZG9Qb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJcIik7XG5cbiAgICAgICAgY29uc29sZS5sb2coZWRpdFRvZG9Qb3B1cC5kYXRhc2V0LnRpdGxlKTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QudG9kb1dpdGhUaXRsZShlZGl0VG9kb1BvcHVwLmRhdGFzZXQudGl0bGUpKTtcblxuICAgICAgICBsZXQgZWRpdGVkVG9kbyA9IGN1cnJlbnRQcm9qZWN0LnRvZG9XaXRoVGl0bGUoZWRpdFRvZG9Qb3B1cC5kYXRhc2V0LnRpdGxlKTtcblxuICAgICAgICBlZGl0ZWRUb2RvLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIGVkaXRlZFRvZG8uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgZWRpdGVkVG9kby5kdWVEYXRlID0gZHVlRGF0ZTtcblxuXG4gICAgICAgIGVkaXRlZFRvZG8ucHJpb3JpdHkgPSBwcmlvcml0eTtcblxuICAgICAgICBoaWRlUG9wdXAoZWRpdFRvZG9Qb3B1cCwgYmFja2Ryb3ApO1xuXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LnNvcnRUb2RvcygpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVNFUicsIEpTT04uc3RyaW5naWZ5KEN1cnJlbnRVc2VyKSk7XG4gICAgICAgIGRpc3BsYXlUb2RvcyhjdXJyZW50UHJvamVjdCx0b2RvQ29udGFpbmVyLHRvZG9UZW1wbGF0ZSk7XG4gICAgfSk7XG4gICAgXG5cblxufVxuXG5cblxuIiwiXG5leHBvcnQgY29uc3QgdG9kb0l0ZW1GYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCkgPT57XG4gICAgcmV0dXJue1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBjb21wbGV0ZWRcbiAgICB9O1xufTtcblxuXG5leHBvcnQgY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUpID0+e1xuICAgIGxldCB0b2RvQXJyID0gW107XG5cbiAgICBjb25zdCBhZGRUb2RvID0gKHRvZG9JdGVtKSA9PntcbiAgICAgICAgdG9kb0Fyci5wdXNoKHRvZG9JdGVtKTtcbiAgICAgICAgc29ydFRvZG9zKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNvcnRUb2RvcyA9ICgpPT57XG4gICAgICAgIHRvZG9BcnIuc29ydChzb3J0Rm4pO1xuICAgICAgICBcbiAgICB9O1xuXG4gICAgY29uc3Qgc29ydEZuID0gKGEsYikgPT57XG4gICAgICAgIGlmKGEucHJpb3JpdHkgPCBiLnByaW9yaXR5KSByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpID0+e1xuICAgICAgICBpZihjb21wbGV0ZWQgPT09IG51bGwgfHwgY29tcGxldGVkID09PSB1bmRlZmluZWQpIGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgbmV3VG9kb0l0ZW0gPSB0b2RvSXRlbUZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKTtcbiAgICAgICAgYWRkVG9kbyhuZXdUb2RvSXRlbSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSAodG9kb0l0ZW0pID0+e1xuICAgICAgICBsZXQgaWQgPSBnZXRUb2RvSWQodG9kb0l0ZW0pO1xuICAgICAgICBpZihpZCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIHRvZG9BcnIuc3BsaWNlKGlkLCAxKTtcbiAgICB9OyAgIFxuXG4gICAgY29uc3QgcmVtb3ZlVG9kb0J5VGl0bGUgPSAodGl0bGUpID0+e1xuICAgICAgICBsZXQgdG9kbyA9IHRvZG9BcnIuZmluZChlbGVtZW50ID0+IGVsZW1lbnQudGl0bGUgPT09IHRpdGxlKTtcbiAgICAgICAgaWYodG9kbyA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIHJlbW92ZVRvZG8odG9kbyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFRvZG9JZCA9ICh0b2RvSXRlbSkgPT57XG4gICAgICAgIHJldHVybiB0b2RvQXJyLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQudGl0bGUgPT09IHRvZG9JdGVtLnRpdGxlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VG9kb0lkQnlUaXRsZSA9ICh0aXRsZSkgPT57XG4gICAgICAgIHJldHVybiB0b2RvQXJyLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQudGl0bGUgPT09IHRpdGxlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdG9kb1dpdGhUaXRsZSA9ICh0aXRsZSkgPT57XG4gICAgICAgIHJldHVybiB0b2RvQXJyLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LnRpdGxlID09PSB0aXRsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJue1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgdG9kb0FycixcbiAgICAgICAgYWRkVG9kbyxcbiAgICAgICAgcmVtb3ZlVG9kbyxcbiAgICAgICAgY3JlYXRlVG9kbyxcbiAgICAgICAgZ2V0VG9kb0lkQnlUaXRsZSxcbiAgICAgICAgcmVtb3ZlVG9kb0J5VGl0bGUsXG4gICAgICAgIHRvZG9XaXRoVGl0bGUsXG4gICAgICAgIHNvcnRUb2RvcyxcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZXJGYWN0b3J5ID0gKHVzZXJuYW1lKSA9PntcbiAgICBsZXQgcHJvamVjdEFyciA9W107XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3RJdGVtKSA9PntcbiAgICAgICAgcHJvamVjdEFyci5wdXNoKHByb2plY3RJdGVtKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAodGl0bGUpID0+e1xuICAgICAgICBhZGRQcm9qZWN0KHByb2plY3RGYWN0b3J5KHRpdGxlKSk7ICAgICAgICBcbiAgICB9O1xuXG4gICAgY29uc3QgcHJvamVjdFdpdGhUaXRsZSA9IChwcm9qZWN0TmFtZSkgPT57XG4gICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdEFyci5maW5kKGVsZW1lbnQgPT5lbGVtZW50LnRpdGxlID09PSBwcm9qZWN0TmFtZSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0SWRXaXRoVGl0bGUgPSAocHJvamVjdE5hbWUpID0+e1xuICAgICAgICBsZXQgaWQgPSBwcm9qZWN0QXJyLmZpbmRJbmRleChlbGVtZW50ID0+ZWxlbWVudC50aXRsZSA9PT0gcHJvamVjdE5hbWUpO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfTtcblxuXG4gICAgY29uc3QgY3JlYXRlVG9kbyA9IChwcm9qZWN0VGl0bGUsIHRvZG9UaXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpID0+e1xuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RXaXRoVGl0bGUocHJvamVjdFRpdGxlKTtcbiAgICAgICAgaWYocHJvamVjdCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShwcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0LmNyZWF0ZVRvZG8odG9kb1RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFRvZG8gPSAocHJvamVjdFRpdGxlLCB0b2RvSXRlbSkgPT57XG4gICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdFdpdGhUaXRsZShwcm9qZWN0VGl0bGUpO1xuICAgICAgICBpZihwcm9qZWN0ID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgcHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHByb2plY3RUaXRsZSk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3QuYWRkVG9kbyh0b2RvSXRlbSk7XG4gICAgfTtcblxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0SXRlbSkgPT57XG4gICAgICAgIGxldCBpZCA9IGdldFRvZG9JZChwcm9qZWN0SXRlbSk7XG4gICAgICAgIGlmKGlkID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgcHJvamVjdEFyci5zcGxpY2UoaWQsIDEpO1xuICAgIH07ICAgXG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0QnlUaXRsZSA9ICh0aXRsZSkgPT57XG4gICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdEFyci5maW5kKHByb2plY3QgPT4gcHJvamVjdC50aXRsZSA9PT0gdGl0bGUpO1xuICAgICAgICBpZihwcm9qZWN0ID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUb2RvSWQgPSAocHJvamVjdEl0ZW0pID0+e1xuICAgICAgICByZXR1cm4gcHJvamVjdEFyci5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50LnRpdGxlID09PSBwcm9qZWN0SXRlbS50aXRsZSk7XG4gICAgfTtcblxuICAgIHJldHVybntcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIHByb2plY3RBcnIsXG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIGNyZWF0ZVByb2plY3QsXG4gICAgICAgIHJlbW92ZVByb2plY3QsXG4gICAgICAgIGNyZWF0ZVRvZG8sXG4gICAgICAgIGFkZFRvZG8sXG4gICAgICAgIHByb2plY3RXaXRoVGl0bGUsXG4gICAgICAgIHByb2plY3RJZFdpdGhUaXRsZSxcbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ5VGl0bGVcbiAgICB9O1xufVxuXG5cbiJdLCJuYW1lcyI6WyJjdXJyZW50UHJvamVjdCIsIkN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFByb2plY3QiLCJzZXRDdXJyZW50VXNlciIsImJhY2tkcm9wIiwicHJvamVjdENvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRvZG9Db250YWluZXIiLCJlZGl0UHJvamVjdFBvcHVwIiwiZWRpdFRvZG9Qb3B1cCIsImNvbmZpcm1EZWxldGVQb3B1cCIsImRpc3BsYXlQcm9qZWN0cyIsInVzZXIiLCJQcm9qZWN0Q29udGFpbmVyIiwicHJvamVjdFRlbXBsYXRlIiwicHJvamVjdEFyciIsImlubmVySFRNTCIsImZvckVhY2giLCJwcm9qZWN0IiwicHJvamVjdENsb25lIiwiY2xvbmVOb2RlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaW5uZXJUZXh0IiwidGl0bGUiLCJkZWxldGVCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkaXNwbGF5UG9wdXAiLCJjYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uIiwiaGlkZVBvcHVwIiwicmVtb3ZlUHJvamVjdEJ5VGl0bGUiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIlNlbGVjdGVkUHJvamVjdENoYW5nZVN0eWxlIiwic3RvcFByb3BhZ2F0aW9uIiwiZWRpdEJ1dHRvbiIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJkYXRhc2V0IiwiYXBwZW5kQ2hpbGQiLCJkaXNwbGF5VG9kb3MiLCJ0b2RvVGVtcGxhdGUiLCJ1bmRlZmluZWQiLCJwcmlvcml0eUNvbG9ycyIsInRvZG9BcnIiLCJ0b2RvIiwidG9kb0Nsb25lIiwidG9kb0NoZWNrYm94Iiwic2hvcnRlclN0cmluZyIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsImNoZWNrZWQiLCJjb21wbGV0ZWQiLCJhZGQiLCJwcmlvcml0eSIsIm9sZENhbmNlbEJ1dHRvbiIsIm9sZENvbmZpcm1CdXR0b24iLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwicmVtb3ZlVG9kb0J5VGl0bGUiLCJjb250YWlucyIsIlNlbGVjdGVkVG9kb0V4dGVuZCIsInByb2plY3RFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwcm9qZWN0RWxlbWVudCIsInRpdGxlRWxlbWVudCIsInByb2plY3RFbGVtZW50VGl0bGUiLCJ0b2RvRWxlbWVudHMiLCJ0b2RvRWxlbWVudCIsInRvZG9FbGVtZW50VGl0bGUiLCJ0b2RvVGl0bGUiLCJ0b2RvV2l0aFRpdGxlIiwicG9wdXBFbGVtZW50IiwiZGlzcGxheUVycm9yIiwicG9wdXAiLCJlcnJvckNsYXNzIiwiZXJyb3JUZXh0Iiwic3RyaW5nIiwic2hvcnRlciIsInNsaWNlIiwidG9kb0l0ZW1GYWN0b3J5IiwicHJvamVjdEZhY3RvcnkiLCJ1c2VyRmFjdG9yeSIsImFkZFByb2plY3RCdXR0b24iLCJhZGRQcm9qZWN0UG9wdXAiLCJhZGRUb2RvQnV0dG9uIiwiYWRkVG9kb1BvcHVwIiwicmV0cmlldmVkVXNlciIsImdldEl0ZW0iLCJ1c2VySnNvbiIsInBhcnNlIiwiY3JlYXRlVG9kbyIsInVzZXJuYW1lIiwibmV3UHJvamVjdCIsImFkZFByb2plY3QiLCJzZXR1cCIsInNldHVwQWRkQnV0dG9ucyIsInNldHVwUG9wdXBCdXR0b25zIiwiYWRkVG9kb0NvbmZpcm1CdXR0b24iLCJhZGRUb2RvQ2FuY2VsQnV0dG9uIiwiZ2V0VG9kb0lkQnlUaXRsZSIsImFkZFByb2plY3RDb25maXJtQnV0dG9uIiwiYWRkUHJvamVjdENhbmNlbEJ1dHRvbiIsInByb2plY3RJZFdpdGhUaXRsZSIsImNyZWF0ZVByb2plY3QiLCJwcm9qZWN0V2l0aFRpdGxlIiwiZWRpdFByb2plY3RDb25maXJtQnV0dG9uIiwiZWRpdFByb2plY3RDYW5jZWxCdXR0b24iLCJlZGl0VG9kb0NvbmZpcm1CdXR0b24iLCJlZGl0VG9kb0NhbmNlbEJ1dHRvbiIsImVkaXRlZFRvZG8iLCJzb3J0VG9kb3MiLCJhZGRUb2RvIiwidG9kb0l0ZW0iLCJwdXNoIiwic29ydCIsInNvcnRGbiIsImEiLCJiIiwibmV3VG9kb0l0ZW0iLCJyZW1vdmVUb2RvIiwiaWQiLCJnZXRUb2RvSWQiLCJzcGxpY2UiLCJmaW5kIiwiZWxlbWVudCIsImZpbmRJbmRleCIsInByb2plY3RJdGVtIiwicHJvamVjdE5hbWUiLCJwcm9qZWN0VGl0bGUiLCJyZW1vdmVQcm9qZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==