export default function container() {
  const contain = document.createElement("div");
  contain.classList.add("container");

  const leftSide = document.createElement("div");
  leftSide.classList.add("leftSection");

  const myProjects = document.createElement("div");
  myProjects.classList.add("projects");

  const myProjectsTitle = document.createElement("p");
  myProjectsTitle.innerText = "PROJECTS";

  const firstProject = document.createElement("button");
  firstProject.innerText = "Read 100 Books";

  const secondProject = document.createElement("button");
  secondProject.innerText = "Update my website";

  const addProject = document.createElement("button");
  addProject.classList.add("addProject");
  addProject.innerText = "Add a project";

  leftSide.appendChild(myProjects);
  myProjects.appendChild(myProjectsTitle);
  myProjects.appendChild(firstProject);
  myProjects.appendChild(secondProject);
  myProjects.appendChild(addProject);

  // Right side

  const rightSide = document.createElement("div");
  rightSide.classList.add("rightSection");

  const myTasks = document.createElement("div");
  myTasks.classList.add("tasks");

  const myTasksTitle = document.createElement("span");
  myTasksTitle.innerText = "TASKS";

  const addTask = document.createElement("button");
  addTask.classList.add("addTask");
  addTask.innerText = "+";

  rightSide.appendChild(myTasks);
  myTasks.appendChild(myTasksTitle);
  myTasks.appendChild(addTask);

  // Task container
  const firstTaskContainer = document.createElement("div");
  firstTaskContainer.classList.add("taskContainer");
  myTasks.appendChild(firstTaskContainer);

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

  firstTaskContainer.appendChild(fistTask_project1);
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

  firstTaskContainer.appendChild(secondTask_project1);
  secondTask_project1.appendChild(secondTitle_firstProject);
  secondTask_project1.appendChild(secondTask_firstProject_extras);

  contain.appendChild(leftSide);
  contain.appendChild(rightSide);
  return contain;
}
