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

function domShowTasks(myTasks) {
  const myContainer = document.getElementById("taskContainerId");

  myContainer.replaceChildren();

  console.log("myTasks, ", myTasks);

  for (const property of myTasks) {
    console.log("property: ", property);
    const newTask = document.createElement("div");
    newTask.classList.add("tasksUnit");

    // New title
    const newTitle = document.createElement("p");
    newTitle.textContent = property.name;

    // New extras
    const newExtras = document.createElement("div");

    // New date
    const newDueDate = document.createElement("span");
    newDueDate.textContent = property.date;
    newExtras.appendChild(newDueDate);

    // New priority
    const newPriority = document.createElement("span");
    newPriority.textContent = `PRIORITY: ${property.priority}`;
    newExtras.appendChild(newPriority);

    // New notes
    const newNotes = document.createElement("button");
    newNotes.textContent = "Notes";
    newExtras.appendChild(newNotes);

    // New edit
    const newEdit = document.createElement("button");
    newEdit.textContent = "*";
    newExtras.appendChild(newEdit);

    myContainer.appendChild(newTask);
    newTask.appendChild(newTitle);
    newTask.appendChild(newExtras);
    myContainer.appendChild(newTask);
  }
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
  // document.removeEventListener("click", addProjectFunction);

  myProjects.appendChild(addProject);

  return myProjects;
}

export { renderProjects, elementProject, domShowTasks };
