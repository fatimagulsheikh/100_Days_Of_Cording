// **Question 131:** Create two modules; one that exports a class, and another that imports the class and creates an instance.

export class cls {
    name: string;
    constructor(x: string) {
        this.name = x
    }
    greet() {
        console.log(`Hi! my name is ${this.name}`)
    }
}