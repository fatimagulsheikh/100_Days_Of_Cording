//* **Question 87:** Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.*//

function extractFirstChars(str: string): string {
    return str.substring(0, 10);
}

console.log(extractFirstChars("Hello, JavaScript World!"));