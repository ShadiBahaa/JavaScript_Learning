// Initialize a variable `count` with a value of 0.
// This variable will act as a counter for the while loop.
let count = 0;

// Start a while loop that will execute as long as the condition `count < 5` is true.
// The loop will stop once `count` reaches 5.
while (count < 5) {
    // Log the current value of `count` to the console, prefixed with the string "Count is: ".
    console.log("Count is: " + count);
    
    // Increment the value of `count` by 1 after each iteration of the loop.
    // This ensures that the loop progresses and eventually terminates when `count` reaches 5.
    count++;
}