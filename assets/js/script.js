// VARIABLE DECLARATIONS

// Header Variables
var header = document.getElementById("header");
var highScoreButton = document.getElementById("high-score-button");
var timer = document.getElementById("timer");

// Starting Page Variables
var startingPage = document.getElementById("starting-page");
var startButton = document.getElementById("start-button");

// Question Page Variables
var questionPage = document.getElementById("question-page");
var showQuestion = document.getElementById("show-question");
var showAnswers = document.getElementById("show-answers");
var answerStatus = document.getElementById("answer-status");

// Initial Page Variables
var initialPage = document.getElementById("initial-page");
var initialInput = document.getElementById("initial");
var submitButton = document.getElementById("submit-button");

// High Score Page Variables
var highScorePage = document.getElementById("high-score-page");
var highScores = document.getElementById("high-scores");
var backButton = document.getElementById("back-button");
var clearScoreButton = document.getElementById("clear-score-button");

// Questions & Answers
var q1 = {
  question: "1. Commonly used data types DO NOT include...",
  answers: ["Strings", "Booleans", "Alerts", "Numbers"],
  correctIndex: 2,
};
var q2 = {
  question: "2. The condition in an if / else statement is enclosed with ____.",
  answers: ["Quotes", "Curly brackets", "Parenthesis", "Square brackets"],
  correctIndex: 2,
};
var q2 = {
  question: "3. Arrays in JavaScript can be used to store ____.",
  answers: [
    "Numbers & Strings",
    "Other arrays",
    "Booleans",
    "All of the above",
  ],
  correctIndex: 3,
};
var q3 = {
  question:
    "4. String values must be enclosed within _____ when being assigned to variables.",
  answers: ["Commas", "Curly brackets", "Quotes", "Parenthesis"],
  correctIndex: 2,
};
var q4 = {
  question:
    "5. A very useful tool used during development and debugging for printing content to the debugger is...",
  answers: ["JavaScript", "Terminal/ Bash", "For loops", "Console.log"],
  correctIndex: 3,
};
var q5 = {
  question: "6. Coding is awesome. T/F",
  answers: ["True", "False"],
  correctIndex: 0,
};

// Array with all of the question variables
var questions = [q1, q2, q3, q4, q5];
console.log(questions);

// Setting timer - 15 seconds/question
var quizTime = questions.length * 15;
console.log(quizTime);

// Starting Page
startButton.addEventListener("click", function (event) {
  event.preventDefault;
  beginQuiz();
});

// Begin the quiz
function beginQuiz() {
  // Timer for quiz
  var quizTimer = setInterval(function () {
    quizTime--;
    timer.textContent = quizTime;
    displayQuestions();

    if (quizTime === 0) {
      clearInterval(quizTimer);
      // Go to initial page once timer done
    }
  }, 1000);

  // Questions
  function displayQuestions() {
    for (var i = 0; i < questions.length; i++) {
      if (i === 1) {

      }
    }
  }
}
