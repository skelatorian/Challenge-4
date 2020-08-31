//for the score page

var scoreCard = JSON.parse(localStorage.getItem("user-score-card"));
var olEl = document.querySelector("#display-score");
var clearHighScoreEl = document.querySelector("#clear-highscores");

function renderLastUserScoreCard() {
  olEl = document.querySelector("#display-score");
  liEl = document.createElement("li");
  liEl.textContent = scoreCard["user-initial"] + " - " + scoreCard["user-score"];
  olEl.appendChild(liEl);
}

clearHighScoreEl.addEventListener("click", function(event) {
  event.preventDefault();
  $("#display-score").empty();
  localStorage.clear();
});

renderLastUserScoreCard();
