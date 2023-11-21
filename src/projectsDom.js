import { addProjectFunction, addProjectForm, showTasks } from "./projects.js";

function elementProject(nameProjectDom, keyProject) {
  const newProject = document.createElement("button");
  newProject.classList.add("buttonProjects");
  newProject.setAttribute("id", keyProject);
  newProject.textContent = nameProjectDom;
  console.log("Element project", keyProject);
  newProject.addEventListener("click", () => {
    showTasks(keyProject);
  });
  return newProject;
}

function renderProjects() {
  const myProjects = document.createElement("div");
  myProjects.classList.add("projects");

  myProjects.appendChild(addProjectForm());

  const myProjectsTitle = document.createElement("p");
  myProjectsTitle.innerText = "PROJECTS";

  myProjects.appendChild(myProjectsTitle);

  const listProjects = document.createElement("div");
  listProjects.setAttribute("id", "listProjects");
  myProjects.appendChild(listProjects);

  const addProject = document.createElement("button");
  addProject.setAttribute("id", "startProjectButton");
  addProject.innerText = "+";
  addProject.addEventListener("click", addProjectFunction);
  document.removeEventListener("click", addProjectFunction);

  myProjects.appendChild(addProject);

  return myProjects;
}

export { renderProjects, elementProject };
