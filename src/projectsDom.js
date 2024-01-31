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
    console.log(projectsArray);

    const arrayWithoutRemovedProject = projectsArray.filter(function (project) {
      return project !== projectId;
    });
    let allLocalProjects = { allProjects: arrayWithoutRemovedProject };

    localStorage.setItem("localProjects", JSON.stringify(allLocalProjects));

    let activeProject = localStorage.getItem("ActiveProject");
    if (activeProject == projectId) {
      localStorage.setItem("ActiveProject", "justDeleted");
    }

    console.log("filter", arrayWithoutRemovedProject);

    localStorage.removeItem(projectId);
  }

  //

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
  console.clear();
  let { completed } = event;
  completed = !completed;
  if (completed == false) {
    buttonCompletion.textContent = "Open";
  } else {
    buttonCompletion.textContent = "Closed";
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
    const newTitle = document.createElement("p");
    newTitle.textContent = eachTask.name;

    newTask.appendChild(newTitle);

    // New extras (date, priority)
    const newExtras = document.createElement("div");

    // New date
    if (eachTask.date !== "") {
      const newDueDate = document.createElement("span");
      newDueDate.textContent = eachTask.date;
      newExtras.appendChild(newDueDate);
    }

    // New priority
    const newPriority = document.createElement("span");
    newPriority.textContent = `PRIORITY: ${eachTask.priority}`;
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

  const myProjectsTitle = document.createElement("p");
  myProjectsTitle.innerText = "PROJECTS";

  myProjects.appendChild(myProjectsTitle);

  const listProjects = document.createElement("div");
  listProjects.setAttribute("id", "listProjects");

  // if (storageAvailable("localStorage")) {
  //   storeProject("localListProjects", listProjects);
  //   let localProjectList = localStorage.getItem("localListProjects");

  // }

  console.log("list projects", typeof listProjects);

  myProjects.appendChild(listProjects);

  const addProject = document.createElement("button");
  addProject.setAttribute("id", "startProjectButton");
  addProject.innerText = "+";
  addProject.addEventListener("click", addProjectFunction);

  myProjects.appendChild(addProject);

  return myProjects;
}

export { renderProjects, elementProject, domShowTasks };
