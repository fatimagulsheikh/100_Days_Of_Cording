"use strict";
//* **Question 108:** Compare two strings to check if they are identical, ignoring case sensitivity.*//
function com(x, y) {
    return x.toUpperCase() === y.toUpperCase();
}
console.log(com("fatima sheikh", "Fatiam Sheikh"));
console.log(com("mehwish", "mewa"));
