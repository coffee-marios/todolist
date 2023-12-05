import { activeProject, createNewId } from "./projects.js";
import { editTaskForm } from "./forms.js";

const nameTaskId = createNewId();

function clickEditTask(event) {
  // runs when the task is chosen
  console.log("Editt", event);
  const editTaskDiv = document.getElementById("editTaskDiv");
  const [{ name, date, priority, notes }] = event;
  console.log("prp", name, date, priority, notes);

  const valueTask = document.getElementById("newTask");
  //valueTask.setAttribute("value", name);
  valueTask.value = name;
  console.log("value:", valueTask.value);

  editTaskDiv.style.display = "block";
  console.log("after:", editTaskDiv);
}

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

function formAddTaskMethod(taskSet) {
  // Adds the task to the project

  const taskData = getFormDataTask(taskSet);
  appendNewTask(taskData);

  const nameId = nameTaskId() + "task";

  const [{ name, date, priority, notes }] = taskData;

  activeProject.addTask(nameId, name, date, priority, notes);
  console.log(activeProject);
}

function getFormDataTask() {
  event.preventDefault();
  document.getElementById("addTaskDiv").style.display = "none";
  const myFormTask = document.getElementById("addTaskForm");
  const newTask = myFormTask["name"].value;
  const newDate = myFormTask["date"].value;
  let newImportance = myFormTask["priority"].value;
  const newNotes = myFormTask["textAreaTask"].value;

  console.clear();

  console.log("Active project: ", activeProject);
  const taskSet = [
    { name: newTask, date: newDate, priority: newImportance, notes: newNotes },
  ];

  return taskSet;
}

function appendNewTask(taskSet) {
  console.log("Task properties: ", taskSet);
  const myContainer = document.getElementById("taskContainerId");
  for (const property of taskSet) {
    console.log("property: ", property);
    const newTaskDom = document.createElement("div");
    newTaskDom.classList.add("tasksUnit");

    // New title
    const newTitle = document.createElement("p");
    const nameTitleTask = property.name;
    newTitle.textContent = nameTitleTask;

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
    const newNotesElement = document.createElement("button");

    newNotesElement.textContent = "Notes";
    newExtras.appendChild(newNotesElement);
    const newNotesText = document.createElement("pre");
    newNotesText.classList.add("notesPre");
    newNotesText.textContent = property.notes;

    // New edit
    const newEdit = document.createElement("button");
    newEdit.textContent = "**";
    newExtras.appendChild(newEdit);
    newEdit.addEventListener(
      "click",
      () => {
        clickEditTask(taskSet);
      },
      false
    );

    myContainer.appendChild(newTaskDom);
    newTaskDom.appendChild(newTitle);
    newTaskDom.appendChild(newExtras);
    newExtras.appendChild(newNotesText);
    myContainer.appendChild(newTaskDom);
  }
}

function addTaskForm() {
  const addElementContainer = document.createElement("div");
  addElementContainer.setAttribute("id", "addTaskDiv");

  const taskForm = document.createElement("form");
  taskForm.setAttribute("id", "addTaskForm");

  // Name the Task
  const elementNameTask = document.createElement("div");
  const labelTask = document.createElement("label");
  labelTask.textContent = "Name the new task";
  labelTask.setAttribute("for", "newTask");

  const nameTask = document.createElement("input");
  nameTask.setAttribute("id", "newTask");
  nameTask.value = "Name the task";
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

  addElementContainer.appendChild(taskForm);

  const addButton = document.createElement("button");
  addButton.setAttribute("id", "buttonTaskForm");
  addButton.textContent = "ADD";
  addButton.addEventListener("click", formAddTaskMethod, false);

  taskForm.appendChild(addButton);

  return addElementContainer;
}

export { taskContainer, clickAddTask, addTaskForm, editTaskForm };
