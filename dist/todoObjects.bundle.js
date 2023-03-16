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
const todoItemFactory = (title, description, dueDate, priority) =>{
    return{
        title,
        description,
        dueDate,
        priority
    }
};


const projectFactory = (title) =>{
    let todoArr = [];

    const addTodo = (todoItem) =>{
        todoArr.push(todoItem);
    }

    const createTodo = (title, description, dueDate, priority) =>{
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

    return{
        title,
        todoArr,
        addTodo,
        removeTodo,
        createTodo
    }
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


    const createTodo = (projectTitle, todoTitle, description, dueDate, priority) =>{
        let project = projectWithTitle(projectTitle);
        if(project === undefined){
            project = projectFactory(projectTitle);
            addProject(project);
        }
        project.createTodo(todoTitle, description, dueDate, priority);
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
        addTodo
    };
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/todoObjects.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb09iamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvT2JqZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdG9kb0l0ZW1GYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+e1xuICAgIHJldHVybntcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eVxuICAgIH1cbn07XG5cblxuZXhwb3J0IGNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlKSA9PntcbiAgICBsZXQgdG9kb0FyciA9IFtdO1xuXG4gICAgY29uc3QgYWRkVG9kbyA9ICh0b2RvSXRlbSkgPT57XG4gICAgICAgIHRvZG9BcnIucHVzaCh0b2RvSXRlbSk7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PntcbiAgICAgICAgbGV0IG5ld1RvZG9JdGVtID0gdG9kb0l0ZW1GYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICBhZGRUb2RvKG5ld1RvZG9JdGVtKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVUb2RvID0gKHRvZG9JdGVtKSA9PntcbiAgICAgICAgbGV0IGlkID0gZ2V0VG9kb0lkKHRvZG9JdGVtKTtcbiAgICAgICAgaWYoaWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgICB0b2RvQXJyLnNwbGljZShpZCwgMSk7XG4gICAgfSAgIFxuXG4gICAgY29uc3QgZ2V0VG9kb0lkID0gKHRvZG9JdGVtKSA9PntcbiAgICAgICAgcmV0dXJuIHRvZG9BcnIuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC50aXRsZSA9PT0gdG9kb0l0ZW0udGl0bGUpO1xuICAgIH1cblxuICAgIHJldHVybntcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHRvZG9BcnIsXG4gICAgICAgIGFkZFRvZG8sXG4gICAgICAgIHJlbW92ZVRvZG8sXG4gICAgICAgIGNyZWF0ZVRvZG9cbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgdXNlckZhY3RvcnkgPSAodXNlcm5hbWUpID0+e1xuICAgIGxldCBwcm9qZWN0QXJyID1bXTtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdEl0ZW0pID0+e1xuICAgICAgICBwcm9qZWN0QXJyLnB1c2gocHJvamVjdEl0ZW0pO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9ICh0aXRsZSkgPT57XG4gICAgICAgIGFkZFByb2plY3QocHJvamVjdEZhY3RvcnkodGl0bGUpKTsgICAgICAgIFxuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0V2l0aFRpdGxlID0gKHByb2plY3ROYW1lKSA9PntcbiAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0QXJyLmZpbmQoZWxlbWVudCA9PmVsZW1lbnQudGl0bGUgPT09IHByb2plY3ROYW1lKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfTtcblxuXG4gICAgY29uc3QgY3JlYXRlVG9kbyA9IChwcm9qZWN0VGl0bGUsIHRvZG9UaXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PntcbiAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0V2l0aFRpdGxlKHByb2plY3RUaXRsZSk7XG4gICAgICAgIGlmKHByb2plY3QgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBwcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkocHJvamVjdFRpdGxlKTtcbiAgICAgICAgICAgIGFkZFByb2plY3QocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdC5jcmVhdGVUb2RvKHRvZG9UaXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkVG9kbyA9IChwcm9qZWN0VGl0bGUsIHRvZG9JdGVtKSA9PntcbiAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0V2l0aFRpdGxlKHByb2plY3RUaXRsZSk7XG4gICAgICAgIGlmKHByb2plY3QgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBwcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkocHJvamVjdFRpdGxlKTtcbiAgICAgICAgICAgIGFkZFByb2plY3QocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdC5hZGRUb2RvKHRvZG9JdGVtKTtcbiAgICB9O1xuXG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3RJdGVtKSA9PntcbiAgICAgICAgbGV0IGlkID0gZ2V0VG9kb0lkKHByb2plY3RJdGVtKTtcbiAgICAgICAgaWYoaWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgICBwcm9qZWN0QXJyLnNwbGljZShpZCwgMSk7XG4gICAgfTsgICBcblxuICAgIGNvbnN0IGdldFRvZG9JZCA9IChwcm9qZWN0SXRlbSkgPT57XG4gICAgICAgIHJldHVybiBwcm9qZWN0QXJyLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQudGl0bGUgPT09IHByb2plY3RJdGVtLnRpdGxlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJue1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcHJvamVjdEFycixcbiAgICAgICAgYWRkUHJvamVjdCxcbiAgICAgICAgY3JlYXRlUHJvamVjdCxcbiAgICAgICAgcmVtb3ZlUHJvamVjdCxcbiAgICAgICAgY3JlYXRlVG9kbyxcbiAgICAgICAgYWRkVG9kb1xuICAgIH07XG59XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9