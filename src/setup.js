import { displayPopup, hidePopup } from "./displayFunctions";

let backdrop = document.querySelector(".backdrop");
export function setup(){
    setupAddButtons();


}



function setupAddButtons(){
    let addProjectButton = document.querySelector(".add-project");
    let addProjectPopup = document.querySelector(".project-popup");

    addProjectButton.addEventListener("click", (e)=>{
            displayPopup(addProjectPopup, backdrop);
    });


    let addTodoButton = document.querySelector(".add-todo");
    let addTodoPopup = document.querySelector(".todo-popup");

    addTodoButton.addEventListener("click", (e)=>{
            displayPopup(addTodoPopup, backdrop);
    });
}



