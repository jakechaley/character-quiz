const colorRedScore = 13;
const colorGreenScore = 5;
const colorBlueScore = 25;
const blot1Score = 56;
const blot2Score = 25;
const blot3Score = 39;
const char1 = 50;
const char2 = 75;
const char3 = 100;
const char4 = 150;



$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    $("#char1, #char2, #char3, #char4, #char5").hide();
    const ageScore = parseInt($("input#age").val());
    const color = $("select#color").val();
    const blot = $("select#blot").val();

    let colorScore = 0;
    let blotScore = 0;
    

    if (color === "red") {
      colorScore = colorRedScore
    } else if (color === "green") {
      colorScore = colorGreenScore
    } else if (color === "blue") {
      colorScore = colorBlueScore 
    }
    
    if (blot === "monster") {
      blotScore = blot1Score
    } else if (blot === "lady") {
      blotScore = blot2Score
    } else if (blot === "crab") {
      blotScore = blot3Score
      
    }
    let finalScore = (ageScore + colorScore + blotScore)

    if (finalScore <= char1) {
      $("#char1").show();
    } else if (finalScore <= char2) {
      $("#char2").show();
    } else if (finalScore <= char3) {
      $("#char3").show();
    } else if (finalScore <= char4) {
      $("#char4").show();
    } else {
      $("#char5").show();
      
    }

    
    event.preventDefault();
  });
});