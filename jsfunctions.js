function isEven(num){
    if (num % 2 === 0){
        return true;
    }
    else return false;
}

function factorial(num){
    if (num === 0){
        return 1;
    }
    else {
        let total = 1;
        while (num > 1){
            total *= num;
            num--;
        }
        return total;
    }
}