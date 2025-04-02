// Declare a variable `p` and assign it the boolean value `true`
let p = true;

// Declare a variable `q` and assign it the boolean value `false`
let q = false;

// Logical AND: Evaluates to `true` only if both operands are `true`
// Here, `p` is `true` and `q` is `false`, so the result is `false`
console.log(p && q);  // Logical AND: false

// Logical OR: Evaluates to `true` if at least one operand is `true`
// Here, `p` is `true` and `q` is `false`, so the result is `true`
console.log(p || q);  // Logical OR: true

// Logical NOT: Negates the boolean value of `p`
// Since `p` is `true`, `!p` evaluates to `false`
console.log(!p);      // Logical NOT: false

// Short-circuit evaluation with Logical OR
// `true || anything` evaluates to `true` because the first operand is `true`
// The second operand (`anything`) is not evaluated due to short-circuiting
console.log(true || anything);  // true (second operand is not evaluated)

// Short-circuit evaluation with Logical AND
// `false && anything` evaluates to `false` because the first operand is `false`
// The second operand (`anything`) is not evaluated due to short-circuiting
console.log(false && anything); // false (second operand is not evaluated)

// Truthy and falsy values in Logical AND
// `5 && 2`: Both `5` and `2` are truthy values, so the Logical AND operator
// returns the last truthy value, which is `2`
console.log(5 && 2);   // 2 (returns the last truthy value)

// Truthy and falsy values in Logical OR
// `0 || 1`: `0` is a falsy value, and `1` is a truthy value
// The Logical OR operator returns the first truthy value, which is `1`
console.log(0 || 1);   // 1 (returns the first truthy value)

// Logical OR with null and a string
// `null || 'default'`: `null` is a falsy value, and `'default'` is a truthy value
// The Logical OR operator returns the first truthy value, which is `'default'`
console.log(null || 'default');  // 'default'
