// Inputs
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");

// buttons
const plusOneBtn1 = document.getElementById("btn1");
const plusTwoBtn1 = document.getElementById("btn2");
const plusThreeBtn1 = document.getElementById("btn3");

const plusOneBtn2 = document.getElementById("btn4");
const plusTwoBtn2 = document.getElementById("btn5");
const plusThreeBtn2 = document.getElementById("btn6");

const resetBtn = document.getElementById("newgame");

let countTeamOne = 0;
let countTeamTwo = 0;

plusOneBtn1.addEventListener("click", () => {
  countTeamOne += 1;
  score1.textContent = countTeamOne;
});
plusTwoBtn1.addEventListener("click", () => {
  countTeamOne += 2;
  score1.textContent = countTeamOne;
});
plusThreeBtn1.addEventListener("click", () => {
  countTeamOne += 3;
  score1.textContent = countTeamOne;
});

plusOneBtn2.addEventListener("click", () => {
  countTeamTwo += 1;
  score2.textContent = countTeamTwo;
});
plusTwoBtn2.addEventListener("click", () => {
  countTeamTwo += 2;
  score2.textContent = countTeamTwo;
});
plusThreeBtn2.addEventListener("click", () => {
  countTeamTwo += 3;
  score2.textContent = countTeamTwo;
});

// Reset
resetBtn.addEventListener("click", () => {
  countTeamOne = 0;
  countTeamTwo = 0;

  score1.textContent = countTeamOne;
  score2.textContent = countTeamTwo;
});
