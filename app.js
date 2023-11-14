console.log("EXERCISE 1: \n=========\n");

class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    addHobby(hobby) {
        this.hobbies.push(hobby);
    }

    removeHobby(hobbyToRemove) {
        // Using filter to create a new array without the specified hobby
        this.hobbies = this.hobbies.filter(element => element !== hobbyToRemove);
    }

    greeting() {
        console.log("Hello World!");
    }
}

// Exercise 3
const person = new Person("Sirius Black", ["cat"], "Grimold place", ["sulks", "advises", "inspires", "hounds"]);
console.log(person);
person.addHobby("kayaking");
person.removeHobby("kayaking");
console.log(person);
person.greeting();

// Exercise 2 & 3
class Coder extends Person {
    constructor(name, pets, residence, hobbies) {
        super(name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer";
    }

    greeting() {
        console.log("Hello World");
    }
}

// Exercise 3
const coder = new Coder("Wade", ["dog"], "162 Fake Street", ["gaming", "hacking", "surfing"]);
console.log(coder);
coder.greeting();

// Exercise 4
class Calculator {
    constructor() {
        this.result = 0;
    }

    add(a, b) {
        if (b === undefined) {
            this.result = this.result + a;
        } else {
            this.result = a + b;
        }
        return this.result;
    }

    subtract(a, b) {
        if (b === undefined) {
            this.result = this.result - a;
        } else {
            this.result = a - b;
        }
        return this.result;
    }

    multiply(a, b) {
        if (b === undefined) {
            this.result = this.result * a;
        } else {
            this.result = a * b;
        }
        return this.result;
    }

    divide(a, b) {
        if (b === undefined) {
            this.result = this.result / a;
        } else {
            this.result = a / b;
        }
        return this.result;
    }

    displayResult() {
        console.log(this.result);
    }
}

const calc = new Calculator();
calc.add(5, 7);
calc.displayResult();
calc.subtract(3, 5);
calc.displayResult();
calc.multiply(2, 7);
calc.displayResult();
calc.divide(6, 5);
calc.displayResult();

calc.add(0.8);
calc.displayResult();
calc.subtract(1);
calc.displayResult();
calc.divide(5);
calc.displayResult();
