import { elementProject, domShowTasks } from "./projectsDom.js";
import { storageAvailable } from "./storage.js";

let activeProject;
let chosenTask;

function setChosenTask(task) {
  chosenTask = task;
}

function setActiveProject(setProject) {
  let projectId;
  let elementId;
  // We set the active project and change the color of the button
  if (activeProject !== undefined) {
    projectId = activeProject.getProjectId();
  }

  if (projectId !== undefined) {
    elementId = document.getElementById(projectId);
  }

  if (elementId !== null && elementId !== undefined) {
    elementId.classList.remove("activeProject");
  }

  activeProject = setProject;

  let new_projectId = setProject.getProjectId();
  let new_elementId = document.getElementById(new_projectId);
  if (new_elementId != null) {
    new_elementId.classList.add("activeProject");
  }

  if (storageAvailable("localStorage") && new_projectId !== undefined) {
    localStorage.setItem("ActiveProject", new_projectId);
  }
}

// All the projects names
const myProjects = [];

function createProject(name) {
  return { name, taskList: {}, id: "project" + assignProjectId() };
}

// The argument will be the instantiation of createProject
function myProjectMethods(myProject) {
  return {
    ...myProject,
    getProjectId: function () {
      return this.id;
    },
    getTaskId: function () {
      return this.taskId;
    },
    getProject: function () {
      return this;
    },
    getProjectName: function () {
      return this.name;
    },
    getTaskList: function () {
      return this.taskList;
    },
    endTask: function (taskInQuestion, isCompleted) {
      // It changes only the visual aspect of the task
      taskInQuestion["completed"] = isCompleted;
      let myElementTask = document.getElementById(chosenTask["nameId"]);
      if (isCompleted) {
        myElementTask.classList.add("taskCompleted");
      } else {
        myElementTask.classList.remove("taskCompleted");
      }
    },
    deleteTask: function (obsoleteTask) {
      let idTask = obsoleteTask["nameId"];
      delete this.taskList[idTask];

      const myTasks = Object.values(this.taskList);
      domShowTasks(myTasks);
    },
    modifyTask: function (oldTask, newTask) {
      let idTask = oldTask["nameId"];
      this.taskList[idTask] = newTask;
      this.taskList[idTask]["nameId"] = idTask;
    },
    addTask: function (name, date = "02/mm/yy", priority = "LOW", notes = "") {
      let taskId = assignTaskId();

      let nameIdTask = "task" + taskId;
      let internalTask = {};

      internalTask["nameId"] = nameIdTask;
      internalTask["name"] = name;
      internalTask["date"] = date;
      internalTask["priority"] = priority;
      internalTask["notes"] = notes;
      internalTask["completed"] = false;

      // Every task is a value whose key is nameIdTask
      this.taskList[nameIdTask] = internalTask;
    },
  };
}

function showTasks(projectL) {
  setActiveProject(projectL);

  let myProtoTasks = null;
  myProtoTasks = projectL.getTaskList();

  const myTasks = Object.values(myProtoTasks);
  // const nameId = activeProject.getTaskId() + 1;

  domShowTasks(myTasks);
}

function clickAddProject(event) {
  event.preventDefault();

  document.getElementById("addProjectDiv").style.display = "none";
  const myForm = document.getElementById("addProjectForm");

  const newTitle = myForm["name"].value;
  if (newTitle !== "") {
    const newProjectEmpty = createProject(newTitle);

    let newProject = myProjectMethods(newProjectEmpty);

    if (storageAvailable("localStorage")) {
      let projectId = newProject.getProjectId();
      localStorage.setItem(projectId, JSON.stringify(newProjectEmpty));
      let allStoredProjects = localStorage.getItem("localProjects");
      let parsedProjects = JSON.parse(allStoredProjects);
      parsedProjects.allProjects.push(projectId);
      localStorage.setItem("localProjects", JSON.stringify(parsedProjects));
    }

    appendProject(newTitle, newProject);
    // } else {
    //   newProject = myProjectMethods(newProjectEmpty);
    // }
  }
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
  if (storageAvailable("localStorage")) {
    let localId = localStorage.getItem("lastId");

    if (localId !== null) {
      idProject = localId;
    }
  }

  return () => {
    idProject++;
    localStorage.setItem("lastId", idProject);
    return idProject;
  };
};

const assignProjectId = createNewId();
const assignTaskId = createNewId();

function appendProject(newProjectTitle, keyProject) {
  const listProjects = document.getElementById("listProjects");
  const titleProject = elementProject(newProjectTitle, keyProject);

  showTasks(keyProject);
  listProjects.appendChild(titleProject);
  setActiveProject(keyProject);
}

export {
  addProjectFunction,
  addProjectForm,
  showTasks,
  createProject,
  myProjectMethods,
  myProjects,
  activeProject,
  setChosenTask,
  setActiveProject,
  createNewId,
  chosenTask,
};
