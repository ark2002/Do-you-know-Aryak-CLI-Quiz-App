var readlineSync =  require('readline-sync');
const chalk = require('chalk');
const log = console.log

//chalk
const correct = chalk.bold.keyword('green');
const wrong = chalk.bold.keyword('red');
const rtans = chalk.bgYellow;
const qnop = chalk.bold.inverse;
const headfoot = chalk.bold.magenta;
const result = chalk.cyanBright

var score = 0;
var qno=0;
var inrow = 0;

var highscore = [{
  name: "Aryak",
  score:4
},
{
  name: " Aryak1",
  score:3
}]

var questions = [{
  question: "What is Aryak's Age? ",
  answer: "19"
}, {
  question: "Where was Aryak born ? ",
  answer: "mumbai"
},
{
  question: "What is Aryak's Favourite sport? ",
  answer: "football"
},
{
  question: "What is Aryak's Favourite Beverage? ",
  answer :"coffee"
},
{
  question: "What is Aryak's Favourite Food? ",
  answer :"Burger"
},
{
  question: "What is Aryak's School Name? ",
  answer :"ANZA"
}];

function welcome() {
log(headfoot("Welcome to the Quiz!!!"));
var username = readlineSync.question("Please enter your name: ");
log("So "+username+" Lets Begin!")
log("");
}

function play(question, answer) {
  var userans = readlineSync.question(question);

  if (userans.toUpperCase() === answer.toUpperCase()) {
    log(correct("right!"));
    score +=2;
    
  } else {
    log(wrong("wrong!"));
    log(rtans("The correct answer was "+answer));
    score -=1
   
  }

  log("current score: ", score);
  log("\n-------------\n")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    qno++;
    log(qnop("Question no "+qno));
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function end(){
log(headfoot("Congratulation!!! You finished the Quiz"));
log("Your Final Score is "+result(score));
var accuracy = (score/(questions.length))*100;
log("You answered "+result(accuracy+"%")+" of questions right!");
}


welcome();
game();
end();