/* **Question 62:** Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.*/

// Making a Student Template:

interface Student {
    name: string;
    age: number;
    courses: string[];
}
let student: Student = {
    name: "Fatima",
    age: 23,
    courses: ["Math", "Science", "English"]
};
console.log(student);