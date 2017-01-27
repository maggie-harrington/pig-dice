// back end
var turnTotal1 = 0; // doesn't seem to work unless global
var turnTotal2 = 0; // ""
var gameScore1 = 0; // ""
var gameScore2 = 0; // ""

function dieRoll() {
  return Math.floor(Math.random()*6 + 1);
}

function newRoll() {
  $("#current-roll-player1").empty();
  $("#turn-total-player1").empty();
  $("#rolled1-player1").hide();
  $("#current-roll-player2").empty();
  $("#turn-total-player2").empty();
  $("#rolled1-player2").hide();
}
function newTurn() {
  turnTotal1 = 0;
  $(".hide1").hide();
  turnTotal2 = 0;
  $(".hide2").hide();
  newRoll();
}
function updateGameScore() {
  $("#game-score-player1").empty();
  $("#game-score-player2").empty();
  newTurn();
}

function winGame() {
  gameScore1 = 0;
  gameScore2 = 0;
  $("#new-game").show();
  updateGameScore();
}






// front end
$(document).ready(function(){
  $("form#roll-die-player1").submit(function(event){
    event.preventDefault();
    newRoll();
    var result1 = dieRoll();
    $("#current-roll-player1").append(result1);
    if (result1 === 1) {
      newTurn();
      $(".hide2").show();
      $("#rolled1-player1").show();
    } else {
      turnTotal1 += result1;
      $("#turn-total-player1").append(turnTotal1);
      if (gameScore1 + turnTotal1 >= 30) {
        updateGameScore();
        gameScore1 += turnTotal1;
        $("#game-score-player1").append(gameScore1);
        $("#win-player1").show();
        winGame();
      }
    }
  });

  $("form#roll-die-player2").submit(function(event){
    event.preventDefault();
    newRoll();
    var result2 = dieRoll();
    $("#current-roll-player2").append(result2);
    if (result2 === 1) {
      newTurn();
      $(".hide1").show();
      $("#rolled1-player2").show();
    } else {
      turnTotal2 += result2;
      $("#turn-total-player2").append(turnTotal2);
      if (gameScore2 + turnTotal2 >= 30) {
        updateGameScore();
        gameScore2 += turnTotal2;
        $("#game-score-player2").append(gameScore2);
        $("#win-player2").show();
        winGame();
      }
    }
  });

  $("form#hold-player1").submit(function(event) {
    event.preventDefault();
    updateGameScore();
    gameScore1 += turnTotal1;
    $("#game-score-player1").append(gameScore1);
    turnTotal1 = 0;
    $(".hide2").show();
  });

  $("form#hold-player2").submit(function(event) {
    event.preventDefault();
    updateGameScore();
    gameScore2 += turnTotal2;
    $("#game-score-player2").append(gameScore2);
    turnTotal2 = 0;
    $(".hide1").show();
  });
});

$("form#new-game").submit(function(event) {
  event.preventDefault();
  $(".hide1").show();
  $(".hide2").show();
  $("form.new-game").hide();
});