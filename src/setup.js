import { displayPopup, hidePopup, displayError, displayTodos, SelectedProjectChangeStyle } from "./displayFunctions";
import { todoItemFactory, projectFactory, userFactory } from './todoObjects';
import { displayProjects } from './displayFunctions';


let backdrop = document.querySelector(".backdrop");

let projectContainer = document.querySelector(".project-container");
let projectTemplate = document.querySelector(".project-template");


let todoContainer = document.querySelector(".todo-container");
let todoTemplate = document.querySelector(".todo-template");


let addProjectButton = document.querySelector(".add-project");
let addProjectPopup = document.querySelector(".project-popup");

let addTodoButton = document.querySelector(".add-todo");
let addTodoPopup = document.querySelector(".todo-popup");

let user = userFactory("Guest");
user.createProject("Get A Wife");


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





user.createTodo("Get A Job", "Learn A Skill", "Web-Development", "01-01-2024", 1);
user.createTodo("Get A Wife", "Find A Woman", "Usually In The Streets", "11-12-2024", 1);


export function setup(){
    setupAddButtons();
    setupPopupButtons();

    setCurrentUser(user);
    setCurrentProject(CurrentUser.projectWithTitle("Get A Wife"));
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
        hidePopup(addProjectPopup, backdrop);
        displayProjects(user,projectContainer,projectTemplate);
    });


}



