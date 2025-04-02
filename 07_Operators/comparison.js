let x = 5; // Declare a variable `x` and assign it the numeric value 5.
let y = '5'; // Declare a variable `y` and assign it the string value '5'.

console.log(x == y);   // Loose equality: true because `==` compares only values, ignoring types. 
                       // Here, the string '5' is converted to the number 5 before comparison.

console.log(x === y);  // Strict equality: false because `===` compares both value and type. 
                       // `x` is a number, and `y` is a string, so they are not strictly equal.

console.log(x != y);   // Loose inequality: false because `!=` compares only values, ignoring types. 
                       // Since `x` and `y` have the same value (5), the result is false.

console.log(x !== y);  // Strict inequality: true because `!==` compares both value and type. 
                       // Since `x` is a number and `y` is a string, they are strictly not equal.

console.log(x > 3);    // Greater than: true because `x` (5) is greater than 3.

console.log(x < 3);    // Less than: false because `x` (5) is not less than 3.

console.log(x >= 5);   // Greater than or equal to: true because `x` (5) is equal to 5.

console.log(x <= 5);   // Less than or equal to: true because `x` (5) is equal to 5.