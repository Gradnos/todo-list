export const todoItemFactory = (title, description, dueDate, priority, completed) =>{
    return{
        title,
        description,
        dueDate,
        priority,
        completed
    }
};


export const projectFactory = (title) =>{
    let todoArr = [];

    const addTodo = (todoItem) =>{
        todoArr.push(todoItem);
    }

    const createTodo = (title, description, dueDate, priority, completed) =>{
        let newTodoItem = todoItemFactory(title, description, dueDate, priority);
        addTodo(newTodoItem);
    }

    const removeTodo = (todoItem) =>{
        let id = getTodoId(todoItem);
        if(id === undefined) return;
        todoArr.splice(id, 1);
    }   

    const getTodoId = (todoItem) =>{
        return todoArr.findIndex(element => element.title === todoItem.title);
    }

    const getTodoIdByTitle = (title) =>{
        return todoArr.findIndex(element => element.title === title);
    }


    return{
        title,
        todoArr,
        addTodo,
        removeTodo,
        createTodo,
        getTodoIdByTitle,

    }
};

export const userFactory = (username) =>{
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
    };
}


