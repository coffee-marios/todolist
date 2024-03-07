import {
  addProjectFunction,
  addProjectForm,
  showTasks,
  activeProject,
  chosenTask,
  setChosenTask,
} from "./projects.js";
import { clickEditTask } from "./taskContainer.js";
import { storageAvailable } from "./storage.js";

function removeProject(project) {
  if (storageAvailable("localStorage")) {
    let localProjects = localStorage.getItem("localProjects");
    let parsedLocalTasks = JSON.parse(localProjects);
    let projectId = project.firstChild.id;
    let projectsArray = parsedLocalTasks.allProjects;

    const arrayWithoutRemovedProject = projectsArray.filter(function (project) {
      return project !== projectId;
    });
    let allLocalProjects = { allProjects: arrayWithoutRemovedProject };

    localStorage.setItem("localProjects", JSON.stringify(allLocalProjects));

    let activeProject = localStorage.getItem("ActiveProject");
    if (activeProject == projectId) {
      localStorage.setItem("ActiveProject", "justDeleted");
    }

    localStorage.removeItem(projectId);
  }

  project.remove();
}

function clickRemoveTask(event) {
  setChosenTask(event);
  activeProject.deleteTask(chosenTask);
  if (storageAvailable("localStorage")) {
    let idProject = activeProject.getProjectId();
    localStorage.setItem(idProject, JSON.stringify(activeProject));
  }
}

function setCompleted(event, buttonCompletion) {
  setChosenTask(event);

  let { completed } = event;
  completed = !completed;
  if (completed == false) {
    buttonCompletion.textContent = "Close";
  } else {
    buttonCompletion.textContent = "Open";
  }

  activeProject.endTask(chosenTask, completed);
  if (storageAvailable("localStorage")) {
    let idProject = activeProject.getProjectId();
    localStorage.setItem(idProject, JSON.stringify(activeProject));
  }
}

function elementProject(nameProjectDom, keyProject) {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("projectsUnit");

  // The project
  const newProject = document.createElement("button");
  newProject.classList.add("buttonProjects");
  let projectId = keyProject.getProjectId();
  newProject.setAttribute("id", projectId);

  newProject.textContent = nameProjectDom;

  newProject.addEventListener("click", () => {
    showTasks(keyProject);
  });
  projectDiv.appendChild(newProject);

  // The option to remove it
  const removeProjectButton = document.createElement("button");
  let buttonRemoveDisplay = projectId + "Button";

  removeProjectButton.setAttribute("id", buttonRemoveDisplay);
  removeProjectButton.classList.add("removeProjects", "hideRemoveButton");
  removeProjectButton.textContent = "X";
  removeProjectButton.addEventListener("click", () => {
    removeProject(projectDiv);
  });
  projectDiv.appendChild(removeProjectButton);

  projectDiv.addEventListener(
    "mouseover",
    () => {
      removeProjectButton.classList.remove("hideRemoveButton");
    },
    false
  );

  projectDiv.addEventListener(
    "mouseout",
    () => {
      removeProjectButton.classList.add("hideRemoveButton");
    },
    false
  );

  return projectDiv;
}

function domShowTasks(myTasks) {
  const myContainer = document.getElementById("taskContainerId");
  if (myContainer !== null) {
    myContainer.replaceChildren();
  }

  for (const eachTask of myTasks) {
    const newTask = document.createElement("div");
    newTask.classList.add("tasksUnit");
    newTask.setAttribute("id", eachTask["nameId"]);
    myContainer.appendChild(newTask);

    // New title
    const newTitle = document.createElement("span");
    newTitle.textContent = eachTask.name;
    newTitle.classList.add("titleTask");
    newTask.appendChild(newTitle);

    // New extras (date, priority)
    const newExtras = document.createElement("div");
    newExtras.classList.add("taskDatePriority");

    // New date
    if (eachTask.date !== "") {
      const newDueDate = document.createElement("span");
      let eachDate = eachTask.date;
      let re = /-|\s/gi;
      let formatDate = eachDate.replace(re, "/");
      newDueDate.textContent = formatDate;
      newDueDate.classList.add("taskDate");
      newExtras.appendChild(newDueDate);
    }

    // New priority
    const newPriority = document.createElement("span");
    newPriority.textContent = `priority: ${eachTask.priority}`;
    newPriority.classList.add("taskPriority");
    newExtras.appendChild(newPriority);

    newTask.appendChild(newExtras);

    if (eachTask.priority == "HIGH") {
      newTask.classList.add("taskUnitUrgent");
    }
    if (eachTask.priority == "MEDIUM") {
      newTask.classList.add("taskUnitImportant");
    }

    // Place notes
    if (eachTask.notes !== "") {
      const setNotes = document.createElement("div");
      setNotes.textContent = eachTask.notes;
      setNotes.classList.add("myNotes");
      const idNote = "";
      setNotes.setAttribute("id", idNote);
      newTask.appendChild(setNotes);
    }

    // New task setting
    const newSetting = document.createElement("div");
    newSetting.classList.add("taskSettings");

    // Completed
    const completed = document.createElement("button");
    completed.textContent = "Close";
    completed.addEventListener(
      "click",
      () => {
        setCompleted(eachTask, completed);
      },
      false
    );
    if (eachTask["completed"]) {
      newTask.classList.add("taskCompleted");
      completed.textContent = "Open";
    }

    newSetting.appendChild(completed);

    // New edit
    const newEdit = document.createElement("button");
    newEdit.classList.add("buttonEditTask");
    newEdit.textContent = "Edit";

    newEdit.addEventListener(
      "click",
      () => {
        clickEditTask(eachTask, newTitle);
      },
      false
    );

    newSetting.appendChild(newEdit);

    // Remove task
    const removeTask = document.createElement("button");
    removeTask.classList.add("removeTask");
    removeTask.textContent = "Delete";
    removeTask.addEventListener(
      "click",
      () => {
        clickRemoveTask(eachTask);
      },
      false
    );

    newSetting.appendChild(removeTask);

    newTask.appendChild(newSetting);
  }
}

function renderProjects() {
  const myProjects = document.createElement("div");
  myProjects.classList.add("projects");

  myProjects.appendChild(addProjectForm());

  const myProjectsHeader = document.createElement("div");

  myProjectsHeader.setAttribute("id", "projectsHeader");
  myProjects.appendChild(myProjectsHeader);

  const myProjectsTitle = document.createElement("p");
  myProjectsTitle.textContent = "PROJECTS";

  myProjectsTitle.setAttribute("id", "projectsTitle");

  myProjectsHeader.appendChild(myProjectsTitle);

  const addProject = document.createElement("button");
  addProject.setAttribute("id", "startProjectButton");
  addProject.innerText = "+";
  addProject.addEventListener("click", addProjectFunction);
  myProjectsHeader.appendChild(addProject);

  const listProjects = document.createElement("div");
  listProjects.setAttribute("id", "listProjects");

  myProjects.appendChild(listProjects);

  return myProjects;
}

export { renderProjects, elementProject, domShowTasks };
