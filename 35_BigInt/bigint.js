// The largest safe integer in JavaScript
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991

// What happens when we go beyond?
console.log(9007199254740991 + 1);  // 9007199254740992 (Correct result)
console.log(9007199254740991 + 2);  // 9007199254740992 (Incorrect due to precision issues)

// This is where BigInt comes in
console.log(9007199254740991n + 1n); // 9007199254740992n (Correct result using BigInt)
console.log(9007199254740991n + 2n); // 9007199254740993n (Correct result using BigInt)

// Using the `n` suffix to create a BigInt
const bigNumber = 123456789123456789n;

// Using the BigInt() function to create a BigInt from a string
const alsoBig = BigInt("123456789123456789");

// Using BigInt() to create a BigInt from a regular number
const fromNumber = BigInt(123456789);

// Note: You can't create a BigInt from a decimal number
// This will throw an error:
// const decimal = BigInt(123.45);

// Basic operations with BigInt
console.log(2n + 3n);    // 5n (Addition)
console.log(3n * 4n);    // 12n (Multiplication)
console.log(10n / 3n);   // 3n (Division rounds down)
console.log(10n % 3n);   // 1n (Modulo)

// Can't mix BigInt with regular numbers directly
try {
    console.log(2n + 3); // TypeError!
} catch (e) {
    console.log("Can't mix BigInt and regular numbers");
}

// Convert types if you need to mix BigInt and regular numbers
console.log(2n + BigInt(3));  // 5n (Convert regular number to BigInt)
console.log(Number(2n) + 3);  // 5 (Convert BigInt to regular number)

// Example class to demonstrate BigInt usage in objects
class DatabaseRecord {
    constructor(id) {
        this.id = BigInt(id); // Store the ID as a BigInt
    }

    toString() {
        return this.id.toString();  // Convert BigInt to string for display
    }

    equals(other) {
        return this.id === other.id; // Compare BigInt values
    }
}

const record = new DatabaseRecord("9007199254740993");
console.log(record.toString()); // "9007199254740993" (String representation of BigInt)

// Example class to handle large monetary amounts using BigInt
class LargeMoneyAmount {
    // Store cents as BigInt to avoid floating-point precision issues
    constructor(dollars, cents = 0) {
        this.cents = BigInt(dollars) * 100n + BigInt(cents); // Convert dollars and cents to total cents
    }

    add(other) {
        return new LargeMoneyAmount(0, this.cents + other.cents); // Add two monetary amounts
    }

    toString() {
        const wholeDollars = this.cents / 100n; // Extract whole dollars
        const remainingCents = this.cents % 100n; // Extract remaining cents
        return `$${wholeDollars}.${remainingCents.toString().padStart(2, '0')}`; // Format as a string
    }
}

const amount1 = new LargeMoneyAmount(9007199254740991); // Create a large monetary amount
const amount2 = new LargeMoneyAmount(1); // Create another monetary amount
console.log(amount1.add(amount2).toString());  // Add the amounts and display the result

// Measure the duration of a long operation using BigInt for high precision
function measureLongOperation() {
    const start = process.hrtime.bigint(); // Get the start time in nanoseconds

    // Simulate a long operation
    for (let i = 0; i < 1000000; i++) {
        // ...
    }

    const end = process.hrtime.bigint(); // Get the end time in nanoseconds
    const duration = end - start; // Calculate the duration

    console.log(`Operation took ${duration} nanoseconds`); // Display the duration
}

// Comparing BigInts
console.log(2n > 1n);   // true (Comparison works as expected)
console.log(2n === 2n); // true (Strict equality works for BigInts)
console.log(2n == 2);   // true (Loose equality allows comparison with regular numbers)
console.log(2n === 2);  // false (Strict equality fails with mixed types)

// Type checking for BigInt
const big = 123n;
console.log(typeof big); // "bigint" (BigInt has its own type)

function isBigInt(value) {
    return typeof value === 'bigint'; // Check if a value is a BigInt
}

// Can't use decimals with BigInt
const decimal = 1.5n; // Error! (BigInt doesn't support decimals)

// Can't use Math object methods with BigInt
// console.log(Math.max(1n, 2n)); // Error! (Math methods don't support BigInt)

// No unary plus operator for BigInt
console.log(+1n); // Error! (Unary plus is not supported)

// Division with BigInt always rounds toward zero
console.log(5n / 2n); // 2n (Result is rounded down)

// JSON doesn't support BigInt by default
const obj = { number: 123n };
try {
    JSON.stringify(obj); // Error! (BigInt can't be serialized to JSON)
} catch (e) {
    console.log("Can't JSON stringify BigInts directly");
}

// Good practice: Use BigInt for large numbers beyond MAX_SAFE_INTEGER
const largeNumber = 9007199254740993n;

// Unnecessary: Use regular numbers for small values
const smallNumber = 123; // Use a regular number instead of 123n

// Good practice: Convert all numbers to the same type before operations
const sum = BigInt(numberValue) + bigIntValue; // Convert regular number to BigInt

// Bad practice: Mixing types directly
const sum = numberValue + bigIntValue; // Error! (Can't mix BigInt and regular numbers)

// Example of custom JSON handling for BigInt
const data = {
    id: 123456789123456789n // BigInt value
};

// Serialize BigInt to JSON by converting it to a string
const json = JSON.stringify(data, (key, value) =>
    typeof value === 'bigint' ? value.toString() : value
);

// Parse JSON back and convert strings to BigInt
const parsed = JSON.parse(json, (key, value) =>
    /^\d+$/.test(value) ? BigInt(value) : value
);