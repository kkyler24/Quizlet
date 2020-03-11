// Timer function stuff
window.onload = function () {
function getFormattedMinutes() {
  var secondsLeft = totalSeconds - secondsElapsed;
  var minutesLeft = Math.floor(secondsLeft / 60);
  var formattedMinutes; {
    formattedMinutes = "0" + minutesLeft;
  }
  return formattedMinutes;
}
function getFormattedSeconds() {
  var secondsLeft = (totalSeconds - secondsElapsed) % 60;
  var formattedSeconds;
  if (secondsLeft < 10) {
    formattedSeconds = "0" + secondsLeft;
  } else {
    formattedSeconds = secondsLeft;
  }
  return formattedSeconds;
}
function renderTime() {
  timerText.textContent = "Time Remaining: " + getFormattedMinutes() + " : " + getFormattedSeconds();
  if (secondsElapsed >= totalSeconds) {
    clearInterval(timer);
    alert("Time is up!");
  }
}
function stopTimer() {
  secondsElapsed = 0;
  renderTime();
}
function startTimer() {
  if (totalSeconds > 0) {
    secondsElapsed = 0;
    timer = setInterval(function () {
      secondsElapsed++;
      renderTime();
    }, 1000);
  }
  renderTime();
}};
// window open it calls function 

  // get element with id of Questions
  

// Global variables stuff
// a = document.getElementById("A"),
// b = document.getElementById("B"),
// c = document.getElementById("C"),
// d = document.getElementById("D"),
// answers = q.answers;


// Questions Object
var Quests =[
{
  Q1: {
    Question: "What is BootStrap?",
    answers:[ "A piece of material that helps hold up your boot", "An open source Css framework","An open source JS framework"],
    answersCorrect:[1]
    
      },

  Q2: {
      Question: "HTML is to Skeleton as Javascript is to...?",
      answers: ["Muscles","Skin","Coffee"],
      answersCorrect:[0]
    },

  Q3: {
      Question: "What is BootStrap?",
      answers:[ "A piece of material that helps hold up your boot", "An open source Css framework","An open source JS framework"],
      answersCorrect:[3]
    },

  Q4: {
      Question: "What is BootStrap?",
      answers:[ "A piece of material that helps hold up your boot", "An open source Css framework","An open source JS framework"],
      answersCorrect:[2]
  }
}];
 

// -->Get faded code<--

$("button").on("click", function(){
  $("questionBoxOne").fadeOut(1000);
  setTimeOut(function(){
    $(this).remove();
  }, 1500);
})
    
    // for (var i = 0; i < ids.length; i++) {







  // set correct answer
 
// function evaluateQuestion(question) {
//   //tally score-- how will you calculate total score and check is correct answer is chosen.
//   //check answer
//   if (clicked === question[0].Q.answers.correctAnswer) {
//     totalScore.push(25);
//   }
//   else (secLeft - 15);
// }




  // give each button a class of either correct or wrong or just give the correct buttons a class (done)
  // chcek the class to apply the correct function to it
  // function 1 pointCheck-if class is correct push 25pts into total array, else subtract 15seconds from timer*
  // Display final score with initials
