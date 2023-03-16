import './style.css';
import { todoItemFactory, projectFactory, userFactory } from './todoObjects';
import { displayProjects } from './displayFunctions';
import { setup } from './setup';
import Icon from "./icons/favicon.svg";

let link = document.createElement('link');
link.rel = 'icon';
link.href = Icon;
document.head.appendChild(link);

let ProjectContainer = document.querySelector(".project-container");
let projectTemplate = document.querySelector(".project-template");

setup();

console.log("asdasd");


let user = userFactory("Guest");
user.createProject("Get A Wife")
user.createTodo("Get A Job", "as", "aa", "111", 1);

displayProjects(user,ProjectContainer,projectTemplate);



