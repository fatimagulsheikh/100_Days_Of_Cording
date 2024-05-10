//* **Question 114:** Iterate over a Map of student IDs and names, and log each pair to the console. *//

let stdData = new Map<number, string>()
stdData.set(12, "Yousuf")
stdData.set(13, "Irfan")
stdData.set(14, "Umer")

stdData.forEach((names,ID) => {
    console.log(`Student name: ${names}, Student ID: ${ID}`);
})