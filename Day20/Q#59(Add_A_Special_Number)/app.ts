/* **Question 59:** Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.*/

// Add a Special Number:

function makeAdder(valueToAdd: number): (number:number) => number {
    return function(number: number): number {
        return number + valueToAdd;
    };
}
let addTen = makeAdder(10);
console.log(addTen(2));
console.log(addTen(5));