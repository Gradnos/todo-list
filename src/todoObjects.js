export const todoItemFactory = (title, description, dueDate, priority) =>{
    return{
        title,
        description,
        dueDate,
        priority
    }
};


export const projectFactory = (title) =>{
    let todoArr = []

    const addTodo = (todoItem) =>{
        todoArr.push(todoItem);
    }

    const removeTodo = (todoItem) =>{
        let id = getTodoId(todoItem);
        if(id === undefined) return;
        todoArr.splice(id, 1);
    }   

    const getTodoId = (todoItem) =>{
        return todoArr.findIndex(element => element === todoItem);
    }

    return{
        title,
        todoArr,
        addTodo,
        removeTodo
    }
};