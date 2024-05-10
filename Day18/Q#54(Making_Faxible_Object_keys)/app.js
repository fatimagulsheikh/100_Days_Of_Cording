"use strict";
// Making Faxible Object keys:
function createObjectWithDynamicKey(key, value) {
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
let userperference = createObjectWithDynamicKey("theme", "dark");
console.log(userperference);
