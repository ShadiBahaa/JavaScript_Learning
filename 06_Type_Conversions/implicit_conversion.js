// String concatenation
console.log("3" + 4);        // "34" 
// The `+` operator is used for string concatenation when one operand is a string. 
// Here, the number 4 is implicitly converted to a string and concatenated with "3".

console.log(4 + "3");        // "43"
// Similar to the previous line, the number 4 is converted to a string and concatenated with "3".

console.log("3" + true);     // "3true"
// The boolean `true` is implicitly converted to a string ("true") and concatenated with "3".

// Numeric conversion
console.log("6" - 2);        // 4
// The `-` operator triggers implicit numeric conversion. 
// The string "6" is converted to the number 6, and 6 - 2 results in 4.

console.log("6" * "2");      // 12
// The `*` operator also triggers numeric conversion. 
// Both strings "6" and "2" are converted to numbers, and 6 * 2 results in 12.

// Equality operators
console.log("5" == 5);       // true
// The `==` operator performs type coercion. 
// The string "5" is converted to the number 5, and 5 == 5 evaluates to true.

console.log("5" === 5);      // false
// The `===` operator checks for strict equality without type coercion. 
// Since "5" (string) and 5 (number) are of different types, the result is false.