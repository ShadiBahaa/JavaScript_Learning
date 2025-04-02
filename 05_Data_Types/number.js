// Declare a variable `integer` and assign it a whole number value
let integer = 42;

// Declare a variable `float` and assign it a decimal (floating-point) number value
let float = 3.14;

// Declare a variable `negative` and assign it a negative number value
let negative = -10;

// Declare a variable `exponent` and assign it a number in scientific notation (2.998 × 10^8)
let exponent = 2.998e8; // Scientific notation is often used for very large or very small numbers

// Log the type of the variable `integer` to the console; it will output "number"
console.log(typeof integer); // Outputs: number

// Log the type of the variable `float` to the console; it will output "number"
console.log(typeof float);   // Outputs: number

// Log the type of the variable `negative` to the console; it will output "number"
console.log(typeof negative);// Outputs: number

// Log the type of the variable `exponent` to the console; it will output "number"
console.log(typeof exponent);// Outputs: number

// Demonstrate special numeric values in JavaScript

// Log the result of dividing 1 by 0; in JavaScript, this results in `Infinity`
console.log(1 / 0);  // Outputs: Infinity

// Log the result of dividing -1 by 0; in JavaScript, this results in `-Infinity`
console.log(-1 / 0); // Outputs: -Infinity

// Log the result of dividing a string ("not a number") by a number (2); this results in `NaN` (Not a Number)
// `NaN` is a special value in JavaScript that indicates an invalid numeric operation
console.log("not a number" / 2); // Outputs: NaN (Not a Number)