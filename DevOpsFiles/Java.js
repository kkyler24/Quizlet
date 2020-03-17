
// --> timer<--
var startTime;
function display() {
    var endTime = new Date();

    var timeDiff = endTime - startTime;
    timeDiff /= 1000;
   
    var seconds = Math.floor(timeDiff % 60);
    timeDiff = Math.floor(timeDiff / 60);

    var minutes = Math.round(timeDiff % 60);
    timeDiff = Math.floor(timeDiff / 60);

    var hours = Math.round(timeDiff % 24);
    timeDiff = Math.floor(timeDiff / 24);

    var days = timeDiff;

    $(".time").text(minutes + ":" + seconds);
    setTimeout(display, 1000);
}

$(".startButton").click(function () {
    startTime = new Date();
    setTimeout(display, 1000);
});


// ---Score Code---
var totalScore = [];
function getSum(total, num) {
  return total + Math(num);
}
function finalScore(item) {
  document.getElementById("#stats").innerHTML = totalScore.reduce(getSum, 0);
}

// 

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
// -->evaluate Q<---


// -->Get faded code<--
$(".startButton").on("click", function () {
  $("#startB").fadeOut(1000, function () {
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
// --->Question A Evalution code <---
$("#A1").on("click", function () {
 addTime()
  });
$("#A2").on("click", function () {
    totalScore = totalScore + 25;
    //add score here for tthe right answer
     });
$("#A3").on("click", function () {
  console.log('Wrong!!')
  //subtract score 
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
$("#A1").on("click", function () {
  addTime()
   });
 $("#A2").on("click", function () {
     totalScore = totalScore + 25;
     //add score here for tthe right answer
      });
 $("#A3").on("click", function () {
   console.log('Wrong!!')
   //subtract score 
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

function addTime(e, seconds){
  var timeEle = document.querySelector(".time");
  var timeText = timeEle.innerHTML;
  var timeArr = timeText.split(":");
  timeArr[timeText.length - 1] += seconds;
  //[0,0,0+seconds]
  var timeStr = timeArr.join(":");
  timeEle.innerHTML = timeStr;
}



  // console.log(Quests);


  // {
  //   else if ($("#A2").text() === Quest[0].Q1.answersCorrect){
  //     else($("#A3").text()===Quests[0].Q1.)



