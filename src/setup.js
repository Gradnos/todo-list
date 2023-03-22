import { displayPopup, hidePopup, displayError, displayTodos, SelectedProjectChangeStyle } from "./displayFunctions";
import { todoItemFactory, projectFactory, userFactory } from './todoObjects';
import { displayProjects } from './displayFunctions';


export let backdrop = document.querySelector(".backdrop");

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



export let CurrentUser;
export let currentProject;
export function setCurrentUser(user){
    CurrentUser = user;
};
export function setCurrentProject(project){
    currentProject = project;
    displayProjects(CurrentUser,projectContainer,projectTemplate);
    displayTodos(currentProject,todoContainer,todoTemplate);
    SelectedProjectChangeStyle(currentProject);
};


let retrievedUser = localStorage.getItem('USER');
let userJson = JSON.parse(retrievedUser);
console.log('USER: ', );
let user

if(userJson === null){
    user = userFactory("Guest");
    user.createTodo("Get A Job", "Learn A Skill", "Web-Development", "2024-01-01", 0);
    user.createTodo("Get A Job", "Apply For Jobs", "", "2024-04-01", 1);
    user.createTodo("Get A Wife", "Find A Woman", "Usually In The Streets", "2023-07-05", 0);
    user.createTodo("Get A Wife", "Talk To A Woman", "Use Words", "2024-12-11", 1);
    user.createTodo("Get A Wife", "Finish This List", "", "", 2);
}else {
    
    user = userFactory(userJson.username);
    let projectArr = userJson.projectArr;
    projectArr.forEach(project => {
        let newProject = projectFactory(project.title);
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











export function setup(){
    setupAddButtons();
    setupPopupButtons();

    setCurrentProject(CurrentUser.projectWithTitle("Get A Job"));
}



function setupAddButtons(){
    addProjectButton.addEventListener("click", (e)=>{
            displayPopup(addProjectPopup, backdrop);
    });

    addTodoButton.addEventListener("click", (e)=>{
            displayPopup(addTodoPopup, backdrop);
    });
}

function setupPopupButtons(){
    let addTodoConfirmButton = addTodoPopup.querySelector(".confirm");
    let addTodoCancelButton = addTodoPopup.querySelector(".cancel");

    addTodoCancelButton.addEventListener("click", (e) =>{
        hidePopup(addTodoPopup, backdrop);
    });

    addTodoConfirmButton.addEventListener("click", (e) =>{
        let title = addTodoPopup.querySelector(".ipt-title").value;

        if(currentProject.getTodoIdByTitle(title) !== -1) {
            displayError(addTodoPopup, ".title-error", "This Title Already Exists!");
            return
        }
        if(title === "") {
            displayError(addTodoPopup, ".title-error", "It Must Have A Title!");
            return
        }
        displayError(addTodoPopup, ".title-error", "");

        let description = addTodoPopup.querySelector(".ipt-description").value;
        let dueDate = addTodoPopup.querySelector(".ipt-dueDate").value;
        let priority = addTodoPopup.querySelector(".ipt-priority").value;
    
        currentProject.createTodo(title,description,dueDate,priority, false);
        localStorage.setItem('USER', JSON.stringify(CurrentUser));
        hidePopup(addTodoPopup, backdrop);
        displayTodos(currentProject, todoContainer, todoTemplate);
    });


    let addProjectConfirmButton = addProjectPopup.querySelector(".confirm");
    let addProjectCancelButton = addProjectPopup.querySelector(".cancel");

    addProjectCancelButton.addEventListener("click", (e) =>{
        hidePopup(addProjectPopup, backdrop);
    });

    addProjectConfirmButton.addEventListener("click", (e) =>{
        let title = addProjectPopup.querySelector(".ipt-title").value;

        if(CurrentUser.projectIdWithTitle(title) !== -1) {
            displayError(addProjectPopup, ".title-error", "This Title Already Exists!");
            return
        }
        if(title === "") {
            displayError(addProjectPopup, ".title-error", "It Must Have A Title!");
            return
        }
        displayError(addProjectPopup, ".title-error", "");

        CurrentUser.createProject(title);
        localStorage.setItem('USER', JSON.stringify(CurrentUser));
        hidePopup(addProjectPopup, backdrop);
        displayProjects(user,projectContainer,projectTemplate);
    });

    let editProjectConfirmButton = editProjectPopup.querySelector(".confirm");
    let editProjectCancelButton = editProjectPopup.querySelector(".cancel");

    editProjectCancelButton.addEventListener("click", (e) =>{
        hidePopup(editProjectPopup, backdrop);
    });

    editProjectConfirmButton.addEventListener("click", (e) =>{
        let title = editProjectPopup.querySelector(".ipt-title").value;

        if(CurrentUser.projectIdWithTitle(title) !== -1) {
            displayError(editProjectPopup, ".title-error", "This Title Already Exists!");
            return
        }
        if(title === "") {
            displayError(editProjectPopup, ".title-error", "It Must Have A Title!");
            return
        }
        displayError(editProjectPopup, ".title-error", "");

        
        CurrentUser.projectWithTitle(editProjectPopup.dataset.title).title = title;
        localStorage.setItem('USER', JSON.stringify(CurrentUser));
        hidePopup(editProjectPopup, backdrop);
        displayProjects(user,projectContainer,projectTemplate);
    });


    let editTodoConfirmButton = editTodoPopup.querySelector(".confirm");
    let editTodoCancelButton = editTodoPopup.querySelector(".cancel");

    editTodoCancelButton.addEventListener("click", (e) =>{
        hidePopup(editTodoPopup, backdrop);
    });

    editTodoConfirmButton.addEventListener("click", (e) =>{
        let title = editTodoPopup.querySelector(".ipt-title").value;
        let description = editTodoPopup.querySelector(".ipt-description").value;
        let dueDate = editTodoPopup.querySelector(".ipt-dueDate").value;
        let priority = editTodoPopup.querySelector(".ipt-priority").value;


        if(currentProject.getTodoIdByTitle(title) !== -1) {
            if(title !== editTodoPopup.dataset.title){
            displayError(editTodoPopup, ".title-error", "This Title Already Exists!");
            return;
            }
        }
        if(title === "") {
            displayError(editTodoPopup, ".title-error", "It Must Have A Title!");
            return;
        }
        displayError(editTodoPopup, ".title-error", "");

        console.log(editTodoPopup.dataset.title);
        console.log(currentProject.todoWithTitle(editTodoPopup.dataset.title));

        let editedTodo = currentProject.todoWithTitle(editTodoPopup.dataset.title);

        editedTodo.title = title;
        editedTodo.description = description;
        editedTodo.dueDate = dueDate;


        editedTodo.priority = priority;

        hidePopup(editTodoPopup, backdrop);

        currentProject.sortTodos();
        localStorage.setItem('USER', JSON.stringify(CurrentUser));
        displayTodos(currentProject,todoContainer,todoTemplate);
    });
    


}



