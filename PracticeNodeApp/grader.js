// define a function that takes an array of test scores and returns the average rounded to the nearest whole number

function average(arr){
    var total = 0;
    // add scores together
    for(var i = 0; i < arr.length; i++){
        total += arr[i];
    }
    // divide by number of scores to get average
    var avg = total / arr.length;
    // round
    return Math.round(avg);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); // expected return of 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); // expected return of 68