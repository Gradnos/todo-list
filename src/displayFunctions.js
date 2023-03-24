import { currentProject, CurrentUser, setCurrentProject, setCurrentUser, backdrop } from "./setup";

let projectContainer = document.querySelector(".project-container");

let todoContainer = document.querySelector(".todo-container");

let editProjectPopup = document.querySelector(".edit-project-popup");
let editTodoPopup = document.querySelector(".edit-todo-popup");

let confirmDeletePopup = document.querySelector(".confirm-delete-popup");

export function displayProjects(user, ProjectContainer, projectTemplate){
    let projectArr = user.projectArr;
    ProjectContainer.innerHTML = "";
    projectArr.forEach(project => {
        let projectClone = projectTemplate.cloneNode(true);
        projectClone.classList.remove("nodisplay", "project-template")
        projectClone.querySelector(".project-title").innerText = project.title;

        let deleteButton = projectClone.querySelector(".delete");

        deleteButton.addEventListener("click", (e) =>{

            console.log("project");


            confirmDeletePopup.querySelector("h3").innerText = `Delete >>${project.title}<< ?`;
            displayPopup(confirmDeletePopup,backdrop);
            let cancelButton = confirmDeletePopup.querySelector(".cancel");
            let confirmButton = confirmDeletePopup.querySelector(".confirm");
        
            cancelButton.addEventListener("click", ()=>{
                hidePopup(confirmDeletePopup,backdrop);
            });
        
            confirmButton.addEventListener("click", ()=>{
                hidePopup(confirmDeletePopup,backdrop);

                CurrentUser.removeProjectByTitle(project.title);
                if(currentProject.title === project.title) setCurrentProject(user.projectArr[user.projectArr.length-1]);
                console.log(JSON.stringify(CurrentUser));
                localStorage.setItem('USER', JSON.stringify(CurrentUser));
                displayProjects(user, ProjectContainer, projectTemplate);
                if(user.projectArr.length > 0) SelectedProjectChangeStyle(currentProject);
            });


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

    if(user.projectArr.length > 0) SelectedProjectChangeStyle(currentProject);
}

export function displayTodos(project, todoContainer, todoTemplate){
    
    todoContainer.innerHTML = "";
    if(project === undefined) return;

    let priorityColors = ["--r", "--b", "--g"];


    let todoArr = project.todoArr;
    todoArr.forEach(todo => {
        let todoClone = todoTemplate.cloneNode(true);
        let todoCheckbox = todoClone.querySelector(".todo-completed");




        todoClone.classList.remove("nodisplay", "todo-template")
        todoClone.querySelector(".todo-title").innerText = todo.title;
        todoClone.querySelector(".todo-description").innerText = shorterString(todo.description, 40);;
        todoClone.querySelector(".todo-dueDate").innerText = todo.dueDate;
        todoCheckbox.checked = todo.completed;

    
        todoClone.classList.add(priorityColors[todo.priority]);

        let deleteButton = todoClone.querySelector(".delete");

        deleteButton.addEventListener("click", (e) =>{

            console.log("todo");

            confirmDeletePopup.querySelector("h3").innerText = `Delete >>${todo.title}<< ?`;
            displayPopup(confirmDeletePopup,backdrop);
            let oldCancelButton = confirmDeletePopup.querySelector(".cancel");
            let oldConfirmButton = confirmDeletePopup.querySelector(".confirm");

            let cancelButton = oldCancelButton.cloneNode(true);
            oldCancelButton.parentNode.replaceChild(cancelButton, oldCancelButton);

            let confirmButton = oldConfirmButton.cloneNode(true);
            oldConfirmButton.parentNode.replaceChild(confirmButton, oldConfirmButton);
        
            cancelButton.addEventListener("click", ()=>{
                hidePopup(confirmDeletePopup,backdrop);
            });
        
            confirmButton.addEventListener("click", ()=>{
                hidePopup(confirmDeletePopup,backdrop);
                currentProject.removeTodoByTitle(todo.title);
                localStorage.setItem('USER', JSON.stringify(CurrentUser));
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

        todoClone.addEventListener("click", (e)=>{
            if(todoClone.classList.contains("extended")){
                SelectedTodoExtend(false);
                todoClone.querySelector(".todo-description").innerText = shorterString(todo.description, 40);
            }else{
                SelectedTodoExtend(todo);
                todoClone.querySelector(".todo-description").innerText = todo.description;
            }
        });


        if(todo.completed) todoClone.classList.add("completed");
        else todoClone.classList.remove("completed");

        todoContainer.appendChild(todoClone);
    });
}

export function SelectedProjectChangeStyle(project){

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

function SelectedTodoExtend(todo){
    let title = todo.title;

    if(todo === false) title = ""; 

    let todoElements =  todoContainer.querySelectorAll(".todo-div");
    todoElements.forEach(todoElement => {
        let titleElement = todoElement.querySelector(".todo-title");
        let todoElementTitle = null;
        if(titleElement !== null) todoElementTitle = titleElement.innerText;

        if(todoElementTitle === title){
            todoElement.classList.add("extended");
        } else{
            todoElement.classList.remove("extended");
            let todoTitle = todoElement.querySelector(".todo-title").innerText
            todoElement.querySelector(".todo-description").innerText = shorterString(currentProject.todoWithTitle(todoTitle).description, 40);
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

function shorterString(string, length){
    if (string.length < length + 1) return string; 
    let shorter = string.slice(0, length);
    return shorter + "...";
}
