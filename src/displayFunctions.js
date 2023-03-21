import { currentProject, CurrentUser, setCurrentProject, setCurrentUser, backdrop } from "./setup";

let projectContainer = document.querySelector(".project-container");
let projectTemplate = document.querySelector(".project-template");


let editProjectPopup = document.querySelector(".edit-project-popup");
let editTodoPopup = document.querySelector(".edit-todo-popup");

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
            editProjectPopup.querySelector(".ipt-title").value = project.title;
            editProjectPopup.querySelector(".ipt-title").placeholder = project.title;


            displayPopup(editProjectPopup,backdrop);
            editProjectPopup.dataset.title = project.title;

            e.stopPropagation();
        });

        projectClone.addEventListener("click", (e) =>{
            setCurrentProject(project);
        });

        ProjectContainer.appendChild(projectClone);
    });

    SelectedProjectChangeStyle(currentProject);
}

export function displayTodos(project, todoContainer, todoTemplate){

    let priorityColors = ["--r", "--b", "--g"];


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

    
        todoClone.classList.add(priorityColors[todo.priority]);

        let deleteButton = todoClone.querySelector(".delete");

        deleteButton.addEventListener("click", (e) =>{
            currentProject.removeTodoByTitle(todo.title);
            displayTodos(project, todoContainer, todoTemplate);

            console.log(project);
        });

        let editButton = todoClone.querySelector(".edit");

        editButton.addEventListener("click", (e) =>{
            editTodoPopup.querySelector(".ipt-title").value = todo.title;
            editTodoPopup.querySelector(".ipt-title").placeholder = todo.title;

            editTodoPopup.querySelector(".ipt-description").value = todo.description;
            editTodoPopup.querySelector(".ipt-dueDate").value = todo.dueDate;
            editTodoPopup.querySelector(".ipt-priority").value = todo.priority; 

            
            displayPopup(editTodoPopup,backdrop);
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