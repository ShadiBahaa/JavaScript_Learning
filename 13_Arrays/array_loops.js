// Define an array of fruits
let fruits = ['apple', 'banana', 'orange', 'grape'];

// Basic forward iteration through the array
for (let i = 0; i < fruits.length; i++) {
    // Log each fruit with its index (1-based)
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// Backward iteration through the array
for (let i = fruits.length - 1; i >= 0; i--) {
    // Log each fruit in reverse order with its index (1-based)
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// Iterating through the array while skipping every second element
for (let i = 0; i < fruits.length; i += 2) {
    // Log every second fruit with its index (1-based)
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// Define an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Breaking out of a loop when a specific condition is met
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) {
        // Exit the loop when the number 3 is found
        break;
    }
    // Log numbers until the loop breaks
    console.log(numbers[i]);
} // Outputs: 1, 2

// Skipping specific elements in a loop using `continue`
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        // Skip even numbers
        continue;
    }
    // Log only odd numbers
    console.log(numbers[i]);
} // Outputs: 1, 3, 5

// Modifying each element of the array by multiplying it by 2
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2; // Double each number
}
console.log(numbers); // [2, 4, 6, 8, 10]

// Define an array of colors
let colors = ['red', 'green', 'blue'];

// Iterating through the array using a `while` loop
let i = 0;
while (i < colors.length) {
    // Log each color
    console.log(colors[i]);
    i++; // Increment the index
}

// Iterating through the array in reverse using a `while` loop
let j = colors.length;
while (j--) {
    // Log each color in reverse order
    console.log(colors[j]);
}

// Reset the numbers array
numbers = [1, 2, 3, 4, 5];

// Using a `for...of` loop to iterate through the array
for (let number of numbers) {
    // Log each number
    console.log(number);
}

// Note: `for...of` does not provide access to the index directly
// If both the element and index are needed, use a `for` loop or `forEach`

// Searching for a specific value in the array
numbers = [1, 2, 3, 4, 5];
let searchValue = 3;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === searchValue) {
        // Log the index of the found value and exit the loop
        console.log(`Found ${searchValue} at index ${i}`);
        break;
    }
}

// Define an array of prices
let prices = [10, 20, 30, 40];

// Adding a 20% tax to each price
for (let i = 0; i < prices.length; i++) {
    prices[i] = prices[i] * 1.2; // Multiply each price by 1.2
}
console.log(prices); // [12, 24, 36, 48]

// Define an array of scores
let scores = [75, 90, 85, 65, 95];
let highScores = []; // Initialize an empty array for high scores

// Filtering scores that are 90 or above
for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 90) {
        // Add high scores to the new array
        highScores.push(scores[i]);
    }
}
console.log(highScores); // [90, 95]

// Create a large array with 1,000,000 elements, all set to 1
let largeArray = new Array(1000000).fill(1);

// Caching the array length for performance optimization
let len = largeArray.length;
for (let i = 0; i < len; i++) {
    // Perform some operation (not specified here)
}

// Recalculating the array length in each iteration (less efficient)
for (let i = 0; i < largeArray.length; i++) {
    // Perform some operation (not specified here)
}

// Define a small array
let arr = [1, 2, 3];

// Incorrect loop: starts from 1 and includes the length, causing an error
for (let i = 1; i <= arr.length; i++) {
    console.log(arr[i]); // Will log `undefined` for the last iteration
}

// Correct loop: starts from 0 and excludes the length
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // Logs each element correctly
}
