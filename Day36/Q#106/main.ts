//* **Question 106:** Determine if a given year is a leap year using comparison operators. *//

function leap(year:number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

console.log(leap(2021))
console.log(leap(2000))
console.log(leap(2090))
