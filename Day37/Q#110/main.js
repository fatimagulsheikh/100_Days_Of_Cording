"use strict";
//* **Question 110:** Create a function that assigns a grade (A, B, C, D, F) based on a student's score. *//
let score = 85;
if (score >= 80 && score <= 100) {
    console.log("A Grade");
}
else if (score >= 70 && score < 80) {
    console.log("B Grade");
}
else if (score >= 50 && score < 70) {
    console.log("C Grade");
}
else if (score >= 35 && score < 50) {
    console.log("D Grade");
}
else if (score >= 30 && score < 35) {
    console.log("E Grade");
}
else {
    console.log("Failed");
}
