'use strict'; 
// Enables strict mode, which helps catch common coding errors and prevents the use of unsafe features.

let age = 25; 
// Declares a variable `age` using `let` and assigns it the value 25. Variables declared with `let` can be reassigned.

console.log(age); // Outputs: 25
// Logs the value of `age` (25) to the console.

age = 26; 
// Reassigns the value of `age` to 26. This is allowed because `let` allows reassignment.

console.log(age); // Outputs: 26
// Logs the updated value of `age` (26) to the console.

let name = "Alice"; 
// Declares a variable `name` using `let` and assigns it the string value "Alice".

console.log(name); // Outputs: Alice
// Logs the value of `name` ("Alice") to the console.

name = "Bob"; 
// Reassigns the value of `name` to "Bob". Again, this is allowed because `let` allows reassignment.

console.log(name); // Outputs: Bob
// Logs the updated value of `name` ("Bob") to the console.

const PI = 3.14159; 
// Declares a constant `PI` using `const` and assigns it the value 3.14159. Constants cannot be reassigned.

console.log(PI); // Outputs: 3.14159
// Logs the value of `PI` (3.14159) to the console.

// PI = 3.14; 
// This would cause an error: Assignment to a constant variable. Constants cannot be reassigned.

const person = {name: "Charlie", age: 30}; 
// Declares a constant `person` and assigns it an object with properties `name` and `age`. 
// While the reference to the object cannot be changed, the properties of the object can be modified.

person.age = 31; 
// Modifies the `age` property of the `person` object to 31. This is allowed because the object itself is not reassigned.

console.log(person); // Outputs: {name: "Charlie", age: 31}
// Logs the updated `person` object to the console, showing the modified `age` property.

// person = {name: "David", age: 25}; 
// This would cause an error: Assignment to a constant variable. 
// The `person` constant cannot be reassigned to a new object.
