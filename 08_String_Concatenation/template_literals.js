// Declare a variable `name` and assign it the string "Alice"
let name = "Alice";

// Declare a variable `age` and assign it the number 28
let age = 28;

// Basic usage of template literals to create a string with embedded variables
let greeting = `Hello, ${name}!`; // The variable `name` is interpolated into the string
console.log(greeting);  // Outputs: Hello, Alice!

// Using template literals to embed expressions into strings
let message = `${name} is ${age} years old.`; // Both `name` and `age` are interpolated into the string
console.log(message);  // Outputs: Alice is 28 years old.

// Demonstrating multi-line strings using template literals
let multiLine = `
  This is a multi-line
  string using
  template literals.
`; // Template literals allow strings to span multiple lines without special syntax
console.log(multiLine); // Outputs the multi-line string as written

// Using expressions inside template literals
let a = 5; // Declare a variable `a` and assign it the value 5
let b = 10; // Declare a variable `b` and assign it the value 10
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
// Outputs: Fifteen is 15 and not 20.
// The expressions `a + b` and `2 * a + b` are evaluated and their results are interpolated into the string

// Tagged templates: an advanced feature of template literals
function myTag(strings, ...values) {
  // `strings` is an array of string literals in the template
  // `values` is an array of the interpolated values
  console.log(strings); // Logs the array of string literals
  console.log(values);  // Logs the array of interpolated values
  return "Tagged template result"; // Returns a custom string
}

// Using the tagged template function `myTag`
let result = myTag`Hello ${name}, you are ${age} years old.`;
// The template literal is passed to `myTag` as arguments: `strings` and `values`
console.log(result); // Outputs: Tagged template result