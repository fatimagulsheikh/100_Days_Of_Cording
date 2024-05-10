/* **Question 69:** Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.*/

// Dividing And Finding The REmainder

type obj={
    quotient: number;
    remainder: number
}

function DividingAndRemainder(dividend: number, divisor: number): obj{ 
    let quotient = Math.floor(dividend / divisor);
    let remainder = Math.floor(dividend % divisor);
    return {quotient, remainder};
}
console.log(DividingAndRemainder(7, 3));
console.log(DividingAndRemainder(10, 3));