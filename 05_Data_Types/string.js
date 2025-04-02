// Declare a string variable using single quotes
let single = 'Single quotes work'; 

// Declare a string variable using double quotes
let double = "Double quotes work too"; 

// Declare a string variable using backticks (template literals) 
// which allow embedding expressions using ${expression}
let backticks = `Backticks allow embedded expressions ${2 + 2}`;

// Log the value of the 'single' variable to the console
// Expected output: Single quotes work
console.log(single);   

// Log the value of the 'double' variable to the console
// Expected output: Double quotes work too
console.log(double);   

// Log the value of the 'backticks' variable to the console
// Expected output: Backticks allow embedded expressions 4
console.log(backticks);

// Use the typeof operator to determine the data type of the 'single' variable
// Expected output: string
console.log(typeof single); 