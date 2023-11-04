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

    removeHobby(hobby) {
        for (let i = 0; i < this.hobbies.length; i++) {
            if (this.hobbies[i] === hobby) {
                this.hobbies.splice(i, 1);
                break;
            }
        }
    }

    greeting() {
        console.log("Hello fellow person!");
    }
}

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

const coder = new Coder("Wade", ["dog"], "162 Fake Street", ["gaming", "hacking", "surfing"]);
console.log(coder);
coder.greeting();

// Exercise 4
class Calculator {
    constructor() {
        this.result = 0;
    }

    add(a) {
        this.result += a;
    }

    subtract(a) {
        this.result -= a;
    }

    multiply(a, b) {
        if (b === undefined) {
            this.result *= a;
        } else {
            this.result = a * b;
        }
    }

    divide(a, b) {
        if (b === undefined) {
            this.result /= a;
        } else {
            this.result = a / b;
        }
    }

    displayResult() {
        console.log(this.result);
    }
}

const calc = new Calculator();
calc.add(5);
calc.displayResult();
calc.subtract(3);
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
