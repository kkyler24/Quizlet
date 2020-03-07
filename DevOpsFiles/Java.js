var secLeft = 1800;
var countDown = setInterval(decreaseTime, 1000);
var totalScore = [];
// load question when doc laods on webpage--
$(document).load(function() {
  function decreaseTime() {
     secLeft = secLeft -1;
    if (secLeft < 1 ){
      clearInterval(secLeft);
    }
  })
  }
  .answers.eventhandler(changeQuestion());

//attach event handler to check next question and change to next one
$( ".answers" ).bind("click", function() {
evaluateQuestion(question[currentQuestion]);

 // --Timer--

  // --Check if correct button is clicked--
  // store questions and answers
  
  // we need to know which one is correc
// auto fill questions?

}question[0].answers[0].title
     
  var question = [
    {
  "Q": "What is BootStrap?",
  "answers": [{
    "A": {
      "title": "A piece of material that helps hold up your boot"
    },
    "B": {
      "title": "An open source Css framework"
    },
    "C": {
      "title": "An open source JS framework"
    },
  "correctAnswer": "A piece of material that helps hold up your boot"
  }]
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
  ]
  // displaying next question fill in content? how to fill content into buttons, should you use just <P> instead?
  function nextQ() {
    var q=questions[question], ids = ["A","B","C"],
    a = document.getElementById("A"),
    b = document.getElementById("B"),
    c = document.getElementById("C"),
    answers = q.answers;
    document.getElementById("Questions").innerHTML=q.Q;
    for (var i=0;i<ids.length;i++) {
      var id=ids[i],p = document.getElementById(id);
      p.title=answers[id].title;
      p.innerHTML=answers[id].text;
    }
  }




  // onload
  window.onload = function() {
    var answers = document.querySelectorAll(".answer");
    var q = questions[question]
    for (var i = 0; i < answers.length; i++) {
      answers[i].addEventListener("click", function() {
        var act = questions[question].answers[this.id];
        score = totalScore;
        // document.getElementById("score").innerHTML =  + score;
        
        setTimeout(nextQ,2000)
      });
    }
    nextQ(); // first question?
  }








// Setting question to auto fll in text area. 
  function setQuestion(question) {
    // set title
    $(".title").text(question.title);
    var answers = $(".Answer");
  
    // set the answers
    for( var i =0 ; i < 3 ; $i++){
      answers[$i].text(question.Answers[$i]);
    }
  
    // set correct answer
    $(".Answer").each(function(){
      if (this.text() === question[0].correctAnswer){
        $(this).addClass("correct");
      }
    });
  }
     
  function evaluateQuestion(question){
    //tally score-- how will you calculate total score and check is correct answer is chosen.
      //check answer
        if (clicked === question[0].Q.answers.correctAnswer){
          totalScore.push(25);
        }
        else (secLeft-15);
  }
  

  
    
  // give each button a class of either correct or wrong or just give the correct buttons a class (done)
  // chcek the class to apply the correct function to it
  // function 1 pointCheck-if class is correct push 25pts into total array, else subtract 15seconds from timer*
  // Display final score with initials
  