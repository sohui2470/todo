// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const theItem = document.querySelector("h2");

function handleMouseEnter() {
  theItem.style.color = colors[1];
  theItem.innerText = "The mouse is here!";
}
function handleMouseLeave() {
  theItem.style.color = colors[2];
  theItem.innerText = "The mouse is gone!";
}
function handleResize(event) {
  console.log("resize");
  theItem.style.color = colors[3];
  theItem.innerText = "You just resized!";
}
function handleContextmenu(event) {
  console.log("right click");
  theItem.style.color = colors[4];
  theItem.innerText = "That was a right click!";
}

const superEventHandler = {
  mouseenter: handleMouseEnter,
  mouseleave: handleMouseLeave,
  resize: handleResize,
  contextmenu: handleContextmenu
};

theItem.addEventListener("mouseenter", superEventHandler["mouseenter"]);
theItem.addEventListener("mouseleave", superEventHandler["mouseleave"]);
window.addEventListener("resize", superEventHandler["resize"]);
window.addEventListener("contextmenu", superEventHandler["contextmenu"]);