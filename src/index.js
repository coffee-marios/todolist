import _ from "lodash";
import "./style.css";
//import { addProjectFunction } from "./projects.js";

import container from "./taskContainerFirst.js";

function myHeader() {
  const element = document.createElement("header");

  element.classList.add("headerPage");
  element.innerHTML = "TO DO LIST";
  //btn.onclick = printMe;
  //element.appendChild(btn);

  return element;
}

document.body.appendChild(myHeader());
document.body.appendChild(container());
