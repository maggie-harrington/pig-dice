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
    $("#rolled1-player2").hide();
    var result1 = dieRoll();
    $("#current-roll-player1").append(result1);
    if (result1 === 1) {
      turnTotal1 = 0;
      $("#turn-total-player1").empty();
      $("#current-roll-player1").empty();
      $(".hide1").hide();
      $(".hide2").show();
      $("#rolled1-player1").show();
      $("#rolled1-player2").hide();
    } else {
      turnTotal1 += result1;
      $("#turn-total-player1").append(turnTotal1);
      if (gameScore1 + turnTotal1 >= 100) {
        gameScore1 += turnTotal1;
        $("#game-score-player1").empty();
        $("#game-score-player1").append(gameScore1);
        $("#win-player1").show();
        $(".hide2").hide();
        $(".hide1").hide();
        $("#new-game").show();
        gameScore1 = 0;
        gameScore2 = 0;
      }
    }
  });

  $("form#roll-die-player2").submit(function(event){
    event.preventDefault();
    $("#current-roll-player2").empty();
    $("#turn-total-player2").empty();
    $("#rolled1-player1").hide();
    var result2 = dieRoll();
    $("#current-roll-player2").append(result2);
    if (result2 === 1) {
      turnTotal2 = 0;
      $("#turn-total-player2").empty();
      $("#current-roll-player2").empty();
      $(".hide2").hide();
      $(".hide1").show();
      $("#rolled1-player2").show();
      $("#rolled1-player1").hide();
    } else {
      turnTotal2 += result2;
      $("#turn-total-player2").append(turnTotal2);
      if (gameScore2 + turnTotal2 >= 100) {
        gameScore2 += turnTotal2;
        $("#game-score-player2").empty();
        $("#game-score-player2").append(gameScore2);
        $("#win-player2").show();
        $(".hide1").hide();
        $(".hide2").hide();
        $("#new-game").show();
        gameScore2 = 0;
        gameScore1 = 0;
      }
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
    $(".hide1").hide();
    $(".hide2").show();
  });

  $("form#hold-player2").submit(function(event) {
    event.preventDefault();
    $("#game-score-player2").empty();
    $("#turn-total-player2").empty();
    $("#current-roll-player2").empty();
    gameScore2 += turnTotal2;
    $("#game-score-player2").append(gameScore2);
    turnTotal2 = 0;
    $(".hide2").hide();
    $(".hide1").show();
  });
});

$("form#new-game").submit(function(event) {
  event.preventDefault();
  $(".hide1").show();
  $(".hide2").show();
  $("form.new-game").hide();
});
