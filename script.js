///Creating the HTML elements.
var header = document.createElement("header");
var divTag1 = document.createElement("a");
var divTag2 = document.createElement("div");
var divTag3 = document.createElement("div");
var h5El = document.createElement("h5");
var pEl = document.createElement("p");
var startButton = document.createElement("button");
var q1Button = document.createElement("button");
var q2Button = document.createElement("button");
var q3Button = document.createElement("button");
var q4Button = document.createElement("button");

//Adding content to the created element.
divTag1.textContent = "View Highscores";
divTag2.textContent = "Time: 0 ";
h5El.textContent = "Coding Quiz Challenge";
pEl.textContent =
  "Try to answer the following code-related questions with the time limit. Keep in mind the incorrect answers will penalize your scoretime by ten seconds!";
startButton.innerHTML = "Start Quiz";
//q1Button.innerHTML = "";

//Pending created element to an existing tag
document.body.appendChild(header);
header.appendChild(divTag1);
header.appendChild(divTag2);
document.body.appendChild(divTag3);
divTag3.appendChild(h5El);
divTag3.appendChild(pEl);
divTag3.appendChild(startButton);
divTag3.appendChild(q1Button);
divTag3.appendChild(q2Button);
divTag3.appendChild(q3Button);
divTag3.appendChild(q4Button);

//Styling Element
h5El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
pEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
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
  "margin:auto; display:grid; width:auto; float = left;color:white; background:purple;  "
);
q4Button.setAttribute(
  "style",
  "margin:auto; display:grid; width:auto; float = left; color:white; background:purple;  "
);

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
  startQuiz();
});

//Timer for questions
var count = 75;

function startTimer() {
  var countDownTimer = setInterval(function () {
    divTag2.textContent = "Time: " + count;
    count--;
    if (count == 0) {
      clearInterval(countDownTimer);
    }
  }, 1000);
}

//Setting up the quiz
var i = 0;
var score = 0;
function startQuiz() {
  if (i <= 4) {
    //startButton.classList.add("hide"); not sure why this is not hiding the button
    startButton.innerHTML = " ";
    //h5El.textContent = "";
    h5El.textContent = quiz[i].question;
    pEl.textContent = "";
    q1Button.innerHTML = quiz[i].one;
    q2Button.innerHTML = quiz[i].two;
    q3Button.innerHTML = quiz[i].three;
    q4Button.innerHTML = quiz[i].four;
    i++;
    //Creating event listener for selection
    divTag3.addEventListener("click", function (event) {
      event.preventDefault();

      //capture result from click
      var result = event.target.outerText;
      console.log(i);
      if (result == quiz[4].answer) {
        score += 10;
        console.log(score);
      } else {
        count -= 5;
        console.log(score);
      }
    });
  }
  return score;
}
