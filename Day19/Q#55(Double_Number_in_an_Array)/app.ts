/* **Question 55:** Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.*/

// Double Numbers in an Array:


let numbers = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10];
let doubledNumbers = numbers.map(number => number * 5);
console.log(doubledNumbers);