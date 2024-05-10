/* Question#46: Enhanced Laptop Object: construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.*/


let laptop = {
    make: "Dell",
    model: "xps 20",
    year: "2024",
    describe: function() {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}`);
    }
};
laptop.describe();