// building my own foreach loop

function myForEach(arr, func){
    // loop through array
    for(var i = 0; i < arr.length; i++){
        // call func for each item in array
        func(arr[i]);
    }
}

let colors = ["orange", "red", "yellow"];

myForEach(colors, function(color){console.log(color)})

Array.prototype.myForEach = function(func){for(var i = 0; i < this.length; i++){func(this[i])}};

