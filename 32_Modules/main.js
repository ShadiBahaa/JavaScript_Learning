// Importing specific functions `add` and `subtract` from the `utils.js` module.
import { add, subtract } from './utils.js';

// Logging the result of the `add` function with arguments 5 and 3 (expected output: 8).
console.log(add(5, 3));      // 8

// Logging the result of the `subtract` function with arguments 5 and 3 (expected output: 2).
console.log(subtract(5, 3)); // 2

// Importing the default export `Calculator` and a named export `VERSION` from the `calculator.js` module.
import Calculator, { VERSION } from './calculator.js';

// Creating an instance of the `Calculator` class.
const calc = new Calculator();

// Logging the result of the `add` method from the `Calculator` instance (expected output: 8).
console.log(calc.add(5, 3));  // 8

// Logging the value of the `VERSION` constant (expected output: '1.0').
console.log(VERSION);         // '1.0'

// Importing `add` and `subtract` functions from `math.js` but renaming them to `sum` and `minus` respectively.
import { add as sum, subtract as minus } from './math.js';

// Logging the result of the renamed `sum` function (expected output: 8).
console.log(sum(5, 3));     // 8

// Logging the result of the renamed `minus` function (expected output: 2).
console.log(minus(5, 3));   // 2

// Importing all exports from `mathUtils.js` as a single object named `mathUtils`.
import * as mathUtils from './mathUtils.js';

// Logging the result of the `add` function from the `mathUtils` object (expected output: 8).
console.log(mathUtils.add(5, 3));      // 8

// Logging the result of the `multiply` function from the `mathUtils` object (expected output: 8).
console.log(mathUtils.multiply(4, 2)); // 8

// Comment: Demonstrating better practices for single responsibility in modules.
// Exporting a single `User` class from a module.
export class User { ... }

// Comment: Avoid exporting multiple unrelated classes from the same module.
// This makes the module less focused and harder to maintain.
export class User { ... }
export class Product { ... }
export class Order { ... }

// Comment: Good practice - importing modules with clear and descriptive names.
// Importing the `User` class from a dedicated `User.js` file.
import User from './User.js'

// Importing a specific utility function `validateEmail` from a `validators.js` file.
import { validateEmail } from './validators.js'

// Comment: Avoid importing unrelated items from generic or unclear module names.
// This makes the code less readable and harder to understand.
import User from './stuff.js'
import { validateEmail } from './utils.js'

// Comment: Demonstrating better practice for exporting functions.
// Exporting `add` and `subtract` as named exports for better modularity and flexibility.
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Comment: Avoid using default exports for objects containing multiple functions.
// This makes it harder to tree-shake and less explicit when importing.
export default {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};
