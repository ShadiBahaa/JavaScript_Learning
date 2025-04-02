// Define an object `user` with properties `name`, `age`, and `city`
let user = {
    name: "John",
    age: 30,
    city: "New York",
};

// Basic destructuring: Extract `name` and `age` properties from the `user` object
let { name, age } = user;
console.log(name); // Logs "John" (value of the `name` property)
console.log(age); // Logs 30 (value of the `age` property)

// Destructuring with different variable names: Extract `name` and `age` but assign them to new variable names
let { name: userName, age: userAge } = user;
console.log(userName); // Logs "John" (value of the `name` property assigned to `userName`)
console.log(userAge); // Logs 30 (value of the `age` property assigned to `userAge`)

// Destructuring with default values: Extract `name` and `country` properties, but use a default value for `country` if it doesn't exist
({ name, country = "USA" } = user);
console.log(country); // Logs "USA" (default value is used because `country` is not in the `user` object)

// Reassign the `user` object with additional properties, including `country`
user = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
};

// Using the rest operator: Extract `name` and `age` properties, and collect the remaining properties into a new object `rest`
({ name, age, ...rest } = user);
console.log(name); // Logs "John" (value of the `name` property)
console.log(age); // Logs 30 (value of the `age` property)
console.log(rest); // Logs { city: "New York", country: "USA" } (remaining properties are stored in `rest`)