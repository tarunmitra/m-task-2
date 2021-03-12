function myFunction(){

 

 for (var i = 1; i <= 5; i++) {
 
  var numOfWon = 0;
  var numOfLost = 0;
  var guessNumber = parseInt(prompt("Enter a number from 1 to 5 : "));
  // 1 thake 5 projontu random number nibe
  var randomNumber = Math.floor(Math.random() * 5) + 1; 
  
    if (guessNumber == randomNumber) {
      console.log("You have won");
      numOfWon++  // won hole ak ak kore barbe
    }else {
       console.log("You have lost. Random number was " + randomNumber);
       numOfLost++ // lost hole ak ak kore barbe
    }
 }
 
 document.write("Total Number of won = " + numOfWon + "<br>");
 document.write("Total Number of Lost = " + numOfLost + "<br>");
 
}




