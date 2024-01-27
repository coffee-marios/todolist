// import _ from "lodash";
import "./style.css";
import { renderProjects, elementProject } from "./projectsDom.js";
import {
  showTasks,
  createProject,
  setActiveProject,
  activeProject,
  myProjectMethods,
} from "./projects.js";
import { clickAddTask, addTaskForm } from "./taskContainer.js";
import { editTaskForm } from "./forms.js";
import { storageAvailable } from "./storage.js";

let stateUser;

// Create the sample projects that will add at the end

const sampleProject = createProject("project1");

let sampleProjectOne;
let sampleProjectTwo;
let nameProjectSampleOne;
let nameProjectSampleTwo;
let createElementSampleOne;
let createElementSampleTwo;

// Project one

if (storageAvailable("localStorage")) {
  stateUser = localStorage.getItem("stateApplication");

  if (stateUser == null) {
    let allLocalProjects = { allProjects: [] };
    localStorage.setItem("localProjects", JSON.stringify(allLocalProjects));
    localStorage.setItem("project1", JSON.stringify(sampleProject));
    let localProject1 = localStorage.getItem("project1");
    sampleProjectOne = myProjectMethods(JSON.parse(localProject1));
    console.log("sample", sampleProjectOne);
    // Push the project in the local storage
    let allStoredProjects = localStorage.getItem("localProjects");
    let parsedProjects = JSON.parse(allStoredProjects);
    let firstProjectId = sampleProjectOne.getProjectId();
    parsedProjects.allProjects.push(firstProjectId);
    localStorage.setItem("localProjects", JSON.stringify(parsedProjects));
    console.log("arrray", parsedProjects.allProjects);
  }
}
if (!storageAvailable("localStorage")) {
  sampleProjectOne = myProjectMethods(sampleProject);
}

if (!storageAvailable("localStorage") | (stateUser == null)) {
  sampleProjectOne.addTask("Read a 90 book", "3/3/2024", "LOW", "ss");
  sampleProjectOne.addTask("Read An Empty 0 House");
}

if (!storageAvailable("localStorage") | (stateUser == null)) {
  localStorage.setItem("project1", JSON.stringify(sampleProjectOne));
}

if (!storageAvailable("localStorage") | (stateUser == null)) {
  console.log("pro", sampleProjectOne);
  setActiveProject(sampleProjectOne);
  console.log("Active project: ", activeProject);
}

// Project two
const sampleProjectNext = createProject("project2");

if (storageAvailable("localStorage")) {
  if (stateUser == null) {
    localStorage.setItem("project2", JSON.stringify(sampleProjectNext));
    let localProject2 = localStorage.getItem("project2");
    sampleProjectTwo = myProjectMethods(JSON.parse(localProject2));

    // Push the project in the local storage
    let allStoredProjects = localStorage.getItem("localProjects");
    let secondProjectId = sampleProjectTwo.getProjectId();
    let parsedProjects = JSON.parse(allStoredProjects);
    parsedProjects.allProjects.push(secondProjectId);
    localStorage.setItem("localProjects", JSON.stringify(parsedProjects));
    console.log("all 2", parsedProjects);
  }
} else {
  sampleProjectTwo = myProjectMethods(sampleProjectNext);
  nameProjectSampleTwo = sampleProjectTwo.getProjectName();
}

if (!storageAvailable("localStorage") | (stateUser == null)) {
  sampleProjectTwo.addTask("Read a great book", "3d3", "HIGH", "sas");
}
if (!storageAvailable("localStorage") | (stateUser == null)) {
  localStorage.setItem("project2", JSON.stringify(sampleProjectTwo));
}

if (!storageAvailable("localStorage") | (stateUser == null)) {
  nameProjectSampleOne = sampleProjectOne.getProjectName();
  nameProjectSampleTwo = sampleProjectTwo.getProjectName();

  createElementSampleOne = elementProject(
    nameProjectSampleOne,
    sampleProjectOne
  );

  createElementSampleTwo = elementProject(
    nameProjectSampleTwo,
    sampleProjectTwo
  );
}

///////////////////////////
////
///
//

// Create and add dom elements

function myHeader() {
  const element = document.createElement("header");

  element.classList.add("headerPage");
  element.innerHTML = "TO DO LIST";

  return element;
}

document.body.appendChild(myHeader());

const contain = document.createElement("div");
contain.classList.add("container");

// Left Side

const leftSide = document.createElement("div");
leftSide.classList.add("leftSection");
leftSide.appendChild(renderProjects());

contain.appendChild(leftSide);

// Right side

const rightSide = document.createElement("div");
rightSide.classList.add("rightSection");

// Parent task element
const myTasks = document.createElement("div");
myTasks.classList.add("tasks");
myTasks.setAttribute("id", "myTasksID");

const myTasksTitle = document.createElement("span");
myTasksTitle.innerText = "TASKS";

const addTask = document.createElement("button");
addTask.classList.add("addTask");
addTask.innerText = "+";

addTask.setAttribute("id", "addStartTaskButton");
addTask.innerText = "+";
addTask.addEventListener("click", () => {
  clickAddTask();
});
document.removeEventListener("click", clickAddTask);

rightSide.appendChild(myTasks);
myTasks.appendChild(myTasksTitle);
myTasks.appendChild(addTask);
myTasks.appendChild(addTaskForm());
myTasks.appendChild(editTaskForm());

// Child task element (task container)
const homeTaskContainer = document.createElement("div");
homeTaskContainer.classList.add("taskContainerFirst");
homeTaskContainer.setAttribute("id", "taskContainerId");

myTasks.appendChild(homeTaskContainer);

// Sum it up
contain.appendChild(rightSide);
document.body.appendChild(contain);

//
const listOfProjects = document.getElementById("listProjects");

if (storageAvailable("localStorage")) {
  // Is it the first time we run the application?
  // We want to show some initial projects for the first time

  if (stateUser !== null) {
    // Update the value
    let myLocalProjects = localStorage.getItem("localProjects");
    let objectLocalProjects = JSON.parse(myLocalProjects);

    let numberLocalProjects = objectLocalProjects.allProjects.length;
    console.log("number", objectLocalProjects.allProjects);
    if (numberLocalProjects > 0) {
      for (let i = 0; i < numberLocalProjects; i++) {
        let projectId = objectLocalProjects.allProjects[i];
        let myProject = localStorage.getItem(projectId);
        let myProjectParsed = JSON.parse(myProject);
        console.log("for id", myProjectParsed);
        let projectObject = myProjectMethods(myProjectParsed);
        let nameProject = projectObject.getProjectName();

        let createElement = elementProject(nameProject, projectObject);
        listOfProjects.appendChild(createElement);
      }
    }

    console.log("I want to stay.", objectLocalProjects.allProjects);
  }

  // First time user
  if (stateUser == null) {
    stateUser = "default";
    localStorage.setItem("stateApplication", stateUser);

    console.log("user", stateUser);
    listOfProjects.appendChild(createElementSampleOne);
    listOfProjects.appendChild(createElementSampleTwo);
    showTasks(sampleProjectOne);
  }
}

if (!storageAvailable("localStorage")) {
  listOfProjects.appendChild(createElementSampleOne);
  listOfProjects.appendChild(createElementSampleTwo);
  showTasks(sampleProjectOne);
}

addTask.addEventListener("click", () => {
  clickAddTask(activeProject);
});
