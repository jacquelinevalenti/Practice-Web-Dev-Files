let answer = prompt("Are we there yet?");

// check if user input contains "yes"
while(answer.indexOf("yes") === -1){
    answer = prompt("Are we there yet?");
}

// if input contains yes, exit loop
alert("Yay we made it!");