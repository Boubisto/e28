// Get the elements 
let playBtn = document.querySelector("#playBtn");
let computerChoice = document.querySelector("#computerChoice");
let computerHand = document.querySelector("#computerHand");
let winHand = document.querySelector("#winHand");
let loseHand = document.querySelector("#loseHand");
let drawHand = document.querySelector("#drawHand");

playBtn.addEventListener("click", playGame);

function playGame() {

    let playerHand = document.querySelector('input[name="yourHand"]:checked').value;

    // The computer ramdomly chooses a hand
    let choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * Math.floor(choices.length));
    let play = choices[random];

    let draw = "";
    let win = "";
    // You win if your hand beats the computer hand
    if ((playerHand == "rock" && play == "scissors") || (playerHand == "paper" && play == "rock") || (playerHand == "scissors" && play == "paper")) {
         win = playerHand;
    }

    else if ((playerHand == "rock" && play == "paper") || (playerHand == "paper" && play == "scissors") || (playerHand == "scissors" && play == "rock")) {
        win = play;
    }

    else {
         draw = playerHand == play;
    } 

    // Update the page
    computerHand.innerHTML = play;

    // Briefly hide and then show the results again
    // This way when the results are the same as the previous round
    // It doesn't look like nothing happens when the button is clicked
    computerChoice.style.display = 'none';
    setTimeout(function () {
        computerChoice.style.display = 'block';
    }, 100);

    if (win == playerHand) {
        winHand.style.display = "block";
        loseHand.style.display = "none";
        drawHand.style.display = "none";
    }
    else if (win == play) {
        winHand.style.display = "none";
        loseHand.style.display = "block";
        drawHand.style.display = "none";
    }
    else if (draw) {
        winHand.style.display = "none";
        loseHand.style.display = "none";
        drawHand.style.display = "block";
    }



}
