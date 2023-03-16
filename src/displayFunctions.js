export function displayProjects(user, ProjectContainer, projectTemplate){
    let projectArr = user.projectArr;
    ProjectContainer.innerHTML = "";
    projectArr.forEach(project => {
        let projectClone = projectTemplate.cloneNode(true);
        projectClone.classList.remove("nodisplay", "project-template")
        projectClone.querySelector(".project-title").innerText = project.title;
        ProjectContainer.appendChild(projectClone);
    });
}

export function displayTodos(project, TodoContainer, todoTemplate){
    let todoArr = project.todoArr;
    TodoContainer.innerHTML = "";
    todoArr.forEach(todo => {
        let todoClone = todoTemplate.cloneNode(true);
        todoClone.classList.remove("nodisplay", "todo-template")
        todoClone.querySelector(".todo-title").innerText = todo.title;
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