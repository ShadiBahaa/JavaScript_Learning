// When a number is added to a string, JavaScript performs type coercion and converts the number to a string.
// The result is string concatenation, so "5" is appended to "5", resulting in "55".
console.log(5 + "5"); // Outputs: 55 (string)

// When a string is subtracted from a number, JavaScript attempts to convert the string to a number.
// Here, "5" is converted to 5, and 5 - 3 results in 2 (a number).
console.log("5" - 3); // Outputs: 2 (number)

// When two strings are multiplied, JavaScript tries to convert both strings to numbers.
// Here, "5" and "3" are converted to 5 and 3, and 5 * 3 results in 15 (a number).
console.log("5" * "3"); // Outputs: 15 (number)

// When a boolean is added to a number, JavaScript converts the boolean to a number.
// true is coerced to 1, so 1 + 1 results in 2 (a number).
console.log(true + 1); // Outputs: 2 (number)
