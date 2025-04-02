// Initialize an array of fruits
let fruits = ['apple', 'banana'];

// push() adds elements to the end of the array and returns the new length
let newLength = fruits.push('orange'); // Adds 'orange' to the end of the array
console.log(fruits);     // Logs the updated array: ['apple', 'banana', 'orange']
console.log(newLength);  // Logs the new length of the array: 3

// push() can add multiple elements at once
fruits.push('grape', 'kiwi'); // Adds 'grape' and 'kiwi' to the end of the array
console.log(fruits);     // Logs the updated array: ['apple', 'banana', 'orange', 'grape', 'kiwi']

// pop() removes and returns the last element of the array
let lastFruit = fruits.pop(); // Removes 'kiwi' from the array
console.log(lastFruit);  // Logs the removed element: 'kiwi'
console.log(fruits);     // Logs the updated array: ['apple', 'banana', 'orange', 'grape']

// Initialize an array of numbers
let numbers = [2, 3, 4];

// unshift() adds elements to the beginning of the array and returns the new length
newLength = numbers.unshift(1); // Adds '1' to the beginning of the array
console.log(numbers);    // Logs the updated array: [1, 2, 3, 4]
console.log(newLength);  // Logs the new length of the array: 4

// unshift() can add multiple elements at once
numbers.unshift(-1, 0); // Adds '-1' and '0' to the beginning of the array
console.log(numbers);    // Logs the updated array: [-1, 0, 1, 2, 3, 4]

// shift() removes and returns the first element of the array
let firstNumber = numbers.shift(); // Removes '-1' from the array
console.log(firstNumber); // Logs the removed element: -1
console.log(numbers);     // Logs the updated array: [0, 1, 2, 3, 4]

// Initialize another array
let arr = [1, 2, 3, 4, 5];

// push() and pop() are fast operations (O(1)) as they only affect the end of the array
arr.push(6);    // Adds '6' to the end of the array
arr.pop();      // Removes the last element ('6') from the array

// shift() and unshift() are slower operations (O(n)) as they require reindexing all elements
arr.unshift(0); // Adds '0' to the beginning of the array, reindexing all elements
arr.shift();    // Removes the first element ('0'), reindexing all elements

// Initialize an empty array to use as a stack
let stack = [];

// Adding items to the stack (LIFO - Last In, First Out)
stack.push(1); // Adds '1' to the stack
stack.push(2); // Adds '2' to the stack
stack.push(3); // Adds '3' to the stack
console.log(stack); // Logs the stack: [1, 2, 3]

// Removing items from the stack
let lastItem = stack.pop(); // Removes the last item ('3') from the stack
console.log(lastItem);  // Logs the removed item: 3
console.log(stack);     // Logs the updated stack: [1, 2]

// Initialize an empty array to use as a queue
let queue = [];

// Adding items to the queue (FIFO - First In, First Out)
queue.push(1); // Adds '1' to the queue
queue.push(2); // Adds '2' to the queue
queue.push(3); // Adds '3' to the queue
console.log(queue); // Logs the queue: [1, 2, 3]

// Removing items from the queue
let firstItem = queue.shift(); // Removes the first item ('1') from the queue
console.log(firstItem); // Logs the removed item: 1
console.log(queue);     // Logs the updated queue: [2, 3]

// Initialize an array of numbers
numbers = [1, 2, 3];
numbers.push(4); // Adds '4' to the end of the array

// If you don't want to modify the original array, create a copy first
let newNumbers = [...numbers]; // Creates a shallow copy of the array using the spread operator

// Initialize an empty array
let empty = [];
let item = empty.pop(); // Returns undefined since the array is empty
if (empty.length > 0) { // Check if the array has elements before calling pop()
    item = empty.pop(); // Safely remove the last element if the array is not empty
}

// Initialize an empty array
let array = [];
// Using unshift() in a loop can be slow for large arrays due to reindexing
for (let i = 0; i < 1000; i++) {
    array.unshift(i); // Adds elements to the beginning of the array
}

// A better approach is to use push() and reverse() if needed
for (let i = 0; i < 1000; i++) {
    array.push(i); // Adds elements to the end of the array
}
array.reverse(); // Reverses the array to achieve the same result as unshift()
