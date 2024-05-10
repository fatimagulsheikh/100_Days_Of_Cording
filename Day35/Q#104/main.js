"use strict";
//* **Question 104:** Create a function that generates a random hexadecimal color code. *//
function hex() {
    let c = '#' + Math.floor(Math.random() * 0xFFFFF).toString(16).padStart(6, '0');
    return c;
}
console.log(hex());
