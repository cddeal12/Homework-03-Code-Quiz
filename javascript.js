// Declared variables
var header = document.querySelector(".header");
var intro = document.querySelector(".intro-text");
var startButton = document.getElementById("start-button");
var answersList = document.getElementById("answers-list");
const emptyAnswers = document.getElementById("answers-list");
var highscoreLink = document.getElementById("highscore-link");
var timerText = document.getElementById("timer");

// Answer slots to be populated
var slot1El = document.getElementById("slot1");
var slot2El = document.getElementById("slot2");
var slot3El = document.getElementById("slot3");
var slot4El = document.getElementById("slot4");

// Declared object variables to store question data

var question1 = {questionHeader:"Question 1 head", answer1:"q1a1", answer2:"q1a2", answer3:"q1a3", answer4:"q1a4", correctAns:2};
var question2 = {questionHeader:"Question 2 head", answer1:"q2a1", answer2:"q2a2", answer3:"q2a3", answer4:"q2a4", correctAns:1};
var question3 = {questionHeader:"Question 3 head", answer1:"q3a1", answer2:"q3a2", answer3:"q3a3", answer4:"q3a4", correctAns:4};
var question4 = {questionHeader:"Question 4 head", answer1:"q4a1", answer2:"q4a2", answer3:"q4a3", answer4:"q4a4", correctAns:2};
var question5 = {questionHeader:"Question 5 head", answer1:"q5a1", answer2:"q5a2", answer3:"q5a3", answer4:"q5a4", correctAns:3};

var questions = [question1, question2, question3, question4, question5];

// Runs the functions to handle the quiz when the start button is pressed
startButton.addEventListener("click", function() {
    runQuiz();
});

//Runs through each question in the questions variable, handling them one by one with handleQuestion()
function runQuiz() {
    // Makes the intro-text invisible
    intro.setAttribute("class", "d-none");

    // Makes the list visible
    answersList.setAttribute("class", "d-block");

    // Makes the start button invisible
    startButton.setAttribute("class", "d-none")

    // Runs a function that displays each question one-by-one as answers are chosen
    for (i=0; i<questions.length; i++) {
        handleQuestion(i);
    };
};

function handleQuestion(index) {
    var currentquestion = questions[index];
    console.log(currentquestion.questionHeader);
    // Empties out the list element
    answersList = emptyAnswers;
    console.log("answers emptied");

    // Replaces header with a question
    header.textContent = currentquestion.questionHeader;
    console.log("header replaced");

    // Replaces each slot in the list with the text for answers
    slot1El.textContent = currentquestion.answer1;
    slot2El.textContent = currentquestion.answer2;
    slot3El.textContent = currentquestion.answer3;
    slot4El.textContent = currentquestion.answer4;
};