var randomNumber1= Math.floor(Math.random()*6)+1; //numbers between 1-6

var randonDiceImg= "Dice" + randomNumber1 + ".png"; //Dice1.png-Dice6.png

var randomImgSrc= "./images/" +randonDiceImg; // ./images/Dice1.png-./images/Dice6.png

document.querySelector(".img1").setAttribute("src" , randomImgSrc);

//trial

// var img2 = document.querySelectorAll("Img")[1];
// img2.setAttribute("src", randomImgSrc);

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImgSrc2="./images/Dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src" , randomImgSrc2);

if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw!"
}

else if (randomNumber1> randomNumber2){
        document.querySelector("h1").innerHTML="Player 1 wins!"
}

else{
    document.querySelector("h1").innerHTML="Player 2 wins!"
}