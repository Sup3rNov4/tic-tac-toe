$(document).ready(function(){

$("div.X").text("X Wins:");
$("div.O").text("O Wins:");

var winsX = false;
var winsO = false;
var win1 = [1,2,3];
var win2 = [4,5,6];
var win3 = [7,8,9];
var win4 = [1,4,7];
var win5 = [2,5,8];
var win6 = [3,6,9];
var win7 = [1,5,9];
var win8 = [3,5,7];
var wins = [win1, win2, win3, win4, win5, win6, win7, win8]

var turns = 0;
var gameEnd = function (){
  turns++;
  console.log(turns, winsX, winsO);
  if ((turns === 9) && (winsX === false) && (winsO === false)){
    alert("Its a Tie.")
  }
};

var checkWin = function() {
  gameEnd();
  for (var i = 0; i < wins.length; i++) {
    var xCounter = 0;
    var oCounter = 0;
    var currentWinCombination = wins[i];
    for (var j = 0; j < wins[i].length; j++) {
      if ( $(".square").eq(currentWinCombination[j] - 1).text() === "X"){
        winX = true;
        winO = false;
        xCounter++;
        if (xCounter === 3) {
          winAlert();
          return;
        }
      } else if ($(".square").eq(currentWinCombination[j] - 1).text() === "O") {
        winO = true;
        winX = false;
        oCounter++;
        if (oCounter === 3 ) {
          winAlert();
          return;
        }
    }
    }
    }
  };

winCounter = function() {
   if (winX === true) {
     winsX++
     $('.results').append("div.X");
   } else if (winO === true){
     winsO++
     $('.results').append("div.O");
   }
 }

var currentPlayer = 'X';
$(".square").on("click", function() {
  if (currentPlayer === 'X'){
    currentPlayer = 'O';
    $(this).text(currentPlayer);
  }
   else if  (currentPlayer === 'O'){
    currentPlayer = 'X';
    $(this).text(currentPlayer);
  }
  checkWin();
});

winAlert = function(){
  if (winX === true) {
    alert("Player X Wins!");
  }
  if (winO === true) {
    alert("Player O Wins!");
  }
};

$("button").on("click", function(){
  $(".square").text("").fadeOut(1000).fadeIn(1500);
});
});
