"use strict";
//* **Question 128:** Create an arrow function that takes multiple parameters and returns the product of all parameters. *//
const multipleParameters = (...numbers) => {
    return numbers.reduce((total, number) => total * number, 1);
};
console.log(multipleParameters(2, 3, 4));
console.log(multipleParameters(7, 8, 9, 3));
