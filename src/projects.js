import { elementProject, domShowTasks } from "./projectsDom.js";

let activeProject;
let chosenTask;

function setChosenTask(task) {
  chosenTask = task;
}

function setActiveProject(setProject) {
  activeProject = setProject;
}

// How the objects are structured
// const projects = {
//  project1: {
// name: "Title1",
// taskList: [
//   { task0: { name: "Read a book", dueDate: "dd/mm/yy", priority: "low" } },
//   {
//     task1: {
//       name: "Read An Empty House",
//       dueDate: "dd/mm/yy",
//       priority: "low",
//     },
//   },
// ],
// },
// project2: {
//   name: "Title2",
//   taskList: [],
//  },
// };

// All the projects names
const myProjects = [];

function createProject(name) {
  return { name };
}

function myProjectMethods(myProject) {
  let taskId = -1;

  const privateTaskList = {
    taskList: {},
  };

  return {
    ...myProject,
    getTaskId: function () {
      return taskId;
    },
    getProject: function () {
      return this;
    },
    getProjectName: function () {
      return this.name;
    },
    getTaskList: function () {
      return privateTaskList.taskList;
    },
    modifyTask: function (
      old,
      newTask
      // nameId,
      // name = null,
      // date = null,
      // priority = null,
      // notes = null
    ) {
      let idTask = Number(old["nameId"]);
      idTask = Number(idTask);
      //console.clear();
      console.log("old", old, idTask);
      console.log("new", newTask);
      console.log("Task to change: ", privateTaskList.taskList[idTask]);
      privateTaskList.taskList[idTask] = newTask;
      console.log(privateTaskList.taskList);
    },
    addTask: function (name, date = "dd/mm/yy", priority = "low", notes = "") {
      taskId++;
      let internalTask = {};

      internalTask["nameId"] = taskId;
      internalTask["name"] = name;
      internalTask["date"] = date;
      internalTask["priority"] = priority;
      internalTask["notes"] = notes;

      privateTaskList.taskList[taskId] = internalTask;
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

function appendProject(newProject, keyProject) {
  setActiveProject(keyProject);

  const listProjects = document.getElementById("listProjects");
  const titleProject = elementProject(newProject, keyProject);
  listProjects.appendChild(titleProject);
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
