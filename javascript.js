// Declared variables
var header = document.querySelector(".header");
var intro = document.querySelector(".intro-text");
var startButton = document.getElementById("start-button");
var answersList = document.getElementById("answers-list");
const emptyAnswers = document.getElementById("answers-list");
var highscoreLink = document.getElementById("highscore-link");
var finalHeader = document.querySelector(".final-header");
var outroText = document.querySelector(".outro-text")
var timerText = document.getElementById("timer");
var timeLeft = 100;

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



//Runs through each question in the questions variable, handling them one by one with handleAnswer()
function runQuiz(i) {
    // Makes the intro-text invisible
    intro.setAttribute("class", "d-none");

    // Makes the list visible
    answersList.setAttribute("class", "d-block");

    // Makes the start button invisible
    startButton.setAttribute("class", "d-none")

        
    // sets the variable currentQuestion to the question being indexed
    var currentQuestion = questions[i];

    // Empties out the list element to reset from previous questions
    answersList = emptyAnswers;


    // Resets the question buttons to be incorrect, before one is assigned as correct
    slot1El.setAttribute("class", "btn btn-primary");
    slot2El.setAttribute("class", "btn btn-primary");
    slot3El.setAttribute("class", "btn btn-primary");
    slot4El.setAttribute("class", "btn btn-primary");

    // Replaces header with a question's text
    header.textContent = currentQuestion.questionHeader;

    // Replaces each slot in the list with the text for answers
    slot1El.textContent = currentQuestion.answer1;
    slot2El.textContent = currentQuestion.answer2;
    slot3El.textContent = currentQuestion.answer3;
    slot4El.textContent = currentQuestion.answer4;

    //Assigns the 'correct' class to the button with the appropriate index
    if (currentQuestion.correctAns === 1) {
            slot1El.setAttribute("class", "btn btn-primary correct");
    } else if (currentQuestion.correctAns === 2) {
            slot2El.setAttribute("class", "btn btn-primary correct");
    } else if (currentQuestion.correctAns === 3) {
            slot3El.setAttribute("class", "btn btn-primary correct");
    } else if (currentQuestion.correctAns === 4) {
            slot4El.setAttribute("class", "btn btn-primary correct");
    }

    // Checks to see when a button is clicked, subtracts time if the one clicked is not correct
    answersList.addEventListener("click", function answerChecker(event) {
            console.log("you clicked the list")
            if (event.target.matches(".btn")) {
                if (event.target.matches(".correct")) {
                    console.log("answer chosen, correct!")
                    if (i === questions.length -1) {
                        lastPage();
                    } else {
                        answersList.removeEventListener("click", answerChecker);
                        runQuiz(i+1);
                    };
                } else {
                    timeLeft = timeLeft - 10;
                    console.log(timeLeft);
                    console.log("answer chosen, wrong");
                    if (i === questions.length - 1) {
                        lastPage();
                    } else {
                        answersList.removeEventListener("click", answerChecker);
                        runQuiz(i+1)};
                }
            }
    });
};

// Changes the page elements to display the final page
function lastPage() {
    finalHeader.setAttribute("class", "final-header d-block");
    outroText.setAttribute("class", "outro-text d-block");
    answersList.setAttribute("class", "d-none");
    header.setAttribute("class", "d-none");
};



// Runs the functions to handle the quiz when the start button is pressed
startButton.addEventListener("click", function() {
    runQuiz(0);
});