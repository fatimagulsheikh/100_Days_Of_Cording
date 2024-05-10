//* **Question 107:** Write a condition using logical operators that checks if a number is divisible by both 2 and 3.*//

function check(num: number): boolean {
    return num % 2 === 0 && num % 3 === 0
}
console.log(check(13))
console.log(check(23))
console.log(check(27))