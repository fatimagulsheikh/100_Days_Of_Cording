"use strict";
//* **Question 113:** Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists. *//
let check = new Map();
check.set("Iran", "Tehran");
check.set("Chanda", "Toranto");
check.set("UK", "London");
function chlog(check) {
    if (check.has("canada")) {
        console.log(`The capital of canada is ${check.get("canada")}`);
    }
    else {
        console.log("Canada is not in the Map.");
    }
}
chlog(check);
