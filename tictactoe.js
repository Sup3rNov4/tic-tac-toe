$(document).ready(function(){

$("div.X").text("X Wins:");
$("div.O").text("O Wins:");

// var playerMove = function(){
//       turn = turn ? false : true;
//       console.log("turn:"+ turn);
//       checkWin();
//       this.playerMove = playerMove;
//     }

// $("div.sq2").on("click", function(){
//   if ($("div.sq2").text() === ("")){
//     $(this).text("X");
//   } else if ($("div.sq2").text() === ("")){
//     $(this).text("O");
//   } else
//   alert("Please Choose Another Square");
// })
//
// $("div.sq3").on("click", function(){
//   if ($("div.sq3").text() === ("")){
//     $(this).text("X");
//   } else if ($("div.sq3").text() === ("")){
//     $(this).text("O");
//   } else
//   alert("Please Choose Another Square");
// })
//
// $("div.sq4").on("click", function(){
//   if ($("div.sq4").text() === ("")){
//     $(this).text("X");
//   } else if ($("div.sq4").text() === ("")){
//     $(this).text("O");
//   } else
//   alert("Please Choose Another Square");
// })
//
// $("div.sq5").on("click", function(){
//   if ($("div.sq5").text() === ("")){
//     $(this).text("X");
//   } else if ($("div.sq5").text() === ("")){
//     $(this).text("O");
//   } else
//   alert("Please Choose Another Square");
// })
//
// $("div.sq6").on("click", function(){
//   if ($("div.sq6").text() === ("")){
//     $(this).text("X");
//   } else if ($("div.sq6").text() === ("")){
//     $(this).text("O");
//   } else
//   alert("Please Choose Another Square");
// })
//
// $("div.sq7").on("click", function(){
//   if ($("div.sq7").text() === ("")){
//     $(this).text("X");
//   } else if ($("div.sq7").text() === ("")){
//     $(this).text("O");
//   } else
//   alert("Please Choose Another Square");
// })
//
// $("div.sq8").on("click", function(){
//   if ($("div.sq8").text() === ("")){
//     $(this).text("X");
//   } else if ($("div.sq8").text() === ("")){
//     $(this).text("O");
//   } else
//   alert("Please Choose Another Square");
// })
//
// $("div.sq9").on("click", function(){
//   if ($("div.sq9").text() === ("")){
//     $(this).text("X");
//   } else if ($("div.sq9").text() === ("")){
//     $(this).text("O");
//   } else
//   alert("Please Choose Another Square");
// }

var winsX = 0;
var winsO = 0;
var win1 = [1,2,3];
var win2 = [4,5,6];
var win3 = [7,8,9];
var win4 = [1,4,7];
var win5 = [2,5,8];
var win6 = [3,6,9];
var win7 = [1,5,9];
var win8 = [3,5,7];
var wins = [win1, win2, win3, win4, win5, win6, win7, win8]

var getBoard = function() {
    var board;
    board = ['', '', '', '', '', '', '', '', ''];
    $(".").each(function (index) {
        board[index] = $(this).text();
    });
    return board;
}

var ifWon = function() {
  for (var i = 0; i < wins.length; i++) {
    var xCounter = 0;
    var yCounter = 0;
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
        yCounter++;
        if (yCounter === 3 ) {
          winAlert();
          return;
        }
      }
    }
  }
}
//Win Counter

winCounter = function() {
   if (winX === true) {
     winsX++
     $('.results').append("div.X");
   } else if (winO === true){
     winsO++
     $('.results').append("div.O");
   }
 }

// check win

checkWin = function(board) {
    return checkRow(board[0], board[1], board[2])
        + checkRow(board[3], board[4], board[5])
        + checkRow(board[6], board[7], board[8])
        + checkRow(board[0], board[3], board[6])
        + checkRow(board[1], board[4], board[7])
        + checkRow(board[2], board[5], board[8])
        + checkRow(board[0], board[4], board[8])
        + checkRow(board[2], board[4], board[6]);
}



// Place X or O on the board

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
  ifWon();
});

// Detects whether game has finished

// var gameEnd = false;
checkIfGameEnd = function(){
  if (($(".sq1").text() && $(".sq2").text() && $(".sq3").text() === !("")) &&
  ($(".sq4").text() && $(".sq5").text() && $(".sq6").text() === !("")) &&
  ($(".sq7").text() && $(".sq8").text() && $(".sq9").text() === !("")))
{
  gameEnd = true;
  checkWin();
  winAlert();
}
}

// var winX = 0;
// var winO = 0;
// var tie = 0;
// checkWin = function () {
    // if (($(".sq1") === $(".sq2") && $(".sq1") === $(".sq3") && ($(".sq1").text() === ("X"))) || //first row
    // ($(".sq4") === $(".sq5") && $(".sq4") === $(".sq6") && ($(".sq4").text() === ("X"))) || //second row
    // ($(".sq7") === $(".sq8") && $(".sq7") === $(".sq9") && ($(".sq7").text() === ("X"))) || //third row
    // ($(".sq1") === $(".sq4") && $(".sq1") === $(".sq7") && ($(".sq1").text() === ("X"))) || //first column
    // ($(".sq2") === $(".sq5") && $(".sq2") === $(".sq8") && ($(".sq2").text() === ("X"))) || //second column
    // ($(".sq3") === $(".sq6") && $(".sq3") === $(".sq9") && ($(".sq3").text() === ("X"))) || //third column
    // ($(".sq1") === $(".sq5") && $(".sq1") === $(".sq9") && ($(".sq1").text() === ("X"))) || //diagonal 1
    // ($(".sq3") === $(".sq5") && $(".sq3") === $(".sq7") && ($(".sq3").text() === ("X")))) //diagonal 2
    // {
    // if ($(".boardTop").text() === "X" || $(".boardMid").text() === "X" || $(".boardBot").text() === "X")
    // $(".sq1") === $(".sq4") && $(".sq1") === $(".sq7") && $(".sq1").text() === "X") || //first column
    // $(".sq2") === $(".sq5") && $(".sq2") === $(".sq8") && $(".sq2").text() === "X") || //second column
    // $(".sq3") === $(".sq6") && $(".sq3") === $(".sq9") && $(".sq3").text() === "X") || //third column
    // $(".sq1") === $(".sq5") && $(".sq1") === $(".sq9") && $(".sq1").text() === "X") || //diagonal 1
    // $(".sq3") === $(".sq5") && $(".sq3") === $(".sq7") && $(".sq3").text() === "X")) //diagonal 2
      // console.log("Finished Game!")
      // alert("X Wins!");
// }
      // winX = true;
      // winAlert();
    //  else if {
    // (($(".sq1") === $(".sq2") && $(".sq1") === $(".sq3") && ($(".sq1").text() === ("O"))) || //first row
    // ($(".sq4") === $(".sq5") && $(".sq4") === $(".sq6") && ($(".sq4").text() === ("O"))) || //second row
    // ($(".sq7") === $(".sq8") && $(".sq7") === $(".sq9") && ($(".sq7").text() === ("O"))) || //third row
    // ($(".sq1") === $(".sq4") && $(".sq1") === $(".sq7") && ($(".sq1").text() === ("O"))) || //first column
    // ($(".sq2") === $(".sq5") && $(".sq2") === $(".sq8") && ($(".sq2").text() === ("O"))) || //second column
    // ($(".sq3") === $(".sq6") && $(".sq3") === $(".sq9") && ($(".sq3").text() === ("O"))) || //third column
    // ($(".sq1") === $(".sq5") && $(".sq1") === $(".sq9") && ($(".sq1").text() === ("O"))) || //diagonal 1
    // ($(".sq3") === $(".sq5") && $(".sq3") === $(".sq7") && ($(".sq3").text() === ("O")))) //diagonal 2
    //  {
    // ($(".boardTop").each.text() === "O" || $(".boardMid").each.text() === "O" || $(".boardBot").each.text() === "O")
    // $(".sq1") === $(".sq4") && $(".sq1") === $(".sq7") && $(".sq1").text() === "O") || //first column
    // $(".sq2") === $(".sq5") && $(".sq2") === $(".sq8") && $(".sq2").text() === "O") || //second column
    // $(".sq3") === $(".sq6") && $(".sq3") === $(".sq9") && $(".sq3").text() === "O") || //third column
    // $(".sq1") === $(".sq5") && $(".sq1") === $(".sq9") && $(".sq1").text() === "O") || //diagonal 1
    // $(".sq3") === $(".sq5") && $(".sq3") === $(".sq7") && $(".sq3").text() === "O")) //diagonal 2
      //  console.log("Finished Game")
      //  alert("O Wins!");
  // }
      // winO = true;
      //   winAlert();
  //      else {
  //         tie = true;
  //         alert("It's a Draw!");
  //   }
  // }

// Alerts if win

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
