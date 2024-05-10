"use strict";
// Add a Special Number:
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
let addTen = makeAdder(10);
console.log(addTen(2));
console.log(addTen(5));
