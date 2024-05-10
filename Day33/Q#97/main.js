"use strict";
//* **Question 97:** Write a function that returns the current date in the format "DD-MM-YYYY". *//
function getDate() {
    let a = new Date();
    let day = String(a.getDate()).padStart(2, '0');
    let month = String(a.getMonth() + 1).padStart(2, '0');
    let year = String(a.getFullYear());
    return '${day}-${month}-${year}';
}
console.log(getDate());
