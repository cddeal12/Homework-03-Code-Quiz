// Declared variables
var header = document.querySelector(".header");
var intro = document.querySelector(".intro-text");
var startButton = document.getElementById("start-button");
var answersList = document.getElementById("answers-list");
var highscoreLink = document.getElementById("highscore-link");
var timerText = document.getElementById("timer");

// Declared object variables to store question data

var question1 = {question:"Question 1", answer1:"q1a1", answer2:"q1a2", answer3:"q1a3", answer4:"q1a4", correctAns:2};
var question2 = {question:"Question 2", answer1:"q2a1", answer2:"q2a2", answer3:"q2a3", answer4:"q2a4", correctAns:1};
var question3 = {question:"Question 3", answer1:"q3a1", answer2:"q3a2", answer3:"q3a3", answer4:"q3a4", correctAns:4};
var question4 = {question:"Question 4", answer1:"q4a1", answer2:"q4a2", answer3:"q4a3", answer4:"q4a4", correctAns:2};
var question5 = {question:"Question 5", answer1:"q5a1", answer2:"q5a2", answer3:"q5a3", answer4:"q4a4", correctAns:3};

var Questions = [question1, question2, question3, question4, question5];

// Runs the functions to handle the quiz when the start button is pressed
startButton.addEventListener("click", function() {
    runQuiz();
});

//Runs through each question in the questions variable, handling them one by one with handleQuestion()
function runQuiz() {
    console.log("erasing introtext")
    intro.setAttribute("style", "display: none");

    for (i=1; i<=Questions.length; i++) {
        handleQuestion
    };
};