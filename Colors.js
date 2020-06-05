// declare variables
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

// initialize page
init();

resetButton.addEventListener("click", function(){
    reset();
})

function init(){
   setUpModeBtns();
   setUpSquares();
   reset();
}

function setUpModeBtns(){
    // create event listeners for each mode button (easy and hard)
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            // update styling so selected mode is highlighted
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            // assign numSquares based on which mode was chosen
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        })
    }
}

function setUpSquares(){
    // loop through all squares to assign colors, add event listeners, check if chosen square is correct
    for(var i = 0; i < squares.length; i++){
        // add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    
        // add click listeners to squares
        squares[i].addEventListener("click", function(){
            // grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // compare color to picked color
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}

function reset(){
    // generate all new colors
    colors = generateRandomColors(numSquares);

    // pick a new random color from array
    pickedColor = pickColor();

    // change color display to match picked color
    colorDisplay.textContent = pickedColor;

    // change colors of the squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }   
    }
    // reset h1 background color
    h1.style.backgroundColor = "palevioletred";
    // remove "correct"/"try again" from navbar
    messageDisplay.textContent = "";
    // change reset button from "play again?" to "new colors"
    resetButton.textContent = "New Colors";
}

function changeColors(color){
    // loop through all squares and change color to pickedColor
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    // initialize colors array with correct number of values
    let random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num){
    // make an array
    var arr = [];
    // add num random colors to array
    for(var i = 0; i < num; i++){
        // get random color and push into array
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    // pick a "red" from 0 - 255
    var red = Math.floor(Math.random() * 256);
    // pick a "green" from 0 - 255
    var green = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 - 255
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}