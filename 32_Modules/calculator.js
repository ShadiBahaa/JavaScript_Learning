// Exporting the Calculator class as the default export of this module
export default class Calculator {
    // Method to add two numbers
    add(a, b) {
        return a + b; // Returns the sum of a and b
    }

    // Method to subtract the second number from the first
    subtract(a, b) {
        return a - b; // Returns the difference of a and b
    }
}

// Exporting a constant named VERSION as a named export
export const VERSION = '1.0'; // Represents the version of the module