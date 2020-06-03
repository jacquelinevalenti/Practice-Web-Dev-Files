// printReverse function
// takes an array as an argument and prints out the elements in reverse order
// do not actually reverse the array :)

function printReverse(arr){
    for(var i = arr.length - 1; i > -1; i--){
        console.log(arr[i]);
    }
}

// isUniform function
// takes an array as an argument and returns true if all elements are the same
// otherwise returns false
// foreach doesn't work here because you would only return false in the callback function
    // you would end up getting true result every time

function isUniform(arr){
    for(var i = 1; i < arr.length; i++){
        if(arr[i] !== arr[0]){
            return false;
        }
    }
    return true;
}

// sumArray function
// accepts an array of numbers and returns the sum of all numbers in the array

function sumArray(arr){
    let total = 0;
    arr.forEach(function(num){
        total += num;
    })
    console.log(total);
}

// max function
// accepts an array of numbers and returns the max number in the array

function max(arr){
    let maxVal = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > maxVal){
            maxVal = arr[i];
        }
    }
    console.log(maxVal);
}