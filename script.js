//Creating the HTML elements.
var header = document.createElement("header");
var divTag1 = document.createElement("a");
var divTag2 = document.createElement("div");
var divTag3 = document.createElement("div");
var h3El = document.createElement("h3");
var pEl = document.createElement("p");
var button = document.createElement("button");

//Adding content to the created element.
divTag1.textContent = "View Higscores";
divTag2.textContent = "Time: 0 ";
h3El.textContent = "Coding Quiz Challenge";
pEl.textContent =
  "Try to answer the following code-related questions with the time limit. Keep in mind the incorrect answers will penalize your scoretime by ten seconds!";
button.innerHTML = "Start Quiz";

//Pending created element to an existing tag
document.body.appendChild(header);
header.appendChild(divTag1);
header.appendChild(divTag2);
document.body.appendChild(divTag3);
divTag3.appendChild(h3El);
divTag3.appendChild(pEl);
divTag3.appendChild(button);

//Styling Element
h3El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
pEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
divTag1.setAttribute("style", "color:purple;");
divTag2.setAttribute("style", "float:right;");
button.setAttribute("style", "margin:auto; color:white; background:purple;  ");

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
button.addEventListener("click", function (event) {
  event.preventDefault();
  startTimer();
});

var count = 75;
function startTimer() {
  var countDownTimer = setInterval(function () {
    divTag2.textContent = "Time: " + count;
    count--;
    if (count < 0) {
      clearInterval(countDownTimer);
    }
    h3El.textContent = "Q1";
    pEl.textContent = "C1";
  }, 1000);
}
