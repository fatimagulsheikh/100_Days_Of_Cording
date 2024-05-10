"use strict";
//* **Question 129:** Explain how `this` behaves differently in arrow functions compared to traditional functions. *//
let tradValue = {
    value: "Governor Initiative for AI WEB3.0 And Meta Verse",
    tradFunc: function () {
        console.log("Traditional function: ", this.value);
    },
    arr: () => {
        console.log("Arrow Function: , this.Value");
    }
};
tradValue.tradFunc();
tradValue.arr();
