document.body.appendChild(document.createElement("h2"));
const text = document.querySelector("h2");
text.innerHTML = "Hello!";

function eventFunctions() {
  const width = window.innerWidth;
  if (width >= 200) {
    document.body.style.backgroundColor = "gray";
  } else if (width >= 100) {
    document.body.style.backgroundColor = "pink";
  } else {
    document.body.style.backgroundColor = "hotpink";
  }
}
window.addEventListener("resize", eventFunctions);
