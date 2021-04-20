var player1=prompt("Enter first player's name: ");
var player2=prompt("Enter second player's name: ");

// for creating random numbers
var RandomNumber1=Math.floor(Math.random()*6)+1;
var RandomNumber2=Math.floor(Math.random()*6)+1;
console.log(RandomNumber1);

document.getElementById("player_1").innerText=player1; 
document.getElementById("player_2").innerText=player2; 

// for finding who is winner

if(RandomNumber2<RandomNumber1){
    document.getElementById("winning").innerText=player1+" won";
}
else if(RandomNumber2>RandomNumber1){
    document.getElementById("winning").innerText=player2+" won";
}
else{
    document.getElementById("winning").innerText="It's a tie";
}

//for displaying dice
var string1="images/dice"+RandomNumber1+".png";
document.getElementById("image1").src=string1;
var string2="images/dice"+RandomNumber2+".png";
document.getElementById("image2").src=string2;