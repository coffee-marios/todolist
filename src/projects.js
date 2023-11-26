// Manipulate projects

import { elementProject, domShowTasks } from "./projectsDom.js";

let activeProject;

function setActiveProject(setProject) {
  activeProject = setProject;
}

// Sample projects
const projects = {
  project1: {
    name: "Title1",
    taskList: [
      { task0: { name: "Read a book", dueDate: "dd/mm/yy", priority: "low" } },
      {
        task1: {
          name: "Read An Empty House",
          dueDate: "dd/mm/yy",
          priority: "low",
        },
      },
    ],
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
  addTask: function (
    name,
    newTask,
    date = "dd/mm/yy",
    priority = "low",
    notes = ""
  ) {
    this.taskId = assignTaskId();
    let internalTask = {};

    internalTask["name"] = newTask;
    internalTask["date"] = date;
    internalTask["priority"] = priority;
    internalTask["notes"] = notes;

    this.taskList[this.taskId] = internalTask;
  },
};

function myProjectComposition(name, taskList = {}) {
  return { name, taskList, ...myProjectMethods };
}

function showTasks(projectL) {
  console.clear();
  setActiveProject(projectL);
  console.log("Active project: ", projectL.getProjectName());

  console.log("project: ", projectL);
  let myProtoTasks = null;
  myProtoTasks = projectL.getTaskList();
  const myTasks = Object.values(myProtoTasks);

  console.log("myTasks, ", myTasks);
  console.log(myProtoTasks);

  console.log(Array.isArray(myTasks), myTasks.length);
  domShowTasks(myTasks);
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

const createNewId = () => {
  let idProject = 0;
  return () => {
    idProject++;
    return idProject;
  };
};

const assignProjectId = createNewId();
const assignTaskId = createNewId();

function appendProject(newProject, keyProject) {
  console.clear();
  setActiveProject(keyProject);
  console.log("Active project: ", keyProject);
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
  activeProject,
  setActiveProject,
  createNewId,
};
