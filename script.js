let homePlayerScore = document.getElementById("home-player-score");
let guestPlayerScore = document.getElementById("guest-player-score");
let resultEl = document.getElementById("result-el");
let newGame = document.getElementById("new-game");

let addOne = document.getElementById("add-one");
let addTwo = document.getElementById("add-two");
let addThree = document.getElementById("add-three");

let score1 = 0;
let score2 = 0;

function incrementHomeByOne() {
  score1 += 1;
  homePlayerScore.textContent = score1;
}

function incrementHomeByTwo() {
  score1 += 2;
  homePlayerScore.textContent = score1;
}

function incrementHomeByThree() {
  score1 += 3;
  homePlayerScore.textContent = score1;
}

function incrementGuestByOne() {
  score2 += 1;
  guestPlayerScore.textContent = score2;
}

function incrementGuestByTwo() {
  score2 += 2;
  guestPlayerScore.textContent = score2;
}

function incrementGuestByThree() {
  score2 += 3;
  guestPlayerScore.textContent = score2;
}

function result() {
  let resultElStr =
    "Home Player Score =" +
    " " +
    score1 +
    " " +
    "Guest player Score =" +
    " " +
    score2;
  resultEl.textContent += " " + resultElStr;
  homePlayerScore.textContent = 0;
  score1 = 0;
  guestPlayerScore.textContent = 0;
  score2 = 0;
}

newGame.addEventListener("click", function () {
  homePlayerScore.textContent = 0;
  guestPlayerScore.textContent = 0;
  resultEl.textContent = "";
});
