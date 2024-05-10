"use strict";
// **Question 145:** Create a function that accepts a callback and invokes it with some arguments.
function execute(call, a1, a2) {
    call(a1, a2);
}
const check = (a, b) => {
    console.log(a + b);
};
execute(check, 15, 33);
