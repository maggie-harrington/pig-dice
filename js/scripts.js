// back end
var turnTotal1 = 0; // doesn't seem to work unless global
var turnTotal2 = 0; // ""
var gameScore1 = 0; // ""
var gameScore2 = 0; // ""

function dieRoll () {
  return Math.floor(Math.random()*6 + 1);
}





// front end
$(document).ready(function(){
  $("form#roll-die-player1").submit(function(event){
    event.preventDefault();
    $("#current-roll-player1").empty();
    $("#turn-total-player1").empty();
    var result1 = dieRoll();
    $("#current-roll-player1").append(result1);
    if (result1 === 1) {
      turnTotal1 = 0;
      alert ("Player 2's turn!");
      $("#turn-total-player1").empty();
    } else {
      turnTotal1 += result1;
      $("#turn-total-player1").append(turnTotal1);
    }
  });

  $("form#roll-die-player2").submit(function(event){
    event.preventDefault();
    $("#current-roll-player2").empty();
    $("#turn-total-player2").empty();
    var result2 = dieRoll();
    $("#current-roll-player2").append(result2);
    if (result2 === 1) {
      turnTotal2 = 0;
      alert ("Player 1's turn!");
      $("#turn-total-player2").empty();
    } else {
      turnTotal2 += result2;
      $("#turn-total-player2").append(turnTotal2);
    }
  });

  $("form#hold-player1").submit(function(event) {
    event.preventDefault();
    $("#game-score-player1").empty();
    $("#turn-total-player1").empty();
    $("#current-roll-player1").empty();
    gameScore1 += turnTotal1;
    $("#game-score-player1").append(gameScore1);
    turnTotal1 = 0;
    if (gameScore1 >= 100) {
      alert("Player 1 wins!");
      gameScore1 = 0;
      gameScore2 = 0;
    }
  });

  $("form#hold-player2").submit(function(event) {
    event.preventDefault();
    $("#game-score-player2").empty();
    $("#turn-total-player2").empty();
    $("#current-roll-player2").empty();
    gameScore2 += turnTotal2;
    $("#game-score-player2").append(gameScore2);
    turnTotal2 = 0;
    if (gameScore2 >= 100) {
      alert("Player 2 wins!");
      gameScore2 = 0;
      gameScore1 = 0;
    }
  });

});
