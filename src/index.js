import _ from "lodash";
import "./style.css";
import printMe from "./print.js";

function myHeader() {
  const element = document.createElement("header");
  //const btn = document.createElement("button");

  element.classList.add("headerPage");
  element.innerHTML = "TO DO LIST";
  //btn.onclick = printMe;
  //element.appendChild(btn);

  return element;
}

function container() {
  const contain = document.createElement("div");
  contain.classList.add("container");

  const leftSide = document.createElement("div");
  leftSide.classList.add("leftSection");
  const rightSide = document.createElement("div");
  rightSide.classList.add("rightSection");

  contain.appendChild(leftSide);
  contain.appendChild(rightSide);
  return contain;
}

document.body.appendChild(myHeader());
document.body.appendChild(container());
