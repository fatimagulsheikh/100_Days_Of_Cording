// **Question 150:** Describe how asynchronous callbacks differ from synchronous code execution.

console.log("Before synchronous operation");

for (let i = 0; i < 1e9; i++) {}
console.log("After synchronous operation");

console.log("Before synchronous operation");
setTimeout(() => {
    console.log("Asynchronous operation completed");
}, 1000);
console.log("Ater asynchronous operation setup");



