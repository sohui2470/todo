const clockTitle = document.querySelector(".js-clock");

function untilChristmas() {
  now = new Date();
  const year = now.getFullYear();
  christmas = new Date(year, 12-1, 25);
  date = christmas.getTime() - now.getTime();
  day = Math.floor(date / (24*60*60*1000));
  hour = Math.floor(date % (24*60*60*1000) / (60*60*1000));
  min = Math.floor(date % (60*60*1000) / (60*1000));
  sec = Math.floor(date % (60*1000) / (1000));
  time = `${day}d ${hour}h ${min}m ${sec}s`;
  clockTitle.textContent = time;
}

untilChristmas();
setInterval(untilChristmas, 1000);