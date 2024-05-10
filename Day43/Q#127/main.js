"use strict";
//* **Question 127:** Convert a traditional function expression to an arrow function. *//
const traditionalFunction = function (a, b) {
    return a + b;
};
const arrowFunction = (a, b) => a + b;
console.log(traditionalFunction(5, 3));
console.log(traditionalFunction(7, 4));
console.log(arrowFunction(5, 3));
console.log(arrowFunction(7, 4));
