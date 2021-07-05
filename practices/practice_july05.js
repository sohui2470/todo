const h1 = document.createElement("h1");
document.body.appendChild(h1);
h1.innerText = "Random Number Game";

function setGenerator(){
  let maxnum = document.querySelector("#maxnum").value ;
  let answer = parseInt(Math.random() * (parseInt(maxnum)+1));
  console.log("최대:", maxnum,"답", answer);
  document.querySelector("#guessnum").setAttribute("max", maxnum);
  return answer;
}

function theResult(event) {
  console.log("RE----------스타뚜");
  event.preventDefault();
  final.style.display = "block";
  const answer = parseInt(setGenerator());
  const guessnum = parseInt(document.querySelector("#guessnum").value);
  final.innerHTML = `You chose: ${guessnum}, the machine chose: ${answer}.<br>`;
  console.log("추측:", guessnum, "답:", answer);
  if (guessnum === answer) {
    final.innerHTML += "<b>You won!</b>";
  } else {
    final.innerHTML += "<b>You lost!</b>";
  }
}

const h2 = document.createElement("h2");
document.body.appendChild(h2);
h2.innerHTML = `<form>Generate a number between 0 and 
                <input type ="number" min="0" id="maxnum" onchange="setGenerator()">
                </form>`;

const guess = document.createElement("div");
document.body.appendChild(guess);
guess.innerHTML = `<form>Guess the number: <input type="number" id="guessnum" min="0">
                    <button onclick="theResult(event)">Play!</button></form>`;

const final = document.createElement("div");
final.style.display = "none";
document.body.appendChild(final);