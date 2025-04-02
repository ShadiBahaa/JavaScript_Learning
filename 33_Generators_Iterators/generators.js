// These are all iterable
const array = [1, 2, 3]; // An array is an iterable object.
const string = "hello"; // A string is also iterable, where each character is an item.
const set = new Set([1, 2, 3]); // A Set is an iterable collection of unique values.
const map = new Map([['a', 1], ['b', 2]]); // A Map is an iterable collection of key-value pairs.

// They all work with for...of
for (const item of array) console.log(item); // Iterates over each element in the array and logs it.
for (const char of string) console.log(char); // Iterates over each character in the string and logs it.
for (const item of set) console.log(item); // Iterates over each unique value in the Set and logs it.
for (const [key, value] of map) console.log(key, value); // Iterates over each key-value pair in the Map and logs them.


// A generator function that yields numbers sequentially
function* numberGenerator() {
    yield 1; // Yields the value 1.
    yield 2; // Yields the value 2.
    yield 3; // Yields the value 3.
}

let gen = numberGenerator(); // Creates an iterator from the generator function.
console.log(gen.next().value); // Retrieves the first value (1) from the generator.
console.log(gen.next().value); // Retrieves the second value (2) from the generator.
console.log(gen.next().value); // Retrieves the third value (3) from the generator.
console.log(gen.next().value); // No more values to yield, returns undefined.

// Or use it in a for...of loop
for (const num of numberGenerator()) {
    console.log(num); // Iterates over the generator and logs 1, 2, 3.
}


// A generator function that creates unique user IDs
function* createIds() {
    let id = 1; // Starts with ID 1.
    while (true) { // Infinite loop to generate IDs.
        yield `user_${id}`; // Yields a string with the current ID.
        id++; // Increments the ID for the next iteration.
    }
}

const userIds = createIds(); // Creates an iterator from the generator function.
console.log(userIds.next().value); // Retrieves the first ID ("user_1").
console.log(userIds.next().value); // Retrieves the second ID ("user_2").
console.log(userIds.next().value); // Retrieves the third ID ("user_3").

// A generator function to paginate an array into chunks
function* paginate(array, pageSize) {
    for (let i = 0; i < array.length; i += pageSize) { // Loops through the array in steps of pageSize.
        yield array.slice(i, i + pageSize); // Yields a chunk of the array.
    }
}

const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g']; // An array of items to paginate.
const pages = paginate(items, 3); // Creates an iterator to paginate the array into chunks of 3.

console.log(pages.next().value); // Retrieves the first chunk ['a', 'b', 'c'].
console.log(pages.next().value); // Retrieves the second chunk ['d', 'e', 'f'].
console.log(pages.next().value); // Retrieves the third chunk ['g'].

// A generator function to create a range of numbers
function* range(start, end, step = 1) {
    let current = start; // Starts with the initial value.
    while (current <= end) { // Continues until the current value exceeds the end value.
        yield current; // Yields the current value.
        current += step; // Increments the current value by the step.
    }
}

// Use it like Python's range
for (const num of range(0, 10, 2)) {
    console.log(num); // Logs numbers 0, 2, 4, 6, 8, 10.
}

// A generator function demonstrating interaction with `yield`
function* demo() {
    console.log('Start'); // Logs "Start" when the generator is first invoked.
    const a = yield 1; // Yields 1 and waits for input to resume.
    console.log('Got:', a); // Logs the value passed to `next()` after the first yield.
    const b = yield 2; // Yields 2 and waits for input to resume.
    console.log('Got:', b); // Logs the value passed to `next()` after the second yield.
}

gen = demo(); // Creates an iterator from the generator function.
console.log(gen.next().value); // Logs "Start", retrieves 1.
console.log(gen.next('hello').value); // Logs "Got: hello", retrieves 2.
console.log(gen.next('world').value); // Logs "Got: world", retrieves undefined (end of generator).


// Good: Clear sequence generation using a generator
function* fibonacci() {
    let prev = 0, curr = 1; // Initializes the first two Fibonacci numbers.
    while (true) { // Infinite loop to generate Fibonacci numbers.
        yield curr; // Yields the current Fibonacci number.
        [prev, curr] = [curr, prev + curr]; // Updates the sequence.
    }
}

// Avoid: Complex state management with manual variables
let prev = 0, curr = 1; // Initializes the first two Fibonacci numbers.
function getNextFib() {
    const temp = curr; // Temporarily stores the current value.
    curr = prev + curr; // Updates the current value.
    prev = temp; // Updates the previous value.
    return curr; // Returns the next Fibonacci number.
}

// Good: Generate values on demand using a generator
function* largeRange(max) {
    for (let i = 0; i < max; i++) { // Loops from 0 to max - 1.
        yield i; // Yields the current value.
    }
}

// Bad: Store all values in memory, which is inefficient for large ranges
function getLargeRange(max) {
    const numbers = []; // Creates an array to store all numbers.
    for (let i = 0; i < max; i++) { // Loops from 0 to max - 1.
        numbers.push(i); // Adds the current value to the array.
    }
    return numbers; // Returns the entire array.
}
