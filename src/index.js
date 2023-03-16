import './style.css';
import { todoItemFactory, projectFactory, userFactory } from './todoObjects';

import { setup } from './setup';
import Icon from "./icons/favicon.svg";


let link = document.createElement('link');
link.rel = 'icon';
link.href = Icon;
document.head.appendChild(link);


setup();






