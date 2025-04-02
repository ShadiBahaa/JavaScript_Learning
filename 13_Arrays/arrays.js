// Array literal notation (preferred way)
let fruits = ['apple', 'banana', 'orange']; // Creates an array with three string elements

// Using the Array constructor (less common)
let numbers = new Array(1, 2, 3, 4, 5); // Creates an array using the Array constructor

// Empty array
let empty = []; // Creates an empty array with no elements

// Array with mixed data types
let mixed = ['text', 42, true, null, undefined]; // Creates an array with elements of different data types

// Array of arrays (nested arrays)
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // Creates a 2D array (array of arrays)

console.log(fruits);  // Logs the 'fruits' array to the console
console.log(numbers); // Logs the 'numbers' array to the console
console.log(mixed);   // Logs the 'mixed' array to the console

let colors = ['red', 'green', 'blue']; // Creates an array with three color strings
console.log(colors.length); // Logs the length of the 'colors' array (3)

// Length updates automatically when we modify the array
colors[5] = 'yellow'; // Adds a new element at index 5, leaving gaps in the array
console.log(colors.length); // Logs the updated length of the array (6)
console.log(colors); // Logs the 'colors' array, showing gaps as empty slots
console.log(typeof colors[4]); // Logs the type of the element at index 4 (undefined)

fruits = ['apple', 'banana', 'orange']; // Reassigns the 'fruits' array

console.log(fruits[0]); // Logs the first element of the 'fruits' array ('apple')
console.log(fruits[1]); // Logs the second element of the 'fruits' array ('banana')
console.log(fruits[2]); // Logs the third element of the 'fruits' array ('orange')
console.log(fruits[3]); // Logs undefined because index 3 does not exist

// Using negative indices doesn't work like in some other languages
console.log(fruits[-1]); // Logs undefined because negative indices are not valid in JavaScript arrays

// Last element can be accessed using length - 1
console.log(fruits[fruits.length - 1]); // Logs the last element of the 'fruits' array ('orange')

numbers = [1, 2, 3, 4, 5]; // Reassigns the 'numbers' array

// Changing an element
numbers[0] = 10; // Updates the first element of the 'numbers' array to 10
console.log(numbers); // Logs the updated 'numbers' array ([10, 2, 3, 4, 5])

// Adding a new element at a specific index
numbers[5] = 6; // Adds a new element at index 5
console.log(numbers); // Logs the updated 'numbers' array ([10, 2, 3, 4, 5, 6])

// Creating a gap in the array (not recommended)
numbers[7] = 8; // Adds a new element at index 7, leaving a gap at index 6
console.log(numbers); // Logs the 'numbers' array with a gap ([10, 2, 3, 4, 5, 6, , 8])

let arr = ['apple', 'banana']; // Creates an array with two string elements

// Arrays are objects
console.log(typeof arr); // Logs the type of 'arr' ('object')

// We can check if something is an array
console.log(Array.isArray(arr)); // Logs true because 'arr' is an array

// Arrays can have properties like objects
arr.myProperty = 'test'; // Adds a custom property to the array (not recommended)
console.log(arr.myProperty); // Logs the custom property ('test')
// But this is not recommended! Do not use this.

arr = ['a', 'b', 'c']; // Reassigns the 'arr' array
arr['1'] = 'd';  // Updates the element at index 1 to 'd' (same as arr[1] = 'd')
console.log(arr); // Logs the updated array (['a', 'd', 'c'])

numbers = [1, 2, 3, 4, 5]; // Reassigns the 'numbers' array
numbers.length = 3; // Truncates the array to the first 3 elements
console.log(numbers); // Logs the truncated array ([1, 2, 3])

numbers.length = 5; // Extends the array length to 5, adding empty slots
console.log(numbers); // Logs the extended array ([1, 2, 3, , ,]) with 2 empty slots

let arr1 = [1, 2, 3]; // Creates an array with three elements
let arr2 = [1, 2, 3]; // Creates another array with the same elements
console.log(arr1 === arr2); // Logs false because arrays are compared by reference, not value

let arr3 = arr1; // Assigns the reference of 'arr1' to 'arr3'
console.log(arr1 === arr3); // Logs true because both variables reference the same array

// Explanation of reference comparison
// This might look confusing for beginners, but arr1 and arr2 are 2 different objects that are living separately in your computer's memory. 
// Those values are also 6 separate values that are living in 6 different places in the memory. 
// Values might be representing the same numbers but they are not the same.
