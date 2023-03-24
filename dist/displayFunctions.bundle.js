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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/displayFunctions.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NldHVwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvT2JqZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXJyZW50UHJvamVjdCwgQ3VycmVudFVzZXIsIHNldEN1cnJlbnRQcm9qZWN0LCBzZXRDdXJyZW50VXNlciwgYmFja2Ryb3AgfSBmcm9tIFwiLi9zZXR1cFwiO1xuXG5sZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XG5sZXQgcHJvamVjdFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRlbXBsYXRlXCIpO1xuXG5cbmxldCBlZGl0UHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXByb2plY3QtcG9wdXBcIik7XG5sZXQgZWRpdFRvZG9Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10b2RvLXBvcHVwXCIpO1xuXG5sZXQgY29uZmlybURlbGV0ZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25maXJtLWRlbGV0ZS1wb3B1cFwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cyh1c2VyLCBQcm9qZWN0Q29udGFpbmVyLCBwcm9qZWN0VGVtcGxhdGUpe1xuICAgIGxldCBwcm9qZWN0QXJyID0gdXNlci5wcm9qZWN0QXJyO1xuICAgIFByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBwcm9qZWN0QXJyLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0Q2xvbmUgPSBwcm9qZWN0VGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBwcm9qZWN0Q2xvbmUuY2xhc3NMaXN0LnJlbW92ZShcIm5vZGlzcGxheVwiLCBcInByb2plY3QtdGVtcGxhdGVcIilcbiAgICAgICAgcHJvamVjdENsb25lLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKS5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBwcm9qZWN0Q2xvbmUucXVlcnlTZWxlY3RvcihcIi5kZWxldGVcIik7XG5cbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG5cbiAgICAgICAgICAgIGNvbmZpcm1EZWxldGVQb3B1cC5xdWVyeVNlbGVjdG9yKFwiaDNcIikuaW5uZXJUZXh0ID0gYERlbGV0ZSA+PiR7cHJvamVjdC50aXRsZX08PCA/YDtcbiAgICAgICAgICAgIGRpc3BsYXlQb3B1cChjb25maXJtRGVsZXRlUG9wdXAsYmFja2Ryb3ApO1xuICAgICAgICAgICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGNvbmZpcm1EZWxldGVQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcbiAgICAgICAgICAgIGxldCBjb25maXJtQnV0dG9uID0gY29uZmlybURlbGV0ZVBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybVwiKTtcbiAgICAgICAgXG4gICAgICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICAgICAgaGlkZVBvcHVwKGNvbmZpcm1EZWxldGVQb3B1cCxiYWNrZHJvcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICAgICAgIGhpZGVQb3B1cChjb25maXJtRGVsZXRlUG9wdXAsYmFja2Ryb3ApO1xuXG4gICAgICAgICAgICAgICAgQ3VycmVudFVzZXIucmVtb3ZlUHJvamVjdEJ5VGl0bGUocHJvamVjdC50aXRsZSk7XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFByb2plY3QudGl0bGUgPT09IHByb2plY3QudGl0bGUpIHNldEN1cnJlbnRQcm9qZWN0KHVzZXIucHJvamVjdEFyclt1c2VyLnByb2plY3RBcnIubGVuZ3RoLTFdKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShDdXJyZW50VXNlcikpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVU0VSJywgSlNPTi5zdHJpbmdpZnkoQ3VycmVudFVzZXIpKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5UHJvamVjdHModXNlciwgUHJvamVjdENvbnRhaW5lciwgcHJvamVjdFRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICBpZih1c2VyLnByb2plY3RBcnIubGVuZ3RoID4gMCkgU2VsZWN0ZWRQcm9qZWN0Q2hhbmdlU3R5bGUoY3VycmVudFByb2plY3QpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBlZGl0QnV0dG9uID0gcHJvamVjdENsb25lLnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFwiKTtcblxuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICBlZGl0UHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXRpdGxlXCIpLnZhbHVlID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0UG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtdGl0bGVcIikucGxhY2Vob2xkZXIgPSBwcm9qZWN0LnRpdGxlO1xuXG5cbiAgICAgICAgICAgIGRpc3BsYXlQb3B1cChlZGl0UHJvamVjdFBvcHVwLGJhY2tkcm9wKTtcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0UG9wdXAuZGF0YXNldC50aXRsZSA9IHByb2plY3QudGl0bGU7XG5cbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3RDbG9uZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENsb25lKTtcbiAgICB9KTtcblxuICAgIGlmKHVzZXIucHJvamVjdEFyci5sZW5ndGggPiAwKSBTZWxlY3RlZFByb2plY3RDaGFuZ2VTdHlsZShjdXJyZW50UHJvamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VG9kb3MocHJvamVjdCwgdG9kb0NvbnRhaW5lciwgdG9kb1RlbXBsYXRlKXtcbiAgICBcbiAgICB0b2RvQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgaWYocHJvamVjdCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICBsZXQgcHJpb3JpdHlDb2xvcnMgPSBbXCItLXJcIiwgXCItLWJcIiwgXCItLWdcIl07XG5cblxuICAgIGxldCB0b2RvQXJyID0gcHJvamVjdC50b2RvQXJyO1xuICAgIHRvZG9BcnIuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgbGV0IHRvZG9DbG9uZSA9IHRvZG9UZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGxldCB0b2RvQ2hlY2tib3ggPSB0b2RvQ2xvbmUucXVlcnlTZWxlY3RvcihcIi50b2RvLWNvbXBsZXRlZFwiKTtcblxuXG4gICAgICAgIHRvZG9DbG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwibm9kaXNwbGF5XCIsIFwidG9kby10ZW1wbGF0ZVwiKVxuICAgICAgICB0b2RvQ2xvbmUucXVlcnlTZWxlY3RvcihcIi50b2RvLXRpdGxlXCIpLmlubmVyVGV4dCA9IHRvZG8udGl0bGU7XG4gICAgICAgIHRvZG9DbG9uZS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGVzY3JpcHRpb25cIikuaW5uZXJUZXh0ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgdG9kb0Nsb25lLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kdWVEYXRlXCIpLmlubmVyVGV4dCA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgdG9kb0NoZWNrYm94LmNoZWNrZWQgPSB0b2RvLmNvbXBsZXRlZDtcblxuICAgIFxuICAgICAgICB0b2RvQ2xvbmUuY2xhc3NMaXN0LmFkZChwcmlvcml0eUNvbG9yc1t0b2RvLnByaW9yaXR5XSk7XG5cbiAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IHRvZG9DbG9uZS5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZVwiKTtcblxuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcblxuICAgICAgICAgICAgY29uZmlybURlbGV0ZVBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKS5pbm5lclRleHQgPSBgRGVsZXRlID4+JHt0b2RvLnRpdGxlfTw8ID9gO1xuICAgICAgICAgICAgZGlzcGxheVBvcHVwKGNvbmZpcm1EZWxldGVQb3B1cCxiYWNrZHJvcCk7XG4gICAgICAgICAgICBsZXQgY2FuY2VsQnV0dG9uID0gY29uZmlybURlbGV0ZVBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xuICAgICAgICAgICAgbGV0IGNvbmZpcm1CdXR0b24gPSBjb25maXJtRGVsZXRlUG9wdXAucXVlcnlTZWxlY3RvcihcIi5jb25maXJtXCIpO1xuICAgICAgICBcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgICAgICBoaWRlUG9wdXAoY29uZmlybURlbGV0ZVBvcHVwLGJhY2tkcm9wKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICAgICAgaGlkZVBvcHVwKGNvbmZpcm1EZWxldGVQb3B1cCxiYWNrZHJvcCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhc2RzYWRzYWRhc2RcIik7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3QucmVtb3ZlVG9kb0J5VGl0bGUodG9kby50aXRsZSk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VTRVInLCBKU09OLnN0cmluZ2lmeShDdXJyZW50VXNlcikpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlUb2Rvcyhwcm9qZWN0LCB0b2RvQ29udGFpbmVyLCB0b2RvVGVtcGxhdGUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGVkaXRCdXR0b24gPSB0b2RvQ2xvbmUucXVlcnlTZWxlY3RvcihcIi5lZGl0XCIpO1xuXG4gICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgIGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtdGl0bGVcIikudmFsdWUgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC10aXRsZVwiKS5wbGFjZWhvbGRlciA9IHRvZG8udGl0bGU7XG5cbiAgICAgICAgICAgIGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtZGVzY3JpcHRpb25cIikudmFsdWUgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC1kdWVEYXRlXCIpLnZhbHVlID0gdG9kby5kdWVEYXRlO1xuICAgICAgICAgICAgZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC1wcmlvcml0eVwiKS52YWx1ZSA9IHRvZG8ucHJpb3JpdHk7IFxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRpc3BsYXlQb3B1cChlZGl0VG9kb1BvcHVwLGJhY2tkcm9wKTtcbiAgICAgICAgICAgIGVkaXRUb2RvUG9wdXAuZGF0YXNldC50aXRsZSA9IHRvZG8udGl0bGU7XG5cbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRvZG9DaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgdG9kby5jb21wbGV0ZWQgPSAhdG9kby5jb21wbGV0ZWQ7XG4gICAgICAgICAgICBpZih0b2RvLmNvbXBsZXRlZCkgdG9kb0Nsb25lLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XG4gICAgICAgICAgICBlbHNlIHRvZG9DbG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkXCIpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBpZih0b2RvLmNvbXBsZXRlZCkgdG9kb0Nsb25lLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XG4gICAgICAgIGVsc2UgdG9kb0Nsb25lLmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZWRcIik7XG5cbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ2xvbmUpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0ZWRQcm9qZWN0Q2hhbmdlU3R5bGUocHJvamVjdCl7XG5cbiAgICBpZiAoIXByb2plY3QpIHJldHVybiBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuXG4gICAgbGV0IHRpdGxlID0gcHJvamVjdC50aXRsZTtcbiAgICBsZXQgcHJvamVjdEVsZW1lbnRzID0gIHByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWRpdlwiKTtcbiAgICBwcm9qZWN0RWxlbWVudHMuZm9yRWFjaChwcm9qZWN0RWxlbWVudCA9PiB7XG4gICAgICAgIGxldCB0aXRsZUVsZW1lbnQgPSBwcm9qZWN0RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIik7XG4gICAgICAgIGxldCBwcm9qZWN0RWxlbWVudFRpdGxlID0gbnVsbDtcbiAgICAgICAgaWYodGl0bGVFbGVtZW50ICE9PSBudWxsKSBwcm9qZWN0RWxlbWVudFRpdGxlID0gdGl0bGVFbGVtZW50LmlubmVyVGV4dDtcblxuICAgICAgICBpZihwcm9qZWN0RWxlbWVudFRpdGxlID09PSB0aXRsZSl7XG4gICAgICAgICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVBvcHVwKHBvcHVwRWxlbWVudCwgYmFja2Ryb3Ape1xuICAgIHBvcHVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVQb3B1cChwb3B1cEVsZW1lbnQsIGJhY2tkcm9wKXtcbiAgICBwb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgYmFja2Ryb3AuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG59XG5cblxuXG5cbiBcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5RXJyb3IocG9wdXAsIGVycm9yQ2xhc3MsIGVycm9yVGV4dCl7XG4gICAgcG9wdXAucXVlcnlTZWxlY3RvcihlcnJvckNsYXNzKS5pbm5lclRleHQ9ZXJyb3JUZXh0O1xufSIsImltcG9ydCB7IGRpc3BsYXlQb3B1cCwgaGlkZVBvcHVwLCBkaXNwbGF5RXJyb3IsIGRpc3BsYXlUb2RvcywgU2VsZWN0ZWRQcm9qZWN0Q2hhbmdlU3R5bGUgfSBmcm9tIFwiLi9kaXNwbGF5RnVuY3Rpb25zXCI7XG5pbXBvcnQgeyB0b2RvSXRlbUZhY3RvcnksIHByb2plY3RGYWN0b3J5LCB1c2VyRmFjdG9yeSB9IGZyb20gJy4vdG9kb09iamVjdHMnO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RzIH0gZnJvbSAnLi9kaXNwbGF5RnVuY3Rpb25zJztcblxuXG5leHBvcnQgbGV0IGJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrZHJvcFwiKTtcblxubGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xubGV0IHByb2plY3RUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10ZW1wbGF0ZVwiKTtcblxuXG5sZXQgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb250YWluZXJcIik7XG5sZXQgdG9kb1RlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXRlbXBsYXRlXCIpO1xuXG5cbmxldCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcbmxldCBhZGRQcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtcG9wdXBcIik7XG5cbmxldCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kb1wiKTtcbmxldCBhZGRUb2RvUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tcG9wdXBcIik7XG5cbmxldCBlZGl0UHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXByb2plY3QtcG9wdXBcIik7XG5sZXQgZWRpdFRvZG9Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10b2RvLXBvcHVwXCIpO1xuXG5cblxuZXhwb3J0IGxldCBDdXJyZW50VXNlcjtcbmV4cG9ydCBsZXQgY3VycmVudFByb2plY3Q7XG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFVzZXIodXNlcil7XG4gICAgQ3VycmVudFVzZXIgPSB1c2VyO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KXtcbiAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gICAgZGlzcGxheVByb2plY3RzKEN1cnJlbnRVc2VyLHByb2plY3RDb250YWluZXIscHJvamVjdFRlbXBsYXRlKTtcbiAgICBkaXNwbGF5VG9kb3MoY3VycmVudFByb2plY3QsdG9kb0NvbnRhaW5lcix0b2RvVGVtcGxhdGUpO1xuICAgIFNlbGVjdGVkUHJvamVjdENoYW5nZVN0eWxlKGN1cnJlbnRQcm9qZWN0KTtcbn07XG5cblxubGV0IHJldHJpZXZlZFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVVNFUicpO1xubGV0IHVzZXJKc29uID0gSlNPTi5wYXJzZShyZXRyaWV2ZWRVc2VyKTtcbmNvbnNvbGUubG9nKCdVU0VSOiAnLCApO1xubGV0IHVzZXJcblxuaWYodXNlckpzb24gPT09IG51bGwpe1xuICAgIHVzZXIgPSB1c2VyRmFjdG9yeShcIkd1ZXN0XCIpO1xuICAgIHVzZXIuY3JlYXRlVG9kbyhcIkdldCBBIEpvYlwiLCBcIkxlYXJuIEEgU2tpbGxcIiwgXCJXZWItRGV2ZWxvcG1lbnRcIiwgXCIyMDI0LTAxLTAxXCIsIDApO1xuICAgIHVzZXIuY3JlYXRlVG9kbyhcIkdldCBBIEpvYlwiLCBcIkFwcGx5IEZvciBKb2JzXCIsIFwiXCIsIFwiMjAyNC0wNC0wMVwiLCAxKTtcbiAgICB1c2VyLmNyZWF0ZVRvZG8oXCJHZXQgQSBXaWZlXCIsIFwiRmluZCBBIFdvbWFuXCIsIFwiVXN1YWxseSBJbiBUaGUgU3RyZWV0c1wiLCBcIjIwMjMtMDctMDVcIiwgMCk7XG4gICAgdXNlci5jcmVhdGVUb2RvKFwiR2V0IEEgV2lmZVwiLCBcIlRhbGsgVG8gQSBXb21hblwiLCBcIlVzZSBXb3Jkc1wiLCBcIjIwMjQtMTItMTFcIiwgMSk7XG4gICAgdXNlci5jcmVhdGVUb2RvKFwiR2V0IEEgV2lmZVwiLCBcIkZpbmlzaCBUaGlzIExpc3RcIiwgXCJcIiwgXCJcIiwgMik7XG59ZWxzZSB7XG4gICAgXG4gICAgdXNlciA9IHVzZXJGYWN0b3J5KHVzZXJKc29uLnVzZXJuYW1lKTtcbiAgICBsZXQgcHJvamVjdEFyciA9IHVzZXJKc29uLnByb2plY3RBcnI7XG4gICAgcHJvamVjdEFyci5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHByb2plY3QudGl0bGUpO1xuICAgICAgICB1c2VyLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgIGxldCB0b2RvQXJyID0gcHJvamVjdC50b2RvQXJyO1xuICAgICAgICB0b2RvQXJyLmZvckVhY2godG9kbyA9PntcbiAgICAgICAgICAgIG5ld1Byb2plY3QuY3JlYXRlVG9kbyh0b2RvLnRpdGxlLCB0b2RvLmRlc2NyaXB0aW9uLCB0b2RvLmR1ZURhdGUsIHRvZG8ucHJpb3JpdHksIHRvZG8uY29tcGxldGVkKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cblxuXG5jb25zb2xlLmxvZyh1c2VyKTtcblxuXG5jb25zb2xlLmxvZyhKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHVzZXIpKSk7XG5cbnNldEN1cnJlbnRVc2VyKHVzZXIpO1xuc2V0Q3VycmVudFByb2plY3QoQ3VycmVudFVzZXIucHJvamVjdEFyclswXSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwKCl7XG4gICAgc2V0dXBBZGRCdXR0b25zKCk7XG4gICAgc2V0dXBQb3B1cEJ1dHRvbnMoKTtcblxuXG59XG5cblxuXG5mdW5jdGlvbiBzZXR1cEFkZEJ1dHRvbnMoKXtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcbiAgICAgICAgICAgIGRpc3BsYXlQb3B1cChhZGRQcm9qZWN0UG9wdXAsIGJhY2tkcm9wKTtcbiAgICB9KTtcblxuICAgIGFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xuICAgICAgICAgICAgZGlzcGxheVBvcHVwKGFkZFRvZG9Qb3B1cCwgYmFja2Ryb3ApO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXR1cFBvcHVwQnV0dG9ucygpe1xuICAgIGxldCBhZGRUb2RvQ29uZmlybUJ1dHRvbiA9IGFkZFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1cIik7XG4gICAgbGV0IGFkZFRvZG9DYW5jZWxCdXR0b24gPSBhZGRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG5cbiAgICBhZGRUb2RvQ2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGhpZGVQb3B1cChhZGRUb2RvUG9wdXAsIGJhY2tkcm9wKTtcbiAgICB9KTtcblxuICAgIGFkZFRvZG9Db25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGxldCB0aXRsZSA9IGFkZFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC10aXRsZVwiKS52YWx1ZTtcblxuICAgICAgICBpZihjdXJyZW50UHJvamVjdC5nZXRUb2RvSWRCeVRpdGxlKHRpdGxlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvcihhZGRUb2RvUG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiVGhpcyBUaXRsZSBBbHJlYWR5IEV4aXN0cyFcIik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZih0aXRsZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yKGFkZFRvZG9Qb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJJdCBNdXN0IEhhdmUgQSBUaXRsZSFcIik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBkaXNwbGF5RXJyb3IoYWRkVG9kb1BvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIlwiKTtcblxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBhZGRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICAgIGxldCBkdWVEYXRlID0gYWRkVG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LWR1ZURhdGVcIikudmFsdWU7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGFkZFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC1wcmlvcml0eVwiKS52YWx1ZTtcbiAgICBcbiAgICAgICAgY3VycmVudFByb2plY3QuY3JlYXRlVG9kbyh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LCBmYWxzZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVU0VSJywgSlNPTi5zdHJpbmdpZnkoQ3VycmVudFVzZXIpKTtcbiAgICAgICAgaGlkZVBvcHVwKGFkZFRvZG9Qb3B1cCwgYmFja2Ryb3ApO1xuICAgICAgICBkaXNwbGF5VG9kb3MoY3VycmVudFByb2plY3QsIHRvZG9Db250YWluZXIsIHRvZG9UZW1wbGF0ZSk7XG4gICAgfSk7XG5cblxuICAgIGxldCBhZGRQcm9qZWN0Q29uZmlybUJ1dHRvbiA9IGFkZFByb2plY3RQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1cIik7XG4gICAgbGV0IGFkZFByb2plY3RDYW5jZWxCdXR0b24gPSBhZGRQcm9qZWN0UG9wdXAucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG5cbiAgICBhZGRQcm9qZWN0Q2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGhpZGVQb3B1cChhZGRQcm9qZWN0UG9wdXAsIGJhY2tkcm9wKTtcbiAgICB9KTtcblxuICAgIGFkZFByb2plY3RDb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGxldCB0aXRsZSA9IGFkZFByb2plY3RQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC10aXRsZVwiKS52YWx1ZTtcblxuICAgICAgICBpZihDdXJyZW50VXNlci5wcm9qZWN0SWRXaXRoVGl0bGUodGl0bGUpICE9PSAtMSkge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yKGFkZFByb2plY3RQb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJUaGlzIFRpdGxlIEFscmVhZHkgRXhpc3RzIVwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmKHRpdGxlID09PSBcIlwiKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoYWRkUHJvamVjdFBvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIkl0IE11c3QgSGF2ZSBBIFRpdGxlIVwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXlFcnJvcihhZGRQcm9qZWN0UG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiXCIpO1xuXG4gICAgICAgIEN1cnJlbnRVc2VyLmNyZWF0ZVByb2plY3QodGl0bGUpO1xuICAgICAgICBzZXRDdXJyZW50UHJvamVjdChDdXJyZW50VXNlci5wcm9qZWN0V2l0aFRpdGxlKHRpdGxlKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVU0VSJywgSlNPTi5zdHJpbmdpZnkoQ3VycmVudFVzZXIpKTtcbiAgICAgICAgaGlkZVBvcHVwKGFkZFByb2plY3RQb3B1cCwgYmFja2Ryb3ApO1xuICAgICAgICBkaXNwbGF5UHJvamVjdHModXNlcixwcm9qZWN0Q29udGFpbmVyLHByb2plY3RUZW1wbGF0ZSk7XG4gICAgfSk7XG5cbiAgICBsZXQgZWRpdFByb2plY3RDb25maXJtQnV0dG9uID0gZWRpdFByb2plY3RQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1cIik7XG4gICAgbGV0IGVkaXRQcm9qZWN0Q2FuY2VsQnV0dG9uID0gZWRpdFByb2plY3RQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcblxuICAgIGVkaXRQcm9qZWN0Q2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGhpZGVQb3B1cChlZGl0UHJvamVjdFBvcHVwLCBiYWNrZHJvcCk7XG4gICAgfSk7XG5cbiAgICBlZGl0UHJvamVjdENvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgbGV0IHRpdGxlID0gZWRpdFByb2plY3RQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC10aXRsZVwiKS52YWx1ZTtcblxuICAgICAgICBpZihDdXJyZW50VXNlci5wcm9qZWN0SWRXaXRoVGl0bGUodGl0bGUpICE9PSAtMSkge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yKGVkaXRQcm9qZWN0UG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiVGhpcyBUaXRsZSBBbHJlYWR5IEV4aXN0cyFcIik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZih0aXRsZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yKGVkaXRQcm9qZWN0UG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiSXQgTXVzdCBIYXZlIEEgVGl0bGUhXCIpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheUVycm9yKGVkaXRQcm9qZWN0UG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiXCIpO1xuXG4gICAgICAgIFxuICAgICAgICBDdXJyZW50VXNlci5wcm9qZWN0V2l0aFRpdGxlKGVkaXRQcm9qZWN0UG9wdXAuZGF0YXNldC50aXRsZSkudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VTRVInLCBKU09OLnN0cmluZ2lmeShDdXJyZW50VXNlcikpO1xuICAgICAgICBoaWRlUG9wdXAoZWRpdFByb2plY3RQb3B1cCwgYmFja2Ryb3ApO1xuICAgICAgICBkaXNwbGF5UHJvamVjdHModXNlcixwcm9qZWN0Q29udGFpbmVyLHByb2plY3RUZW1wbGF0ZSk7XG4gICAgfSk7XG5cblxuICAgIGxldCBlZGl0VG9kb0NvbmZpcm1CdXR0b24gPSBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybVwiKTtcbiAgICBsZXQgZWRpdFRvZG9DYW5jZWxCdXR0b24gPSBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xuXG4gICAgZWRpdFRvZG9DYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgaGlkZVBvcHVwKGVkaXRUb2RvUG9wdXAsIGJhY2tkcm9wKTtcbiAgICB9KTtcblxuICAgIGVkaXRUb2RvQ29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICBsZXQgdGl0bGUgPSBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXRpdGxlXCIpLnZhbHVlO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC1wcmlvcml0eVwiKS52YWx1ZTtcblxuXG4gICAgICAgIGlmKGN1cnJlbnRQcm9qZWN0LmdldFRvZG9JZEJ5VGl0bGUodGl0bGUpICE9PSAtMSkge1xuICAgICAgICAgICAgaWYodGl0bGUgIT09IGVkaXRUb2RvUG9wdXAuZGF0YXNldC50aXRsZSl7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoZWRpdFRvZG9Qb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJUaGlzIFRpdGxlIEFscmVhZHkgRXhpc3RzIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZih0aXRsZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yKGVkaXRUb2RvUG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiSXQgTXVzdCBIYXZlIEEgVGl0bGUhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXlFcnJvcihlZGl0VG9kb1BvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIlwiKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhlZGl0VG9kb1BvcHVwLmRhdGFzZXQudGl0bGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC50b2RvV2l0aFRpdGxlKGVkaXRUb2RvUG9wdXAuZGF0YXNldC50aXRsZSkpO1xuXG4gICAgICAgIGxldCBlZGl0ZWRUb2RvID0gY3VycmVudFByb2plY3QudG9kb1dpdGhUaXRsZShlZGl0VG9kb1BvcHVwLmRhdGFzZXQudGl0bGUpO1xuXG4gICAgICAgIGVkaXRlZFRvZG8udGl0bGUgPSB0aXRsZTtcbiAgICAgICAgZWRpdGVkVG9kby5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBlZGl0ZWRUb2RvLmR1ZURhdGUgPSBkdWVEYXRlO1xuXG5cbiAgICAgICAgZWRpdGVkVG9kby5wcmlvcml0eSA9IHByaW9yaXR5O1xuXG4gICAgICAgIGhpZGVQb3B1cChlZGl0VG9kb1BvcHVwLCBiYWNrZHJvcCk7XG5cbiAgICAgICAgY3VycmVudFByb2plY3Quc29ydFRvZG9zKCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVU0VSJywgSlNPTi5zdHJpbmdpZnkoQ3VycmVudFVzZXIpKTtcbiAgICAgICAgZGlzcGxheVRvZG9zKGN1cnJlbnRQcm9qZWN0LHRvZG9Db250YWluZXIsdG9kb1RlbXBsYXRlKTtcbiAgICB9KTtcbiAgICBcblxuXG59XG5cblxuXG4iLCJcbmV4cG9ydCBjb25zdCB0b2RvSXRlbUZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKSA9PntcbiAgICByZXR1cm57XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIGNvbXBsZXRlZFxuICAgIH07XG59O1xuXG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0RmFjdG9yeSA9ICh0aXRsZSkgPT57XG4gICAgbGV0IHRvZG9BcnIgPSBbXTtcblxuICAgIGNvbnN0IGFkZFRvZG8gPSAodG9kb0l0ZW0pID0+e1xuICAgICAgICB0b2RvQXJyLnB1c2godG9kb0l0ZW0pO1xuICAgICAgICBzb3J0VG9kb3MoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc29ydFRvZG9zID0gKCk9PntcbiAgICAgICAgdG9kb0Fyci5zb3J0KHNvcnRGbik7XG4gICAgICAgIFxuICAgIH07XG5cbiAgICBjb25zdCBzb3J0Rm4gPSAoYSxiKSA9PntcbiAgICAgICAgaWYoYS5wcmlvcml0eSA8IGIucHJpb3JpdHkpIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCkgPT57XG4gICAgICAgIGlmKGNvbXBsZXRlZCA9PT0gbnVsbCB8fCBjb21wbGV0ZWQgPT09IHVuZGVmaW5lZCkgY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIGxldCBuZXdUb2RvSXRlbSA9IHRvZG9JdGVtRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpO1xuICAgICAgICBhZGRUb2RvKG5ld1RvZG9JdGVtKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlVG9kbyA9ICh0b2RvSXRlbSkgPT57XG4gICAgICAgIGxldCBpZCA9IGdldFRvZG9JZCh0b2RvSXRlbSk7XG4gICAgICAgIGlmKGlkID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgdG9kb0Fyci5zcGxpY2UoaWQsIDEpO1xuICAgIH07ICAgXG5cbiAgICBjb25zdCByZW1vdmVUb2RvQnlUaXRsZSA9ICh0aXRsZSkgPT57XG4gICAgICAgIGxldCB0b2RvID0gdG9kb0Fyci5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC50aXRsZSA9PT0gdGl0bGUpO1xuICAgICAgICBpZih0b2RvID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgcmVtb3ZlVG9kbyh0b2RvKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VG9kb0lkID0gKHRvZG9JdGVtKSA9PntcbiAgICAgICAgcmV0dXJuIHRvZG9BcnIuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC50aXRsZSA9PT0gdG9kb0l0ZW0udGl0bGUpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRUb2RvSWRCeVRpdGxlID0gKHRpdGxlKSA9PntcbiAgICAgICAgcmV0dXJuIHRvZG9BcnIuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC50aXRsZSA9PT0gdGl0bGUpO1xuICAgIH07XG5cbiAgICBjb25zdCB0b2RvV2l0aFRpdGxlID0gKHRpdGxlKSA9PntcbiAgICAgICAgcmV0dXJuIHRvZG9BcnIuZmluZChlbGVtZW50ID0+IGVsZW1lbnQudGl0bGUgPT09IHRpdGxlKTtcbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIHRpdGxlLFxuICAgICAgICB0b2RvQXJyLFxuICAgICAgICBhZGRUb2RvLFxuICAgICAgICByZW1vdmVUb2RvLFxuICAgICAgICBjcmVhdGVUb2RvLFxuICAgICAgICBnZXRUb2RvSWRCeVRpdGxlLFxuICAgICAgICByZW1vdmVUb2RvQnlUaXRsZSxcbiAgICAgICAgdG9kb1dpdGhUaXRsZSxcbiAgICAgICAgc29ydFRvZG9zLFxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlckZhY3RvcnkgPSAodXNlcm5hbWUpID0+e1xuICAgIGxldCBwcm9qZWN0QXJyID1bXTtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdEl0ZW0pID0+e1xuICAgICAgICBwcm9qZWN0QXJyLnB1c2gocHJvamVjdEl0ZW0pO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9ICh0aXRsZSkgPT57XG4gICAgICAgIGFkZFByb2plY3QocHJvamVjdEZhY3RvcnkodGl0bGUpKTsgICAgICAgIFxuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0V2l0aFRpdGxlID0gKHByb2plY3ROYW1lKSA9PntcbiAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0QXJyLmZpbmQoZWxlbWVudCA9PmVsZW1lbnQudGl0bGUgPT09IHByb2plY3ROYW1lKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfTtcblxuICAgIGNvbnN0IHByb2plY3RJZFdpdGhUaXRsZSA9IChwcm9qZWN0TmFtZSkgPT57XG4gICAgICAgIGxldCBpZCA9IHByb2plY3RBcnIuZmluZEluZGV4KGVsZW1lbnQgPT5lbGVtZW50LnRpdGxlID09PSBwcm9qZWN0TmFtZSk7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9O1xuXG5cbiAgICBjb25zdCBjcmVhdGVUb2RvID0gKHByb2plY3RUaXRsZSwgdG9kb1RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCkgPT57XG4gICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdFdpdGhUaXRsZShwcm9qZWN0VGl0bGUpO1xuICAgICAgICBpZihwcm9qZWN0ID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgcHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHByb2plY3RUaXRsZSk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3QuY3JlYXRlVG9kbyh0b2RvVGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkVG9kbyA9IChwcm9qZWN0VGl0bGUsIHRvZG9JdGVtKSA9PntcbiAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0V2l0aFRpdGxlKHByb2plY3RUaXRsZSk7XG4gICAgICAgIGlmKHByb2plY3QgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBwcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkocHJvamVjdFRpdGxlKTtcbiAgICAgICAgICAgIGFkZFByb2plY3QocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdC5hZGRUb2RvKHRvZG9JdGVtKTtcbiAgICB9O1xuXG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3RJdGVtKSA9PntcbiAgICAgICAgbGV0IGlkID0gZ2V0VG9kb0lkKHByb2plY3RJdGVtKTtcbiAgICAgICAgaWYoaWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgICBwcm9qZWN0QXJyLnNwbGljZShpZCwgMSk7XG4gICAgfTsgICBcblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3RCeVRpdGxlID0gKHRpdGxlKSA9PntcbiAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0QXJyLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlID09PSB0aXRsZSk7XG4gICAgICAgIGlmKHByb2plY3QgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgICByZW1vdmVQcm9qZWN0KHByb2plY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFRvZG9JZCA9IChwcm9qZWN0SXRlbSkgPT57XG4gICAgICAgIHJldHVybiBwcm9qZWN0QXJyLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQudGl0bGUgPT09IHByb2plY3RJdGVtLnRpdGxlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJue1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcHJvamVjdEFycixcbiAgICAgICAgYWRkUHJvamVjdCxcbiAgICAgICAgY3JlYXRlUHJvamVjdCxcbiAgICAgICAgcmVtb3ZlUHJvamVjdCxcbiAgICAgICAgY3JlYXRlVG9kbyxcbiAgICAgICAgYWRkVG9kbyxcbiAgICAgICAgcHJvamVjdFdpdGhUaXRsZSxcbiAgICAgICAgcHJvamVjdElkV2l0aFRpdGxlLFxuICAgICAgICByZW1vdmVQcm9qZWN0QnlUaXRsZVxuICAgIH07XG59XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9