"use strict";
//* **Question 94:** Use the `.map()` method to create a new array that contains the length of each word from an array of words. *//
const words = ["Hello", "world", "TypeScript"];
const lengths = words.map(word => word.length);
console.log(lengths);
