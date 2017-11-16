var hands = ['rock', 'paper', 'scissors'];

var player1 = {name: 'Lindsay', getHand: getHand, currentHand: null, wins: 0}
var player2 = {name: 'JP', getHand: getHand, currentHand: null, wins: 0}

function getHand() {
  return parseInt(Math.random()*10)%3;
}

function playRound(player1, player2) {
  player1.currentHand = getHand();
  player2.currentHand = getHand();

  var currPlay = player1.name + ": " + hands[player1.currentHand] + " " + player2.name + ": " + hands[player2.currentHand];

  if (player1.currentHand == player2.currentHand) {
    console.log(currPlay + " it's a tie");
    return null;
  } else if ((hands[player1.currentHand] == "rock" && hands[player2.currentHand] == "scissors") ||
      (hands[player1.currentHand] == "scissors" && hands[player2.currentHand] == "paper") ||
      (hands[player1.currentHand] == "paper" && hands[player2.currentHand] == "rock")) {
        player1.wins++;
        console.log(currPlay + " " + player1.name + " wins");
        return player1;
  } else {
    player2.wins++;
    console.log(currPlay + " " + player2.name + " wins");
    return player2;
  }
}

function playGame(player1, player2, playUntil) {

  player1.wins = 0;
  player2.wins = 0;

  while(player1.wins < playUntil && player2.wins < playUntil) {
    playRound(player1, player2);
  }

  if (player1.wins > player2.wins) {
    console.log(player1.name + " wins!");
  } else {
    console.log(player2.name + " wins!");
  }
}
playGame(player1, player2, 5);
