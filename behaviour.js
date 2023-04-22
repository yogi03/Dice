// Selecting Dice for Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Get no. from 1 to 6
var randomDiceImage1 = "images/" + "dice" + randomNumber1 + ".png"; // image location images\dice1.png to images\dice6.png
var image1 = document.querySelectorAll("img")[0]; // Selecting first image tag 
image1.setAttribute("src", randomDiceImage1); // Changing image from dice1 to dice6 randomly

// Selecting Dice for Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Get no. from 1 to 6
var randomDiceImage2 = "images/" + "dice" + randomNumber2 + ".png"; // image location images\dice1.png to images\dice6.png
var image2 = document.querySelectorAll("img")[1]; // Selecting second image tag 
image2.setAttribute("src", randomDiceImage2); // Changing image from dice1 to dice6 randomly

// Selecting Heading to change accordingly
var heading = document.querySelector("h1");

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!"
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}