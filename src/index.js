import './style.css';
import { todoItemFactory, projectFactory, userFactory } from './todoObjects';
import { displayProjects } from './displayFunctions';

import Icon from "./icons/favicon.svg";

let link = document.createElement('link');
link.rel = 'icon';
link.href = Icon;
document.head.appendChild(link);

let ProjectContainer = document.querySelector(".project-container");
let projectTemplate = document.querySelector(".project-template");



let user = userFactory("Guest");
user.createProject("john")
user.createTodo("jajaj", "as", "aa", "111", 1);


console.log(user);
displayProjects(user,ProjectContainer, projectTemplate);
displayProjects(user,ProjectContainer,projectTemplate);
displayProjects(user,ProjectContainer,projectTemplate);




