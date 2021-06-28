const clock = document.querySelector("h2#clock");

function getClock(){
  date = new Date();
  const day = date.getHours().toString().padStart(2,"0");
  const min = date.getMinutes().toString().padStart(2,"0");
  const sec = date.getSeconds().toString().padStart(2,"0");
  clock.innerText = `${day}:${min}:${sec}`;
}

getClock(); // 바로 실행되게끔!
setInterval(getClock, 1000);

