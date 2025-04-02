// Define an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Iterate over each element in the array and log its index and value
numbers.forEach(function(number, index) {
    console.log(`Number at index ${index} is ${number}`);
});

// Same as above but using an arrow function for shorter syntax
numbers.forEach((number, index) => {
    console.log(`Number at index ${index} is ${number}`);
});

// Reassign the numbers array
numbers = [1, 2, 3, 4, 5];

// Create a new array by doubling each number in the original array
let doubled = numbers.map(function(number) {
    return number * 2; // Multiply each number by 2
});

// Log the original array (unchanged)
console.log(numbers);  // [1, 2, 3, 4, 5]
// Log the new array with doubled values
console.log(doubled);  // [2, 4, 6, 8, 10]

// Create a new array by squaring each number using an arrow function
let squared = numbers.map(number => number * number);
console.log(squared); // [1, 4, 9, 16, 25]

// Reassign the numbers array with more elements
numbers = [1, 2, 3, 4, 5, 6];

// Create a new array containing only even numbers
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0; // Check if the number is divisible by 2
});

// Log the original array (unchanged)
console.log(numbers);     // [1, 2, 3, 4, 5, 6]
// Log the new array with only even numbers
console.log(evenNumbers); // [2, 4, 6]

// Create a new array containing numbers greater than 3 using an arrow function
let bigNumbers = numbers.filter(number => number > 3);
console.log(bigNumbers);  // [4, 5, 6]

// Reassign the numbers array
numbers = [1, 2, 3, 4, 5];

// Calculate the sum of all numbers in the array
let sum = numbers.reduce(function(accumulator, currentNumber) {
    return accumulator + currentNumber; // Add the current number to the accumulator
}, 0);  // Start with an initial value of 0

console.log(sum); // 15

// Calculate the product of all numbers using an arrow function
let product = numbers.reduce((acc, curr) => acc * curr, 1); // Start with 1
console.log(product); // 120

// Reassign the numbers array with more elements
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Find the first even number in the array
let firstEven = numbers.find(number => number % 2 === 0);
console.log(firstEven); // 2 (stops after finding the first even number)

// Define an array of user objects
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" }
];

// Find the user with id 2
let user = users.find(user => user.id === 2);
console.log(user); // { id: 2, name: "Jane" }

// Reassign the numbers array
numbers = [1, 2, 3, 4, 5];

// Find the index of the first number greater than 3
let index = numbers.findIndex(number => number > 3);
console.log(index); // 3 (index of the first number greater than 3)

// Try to find the index of a number greater than 10 (not found)
let notFound = numbers.findIndex(number => number > 10);
console.log(notFound); // -1 (not found)

// Reassign the numbers array
numbers = [1, 2, 3, 4, 5];

// Check if the array contains at least one even number
let hasEven = numbers.some(number => number % 2 === 0);
console.log(hasEven); // true (at least one even number exists)

// Check if the array contains any negative numbers
let hasNegative = numbers.some(number => number < 0);
console.log(hasNegative); // false (no negative numbers)

// Reassign the numbers array with only even numbers
numbers = [2, 4, 6, 8, 10];

// Check if all numbers in the array are even
let allEven = numbers.every(number => number % 2 === 0);
console.log(allEven); // true (all numbers are even)

// Check if all numbers in the array are positive
let allPositive = numbers.every(number => number > 0);
console.log(allPositive); // true (all numbers are positive)

// Define an array of product objects
let products = [
    { id: 1, name: "Laptop", price: 999, inStock: true },
    { id: 2, name: "Phone", price: 599, inStock: true },
    { id: 3, name: "Tablet", price: 399, inStock: false },
    { id: 4, name: "Watch", price: 199, inStock: true }
];

// Find the first in-stock product with a price under $500
let affordableProduct = products
    .filter(product => product.inStock) // Filter only in-stock products
    .find(product => product.price < 500); // Find the first product under $500
console.log(affordableProduct); // { id: 4, name: "Watch", ... }

// Check if all in-stock products are priced under $1000
let allAffordable = products
    .filter(product => product.inStock) // Filter only in-stock products
    .every(product => product.price < 1000); // Check if all are under $1000
console.log(allAffordable); // true

// Define an array of colors
let colors = ['red', 'green', 'blue'];

// Destructure the array into individual variables
let [first, second, third] = colors;
console.log(first);  // 'red'
console.log(second); // 'green'
console.log(third);  // 'blue'

// Destructure the array while skipping the second element
let [primary, , tertiary] = colors;
console.log(primary);  // 'red'
console.log(tertiary); // 'blue'

// Destructure with a default value for an element that doesn't exist
let [a, b, c, d = 'yellow'] = colors;
console.log(d); // 'yellow' (default value used)

// Swap the values of two variables using destructuring
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x, y); // 2, 1

// Reassign the numbers array
numbers = [1, 2, 3, 4, 5];

// Use the rest operator to collect the remaining elements
[first, second, ...rest] = numbers;
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

// Combine two arrays using the spread operator
let moreNumbers = [...numbers, 6, 7, 8];
console.log(moreNumbers); // [1, 2, 3, 4, 5, 6, 7, 8]

// Create a copy of the numbers array using the spread operator
let numbersCopy = [...numbers];
console.log(numbersCopy); // [1, 2, 3, 4, 5]
