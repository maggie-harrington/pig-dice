// back end
var turnTotal1 = 0; // doesn't seem to work unless global
var turnTotal2 = 0; // doesn't seem to work unless global

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
    } else {
      turnTotal1 += result1;
    }
    $("#turn-total-player1").append(turnTotal1);
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
    } else {
      turnTotal2 += result2;
    }
    $("#turn-total-player2").append(turnTotal2);
  });
});
