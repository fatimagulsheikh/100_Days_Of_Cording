/* **Question 64:** Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with `"Age: "` and `30`, it should give back `"Age: 30"`.*/

// Combine String And Number:

function CombineStringAndNumber(text: string, number: number): string {
    return text + number;
};
console.log(CombineStringAndNumber("Age:", 30));