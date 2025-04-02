// Declare a variable 'day' and assign it the value 3
let day = 3;
// Declare a variable 'dayName' to store the name of the day
let dayName;

// Use a switch statement to determine the day name based on the value of 'day'
switch (day) {
    case 1: // If 'day' is 1
        dayName = "Monday"; // Assign "Monday" to 'dayName'
        break; // Exit the switch statement
    case 2: // If 'day' is 2
        dayName = "Tuesday"; // Assign "Tuesday" to 'dayName'
        break; // Exit the switch statement
    case 3: // If 'day' is 3
        dayName = "Wednesday"; // Assign "Wednesday" to 'dayName'
        break; // Exit the switch statement
    case 4: // If 'day' is 4
        dayName = "Thursday"; // Assign "Thursday" to 'dayName'
        break; // Exit the switch statement
    case 5: // If 'day' is 5
        dayName = "Friday"; // Assign "Friday" to 'dayName'
        break; // Exit the switch statement
    case 6: // If 'day' is 6
        dayName = "Saturday"; // Assign "Saturday" to 'dayName'
        break; // Exit the switch statement
    case 7: // If 'day' is 7
        dayName = "Sunday"; // Assign "Sunday" to 'dayName'
        break; // Exit the switch statement
    default: // If 'day' does not match any case
        dayName = "Invalid day"; // Assign "Invalid day" to 'dayName'
}

// Log the value of 'dayName' to the console
console.log(dayName); // Outputs: Wednesday

// Declare a variable 'fruit' and assign it the value "apple"
let fruit = "apple";
// Declare a variable 'response' to store the response message
let response;

// Use a switch statement to determine the response based on the value of 'fruit'
switch (fruit) {
    case "banana": // If 'fruit' is "banana"
        response = "Banana is good!"; // Assign a message to 'response'
        break; // Exit the switch statement
    case "apple": // If 'fruit' is "apple"
        response = "How do you like them apples?"; // Assign a message to 'response'
        // No break here, so execution will continue to the next case
    case "orange": // If 'fruit' is "orange"
        response += " Orange you glad I didn't say banana again?"; // Append a message to 'response'
        break; // Exit the switch statement
    default: // If 'fruit' does not match any case
        response = "I'm not familiar with that fruit."; // Assign a default message to 'response'
}

// Log the value of 'response' to the console
console.log(response);
// Outputs: How do you like them apples? Orange you glad I didn't say banana again?

// Declare a variable 'grade' and assign it the value "B"
let grade = "B";
// Declare a variable 'feedback' to store the feedback message
let feedback;

// Use a switch statement to determine the feedback based on the value of 'grade'
switch (grade) {
    case "A": // If 'grade' is "A"
    case "B": // If 'grade' is "B"
        feedback = "Good job!"; // Assign a positive feedback message to 'feedback'
        break; // Exit the switch statement
    case "C": // If 'grade' is "C"
        feedback = "You can do better."; // Assign a constructive feedback message to 'feedback'
        break; // Exit the switch statement
    case "D": // If 'grade' is "D"
    case "F": // If 'grade' is "F"
        feedback = "You need to study more."; // Assign a critical feedback message to 'feedback'
        break; // Exit the switch statement
    default: // If 'grade' does not match any case
        feedback = "Invalid grade"; // Assign a default message to 'feedback'
}

// Log the value of 'feedback' to the console
console.log(feedback); // Outputs: Good job!
