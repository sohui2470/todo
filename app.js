const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const loginButton = document.querySelector("#login-form button");

function handleLoginButtonClick(){
  const username = loginInput.value;
  if (username === ''){
    alert('please write your name');
  } else if (username.length > 15 ){
    alert("your name is too long!");
  }
}
loginButton.addEventListener('click',handleLoginButtonClick);
