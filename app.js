//Exercise 1 section
console.log("EXERCISE 1: \n=========\n");

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
}
addHobby(hobby) {
    //add the hobby to the objects hobbies array
    this.hobbies.push(hobby);
};
removeHobby(hobby) {  
    //remove the hobby from the objects hobbies array
    //.length - 1
    //set it to false,
    //iterate over the array 
    for(i = 0; i < hobbies.length; i++) {   
      if(hobbies[i] == hobbyToRemove) {
        this.hobbies.slice(i, 1);
        break;
      }
      }
    
}
//filter
//"advises"
this.hobbies
greeting(){
    console.log("Hello fellow person!");
}
const person = new person("Sirius Black", ["cat"], "Grimold place", ["sulks", "advises", "inspires", "hounds"]);

console.log(person);
person.addHobby("kayacking");
person.removeHobby("kayacking");
console.log(person);
person.greetin();

//Exercise 2 & 3
class Coder extends Person {
    constructor(name, pets, residence, hobbies){
        super(name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer";
    }
    greeting() {
      console.log("Hello World");
    }

}
const coder = new coder("Wade", ["dog"], "162 Fake Street", ["gaming", "hacking", "surfing"]);
console.log(coder);
coder.greeting();
//eXERCISE 4

Class Calculator {
    constructor() {
        this.value = 0
    }
    add(a, b) {
        if(b == undefined) {
        this.result = this.result + a;
        
    }}

    subtract(a, b) {
        if(b == undefined){
            this.result = this.result - a;
         }else{
         return this.result;
         } }

    multiply(a, b) {
        If(b == undefined)
        this.result = this.result * a;
       }else {   
          this.result =  a * b;
         return this.result;
    }}

    divide(a, b) {
        if(b == undefined) {
        this.result =  this.result / b;
         }else { 
            this.result = a + b;
         }
         return this.result;
        }
        displayResult
            
            
    displayResult() {
        console.log(this.result);
    }
}
const calc = new Calculator();
calc.add(5, 7);
calc.displayResult();
calc.subtract(3, 5);
calc.multiply(2, 7);
calc.displayResult();
calc.divide(6, 5);
calc.displayResult();

calc.add(.8);
calc.dispalyResult();
calc.subtract(1);
calc.displayResult();
calc.divide(5);
calc.displayResult();