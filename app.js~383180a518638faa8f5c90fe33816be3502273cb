

// Exercise 1 Section
class Person {
  name
  pets
  residence
  hobbies

  constructor(name, pets, residence, hobbies) {
      this.name = name;
      this.pets = pets;
      this.residence = residence;
      this.hobbies = hobbies;
  }

  addHobby(hobby) {
      // Add the hobby to the object's hobbies array
      this.hobbies.push(hobby);
  }

  removeHobby(hobbyToRemove) {
      // Remove the hobby from the object's hobbies array
      this.hobbies = this.hobbies.filter(element => {
          return element !== hobbyToRemove;
      });
  }

  greeting() {
      console.log("Hello World!");
  }
}

const person = new Person('Sirius Black', ["cat"], "Grimold Place", ["sulks", "advises", "inspire", "hounds"]);
console.log(person);
person.removeHobby("kayaking");
console.log(person);


//exercise 2
class coder extends person{
 constructer(name ,pets, residence, hobbies){
  super(name, pets, residence, hobbies);
  this.occupation = "Full Stack Web Develpoer";
 }
}
//Exercise 3
// Define the Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Define the Coder class that extends Person
class Coder extends Person {
  constructor(name, age, language) {
    super(name, age);
    this.language = language;
  }

  code() {
    console.log(`I code in ${this.language}!`);
  }
}

// Create instances of the classes
let person1 = new Person('John', 30);
let coder1 = new Coder('Jane', 25, 'JavaScript');

// Call object methods and log properties
person1.introduce();
console.log("Person's name:", person1.name);
console.log("Person's age:", person1.age);

coder1.introduce(); // Inherited from the Person class
coder1.code();
console.log("Coder's name:", coder1.name);
console.log("Coder's age:", coder1.age);
console.log("Coder's language:", coder1.language);



//excercise 4
class Calculator {
  constructor() {
    this.value = 0;
  }
}
class Coder {
  constructor(name, pets, address, ...skills) {
    this.name = name;
    this.pets = pets;
    this.address = address;
    this.skills = skills;
  }
}

const coder = new Coder("Wade", ["dog"], '162 fake Street', "hacking", "surfing");
console.log(coder);

  
class Calculator {
  constructor() {
    this.result = 0;
  }

  add(a, b) {
    if (b === undefined) {
      this.result += a;
    } else {
      this.result = a + b;
    }
    return this.result;
  }

  subtract(a, b) {
    this.result = a - b;
    return this.result;
  }

  multiply(a, b) {
    this.result = a * b;
    return this.result;
  }

  divide(a, b) {
    this.result = a / b;
    return this.result;
  }

  displayResult() {
    console.log(this.result);
  }
}

const myCalculator = new Calculator();

// Example usage
myCalculator.add(5, 10);
myCalculator.displayResult();


  console.log(this.result);

const calc = new Calculator();
calc.add(5,7);
calc.displayResult();
calc.substract(3,5);
calc.multiply(2,7);
calc.divide(6,5);
calc.displayResult();

calc.add(.8);
calc.displayResult();
calc.substract(1);
calc.displayResult();
calc.multiply(3);
calc.displayResult();
calc.divide(5);
calc.displayResult();