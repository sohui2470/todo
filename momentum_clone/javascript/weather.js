const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const APIkey = "b921cba4d80d7971d2c7cb4f23ac0bfe";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;
  fetch(url).then((response) => response.json()).then((data) => {
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}
function onGeoError(){
  // alert("Can't find you. No weather recognized.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
