import { activeProject } from "./projects.js";

// Task container

// Right now it doesn't really do anything

function taskContainer(project) {
  const containerTask = document.createElement("div");
  containerTask.classList.add("taskContainerFirst");
  console.log(project);
  console.log(project["taskList"]);
  return project;
}

function clickAddTask() {
  console.clear();
  document.getElementById("addTaskDiv").style.display = "block";
  console.log("Active project: ", activeProject);
}

function clickFormInput() {
  event.preventDefault();
  document.getElementById("addTaskDiv").style.display = "none";
  const myFormTask = document.getElementById("addTaskForm");
  const newTask = myFormTask["name"].value;
  const newDate = myFormTask["date"].value;
  let newImportance = myFormTask["priority"].value;
  const newNotes = myFormTask["textAreaTask"].value;

  console.clear();
  console.log(newTask, newDate, newImportance, newNotes);
  const taskSet = [
    { name: newTask, date: newDate, priority: newImportance, notes: newNotes },
  ];
  appendNewTask(taskSet);
}

function appendNewTask(newTask) {
  const myContainer = document.getElementById("taskContainerId");
  for (const property of newTask) {
    console.log("property: ", property);
    const newTask = document.createElement("div");
    newTask.classList.add("tasksUnit");

    // New title
    const newTitle = document.createElement("p");
    newTitle.textContent = property.name;

    // New extras
    const newExtras = document.createElement("div");

    // New date
    const newDueDate = document.createElement("span");
    newDueDate.textContent = property.date;
    newExtras.appendChild(newDueDate);

    // New priority
    const newPriority = document.createElement("span");
    newPriority.textContent = `PRIORITY: ${property.priority}`;
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

function addTaskForm() {
  const addElementContainer = document.createElement("div");
  addElementContainer.setAttribute("id", "addTaskDiv");
  const taskForm = document.createElement("form");
  taskForm.setAttribute("id", "addTaskForm");
  addElementContainer.appendChild(taskForm);

  // Name the Task
  const elementNameTask = document.createElement("div");
  const labelTask = document.createElement("label");
  labelTask.textContent = "Name the new task";
  labelTask.setAttribute("for", "newTask");

  const nameTask = document.createElement("input");
  nameTask.setAttribute("id", "newTask");
  nameTask.type = "text";
  nameTask.name = "name";

  elementNameTask.appendChild(labelTask);
  elementNameTask.appendChild(nameTask);
  taskForm.appendChild(elementNameTask);

  // Due Date
  const elementDate = document.createElement("div");
  elementDate.setAttribute("id", "dateDiv");

  const labelDate = document.createElement("label");
  labelDate.textContent = "Date: ";
  labelDate.setAttribute("for", "dueDate");

  const inputDateTask = document.createElement("input");
  inputDateTask.setAttribute("id", "dueDate");
  inputDateTask.type = "date";
  inputDateTask.name = "date";
  taskForm.appendChild(labelDate);
  taskForm.appendChild(inputDateTask);

  elementDate.appendChild(labelDate);
  elementDate.appendChild(inputDateTask);
  taskForm.appendChild(elementDate);

  // Priority

  const priorityElement = document.createElement("div");
  priorityElement.setAttribute("id", "priorityDiv");

  const priorityTitle = document.createElement("p");
  priorityTitle.textContent = "Priority";
  priorityTitle.setAttribute("id", "priority");

  // HIGH
  const inputPriorityHigh = document.createElement("input");
  inputPriorityHigh.setAttribute("class", "inputPriority");
  inputPriorityHigh.setAttribute("id", "highPriority");
  inputPriorityHigh.setAttribute("value", "high");

  inputPriorityHigh.type = "radio";
  inputPriorityHigh.name = "priority";

  const labelPriorityHigh = document.createElement("label");
  labelPriorityHigh.textContent = "High";
  labelPriorityHigh.setAttribute("class", "labelPriority");
  labelPriorityHigh.setAttribute("for", "highPriority");

  // MEDIUM
  const inputPriorityMedium = document.createElement("input");
  inputPriorityMedium.setAttribute("class", "inputPriority");
  inputPriorityMedium.setAttribute("id", "mediumPriority");
  inputPriorityMedium.setAttribute("value", "medium");

  inputPriorityMedium.type = "radio";
  inputPriorityMedium.name = "priority";

  const labelPriorityMedium = document.createElement("label");
  labelPriorityMedium.textContent = "Medium";
  labelPriorityMedium.setAttribute("class", "labelPriority");
  labelPriorityMedium.setAttribute("for", "mediumPriority");

  // LOW
  const inputPriorityLow = document.createElement("input");
  inputPriorityLow.setAttribute("class", "inputPriority");
  inputPriorityLow.setAttribute("id", "lowPriority");
  inputPriorityLow.setAttribute("value", "low");

  inputPriorityLow.type = "radio";
  inputPriorityLow.name = "priority";

  const labelPriorityLow = document.createElement("label");
  labelPriorityLow.textContent = "Low";
  labelPriorityLow.setAttribute("class", "labelPriority");
  labelPriorityLow.setAttribute("for", "lowPriority");

  priorityElement.appendChild(priorityTitle);

  priorityElement.appendChild(inputPriorityHigh);
  priorityElement.appendChild(labelPriorityHigh);
  priorityElement.appendChild(inputPriorityMedium);
  priorityElement.appendChild(labelPriorityMedium);
  priorityElement.appendChild(inputPriorityLow);
  priorityElement.appendChild(labelPriorityLow);
  taskForm.appendChild(priorityElement);

  // Notes

  const notesElement = document.createElement("div");
  notesElement.setAttribute("id", "notesDiv");

  const notesTitle = document.createElement("label");
  notesTitle.textContent = "Notes";
  notesTitle.setAttribute("for", "textAreaTask");
  const taskTextArea = document.createElement("textarea");
  taskTextArea.setAttribute("id", "textAreaTask");
  taskTextArea.setAttribute("rows", "5");
  taskTextArea.setAttribute("cols", "50");
  taskTextArea.name = "textAreaTask";

  notesElement.appendChild(notesTitle);
  notesElement.appendChild(taskTextArea);
  taskForm.appendChild(notesElement);

  // Button
  const addButton = document.createElement("button");
  addButton.setAttribute("id", "buttonTaskForm");
  addButton.textContent = "ADD";
  addButton.addEventListener("click", clickFormInput, false);

  taskForm.appendChild(addButton);
  return addElementContainer;
}

export { taskContainer, clickAddTask, addTaskForm };
