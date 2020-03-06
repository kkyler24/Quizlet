var secLeft = 1800;
var countDown = setInterval(decreaseTime, 1000);
var totalScore = [];

 // --Timer--
$( document).load(function() {
  function decreaseTime() {
     secLeft = secLeft -1;
    if (secLeft < 1 ){
      clearInterval(secLeft);
    }
  })
  }

  
    // --Check if correct button is clicked--
  // store questions and answers
  
  // we need to know which one is correct
  question[4]
  
  var question = [
  "HTML is to Skeleton as Javascript is to...?",
  "Muscles",
  "Coffee",
  "Skin",
   "Muscles"
   ];
   
   question[currentQuestion].title;
     
 var currentQuestion = 0;
     
  var question = [
    {
      tite: "What is BootStrap?",
      Answers: ["A piece of material that helps hold up your boot","An open source Css framework","An open source JS framework"],
      correctAnswer: "A piece of material that helps hold up your boot"
    },
     {
      tite: "What is BootStrap?",
      Answers: ["A piece of material that helps hold up your boot","An open source Css framework","An open source JS framework"],
      correctAnswer: "A piece of material that helps hold up your boot"
    },
     {
      tite: "What is BootStrap?",
      Answers: ["A piece of material that helps hold up your boot","An open source Css framework","An open source JS framework"],
      correctAnswer: "A piece of material that helps hold up your boot"
    },
     {
      tite: "What is BootStrap?",
      Answers: ["A piece of material that helps hold up your boot","An open source Css framework","An open source JS framework"],
      correctAnswer: "A piece of material that helps hold up your boot"
    },
  ]
  
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
      if (this.text() === question0.correctAnswer){
        $(this).addClass("correct");
      }
    });
  }
     
  function evaluateQuestion(question){
    //tally score-- how will you calculate total score and check is correct answer is chosen.
      //check answer
        if (correct) {

        }
        else if ();
  }
  // load question when doc laods on webpage--
      onload(setQuestion())
  
      .answer.eventhandler(changeQuestion());

     
      //attach event handler to check next question and change to next one
      $( ".answer" ).bind("click", function() {
    evaluateQuestion(question[currentQuestion]);
   
      if (currentQuestion > questions.length()){
        currentQusetion++;
        setQuestion(question[currentQuestion]);
      } else {
        //show scoreboard
       
      }
   
  });
  
  
  
   
  
   
  
    // $("q1").click(function(){
  
    //   $(this).hide();
  
  
  
  
  // give each button a class of either correct or wrong or just give the correct buttons a class (done)
  
  //  check if those are clicked
  
  // get class name of an element-
  
  // chcek the class to apply the correct function to it
  
  // function 1 pointCheck-if class is correct push 25pts into total array, else subtract 15seconds from timer*
  
  // function 2 reloadContent- check if button is clicked if true clear and reload next content
  
  // function 3 timerTrack-  decrease timer every 1 second. display total time left, if timer reached less than 1 end quiz.  Start countdown timer on document load,
  
  // Display final score with initials
  
  
  
  {/* //  Event listerner-check if correct button is true, change page add or subtract points.
  
    //
  
   
  
    // if (numBox.checked === false && symbox.checked === false && upperBox.checked === false &&   charbox.checked === false){
  
  
    //     if (numBox.checked === true ){
  
    //     possiblePasswordCharacters = possiblePasswordCharacters + num;
  
    //     } 