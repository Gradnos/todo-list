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

function displayProjects(user, ProjectContainer, projectTemplate){
    let projectArr = user.projectArr;
    ProjectContainer.innerHTML = "";
    projectArr.forEach(project => {
        let projectClone = projectTemplate.cloneNode(true);
        projectClone.classList.remove("nodisplay", "project-template")
        projectClone.querySelector(".project-title").innerText = project.title;

        let deleteButton = projectClone.querySelector(".delete");

        deleteButton.addEventListener("click", (e) =>{

            console.log("project");


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
        todoClone.querySelector(".todo-description").innerText = shorterString(todo.description, 40);;
        todoClone.querySelector(".todo-dueDate").innerText = todo.dueDate;
        todoCheckbox.checked = todo.completed;

    
        todoClone.classList.add(priorityColors[todo.priority]);

        let deleteButton = todoClone.querySelector(".delete");

        deleteButton.addEventListener("click", (e) =>{

            console.log("todo");

            confirmDeletePopup.querySelector("h3").innerText = `Delete >>${todo.title}<< ?`;
            displayPopup(confirmDeletePopup,_setup__WEBPACK_IMPORTED_MODULE_0__.backdrop);
            let oldCancelButton = confirmDeletePopup.querySelector(".cancel");
            let oldConfirmButton = confirmDeletePopup.querySelector(".confirm");

            let cancelButton = oldCancelButton.cloneNode(true);
            oldCancelButton.parentNode.replaceChild(cancelButton, oldCancelButton);

            let confirmButton = oldConfirmButton.cloneNode(true);
            oldConfirmButton.parentNode.replaceChild(confirmButton, oldConfirmButton);
        
            cancelButton.addEventListener("click", ()=>{
                hidePopup(confirmDeletePopup,_setup__WEBPACK_IMPORTED_MODULE_0__.backdrop);
            });
        
            confirmButton.addEventListener("click", ()=>{
                hidePopup(confirmDeletePopup,_setup__WEBPACK_IMPORTED_MODULE_0__.backdrop);
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

        todoClone.addEventListener("click", (e)=>{
            if(todoClone.classList.contains("extended")){
                SelectedTodoExtend(false);
                todoClone.querySelector(".todo-description").innerText = shorterString(todo.description, 40);
            }else{
                SelectedTodoExtend(todo);
                todoClone.querySelector(".todo-description").innerText = todo.description;
            }
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

function SelectedTodoExtend(todo){
    let title = todo.title;

    if(todo === false) title = ""; 

    let todoElements =  todoContainer.querySelectorAll(".todo-div");
    todoElements.forEach(todoElement => {
        let titleElement = todoElement.querySelector(".todo-title");
        let todoElementTitle = null;
        if(titleElement !== null) todoElementTitle = titleElement.innerText;

        if(todoElementTitle === title){
            todoElement.classList.add("extended");
        } else{
            todoElement.classList.remove("extended");
            let todoTitle = todoElement.querySelector(".todo-title").innerText
            todoElement.querySelector(".todo-description").innerText = shorterString(_setup__WEBPACK_IMPORTED_MODULE_0__.currentProject.todoWithTitle(todoTitle).description, 40);
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

function shorterString(string, length){
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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/displayFunctions.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBR0E7O0FBRUEsUUFBUSw0REFBUzs7QUFFakI7QUFDQTtBQUNBLFFBQVEsK0RBQVk7QUFDcEIsS0FBSztBQUNMOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDek9PO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5RnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zZXR1cC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb09iamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VycmVudFByb2plY3QsIEN1cnJlbnRVc2VyLCBzZXRDdXJyZW50UHJvamVjdCwgc2V0Q3VycmVudFVzZXIsIGJhY2tkcm9wIH0gZnJvbSBcIi4vc2V0dXBcIjtcblxubGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xuXG5sZXQgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb250YWluZXJcIik7XG5cbmxldCBlZGl0UHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXByb2plY3QtcG9wdXBcIik7XG5sZXQgZWRpdFRvZG9Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10b2RvLXBvcHVwXCIpO1xuXG5sZXQgY29uZmlybURlbGV0ZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25maXJtLWRlbGV0ZS1wb3B1cFwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cyh1c2VyLCBQcm9qZWN0Q29udGFpbmVyLCBwcm9qZWN0VGVtcGxhdGUpe1xuICAgIGxldCBwcm9qZWN0QXJyID0gdXNlci5wcm9qZWN0QXJyO1xuICAgIFByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBwcm9qZWN0QXJyLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0Q2xvbmUgPSBwcm9qZWN0VGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBwcm9qZWN0Q2xvbmUuY2xhc3NMaXN0LnJlbW92ZShcIm5vZGlzcGxheVwiLCBcInByb2plY3QtdGVtcGxhdGVcIilcbiAgICAgICAgcHJvamVjdENsb25lLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKS5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBwcm9qZWN0Q2xvbmUucXVlcnlTZWxlY3RvcihcIi5kZWxldGVcIik7XG5cbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvamVjdFwiKTtcblxuXG4gICAgICAgICAgICBjb25maXJtRGVsZXRlUG9wdXAucXVlcnlTZWxlY3RvcihcImgzXCIpLmlubmVyVGV4dCA9IGBEZWxldGUgPj4ke3Byb2plY3QudGl0bGV9PDwgP2A7XG4gICAgICAgICAgICBkaXNwbGF5UG9wdXAoY29uZmlybURlbGV0ZVBvcHVwLGJhY2tkcm9wKTtcbiAgICAgICAgICAgIGxldCBjYW5jZWxCdXR0b24gPSBjb25maXJtRGVsZXRlUG9wdXAucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG4gICAgICAgICAgICBsZXQgY29uZmlybUJ1dHRvbiA9IGNvbmZpcm1EZWxldGVQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1cIik7XG4gICAgICAgIFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICAgICAgIGhpZGVQb3B1cChjb25maXJtRGVsZXRlUG9wdXAsYmFja2Ryb3ApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgICAgICBoaWRlUG9wdXAoY29uZmlybURlbGV0ZVBvcHVwLGJhY2tkcm9wKTtcblxuICAgICAgICAgICAgICAgIEN1cnJlbnRVc2VyLnJlbW92ZVByb2plY3RCeVRpdGxlKHByb2plY3QudGl0bGUpO1xuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRQcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0LnRpdGxlKSBzZXRDdXJyZW50UHJvamVjdCh1c2VyLnByb2plY3RBcnJbdXNlci5wcm9qZWN0QXJyLmxlbmd0aC0xXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoQ3VycmVudFVzZXIpKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVNFUicsIEpTT04uc3RyaW5naWZ5KEN1cnJlbnRVc2VyKSk7XG4gICAgICAgICAgICAgICAgZGlzcGxheVByb2plY3RzKHVzZXIsIFByb2plY3RDb250YWluZXIsIHByb2plY3RUZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgaWYodXNlci5wcm9qZWN0QXJyLmxlbmd0aCA+IDApIFNlbGVjdGVkUHJvamVjdENoYW5nZVN0eWxlKGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZWRpdEJ1dHRvbiA9IHByb2plY3RDbG9uZS5xdWVyeVNlbGVjdG9yKFwiLmVkaXRcIik7XG5cbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgZWRpdFByb2plY3RQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC10aXRsZVwiKS52YWx1ZSA9IHByb2plY3QudGl0bGU7XG4gICAgICAgICAgICBlZGl0UHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXRpdGxlXCIpLnBsYWNlaG9sZGVyID0gcHJvamVjdC50aXRsZTtcblxuXG4gICAgICAgICAgICBkaXNwbGF5UG9wdXAoZWRpdFByb2plY3RQb3B1cCxiYWNrZHJvcCk7XG4gICAgICAgICAgICBlZGl0UHJvamVjdFBvcHVwLmRhdGFzZXQudGl0bGUgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICBwcm9qZWN0Q2xvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICBQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDbG9uZSk7XG4gICAgfSk7XG5cbiAgICBpZih1c2VyLnByb2plY3RBcnIubGVuZ3RoID4gMCkgU2VsZWN0ZWRQcm9qZWN0Q2hhbmdlU3R5bGUoY3VycmVudFByb2plY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvZG9zKHByb2plY3QsIHRvZG9Db250YWluZXIsIHRvZG9UZW1wbGF0ZSl7XG4gICAgXG4gICAgdG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGlmKHByb2plY3QgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgbGV0IHByaW9yaXR5Q29sb3JzID0gW1wiLS1yXCIsIFwiLS1iXCIsIFwiLS1nXCJdO1xuXG5cbiAgICBsZXQgdG9kb0FyciA9IHByb2plY3QudG9kb0FycjtcbiAgICB0b2RvQXJyLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGxldCB0b2RvQ2xvbmUgPSB0b2RvVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBsZXQgdG9kb0NoZWNrYm94ID0gdG9kb0Nsb25lLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb21wbGV0ZWRcIik7XG5cblxuXG5cbiAgICAgICAgdG9kb0Nsb25lLmNsYXNzTGlzdC5yZW1vdmUoXCJub2Rpc3BsYXlcIiwgXCJ0b2RvLXRlbXBsYXRlXCIpXG4gICAgICAgIHRvZG9DbG9uZS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdGl0bGVcIikuaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcbiAgICAgICAgdG9kb0Nsb25lLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kZXNjcmlwdGlvblwiKS5pbm5lclRleHQgPSBzaG9ydGVyU3RyaW5nKHRvZG8uZGVzY3JpcHRpb24sIDQwKTs7XG4gICAgICAgIHRvZG9DbG9uZS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZHVlRGF0ZVwiKS5pbm5lclRleHQgPSB0b2RvLmR1ZURhdGU7XG4gICAgICAgIHRvZG9DaGVja2JveC5jaGVja2VkID0gdG9kby5jb21wbGV0ZWQ7XG5cbiAgICBcbiAgICAgICAgdG9kb0Nsb25lLmNsYXNzTGlzdC5hZGQocHJpb3JpdHlDb2xvcnNbdG9kby5wcmlvcml0eV0pO1xuXG4gICAgICAgIGxldCBkZWxldGVCdXR0b24gPSB0b2RvQ2xvbmUucXVlcnlTZWxlY3RvcihcIi5kZWxldGVcIik7XG5cbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG9kb1wiKTtcblxuICAgICAgICAgICAgY29uZmlybURlbGV0ZVBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKS5pbm5lclRleHQgPSBgRGVsZXRlID4+JHt0b2RvLnRpdGxlfTw8ID9gO1xuICAgICAgICAgICAgZGlzcGxheVBvcHVwKGNvbmZpcm1EZWxldGVQb3B1cCxiYWNrZHJvcCk7XG4gICAgICAgICAgICBsZXQgb2xkQ2FuY2VsQnV0dG9uID0gY29uZmlybURlbGV0ZVBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xuICAgICAgICAgICAgbGV0IG9sZENvbmZpcm1CdXR0b24gPSBjb25maXJtRGVsZXRlUG9wdXAucXVlcnlTZWxlY3RvcihcIi5jb25maXJtXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2FuY2VsQnV0dG9uID0gb2xkQ2FuY2VsQnV0dG9uLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIG9sZENhbmNlbEJ1dHRvbi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjYW5jZWxCdXR0b24sIG9sZENhbmNlbEJ1dHRvbik7XG5cbiAgICAgICAgICAgIGxldCBjb25maXJtQnV0dG9uID0gb2xkQ29uZmlybUJ1dHRvbi5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICBvbGRDb25maXJtQnV0dG9uLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNvbmZpcm1CdXR0b24sIG9sZENvbmZpcm1CdXR0b24pO1xuICAgICAgICBcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgICAgICBoaWRlUG9wdXAoY29uZmlybURlbGV0ZVBvcHVwLGJhY2tkcm9wKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICAgICAgaGlkZVBvcHVwKGNvbmZpcm1EZWxldGVQb3B1cCxiYWNrZHJvcCk7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3QucmVtb3ZlVG9kb0J5VGl0bGUodG9kby50aXRsZSk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VTRVInLCBKU09OLnN0cmluZ2lmeShDdXJyZW50VXNlcikpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlUb2Rvcyhwcm9qZWN0LCB0b2RvQ29udGFpbmVyLCB0b2RvVGVtcGxhdGUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGVkaXRCdXR0b24gPSB0b2RvQ2xvbmUucXVlcnlTZWxlY3RvcihcIi5lZGl0XCIpO1xuXG4gICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgIGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtdGl0bGVcIikudmFsdWUgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC10aXRsZVwiKS5wbGFjZWhvbGRlciA9IHRvZG8udGl0bGU7XG5cbiAgICAgICAgICAgIGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtZGVzY3JpcHRpb25cIikudmFsdWUgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC1kdWVEYXRlXCIpLnZhbHVlID0gdG9kby5kdWVEYXRlO1xuICAgICAgICAgICAgZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC1wcmlvcml0eVwiKS52YWx1ZSA9IHRvZG8ucHJpb3JpdHk7IFxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRpc3BsYXlQb3B1cChlZGl0VG9kb1BvcHVwLGJhY2tkcm9wKTtcbiAgICAgICAgICAgIGVkaXRUb2RvUG9wdXAuZGF0YXNldC50aXRsZSA9IHRvZG8udGl0bGU7XG5cbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRvZG9DaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgdG9kby5jb21wbGV0ZWQgPSAhdG9kby5jb21wbGV0ZWQ7XG4gICAgICAgICAgICBpZih0b2RvLmNvbXBsZXRlZCkgdG9kb0Nsb25lLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XG4gICAgICAgICAgICBlbHNlIHRvZG9DbG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkXCIpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdG9kb0Nsb25lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcbiAgICAgICAgICAgIGlmKHRvZG9DbG9uZS5jbGFzc0xpc3QuY29udGFpbnMoXCJleHRlbmRlZFwiKSl7XG4gICAgICAgICAgICAgICAgU2VsZWN0ZWRUb2RvRXh0ZW5kKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0b2RvQ2xvbmUucXVlcnlTZWxlY3RvcihcIi50b2RvLWRlc2NyaXB0aW9uXCIpLmlubmVyVGV4dCA9IHNob3J0ZXJTdHJpbmcodG9kby5kZXNjcmlwdGlvbiwgNDApO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgU2VsZWN0ZWRUb2RvRXh0ZW5kKHRvZG8pO1xuICAgICAgICAgICAgICAgIHRvZG9DbG9uZS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGVzY3JpcHRpb25cIikuaW5uZXJUZXh0ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBpZih0b2RvLmNvbXBsZXRlZCkgdG9kb0Nsb25lLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XG4gICAgICAgIGVsc2UgdG9kb0Nsb25lLmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZWRcIik7XG5cbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ2xvbmUpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0ZWRQcm9qZWN0Q2hhbmdlU3R5bGUocHJvamVjdCl7XG5cbiAgICBpZiAoIXByb2plY3QpIHJldHVybiBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuXG4gICAgbGV0IHRpdGxlID0gcHJvamVjdC50aXRsZTtcbiAgICBsZXQgcHJvamVjdEVsZW1lbnRzID0gIHByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWRpdlwiKTtcbiAgICBwcm9qZWN0RWxlbWVudHMuZm9yRWFjaChwcm9qZWN0RWxlbWVudCA9PiB7XG4gICAgICAgIGxldCB0aXRsZUVsZW1lbnQgPSBwcm9qZWN0RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIik7XG4gICAgICAgIGxldCBwcm9qZWN0RWxlbWVudFRpdGxlID0gbnVsbDtcbiAgICAgICAgaWYodGl0bGVFbGVtZW50ICE9PSBudWxsKSBwcm9qZWN0RWxlbWVudFRpdGxlID0gdGl0bGVFbGVtZW50LmlubmVyVGV4dDtcblxuICAgICAgICBpZihwcm9qZWN0RWxlbWVudFRpdGxlID09PSB0aXRsZSl7XG4gICAgICAgICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBTZWxlY3RlZFRvZG9FeHRlbmQodG9kbyl7XG4gICAgbGV0IHRpdGxlID0gdG9kby50aXRsZTtcblxuICAgIGlmKHRvZG8gPT09IGZhbHNlKSB0aXRsZSA9IFwiXCI7IFxuXG4gICAgbGV0IHRvZG9FbGVtZW50cyA9ICB0b2RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kby1kaXZcIik7XG4gICAgdG9kb0VsZW1lbnRzLmZvckVhY2godG9kb0VsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgdGl0bGVFbGVtZW50ID0gdG9kb0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXRpdGxlXCIpO1xuICAgICAgICBsZXQgdG9kb0VsZW1lbnRUaXRsZSA9IG51bGw7XG4gICAgICAgIGlmKHRpdGxlRWxlbWVudCAhPT0gbnVsbCkgdG9kb0VsZW1lbnRUaXRsZSA9IHRpdGxlRWxlbWVudC5pbm5lclRleHQ7XG5cbiAgICAgICAgaWYodG9kb0VsZW1lbnRUaXRsZSA9PT0gdGl0bGUpe1xuICAgICAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImV4dGVuZGVkXCIpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZXh0ZW5kZWRcIik7XG4gICAgICAgICAgICBsZXQgdG9kb1RpdGxlID0gdG9kb0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXRpdGxlXCIpLmlubmVyVGV4dFxuICAgICAgICAgICAgdG9kb0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWRlc2NyaXB0aW9uXCIpLmlubmVyVGV4dCA9IHNob3J0ZXJTdHJpbmcoY3VycmVudFByb2plY3QudG9kb1dpdGhUaXRsZSh0b2RvVGl0bGUpLmRlc2NyaXB0aW9uLCA0MCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVBvcHVwKHBvcHVwRWxlbWVudCwgYmFja2Ryb3Ape1xuICAgIHBvcHVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVQb3B1cChwb3B1cEVsZW1lbnQsIGJhY2tkcm9wKXtcbiAgICBwb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgYmFja2Ryb3AuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG59XG5cblxuXG5cbiBcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5RXJyb3IocG9wdXAsIGVycm9yQ2xhc3MsIGVycm9yVGV4dCl7XG4gICAgcG9wdXAucXVlcnlTZWxlY3RvcihlcnJvckNsYXNzKS5pbm5lclRleHQ9ZXJyb3JUZXh0O1xufVxuXG5mdW5jdGlvbiBzaG9ydGVyU3RyaW5nKHN0cmluZywgbGVuZ3RoKXtcbiAgICBpZiAoc3RyaW5nLmxlbmd0aCA8IGxlbmd0aCArIDEpIHJldHVybiBzdHJpbmc7IFxuICAgIGxldCBzaG9ydGVyID0gc3RyaW5nLnNsaWNlKDAsIGxlbmd0aCk7XG4gICAgcmV0dXJuIHNob3J0ZXIgKyBcIi4uLlwiO1xufVxuIiwiaW1wb3J0IHsgZGlzcGxheVBvcHVwLCBoaWRlUG9wdXAsIGRpc3BsYXlFcnJvciwgZGlzcGxheVRvZG9zLCBTZWxlY3RlZFByb2plY3RDaGFuZ2VTdHlsZSB9IGZyb20gXCIuL2Rpc3BsYXlGdW5jdGlvbnNcIjtcbmltcG9ydCB7IHRvZG9JdGVtRmFjdG9yeSwgcHJvamVjdEZhY3RvcnksIHVzZXJGYWN0b3J5IH0gZnJvbSAnLi90b2RvT2JqZWN0cyc7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfSBmcm9tICcuL2Rpc3BsYXlGdW5jdGlvbnMnO1xuXG5cbmV4cG9ydCBsZXQgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhY2tkcm9wXCIpO1xuXG5sZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XG5sZXQgcHJvamVjdFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRlbXBsYXRlXCIpO1xuXG5cbmxldCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWNvbnRhaW5lclwiKTtcbmxldCB0b2RvVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdGVtcGxhdGVcIik7XG5cblxubGV0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xubGV0IGFkZFByb2plY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1wb3B1cFwiKTtcblxubGV0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvXCIpO1xubGV0IGFkZFRvZG9Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1wb3B1cFwiKTtcblxubGV0IGVkaXRQcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtcHJvamVjdC1wb3B1cFwiKTtcbmxldCBlZGl0VG9kb1BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRvZG8tcG9wdXBcIik7XG5cblxuXG5leHBvcnQgbGV0IEN1cnJlbnRVc2VyO1xuZXhwb3J0IGxldCBjdXJyZW50UHJvamVjdDtcbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50VXNlcih1c2VyKXtcbiAgICBDdXJyZW50VXNlciA9IHVzZXI7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3Qpe1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICBkaXNwbGF5UHJvamVjdHMoQ3VycmVudFVzZXIscHJvamVjdENvbnRhaW5lcixwcm9qZWN0VGVtcGxhdGUpO1xuICAgIGRpc3BsYXlUb2RvcyhjdXJyZW50UHJvamVjdCx0b2RvQ29udGFpbmVyLHRvZG9UZW1wbGF0ZSk7XG4gICAgU2VsZWN0ZWRQcm9qZWN0Q2hhbmdlU3R5bGUoY3VycmVudFByb2plY3QpO1xufTtcblxuXG5cbmxldCByZXRyaWV2ZWRVc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1VTRVInKTtcbmxldCB1c2VySnNvbiA9IEpTT04ucGFyc2UocmV0cmlldmVkVXNlcik7XG5sZXQgdXNlclxuXG5pZih1c2VySnNvbiA9PT0gbnVsbCl7XG4gICAgdXNlciA9IHVzZXJGYWN0b3J5KFwiR3Vlc3RcIik7XG4gICAgdXNlci5jcmVhdGVUb2RvKFwiR2V0IEEgSm9iXCIsIFwiTGVhcm4gQSBTa2lsbFwiLCBcIldlYi1EZXZlbG9wbWVudFwiLCBcIjIwMjQtMDEtMDFcIiwgMCk7XG4gICAgdXNlci5jcmVhdGVUb2RvKFwiR2V0IEEgSm9iXCIsIFwiQXBwbHkgRm9yIEpvYnNcIiwgXCJcIiwgXCIyMDI0LTA0LTAxXCIsIDEpO1xuICAgIHVzZXIuY3JlYXRlVG9kbyhcIkdldCBBIFdpZmVcIiwgXCJGaW5kIEEgV29tYW5cIiwgXCJVc3VhbGx5IEluIFRoZSBTdHJlZXRzXCIsIFwiMjAyMy0wNy0wNVwiLCAwKTtcbiAgICB1c2VyLmNyZWF0ZVRvZG8oXCJHZXQgQSBXaWZlXCIsIFwiVGFsayBUbyBBIFdvbWFuXCIsIFwiVXNlIFdvcmRzXCIsIFwiMjAyNC0xMi0xMVwiLCAxKTtcbiAgICB1c2VyLmNyZWF0ZVRvZG8oXCJHZXQgQSBXaWZlXCIsIFwiRmluaXNoIFRoaXMgTGlzdFwiLCBcIlwiLCBcIlwiLCAyKTtcbn1lbHNlIHtcbiAgICBcbiAgICB1c2VyID0gdXNlckZhY3RvcnkodXNlckpzb24udXNlcm5hbWUpO1xuICAgIGxldCBwcm9qZWN0QXJyID0gdXNlckpzb24ucHJvamVjdEFycjtcbiAgICBwcm9qZWN0QXJyLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkocHJvamVjdC50aXRsZSk7XG4gICAgICAgIHVzZXIuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgbGV0IHRvZG9BcnIgPSBwcm9qZWN0LnRvZG9BcnI7XG4gICAgICAgIHRvZG9BcnIuZm9yRWFjaCh0b2RvID0+e1xuICAgICAgICAgICAgbmV3UHJvamVjdC5jcmVhdGVUb2RvKHRvZG8udGl0bGUsIHRvZG8uZGVzY3JpcHRpb24sIHRvZG8uZHVlRGF0ZSwgdG9kby5wcmlvcml0eSwgdG9kby5jb21wbGV0ZWQpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuXG5cblxuc2V0Q3VycmVudFVzZXIodXNlcik7XG5zZXRDdXJyZW50UHJvamVjdChDdXJyZW50VXNlci5wcm9qZWN0QXJyWzBdKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXAoKXtcbiAgICBzZXR1cEFkZEJ1dHRvbnMoKTtcbiAgICBzZXR1cFBvcHVwQnV0dG9ucygpO1xuXG5cbn1cblxuXG5cbmZ1bmN0aW9uIHNldHVwQWRkQnV0dG9ucygpe1xuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xuICAgICAgICAgICAgZGlzcGxheVBvcHVwKGFkZFByb2plY3RQb3B1cCwgYmFja2Ryb3ApO1xuICAgIH0pO1xuXG4gICAgYWRkVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XG4gICAgICAgICAgICBkaXNwbGF5UG9wdXAoYWRkVG9kb1BvcHVwLCBiYWNrZHJvcCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldHVwUG9wdXBCdXR0b25zKCl7XG4gICAgbGV0IGFkZFRvZG9Db25maXJtQnV0dG9uID0gYWRkVG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybVwiKTtcbiAgICBsZXQgYWRkVG9kb0NhbmNlbEJ1dHRvbiA9IGFkZFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcblxuICAgIGFkZFRvZG9DYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgaGlkZVBvcHVwKGFkZFRvZG9Qb3B1cCwgYmFja2Ryb3ApO1xuICAgIH0pO1xuXG4gICAgYWRkVG9kb0NvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgbGV0IHRpdGxlID0gYWRkVG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXRpdGxlXCIpLnZhbHVlO1xuXG4gICAgICAgIGlmKGN1cnJlbnRQcm9qZWN0LmdldFRvZG9JZEJ5VGl0bGUodGl0bGUpICE9PSAtMSkge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yKGFkZFRvZG9Qb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJUaGlzIFRpdGxlIEFscmVhZHkgRXhpc3RzIVwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmKHRpdGxlID09PSBcIlwiKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoYWRkVG9kb1BvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIkl0IE11c3QgSGF2ZSBBIFRpdGxlIVwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXlFcnJvcihhZGRUb2RvUG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiXCIpO1xuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGFkZFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC1kZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBhZGRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gYWRkVG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXByaW9yaXR5XCIpLnZhbHVlO1xuICAgIFxuICAgICAgICBjdXJyZW50UHJvamVjdC5jcmVhdGVUb2RvKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksIGZhbHNlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VTRVInLCBKU09OLnN0cmluZ2lmeShDdXJyZW50VXNlcikpO1xuICAgICAgICBoaWRlUG9wdXAoYWRkVG9kb1BvcHVwLCBiYWNrZHJvcCk7XG4gICAgICAgIGRpc3BsYXlUb2RvcyhjdXJyZW50UHJvamVjdCwgdG9kb0NvbnRhaW5lciwgdG9kb1RlbXBsYXRlKTtcbiAgICB9KTtcblxuXG4gICAgbGV0IGFkZFByb2plY3RDb25maXJtQnV0dG9uID0gYWRkUHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybVwiKTtcbiAgICBsZXQgYWRkUHJvamVjdENhbmNlbEJ1dHRvbiA9IGFkZFByb2plY3RQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcblxuICAgIGFkZFByb2plY3RDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgaGlkZVBvcHVwKGFkZFByb2plY3RQb3B1cCwgYmFja2Ryb3ApO1xuICAgIH0pO1xuXG4gICAgYWRkUHJvamVjdENvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgbGV0IHRpdGxlID0gYWRkUHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXRpdGxlXCIpLnZhbHVlO1xuXG4gICAgICAgIGlmKEN1cnJlbnRVc2VyLnByb2plY3RJZFdpdGhUaXRsZSh0aXRsZSkgIT09IC0xKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoYWRkUHJvamVjdFBvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIlRoaXMgVGl0bGUgQWxyZWFkeSBFeGlzdHMhXCIpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYodGl0bGUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvcihhZGRQcm9qZWN0UG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiSXQgTXVzdCBIYXZlIEEgVGl0bGUhXCIpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheUVycm9yKGFkZFByb2plY3RQb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJcIik7XG5cbiAgICAgICAgQ3VycmVudFVzZXIuY3JlYXRlUHJvamVjdCh0aXRsZSk7XG4gICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KEN1cnJlbnRVc2VyLnByb2plY3RXaXRoVGl0bGUodGl0bGUpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VTRVInLCBKU09OLnN0cmluZ2lmeShDdXJyZW50VXNlcikpO1xuICAgICAgICBoaWRlUG9wdXAoYWRkUHJvamVjdFBvcHVwLCBiYWNrZHJvcCk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cyh1c2VyLHByb2plY3RDb250YWluZXIscHJvamVjdFRlbXBsYXRlKTtcbiAgICB9KTtcblxuICAgIGxldCBlZGl0UHJvamVjdENvbmZpcm1CdXR0b24gPSBlZGl0UHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybVwiKTtcbiAgICBsZXQgZWRpdFByb2plY3RDYW5jZWxCdXR0b24gPSBlZGl0UHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xuXG4gICAgZWRpdFByb2plY3RDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgaGlkZVBvcHVwKGVkaXRQcm9qZWN0UG9wdXAsIGJhY2tkcm9wKTtcbiAgICB9KTtcblxuICAgIGVkaXRQcm9qZWN0Q29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICBsZXQgdGl0bGUgPSBlZGl0UHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXRpdGxlXCIpLnZhbHVlO1xuXG4gICAgICAgIGlmKEN1cnJlbnRVc2VyLnByb2plY3RJZFdpdGhUaXRsZSh0aXRsZSkgIT09IC0xKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoZWRpdFByb2plY3RQb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJUaGlzIFRpdGxlIEFscmVhZHkgRXhpc3RzIVwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmKHRpdGxlID09PSBcIlwiKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoZWRpdFByb2plY3RQb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJJdCBNdXN0IEhhdmUgQSBUaXRsZSFcIik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBkaXNwbGF5RXJyb3IoZWRpdFByb2plY3RQb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJcIik7XG5cbiAgICAgICAgXG4gICAgICAgIEN1cnJlbnRVc2VyLnByb2plY3RXaXRoVGl0bGUoZWRpdFByb2plY3RQb3B1cC5kYXRhc2V0LnRpdGxlKS50aXRsZSA9IHRpdGxlO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVNFUicsIEpTT04uc3RyaW5naWZ5KEN1cnJlbnRVc2VyKSk7XG4gICAgICAgIGhpZGVQb3B1cChlZGl0UHJvamVjdFBvcHVwLCBiYWNrZHJvcCk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cyh1c2VyLHByb2plY3RDb250YWluZXIscHJvamVjdFRlbXBsYXRlKTtcbiAgICB9KTtcblxuXG4gICAgbGV0IGVkaXRUb2RvQ29uZmlybUJ1dHRvbiA9IGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5jb25maXJtXCIpO1xuICAgIGxldCBlZGl0VG9kb0NhbmNlbEJ1dHRvbiA9IGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG5cbiAgICBlZGl0VG9kb0NhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICBoaWRlUG9wdXAoZWRpdFRvZG9Qb3B1cCwgYmFja2Ryb3ApO1xuICAgIH0pO1xuXG4gICAgZWRpdFRvZG9Db25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGxldCB0aXRsZSA9IGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtdGl0bGVcIikudmFsdWU7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICAgIGxldCBkdWVEYXRlID0gZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC1kdWVEYXRlXCIpLnZhbHVlO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXByaW9yaXR5XCIpLnZhbHVlO1xuXG5cbiAgICAgICAgaWYoY3VycmVudFByb2plY3QuZ2V0VG9kb0lkQnlUaXRsZSh0aXRsZSkgIT09IC0xKSB7XG4gICAgICAgICAgICBpZih0aXRsZSAhPT0gZWRpdFRvZG9Qb3B1cC5kYXRhc2V0LnRpdGxlKXtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvcihlZGl0VG9kb1BvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIlRoaXMgVGl0bGUgQWxyZWFkeSBFeGlzdHMhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRpdGxlID09PSBcIlwiKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoZWRpdFRvZG9Qb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJJdCBNdXN0IEhhdmUgQSBUaXRsZSFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheUVycm9yKGVkaXRUb2RvUG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiXCIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGVkaXRUb2RvUG9wdXAuZGF0YXNldC50aXRsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0LnRvZG9XaXRoVGl0bGUoZWRpdFRvZG9Qb3B1cC5kYXRhc2V0LnRpdGxlKSk7XG5cbiAgICAgICAgbGV0IGVkaXRlZFRvZG8gPSBjdXJyZW50UHJvamVjdC50b2RvV2l0aFRpdGxlKGVkaXRUb2RvUG9wdXAuZGF0YXNldC50aXRsZSk7XG5cbiAgICAgICAgZWRpdGVkVG9kby50aXRsZSA9IHRpdGxlO1xuICAgICAgICBlZGl0ZWRUb2RvLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIGVkaXRlZFRvZG8uZHVlRGF0ZSA9IGR1ZURhdGU7XG5cblxuICAgICAgICBlZGl0ZWRUb2RvLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbiAgICAgICAgaGlkZVBvcHVwKGVkaXRUb2RvUG9wdXAsIGJhY2tkcm9wKTtcblxuICAgICAgICBjdXJyZW50UHJvamVjdC5zb3J0VG9kb3MoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VTRVInLCBKU09OLnN0cmluZ2lmeShDdXJyZW50VXNlcikpO1xuICAgICAgICBkaXNwbGF5VG9kb3MoY3VycmVudFByb2plY3QsdG9kb0NvbnRhaW5lcix0b2RvVGVtcGxhdGUpO1xuICAgIH0pO1xuICAgIFxuXG5cbn1cblxuXG5cbiIsIlxuZXhwb3J0IGNvbnN0IHRvZG9JdGVtRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpID0+e1xuICAgIHJldHVybntcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgY29tcGxldGVkXG4gICAgfTtcbn07XG5cblxuZXhwb3J0IGNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlKSA9PntcbiAgICBsZXQgdG9kb0FyciA9IFtdO1xuXG4gICAgY29uc3QgYWRkVG9kbyA9ICh0b2RvSXRlbSkgPT57XG4gICAgICAgIHRvZG9BcnIucHVzaCh0b2RvSXRlbSk7XG4gICAgICAgIHNvcnRUb2RvcygpO1xuICAgIH07XG5cbiAgICBjb25zdCBzb3J0VG9kb3MgPSAoKT0+e1xuICAgICAgICB0b2RvQXJyLnNvcnQoc29ydEZuKTtcbiAgICAgICAgXG4gICAgfTtcblxuICAgIGNvbnN0IHNvcnRGbiA9IChhLGIpID0+e1xuICAgICAgICBpZihhLnByaW9yaXR5IDwgYi5wcmlvcml0eSkgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKSA9PntcbiAgICAgICAgaWYoY29tcGxldGVkID09PSBudWxsIHx8IGNvbXBsZXRlZCA9PT0gdW5kZWZpbmVkKSBjb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IG5ld1RvZG9JdGVtID0gdG9kb0l0ZW1GYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCk7XG4gICAgICAgIGFkZFRvZG8obmV3VG9kb0l0ZW0pO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVUb2RvID0gKHRvZG9JdGVtKSA9PntcbiAgICAgICAgbGV0IGlkID0gZ2V0VG9kb0lkKHRvZG9JdGVtKTtcbiAgICAgICAgaWYoaWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgICB0b2RvQXJyLnNwbGljZShpZCwgMSk7XG4gICAgfTsgICBcblxuICAgIGNvbnN0IHJlbW92ZVRvZG9CeVRpdGxlID0gKHRpdGxlKSA9PntcbiAgICAgICAgbGV0IHRvZG8gPSB0b2RvQXJyLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LnRpdGxlID09PSB0aXRsZSk7XG4gICAgICAgIGlmKHRvZG8gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgICByZW1vdmVUb2RvKHRvZG8pO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRUb2RvSWQgPSAodG9kb0l0ZW0pID0+e1xuICAgICAgICByZXR1cm4gdG9kb0Fyci5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50LnRpdGxlID09PSB0b2RvSXRlbS50aXRsZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFRvZG9JZEJ5VGl0bGUgPSAodGl0bGUpID0+e1xuICAgICAgICByZXR1cm4gdG9kb0Fyci5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50LnRpdGxlID09PSB0aXRsZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZG9XaXRoVGl0bGUgPSAodGl0bGUpID0+e1xuICAgICAgICByZXR1cm4gdG9kb0Fyci5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC50aXRsZSA9PT0gdGl0bGUpO1xuICAgIH1cblxuICAgIHJldHVybntcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHRvZG9BcnIsXG4gICAgICAgIGFkZFRvZG8sXG4gICAgICAgIHJlbW92ZVRvZG8sXG4gICAgICAgIGNyZWF0ZVRvZG8sXG4gICAgICAgIGdldFRvZG9JZEJ5VGl0bGUsXG4gICAgICAgIHJlbW92ZVRvZG9CeVRpdGxlLFxuICAgICAgICB0b2RvV2l0aFRpdGxlLFxuICAgICAgICBzb3J0VG9kb3MsXG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VyRmFjdG9yeSA9ICh1c2VybmFtZSkgPT57XG4gICAgbGV0IHByb2plY3RBcnIgPVtdO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0SXRlbSkgPT57XG4gICAgICAgIHByb2plY3RBcnIucHVzaChwcm9qZWN0SXRlbSk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHRpdGxlKSA9PntcbiAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0RmFjdG9yeSh0aXRsZSkpOyAgICAgICAgXG4gICAgfTtcblxuICAgIGNvbnN0IHByb2plY3RXaXRoVGl0bGUgPSAocHJvamVjdE5hbWUpID0+e1xuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RBcnIuZmluZChlbGVtZW50ID0+ZWxlbWVudC50aXRsZSA9PT0gcHJvamVjdE5hbWUpO1xuICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICB9O1xuXG4gICAgY29uc3QgcHJvamVjdElkV2l0aFRpdGxlID0gKHByb2plY3ROYW1lKSA9PntcbiAgICAgICAgbGV0IGlkID0gcHJvamVjdEFyci5maW5kSW5kZXgoZWxlbWVudCA9PmVsZW1lbnQudGl0bGUgPT09IHByb2plY3ROYW1lKTtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH07XG5cblxuICAgIGNvbnN0IGNyZWF0ZVRvZG8gPSAocHJvamVjdFRpdGxlLCB0b2RvVGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKSA9PntcbiAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0V2l0aFRpdGxlKHByb2plY3RUaXRsZSk7XG4gICAgICAgIGlmKHByb2plY3QgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBwcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkocHJvamVjdFRpdGxlKTtcbiAgICAgICAgICAgIGFkZFByb2plY3QocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdC5jcmVhdGVUb2RvKHRvZG9UaXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRUb2RvID0gKHByb2plY3RUaXRsZSwgdG9kb0l0ZW0pID0+e1xuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RXaXRoVGl0bGUocHJvamVjdFRpdGxlKTtcbiAgICAgICAgaWYocHJvamVjdCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShwcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0LmFkZFRvZG8odG9kb0l0ZW0pO1xuICAgIH07XG5cblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdEl0ZW0pID0+e1xuICAgICAgICBsZXQgaWQgPSBnZXRUb2RvSWQocHJvamVjdEl0ZW0pO1xuICAgICAgICBpZihpZCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIHByb2plY3RBcnIuc3BsaWNlKGlkLCAxKTtcbiAgICB9OyAgIFxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdEJ5VGl0bGUgPSAodGl0bGUpID0+e1xuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RBcnIuZmluZChwcm9qZWN0ID0+IHByb2plY3QudGl0bGUgPT09IHRpdGxlKTtcbiAgICAgICAgaWYocHJvamVjdCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIHJlbW92ZVByb2plY3QocHJvamVjdCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VG9kb0lkID0gKHByb2plY3RJdGVtKSA9PntcbiAgICAgICAgcmV0dXJuIHByb2plY3RBcnIuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC50aXRsZSA9PT0gcHJvamVjdEl0ZW0udGl0bGUpO1xuICAgIH07XG5cbiAgICByZXR1cm57XG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBwcm9qZWN0QXJyLFxuICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICBjcmVhdGVQcm9qZWN0LFxuICAgICAgICByZW1vdmVQcm9qZWN0LFxuICAgICAgICBjcmVhdGVUb2RvLFxuICAgICAgICBhZGRUb2RvLFxuICAgICAgICBwcm9qZWN0V2l0aFRpdGxlLFxuICAgICAgICBwcm9qZWN0SWRXaXRoVGl0bGUsXG4gICAgICAgIHJlbW92ZVByb2plY3RCeVRpdGxlXG4gICAgfTtcbn1cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=