import {
  addProjectFunction,
  addProjectForm,
  showTasks,
  projects,
  myProjects,
  myProjectComposition,
} from "./projects.js";

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

  /// Element project

  // const firstProject = document.createElement("button");
  // firstProject.classList.add("buttonProjects");
  // firstProject.setAttribute("id", "project1");
  // firstProject.innerText = "Read 100 Books";
  // firstProject.addEventListener("click", () => {
  //   showTasks(projects["project1"]);
  // });

  // const secondProject = document.createElement("button");
  // secondProject.classList.add("buttonProjects");
  // secondProject.innerText = "Update my website";

  // secondProject.addEventListener("click", () => {
  //   showTasks(projects["project2"]);
  // });

  const addProject = document.createElement("button");
  addProject.setAttribute("id", "startProjectButton");
  addProject.innerText = "+";
  addProject.addEventListener("click", addProjectFunction);
  document.removeEventListener("click", addProjectFunction);

  //listProjects.appendChild(firstProject);
  //listProjects.appendChild(secondProject);

  myProjects.appendChild(addProject);

  return myProjects;
}

export { renderProjects, elementProject };
