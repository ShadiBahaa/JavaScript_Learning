// Without constructors, creating multiple similar objects is repetitive
let user1 = {
    name: 'John', // Property: name of the user
    age: 30, // Property: age of the user
    greet() { console.log(`Hi, I'm ${this.name}`) } // Method: logs a greeting message
};

let user2 = {
    name: 'Jane', // Property: name of the user
    age: 25, // Property: age of the user
    greet() { console.log(`Hi, I'm ${this.name}`) } // Method: logs a greeting message
};

// Notice how the greet method is duplicated!
console.log(user1.greet === user2.greet); // false - Each object has its own copy of the greet method, which is memory inefficient

// Constructor function to create user objects
function User(name, age) {
    // 'this' refers to the new object being created
    this.name = name; // Assign the name property
    this.age = age; // Assign the age property

    // Method defined directly on the object (not memory efficient)
    this.greet = function() {
        console.log(`Hi, I'm ${this.name}`); // Logs a greeting message
    };
}

// Creating objects using the constructor
user1 = new User('John', 30); // Creates a new User object with name 'John' and age 30
user2 = new User('Jane', 25); // Creates a new User object with name 'Jane' and age 25

console.log(user1); // Logs the user1 object
console.log(user2); // Logs the user2 object

// The constructor name is saved
console.log(user1.constructor.name); // Logs "User", the name of the constructor function

// Without 'new', the function is called as a regular function
const badUser = User('John', 30); // Oops! 'this' refers to the global object (or undefined in strict mode)
console.log(badUser); // undefined because the function doesn't return anything
//console.log(window.name); // "John" - Accidentally sets the global object's name property (uncomment to test in browsers)

// Best practice: Prevent this mistake by checking if 'this' is an instance of the constructor
function SafeUser(name, age) {
    if (!(this instanceof SafeUser)) { // If 'this' is not an instance of SafeUser
        return new SafeUser(name, age); // Call the constructor with 'new'
    }
    this.name = name; // Assign the name property
    this.age = age; // Assign the age property
}

// Constructor function to create user objects
function User(name, age) {
    this.name = name; // Assign the name property
    this.age = age; // Assign the age property
}

// Add methods to the prototype instead of the constructor
User.prototype.greet = function() {
    console.log(`Hi, I'm ${this.name}`); // Logs a greeting message
};

User.prototype.isAdult = function() {
    return this.age >= 18; // Returns true if the user is an adult (age >= 18)
};

user1 = new User('John', 30); // Creates a new User object
user2 = new User('Jane', 25); // Creates another User object

// Now the methods are shared across all instances
console.log(user1.greet === user2.greet); // true - Both objects share the same greet method, saving memory

// We can still add unique properties to individual objects
user1.hobby = 'reading'; // Adds a unique property to user1
console.log(user1.hobby); // Logs "reading"
console.log(user2.hobby); // undefined - user2 doesn't have the hobby property

// Constructor function for creating car objects
function Car(make, model) {
    // Instance properties (unique to each car)
    this.make = make; // Assign the make property
    this.model = model; // Assign the model property
    this.isRunning = false; // Default state: car is not running
}

// Prototype methods (shared by all car instances)
Car.prototype.start = function() {
    this.isRunning = true; // Sets the car's state to running
    console.log('Vroom!'); // Logs a message indicating the car has started
};

Car.prototype.stop = function() {
    this.isRunning = false; // Sets the car's state to not running
    console.log('Stopping...'); // Logs a message indicating the car has stopped
};

const car1 = new Car('Toyota', 'Camry'); // Creates a new Car object
const car2 = new Car('Honda', 'Civic'); // Creates another Car object

car1.start(); // Starts car1
console.log(car1.isRunning); // true - car1 is running
console.log(car2.isRunning); // false - car2 is not running

const car = new Car('Toyota', 'Camry'); // Creates another Car object

// Check if a property exists directly on the object
console.log(car.hasOwnProperty('make')); // true - 'make' is an instance property
console.log(car.hasOwnProperty('start')); // false - 'start' is a prototype method

// Check if a property exists anywhere in the prototype chain
console.log('start' in car); // true - 'start' exists in the prototype chain

// Get the prototype of the object
console.log(Object.getPrototypeOf(car) === Car.prototype); // true - The prototype of car is Car.prototype

// Check if an object is an instance of a constructor
console.log(car instanceof Car); // true - car is an instance of Car
console.log(car instanceof Object); // true - car is also an instance of Object (all objects inherit from Object)
