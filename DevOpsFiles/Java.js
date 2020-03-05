var secLeft = 1800;
var countDown = setInterval(decreaseTime, 1000);

$( document).load(function() {
  function decreaseTime() {
     secLeft = secLeft -1;
    if (secLeft < 1 ){
      clearInterval(secLeft);
    }
  });

// decrease Timer


  }
document.getElementsByClassName()


// get class name of an element-
// chcek the class to apply the correct function to it
// function 1 pointCheck-if class is correct push 25pts into total array, else subtract 15seconds from timer* 
// function 2 reloadContent- check if button is clicked if true clear and reload next content
// function 3 timerTrack-  decrease timer every 1 second. display total time left, if timer reached less than 1 end quiz.  Start countdown timer on document load, 
// Display final score with initials

{/* //  Event listerner-check if correct button is true, change page add or subtract points.
  // generateBtn.addEventListener("click",function(event)){ */}
  
  // if (numBox.checked === false && symbox.checked === false && upperBox.checked === false &&   charbox.checked === false){
  //         alert("Please select your criteria");
  //     }
  //     else {
  //     var pwLength = prompt("input a number length here");
  
  //     var possiblePasswordCharacters = '';
  //     if (numBox.checked === true ){
  //     possiblePasswordCharacters = possiblePasswordCharacters + num; 
  //     } 
