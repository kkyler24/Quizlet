
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

   // $(".time").text(minutes + ":" + seconds);
    $(".time").text( seconds);
    setTimeout(display, 1000);
}

$(".startButton").click(function () {
    startTime = new Date();
    setTimeout(display, 1000);
});


// ---Score Code---
var scoreArray = [];
var total = 0;
function getSum(total, num) {
  return total + (scoreArray);
}
console.log(total);


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
    $(this).css(display,"none");
  }) 
});
// --->Question A Evalution code <---
$("#A1").on("click", function () {
  addTime()
  });
$("#A2").on("click", function () {
  scoreArray.unshift(25);
    //add score here for tthe right answer
     })

$("#A3").on("click", function () {
  addTime()
   });


$(".answerA").on("click", function () {
  $("#questionBoxTwo").fadeIn(1500, function () {
  })
});

$('.answerB').on('click', function () {
  $("#questionBoxTwo").fadeOut(500, function () {
    $(this).css(display,"none");
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
  scoreArray.unshift(25)
    });

$(".answerB").on("click", function () {
  $("#questionBoxThree").fadeIn(1500, function () {
  })
});

$('.answerC').on('click', function () {
  $("#questionBoxThree").fadeOut(500, function () {
    $(this).css(display,"none");
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
   scoreArray.unshift(25)
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
   scoreArray.unshift(25)
});

 $("#D3").on("click", function () {
  addTime()
    });

$('.answerD').on('click', function () {
  $("#questionBoxFour").fadeOut(500, function () {
    $(this).css(display,"none");
  })
});


$(".answerD").on("click", function () {
    $('#totalscore').fadeIn(1500, function () {
      document.getElementById("stats").innerHTML = totalScore;
  
    })
  });


function addTime(e, seconds){
  var timeEle = document.querySelector(".time");
  let newTime = parseInt(timeEle.innerHTML)
  newTime += 10
  timeEle.innerHTML = newTime;
  
}
 
  //var timeArr = timeText.split(":");
  //timeArr[timeArr.length - 1] = parseInt(timeArr[timeArr.length -1]) +10;
  //[0,0,0+seconds]
  //var timeStr = timeArr.join(":");
  //timeEle.innerHTML = timeStr;}