// Declare a variable `age` and assign it the value 25
let age = 25;

// Start a switch statement that evaluates the expression `true`
// This allows us to use conditional expressions in the `case` statements
switch (true) {
    // Check if `age` is less than 13
    case age < 13:
        // If the condition is true, log "Child" to the console
        console.log("Child");
        // Exit the switch statement
        break;

    // Check if `age` is less than 20
    case age < 20:
        // If the condition is true, log "Teenager" to the console
        console.log("Teenager");
        // Exit the switch statement
        break;

    // Check if `age` is less than 30
    case age < 30:
        // If the condition is true, log "Young Adult" to the console
        console.log("Young Adult");
        // Exit the switch statement
        break;

    // Default case if none of the above conditions are met
    default:
        // Log "Adult" to the console
        console.log("Adult");
}

// Outputs: Young Adult
// Since `age` is 25, it satisfies the condition `age < 30` in the third case,
// so "Young Adult" is logged to the console.