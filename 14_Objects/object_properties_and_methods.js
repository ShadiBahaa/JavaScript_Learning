// Define an object `user` with properties `name` and `age`
let user = {
    name: "John", // Property `name` with value "John"
    age: 30, // Property `age` with value 30
};

// Using `hasOwnProperty` method to check if a property exists directly on the object
console.log(user.hasOwnProperty("name")); // true, because `name` is a direct property of `user`
console.log(user.hasOwnProperty("height")); // false, because `height` is not a property of `user`

// Using `Object.hasOwn` (modern way introduced in ES2022) to check for direct properties
console.log(Object.hasOwn(user, "name")); // true, `name` exists directly on `user`
console.log(Object.hasOwn(user, "height")); // false, `height` does not exist on `user`

// Using the `in` operator to check if a property exists (including inherited properties)
console.log("name" in user); // true, `name` exists in `user`
console.log("height" in user); // false, `height` does not exist in `user`

// Redefine the `user` object with additional properties
user = {
    name: "John", // Property `name` with value "John"
    age: 30, // Property `age` with value 30
    city: "New York", // Property `city` with value "New York"
};

// Get all keys of the `user` object using `Object.keys`
console.log(Object.keys(user)); // ["name", "age", "city"], returns an array of property names

// Get all values of the `user` object using `Object.values`
console.log(Object.values(user)); // ["John", 30, "New York"], returns an array of property values

// Get key-value pairs of the `user` object as arrays using `Object.entries`
console.log(Object.entries(user)); // [["name", "John"], ["age", 30], ["city", "New York"]]

// Redefine the `user` object with fewer properties
user = {
    name: "John", // Property `name` with value "John"
    age: 30, // Property `age` with value 30
};

// Create a shallow copy of the `user` object using the spread operator
let userCopy = { ...user }; // `userCopy` is a new object with the same properties as `user`
userCopy.name = "Jane"; // Modify the `name` property of `userCopy`

console.log(user.name); // "John", original `user` object remains unchanged
console.log(userCopy.name); // "Jane", `userCopy` has the updated `name` property

// Redefine the `user` object with properties and methods
user = {
    name: "John", // Property `name` with value "John"
    age: 30, // Property `age` with value 30
    // Method using function declaration
    sayHi: function () {
        console.log("Hi! I'm " + this.name); // Logs a greeting using the `name` property
    },
    // Shorthand method syntax (introduced in ES6+)
    greet() {
        console.log(`Hello! I'm ${this.name} and I'm ${this.age} years old`); // Logs a greeting with `name` and `age`
    },
};

user.sayHi(); // Calls the `sayHi` method, logs: "Hi! I'm John"
user.greet(); // Calls the `greet` method, logs: "Hello! I'm John and I'm 30 years old"

// Define a `calculator` object with methods for basic arithmetic
let calculator = {
    value: 0, // Initial value of the calculator
    add(number) {
        this.value += number; // Adds `number` to the current value
    },
    subtract(number) {
        this.value -= number; // Subtracts `number` from the current value
    },
    getCurrentValue() {
        return this.value; // Returns the current value
    },
};

calculator.add(5); // Adds 5 to the calculator's value
console.log(calculator.getCurrentValue()); // 5, logs the current value
calculator.subtract(2); // Subtracts 2 from the calculator's value
console.log(calculator.getCurrentValue()); // 3, logs the current value

// Define variables `name` and `age`
let name = "John";
let age = 30;

// Before ES6: Define an object with explicit property-value pairs
let user1 = {
    name: name, // Explicitly assign `name` to `name`
    age: age, // Explicitly assign `age` to `age`
};

// With ES6: Use shorthand property names
let user2 = {
    name, // Equivalent to `name: name`
    age, // Equivalent to `age: age`
};

// Before ES6: Define a method using the `function` keyword
user1 = {
    sayHi: function () {
        console.log("Hi!"); // Logs "Hi!"
    },
};

// With ES6: Use shorthand method syntax
user2 = {
    sayHi() {
        console.log("Hi!"); // Logs "Hi!"
    },
};

// Define a dynamic property name and computed method name
let propName = "age"; // Dynamic property name
let prefix = "user"; // Prefix for computed property name

user = {
    [propName]: 30, // Use variable `propName` as the property name
    [prefix + "Id"]: 1, // Compute property name by concatenating `prefix` and "Id"
    ["get" + propName.toUpperCase()]() {
        // Compute method name by concatenating "get" and the uppercase version of `propName`
        return this[propName]; // Return the value of the `age` property
    },
};

console.log(user.age); // 30, logs the value of the `age` property
console.log(user.userId); // 1, logs the value of the `userId` property
console.log(user.getAGE()); // 30, calls the computed method and logs the value of `age`