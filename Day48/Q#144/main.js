"use strict";
// **Question 144:** Explain the use of the `Promise.all()` method with an example.
let pro1 = Promise.resolve(5);
let pro2 = 30;
let pro3 = new Promise((resolve) => {
    setTimeout(resolve, 100, "foo");
});
Promise.all([pro1, pro2, pro3]).then((val) => { console.log(val); });
