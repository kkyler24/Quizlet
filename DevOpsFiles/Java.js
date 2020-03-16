// Timer function stuff
var startTime;

function display() {
    // later record end time
    var endTime = new Date();

    // time difference in ms
    var timeDiff = endTime - startTime;

    // strip the miliseconds
    timeDiff /= 1000;

    // get seconds
    var seconds = Math.round(timeDiff % 60);

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

    $(".time").text(minutes + ":" + seconds);
    setTimeout(display, 1000);
}

$("input#button").click(function () {
    startTime = new Date();
    setTimeout(display, 1000);
});
// var displayTime = timerText.textContent;
// document.getElementById("displayTime");
// window.onload = function () {
//   function getFormattedMinutes() {
//     var secondsLeft = totalSeconds - secondsElapsed;
//     var minutesLeft = Math.floor(secondsLeft / 60);
//     var formattedMinutes; {
//       formattedMinutes = "0" + minutesLeft;
//     }
//     return formattedMinutes;
//   }
//   function getFormattedSeconds() {
//     var secondsLeft = (totalSeconds - secondsElapsed) % 60;
//     var formattedSeconds;
//     if (secondsLeft < 10) {
//       formattedSeconds = "0" + secondsLeft;
//     } else {
//       formattedSeconds = secondsLeft;
//     }
//     return formattedSeconds;
//   }
//   function formatTime() {
//     timerText.textContent = "Time Remaining: " + getFormattedMinutes() + " : " + getFormattedSeconds();
//     if (secondsElapsed >= totalSeconds) {
//       clearInterval(timer);
//       alert("Time's Up!");
//     }
//   }
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
// $("#startButton").on('click', function () {
//   $("#StartButton").fadeOut(2000, function () {
//     $(this).remove();
//   })
// });

// $("#startButton").on("click", function () {
//   $("#questionBoxOne", "#timespent").fadeIn(3000, function () {

//   })
// });
$('.button').on('click', function () {
  $("#questionBoxOne").fadeOut(2500, function () {
      $(this).remove();
  })
});

$(".answerA").on("click", function () {
  $("#questionBoxTwo").fadeIn(3600, function () {
  })
});

$(".answerB").on("click", function () {
  $("#questionBoxTwo").fadeOut(2500, function () {
    $(this).remove();
  })
});

$(".answerB").on("click", function () {
  $("#questionBoxThree").fadeIn(3600, function () {
  })
});

$(".answerC").on("click", function () {
  $("#questionBoxThree").fadeOut(2500, function () {
    $(this).remove();
  })
});

$('.answerC').on('click', function () {
  $("#questionBoxFour").fadeIn(3600, function () {
  })
});

$('.answerD').on('click', function () {
  $("#questionBoxFour").fadeOut(2500, function () {
    $(".answerD").addEventListener("click",function(){
      //   alert("hows it going"); needs to be removed only after button is clicked, which will signal fade in from stats.
      $(this).remove();
  })
});

$(".answerD").on("click", function () {
  $("#stats").slideDown(3600, function () {
  })
});





