// Declare a variable `firstName` and assign it the string "John"
let firstName = "John";

// Declare a variable `lastName` and assign it the string "Doe"
let lastName = "Doe";

// Using the + operator to concatenate `firstName` and `lastName` with a space in between
let fullName = firstName + " " + lastName;

// Log the concatenated full name to the console
console.log(fullName);  // Outputs: John Doe

// Declare a variable `age` and assign it the number 30
let age = 30;

// Concatenate strings and variables to form a complete sentence
let introduction = "My name is " + fullName + " and I am " + age + " years old.";

// Log the introduction sentence to the console
console.log(introduction);  // Outputs: My name is John Doe and I am 30 years old.

// Declare a variable `message` and assign it the string "Hello"
let message = "Hello";

// Use the += operator to append " World" to the `message` variable
message += " World";

// Log the updated `message` to the console
console.log(message);  // Outputs: Hello World

// Declare a variable `str1` and assign it the string "Hello"
let str1 = "Hello";

// Declare a variable `str2` and assign it the string "World"
let str2 = "World";

// Declare a variable `str3` and assign it the string "!"
let str3 = "!";

// Use the `concat()` method to concatenate `str1`, a space, `str2`, and `str3`
let result = str1.concat(" ", str2, str3); // Equivalent to str1 + " " + str2 + str3

// Log the concatenated result to the console
console.log(result);  // Outputs: Hello World!

// Use the `concat()` method to concatenate multiple strings into a single string
let greeting = "".concat("Hi", " ", "there", "!");

// Log the concatenated greeting to the console
console.log(greeting);  // Outputs: Hi there!
