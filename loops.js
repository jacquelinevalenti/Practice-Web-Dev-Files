console.log("PRINT NUMS BETWEEN -10 AND 19");
let count = -10;
while(count < 20){
    console.log(count);
    count++;
}

console.log("EVEN NUMS BETWEEN 10 AND 40");
let count2 = 10;
while(count2 <= 40){
    console.log(count2);
    count2 += 2;
}

console.log("ODD NUMS BETWEEN 300 AND 333");
let count3 = 300;
while(count3 < 334){
    if(count3 % 2 != 0){
        console.log(count3)
    }
    count3++;
}

console.log("DIVISIBLE BY 5 AND 3");
let count4 = 5;
while (count4 <= 50){
    if(count4 % 5 === 0 && count4 % 3 === 0){
        console.log(count4);
    }
    count4++;
}

console.log("------FOR LOOPS-------");


console.log("PRINT NUMS BETWEEN -10 AND 19");
for(let count = -10; count < 20; count++){
    console.log(count);
}

console.log("EVEN NUMS BETWEEN 10 AND 40");
for(let count2 = 10; count2 <= 40; count2 += 2){
    console.log(count2);
}

console.log("ODD NUMS BETWEEN 300 AND 333");
for(let count3 = 300; count3 < 334; count3++){
    if(count3 % 2 != 0){
        console.log(count3)
    }
}

console.log("DIVISIBLE BY 5 AND 3");
for(let count4 = 5; count4 <= 50; count4++){
    if(count4 % 5 === 0 && count4 % 3 === 0){
        console.log(count4);
    }
}
