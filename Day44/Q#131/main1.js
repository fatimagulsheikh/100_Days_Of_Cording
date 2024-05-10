"use strict";
// **Question 131:** Create two modules; one that exports a class, and another that imports the class and creates an instance.
Object.defineProperty(exports, "__esModule", { value: true });
exports.cls = void 0;
class cls {
    constructor(x) {
        this.name = x;
    }
    greet() {
        console.log(`Hi! my name is ${this.name}`);
    }
}
exports.cls = cls;
