import _ from "lodash";
import "./style.css";
import { renderProjects, elementProject } from "./projectsDom.js";
import {
  showTasks,
  myProjectComposition,
  myProjects,
  setActiveProject,
  activeProject,
} from "./projects.js";
import { clickAddTask, addTaskForm, editTaskForm } from "./taskContainer.js";

// Create the sample projects that will add at the end
const sampleProjectOne = myProjectComposition("project1");
console.log("index sample object", sampleProjectOne);

const nameProjectSampleOne = sampleProjectOne.getProjectName();

myProjects.push(sampleProjectOne.getProjectName());
sampleProjectOne.addTask("task1", "Read a 90 book", "33", "low", "ss");
sampleProjectOne.addTask("task2", "Read An Empty 0 House");

console.log("first sample object", sampleProjectOne);
setActiveProject(sampleProjectOne);
console.log("Active project: ", activeProject);

const sampleProjectTwo = myProjectComposition("project2");
const nameProjectSampleTwo = sampleProjectTwo.getProjectName();
sampleProjectTwo.addTask("task1", "Read ", "3d3", "high", "sas");
myProjects.push(sampleProjectTwo.getProjectName());
console.log(myProjects);

const createElementSampleOne = elementProject(
  nameProjectSampleOne,
  sampleProjectOne
);

const createElementSampleTwo = elementProject(
  nameProjectSampleTwo,
  sampleProjectTwo
);

///////////////////////////
////
///
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
//

const listOfProjects = document.getElementById("listProjects");
listOfProjects.appendChild(createElementSampleOne);
listOfProjects.appendChild(createElementSampleTwo);
// We have to show some tasks
let show1 = sampleProjectOne.getTaskList();
let taskP = Object.values(show1);
console.log("index-tasks ", taskP);

showTasks(sampleProjectOne);

addTask.addEventListener("click", () => {
  clickAddTask(activeProject);
});
