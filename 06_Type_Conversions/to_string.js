// Using String() function
console.log(String(123));      // Converts the number 123 to a string and logs "123"
console.log(String(true));     // Converts the boolean true to a string and logs "true"
console.log(String(null));     // Converts the null value to a string and logs "null"
console.log(String(undefined));// Converts the undefined value to a string and logs "undefined"

// Using .toString() method
console.log((123).toString()); // Converts the number 123 to a string using the .toString() method and logs "123"
console.log(true.toString());  // Converts the boolean true to a string using the .toString() method and logs "true"

// Template literals
console.log(`${123}`);         // Converts the number 123 to a string using template literals and logs "123"
console.log(`${true}`);        // Converts the boolean true to a string using template literals and logs "true"
