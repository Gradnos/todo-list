import { currentProject, CurrentUser } from "./setup";

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
            displayProjects(user, ProjectContainer, projectTemplate);

            console.log(project);
        });


        ProjectContainer.appendChild(projectClone);
    });
}

export function displayTodos(project, todoContainer, todoTemplate){
    let todoArr = project.todoArr;
    todoContainer.innerHTML = "";
    todoArr.forEach(todo => {
        let todoClone = todoTemplate.cloneNode(true);
        todoClone.classList.remove("nodisplay", "todo-template")
        todoClone.querySelector(".todo-title").innerText = todo.title;
        todoClone.querySelector(".todo-description").innerText = todo.description;
        todoClone.querySelector(".todo-dueDate").innerText = todo.dueDate;

        let deleteButton = todoClone.querySelector(".delete");

        deleteButton.addEventListener("click", (e) =>{
            currentProject.removeTodoByTitle(todo.title);
            displayTodos(project, todoContainer, todoTemplate);

            console.log(project);
        });


        todoContainer.appendChild(todoClone);
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