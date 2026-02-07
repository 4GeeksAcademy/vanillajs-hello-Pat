import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
function generateCard() {
const suits = [
{ symbol: "♠", color: "black" },
{ symbol: "♥", color: "red" },
{ symbol: "♦", color: "red" },
{ symbol: "♣", color: "black" }
];

const values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

const randomSuit = suits[Math.floor(Math.random() * suits.length)];
const randomValue = values[Math.floor(Math.random() * values.length)];

document.querySelector(".top-suit").innerHTML = randomSuit.symbol;
document.querySelector(".bottom-suit").innerHTML = randomSuit.symbol;
document.querySelector(".number").innerHTML = randomValue;

document.querySelector(".card").style.color = randomSuit.color;
}



// Genera una carta al cargar la página
generateCard();

// Genera una carta cada 10 segundos
setInterval(generateCard, 10000);
};
