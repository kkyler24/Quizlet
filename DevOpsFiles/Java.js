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

// Timer Div

// how to chcek the class to apply the correct function to it
// how to get class name of an element- get the class name
// for each input field see if they class name is correct or not. 
// if the class  name is corerct do this else do this. 

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
