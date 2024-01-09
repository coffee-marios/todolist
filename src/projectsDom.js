import {
  addProjectFunction,
  addProjectForm,
  showTasks,
  activeProject,
  chosenTask,
  setChosenTask,
} from "./projects.js";
import { clickEditTask } from "./taskContainer.js";

function clickRemoveTask(event) {
  setChosenTask(event);
  activeProject.deleteTask(chosenTask);
}

function setCompleted(event, buttonCompletion) {
  setChosenTask(event);
  console.clear();
  let { completed } = event;
  completed = !completed;
  if (completed == false) {
    buttonCompletion.textContent = "Open";
  } else {
    buttonCompletion.textContent = "Closed";
  }

  activeProject.endTask(chosenTask, completed);
}

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
  console.clear();
  console.log(chosenTask);

  const myContainer = document.getElementById("taskContainerId");
  myContainer.replaceChildren();
  console.log("myTasks dom, ", myTasks);

  for (const eachTask of myTasks) {
    const newTask = document.createElement("div");
    newTask.classList.add("tasksUnit");
    newTask.setAttribute("id", eachTask["nameId"]);

    // New title
    const newTitle = document.createElement("p");
    newTitle.textContent = eachTask.name;

    // Place notes
    const setNotes = document.createElement("div");
    setNotes.textContent = eachTask.notes;
    setNotes.classList.add("myNotes");
    const idNote = "";
    setNotes.setAttribute("id", idNote);

    // New extras
    const newExtras = document.createElement("div");
    // New date
    const newDueDate = document.createElement("span");
    newDueDate.textContent = eachTask.date;
    newExtras.appendChild(newDueDate);
    // New priority
    const newPriority = document.createElement("span");
    newPriority.textContent = `PRIORITY: ${eachTask.priority}`;
    newExtras.appendChild(newPriority);

    // New task setting
    const newSetting = document.createElement("div");

    // Completed
    const completed = document.createElement("button");
    completed.textContent = "Open";
    completed.addEventListener(
      "click",
      () => {
        setCompleted(eachTask, completed);
      },
      false
    );
    if (eachTask["completed"]) {
      //console.log("myTasks dom, ", true);
      newTask.classList.add("taskCompleted");
      completed.textContent = "Closed";
    }

    newSetting.appendChild(completed);

    // New edit
    const newEdit = document.createElement("button");
    newEdit.classList.add("buttonEditTask");
    newEdit.textContent = "Edit";
    newEdit.addEventListener(
      "click",
      () => {
        clickEditTask(eachTask);
      },
      false
    );

    newSetting.appendChild(newEdit);

    // Remove task
    const removeTask = document.createElement("button");
    removeTask.classList.add("removeTask");
    removeTask.textContent = "Remove";
    removeTask.addEventListener(
      "click",
      () => {
        clickRemoveTask(eachTask);
      },
      false
    );

    newSetting.appendChild(removeTask);

    myContainer.appendChild(newTask);
    newTask.appendChild(newTitle);
    newTask.appendChild(newExtras);
    newTask.appendChild(setNotes);
    newTask.appendChild(newSetting);

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

  myProjects.appendChild(addProject);

  return myProjects;
}

export { renderProjects, elementProject, domShowTasks };
