var nameText = document.querySelector(".card-title")
var score = document.querySelector(".card-text")

function setScore() {
    nameText.textContent = localStorage.getItem("name");
    score.textContent = localStorage.getItem("score");
};

function noScore() {
    name.textContent = "No score saved"
};
if (localStorage.getItem("name") && localStorage.getItem("score")) {
    setScore();
} else {
    noScore();
};
