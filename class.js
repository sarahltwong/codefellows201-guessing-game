// //function declaration
// sayHello()
// function sayHello() {
//   console.log("Hello World");
// }
// //function expression
// sayGoodbye()
// var sayGoodbye = function () {
//   console.log("Goodbye World");
// }
//
// function subtracttwonums(numOne){
//   var fifty = 50;
//   console.log(fifty - numOne);
// }
var ans1 = document.getElementById("a1");
var ans2 = document.getElementById("a2");
var ans3 = document.getElementById("a3");
var ans4 = document.getElementById("a4");

var score = 0;
var question = [
  "Do I like lattes?",
  "Do I like tea?",
  "Do I like dogs?",
  "How old am I?"
];
var answer = [
  ["yes","y"],
  "yes",
  "yes",
  "24"
];

function game(question,answer) {
  var askedQuestion = prompt(question);
  if (answer === askedQuestion){
    score++
    console.log("That is correct!");
  } else {
    console.log("That is incorrect!");
  }
}
for (var i = 0; i < question.length; i++){
  game(question[i],answer[i]);
}
console.log (score);
