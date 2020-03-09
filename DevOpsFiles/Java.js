// Timer function stuff
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
    answeredQ5();
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
}
// Global variables stuff
a = document.getElementById("A"),
b = document.getElementById("B"),
c = document.getElementById("C"),
answers = q.answers;

// question[0].answers.correct

// Fill question on call. 
$("#A").textContent = question.Q1.answersArray[0];
// do this for each answer for Q1
// then 
var question =
{
  Q1: {
    Question: "What is BootStrap?",
    answersArray: ["A piece of material that helps hold up your boot", "An open source Css framework", "An open source JS framework"],
    correctIndex: 1,
  }


},
  {
    "Q2": "HTML is to Skeleton as Javascript is to...?",
    "answers": {
      A: {
        "title": "Muscles"
      },
      B: {
        "title": "Skin"
      },
      "C": {
        "title": "Coffee"
      },
      "correctAnswer": "Skin"
    }
  },
  {
    "Q": "HTML is to Skeleton as Javascript is to...?",
    "answers": {
      "A": {
        "title": "Muscles"
      },
      "B": {
        "title": "Skin"
      },
      "C": {
        "title": "Coffee"
      },
      "correctAnswer": "Skin"
    }
  },
  {
    "Q": "HTML is to Skeleton as Javascript is to...?",
    "answers": {
      "A": {
        "title": "Muscles"
      },
      "B": {
        "title": "Skin"
      },
      "C": {
        "title": "Coffee"
      },
      "correctAnswer": "Skin"
    }
  },

  console.log(question);
//
//  displaying next question fill in content? how to fill content into buttons, should you use just <P> instead?
function nextQ() {
  var q = questions[question], ids = ["A", "B", "C"],

    document.getElementById("Questions").innerHTML = q.Q;
  // for (var i = 0; i < ids.length; i++) {
  //   var id = ids[i], p = document.getElementById(id);
  //   p.title = answers[id].title;
  //   p.innerHTML = answers[id].text;
  }
}

// 


// window open it calls function 
window.onload = function () {
  // get element with id of Questions
  $("#Questions").text(question[0].Q);
  $("#answerBox").text(question[0].answers.A.title);
  console.log(question[0].answersArray);
  // set text of element to the question
  var answerArrayTwo = question[0].answersArray;
  // going through array and for each elemnt it will call this function
  answerArrayTwo.forEach(function (answeroption) {
    //create button with answer option inside.
    // append it to answers contaniner, 
    var answerButton = $("<button>").text(answeroption);
    $("#answerBox").append(answerButton);
    console.log(answeroption);
  })

  //$("answers").click(function){
    
  }







// Setting question to auto fll in text area. 
function setQuestion(question) {
  // set title
  $(".title").text(question.title);
  var answers = $(".Answer");

  // set the answers
  for (var i = 0; i < 3; $i++) {
    answers[$i].text(question.Answers[$i]);
  }

  // set correct answer
  $(".Answer").click(function () {
    if (this.text() === question[0].correctAnswer) {
      $(this).addClass("correct");
    }
  });
}

function evaluateQuestion(question) {
  //tally score-- how will you calculate total score and check is correct answer is chosen.
  //check answer
  if (clicked === question[0].Q.answers.correctAnswer) {
    totalScore.push(25);
  }
  else (secLeft - 15);
}




  // give each button a class of either correct or wrong or just give the correct buttons a class (done)
  // chcek the class to apply the correct function to it
  // function 1 pointCheck-if class is correct push 25pts into total array, else subtract 15seconds from timer*
  // Display final score with initials
