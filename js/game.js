var statusLog = document.getElementById("printStatus");
statusLog.textContent = "Let's play!";

document.getElementById("statusImage").innerHTML = "";

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

var responses = [];
var correctWrong = [];

for (var i = 0; i < questions.length; i++){
  if (i === 0 ) {
    document.write("Question "+ (i+1) + ": " + questions[i] + "<br>");
    game(questions[i],answers[i]);
  } else {
    document.write("Possible answers: " + answers[i-1] + "<br>");
    document.write("Your answer ''" + responses[i-1] + "'' was " + correctWrong[i-1] + "!" + "<br>" + "<br>")
    document.write("Question "+ (i+1) + ": " + questions[i] + "<br>");
    game(questions[i],answers[i]);
  }
}

function game(question,answer) {
  var answerSubmitted = prompt(question).toLowerCase();
  responses.push(answerSubmitted);
    for (var j = 0; j < answer.length; j++){
    if (answer[j] === answerSubmitted){
      statusImage.src = "img/HappyOtter.jpg";
      score++;
      correctWrong.push("correct");
      statusLog.textContent = "That is correct! Your score is " + score + ".";
      j = answer.length;
    } else if (j === answer.length - 1){
      statusImage.src = "img/SadOtter.jpg";
      correctWrong.push("incorrect");
      statusLog.textContent = "That is incorrect! Your score is still " + score + ".";
    }
  }
}

if (correctWrong[5] === "correct" || correctWrong[5] === "incorrect" ) {
  console.log("cheese");
  document.write("Possible answers: " + answers[5] + "<br>");
  document.write("Your answer ''" + responses[5] + "'' was " + correctWrong[5] + "!" + "<br>" + "<br>");
}
