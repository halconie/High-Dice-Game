var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber1);
var imgAddress1 = "./images/dice" + randomNumber1 + ".png";
// console.log(imgAddress1);
var imgSrc1 = document.querySelector(".img1").setAttribute("src", imgAddress1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imgAddress2 = "./images/dice" + randomNumber2 + ".png";
var imgSrc2 = document.querySelector(".img2").setAttribute("src", imgAddress2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}
else{
    document.querySelector("h1").textContent = "Draw!";
}