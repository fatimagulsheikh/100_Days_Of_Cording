/* **Question 72:** Block Scope with `let` and `const`: Demonstrate block scope by creating a code block with `{}` that uses both `let` and `const`. Show how variables declared inside the block are not accessible outside of it.*/

import { BlockList } from "net";

// Demonstrating block scop

{
    let blockLet = "kept inside the block";
    const blockConst = "also kept inside the block";
    console.log(blockLet);
    console.log(blockConst);
}
try {
    console.log(BlockList);
} catch (error){
    console.log("`blockLet` is not accessible outside the block.");
}
try {
    console.log(BlockList);
} catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}