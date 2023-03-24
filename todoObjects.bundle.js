"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["todoObjects"],{

/***/ "./src/todoObjects.js":
/*!****************************!*\
  !*** ./src/todoObjects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory),
/* harmony export */   "todoItemFactory": () => (/* binding */ todoItemFactory),
/* harmony export */   "userFactory": () => (/* binding */ userFactory)
/* harmony export */ });

const todoItemFactory = (title, description, dueDate, priority, completed) =>{
    return{
        title,
        description,
        dueDate,
        priority,
        completed
    };
};


const projectFactory = (title) =>{
    let todoArr = [];

    const addTodo = (todoItem) =>{
        todoArr.push(todoItem);
        sortTodos();
    };

    const sortTodos = ()=>{
        todoArr.sort(sortFn);
        
    };

    const sortFn = (a,b) =>{
        if(a.priority < b.priority) return -1;
    }

    const createTodo = (title, description, dueDate, priority, completed) =>{
        if(completed === null || completed === undefined) completed = false;
        let newTodoItem = todoItemFactory(title, description, dueDate, priority, completed);
        addTodo(newTodoItem);
    };

    const removeTodo = (todoItem) =>{
        let id = getTodoId(todoItem);
        if(id === undefined) return;
        todoArr.splice(id, 1);
    };   

    const removeTodoByTitle = (title) =>{
        let todo = todoArr.find(element => element.title === title);
        if(todo === undefined) return;
        removeTodo(todo);
    };

    const getTodoId = (todoItem) =>{
        return todoArr.findIndex(element => element.title === todoItem.title);
    };

    const getTodoIdByTitle = (title) =>{
        return todoArr.findIndex(element => element.title === title);
    };

    const todoWithTitle = (title) =>{
        return todoArr.find(element => element.title === title);
    }

    return{
        title,
        todoArr,
        addTodo,
        removeTodo,
        createTodo,
        getTodoIdByTitle,
        removeTodoByTitle,
        todoWithTitle,
        sortTodos,
    };
};

const userFactory = (username) =>{
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

    const removeProjectByTitle = (title) =>{
        let project = projectArr.find(project => project.title === title);
        if(project === undefined) return;
        removeProject(project);
    }

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
        removeProjectByTitle
    };
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/todoObjects.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb09iamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb09iamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY29uc3QgdG9kb0l0ZW1GYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCkgPT57XG4gICAgcmV0dXJue1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBjb21wbGV0ZWRcbiAgICB9O1xufTtcblxuXG5leHBvcnQgY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUpID0+e1xuICAgIGxldCB0b2RvQXJyID0gW107XG5cbiAgICBjb25zdCBhZGRUb2RvID0gKHRvZG9JdGVtKSA9PntcbiAgICAgICAgdG9kb0Fyci5wdXNoKHRvZG9JdGVtKTtcbiAgICAgICAgc29ydFRvZG9zKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNvcnRUb2RvcyA9ICgpPT57XG4gICAgICAgIHRvZG9BcnIuc29ydChzb3J0Rm4pO1xuICAgICAgICBcbiAgICB9O1xuXG4gICAgY29uc3Qgc29ydEZuID0gKGEsYikgPT57XG4gICAgICAgIGlmKGEucHJpb3JpdHkgPCBiLnByaW9yaXR5KSByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpID0+e1xuICAgICAgICBpZihjb21wbGV0ZWQgPT09IG51bGwgfHwgY29tcGxldGVkID09PSB1bmRlZmluZWQpIGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgbmV3VG9kb0l0ZW0gPSB0b2RvSXRlbUZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKTtcbiAgICAgICAgYWRkVG9kbyhuZXdUb2RvSXRlbSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSAodG9kb0l0ZW0pID0+e1xuICAgICAgICBsZXQgaWQgPSBnZXRUb2RvSWQodG9kb0l0ZW0pO1xuICAgICAgICBpZihpZCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIHRvZG9BcnIuc3BsaWNlKGlkLCAxKTtcbiAgICB9OyAgIFxuXG4gICAgY29uc3QgcmVtb3ZlVG9kb0J5VGl0bGUgPSAodGl0bGUpID0+e1xuICAgICAgICBsZXQgdG9kbyA9IHRvZG9BcnIuZmluZChlbGVtZW50ID0+IGVsZW1lbnQudGl0bGUgPT09IHRpdGxlKTtcbiAgICAgICAgaWYodG9kbyA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIHJlbW92ZVRvZG8odG9kbyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFRvZG9JZCA9ICh0b2RvSXRlbSkgPT57XG4gICAgICAgIHJldHVybiB0b2RvQXJyLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQudGl0bGUgPT09IHRvZG9JdGVtLnRpdGxlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VG9kb0lkQnlUaXRsZSA9ICh0aXRsZSkgPT57XG4gICAgICAgIHJldHVybiB0b2RvQXJyLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQudGl0bGUgPT09IHRpdGxlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdG9kb1dpdGhUaXRsZSA9ICh0aXRsZSkgPT57XG4gICAgICAgIHJldHVybiB0b2RvQXJyLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LnRpdGxlID09PSB0aXRsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJue1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgdG9kb0FycixcbiAgICAgICAgYWRkVG9kbyxcbiAgICAgICAgcmVtb3ZlVG9kbyxcbiAgICAgICAgY3JlYXRlVG9kbyxcbiAgICAgICAgZ2V0VG9kb0lkQnlUaXRsZSxcbiAgICAgICAgcmVtb3ZlVG9kb0J5VGl0bGUsXG4gICAgICAgIHRvZG9XaXRoVGl0bGUsXG4gICAgICAgIHNvcnRUb2RvcyxcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZXJGYWN0b3J5ID0gKHVzZXJuYW1lKSA9PntcbiAgICBsZXQgcHJvamVjdEFyciA9W107XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3RJdGVtKSA9PntcbiAgICAgICAgcHJvamVjdEFyci5wdXNoKHByb2plY3RJdGVtKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAodGl0bGUpID0+e1xuICAgICAgICBhZGRQcm9qZWN0KHByb2plY3RGYWN0b3J5KHRpdGxlKSk7ICAgICAgICBcbiAgICB9O1xuXG4gICAgY29uc3QgcHJvamVjdFdpdGhUaXRsZSA9IChwcm9qZWN0TmFtZSkgPT57XG4gICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdEFyci5maW5kKGVsZW1lbnQgPT5lbGVtZW50LnRpdGxlID09PSBwcm9qZWN0TmFtZSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0SWRXaXRoVGl0bGUgPSAocHJvamVjdE5hbWUpID0+e1xuICAgICAgICBsZXQgaWQgPSBwcm9qZWN0QXJyLmZpbmRJbmRleChlbGVtZW50ID0+ZWxlbWVudC50aXRsZSA9PT0gcHJvamVjdE5hbWUpO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfTtcblxuXG4gICAgY29uc3QgY3JlYXRlVG9kbyA9IChwcm9qZWN0VGl0bGUsIHRvZG9UaXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpID0+e1xuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RXaXRoVGl0bGUocHJvamVjdFRpdGxlKTtcbiAgICAgICAgaWYocHJvamVjdCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShwcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0LmNyZWF0ZVRvZG8odG9kb1RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFRvZG8gPSAocHJvamVjdFRpdGxlLCB0b2RvSXRlbSkgPT57XG4gICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdFdpdGhUaXRsZShwcm9qZWN0VGl0bGUpO1xuICAgICAgICBpZihwcm9qZWN0ID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgcHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHByb2plY3RUaXRsZSk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3QuYWRkVG9kbyh0b2RvSXRlbSk7XG4gICAgfTtcblxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0SXRlbSkgPT57XG4gICAgICAgIGxldCBpZCA9IGdldFRvZG9JZChwcm9qZWN0SXRlbSk7XG4gICAgICAgIGlmKGlkID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgcHJvamVjdEFyci5zcGxpY2UoaWQsIDEpO1xuICAgIH07ICAgXG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0QnlUaXRsZSA9ICh0aXRsZSkgPT57XG4gICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdEFyci5maW5kKHByb2plY3QgPT4gcHJvamVjdC50aXRsZSA9PT0gdGl0bGUpO1xuICAgICAgICBpZihwcm9qZWN0ID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUb2RvSWQgPSAocHJvamVjdEl0ZW0pID0+e1xuICAgICAgICByZXR1cm4gcHJvamVjdEFyci5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50LnRpdGxlID09PSBwcm9qZWN0SXRlbS50aXRsZSk7XG4gICAgfTtcblxuICAgIHJldHVybntcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIHByb2plY3RBcnIsXG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIGNyZWF0ZVByb2plY3QsXG4gICAgICAgIHJlbW92ZVByb2plY3QsXG4gICAgICAgIGNyZWF0ZVRvZG8sXG4gICAgICAgIGFkZFRvZG8sXG4gICAgICAgIHByb2plY3RXaXRoVGl0bGUsXG4gICAgICAgIHByb2plY3RJZFdpdGhUaXRsZSxcbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ5VGl0bGVcbiAgICB9O1xufVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==