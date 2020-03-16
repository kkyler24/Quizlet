// Timer function stuff
// var displayTime = timerText.textContent;
// document.getElementById("displayTime");
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
  function formatTime() {
    timerText.textContent = "Time Remaining: " + getFormattedMinutes() + " : " + getFormattedSeconds();
    if (secondsElapsed >= totalSeconds) {
      clearInterval(timer);
      alert("Time's Up!");
    }
  }
  function stopTimer() {
    secondsElapsed = 0;
    formatTime();
  }
  function startTimer() {
    if (totalSeconds > 0) {
      secondsElapsed = 0;
      timer = setInterval(function () {
        secondsElapsed++;
        formatTime();
      }, 1000);
    }
    formatTime();
  }
};

// ---Score Code---
var totalScore = [];

function getSum(total, num) {
  return total + Math(num);
}
function myFunction(item) {
  document.getElementById("stats").innerHTML = totalScore.reduce(getSum, 0);
}



// Questions Object
var Quests = [
  {
    Q1: {
      Question: "What is BootStrap?",
      answers: ["A piece of material that helps hold up your boot", "An open source Css framework", "An open source JS framework"],
      answersCorrect: [1]

    },

    Q2: {
      Question: "HTML is to Skeleton as Javascript is to...?",
      answers: ["Muscles", "Skin", "Coffee"],
      answersCorrect: [0]
    },

    Q3: {
      Question: "What does HTML stand for?",
      answers: ["A piece of material that helps hold up your boot", "An open source Css framework", "An open source JS framework"],
      answersCorrect: [3]
    },

    Q4: {
      Question: "What is BootStrap?",
      answers: ["A piece of material that helps hold up your boot", "An open source Css framework", "An open source JS framework"],
      answersCorrect: [2]
    }
  }];


// -->Get faded code<--

var fadeOut = $(".answerA").on("click", function () {
  $("#questionBoxOne").fadeOut(2500, function () {
    $(this).remove();
  })
});

$(".button").on("click", function () {
  $("#questionBoxTwo").fadeIn(3500, function () {
  })
});

$('.answerB').on('click', function () {
  $("#questionBoxTwo").fadeOut(2500, function () {
    $(this).remove();
  })
});

$(".answerB").on("click", function () {
  $("#questionBoxThree").fadeIn(3500, function () {

  })
});

// $('.answerC').on('click', function () {
//   $("#questionBoxThree").fadeOut(2500, function () {
//     $(this).remove();
//   })
// });

// $(".answerC").on("click", function () {
//   $("#questionBoxFour").fadeIn(3500, function () {
//   })
// });

// $('.answerD').on('click', function () {
//   $("#questionBoxFour").fadeOut(2500, function () {
//     $(".answerD").addEventListener("click",function(){
//       //   alert("hows it going"); needs to be
//       $(this).remove();
//   })
// });

// $(".answerD").on("click", function () {
//   $("#stats").slideDown(3500, function () {
//   })
// });
// 
// var aBBox = document.getElementsByClassName("col-8 col-sm-6 answerB");
// aBBox.


// done.addEventListener("event", function(){ 
// $(".answerb").on("event", function(){
//   $("#questionBoxTwo").fadeOut(2000,function(){
//     $(this).remove();
// })}); 



// 
// $("#questionBoxTwo").fadeIn(1000,function())

// fade in after (this).remove has been completed
// var buttonCheck = document.getElementsByClassName("button"); 
// var totalScore = "";

// button listener



// Check the buttons for correct class
// // for ( var i = 0; i > flex-container.lenght; i++) { 
// //   $("button").on("click", function(){
// //     if (buttonCheck.click === button.correct){
// //         totalScore = totalScore + 25;
// //     }
// //     else {secondsElapsed + 1500};
//   }
// )}