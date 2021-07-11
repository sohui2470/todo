const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting  = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
 
function paintGreetings(){
  const username = localStorage.getItem("username");
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}

function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
}

function handleLinkClick(){ 
  alert("link clicked! moving ... ");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
};

link.addEventListener("click", handleLinkClick);