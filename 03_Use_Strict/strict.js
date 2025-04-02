'use strict'; 
// Enables strict mode for the entire script. Strict mode helps catch common coding errors and prevents the use of unsafe features.

let x = 3.14;  
// Declares a variable `x` and assigns it the value 3.14. 
// In strict mode, this will cause an error if the script is executed in an environment that enforces strict mode, 
// because `x` is declared globally and strict mode disallows certain global variable declarations.

console.log(x);  
// Logs the value of `x` to the console. 
// If the previous line throws an error, this line will not execute.

function strictFunction() {  
    'use strict';  
    // Enables strict mode for this specific function. 
    // This is redundant here because strict mode is already enabled globally.

    let y = 3.14;  
    // Declares a variable `y` and assigns it the value 3.14. 
    // This is fine because `y` is declared properly with `let`.

    z = 42;  
    // Assigns the value 42 to `z`. 
    // This will cause an error in strict mode because `z` is not declared with `let`, `const`, or `var`.
}

strictFunction();  
// Calls the `strictFunction` function. 
// This will throw an error due to the undeclared variable `z` inside the function.
