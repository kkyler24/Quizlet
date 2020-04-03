let timeDiv = document.querySelector(".time")
let timeEle = document.querySelector(".timer");
let myScore = document.querySelector('#totalScore')
let quizTimer;
$(".startButton").click(function () {
  $(".time").fadeIn(100, function () {
    $("<h3>Time:</h3>").insertBefore(".timer");
    createTimer()
  })
});


//Make a timer
function createTimer() {
  timeEle.innerHTML = 0
  quizTimer = setInterval(function () {
    timeEle.innerHTML = parseInt(timeEle.innerHTML) + 1;
  }
    , 1000)
}
function myStopFunction(quizTimer) {
  clearInterval(quizTimer);
}
function addTime() {
  var newTime = parseInt(timeEle.innerHTML)
  newTime += 10
  timeEle.innerHTML = newTime
}


// ---Score Code---
var totalScore = 0;



// -->Get faded code<--
$(".startButton").on("click", function () {
  $("#startB").fadeOut(500, function () {
    $(this).remove();
  })
});
$(".startButton").on("click", function () {
  $("#questionBoxOne").fadeIn(1500, function () {
  })
});
$(".answerA").on("click", function () {
  $("#questionBoxOne").fadeOut(500, function () {
    $(this).css("display", "none");
    //********* 
  })
});

// --->Question A Evalution code <---
$("#A1").on("click", function () {
  addTime()
});
$("#A2").on("click", function () {
  totalScore = totalScore + 25;
  //add score here for tthe right answer
});

$("#A3").on("click", function () {
  addTime()
});
$(".answerA").on("click", function () {
  $("#questionBoxTwo").fadeIn(1500, function () {
  })
});
$('.answerB').on('click', function () {
  $("#questionBoxTwo").fadeOut(500, function () {
    $(this).css("display", "none");
  })
});

// --->Question B Evalution code <---
$("#B1").on("click", function () {
  addTime()
});
$("#B2").on("click", function () {
  addTime()
});
$("#B3").on("click", function () {
  totalScore = totalScore + 25;
});
$(".answerB").on("click", function () {
  $("#questionBoxThree").fadeIn(1500, function () {
  })
});
$('.answerC').on('click', function () {
  $("#questionBoxThree").fadeOut(500, function () {
    $(this).css("display", "none");
  })
});

// --->Question C Evalution code <---
$("#C1").on("click", function () {
  addTime()
});
$("#C2").on("click", function () {
  addTime
});
$("#C3").on("click", function () {
  totalScore = totalScore + 25;
});
$(".answerC").on("click", function () {
  $("#questionBoxFour").fadeIn(1500, function () {
  })
});

// --->Question D Evalution code <---
$("#D1").on("click", function () {
  addTime()
});
$("#D2").on("click", function () {
  totalScore = totalScore + 25;
});
$("#D3").on("click", function () {
  addTime()
});

$('.answerD').on('click', function () {
  $("#questionBoxFour").fadeOut(500, function () {
    myStopFunction(quizTimer)
  })
});

$(".answerD").on("click", function () {
  $('.score').fadeIn(1500, function () {
    $('#totalScore').fadeIn(1000, function () {
      myScore.innerHTML = totalScore
      console.log(totalScore);
    })
  })
});