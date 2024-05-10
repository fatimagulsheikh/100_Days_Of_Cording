/* **Question 48:** Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.*/

let set1 = [1500, 2000, 2500];
let set2 = [1000, 2000, 3000];
let combinedprice = [...set1, ...set2].sort((a, b) => a - b);
console.log(combinedprice);
