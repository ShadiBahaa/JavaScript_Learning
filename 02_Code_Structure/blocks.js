// This `if` block demonstrates block scoping using `let`.
if (true) {
    // Declaring a block-scoped variable inside the `if` block.
    let blockScoped = "I'm inside the block";
    // Logging the value of the block-scoped variable to the console.
    console.log(blockScoped);
}

// Attempting to access `blockScoped` here would cause an error because it is block-scoped and not accessible outside the `if` block.

// A `for` loop that iterates 3 times.
for (let i = 0; i < 3; i++) {
    // Logging the current iteration index to the console.
    console.log("Loop iteration: " + i);
    // The variable `i` is block-scoped due to the use of `let`.
}

// Declaring a variable `sum` and assigning it the result of a multi-line addition.
// The addition is split across multiple lines for readability.
let sum =    1 + // First operand
    2 +      // Second operand
    3;       // Third operand

// Logging the value of `sum` to the console. The result of 1 + 2 + 3 is 6.
console.log(sum); // Outputs: 6