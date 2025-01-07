var result = document.getElementById("board");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var imgArray = ["./images/dice1.png","./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

let scoreA;
let scoreB;

function run() {
    scoreA = Math.floor(Math.random()*imgArray.length);

    img1.src = imgArray[scoreA];
    
    scoreB = Math.floor(Math.random()*imgArray.length);

    img2.src = imgArray[scoreB];

    if(scoreA > scoreB)
        result.innerText = "Play er 1 wins";
    else if(scoreA == scoreB)
        result.innerText = "Draw!!!";
    else    
        result.innerText = "Play er 2 wins";
        
}
