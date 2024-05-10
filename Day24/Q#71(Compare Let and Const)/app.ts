/* **Question 71:** Compare `let` and `const`: Create two examples where `let` allows reassignment but `const` does not. Try to reassign a `const`-declared variable and catch the error.*/

// Compare Let And Const

let number: number = 15;
number = 20;
console.log(number);

const name1:string = "Alic";
try{
"Bob";
} catch (error) {
    console.log("Error! can't reassing a 'const'-declared variable");
}
console.log(name1);
