// **Question 145:** Create a function that accepts a callback and invokes it with some arguments.

function execute(call: (a1: number, a2: number) => void,
    a1: number,
    a2: number
): void {
    call(a1, a2);
}
const check = (a: number, b: number) => {
    console.log(a + b);
};

execute(check, 15, 33)