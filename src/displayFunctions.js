export function displayProjects(user, ProjectContainer, projectTemplate){
    let projectArr = user.projectArr;
    ProjectContainer.innerHTML = "";
    console.log(ProjectContainer);
    projectArr.forEach(project => {
        let projectClone = projectTemplate.cloneNode(true);
        projectClone.classList.remove("nodisplay", "project-template")
        projectClone.querySelector(".project-title").innerText = project.title;
        ProjectContainer.appendChild(projectClone);
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