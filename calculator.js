let age = Number(prompt("How old are you?"));
let days = age * 365;
alert("You are " + days + " days old!");

if (age < 0) {
    console.log("Error: Age can't be negative.");
}
    
if (age === 21) {
    console.log("Happy 21st Birthday!!");
}
     
if (age % 2 != 0) {
    console.log("Your age is odd!");
}
    
let square = Math.sqrt(age);

if (square % 1 === 0) {
    console.log("perfect square!");
}
