"use strict";
// Dividing And Finding The REmainder
Object.defineProperty(exports, "__esModule", { value: true });
function DividingAndRemainder(dividend, divisor) {
    let quotient = Math.floor(dividend / divisor);
    let remainder = Math.floor(dividend % divisor);
    return { quotient, remainder };
}
console.log(DividingAndRemainder(7, 3));
console.log(DividingAndRemainder(10, 3));
