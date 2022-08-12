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

// Correct vs Incorrect Statement variables
var correct = "Correct!";
var incorrect = "Incorrect!";

// Initial Page Variables
var initialPage = document.getElementById("initial-page");
var finalScore = document.getElementById("final-score");
var initialInput = document.getElementById("initial");
var submitButton = document.getElementById("submit-button");

// High Score Page Variables
var highScorePage = document.getElementById("high-score-page");
var highScores = document.getElementById("high-scores");
var backButton = document.getElementById("back-button");
var clearScoreButton = document.getElementById("clear-score-button");

// Questions & Answers
var q1 = {
  question: "Commonly used data types DO NOT include...",
  answers: ["Strings", "Booleans", "Alerts", "Numbers"],
  correctA: 2,
};
var q2 = {
  question: "The condition in an if / else statement is enclosed with ____.",
  answers: ["Quotes", "Curly brackets", "Parenthesis", "Square brackets"],
  correctA: 2,
};
var q3 = {
  question: "Arrays in JavaScript can be used to store ____.",
  answers: [
    "Numbers & Strings",
    "Other arrays",
    "Booleans",
    "All of the above",
  ],
  correctA: 3,
};
var q4 = {
  question:
    "String values must be enclosed within _____ when being assigned to variables.",
  answers: ["Commas", "Curly brackets", "Quotes", "Parenthesis"],
  correctA: 2,
};
var q5 = {
  question:
    "A very useful tool used during development and debugging for printing content to the debugger is...",
  answers: ["JavaScript", "Terminal/ Bash", "For loops", "Console.log"],
  correctA: 3,
};
var q6 = {
  question: "6. Coding is awesome. T/F",
  answers: ["True", "False"],
  correctA: 0,
};

// Array with all of the question variables
var questions = [q1, q2, q3, q4, q5, q6];
console.log(questions);

// Setting timer - 15 seconds/question
var quizTime = questions.length * 15;
console.log(quizTime);

// Removing uneeded pages before quiz starts
startingPage.style.display = "block";
header.style.display = "block";
initialPage.style.display = "none";
highScorePage.style.display = "none";

// EVENT LISTENERS
//Start button- starts quiz
startButton.addEventListener("click", function (event) {
  event.preventDefault;
  startTimer();
  displayQuestions();
});
// High Score Button
highScoreButton.addEventListener("click", function (event) {
  event.preventDefault;
  displayHighScorePage();
});

// Starting timer
function startTimer() {
  var quizTimer = setInterval(function () {
    quizTime--;
    timer.textContent = quizTime;

    if (quizTime === 0) {
      clearInterval(quizTimer);
      displayInitialPage();
    }
  }, 1000);
}
// Questions
function displayQuestions() {
  // Display status of other pages
  startingPage.style.display = "none";
  initialPage.style.display = "none";
  highScorePage.style.display = "none";
  // Display 1st question
  showQ1();
  function showQ1() {
    showQuestion.textContent = questions[0].question;
    for (let i = 0; i < q1.answers.length; i++) {
      var answerList = document.createElement("li");
      showAnswers.appendChild(answerList);
      var answerButton = document.createElement("button");
      console.log(answerButton);
      // Assigning array index as button value
      var answerButtonValue = (answerButton.value = i);
      console.log(answerButtonValue);

      answerList.appendChild(answerButton);
      var answerOptions = q1.answers[i];
      answerButton.textContent = answerOptions;

      answerButton.addEventListener("click", function (event) {
        event.preventDefault;
        // Show answer status
        if (answerButton === q1.correctA) {
          answerStatus.textContent = correct;
        } else if (answerButton !== q1.correctA) {
          answerStatus.textContent = incorrect;
        }

        // Removes answer buttons for next question
        function removeButtons(parent) {
          while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
          }
        }
        const listAnswers = document.querySelector("#show-answers");
        removeButtons(listAnswers);
        showQ2();
      });
    }
  }
}
// Display 2nd question
function showQ2() {
  showQuestion.textContent = questions[1].question;
  for (let i = 0; i < q2.answers.length; i++) {
    var answerlist = document.createElement("li");
    showAnswers.appendChild(answerlist);
    var answerButton = document.createElement("button");

    // Assigning array index as button value
    answerButton.value = i;
    console.log(answerButton.value);

    answerlist.appendChild(answerButton);
    var answerOptions = q2.answers[i];
    answerButton.textContent = answerOptions;

    answerButton.addEventListener("click", function (event) {
      event.preventDefault;
      // Show answer status
      if (answerButton === q2.correctA) {
        answerStatus.textContent = correct;
      } else if (answerButton !== q2.correctA) {
        answerStatus.textContent = incorrect;
      }
      // Removes answer buttons for next question
      function removeButtons(parent) {
        while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
        }
      }
      const listAnswers = document.querySelector("#show-answers");
      removeButtons(listAnswers);
      showQ3();
    });
  }
}
// Display 3rd question
function showQ3() {
  showQuestion.textContent = questions[2].question;
  for (let i = 0; i < q3.answers.length; i++) {
    var answerlist = document.createElement("li");
    showAnswers.appendChild(answerlist);
    var answerButton = document.createElement("button");

    // Assigning array index as button value
    answerButton.value = i;
    console.log(answerButton.value);

    answerlist.appendChild(answerButton);
    var answerOptions = q3.answers[i];
    answerButton.textContent = answerOptions;

    answerButton.addEventListener("click", function (event) {
      event.preventDefault;
      // Show answer status
      if (answerButton === q3.correctA) {
        answerStatus.textContent = correct;
      } else if (answerButton !== q3.correctA) {
        answerStatus.textContent = incorrect;
      }
      // Removes answer buttons for next question
      function removeButtons(parent) {
        while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
        }
      }
      const listAnswers = document.querySelector("#show-answers");
      removeButtons(listAnswers);
      showQ4();
    });
  }
}
// Display 4th question
function showQ4() {
  showQuestion.textContent = questions[3].question;
  for (let i = 0; i < q4.answers.length; i++) {
    var answerlist = document.createElement("li");
    showAnswers.appendChild(answerlist);
    var answerButton = document.createElement("button");

    // Assigning array index as button value
    answerButton.value = i;
    console.log(answerButton.value);

    answerlist.appendChild(answerButton);
    var answerOptions = q4.answers[i];
    answerButton.textContent = answerOptions;

    answerButton.addEventListener("click", function (event) {
      event.preventDefault;
      // Show answer status
      if (answerButton === q4.correctA) {
        answerStatus.textContent = correct;
      } else if (answerButton !== q4.correctA) {
        answerStatus.textContent = incorrect;
      }
      // Removes answer buttons for next question
      function removeButtons(parent) {
        while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
        }
      }
      const listAnswers = document.querySelector("#show-answers");
      removeButtons(listAnswers);
      showQ5();
    });
  }
}
// Display 5th question
function showQ5() {
  showQuestion.textContent = questions[4].question;
  for (let i = 0; i < q5.answers.length; i++) {
    var answerlist = document.createElement("li");
    showAnswers.appendChild(answerlist);
    var answerButton = document.createElement("button");

    // Assigning array index as button value
    answerButton.value = i;
    console.log(answerButton.value);

    answerlist.appendChild(answerButton);
    var answerOptions = q5.answers[i];
    answerButton.textContent = answerOptions;

    answerButton.addEventListener("click", function (event) {
      event.preventDefault;
      // Show answer status
      if (answerButton === q5.correctA) {
        answerStatus.textContent = correct;
      } else if (answerButton !== q5.correctA) {
        answerStatus.textContent = incorrect;
      }
      // Removes answer buttons for next question
      function removeButtons(parent) {
        while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
        }
      }
      const listAnswers = document.querySelector("#show-answers");
      removeButtons(listAnswers);
      showQ6();
    });
  }
}
// Display 6th question
function showQ6() {
  showQuestion.textContent = questions[5].question;
  for (let i = 0; i < q6.answers.length; i++) {
    var answerlist = document.createElement("li");
    showAnswers.appendChild(answerlist);
    var answerButton = document.createElement("button");

    // Assigning array index as button value
    answerButton.value = i;
    console.log(answerButton.value);

    answerlist.appendChild(answerButton);
    var answerOptions = q6.answers[i];
    answerButton.textContent = answerOptions;

    answerButton.addEventListener("click", function (event) {
      event.preventDefault;
      // Show answer status
      if (answerButton === q6.correctA) {
        answerStatus.textContent = correct;
      } else if (answerButton !== q6.correctA) {
        answerStatus.textContent = incorrect;
      }
      displayInitialPage();
    });
  }
}

function displayInitialPage() {
  // Display status of other pages
  startingPage.style.display = "none";
  questionPage.style.display = "none";
  timer.style.display = "none";
  highScorePage.style.display = "noneß";
  initialPage.style.display = "block";

  setInterval(quizTime);

  var finalTime = (finalScore.textContent = quizTime);
  submitButton.addEventListener("click", function (event) {
    event.preventDefault;

    // Storing game score data
    localStorage.setItem("final-score", finalTime);
    localStorage.setItem("initial", initialInput.value);
    displayHighScorePage();
  });
}
function displayHighScorePage() {
  // Display status of other pages
  startingPage.style.display = "none";
  questionPage.style.display = "none";
  header.style.display = "none";
  initialPage.style.display = "none";
  highScorePage.style.display = "block";

  // Getting high score data to display
  var highScore = localStorage.getItem("final-score");
  var highSInitial = localStorage.getItem("initial");
  highScores.textContent = highScore + " pts | " + highSInitial;

  // Clear High Score
  clearScoreButton.addEventListener("click", function (event) {
    event.preventDefault;
    highScores.style.display = "none";
  });
  // Go back button
  function reload() {
    reload = location.reload();
  }
  backButton.addEventListener("click", reload, false);
}
