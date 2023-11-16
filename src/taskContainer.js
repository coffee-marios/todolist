// Task container

// Right now it doesn't really do anything

function taskContainer(project) {
  const containerTask = document.createElement("div");
  containerTask.classList.add("taskContainerFirst");
  console.log(project);
  console.log(project["taskList"]);
  return project;
}

function clickAddTask(project) {
  console.log(project);
}

export { taskContainer, clickAddTask };
