// Function to print "Hello, World!" to the console
function sayHello() {
    console.log("Hello, World!"); // Logs "Hello, World!" to the console
}
sayHello(); // Calls the sayHello function, outputs: Hello, World!

// Function to greet a user with their name and time of day
function greet(name, time) {
    console.log("Good " + time + ", " + name + "!"); // Logs a greeting message with the provided name and time
}

greet("Alice", "morning"); // Calls greet with "Alice" and "morning", outputs: Good morning, Alice!
greet("Bob", "evening");   // Calls greet with "Bob" and "evening", outputs: Good evening, Bob!

// Function with a default parameter for the name
function greetWithDefault(name = "Guest") {
    console.log("Welcome, " + name + "!"); // Logs a welcome message, defaults to "Guest" if no name is provided
}

greetWithDefault();        // Calls greetWithDefault without arguments, outputs: Welcome, Guest!
greetWithDefault("David"); // Calls greetWithDefault with "David", outputs: Welcome, David!

// Function to add two numbers and return the result
function add(a, b) {
    return a + b; // Returns the sum of a and b
}

let result = add(3, 5); // Calls add with 3 and 5, stores the result in the variable 'result'
console.log(result); // Logs the result (8) to the console

// Function to grade a score and return a letter grade
function gradeScore(score) {
    if (score >= 90) { // Checks if the score is 90 or above
        return "A"; // Returns "A" for scores 90 and above
    }
    if (score >= 80) { // Checks if the score is 80 or above
        return "B"; // Returns "B" for scores between 80 and 89
    }
    return "C"; // Returns "C" for scores below 80
}

console.log(gradeScore(95)); // Calls gradeScore with 95, outputs: A
console.log(gradeScore(85)); // Calls gradeScore with 85, outputs: B
console.log(gradeScore(75)); // Calls gradeScore with 75, outputs: C

// Function that logs a message but doesn't return anything
function noReturn() {
    console.log("This function doesn't return anything"); // Logs a message to the console
}

result = noReturn(); // Calls noReturn, assigns the result (undefined) to 'result'
console.log(result); // Logs undefined because noReturn doesn't return a value

// Global variable declaration
let globalVar = "I'm global"; // Declares a global variable

// Function to demonstrate variable scope
function scopeExample() {
    let localVar = "I'm local"; // Declares a local variable
    console.log(globalVar);  // Logs the global variable, outputs: I'm global
    console.log(localVar);   // Logs the local variable, outputs: I'm local
}

scopeExample(); // Calls scopeExample, demonstrating variable scope
console.log(globalVar);  // Logs the global variable, outputs: I'm global
// console.log(localVar);   // Uncommenting this line would throw an error because localVar is not defined outside the function

// Function to calculate the area of a circle (Good naming practice)
function calculateArea(radius) {
    return Math.PI * radius * radius; // Returns the area of a circle given its radius
}

// Function to calculate the area of a circle (Avoid poor naming practice)
function calc(r) {
    return Math.PI * r * r; // Returns the area of a circle, but the function name is unclear
}

// Reassigning the greet function to a function expression
greet = function(name) {
    console.log("Hello, " + name); // Logs a greeting message with the provided name
};

greet("Alice"); // Calls the new greet function, outputs: Hello, Alice

// Reassigning the greet function to an arrow function
greet = (name) => {
    console.log("Hello, " + name); // Logs a greeting message with the provided name
};

greet("Bob"); // Calls the arrow function version of greet, outputs: Hello, Bob

// Arrow function to calculate the square of a number
let square = x => x * x; // Defines an arrow function that returns the square of x

console.log(square(4)); // Calls square with 4, outputs: 16