// Declare a variable 'temperature' and assign it a value of 35
let temperature = 35;

// Check if the temperature is greater than 30
if (temperature > 30) {
    // If the condition is true, log "It's a hot day!" to the console
    console.log("It's a hot day!");
}

// Log "End of program" to the console, regardless of the previous condition
console.log("End of program");

// Declare a variable 'hour' and assign it a value of 14 (2 PM in 24-hour format)
let hour = 14;

// Check if the hour is less than 12 (indicating morning)
if (hour < 12) {
    // If the condition is true, log "Good morning!" to the console
    console.log("Good morning!");
} else {
    // If the condition is false (hour is 12 or greater), log "Good afternoon!" to the console
    console.log("Good afternoon!");
}

// Declare a variable 'score' and assign it a value of 85
let score = 85;

// Check if the score is greater than or equal to 90
if (score >= 90) {
    // If the condition is true, log "A grade" to the console
    console.log("A grade");
} 
// Check if the score is greater than or equal to 80 (but less than 90)
else if (score >= 80) {
    // If the condition is true, log "B grade" to the console
    console.log("B grade");
} 
// Check if the score is greater than or equal to 70 (but less than 80)
else if (score >= 70) {
    // If the condition is true, log "C grade" to the console
    console.log("C grade");
} 
// If none of the above conditions are true (score is less than 70)
else {
    // Log "Needs improvement" to the console
    console.log("Needs improvement");
}
