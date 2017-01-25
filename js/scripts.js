// back end

function dieRoll () {
  return Math.floor(Math.random()*6 + 1);
}










// front end
$(document).ready(function(){
  $("form#roll-die-player1").submit(function(event){
    $("#current-roll-player1").empty();
    event.preventDefault();
    $("#current-roll-player1").append(dieRoll());
  });

  $("form#roll-die-player2").submit(function(event){
    $("#current-roll-player2").empty();
    event.preventDefault();
    $("#current-roll-player2").append(dieRoll());
  });
});
