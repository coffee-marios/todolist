/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!******************************!*\
  !*** ./src/taskContainer.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ container)
/* harmony export */ });
function container() {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza0NvbnRhaW5lci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90YXNrQ29udGFpbmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFpbmVyKCkge1xuICBjb25zdCBjb250YWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGxlZnRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGVmdFNpZGUuY2xhc3NMaXN0LmFkZChcImxlZnRTZWN0aW9uXCIpO1xuXG4gIGNvbnN0IG15UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBteVByb2plY3RzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcblxuICBjb25zdCBteVByb2plY3RzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbXlQcm9qZWN0c1RpdGxlLmlubmVyVGV4dCA9IFwiUFJPSkVDVFNcIjtcblxuICBjb25zdCBmaXJzdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBmaXJzdFByb2plY3QuaW5uZXJUZXh0ID0gXCJSZWFkIDEwMCBCb29rc1wiO1xuXG4gIGNvbnN0IHNlY29uZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzZWNvbmRQcm9qZWN0LmlubmVyVGV4dCA9IFwiVXBkYXRlIG15IHdlYnNpdGVcIjtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWRkUHJvamVjdFwiKTtcbiAgYWRkUHJvamVjdC5pbm5lclRleHQgPSBcIkFkZCBhIHByb2plY3RcIjtcblxuICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChteVByb2plY3RzKTtcbiAgbXlQcm9qZWN0cy5hcHBlbmRDaGlsZChteVByb2plY3RzVGl0bGUpO1xuICBteVByb2plY3RzLmFwcGVuZENoaWxkKGZpcnN0UHJvamVjdCk7XG4gIG15UHJvamVjdHMuYXBwZW5kQ2hpbGQoc2Vjb25kUHJvamVjdCk7XG4gIG15UHJvamVjdHMuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG5cbiAgLy8gUmlnaHQgc2lkZVxuXG4gIGNvbnN0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKFwicmlnaHRTZWN0aW9uXCIpO1xuXG4gIGNvbnN0IG15VGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBteVRhc2tzLmNsYXNzTGlzdC5hZGQoXCJ0YXNrc1wiKTtcblxuICBjb25zdCBteVRhc2tzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbXlUYXNrc1RpdGxlLmlubmVyVGV4dCA9IFwiVEFTS1NcIjtcblxuICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkVGFzay5jbGFzc0xpc3QuYWRkKFwiYWRkVGFza1wiKTtcbiAgYWRkVGFzay5pbm5lclRleHQgPSBcIitcIjtcblxuICByaWdodFNpZGUuYXBwZW5kQ2hpbGQobXlUYXNrcyk7XG4gIG15VGFza3MuYXBwZW5kQ2hpbGQobXlUYXNrc1RpdGxlKTtcbiAgbXlUYXNrcy5hcHBlbmRDaGlsZChhZGRUYXNrKTtcblxuICAvLyBUYXNrIGNvbnRhaW5lclxuICBjb25zdCBmaXJzdFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmaXJzdFRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tDb250YWluZXJcIik7XG4gIG15VGFza3MuYXBwZW5kQ2hpbGQoZmlyc3RUYXNrQ29udGFpbmVyKTtcblxuICAvLyBGaXJzdCB0YXNrXG4gIGNvbnN0IGZpc3RUYXNrX3Byb2plY3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmlzdFRhc2tfcHJvamVjdDEuY2xhc3NMaXN0LmFkZChcInRhc2tzVW5pdFwiKTtcbiAgY29uc3QgZmlyc3RUaXRsZV9maXJzdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZmlyc3RUaXRsZV9maXJzdFByb2plY3QuaW5uZXJUZXh0ID0gXCJSZWFkIDEwMDAgbmlnaHRzXCI7XG5cbiAgY29uc3QgZmlyc3RUYXNrX2ZpcnN0UHJvamVjdF9leHRyYXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIC8vIERhdGVcbiAgY29uc3QgZmlyc3RfZmlyc3RfZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBmaXJzdF9maXJzdF9kdWVEYXRlLmlubmVyVGV4dCA9IFwiZGQvbW0veXlcIjtcbiAgZmlyc3RUYXNrX2ZpcnN0UHJvamVjdF9leHRyYXMuYXBwZW5kQ2hpbGQoZmlyc3RfZmlyc3RfZHVlRGF0ZSk7XG5cbiAgLy8gUHJpb3JpdHlcbiAgY29uc3QgZmlyc3RfZmlyc3RfcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZmlyc3RfZmlyc3RfcHJpb3JpdHkuaW5uZXJUZXh0ID0gXCJwcmlvcml0eTogaGlnaFwiO1xuICBmaXJzdFRhc2tfZmlyc3RQcm9qZWN0X2V4dHJhcy5hcHBlbmRDaGlsZChmaXJzdF9maXJzdF9wcmlvcml0eSk7XG5cbiAgLy8gTm90ZXNcbiAgY29uc3QgZmlyc3RfZmlyc3Rfbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBmaXJzdF9maXJzdF9ub3Rlcy5pbm5lclRleHQgPSBcIk5vdGVzXCI7XG4gIGZpcnN0VGFza19maXJzdFByb2plY3RfZXh0cmFzLmFwcGVuZENoaWxkKGZpcnN0X2ZpcnN0X25vdGVzKTtcblxuICAvLyBFZGl0XG4gIGNvbnN0IGZpcnN0X2ZpcnN0X2VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBmaXJzdF9maXJzdF9lZGl0LmlubmVyVGV4dCA9IFwiKlwiO1xuICBmaXJzdFRhc2tfZmlyc3RQcm9qZWN0X2V4dHJhcy5hcHBlbmRDaGlsZChmaXJzdF9maXJzdF9lZGl0KTtcblxuICBmaXJzdFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlzdFRhc2tfcHJvamVjdDEpO1xuICBmaXN0VGFza19wcm9qZWN0MS5hcHBlbmRDaGlsZChmaXJzdFRpdGxlX2ZpcnN0UHJvamVjdCk7XG4gIGZpc3RUYXNrX3Byb2plY3QxLmFwcGVuZENoaWxkKGZpcnN0VGFza19maXJzdFByb2plY3RfZXh0cmFzKTtcblxuICAvLyBTZWNvbmQgdGFza1xuXG4gIGNvbnN0IHNlY29uZFRhc2tfcHJvamVjdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWNvbmRUYXNrX3Byb2plY3QxLmNsYXNzTGlzdC5hZGQoXCJ0YXNrc1VuaXRcIik7XG4gIGNvbnN0IHNlY29uZFRpdGxlX2ZpcnN0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzZWNvbmRUaXRsZV9maXJzdFByb2plY3QuaW5uZXJUZXh0ID0gXCJSZWFkIEFuIEVtcHR5IEhvdXNlXCI7XG5cbiAgLy8gRGF0ZVxuXG4gIGNvbnN0IHNlY29uZFRhc2tfZmlyc3RQcm9qZWN0X2V4dHJhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNlY29uZF9maXJzdF9kdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNlY29uZF9maXJzdF9kdWVEYXRlLmlubmVyVGV4dCA9IFwiMGQvbW0veXlcIjtcbiAgc2Vjb25kVGFza19maXJzdFByb2plY3RfZXh0cmFzLmFwcGVuZENoaWxkKHNlY29uZF9maXJzdF9kdWVEYXRlKTtcblxuICAvLyBQcmlvcml0eVxuICBjb25zdCBzZWNvbmRfZmlyc3RfcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc2Vjb25kX2ZpcnN0X3ByaW9yaXR5LmlubmVyVGV4dCA9IFwicHJpb3JpdHlcIjtcbiAgc2Vjb25kVGFza19maXJzdFByb2plY3RfZXh0cmFzLmFwcGVuZENoaWxkKHNlY29uZF9maXJzdF9wcmlvcml0eSk7XG5cbiAgLy8gTm90ZXNcbiAgY29uc3Qgc2Vjb25kX2ZpcnN0X25vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2Vjb25kX2ZpcnN0X25vdGVzLmlubmVyVGV4dCA9IFwiTm90ZXNcIjtcbiAgc2Vjb25kVGFza19maXJzdFByb2plY3RfZXh0cmFzLmFwcGVuZENoaWxkKHNlY29uZF9maXJzdF9ub3Rlcyk7XG5cbiAgLy8gRWRpdFxuICBjb25zdCBzZWNvbmRfZmlyc3RfZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHNlY29uZF9maXJzdF9lZGl0LmlubmVyVGV4dCA9IFwiKlwiO1xuICBzZWNvbmRUYXNrX2ZpcnN0UHJvamVjdF9leHRyYXMuYXBwZW5kQ2hpbGQoc2Vjb25kX2ZpcnN0X2VkaXQpO1xuXG4gIGZpcnN0VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRUYXNrX3Byb2plY3QxKTtcbiAgc2Vjb25kVGFza19wcm9qZWN0MS5hcHBlbmRDaGlsZChzZWNvbmRUaXRsZV9maXJzdFByb2plY3QpO1xuICBzZWNvbmRUYXNrX3Byb2plY3QxLmFwcGVuZENoaWxkKHNlY29uZFRhc2tfZmlyc3RQcm9qZWN0X2V4dHJhcyk7XG5cbiAgY29udGFpbi5hcHBlbmRDaGlsZChsZWZ0U2lkZSk7XG4gIGNvbnRhaW4uYXBwZW5kQ2hpbGQocmlnaHRTaWRlKTtcbiAgcmV0dXJuIGNvbnRhaW47XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=