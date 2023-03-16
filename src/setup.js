import { displayPopup, hidePopup } from "./displayFunctions";
import { todoItemFactory, projectFactory, userFactory } from './todoObjects';
import { displayProjects } from './displayFunctions';


let backdrop = document.querySelector(".backdrop");

let ProjectContainer = document.querySelector(".project-container");
let projectTemplate = document.querySelector(".project-template");


let addProjectButton = document.querySelector(".add-project");
let addProjectPopup = document.querySelector(".project-popup");

let addTodoButton = document.querySelector(".add-todo");
let addTodoPopup = document.querySelector(".todo-popup");

let user = userFactory("Guest");
user.createProject("Get A Wife");


export let CurrentUser = user;
export let currentProject = CurrentUser.projectWithTitle("Get A Wife");


user.createTodo("Get A Job", "as", "aa", "111", 1);



export function setup(){
    setupAddButtons();
    setupPopupButtons();


    displayProjects(user,ProjectContainer,projectTemplate);
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
        let description = addTodoPopup.querySelector(".ipt-description").value;
        let dueDate = addTodoPopup.querySelector(".ipt-dueDate").value;
        let priority = addTodoPopup.querySelector(".ipt-priority").value;
        currentProject.createTodo(title,description,dueDate,priority);
        console.log(user);
        hidePopup(addTodoPopup, backdrop);
    });


    let addProjectConfirmButton = addProjectPopup.querySelector(".confirm");
    let addProjectCancelButton = addProjectPopup.querySelector(".cancel");

    addProjectCancelButton.addEventListener("click", (e) =>{
        hidePopup(addProjectPopup, backdrop);
    });

    addProjectConfirmButton.addEventListener("click", (e) =>{
        let title = addProjectPopup.querySelector(".ipt-title").value;
        CurrentUser.createProject(title);
        console.log(user);
        hidePopup(addProjectPopup, backdrop);
        displayProjects(user,ProjectContainer,projectTemplate);
    });


}



