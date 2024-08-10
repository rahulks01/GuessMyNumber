"use strict";

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").innerHTML = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("No Number!⛔");
  } else if (guess === secretnumber) {
    displayMessage('Correct Number!🎉<br>Press "Play Again"🔁');
    document.querySelector(".number").textContent = secretnumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretnumber) {
    if (score > 1) {
      displayMessage(guess > secretnumber ? "High📈" : "Low📉");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage('You Lost💥<br>Press "Play Again"🔁');
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretnumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start Guessing!!");
  score = 20;
  document.querySelector(".score").textContent = 20;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
});
