/* **Question 54:** Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.*/

// Making Faxible Object keys:
function createObjectWithDynamicKey(key: string, value: string) {
    let dynamicObject:any = {}; 
    dynamicObject[key]= value; return dynamicObject;
}
let userperference = createObjectWithDynamicKey("theme", "dark");
console.log(userperference);