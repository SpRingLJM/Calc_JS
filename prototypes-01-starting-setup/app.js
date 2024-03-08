class Person { // class
    // fields
    name = 'Max';

    constructor() { // constructor function
        this.age = 30;
    } 

    greet() { //method
        console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
    };
}

function Person () {
    this.age = 30;
    this.name = 'Max';
    this.greet = function(){
        console.log(
            'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
        );
    };
}

const person = new Person();
// You can instantiate 'new Person' by calling it.
person.greet();
