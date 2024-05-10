/* **Question 63:** Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.*/

// Shape Shifter:

type Shape = {
    kind: "circle" | "retangle";
    reduius?: number;
    width?: number;
    height?: number;
};
let circle: Shape = {
    kind: "circle",
    reduius: 5,
};
let retangle: Shape = {
    kind:"retangle",
    width: 20,
    height:10,
};
console.log(circle);
console.log(retangle);
