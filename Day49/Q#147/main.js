"use strict";
// **Question 147:** Explain how to handle errors in a callback pattern.
function fetching(callbacks) {
    let er = new Error("You have an error");
    let data = "Governor Initiative of AI web 3.0 ans Meta verse";
    if (Math.random() > 1) {
        callbacks(null, data);
    }
    else {
        callbacks(er);
    }
}
fetching((error, data) => {
    if (error) {
        console.log(console.error(error.message));
    }
    else {
        console.log(data);
    }
});
