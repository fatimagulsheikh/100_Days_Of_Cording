/* **Question 56:** Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.*/

// Keep Only Strings:

let mixedArray = [1, "Fatima", 7, "Nadeem", 9, "Turkey", 7];
let stringArray = mixedArray.filter (item => typeof item === "string");

console.log(stringArray);