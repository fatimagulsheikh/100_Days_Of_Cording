"use strict";
//* **Question 111:** Use an if-else-if chain to categorize a person's age group (child, teenager, adult). *//
function com(human) {
    if (human <= 13) {
        return "Child";
    }
    else if (human > 14 && human <= 19) {
        return "Teenger";
    }
    else {
        return "Adult";
    }
}
console.log(com(8));
console.log(com(23));
console.log(com(34));
