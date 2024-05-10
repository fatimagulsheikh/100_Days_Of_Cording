"use strict";
// Self-Running User Profile:
let userProfile = (function () {
    let name;
    let age;
    return {
        displayInfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();
userProfile.displayInfo();
