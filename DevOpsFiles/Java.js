var secLeft = 1800;
var countDown = setInterval(decreaseTime, 1000);

$( window ).unload(function() {
    return "Handler for .unload() called.";
  });

// decrease Timer
function decreaseTime() {
  var secLeft = secLeft -1;
  if (secLeft = 0 ){
    clearInterval(secLeft);
  }

  }


// Timer Div


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
