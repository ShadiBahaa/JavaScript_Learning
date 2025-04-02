// Our old constructor way
function User(name, age) {
    // Assign name and age to the instance
    this.name = name;
    this.age = age;
}
// Add a method to the prototype to greet the user
User.prototype.greet = function() {
    console.log(`Hi, I'm ${this.name}`);
};

// The new class way - same functionality!
class User {
    // Constructor initializes the instance with name and age
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to greet the user
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
}

// They work the same way
const user = new User('John', 30); // Create a new User instance
user.greet(); // "Hi, I'm John" - Call the greet method


class Dog {
    // Constructor initializes the instance with a name
    constructor(name) {
        this.name = name;
    }

    // Method to make the dog bark
    bark() {
        console.log('Woof!');
    }
}

const dog = new Dog('Rex'); // Create a new Dog instance

// These all return true
console.log(typeof Dog); // "function" - Classes are syntactic sugar over functions
console.log(dog instanceof Dog); // true - dog is an instance of Dog
console.log(dog.bark === Dog.prototype.bark); // true - bark method is shared via the prototype


class Car {
    // Constructor initializes the car with make, model, and speed
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.speed = 0; // Default speed is 0
    }

    // Method to increase the car's speed
    accelerate() {
        this.speed += 10; // Increase speed by 10
        console.log(`Speed: ${this.speed}`);
    }
}

const car = new Car('Toyota', 'Camry'); // Create a new Car instance
car.accelerate(); // "Speed: 10" - Call the accelerate method


class Calculator {
    // Constructor initializes the calculator with a value of 0
    constructor() {
        this.value = 0;
    }

    // Method to add a number to the current value
    add(x) {
        this.value += x;
        return this;  // Allows method chaining
    }

    // Method to subtract a number from the current value
    subtract(x) {
        this.value -= x;
        return this;
    }

    // Method to get the current value
    getValue() {
        return this.value;
    }
}

const calc = new Calculator(); // Create a new Calculator instance
calc.add(5).subtract(2); // Chain methods to add 5 and subtract 2
console.log(calc.getValue()); // 3 - Get the final value


class MathHelper {
    // Static method to calculate the square of a number
    static square(x) {
        return x * x;
    }

    // Static method to check if a number is positive
    static isPositive(x) {
        return x > 0;
    }
}

// Use static methods without creating an instance
console.log(MathHelper.square(5)); // 25 - Call the square method
console.log(MathHelper.isPositive(-3)); // false - Call the isPositive method

// This won't work:
const math = new MathHelper(); // Create an instance of MathHelper
// math.square(5); // Error! - Static methods are not accessible on instances


class Animal {
    // Class properties (not all browsers support this yet)
    species = 'unknown'; // Default species
    isAlive = true; // Default isAlive status

    // Constructor initializes the animal with a name
    constructor(name) {
        this.name = name;
    }

    // Method to describe the animal
    describe() {
        console.log(`${this.name} is a ${this.species}`);
    }
}

const animal = new Animal('Rex'); // Create a new Animal instance
console.log(animal.isAlive); // true - Access the isAlive property


class BankAccount {
    #balance = 0;  // Private field to store the balance

    // Constructor initializes the account with an initial balance
    constructor(initialBalance) {
        if (initialBalance > 0) {
            this.#balance = initialBalance; // Set the initial balance if valid
        }
    }

    // Method to deposit an amount into the account
    deposit(amount) {
        this.#balance += amount; // Increase the balance
        this.#logTransaction('deposit', amount); // Log the transaction
    }

    // Method to get the current balance
    getBalance() {
        return this.#balance; // Return the private balance
    }

    // Private method to log a transaction
    #logTransaction(type, amount) {
        console.log(`${type}: ${amount}`);
    }
}

const account = new BankAccount(100); // Create a new BankAccount instance
console.log(account.getBalance()); // 100 - Get the current balance
// console.log(account.#balance); // Error! - Cannot access private field
// account.#logTransaction(); // Error! - Cannot access private method


class Button {
    constructor(text) {
        this.text = text; // Set the button text
        // Wrong way to handle events
        this.element.addEventListener('click', function() {
            this.handleClick(); // 'this' is wrong! Refers to the event target
        });

        // Right way - use arrow function to preserve 'this'
        this.element.addEventListener('click', () => {
            this.handleClick(); // 'this' is correct and refers to the Button instance
        });
    }

    // Method to handle button click
    handleClick() {
        console.log(this.text);
    }
}
