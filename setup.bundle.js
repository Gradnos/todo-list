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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/setup.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5RnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zZXR1cC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb09iamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VycmVudFByb2plY3QsIEN1cnJlbnRVc2VyLCBzZXRDdXJyZW50UHJvamVjdCwgc2V0Q3VycmVudFVzZXIsIGJhY2tkcm9wIH0gZnJvbSBcIi4vc2V0dXBcIjtcblxubGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xubGV0IHByb2plY3RUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10ZW1wbGF0ZVwiKTtcblxuXG5sZXQgZWRpdFByb2plY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1wcm9qZWN0LXBvcHVwXCIpO1xubGV0IGVkaXRUb2RvUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdG9kby1wb3B1cFwiKTtcblxubGV0IGNvbmZpcm1EZWxldGVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybS1kZWxldGUtcG9wdXBcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHModXNlciwgUHJvamVjdENvbnRhaW5lciwgcHJvamVjdFRlbXBsYXRlKXtcbiAgICBsZXQgcHJvamVjdEFyciA9IHVzZXIucHJvamVjdEFycjtcbiAgICBQcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgcHJvamVjdEFyci5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdENsb25lID0gcHJvamVjdFRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgcHJvamVjdENsb25lLmNsYXNzTGlzdC5yZW1vdmUoXCJub2Rpc3BsYXlcIiwgXCJwcm9qZWN0LXRlbXBsYXRlXCIpXG4gICAgICAgIHByb2plY3RDbG9uZS5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIikuaW5uZXJUZXh0ID0gcHJvamVjdC50aXRsZTtcblxuICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gcHJvamVjdENsb25lLnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlXCIpO1xuXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuXG4gICAgICAgICAgICBjb25maXJtRGVsZXRlUG9wdXAucXVlcnlTZWxlY3RvcihcImgzXCIpLmlubmVyVGV4dCA9IGBEZWxldGUgPj4ke3Byb2plY3QudGl0bGV9PDwgP2A7XG4gICAgICAgICAgICBkaXNwbGF5UG9wdXAoY29uZmlybURlbGV0ZVBvcHVwLGJhY2tkcm9wKTtcbiAgICAgICAgICAgIGxldCBjYW5jZWxCdXR0b24gPSBjb25maXJtRGVsZXRlUG9wdXAucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG4gICAgICAgICAgICBsZXQgY29uZmlybUJ1dHRvbiA9IGNvbmZpcm1EZWxldGVQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1cIik7XG4gICAgICAgIFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICAgICAgIGhpZGVQb3B1cChjb25maXJtRGVsZXRlUG9wdXAsYmFja2Ryb3ApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgICAgICBoaWRlUG9wdXAoY29uZmlybURlbGV0ZVBvcHVwLGJhY2tkcm9wKTtcblxuICAgICAgICAgICAgICAgIEN1cnJlbnRVc2VyLnJlbW92ZVByb2plY3RCeVRpdGxlKHByb2plY3QudGl0bGUpO1xuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRQcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0LnRpdGxlKSBzZXRDdXJyZW50UHJvamVjdCh1c2VyLnByb2plY3RBcnJbdXNlci5wcm9qZWN0QXJyLmxlbmd0aC0xXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoQ3VycmVudFVzZXIpKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVNFUicsIEpTT04uc3RyaW5naWZ5KEN1cnJlbnRVc2VyKSk7XG4gICAgICAgICAgICAgICAgZGlzcGxheVByb2plY3RzKHVzZXIsIFByb2plY3RDb250YWluZXIsIHByb2plY3RUZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgaWYodXNlci5wcm9qZWN0QXJyLmxlbmd0aCA+IDApIFNlbGVjdGVkUHJvamVjdENoYW5nZVN0eWxlKGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZWRpdEJ1dHRvbiA9IHByb2plY3RDbG9uZS5xdWVyeVNlbGVjdG9yKFwiLmVkaXRcIik7XG5cbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgZWRpdFByb2plY3RQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC10aXRsZVwiKS52YWx1ZSA9IHByb2plY3QudGl0bGU7XG4gICAgICAgICAgICBlZGl0UHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXRpdGxlXCIpLnBsYWNlaG9sZGVyID0gcHJvamVjdC50aXRsZTtcblxuXG4gICAgICAgICAgICBkaXNwbGF5UG9wdXAoZWRpdFByb2plY3RQb3B1cCxiYWNrZHJvcCk7XG4gICAgICAgICAgICBlZGl0UHJvamVjdFBvcHVwLmRhdGFzZXQudGl0bGUgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICBwcm9qZWN0Q2xvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICBQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDbG9uZSk7XG4gICAgfSk7XG5cbiAgICBpZih1c2VyLnByb2plY3RBcnIubGVuZ3RoID4gMCkgU2VsZWN0ZWRQcm9qZWN0Q2hhbmdlU3R5bGUoY3VycmVudFByb2plY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvZG9zKHByb2plY3QsIHRvZG9Db250YWluZXIsIHRvZG9UZW1wbGF0ZSl7XG4gICAgXG4gICAgdG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGlmKHByb2plY3QgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgbGV0IHByaW9yaXR5Q29sb3JzID0gW1wiLS1yXCIsIFwiLS1iXCIsIFwiLS1nXCJdO1xuXG5cbiAgICBsZXQgdG9kb0FyciA9IHByb2plY3QudG9kb0FycjtcbiAgICB0b2RvQXJyLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGxldCB0b2RvQ2xvbmUgPSB0b2RvVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBsZXQgdG9kb0NoZWNrYm94ID0gdG9kb0Nsb25lLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb21wbGV0ZWRcIik7XG5cblxuICAgICAgICB0b2RvQ2xvbmUuY2xhc3NMaXN0LnJlbW92ZShcIm5vZGlzcGxheVwiLCBcInRvZG8tdGVtcGxhdGVcIilcbiAgICAgICAgdG9kb0Nsb25lLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10aXRsZVwiKS5pbm5lclRleHQgPSB0b2RvLnRpdGxlO1xuICAgICAgICB0b2RvQ2xvbmUucXVlcnlTZWxlY3RvcihcIi50b2RvLWRlc2NyaXB0aW9uXCIpLmlubmVyVGV4dCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgIHRvZG9DbG9uZS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZHVlRGF0ZVwiKS5pbm5lclRleHQgPSB0b2RvLmR1ZURhdGU7XG4gICAgICAgIHRvZG9DaGVja2JveC5jaGVja2VkID0gdG9kby5jb21wbGV0ZWQ7XG5cbiAgICBcbiAgICAgICAgdG9kb0Nsb25lLmNsYXNzTGlzdC5hZGQocHJpb3JpdHlDb2xvcnNbdG9kby5wcmlvcml0eV0pO1xuXG4gICAgICAgIGxldCBkZWxldGVCdXR0b24gPSB0b2RvQ2xvbmUucXVlcnlTZWxlY3RvcihcIi5kZWxldGVcIik7XG5cbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG5cbiAgICAgICAgICAgIGNvbmZpcm1EZWxldGVQb3B1cC5xdWVyeVNlbGVjdG9yKFwiaDNcIikuaW5uZXJUZXh0ID0gYERlbGV0ZSA+PiR7dG9kby50aXRsZX08PCA/YDtcbiAgICAgICAgICAgIGRpc3BsYXlQb3B1cChjb25maXJtRGVsZXRlUG9wdXAsYmFja2Ryb3ApO1xuICAgICAgICAgICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGNvbmZpcm1EZWxldGVQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcbiAgICAgICAgICAgIGxldCBjb25maXJtQnV0dG9uID0gY29uZmlybURlbGV0ZVBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybVwiKTtcbiAgICAgICAgXG4gICAgICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICAgICAgaGlkZVBvcHVwKGNvbmZpcm1EZWxldGVQb3B1cCxiYWNrZHJvcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICAgICAgIGhpZGVQb3B1cChjb25maXJtRGVsZXRlUG9wdXAsYmFja2Ryb3ApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXNkc2Fkc2FkYXNkXCIpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LnJlbW92ZVRvZG9CeVRpdGxlKHRvZG8udGl0bGUpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVU0VSJywgSlNPTi5zdHJpbmdpZnkoQ3VycmVudFVzZXIpKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5VG9kb3MocHJvamVjdCwgdG9kb0NvbnRhaW5lciwgdG9kb1RlbXBsYXRlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBlZGl0QnV0dG9uID0gdG9kb0Nsb25lLnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFwiKTtcblxuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LXRpdGxlXCIpLnZhbHVlID0gdG9kby50aXRsZTtcbiAgICAgICAgICAgIGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtdGl0bGVcIikucGxhY2Vob2xkZXIgPSB0b2RvLnRpdGxlO1xuXG4gICAgICAgICAgICBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LWRlc2NyaXB0aW9uXCIpLnZhbHVlID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtZHVlRGF0ZVwiKS52YWx1ZSA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgICAgIGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtcHJpb3JpdHlcIikudmFsdWUgPSB0b2RvLnByaW9yaXR5OyBcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBkaXNwbGF5UG9wdXAoZWRpdFRvZG9Qb3B1cCxiYWNrZHJvcCk7XG4gICAgICAgICAgICBlZGl0VG9kb1BvcHVwLmRhdGFzZXQudGl0bGUgPSB0b2RvLnRpdGxlO1xuXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0b2RvQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgIHRvZG8uY29tcGxldGVkID0gIXRvZG8uY29tcGxldGVkO1xuICAgICAgICAgICAgaWYodG9kby5jb21wbGV0ZWQpIHRvZG9DbG9uZS5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgICAgICAgICAgZWxzZSB0b2RvQ2xvbmUuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgaWYodG9kby5jb21wbGV0ZWQpIHRvZG9DbG9uZS5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgICAgICBlbHNlIHRvZG9DbG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkXCIpO1xuXG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Nsb25lKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdGVkUHJvamVjdENoYW5nZVN0eWxlKHByb2plY3Qpe1xuXG4gICAgaWYgKCFwcm9qZWN0KSByZXR1cm4gY29uc29sZS5sb2coXCJlcnJvclwiKTtcblxuICAgIGxldCB0aXRsZSA9IHByb2plY3QudGl0bGU7XG4gICAgbGV0IHByb2plY3RFbGVtZW50cyA9ICBwcm9qZWN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1kaXZcIik7XG4gICAgcHJvamVjdEVsZW1lbnRzLmZvckVhY2gocHJvamVjdEVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgdGl0bGVFbGVtZW50ID0gcHJvamVjdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpO1xuICAgICAgICBsZXQgcHJvamVjdEVsZW1lbnRUaXRsZSA9IG51bGw7XG4gICAgICAgIGlmKHRpdGxlRWxlbWVudCAhPT0gbnVsbCkgcHJvamVjdEVsZW1lbnRUaXRsZSA9IHRpdGxlRWxlbWVudC5pbm5lclRleHQ7XG5cbiAgICAgICAgaWYocHJvamVjdEVsZW1lbnRUaXRsZSA9PT0gdGl0bGUpe1xuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQb3B1cChwb3B1cEVsZW1lbnQsIGJhY2tkcm9wKXtcbiAgICBwb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlUG9wdXAocG9wdXBFbGVtZW50LCBiYWNrZHJvcCl7XG4gICAgcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xufVxuXG5cblxuXG4gXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUVycm9yKHBvcHVwLCBlcnJvckNsYXNzLCBlcnJvclRleHQpe1xuICAgIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoZXJyb3JDbGFzcykuaW5uZXJUZXh0PWVycm9yVGV4dDtcbn0iLCJpbXBvcnQgeyBkaXNwbGF5UG9wdXAsIGhpZGVQb3B1cCwgZGlzcGxheUVycm9yLCBkaXNwbGF5VG9kb3MsIFNlbGVjdGVkUHJvamVjdENoYW5nZVN0eWxlIH0gZnJvbSBcIi4vZGlzcGxheUZ1bmN0aW9uc1wiO1xuaW1wb3J0IHsgdG9kb0l0ZW1GYWN0b3J5LCBwcm9qZWN0RmFjdG9yeSwgdXNlckZhY3RvcnkgfSBmcm9tICcuL3RvZG9PYmplY3RzJztcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0cyB9IGZyb20gJy4vZGlzcGxheUZ1bmN0aW9ucyc7XG5cblxuZXhwb3J0IGxldCBiYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFja2Ryb3BcIik7XG5cbmxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKTtcbmxldCBwcm9qZWN0VGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGVtcGxhdGVcIik7XG5cblxubGV0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tY29udGFpbmVyXCIpO1xubGV0IHRvZG9UZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10ZW1wbGF0ZVwiKTtcblxuXG5sZXQgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIik7XG5sZXQgYWRkUHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXBvcHVwXCIpO1xuXG5sZXQgYWRkVG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG9cIik7XG5sZXQgYWRkVG9kb1BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXBvcHVwXCIpO1xuXG5sZXQgZWRpdFByb2plY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1wcm9qZWN0LXBvcHVwXCIpO1xubGV0IGVkaXRUb2RvUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdG9kby1wb3B1cFwiKTtcblxuXG5cbmV4cG9ydCBsZXQgQ3VycmVudFVzZXI7XG5leHBvcnQgbGV0IGN1cnJlbnRQcm9qZWN0O1xuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRVc2VyKHVzZXIpe1xuICAgIEN1cnJlbnRVc2VyID0gdXNlcjtcbn07XG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFByb2plY3QocHJvamVjdCl7XG4gICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICAgIGRpc3BsYXlQcm9qZWN0cyhDdXJyZW50VXNlcixwcm9qZWN0Q29udGFpbmVyLHByb2plY3RUZW1wbGF0ZSk7XG4gICAgZGlzcGxheVRvZG9zKGN1cnJlbnRQcm9qZWN0LHRvZG9Db250YWluZXIsdG9kb1RlbXBsYXRlKTtcbiAgICBTZWxlY3RlZFByb2plY3RDaGFuZ2VTdHlsZShjdXJyZW50UHJvamVjdCk7XG59O1xuXG5cbmxldCByZXRyaWV2ZWRVc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1VTRVInKTtcbmxldCB1c2VySnNvbiA9IEpTT04ucGFyc2UocmV0cmlldmVkVXNlcik7XG5jb25zb2xlLmxvZygnVVNFUjogJywgKTtcbmxldCB1c2VyXG5cbmlmKHVzZXJKc29uID09PSBudWxsKXtcbiAgICB1c2VyID0gdXNlckZhY3RvcnkoXCJHdWVzdFwiKTtcbiAgICB1c2VyLmNyZWF0ZVRvZG8oXCJHZXQgQSBKb2JcIiwgXCJMZWFybiBBIFNraWxsXCIsIFwiV2ViLURldmVsb3BtZW50XCIsIFwiMjAyNC0wMS0wMVwiLCAwKTtcbiAgICB1c2VyLmNyZWF0ZVRvZG8oXCJHZXQgQSBKb2JcIiwgXCJBcHBseSBGb3IgSm9ic1wiLCBcIlwiLCBcIjIwMjQtMDQtMDFcIiwgMSk7XG4gICAgdXNlci5jcmVhdGVUb2RvKFwiR2V0IEEgV2lmZVwiLCBcIkZpbmQgQSBXb21hblwiLCBcIlVzdWFsbHkgSW4gVGhlIFN0cmVldHNcIiwgXCIyMDIzLTA3LTA1XCIsIDApO1xuICAgIHVzZXIuY3JlYXRlVG9kbyhcIkdldCBBIFdpZmVcIiwgXCJUYWxrIFRvIEEgV29tYW5cIiwgXCJVc2UgV29yZHNcIiwgXCIyMDI0LTEyLTExXCIsIDEpO1xuICAgIHVzZXIuY3JlYXRlVG9kbyhcIkdldCBBIFdpZmVcIiwgXCJGaW5pc2ggVGhpcyBMaXN0XCIsIFwiXCIsIFwiXCIsIDIpO1xufWVsc2Uge1xuICAgIFxuICAgIHVzZXIgPSB1c2VyRmFjdG9yeSh1c2VySnNvbi51c2VybmFtZSk7XG4gICAgbGV0IHByb2plY3RBcnIgPSB1c2VySnNvbi5wcm9qZWN0QXJyO1xuICAgIHByb2plY3RBcnIuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeShwcm9qZWN0LnRpdGxlKTtcbiAgICAgICAgdXNlci5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgICBsZXQgdG9kb0FyciA9IHByb2plY3QudG9kb0FycjtcbiAgICAgICAgdG9kb0Fyci5mb3JFYWNoKHRvZG8gPT57XG4gICAgICAgICAgICBuZXdQcm9qZWN0LmNyZWF0ZVRvZG8odG9kby50aXRsZSwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5kdWVEYXRlLCB0b2RvLnByaW9yaXR5LCB0b2RvLmNvbXBsZXRlZCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5cblxuY29uc29sZS5sb2codXNlcik7XG5cblxuY29uc29sZS5sb2coSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh1c2VyKSkpO1xuXG5zZXRDdXJyZW50VXNlcih1c2VyKTtcbnNldEN1cnJlbnRQcm9qZWN0KEN1cnJlbnRVc2VyLnByb2plY3RBcnJbMF0pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cCgpe1xuICAgIHNldHVwQWRkQnV0dG9ucygpO1xuICAgIHNldHVwUG9wdXBCdXR0b25zKCk7XG5cblxufVxuXG5cblxuZnVuY3Rpb24gc2V0dXBBZGRCdXR0b25zKCl7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XG4gICAgICAgICAgICBkaXNwbGF5UG9wdXAoYWRkUHJvamVjdFBvcHVwLCBiYWNrZHJvcCk7XG4gICAgfSk7XG5cbiAgICBhZGRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcbiAgICAgICAgICAgIGRpc3BsYXlQb3B1cChhZGRUb2RvUG9wdXAsIGJhY2tkcm9wKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0dXBQb3B1cEJ1dHRvbnMoKXtcbiAgICBsZXQgYWRkVG9kb0NvbmZpcm1CdXR0b24gPSBhZGRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5jb25maXJtXCIpO1xuICAgIGxldCBhZGRUb2RvQ2FuY2VsQnV0dG9uID0gYWRkVG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xuXG4gICAgYWRkVG9kb0NhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICBoaWRlUG9wdXAoYWRkVG9kb1BvcHVwLCBiYWNrZHJvcCk7XG4gICAgfSk7XG5cbiAgICBhZGRUb2RvQ29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICBsZXQgdGl0bGUgPSBhZGRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtdGl0bGVcIikudmFsdWU7XG5cbiAgICAgICAgaWYoY3VycmVudFByb2plY3QuZ2V0VG9kb0lkQnlUaXRsZSh0aXRsZSkgIT09IC0xKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IoYWRkVG9kb1BvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIlRoaXMgVGl0bGUgQWxyZWFkeSBFeGlzdHMhXCIpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYodGl0bGUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvcihhZGRUb2RvUG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiSXQgTXVzdCBIYXZlIEEgVGl0bGUhXCIpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheUVycm9yKGFkZFRvZG9Qb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJcIik7XG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gYWRkVG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IGFkZFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC1kdWVEYXRlXCIpLnZhbHVlO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBhZGRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtcHJpb3JpdHlcIikudmFsdWU7XG4gICAgXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LmNyZWF0ZVRvZG8odGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSwgZmFsc2UpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVNFUicsIEpTT04uc3RyaW5naWZ5KEN1cnJlbnRVc2VyKSk7XG4gICAgICAgIGhpZGVQb3B1cChhZGRUb2RvUG9wdXAsIGJhY2tkcm9wKTtcbiAgICAgICAgZGlzcGxheVRvZG9zKGN1cnJlbnRQcm9qZWN0LCB0b2RvQ29udGFpbmVyLCB0b2RvVGVtcGxhdGUpO1xuICAgIH0pO1xuXG5cbiAgICBsZXQgYWRkUHJvamVjdENvbmZpcm1CdXR0b24gPSBhZGRQcm9qZWN0UG9wdXAucXVlcnlTZWxlY3RvcihcIi5jb25maXJtXCIpO1xuICAgIGxldCBhZGRQcm9qZWN0Q2FuY2VsQnV0dG9uID0gYWRkUHJvamVjdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xuXG4gICAgYWRkUHJvamVjdENhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICBoaWRlUG9wdXAoYWRkUHJvamVjdFBvcHVwLCBiYWNrZHJvcCk7XG4gICAgfSk7XG5cbiAgICBhZGRQcm9qZWN0Q29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICBsZXQgdGl0bGUgPSBhZGRQcm9qZWN0UG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtdGl0bGVcIikudmFsdWU7XG5cbiAgICAgICAgaWYoQ3VycmVudFVzZXIucHJvamVjdElkV2l0aFRpdGxlKHRpdGxlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvcihhZGRQcm9qZWN0UG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiVGhpcyBUaXRsZSBBbHJlYWR5IEV4aXN0cyFcIik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZih0aXRsZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yKGFkZFByb2plY3RQb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJJdCBNdXN0IEhhdmUgQSBUaXRsZSFcIik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBkaXNwbGF5RXJyb3IoYWRkUHJvamVjdFBvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIlwiKTtcblxuICAgICAgICBDdXJyZW50VXNlci5jcmVhdGVQcm9qZWN0KHRpdGxlKTtcbiAgICAgICAgc2V0Q3VycmVudFByb2plY3QoQ3VycmVudFVzZXIucHJvamVjdFdpdGhUaXRsZSh0aXRsZSkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVNFUicsIEpTT04uc3RyaW5naWZ5KEN1cnJlbnRVc2VyKSk7XG4gICAgICAgIGhpZGVQb3B1cChhZGRQcm9qZWN0UG9wdXAsIGJhY2tkcm9wKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKHVzZXIscHJvamVjdENvbnRhaW5lcixwcm9qZWN0VGVtcGxhdGUpO1xuICAgIH0pO1xuXG4gICAgbGV0IGVkaXRQcm9qZWN0Q29uZmlybUJ1dHRvbiA9IGVkaXRQcm9qZWN0UG9wdXAucXVlcnlTZWxlY3RvcihcIi5jb25maXJtXCIpO1xuICAgIGxldCBlZGl0UHJvamVjdENhbmNlbEJ1dHRvbiA9IGVkaXRQcm9qZWN0UG9wdXAucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG5cbiAgICBlZGl0UHJvamVjdENhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICBoaWRlUG9wdXAoZWRpdFByb2plY3RQb3B1cCwgYmFja2Ryb3ApO1xuICAgIH0pO1xuXG4gICAgZWRpdFByb2plY3RDb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGxldCB0aXRsZSA9IGVkaXRQcm9qZWN0UG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtdGl0bGVcIikudmFsdWU7XG5cbiAgICAgICAgaWYoQ3VycmVudFVzZXIucHJvamVjdElkV2l0aFRpdGxlKHRpdGxlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvcihlZGl0UHJvamVjdFBvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIlRoaXMgVGl0bGUgQWxyZWFkeSBFeGlzdHMhXCIpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYodGl0bGUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvcihlZGl0UHJvamVjdFBvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIkl0IE11c3QgSGF2ZSBBIFRpdGxlIVwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXlFcnJvcihlZGl0UHJvamVjdFBvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIlwiKTtcblxuICAgICAgICBcbiAgICAgICAgQ3VycmVudFVzZXIucHJvamVjdFdpdGhUaXRsZShlZGl0UHJvamVjdFBvcHVwLmRhdGFzZXQudGl0bGUpLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVU0VSJywgSlNPTi5zdHJpbmdpZnkoQ3VycmVudFVzZXIpKTtcbiAgICAgICAgaGlkZVBvcHVwKGVkaXRQcm9qZWN0UG9wdXAsIGJhY2tkcm9wKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKHVzZXIscHJvamVjdENvbnRhaW5lcixwcm9qZWN0VGVtcGxhdGUpO1xuICAgIH0pO1xuXG5cbiAgICBsZXQgZWRpdFRvZG9Db25maXJtQnV0dG9uID0gZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1cIik7XG4gICAgbGV0IGVkaXRUb2RvQ2FuY2VsQnV0dG9uID0gZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcblxuICAgIGVkaXRUb2RvQ2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgIGhpZGVQb3B1cChlZGl0VG9kb1BvcHVwLCBiYWNrZHJvcCk7XG4gICAgfSk7XG5cbiAgICBlZGl0VG9kb0NvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgbGV0IHRpdGxlID0gZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC10aXRsZVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZWRpdFRvZG9Qb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmlwdC1kZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBlZGl0VG9kb1BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaXB0LWR1ZURhdGVcIikudmFsdWU7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGVkaXRUb2RvUG9wdXAucXVlcnlTZWxlY3RvcihcIi5pcHQtcHJpb3JpdHlcIikudmFsdWU7XG5cblxuICAgICAgICBpZihjdXJyZW50UHJvamVjdC5nZXRUb2RvSWRCeVRpdGxlKHRpdGxlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGlmKHRpdGxlICE9PSBlZGl0VG9kb1BvcHVwLmRhdGFzZXQudGl0bGUpe1xuICAgICAgICAgICAgZGlzcGxheUVycm9yKGVkaXRUb2RvUG9wdXAsIFwiLnRpdGxlLWVycm9yXCIsIFwiVGhpcyBUaXRsZSBBbHJlYWR5IEV4aXN0cyFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodGl0bGUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvcihlZGl0VG9kb1BvcHVwLCBcIi50aXRsZS1lcnJvclwiLCBcIkl0IE11c3QgSGF2ZSBBIFRpdGxlIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkaXNwbGF5RXJyb3IoZWRpdFRvZG9Qb3B1cCwgXCIudGl0bGUtZXJyb3JcIiwgXCJcIik7XG5cbiAgICAgICAgY29uc29sZS5sb2coZWRpdFRvZG9Qb3B1cC5kYXRhc2V0LnRpdGxlKTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QudG9kb1dpdGhUaXRsZShlZGl0VG9kb1BvcHVwLmRhdGFzZXQudGl0bGUpKTtcblxuICAgICAgICBsZXQgZWRpdGVkVG9kbyA9IGN1cnJlbnRQcm9qZWN0LnRvZG9XaXRoVGl0bGUoZWRpdFRvZG9Qb3B1cC5kYXRhc2V0LnRpdGxlKTtcblxuICAgICAgICBlZGl0ZWRUb2RvLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIGVkaXRlZFRvZG8uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgZWRpdGVkVG9kby5kdWVEYXRlID0gZHVlRGF0ZTtcblxuXG4gICAgICAgIGVkaXRlZFRvZG8ucHJpb3JpdHkgPSBwcmlvcml0eTtcblxuICAgICAgICBoaWRlUG9wdXAoZWRpdFRvZG9Qb3B1cCwgYmFja2Ryb3ApO1xuXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LnNvcnRUb2RvcygpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVNFUicsIEpTT04uc3RyaW5naWZ5KEN1cnJlbnRVc2VyKSk7XG4gICAgICAgIGRpc3BsYXlUb2RvcyhjdXJyZW50UHJvamVjdCx0b2RvQ29udGFpbmVyLHRvZG9UZW1wbGF0ZSk7XG4gICAgfSk7XG4gICAgXG5cblxufVxuXG5cblxuIiwiXG5leHBvcnQgY29uc3QgdG9kb0l0ZW1GYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCkgPT57XG4gICAgcmV0dXJue1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBjb21wbGV0ZWRcbiAgICB9O1xufTtcblxuXG5leHBvcnQgY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUpID0+e1xuICAgIGxldCB0b2RvQXJyID0gW107XG5cbiAgICBjb25zdCBhZGRUb2RvID0gKHRvZG9JdGVtKSA9PntcbiAgICAgICAgdG9kb0Fyci5wdXNoKHRvZG9JdGVtKTtcbiAgICAgICAgc29ydFRvZG9zKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNvcnRUb2RvcyA9ICgpPT57XG4gICAgICAgIHRvZG9BcnIuc29ydChzb3J0Rm4pO1xuICAgICAgICBcbiAgICB9O1xuXG4gICAgY29uc3Qgc29ydEZuID0gKGEsYikgPT57XG4gICAgICAgIGlmKGEucHJpb3JpdHkgPCBiLnByaW9yaXR5KSByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpID0+e1xuICAgICAgICBpZihjb21wbGV0ZWQgPT09IG51bGwgfHwgY29tcGxldGVkID09PSB1bmRlZmluZWQpIGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgbmV3VG9kb0l0ZW0gPSB0b2RvSXRlbUZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKTtcbiAgICAgICAgYWRkVG9kbyhuZXdUb2RvSXRlbSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSAodG9kb0l0ZW0pID0+e1xuICAgICAgICBsZXQgaWQgPSBnZXRUb2RvSWQodG9kb0l0ZW0pO1xuICAgICAgICBpZihpZCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIHRvZG9BcnIuc3BsaWNlKGlkLCAxKTtcbiAgICB9OyAgIFxuXG4gICAgY29uc3QgcmVtb3ZlVG9kb0J5VGl0bGUgPSAodGl0bGUpID0+e1xuICAgICAgICBsZXQgdG9kbyA9IHRvZG9BcnIuZmluZChlbGVtZW50ID0+IGVsZW1lbnQudGl0bGUgPT09IHRpdGxlKTtcbiAgICAgICAgaWYodG9kbyA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIHJlbW92ZVRvZG8odG9kbyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFRvZG9JZCA9ICh0b2RvSXRlbSkgPT57XG4gICAgICAgIHJldHVybiB0b2RvQXJyLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQudGl0bGUgPT09IHRvZG9JdGVtLnRpdGxlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VG9kb0lkQnlUaXRsZSA9ICh0aXRsZSkgPT57XG4gICAgICAgIHJldHVybiB0b2RvQXJyLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQudGl0bGUgPT09IHRpdGxlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdG9kb1dpdGhUaXRsZSA9ICh0aXRsZSkgPT57XG4gICAgICAgIHJldHVybiB0b2RvQXJyLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LnRpdGxlID09PSB0aXRsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJue1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgdG9kb0FycixcbiAgICAgICAgYWRkVG9kbyxcbiAgICAgICAgcmVtb3ZlVG9kbyxcbiAgICAgICAgY3JlYXRlVG9kbyxcbiAgICAgICAgZ2V0VG9kb0lkQnlUaXRsZSxcbiAgICAgICAgcmVtb3ZlVG9kb0J5VGl0bGUsXG4gICAgICAgIHRvZG9XaXRoVGl0bGUsXG4gICAgICAgIHNvcnRUb2RvcyxcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZXJGYWN0b3J5ID0gKHVzZXJuYW1lKSA9PntcbiAgICBsZXQgcHJvamVjdEFyciA9W107XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3RJdGVtKSA9PntcbiAgICAgICAgcHJvamVjdEFyci5wdXNoKHByb2plY3RJdGVtKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAodGl0bGUpID0+e1xuICAgICAgICBhZGRQcm9qZWN0KHByb2plY3RGYWN0b3J5KHRpdGxlKSk7ICAgICAgICBcbiAgICB9O1xuXG4gICAgY29uc3QgcHJvamVjdFdpdGhUaXRsZSA9IChwcm9qZWN0TmFtZSkgPT57XG4gICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdEFyci5maW5kKGVsZW1lbnQgPT5lbGVtZW50LnRpdGxlID09PSBwcm9qZWN0TmFtZSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0SWRXaXRoVGl0bGUgPSAocHJvamVjdE5hbWUpID0+e1xuICAgICAgICBsZXQgaWQgPSBwcm9qZWN0QXJyLmZpbmRJbmRleChlbGVtZW50ID0+ZWxlbWVudC50aXRsZSA9PT0gcHJvamVjdE5hbWUpO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfTtcblxuXG4gICAgY29uc3QgY3JlYXRlVG9kbyA9IChwcm9qZWN0VGl0bGUsIHRvZG9UaXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpID0+e1xuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RXaXRoVGl0bGUocHJvamVjdFRpdGxlKTtcbiAgICAgICAgaWYocHJvamVjdCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShwcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0LmNyZWF0ZVRvZG8odG9kb1RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFRvZG8gPSAocHJvamVjdFRpdGxlLCB0b2RvSXRlbSkgPT57XG4gICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdFdpdGhUaXRsZShwcm9qZWN0VGl0bGUpO1xuICAgICAgICBpZihwcm9qZWN0ID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgcHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHByb2plY3RUaXRsZSk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3QuYWRkVG9kbyh0b2RvSXRlbSk7XG4gICAgfTtcblxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0SXRlbSkgPT57XG4gICAgICAgIGxldCBpZCA9IGdldFRvZG9JZChwcm9qZWN0SXRlbSk7XG4gICAgICAgIGlmKGlkID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgcHJvamVjdEFyci5zcGxpY2UoaWQsIDEpO1xuICAgIH07ICAgXG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0QnlUaXRsZSA9ICh0aXRsZSkgPT57XG4gICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdEFyci5maW5kKHByb2plY3QgPT4gcHJvamVjdC50aXRsZSA9PT0gdGl0bGUpO1xuICAgICAgICBpZihwcm9qZWN0ID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUb2RvSWQgPSAocHJvamVjdEl0ZW0pID0+e1xuICAgICAgICByZXR1cm4gcHJvamVjdEFyci5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50LnRpdGxlID09PSBwcm9qZWN0SXRlbS50aXRsZSk7XG4gICAgfTtcblxuICAgIHJldHVybntcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIHByb2plY3RBcnIsXG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIGNyZWF0ZVByb2plY3QsXG4gICAgICAgIHJlbW92ZVByb2plY3QsXG4gICAgICAgIGNyZWF0ZVRvZG8sXG4gICAgICAgIGFkZFRvZG8sXG4gICAgICAgIHByb2plY3RXaXRoVGl0bGUsXG4gICAgICAgIHByb2plY3RJZFdpdGhUaXRsZSxcbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ5VGl0bGVcbiAgICB9O1xufVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==