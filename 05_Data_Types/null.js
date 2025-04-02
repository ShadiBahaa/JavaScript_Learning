// Declare a variable named 'nullVariable' and assign it the value 'null'.
// 'null' is a special value in JavaScript that represents the intentional absence of any object value.
let nullVariable = null;

// Log the value of 'nullVariable' to the console.
// This will output 'null' because that is the value assigned to the variable.
console.log(nullVariable); // Outputs: null

// Log the type of 'nullVariable' to the console using the 'typeof' operator.
// The 'typeof' operator incorrectly returns 'object' for 'null' due to a historical bug in JavaScript.
// This behavior is widely recognized but cannot be fixed due to backward compatibility reasons.
console.log(typeof nullVariable); // Outputs: object (this is a well-known bug in JavaScript, typeof operator is not working correctly there)