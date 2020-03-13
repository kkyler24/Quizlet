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
// var removeq1 =  $(this).remove();
$(".button").on("click", function(){
  $("#questionBoxOne").fadeOut(1000,function(){
    $(this).remove();
})})

// $("#questionBoxTwo").fadeIn(1000,function())
 
// fade in after (this).remove has been completed
var buttonCheck = document.getElementsByClassName("button"); 
var totalScore = "";
   
$(".button").on("click", function(){
  $("#questionBoxTwo").fadeOut(1000,function(){
    $(this).remove();
})})

// Check the buttons for correct class
for ( var i = 0; i > flex-container.lenght; i++) { 
  $("button").on("click", function(){
    if (buttonCheck.click === button.correct){
        totalScore = totalScore + 25;
    }
    else {secondsElapsed + 1500};
  }
)}