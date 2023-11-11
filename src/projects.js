// Manipulate projects

import { taskContainer } from "./taskContainer.js";

const projects = {
  project1: {
    name: "Title1",
    taskList: [{ task1: "Read a book" }, { task2: "Read An Empty House" }],
  },
  project2: {
    name: "Title2",
    taskList: [],
  },
};

function showTasks(project) {
  let myContainer = document.getElementById("taskContainerId");
  taskContainer(project);
  console.log("Function: showTask");
  console.log(myContainer);
  console.log(99, project["taskList"]);
  myContainer.replaceChildren();

  let i = 0;
  for (const property of project["taskList"]) {
    i += 1;
    let keyTask = "task" + i;
    console.log(property[keyTask]);
    const newTask = document.createElement("div");
    newTask.classList.add("tasksUnit");

    // New title
    const newTitle = document.createElement("p");
    newTitle.textContent = property[keyTask];

    // New extras
    const newExtras = document.createElement("div");

    // New date
    const newDueDate = document.createElement("span");
    newDueDate.textContent = "dd/mm/yy";
    newExtras.appendChild(newDueDate);

    // New priority
    const newPriority = document.createElement("span");
    newPriority.textContent = "priority: high";
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

function clickAddProject(event) {
  event.preventDefault();
  document.getElementById("addProjectDiv").style.display = "none";
  const myForm = document.getElementById("addProjectForm");

  const newTitle = myForm["name"].value;
  if (newTitle !== "") {
    let getId = assignProjectId();
    let keyProject = getId + "project";
    projects[keyProject] = { name: newTitle, taskList: [] };
    appendProject(newTitle, keyProject);
  }

  console.log("projects", projects);
}

function addProjectForm() {
  const addElementContainer = document.createElement("div");
  addElementContainer.setAttribute("id", "addProjectDiv");
  const projectForm = document.createElement("form");
  projectForm.setAttribute("id", "addProjectForm");
  addElementContainer.appendChild(projectForm);
  const labelProject = document.createElement("label");
  labelProject.textContent = "Project's name";
  labelProject.setAttribute("id", "labelProject");
  const nameProject = document.createElement("input");
  nameProject.setAttribute("id", "inputProject");
  nameProject.type = "text";
  nameProject.name = "name";
  projectForm.appendChild(labelProject);
  projectForm.appendChild(nameProject);

  const addButton = document.createElement("button");
  addButton.setAttribute("id", "buttonProjectForm");
  addButton.textContent = "ADD";
  addButton.addEventListener("click", clickAddProject, false);

  projectForm.appendChild(addButton);
  return addElementContainer;
}

function addProjectFunction() {
  document.getElementById("addProjectDiv").style.display = "block";
}

const createNewProjectId = () => {
  let idProject = 0;
  return () => {
    idProject++;
    return idProject;
  };
};

const assignProjectId = createNewProjectId();

function appendProject(newProject, keyProject) {
  // The page has to be loaded before accessing elements added from modules
  //document.addEventListener("DOMContentLoaded", () => {
  const listPro = document.getElementById("listProjects");
  let titleProject = document.createElement("button");

  titleProject.classList.add("buttonProjects");
  titleProject.setAttribute("id", keyProject); // do i need it?
  titleProject.textContent = newProject;
  titleProject.addEventListener("click", () => {
    showTasks(projects[keyProject]);
  });
  //titleProject.removeEventListener("click", showTasks);
  //document.removeEventListener("click", clickAddProject);
  listPro.appendChild(titleProject);
  console.log("listPro", listPro);
  //});
  //document.removeEventListener("DOMContentLoaded", appendProject);
}

export { addProjectFunction, addProjectForm, showTasks, projects };
