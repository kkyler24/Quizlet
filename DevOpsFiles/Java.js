var secLeft = 1800;
var countDown = setInterval(decreaseTime, 1000);
var totalScore = [;]

$( document).load(function() {
  function decreaseTime() {
     secLeft = secLeft -1;
    if (secLeft < 1 ){
      clearInterval(secLeft);
    }
  });

  }

  // --Check if correct button is clicked--
var questionsContainer = document.getElementsByClassName("correct");
  for(var i=0, max = questionsContainer.length; i< max; i++){
    questionsContainer[i].addEventListener("click", function(Event));

  }
Function answerCheck(
  if ("correct"=== true)
  totalScore.push
)

 
 
  
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
  //         alert("Please select your criteria");
  //     }
  //     else {
  //     var pwLength = prompt("input a number length here");
  
  //     var possiblePasswordCharacters = '';
  //     if (numBox.checked === true ){
  //     possiblePasswordCharacters = possiblePasswordCharacters + num; 
  //     } 
