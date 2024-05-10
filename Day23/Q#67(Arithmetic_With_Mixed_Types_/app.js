"use strict";
// Arithmetic With Mixed Types
function addNumberAndString(num1, numString) {
    return num1 + Number(numString);
}
;
console.log(addNumberAndString(12, "3"));
