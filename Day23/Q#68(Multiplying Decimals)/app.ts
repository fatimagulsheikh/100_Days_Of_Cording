/* **Question 68:** Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.*/

//  Multiplying Decimals

function multiplyDacimals(num1: number, num2: number): number {
    return Math.round(num1 * num2 * 100 / 100);
};
const num1: number = 2.23;
const num2: number = 1.5;
const product: number = multiplyDacimals(num1, num2);
console.log("product:", product);