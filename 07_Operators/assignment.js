let num = 10; // Declare a variable 'num' and assign it the value 10 (basic assignment operation).

num += 5;  // Add 5 to the current value of 'num' (equivalent to: num = num + 5).
console.log(num);  // Output the updated value of 'num', which is now 15.

num -= 3;  // Subtract 3 from the current value of 'num' (equivalent to: num = num - 3).
console.log(num);  // Output the updated value of 'num', which is now 12.

num *= 2;  // Multiply the current value of 'num' by 2 (equivalent to: num = num * 2).
console.log(num);  // Output the updated value of 'num', which is now 24.

num /= 4;  // Divide the current value of 'num' by 4 (equivalent to: num = num / 4).
console.log(num);  // Output the updated value of 'num', which is now 6.

num %= 4;  // Calculate the remainder when 'num' is divided by 4 (equivalent to: num = num % 4).
console.log(num);  // Output the updated value of 'num', which is now 2.


// Chained assignment
let x, y, z; // Declare three variables 'x', 'y', and 'z' without assigning any initial values.
x = y = z = 5; // Assign the value 5 to 'z', then assign the value of 'z' to 'y', and finally assign the value of 'y' to 'x'.
console.log(x, y, z);  // Output the values of 'x', 'y', and 'z', which are all 5.
