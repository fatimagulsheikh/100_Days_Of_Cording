"use strict";
//* **Question 126:** Explain how the `this` keyword changes its value when used inside a nested function within a method. *//
const myObject = {
    property: "value",
    outerMethod: function () {
        console.log(this.property);
        const innerMethod = () => {
            console.log(this.property);
        };
        innerMethod();
    },
};
myObject.outerMethod();
