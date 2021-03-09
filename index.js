var readlineSync = require('readline-sync');

var userName = readlineSync.question("What's your Name? ");

console.log("Welcome " + userName);
console.log(":)");
  var score=0;
  function quiz(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer===answer){
  console.log("Right Answer");
  score++;
  console.log("your score is" , +score);
  }
  else{
  console.log("Wrong Answer");
  score--;
  console.log("your score is" , +score);
  }
  console.log("----------");
  

  }

  var questions = [{
    question:"How many days are there in a year ",
    answer: "365"
  },
  {
    question:"On which planet humans live ",
    answer: "earth"
  }
  ,
  {
    question:"How many days are there in month feb? ",
    answer: "28"
  }
  ,
  {
    question:"How many teams are there in IPL? ",
    answer: "8"
  }
  ,
  {
    question:"which animal runs fast (cheetah or lion)? ",
    answer: "cheetah"
  }
  ]


  for(var i=0;i<questions.length;i++){
    var currentQue = questions[i];
  quiz(currentQue.question,currentQue.answer)
  }

console.log("Your total Score is: " +score + "/5");
 console.log("----------");
if (readlineSync.keyInYN("Do you like the Quiz")) {
  console.log('Thank you');
} else {
  console.log('Oops!');

}
