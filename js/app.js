// wait for the DOM to finish loading
console.log("js file connected");

$(document).ready(function() {

var clicklableBoxes= $('.box');
//PLAYERS
  var turn = "X";



  //CHANGE TURNS
  function changeTurn(){
    if (turn === "X"){
      turn = "O";
    } else {
      turn = "X";  
    }
  };


//ACTION VARIABLES
  //var $clickedbox = $clicklableBoxes.eq();


//PLAY ON
 $clicklableBoxes.on("click", function() {

      if ( boxEmpty){

        input x or O;

      }

 });
});
