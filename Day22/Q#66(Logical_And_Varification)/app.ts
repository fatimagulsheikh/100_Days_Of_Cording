/* **Question 66:** Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say `true` if both are true, using the `&&` operator. For instance, `checkBothTrue(true, false)` should be `false`.*/

// Logical And Varification

function cheackBothTrue(val1: boolean, val2: boolean): boolean {
    return val1 && val2;
}
console.log(cheackBothTrue(true, false));