// Manipulate projects

import { taskContainer } from "./taskContainer.js";
import { elementProject } from "./projectsDom.js";

// Sample projects
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

// All the projects names
const myProjects = [];

const myProjectMethods = {
  getProject: function () {
    return this;
  },
  getProjectName: function () {
    return this.name;
  },
  getTaskList: function () {
    return this.taskList;
  },
  addTask: function (id, newTask) {
    this.taskList[id] = newTask;
  },
};

// function giveProject(name) {
//   return name.getProject();
// }

function myProjectComposition(name, taskList = {}) {
  return { name, taskList, ...projects, ...myProjectMethods };
}

function showTasks(projectL) {
  const myContainer = document.getElementById("taskContainerId");

  myContainer.replaceChildren();

  //let myTasks = projectL;

  console.log(projectL);
  //const myTasks = Object.values(projectL);
  const myProtoTasks = projectL.getTaskList();
  const myTasks = Object.values(myProtoTasks);
  console.log("myTasks, ", myTasks);

  let i = 0;
  for (const property of myTasks) {
    i += 1;
    // let keyTask = "task" + i;
    console.log("property: ", property);
    const newTask = document.createElement("div");
    newTask.classList.add("tasksUnit");

    // New title
    const newTitle = document.createElement("p");
    newTitle.textContent = property;

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
    const newProject = myProjectComposition(keyProject);
    projects[keyProject] = { name: newTitle, taskList: [] };
    appendProject(newTitle, newProject);
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
  const listPro = document.getElementById("listProjects");
  const titleProject = elementProject(newProject, keyProject);
  listPro.appendChild(titleProject);
  console.log("listPro", listPro);
}

export {
  addProjectFunction,
  addProjectForm,
  showTasks,
  projects,
  myProjectComposition,
  myProjects,
};
