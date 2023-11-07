/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectForm: () => (/* binding */ addProjectForm),
/* harmony export */   addProjectFunction: () => (/* binding */ addProjectFunction)
/* harmony export */ });
// Manipulate projects
const myProjects = ["project1", "project2"];

function clickAddProject(event) {
  document.getElementById("addProjectDiv").style.display = "none";
  event.preventDefault();
}

function addProjectForm() {
  const addElementContainer = document.createElement("div");
  addElementContainer.setAttribute("id", "addProjectDiv");
  const projectForm = document.createElement("form");
  projectForm.setAttribute("id", "addProjectForm");
  addElementContainer.appendChild(projectForm);
  const labelProject = document.createElement("label");
  labelProject.textContent = "Project's name";
  labelProject.setAttribute("id", "labelProject");
  const nameProject = document.createElement("input");
  nameProject.setAttribute("id", "inputProject");
  nameProject.type = "text";
  nameProject.name = "name";
  projectForm.appendChild(labelProject);
  projectForm.appendChild(nameProject);

  const addButton = document.createElement("button");
  addButton.setAttribute("id", "buttonProjectForm");
  addButton.textContent = "ADD";
  addButton.addEventListener("click", clickAddProject, false);

  projectForm.appendChild(addButton);
  return addElementContainer;
}

function addProjectFunction() {
  document.getElementById("addProjectDiv").style.display = "block";
  let sizeProjects = myProjects.length + 1;
  const newProject = "project" + sizeProjects;
  myProjects.push(newProject);
  console.log(myProjects);
  //return 2;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/taskContainer.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ container)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");


function container() {
  const contain = document.createElement("div");
  contain.classList.add("container");

  const leftSide = document.createElement("div");
  leftSide.classList.add("leftSection");

  const myProjects = document.createElement("div");
  myProjects.classList.add("projects");

  myProjects.appendChild((0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.addProjectForm)());

  const myProjectsTitle = document.createElement("p");
  myProjectsTitle.innerText = "PROJECTS";

  const firstProject = document.createElement("button");
  firstProject.innerText = "Read 100 Books";

  const secondProject = document.createElement("button");
  secondProject.innerText = "Update my website";

  const addProject = document.createElement("button");
  addProject.setAttribute("id", "startProjectButton");
  addProject.innerText = "+";
  addProject.addEventListener("click", _projects_js__WEBPACK_IMPORTED_MODULE_0__.addProjectFunction);

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza0NvbnRhaW5lci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRThDOzs7Ozs7O1VDMUM5QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTm1FOztBQUVwRDtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCQUF5Qiw0REFBYzs7QUFFdkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLDREQUFrQjs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFza0NvbnRhaW5lci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNYW5pcHVsYXRlIHByb2plY3RzXG5jb25zdCBteVByb2plY3RzID0gW1wicHJvamVjdDFcIiwgXCJwcm9qZWN0MlwiXTtcblxuZnVuY3Rpb24gY2xpY2tBZGRQcm9qZWN0KGV2ZW50KSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdERpdlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RGb3JtKCkge1xuICBjb25zdCBhZGRFbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkRWxlbWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZFByb2plY3REaXZcIik7XG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIHByb2plY3RGb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkUHJvamVjdEZvcm1cIik7XG4gIGFkZEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xuICBjb25zdCBsYWJlbFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsUHJvamVjdC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCdzIG5hbWVcIjtcbiAgbGFiZWxQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGFiZWxQcm9qZWN0XCIpO1xuICBjb25zdCBuYW1lUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmFtZVByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbnB1dFByb2plY3RcIik7XG4gIG5hbWVQcm9qZWN0LnR5cGUgPSBcInRleHRcIjtcbiAgbmFtZVByb2plY3QubmFtZSA9IFwibmFtZVwiO1xuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChsYWJlbFByb2plY3QpO1xuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuYW1lUHJvamVjdCk7XG5cbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYnV0dG9uUHJvamVjdEZvcm1cIik7XG4gIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQUREXCI7XG4gIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tBZGRQcm9qZWN0LCBmYWxzZSk7XG5cbiAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgcmV0dXJuIGFkZEVsZW1lbnRDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RGdW5jdGlvbigpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0RGl2XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGxldCBzaXplUHJvamVjdHMgPSBteVByb2plY3RzLmxlbmd0aCArIDE7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBcInByb2plY3RcIiArIHNpemVQcm9qZWN0cztcbiAgbXlQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICBjb25zb2xlLmxvZyhteVByb2plY3RzKTtcbiAgLy9yZXR1cm4gMjtcbn1cblxuZXhwb3J0IHsgYWRkUHJvamVjdEZ1bmN0aW9uLCBhZGRQcm9qZWN0Rm9ybSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBhZGRQcm9qZWN0RnVuY3Rpb24sIGFkZFByb2plY3RGb3JtIH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFpbmVyKCkge1xuICBjb25zdCBjb250YWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGxlZnRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGVmdFNpZGUuY2xhc3NMaXN0LmFkZChcImxlZnRTZWN0aW9uXCIpO1xuXG4gIGNvbnN0IG15UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBteVByb2plY3RzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcblxuICBteVByb2plY3RzLmFwcGVuZENoaWxkKGFkZFByb2plY3RGb3JtKCkpO1xuXG4gIGNvbnN0IG15UHJvamVjdHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBteVByb2plY3RzVGl0bGUuaW5uZXJUZXh0ID0gXCJQUk9KRUNUU1wiO1xuXG4gIGNvbnN0IGZpcnN0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGZpcnN0UHJvamVjdC5pbm5lclRleHQgPSBcIlJlYWQgMTAwIEJvb2tzXCI7XG5cbiAgY29uc3Qgc2Vjb25kUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHNlY29uZFByb2plY3QuaW5uZXJUZXh0ID0gXCJVcGRhdGUgbXkgd2Vic2l0ZVwiO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3RhcnRQcm9qZWN0QnV0dG9uXCIpO1xuICBhZGRQcm9qZWN0LmlubmVyVGV4dCA9IFwiK1wiO1xuICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0RnVuY3Rpb24pO1xuXG4gIGxlZnRTaWRlLmFwcGVuZENoaWxkKG15UHJvamVjdHMpO1xuICBteVByb2plY3RzLmFwcGVuZENoaWxkKG15UHJvamVjdHNUaXRsZSk7XG4gIG15UHJvamVjdHMuYXBwZW5kQ2hpbGQoZmlyc3RQcm9qZWN0KTtcbiAgbXlQcm9qZWN0cy5hcHBlbmRDaGlsZChzZWNvbmRQcm9qZWN0KTtcbiAgbXlQcm9qZWN0cy5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KTtcblxuICAvLyBSaWdodCBzaWRlXG5cbiAgY29uc3QgcmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoXCJyaWdodFNlY3Rpb25cIik7XG5cbiAgY29uc3QgbXlUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG15VGFza3MuY2xhc3NMaXN0LmFkZChcInRhc2tzXCIpO1xuXG4gIGNvbnN0IG15VGFza3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBteVRhc2tzVGl0bGUuaW5uZXJUZXh0ID0gXCJUQVNLU1wiO1xuXG4gIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRUYXNrLmNsYXNzTGlzdC5hZGQoXCJhZGRUYXNrXCIpO1xuICBhZGRUYXNrLmlubmVyVGV4dCA9IFwiK1wiO1xuXG4gIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChteVRhc2tzKTtcbiAgbXlUYXNrcy5hcHBlbmRDaGlsZChteVRhc2tzVGl0bGUpO1xuICBteVRhc2tzLmFwcGVuZENoaWxkKGFkZFRhc2spO1xuXG4gIC8vIFRhc2sgY29udGFpbmVyXG4gIGNvbnN0IGZpcnN0VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZpcnN0VGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza0NvbnRhaW5lclwiKTtcbiAgbXlUYXNrcy5hcHBlbmRDaGlsZChmaXJzdFRhc2tDb250YWluZXIpO1xuXG4gIC8vIEZpcnN0IHRhc2tcbiAgY29uc3QgZmlzdFRhc2tfcHJvamVjdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmaXN0VGFza19wcm9qZWN0MS5jbGFzc0xpc3QuYWRkKFwidGFza3NVbml0XCIpO1xuICBjb25zdCBmaXJzdFRpdGxlX2ZpcnN0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBmaXJzdFRpdGxlX2ZpcnN0UHJvamVjdC5pbm5lclRleHQgPSBcIlJlYWQgMTAwMCBuaWdodHNcIjtcblxuICBjb25zdCBmaXJzdFRhc2tfZmlyc3RQcm9qZWN0X2V4dHJhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgLy8gRGF0ZVxuICBjb25zdCBmaXJzdF9maXJzdF9kdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGZpcnN0X2ZpcnN0X2R1ZURhdGUuaW5uZXJUZXh0ID0gXCJkZC9tbS95eVwiO1xuICBmaXJzdFRhc2tfZmlyc3RQcm9qZWN0X2V4dHJhcy5hcHBlbmRDaGlsZChmaXJzdF9maXJzdF9kdWVEYXRlKTtcblxuICAvLyBQcmlvcml0eVxuICBjb25zdCBmaXJzdF9maXJzdF9wcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBmaXJzdF9maXJzdF9wcmlvcml0eS5pbm5lclRleHQgPSBcInByaW9yaXR5OiBoaWdoXCI7XG4gIGZpcnN0VGFza19maXJzdFByb2plY3RfZXh0cmFzLmFwcGVuZENoaWxkKGZpcnN0X2ZpcnN0X3ByaW9yaXR5KTtcblxuICAvLyBOb3Rlc1xuICBjb25zdCBmaXJzdF9maXJzdF9ub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGZpcnN0X2ZpcnN0X25vdGVzLmlubmVyVGV4dCA9IFwiTm90ZXNcIjtcbiAgZmlyc3RUYXNrX2ZpcnN0UHJvamVjdF9leHRyYXMuYXBwZW5kQ2hpbGQoZmlyc3RfZmlyc3Rfbm90ZXMpO1xuXG4gIC8vIEVkaXRcbiAgY29uc3QgZmlyc3RfZmlyc3RfZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGZpcnN0X2ZpcnN0X2VkaXQuaW5uZXJUZXh0ID0gXCIqXCI7XG4gIGZpcnN0VGFza19maXJzdFByb2plY3RfZXh0cmFzLmFwcGVuZENoaWxkKGZpcnN0X2ZpcnN0X2VkaXQpO1xuXG4gIGZpcnN0VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChmaXN0VGFza19wcm9qZWN0MSk7XG4gIGZpc3RUYXNrX3Byb2plY3QxLmFwcGVuZENoaWxkKGZpcnN0VGl0bGVfZmlyc3RQcm9qZWN0KTtcbiAgZmlzdFRhc2tfcHJvamVjdDEuYXBwZW5kQ2hpbGQoZmlyc3RUYXNrX2ZpcnN0UHJvamVjdF9leHRyYXMpO1xuXG4gIC8vIFNlY29uZCB0YXNrXG5cbiAgY29uc3Qgc2Vjb25kVGFza19wcm9qZWN0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlY29uZFRhc2tfcHJvamVjdDEuY2xhc3NMaXN0LmFkZChcInRhc2tzVW5pdFwiKTtcbiAgY29uc3Qgc2Vjb25kVGl0bGVfZmlyc3RQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHNlY29uZFRpdGxlX2ZpcnN0UHJvamVjdC5pbm5lclRleHQgPSBcIlJlYWQgQW4gRW1wdHkgSG91c2VcIjtcblxuICAvLyBEYXRlXG5cbiAgY29uc3Qgc2Vjb25kVGFza19maXJzdFByb2plY3RfZXh0cmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc2Vjb25kX2ZpcnN0X2R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc2Vjb25kX2ZpcnN0X2R1ZURhdGUuaW5uZXJUZXh0ID0gXCIwZC9tbS95eVwiO1xuICBzZWNvbmRUYXNrX2ZpcnN0UHJvamVjdF9leHRyYXMuYXBwZW5kQ2hpbGQoc2Vjb25kX2ZpcnN0X2R1ZURhdGUpO1xuXG4gIC8vIFByaW9yaXR5XG4gIGNvbnN0IHNlY29uZF9maXJzdF9wcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzZWNvbmRfZmlyc3RfcHJpb3JpdHkuaW5uZXJUZXh0ID0gXCJwcmlvcml0eVwiO1xuICBzZWNvbmRUYXNrX2ZpcnN0UHJvamVjdF9leHRyYXMuYXBwZW5kQ2hpbGQoc2Vjb25kX2ZpcnN0X3ByaW9yaXR5KTtcblxuICAvLyBOb3Rlc1xuICBjb25zdCBzZWNvbmRfZmlyc3Rfbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzZWNvbmRfZmlyc3Rfbm90ZXMuaW5uZXJUZXh0ID0gXCJOb3Rlc1wiO1xuICBzZWNvbmRUYXNrX2ZpcnN0UHJvamVjdF9leHRyYXMuYXBwZW5kQ2hpbGQoc2Vjb25kX2ZpcnN0X25vdGVzKTtcblxuICAvLyBFZGl0XG4gIGNvbnN0IHNlY29uZF9maXJzdF9lZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2Vjb25kX2ZpcnN0X2VkaXQuaW5uZXJUZXh0ID0gXCIqXCI7XG4gIHNlY29uZFRhc2tfZmlyc3RQcm9qZWN0X2V4dHJhcy5hcHBlbmRDaGlsZChzZWNvbmRfZmlyc3RfZWRpdCk7XG5cbiAgZmlyc3RUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZFRhc2tfcHJvamVjdDEpO1xuICBzZWNvbmRUYXNrX3Byb2plY3QxLmFwcGVuZENoaWxkKHNlY29uZFRpdGxlX2ZpcnN0UHJvamVjdCk7XG4gIHNlY29uZFRhc2tfcHJvamVjdDEuYXBwZW5kQ2hpbGQoc2Vjb25kVGFza19maXJzdFByb2plY3RfZXh0cmFzKTtcblxuICBjb250YWluLmFwcGVuZENoaWxkKGxlZnRTaWRlKTtcbiAgY29udGFpbi5hcHBlbmRDaGlsZChyaWdodFNpZGUpO1xuICByZXR1cm4gY29udGFpbjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==