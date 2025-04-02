// Object literal notation (most common way)
let user = {
    name: "John", // Property 'name' with value "John"
    age: 30, // Property 'age' with value 30
    isAdmin: true, // Property 'isAdmin' with value true
};

// Empty object
let empty = {}; // Declares an empty object with no properties

// Object with different value types
let person = {
    name: "Alice", // Property 'name' with value "Alice"
    age: 25, // Property 'age' with value 25
    hobbies: ["reading", "gaming"], // Property 'hobbies' with an array of strings
    address: { // Nested object 'address'
        city: "New York", // Property 'city' with value "New York"
        country: "USA", // Property 'country' with value "USA"
    },
};

// Reassigning the 'user' object with new properties
user = {
    name: "John", // Property 'name' with value "John"
    age: 30, // Property 'age' with value 30
};

// Dot notation
console.log(user.name); // Accesses the 'name' property of 'user' using dot notation, outputs "John"

// Bracket notation
console.log(user["age"]); // Accesses the 'age' property of 'user' using bracket notation, outputs 30

// Dynamic property access
let key = "name"; // Declares a variable 'key' with value "name"
console.log(user[key]); // Accesses the property of 'user' dynamically using the value of 'key', outputs "John"

// Property that doesn't exist
console.log(user.height); // Attempts to access a non-existent property 'height', outputs undefined

// Reassigning the 'user' object again
user = {
    name: "John", // Property 'name' with value "John"
};

// Adding new properties
user.age = 30; // Adds a new property 'age' with value 30 to the 'user' object
user["isAdmin"] = true; // Adds a new property 'isAdmin' with value true using bracket notation

// Modifying existing properties
user.name = "Jane"; // Modifies the 'name' property of 'user' to "Jane"

// Deleting properties
delete user.isAdmin; // Deletes the 'isAdmin' property from the 'user' object

console.log(user); // Logs the final state of the 'user' object, outputs { name: "Jane", age: 30 }