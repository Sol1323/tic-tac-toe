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

};


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

//DEFINE A FUNCTION THAT SEES IF THERE IS AN X OR O AS AN ARGUMENT IN EACH ROW
//SET IT TO INPUT THE STRING X OR O
function checkRow ($boxOne, $boxTwo, $boxThree) {
  var boxOneOwner = $boxOne.text();
  var boxTwoOwner = $boxTwo.text();
  var boxThreeOwner = $boxThree.text();

    if  ((boxOneOwner === boxTwoOwner) && (boxTwoOwner === boxThreeOwner)){
       if (boxOneOwner === "X") {
           return "X";
         } else if (boxOneOwner === "O")
         return "O";
       }
    }
  return null;
};


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
