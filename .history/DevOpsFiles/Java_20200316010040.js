
// record start time
var startTime;
function display() {
    // later record end time
    var endTime = new Date();

    // time difference in ms
    var timeDiff = endTime - startTime;

    // strip the miliseconds
    timeDiff /= 1000;

    // get seconds
    var seconds = Math.floor(timeDiff % 60);

    // remove seconds from the date
    timeDiff = Math.floor(timeDiff / 60);

    // get minutes
    var minutes = Math.round(timeDiff % 60);

    // remove minutes from the date
    timeDiff = Math.floor(timeDiff / 60);

    // get hours
    var hours = Math.round(timeDiff % 24);

    // remove hours from the date
    timeDiff = Math.floor(timeDiff / 24);

    // the rest of timeDiff is number of days
    var days = timeDiff;

    $(".time").text(hours + ":" + minutes + ":" + seconds);
    setTimeout(display, 1000);
}

$("#startButton").click(function () {
    startTime = new Date();
    setTimeout(display, 1000);
});


//   function stopTimer() {
//     secondsElapsed = 0;
//     formatTime();
//   }
//   function startTimer() {
//     if (totalSeconds > 0) {
//       secondsElapsed = 0;
//       timer = setInterval(function () {
//         secondsElapsed++;
//         formatTime();
//       }, 1000);
//     }
//     formatTime();
//   }
// };

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
$(".button").on("click", function () {
  $(".startButton").fadeout(2500, function () {
    $(this).remove();
  })
});

$(".startButton").on("click", function () {
  $("#questionBoxOne").fadeIn(3600, function () {
  })
});

$(".answerA").on("click", function () {
  $("#questionBoxOne").fadeOut(2500, function () {
    $(this).remove();
  })
});

$(".answerA").on("click", function () {
  $("#questionBoxTwo").fadeIn(3600, function () {
  })
});

$('.answerB').on('click', function () {
  $("#questionBoxTwo").fadeOut(2500, function () {
    $(this).remove();
  })
});

$(".answerB").on("click", function () {
  $("#questionBoxThree").fadeIn(3600, function () {

  })
});

$('.answerC').on('click', function () {
  $("#questionBoxThree").fadeOut(2500, function () {
    $(this).remove();
  })
});

$(".answerC").on("click", function () {
  $("#questionBoxFour").fadeIn(3500, function () {
  })
});

$('.answerD').on('click', function () {
  $("#questionBoxFour").fadeOut(2500, function () {
    $(this).remove();
  })
});

$(".answerD").on("click", function () {
    $("#stats").slideDown(3500, function () {
    })
  });

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