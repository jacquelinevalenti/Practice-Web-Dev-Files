// create secret number
let secret = 4;

// ask user for their guess
let guess = Number(prompt("Guess a number: "));

// check their guess
if (guess === secret){
    alert("You got it right!");
}
    
else if (guess < secret){
    alert("Your guess is too low!");
}

else{
    alert("Your guess is too high!");
}