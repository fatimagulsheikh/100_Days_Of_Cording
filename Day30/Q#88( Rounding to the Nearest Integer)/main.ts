//* **Question 88:** Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer. *//

function roundNearestInteger(num: number): number {
    return Math.round(num);
}

console.log(roundNearestInteger(7.9));
console.log(roundNearestInteger(7.7));