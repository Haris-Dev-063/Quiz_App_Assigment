var questions = [
  {
    question: "HTML Stands for",
    options: [
      "Hyper Text Markup Language",
      "Hyper Tech Markup Language",
      "Hyper Touch Markup Language",
    ],
    corrAnswer: "Hyper Text Markup Language",
  },
  {
    question: "CSS Stands for",
    options: [
      "Cascoding Style Sheets",
      "Cascading Style Sheets",
      "Cascating Style Sheets",
    ],
    corrAnswer: "Cascading Style Sheets",
  },
  {
    question: "Which tag is used for most large heading",
    options: ["h6", "h2", "h1"],
    corrAnswer: "<h1>",
  },
  {
    question: "Which tag is used to make element unique ",
    options: ["id", "class", "label"],
    corrAnswer: "id",
  },
  {
    question: "Any element assigned with id, can be get in css ",
    options: ["by # tag", "by @ tag", "by & tag"],
    corrAnswer: "by # tag",
  },
  {
    question: "CSS can be used with ______ methods ",
    options: ["8", "3", "4"],
    corrAnswer: "3",
  },
];

var displayQuestion = document.getElementById("h1");
var showOptions = document.getElementById("showOptions");
var currentQuestion = document.getElementById("currentQues");
var totalQuestions = document.getElementById("totalQues");

var index = 0;
var marks = 0;

function showQuestions() {
  displayQuestion.innerHTML = questions[index].question;
  showOptions.innerHTML = ""; 
  for (var i = 0; i < questions[index].options.length; i++) {
    var optVal = questions[index].options[i];
    var corrAns = questions[index].corrAnswer;
    showOptions.innerHTML += `<button class='btn' onclick="checkQuestion('${optVal}','${corrAns}')">${questions[index].options[i]}</button>`;
  }
  currentQuestion.innerHTML = index + 1;
  totalQuestions.innerHTML = questions.length;
}

showQuestions();

function checkQuestion(opt, correct) {
  if (opt === correct) {
    marks++;
  }
  index++;
  if (index < questions.length) {
    showQuestions();
  } else {
    console.log("Quiz finished!");
    console.log("Total Marks: ", marks);
  }
}
