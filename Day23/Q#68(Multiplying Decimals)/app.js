"use strict";
//  Multiplying Decimals
function multiplyDacimals(num1, num2) {
    return Math.round(num1 * num2 * 100 / 100);
}
;
const num1 = 2.23;
const num2 = 1.5;
const product = multiplyDacimals(num1, num2);
console.log("product:", product);
