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

var question1 = {questionHeader:"Which of these is not a variable type?", answer1:"boolean", answer2:"storage", answer3:"integer", answer4:"string", correctAns:2};
var question2 = {questionHeader:"Which of these can be used to delay a function's execution by a set amount of time?", answer1:"setTimeout", answer2:"setAttribute", answer3:"else if loop", answer4:"getTime", correctAns:1};
var question3 = {questionHeader:"The code a function will execute is contained in...", answer1:"parentheses", answer2:"greater-than and less-than", answer3:"square brackets", answer4:"curly brackets", correctAns:4};
var question4 = {questionHeader:"Objects can NOT store which of the following?", answer1:"arrays", answer2:"variables", answer3:"other objects", answer4:"none of the above", correctAns:4};
var question5 = {questionHeader:"The link to a javascript file is usually located where in the html document?", answer1:"at the top of the body", answer2:"at the top of the head", answer3:"at the bottom of the body", answer4:"outside both the body and head", correctAns:3};

var questions = [question1, question2, question3, question4, question5];


function startTimer() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerText.textContent = "Timer : " + timeLeft;
      
        if(timeLeft === 0) {
        var finalTime = 0;
        clearInterval(timerInterval);
        lastPage(finalTime);
        }
      
    }, 1000);
    };


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
                        var finalTime = timeLeft;
                        lastPage(finalTime);
                    } else {
                        answersList.removeEventListener("click", answerChecker);
                        runQuiz(i+1);
                    };
                } else {
                    timeLeft = timeLeft - 20;
                    console.log(timeLeft);
                    console.log("answer chosen, wrong");
                    if (i === questions.length - 1) {
                        var finalTime = timeLeft;
                        lastPage(finalTime);
                    } else {
                        answersList.removeEventListener("click", answerChecker);
                        runQuiz(i+1)};
                }
            }
    });
};

// Changes the page elements to display the final page
function lastPage(finalTime) {
    finalHeader.setAttribute("class", "final-header d-block");
    outroText.setAttribute("class", "outro-text d-block");
    answersList.setAttribute("class", "d-none");
    header.setAttribute("class", "d-none");
    timerText.setAttribute("class", "d-none");
    document.querySelector(".input-group").setAttribute("class", "d-block");

    // displays and stores score
    outroText.textContent = outroText.textContent + finalTime;
    localStorage.setItem("score", finalTime);
    console.log("time recorded")

    //takes in a name input and saves it
    document.querySelector(".submit-btn").addEventListener("click", function() {
        if (document.getElementById("High-Score") === "") {
            alert("Enter your name or initials");
        } else {
            localStorage.setItem("name", document.getElementById("High-Score").value);
            document.getElementById("High-Score").value = "";
            console.log("Name recorded")
        }
    });

};



// Runs the functions to handle the quiz when the start button is pressed
startButton.addEventListener("click", function() {
    startTimer();
    runQuiz(0);
});