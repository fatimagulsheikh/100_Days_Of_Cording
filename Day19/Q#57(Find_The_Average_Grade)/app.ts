/* **Question 57:** Find the Average Grade: Given a list of grades, calculate the average grade.*/


// Find The Average Grade:

let grade = [90, 88, 75, 100,];
let AverageGrade = grade.reduce((total, grade) => total + grade, 0) / grade.length;

console.log(AverageGrade);