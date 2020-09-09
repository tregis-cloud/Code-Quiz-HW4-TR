///Creating the HTML elements.
var header = document.createElement("header");
var divTag1 = document.createElement("A");
var divTag2 = document.createElement("div");
var divTag3 = document.createElement("div");
var divTag4 = document.createElement("div");
var divTag5 = document.createElement("div");
var divTag6 = document.createElement("div");
var h4El = document.createElement("h4");
var pEl = document.createElement("p");
var pEl2 = document.createElement("p");
var inputEl = document.createElement("input");
var startButton = document.createElement("button");
var q1Button = document.createElement("button");
var q2Button = document.createElement("button");
var q3Button = document.createElement("button");
var q4Button = document.createElement("button");
var submitButton = document.createElement("button");

//Adding content to the created element.
divTag1.textContent = "View Highscores";
divTag2.textContent = "Time: 0 ";
h4El.textContent = "Coding Quiz Challenge";
pEl.textContent =
  "Try to answer the following code-related questions with the time limit. Keep in mind the incorrect answers will penalize your score time by ten seconds!";
startButton.innerHTML = "Start Quiz";
submitButton.innerHTML = "Submit";

//Adding href to anchor tag
divTag1.href = "./highScores.html";
console.log((divTag1.href = "./highScores.html"));

//Pending created element to an existing tag
document.body.appendChild(header);
header.appendChild(divTag1);
header.appendChild(divTag2);
document.body.appendChild(divTag3);
document.body.appendChild(divTag4);
document.body.appendChild(divTag5);
document.body.appendChild(divTag6);
divTag3.appendChild(h4El);
divTag3.appendChild(pEl);
divTag3.appendChild(startButton);
divTag4.appendChild(q1Button);
divTag4.appendChild(q2Button);
divTag4.appendChild(q3Button);
divTag4.appendChild(q4Button);
divTag5.appendChild(pEl2);
divTag6.appendChild(inputEl);
divTag6.appendChild(submitButton);

//Styling Element
h4El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
pEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
pEl2.setAttribute("style", "margin:auto; width:50%; text-align:center;");

divTag1.setAttribute("style", "color:purple;");
divTag2.setAttribute("style", "float:right;");
startButton.setAttribute(
  "style",
  "padding:10px; margin:auto; display: grid; width:auto; color:white; background:purple;  "
);
q1Button.setAttribute(
  "style",
  "margin:auto; display:grid; width:auto; float = left; color:white; background:purple;  "
);
q2Button.setAttribute(
  "style",
  "margin:auto; display:grid; width:auto; float = left; color:white; background:purple;  "
);
q3Button.setAttribute(
  "style",
  "margin:auto; display:grid; width:auto; float = left; color:white; background:purple;  "
);
q4Button.setAttribute(
  "style",
  "margin:auto; display:grid; width:auto; float = left; color:white; background:purple;  "
);

startButton.setAttribute(
  "style",
  "padding:10px; margin:auto; display: grid; width:auto; color:white; background:purple;  "
);
//Hide choices button at start
q1Button.style.display = "none";
q2Button.style.display = "none";
q3Button.style.display = "none";
q4Button.style.display = "none";
divTag6.style.display = "none";

//Defining the quiz as an array of objects
var quiz = [
  {
    question: "Commonly used data types DO NOT include:",
    one: "1. string",
    two: "2. booleans",
    three: "3. alerts",
    four: "4. numbers",
    answer: "3. alerts",
  },

  {
    question:
      "The Condition in an if / else statement is enclosed within ____.",
    one: "1. quotes",
    two: "2. curly brackets",
    three: "3. parentheses",
    four: "4. square brackets",
    answer: "3. parentheses",
  },

  {
    question: "Arrays in JavaScript can be used to store ____.",
    one: "1. numbers and strings",
    two: "2. other arrays",
    three: "3. booleans",
    four: "4. all of the above",
    answer: "4. all of the above",
  },

  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    one: "1. JavaScript",
    two: "2. terminal / bash",
    three: "3. for loops",
    four: "4. console.log",
    answer: "4. console.log",
  },

  {
    question:
      "String values must be enclosed within ____  when being assigned to variables.",
    one: "1. commas",
    two: "2. curly brackets",
    three: "3. quotes",
    four: "4. parentheses",
    answer: "3. quotes",
  },
];
//Event listener for start button
startButton.addEventListener("click", function (event) {
  event.preventDefault();
  startTimer();
  renderQuestion();
});

//Timer for questions
var count = 75;
var score;
var countDownTimer;
function startTimer() {
  startButton.style.display = "none";
  countDownTimer = setInterval(function () {
    divTag2.textContent = "Time: " + count;
    count--;
    if (count == 0) {
      clearInterval(countDownTimer);
      gameOver();
    }
  }, 1000);
}

var i = 0;
//Setting up the quiz
function renderQuestion() {
  q1Button.style.display = "block";
  q2Button.style.display = "block";
  q3Button.style.display = "block";
  q4Button.style.display = "block";
  if (i <= 4) {
    h4El.textContent = quiz[i].question;
    pEl.textContent = "";
    pEl2.textContent = "";

    q1Button.textContent = quiz[i].one;
    q2Button.textContent = quiz[i].two;
    q3Button.textContent = quiz[i].three;
    q4Button.textContent = quiz[i].four;
  } else {
    score = count;
    gameOver();
    clearInterval(countDownTimer);
  }
}

divTag4.addEventListener("click", function (event) {
  event.preventDefault();
  var result = event.target.outerText;
  console.log(result + " for " + i);

  //Compare captured result to answer

  if (result == quiz[i].answer) {
    console.log("Correct!");
    pEl2.textContent = "Correct!";
  } else {
    count -= 10;
    console.log("Wrong!");
    pEl2.textContent = "Wrong!";
  }
  i++;
  setTimeout(function () {
    renderQuestion();
  }, 2000);
});

function gameOver() {
  startButton.style.display = "none";
  q1Button.style.display = "none";
  q2Button.style.display = "none";
  q3Button.style.display = "none";
  q4Button.style.display = "none";
  h4El.textContent = "All Done!";
  divTag2.textContent = "Time: " + score;
  pEl.textContent = "You score is " + score;
  divTag6.style.display = "block";
}
