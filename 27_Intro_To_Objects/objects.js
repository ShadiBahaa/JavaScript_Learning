// A simple object as we've seen before
const person = {
    name: 'John', // Property 'name' with value 'John'
    age: 30, // Property 'age' with value 30
    greet() { // Method 'greet' that logs a greeting message
        console.log(`Hello, my name is ${this.name}`); // Uses 'this' to access the 'name' property
    }
};

// Numbers have methods - they're objects!
const num = 42; // A number primitive
console.log(num.toString()); // Converts the number to a string and logs "42"
console.log((42).toFixed(2)); // Converts the number to a string with 2 decimal places, logs "42.00"

// Strings have methods too
const str = "hello"; // A string primitive
console.log(str.toUpperCase()); // Converts the string to uppercase, logs "HELLO"

// Even functions are objects
function greet() { // A simple function
    console.log('Hi!'); // Logs "Hi!" when called
}
console.log(typeof greet); // Logs "function" - the type of 'greet'
console.log(greet instanceof Object); // Logs true - functions are objects in JavaScript

// Arrays are objects
const arr = [1, 2, 3]; // An array with three elements
console.log(typeof arr); // Logs "object" - arrays are objects in JavaScript

// The only primitives that aren't objects are:
// - null
// - undefined
// - numbers (they're automatically converted to Number objects when needed)
// - strings (they're automatically converted to String objects when needed)
// - booleans (they're automatically converted to Boolean objects when needed)
// - symbols

// JavaScript automatically "wraps" primitives when needed
const primitive = "hello"; // A string primitive
console.log(primitive.length); // Logs 5 - JavaScript temporarily converts the string to a String object

// This works because JavaScript temporarily converts the string to an object
"hello".toUpperCase(); // Converts the string to uppercase

// Same with numbers
(123).toString(); // Converts the number to a string

// And booleans
true.toString(); // Converts the boolean to a string

const car = {
    brand: 'Toyota' // Property 'brand' with value 'Toyota'
};

// Let's look at car's prototype
console.log(Object.getPrototypeOf(car)); // Logs the prototype of the 'car' object
/* You'll see something like:
{
    constructor: ƒ Object() // Constructor function for objects
    hasOwnProperty: ƒ hasOwnProperty() // Method to check if a property exists directly on the object
    toString: ƒ toString() // Method to convert the object to a string
    ...and more methods
}
*/

// This is why we can call methods like toString() on any object
console.log(car.toString()); // Logs "[object Object]" - the default string representation of an object

// But where did toString() come from? The car object doesn't have it!
console.log(car.hasOwnProperty('toString')); // Logs false - 'toString' is not a direct property of 'car'

// This is a constructor function - note the capital letter
function Person(name, age) { // Constructor function to create Person objects
    // 'this' will refer to the new object being created
    this.name = name; // Assigns the 'name' parameter to the 'name' property
    this.age = age; // Assigns the 'age' parameter to the 'age' property
}

// Adding a method to Person's prototype
Person.prototype.greet = function () { // Adds a 'greet' method to the prototype
    console.log(`Hello, I'm ${this.name}`); // Logs a greeting message using the 'name' property
};

// Creating new Person objects using the 'new' keyword
const john = new Person('John', 30); // Creates a new Person object with name 'John' and age 30
const jane = new Person('Jane', 25); // Creates a new Person object with name 'Jane' and age 25

john.greet(); // Logs "Hello, I'm John" - calls the 'greet' method on 'john'
jane.greet(); // Logs "Hello, I'm Jane" - calls the 'greet' method on 'jane'

console.log(john.hasOwnProperty('name')); // Logs true - 'name' is a direct property of 'john'
console.log(john.hasOwnProperty('greet')); // Logs false - 'greet' is on the prototype, not directly on 'john'

// Check john's prototype
console.log(Object.getPrototypeOf(john) === Person.prototype); // Logs true - 'john' inherits from 'Person.prototype'

// Check the prototype chain
console.log(john instanceof Person); // Logs true - 'john' is an instance of 'Person'
console.log(john instanceof Object); // Logs true - 'john' is also an instance of 'Object'

// Adding a new method to Person.prototype
Person.prototype.introduce = function () { // Adds an 'introduce' method to the prototype
    console.log(`I am ${this.age} years old`); // Logs the age of the person
};

// Both existing objects get the new method!
john.introduce(); // Logs "I am 30 years old" - calls the 'introduce' method on 'john'
jane.introduce(); // Logs "I am 25 years old" - calls the 'introduce' method on 'jane'

// Compare memory usage
console.log(john.greet === jane.greet); // Logs true - both 'john' and 'jane' share the same 'greet' method
