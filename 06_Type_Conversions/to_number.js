// Using Number() function
console.log(Number("123"));   // Converts the string "123" to the number 123
console.log(Number(""));      // Converts an empty string to the number 0
console.log(Number("  "));    // Converts a string with only spaces to the number 0
console.log(Number(true));    // Converts the boolean true to the number 1
console.log(Number(false));   // Converts the boolean false to the number 0
console.log(Number(null));    // Converts null to the number 0
console.log(Number(undefined));// Converts undefined to NaN (Not a Number)
console.log(Number("hello")); // Converts the string "hello" to NaN because it's not a valid number

// Using parseInt() and parseFloat()
console.log(parseInt("123"));     // Parses the string "123" and converts it to the integer 123
console.log(parseFloat("3.14"));  // Parses the string "3.14" and converts it to the floating-point number 3.14

// Unary plus operator
console.log(+"123");  // Converts the string "123" to the number 123 using the unary plus operator
console.log(+true);   // Converts the boolean true to the number 1 using the unary plus operator
