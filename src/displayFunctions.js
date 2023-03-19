import { currentProject, CurrentUser, setCurrentProject, setCurrentUser } from "./setup";

let projectContainer = document.querySelector(".project-container");
let projectTemplate = document.querySelector(".project-template");

let todoContainer = document.querySelector(".todo-container");
let todoTemplate = document.querySelector(".todo-template");



export function displayProjects(user, ProjectContainer, projectTemplate){
    let projectArr = user.projectArr;
    ProjectContainer.innerHTML = "";
    projectArr.forEach(project => {
        let projectClone = projectTemplate.cloneNode(true);
        projectClone.classList.remove("nodisplay", "project-template")
        projectClone.querySelector(".project-title").innerText = project.title;

        let deleteButton = projectClone.querySelector(".delete");

        deleteButton.addEventListener("click", (e) =>{
            CurrentUser.removeProjectByTitle(project.title);
            if(currentProject.title === project.title) setCurrentProject(user.projectArr[0]);
            displayProjects(user, ProjectContainer, projectTemplate);
            SelectedProjectChangeStyle(currentProject);
            e.stopPropagation();
        });

        let editButton = projectClone.querySelector(".edit");

        editButton.addEventListener("click", (e) =>{
            displayProjects(user, ProjectContainer, projectTemplate);
            SelectedProjectChangeStyle(currentProject);
            e.stopPropagation();
        });

        projectClone.addEventListener("click", (e) =>{
            setCurrentProject(project);
        });


        SelectedProjectChangeStyle(currentProject);
        ProjectContainer.appendChild(projectClone);
    });
}

export function displayTodos(project, todoContainer, todoTemplate){
    let todoArr = project.todoArr;
    todoContainer.innerHTML = "";
    todoArr.forEach(todo => {
        let todoClone = todoTemplate.cloneNode(true);
        let todoCheckbox = todoClone.querySelector(".todo-completed");

        todoClone.classList.remove("nodisplay", "todo-template")
        todoClone.querySelector(".todo-title").innerText = todo.title;
        todoClone.querySelector(".todo-description").innerText = todo.description;
        todoClone.querySelector(".todo-dueDate").innerText = todo.dueDate;
        todoCheckbox.checked = todo.completed;
        

        let deleteButton = todoClone.querySelector(".delete");

        deleteButton.addEventListener("click", (e) =>{
            currentProject.removeTodoByTitle(todo.title);
            displayTodos(project, todoContainer, todoTemplate);

            console.log(project);
        });

        todoCheckbox.addEventListener("click", (e) =>{
            todo.completed = !todo.completed;
            console.log(currentProject);
            e.stopPropagation();
        });


        todoContainer.appendChild(todoClone);
    });
}

export function SelectedProjectChangeStyle(project){
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




export function displayPopup(popupElement, backdrop){
    popupElement.classList.add("visible");
    backdrop.classList.add("visible");
}

export function hidePopup(popupElement, backdrop){
    popupElement.classList.remove("visible");
    backdrop.classList.remove("visible");
}




 
export function displayError(popup, errorClass, errorText){
    popup.querySelector(errorClass).innerText=errorText;
}