// Synchronous operations happen in sequence
console.log('Starting...'); // Logs "Starting..." to the console immediately
console.log('Doing something...'); // Logs "Doing something..." to the console immediately
console.log('Finishing...'); // Logs "Finishing..." to the console immediately

// Outputs in order:
// Starting...
// Doing something...
// Finishing...

console.log('Starting...'); // Logs "Starting..." to the console immediately

// setTimeout simulates an operation that takes time
setTimeout(() => {
    console.log('Doing something...'); // Logs "Doing something..." after 2 seconds
}, 2000);  // Wait for 2 seconds before executing the callback

console.log('Finishing...'); // Logs "Finishing..." to the console immediately

// Outputs:
// Starting...
// Finishing...
// (2 seconds later) Doing something...

// Imagine this is synchronous
function getDataFromServer() {
    // Simulates a blocking operation that freezes the program for 5 seconds
    const startTime = Date.now(); // Records the current time
    while(Date.now() - startTime < 5000) {} // Busy-wait loop for 5 seconds
    return "Data from server"; // Returns a string after the blocking operation
}

console.log('Starting to get data...'); // Logs "Starting to get data..." to the console
const data = getDataFromServer();  // Calls the blocking function, freezing the program
console.log('Got data:', data); // Logs the returned data after the blocking operation
console.log('This message is delayed!'); // This message is delayed due to the blocking function

console.log('Starting to get data...'); // Logs "Starting to get data..." to the console

// Simulating server request with setTimeout
setTimeout(() => {
    console.log('Got data: Data from server'); // Logs "Got data: Data from server" after 5 seconds
}, 5000); // Wait for 5 seconds before executing the callback

console.log('This message appears immediately!'); // Logs this message immediately, without waiting

// Timers
setTimeout(() => {
    console.log('Timer finished!'); // Logs "Timer finished!" after 1 second
}, 1000); // Wait for 1 second before executing the callback

// User Events (we saw these in the Events module)
/*button.addEventListener('click', () => {
    console.log('Button clicked!'); // Logs "Button clicked!" when the button is clicked
});*/

// Getting data from a server (we'll cover this in detail later)
/*fetch('<https://api.example.com/data>')
    .then(response => response.json()) // Parses the response as JSON
    .then(data => console.log(data)); // Logs the fetched data to the console
*/

// Reading files (in Node.js)
/*fs.readFile('file.txt', (error, data) => {
    if (error) console.error(error); // Logs an error if one occurs
    console.log(data); // Logs the file content if no error occurs
});*/

console.log('1'); // Logs "1" to the console immediately (synchronous)

setTimeout(() => {
    console.log('2'); // Logs "2" after a delay of 0 milliseconds (asynchronous)
}, 0); // Executes the callback after the current call stack is cleared

console.log('3'); // Logs "3" to the console immediately (synchronous)

// Outputs:
// 1
// 3
// 2
