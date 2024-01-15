import { elementProject, domShowTasks } from "./projectsDom.js";

let activeProject;
let chosenTask;

function setChosenTask(task) {
  chosenTask = task;
}

function setActiveProject(setProject) {
  console.clear();

  console.log("A", activeProject);

  // We set the active project and change the color of the button
  if (activeProject !== undefined) {
    let projectName = activeProject.getProjectName();
    let projectId = document.getElementById(projectName);
    if (projectId !== null) {
      projectId.classList.remove("activeProject");
    }
  }

  activeProject = setProject;
  let _projectName = activeProject.getProjectName();
  let _projectId = document.getElementById(_projectName);

  if (_projectId !== null) {
    _projectId.classList.add("activeProject");
  }
}

// All the projects names
const myProjects = [];

function createProject(name) {
  return { name, taskList: {} };
}

// The argument will be the instantiation of createProject
function myProjectMethods(myProject) {
  return {
    ...myProject,
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
      console.clear();
      let idTask = obsoleteTask["nameId"];
      delete this.taskList[idTask];
      console.log(this.taskList);
      const myTasks = Object.values(this.taskList);
      domShowTasks(myTasks);
    },
    modifyTask: function (oldTask, newTask) {
      //console.clear();
      let idTask = oldTask["nameId"];

      let getTask = activeProject.getTaskList();
      console.log("idTask", idTask);

      console.log("old", oldTask, idTask);
      console.log("new", newTask);
      console.log("Task to change: ", chosenTask["nameId"]);
      console.log(activeProject);
      console.log("TASK CASE", this.taskList[idTask]);
      this.taskList[idTask] = newTask;
      this.taskList[idTask]["nameId"] = idTask;

      console.log("TASK", getTask);
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
      console.log("PRIVATE task, ", this.taskList);
    },
  };
}

function showTasks(projectL) {
  console.log("Show: ", projectL);

  setActiveProject(projectL);
  console.log("Active project: ", projectL.getProjectName());

  console.log("project: ", projectL);
  let myProtoTasks = null;
  myProtoTasks = projectL.getTaskList();
  //console.clear();
  const myTasks = Object.values(myProtoTasks);
  const nameId = activeProject.getTaskId() + 1;

  console.log("myTasks: ", myTasks);

  console.log("nameId, ", nameId);

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
    const newProjectEmpty = createProject(keyProject);
    const newProject = myProjectMethods(newProjectEmpty);
    appendProject(newTitle, newProject);
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
  return () => {
    idProject++;
    return idProject;
  };
};

const assignProjectId = createNewId();
const assignTaskId = createNewId();

function appendProject(newProject, keyProject) {
  const listProjects = document.getElementById("listProjects");
  const titleProject = elementProject(newProject, keyProject);

  listProjects.appendChild(titleProject);

  setActiveProject(keyProject);
  showTasks(keyProject);
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
