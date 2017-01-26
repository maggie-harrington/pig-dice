// back end
var turnTotal1 = 0; // doesn't seem to work unless global
var turnTotal2 = 0; // ""
var gameScore1 = 0; // ""
var gameScore2 = 0; // ""
var twoDice = false;

function dieRoll () {
  return Math.floor(Math.random()*6 + 1);
}





// front end

// player 1 die roll
$(document).ready(function(){
  $("form#roll-die-player1").submit(function(event){
    event.preventDefault();
    $("#current-roll-player1").empty();
    $("#turn-total-player1").empty();
    $("#rolled1-player2").hide();
    var player1Result1 = dieRoll();
    var player1Result2 = 0;
    var player1ResultSum;
    $("#current-roll-player1").append(player1Result1);

    if (twoDice === true) {
      player1Result2 = dieRoll();
      player1ResultSum = player1Result1 + player1Result2;
      $("#current-roll-player1").append(" + " + player1Result2 + " = " + player1ResultSum)

    } else {
      player1ResultSum = player1Result1;
    }

    if ((player1Result1 === 1) || (player1Result2 === 1)) {
      turnTotal1 = 0;
      $("#turn-total-player1").empty();
      $("#current-roll-player1").empty();
      $(".hide1").hide();
      $(".hide2").show();
      $("#rolled1-player1").show();
      $("#rolled1-player2").hide();
    } else {
      turnTotal1 += player1ResultSum;
      $("#turn-total-player1").append(turnTotal1);
      if (gameScore1 + turnTotal1 >= 20) {
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

// player 2 die roll
  $("form#roll-die-player2").submit(function(event){
    event.preventDefault();
    $("#current-roll-player2").empty();
    $("#turn-total-player2").empty();
    $("#rolled1-player1").hide();
    var player2Result1 = dieRoll();
    var player2Result2 = 0;
    var player2ResultSum;
    $("#current-roll-player2").append(player2Result1);

    if (twoDice === true) {
      player2Result2 = dieRoll();
      player2ResultSum = player2Result1 + player2Result2;
      $("#current-roll-player2").append(" + " + player2Result2 + " = " + player2ResultSum)
    } else {
      player2ResultSum = player2Result1;
    }

    if ((player2Result1 === 1) || (player2Result2 === 1)) {
      turnTotal2 = 0;
      $("#turn-total-player2").empty();
      $("#current-roll-player2").empty();
      $(".hide2").hide();
      $(".hide1").show();
      $("#rolled1-player2").show();
      $("#rolled1-player1").hide();
    } else {
      turnTotal2 += player2ResultSum;
      $("#turn-total-player2").append(turnTotal2);
      if (gameScore2 + turnTotal2 >= 20) {
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

// player 1 hold
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

// player 2 hold
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


  // new game
  $("form#new-game").submit(function(event) {
    event.preventDefault();
    $(".hide1").show();
    $(".hide2").show();
    $("#win-player1").hide();
    $("#win-player2").hide();
    $("form.new-game").hide();
    $("#game-score-player1").empty();
    $("#game-score-player2").empty();
    $("#game-score-player1").append("0");
    $("#game-score-player2").append("0");
    $("#turn-total-player1").empty();
    $("#turn-total-player2").empty();
    $("#current-roll-player1").empty();
    $("#current-roll-player2").empty();
    $("#rolled1-player1").hide();
    $("#rolled1-player2").hide();
    turnTotal1 = 0;
    turnTotal2 = 0;
    gameScore1 = 0;
    gameScore2 = 0;
  });

// change to 2-dice game
  $("form#two-dice").submit(function(event) {
    event.preventDefault();
    twoDice = true;
    $("form#two-dice").hide();
    $("form#original").show();
    $("form#new-game").submit();
  });

// change to original game
  $("form#original").submit(function(event) {
    event.preventDefault();
    twoDice = false;
    $("form#original").hide();
    $("form#two-dice").show();
    $("form#new-game").submit();
  });



});
