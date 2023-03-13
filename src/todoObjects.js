export const todoItemFactory = (title, description, dueDate, priority) =>{
    return{
        title,
        description,
        dueDate,
        priority
    }
};


export const projectFactory = (title) =>{
    let todoArr = [];

    const addTodo = (todoItem) =>{
        todoArr.push(todoItem);
    }

    const removeTodo = (todoItem) =>{
        let id = getTodoId(todoItem);
        if(id === undefined) return;
        todoArr.splice(id, 1);
    }   

    const getTodoId = (todoItem) =>{
        return todoArr.findIndex(element => element.title === todoItem.title);
    }

    return{
        title,
        todoArr,
        addTodo,
        removeTodo
    }
};

export const User = (username) =>{
    let projectArr =[];

    const addProject = (projectItem) =>{
        projectArr.push(projectItem);
    }

    const removeProject = (projectItem) =>{
        let id = getTodoId(projectItem);
        if(id === undefined) return;
        projectArr.splice(id, 1);
    }   

    const getTodoId = (projectItem) =>{
        return projectArr.findIndex(element => element.title === projectItem.title);
    }

    return{
        username,
        addProject,
        removeProject
    };
}


