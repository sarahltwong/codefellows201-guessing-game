var startGame = document.getElementById("startMessage");

var score = 0;
var questions = [
  "Do I like lattes?",
  "Do I like tea?",
  "Do I like dogs?",
  "Do I like chocolate?",
  "How old am I?",
  "What is one of my favorite things?"
];
var answers = [
  ["yes","y","yeah"],
  ["yes","y"],
  ["yes","y"],
  ["yes","y"],
  ["24"],
  ["raindrops", "roses", "kittens", "chocolate", "flowers", "puppies"]
];

var statusLog = document.getElementById("printStatus");
statusLog.textContent = "First question...";

function game(question,answer) {
  var askedQuestion = prompt(question).toLowerCase();
  for (var j = 0; j < answer.length; j++){
    if (answer[j] === askedQuestion){
      score++;
      statusLog.textContent = "That is correct! Your score is " + score + ".";
      j = answer.length;
    } else if (j === answer.length - 1){
      statusLog.textContent = "That is incorrect! Your score is still " + score + ".";;
    }
  }
}
for (var i = 0; i < questions.length; i++){
  game(questions[i],answers[i]);
}
