// Task container

function taskContainer(project) {
  const containerTask = document.createElement("div");
  containerTask.classList.add("taskContainerFirst");
  console.log(project);
  console.log(project["taskList"]);
  return project;
}

export { taskContainer };
/* 
// First task
const fistTask_project1 = document.createElement("div");
fistTask_project1.classList.add("tasksUnit");
const firstTitle_firstProject = document.createElement("p");
firstTitle_firstProject.innerText = "Read 1000 nights";

const firstTask_firstProject_extras = document.createElement("div");

// Date
const first_first_dueDate = document.createElement("span");
first_first_dueDate.innerText = "dd/mm/yy";
firstTask_firstProject_extras.appendChild(first_first_dueDate);

// Priority
const first_first_priority = document.createElement("span");
first_first_priority.innerText = "priority: high";
firstTask_firstProject_extras.appendChild(first_first_priority);

// Notes
const first_first_notes = document.createElement("button");
first_first_notes.innerText = "Notes";
firstTask_firstProject_extras.appendChild(first_first_notes);

// Edit
const first_first_edit = document.createElement("button");
first_first_edit.innerText = "*";
firstTask_firstProject_extras.appendChild(first_first_edit);

firstTaskContainerFirst.appendChild(fistTask_project1);
fistTask_project1.appendChild(firstTitle_firstProject);
fistTask_project1.appendChild(firstTask_firstProject_extras);

// Second task

const secondTask_project1 = document.createElement("div");
secondTask_project1.classList.add("tasksUnit");
const secondTitle_firstProject = document.createElement("p");
secondTitle_firstProject.innerText = "Read An Empty House";

// Date

const secondTask_firstProject_extras = document.createElement("div");
const second_first_dueDate = document.createElement("span");
second_first_dueDate.innerText = "0d/mm/yy";
secondTask_firstProject_extras.appendChild(second_first_dueDate);

// Priority
const second_first_priority = document.createElement("span");
second_first_priority.innerText = "priority";
secondTask_firstProject_extras.appendChild(second_first_priority);

// Notes
const second_first_notes = document.createElement("button");
second_first_notes.innerText = "Notes";
secondTask_firstProject_extras.appendChild(second_first_notes);

// Edit
const second_first_edit = document.createElement("button");
second_first_edit.innerText = "*";
secondTask_firstProject_extras.appendChild(second_first_edit);

firstTaskContainerFirst.appendChild(secondTask_project1);
secondTask_project1.appendChild(secondTitle_firstProject);
secondTask_project1.appendChild(secondTask_firstProject_extras);
 */
