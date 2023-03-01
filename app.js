const buttons = document.querySelectorAll("#rock, #paper, #scissor");
const result = document.querySelector("#result");
let computerScore = 1;
let playScore = 1;
let header = document.querySelector("#yourName");
let input = document.querySelector("#name");
let startGame = document.querySelector(".buttons");

buttons.forEach((button) => {
  button.addEventListener("click", playGame);
});

function playGame(e) {
  const playerSelection = e.target.id;
  const computerSelection = getComputerSelection();
  const winner = getWinner(playerSelection, computerSelection);

  if (winner === "You") {
    document.getElementById("player-score").innerHTML = playScore++;
  } else if (winner === "JigSaw") {
    document.getElementById("computer-score").innerHTML = computerScore++;
  }
  result.innerHTML = `JigSaw chose ${computerSelection}. The winner is ${winner}.`;
}

function getComputerSelection() {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "none";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    return "You";
  } else {
    return "JigSaw";
  }
}
startGame.addEventListener("click", function () {
  header.innerHTML = input.value;
  input.value = "";
});
