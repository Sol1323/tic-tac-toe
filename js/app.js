// wait for the DOM to finish loading
console.log("js file connected");

$(document).ready(function() {

var $boxes= $('.box');
//PLAYERS
  var turn = "X";

//TO RESET GAME

function resetGame(){
  $boxes.text("");
  $boxes.removeClass("X");
  $boxes.removeClass("O");

  turn = "X";

}


  //CHANGE TURNS
  function changeTurn(){
    if (turn === "X"){
      turn = "O";
    } else {
      turn = "X";
    }
  };

//FUNTION TO CHECK IF THE BOARD IS FULL
function boardHasEmptyBoxes () {

  var hasEmptyBoxes = false;

  for (var i=0; i<$boxes.length; i++){
     if ($boxes.eq(i).text() === ''){

        hasEmptyBoxes = true;
     }
  }
    return hasEmptyBoxes;
}

//


//FUNCTION TO CHECK FOR THE WINNER



//PLAY ON
 $boxes.on('click', function() {

      if ($(this).text() === ""){

          $(this).text(turn);
          $(this).addClass(turn);

          var winner = getWinner();
          if (winner) {
            alert("Player " + winner + " won!");
            resetGame();
          } else if (boardHasEmptyBoxes()) {
            changeTurn();

          } else {
            alert("Boooo! Nobody won! Let's play again!")
            resetGame();
          }

      }

 });
});
