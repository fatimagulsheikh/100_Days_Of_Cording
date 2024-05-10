"use strict";
// **Question 133:** Write a JavaScript object and convert it into a JSON string.
const person = {
    name: "Alice",
    age: 30,
    city: "Wonderland",
    email: "alice3329@gmail.com",
};
const jsonString = JSON.stringify(person);
console.log(jsonString);
