class AgedPerson {
    printAge(){
        console.log(this.age);
    }
}

class Person extends AgedPerson { // class
    // fields
    name = 'Max';

    constructor() { // constructor function
        super();
        this.age = 30;
    } 

    greet() { //method
        console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
    };
}

// function Person () {
//     this.age = 30;
//     this.name = 'Max';
//     this.greet = function(){
//         console.log(
//             'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//         );
//     };
// }

// Person.describe = function() {
//     console.log('Creating persons...');
// }

// Person.prototype.printAge = function(){
//     console.log(this.age);
// };

// console.dir(Person);

// const person = new Person();
// // You can instantiate 'new Person' by calling it.
// person.greet();
// person.printAge();
// console.log(person.__proto__);
// console.log(person.toString());
// const p2 = new person.__proto__.constructor();
// console.dir(Object);
// // __proto__ is in all JS objects.
// // by the way, 'prototype' does not exist in all objects and exists in function objects.
// // Object.prototype has not __proto__. So, Object.prototype is where the prototype chain ends.

const p = new Person();
console.log(p);