//* **Question 98:** Create a JavaScript snippet that calculates and logs how many days are left until New Year. *//

function daysUntilNewYear(): number
{
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1);
    const diff = newYear.getTime() - today.getTime();
    const days = Math.ceil(diff / (100 * 60 * 60 * 24));
    return days;
}

console.log(daysUntilNewYear() + "days untill New Year.");