// Using Boolean() function to explicitly convert values to boolean type
console.log(Boolean(1));       // true: Non-zero numbers are truthy, so 1 converts to true
console.log(Boolean(0));       // false: Zero is falsy, so 0 converts to false
console.log(Boolean("hello")); // true: Non-empty strings are truthy, so "hello" converts to true
console.log(Boolean(""));      // false: Empty strings are falsy, so "" converts to false
console.log(Boolean(null));    // false: null is a falsy value, so it converts to false
console.log(Boolean(undefined));// false: undefined is a falsy value, so it converts to false
