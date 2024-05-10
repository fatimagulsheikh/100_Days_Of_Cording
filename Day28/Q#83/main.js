"use strict";
//* **Question 83:** Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.*//
function convertCase(str) {
    let upperstr = str.toUpperCase();
    let lowerstr = str.toLowerCase();
    console.log("Uppercase:", upperstr, "Lowercase:", lowerstr);
}
convertCase("Hello World");
