// Class representing a bank account with private fields and methods
class BankAccount {
    #balance = 0;  // Private field to store the account balance
    #transactions = []; // Private field to store transaction history

    // Constructor to initialize the account with an optional initial balance
    constructor(initialBalance) {
        if (initialBalance > 0) {
            this.#balance = initialBalance; // Set initial balance
            this.#logTransaction('initial deposit', initialBalance); // Log the initial deposit
        }
    }

    // Public method to get the current balance
    getBalance() {
        return this.#balance; // Return the private balance field
    }

    // Public method to deposit money into the account
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be positive'); // Validate deposit amount
        }

        this.#balance += amount; // Increase the balance
        this.#logTransaction('deposit', amount); // Log the deposit transaction
        return this.#balance; // Return the updated balance
    }

    // Public method to withdraw money from the account
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be positive'); // Validate withdrawal amount
        }

        if (amount > this.#balance) {
            throw new Error('Insufficient funds'); // Check for sufficient balance
        }

        this.#balance -= amount; // Decrease the balance
        this.#logTransaction('withdrawal', amount); // Log the withdrawal transaction
        return this.#balance; // Return the updated balance
    }

    // Private method to log transactions
    #logTransaction(type, amount) {
        this.#transactions.push({
            type, // Type of transaction (e.g., deposit, withdrawal)
            amount, // Amount of the transaction
            date: new Date() // Timestamp of the transaction
        });
    }

    // Public method to get a copy of the transaction history
    getTransactionHistory() {
        return [...this.#transactions]; // Return a copy to prevent external modification
    }
}

// Example usage of the BankAccount class
const account = new BankAccount(1000); // Create a new account with an initial balance of 1000

console.log(account.getBalance()); // Log the current balance (1000)
account.deposit(500);            // Deposit 500 into the account
account.withdraw(200);           // Withdraw 200 from the account
// console.log(account.#balance);   // Error! Private field cannot be accessed directly
// account.#logTransaction();       // Error! Private method cannot be accessed directly

// Class representing a shopping cart
class ShoppingCart {
    #items = new Map(); // Private field to store items in the cart

    // Method to add an item to the cart
    addItem(item, quantity = 1) {
        const currentQuantity = this.#items.get(item.id) || 0; // Get current quantity or default to 0
        this.#items.set(item.id, currentQuantity + quantity); // Update the quantity
    }

    // Method to remove an item from the cart
    removeItem(itemId, quantity = 1) {
        const currentQuantity = this.#items.get(itemId); // Get current quantity
        if (!currentQuantity) {
            throw new Error('Item not in cart'); // Throw error if item doesn't exist
        }

        if (quantity >= currentQuantity) {
            this.#items.delete(itemId); // Remove item if quantity is zero or less
        } else {
            this.#items.set(itemId, currentQuantity - quantity); // Decrease the quantity
        }
    }

    // Method to get the quantity of a specific item
    getQuantity(itemId) {
        return this.#items.get(itemId) || 0; // Return quantity or default to 0
    }

    // Method to clear all items from the cart
    clear() {
        this.#items.clear(); // Clear the cart
    }
}

// Function to test the ShoppingCart class
function runTests() {
    console.log('Testing addItem...');
    const cart = new ShoppingCart(); // Create a new shopping cart
    const item = { id: 1, name: 'Test Item' }; // Example item

    cart.addItem(item, 2); // Add 2 of the item
    console.assert(cart.getQuantity(1) === 2, 'Adding item failed'); // Assert the quantity is correct

    cart.addItem(item); // Add 1 more of the same item
    console.assert(cart.getQuantity(1) === 3, 'Adding additional quantity failed'); // Assert the updated quantity

    console.log('Testing removeItem...');
    cart.removeItem(1, 2); // Remove 2 of the item
    console.assert(cart.getQuantity(1) === 1, 'Removing items failed'); // Assert the updated quantity

    cart.removeItem(1, 5); // Remove more than available, should remove the item completely
    console.assert(cart.getQuantity(1) === 0, 'Complete removal failed'); // Assert the item is removed

    console.log('Testing error handling...');
    try {
        cart.removeItem(999); // Try to remove a non-existent item
        console.assert(false, 'Should have thrown error for non-existent item'); // This should not execute
    } catch (error) {
        console.assert(error.message === 'Item not in cart', 'Wrong error message'); // Assert the error message
    }

    console.log('All tests completed!');
}

runTests(); // Run the tests for ShoppingCart

// Base class for enabling debugging in derived classes
class Debuggable {
    constructor() {
        this.debugMode = false; // Debug mode is off by default
    }

    enableDebug() {
        this.debugMode = true; // Enable debug mode
    }

    log(...args) {
        if (this.debugMode) {
            console.log(`[${this.constructor.name}]`, ...args); // Log messages if debug mode is enabled
        }
    }
}

// Class representing a user service with debugging capabilities
class UserService extends Debuggable {
    #users = new Map(); // Private field to store users

    constructor() {
        super(); // Call the parent class constructor
        this.log('Service initialized'); // Log initialization
    }

    addUser(user) {
        this.log('Adding user:', user); // Log the user being added

        try {
            this.#validateUser(user); // Validate the user data
            this.#users.set(user.id, user); // Add the user to the map
            this.log('User added successfully'); // Log success
        } catch (error) {
            this.log('Error adding user:', error.message); // Log the error
            throw error; // Re-throw the error
        }
    }

    #validateUser(user) {
        if (!user.id || !user.name) {
            throw new Error('Invalid user data'); // Validate user data
        }
    }
}

// Example usage of UserService with debugging
const userService = new UserService();
userService.enableDebug(); // Enable debugging

userService.addUser({ id: 1, name: 'John' }); // Add a valid user
try {
    userService.addUser({ id: 2 }); // Attempt to add an invalid user
} catch (error) {
    // Handle the error
}

// Class representing a query builder for SQL-like queries
class QueryBuilder {
    #query = ''; // Private field to store the query string

    select(fields) {
        this.#query += `SELECT ${fields} `; // Add SELECT clause
        return this; // Return the instance for chaining
    }

    from(table) {
        this.#query += `FROM ${table} `; // Add FROM clause
        return this; // Return the instance for chaining
    }

    where(condition) {
        this.#query += `WHERE ${condition}`; // Add WHERE clause
        return this; // Return the instance for chaining
    }

    getQuery() {
        return this.#query; // Return the constructed query
    }
}

const query = new QueryBuilder()
    .select('*') // Select all fields
    .from('users') // From the 'users' table
    .where('age > 18') // Where age is greater than 18
    .getQuery();

console.log(query); // Log the constructed query

// Utility class for date-related operations
class DateUtils {
    static isWeekend(date) {
        const day = date.getDay(); // Get the day of the week
        return day === 0 || day === 6; // Return true if it's Saturday or Sunday
    }

    static isBusinessHour(date) {
        const hours = date.getHours(); // Get the hour of the day
        return hours >= 9 && hours < 17; // Return true if it's within business hours
    }
}

const date = new Date('2023-10-15T10:00:00'); // Example date (Sunday)
console.log(DateUtils.isWeekend(date)); // Check if it's a weekend
console.log(DateUtils.isBusinessHour(date)); // Check if it's within business hours

// Singleton class for managing configuration settings
class ConfigManager {
    static #instance = null; // Static private field to store the singleton instance
    #config = {}; // Private field to store configuration settings

    constructor() {
        if (ConfigManager.#instance) {
            throw new Error('Cannot create multiple instances of ConfigManager'); // Prevent multiple instances
        }
        ConfigManager.#instance = this; // Set the singleton instance
    }

    static getInstance() {
        if (!ConfigManager.#instance) {
            ConfigManager.#instance = new ConfigManager(); // Create the instance if it doesn't exist
        }
        return ConfigManager.#instance; // Return the singleton instance
    }

    setConfig(key, value) {
        this.#config[key] = value; // Set a configuration value
    }

    getConfig(key) {
        return this.#config[key]; // Get a configuration value
    }
}

const config1 = ConfigManager.getInstance(); // Get the singleton instance
const config2 = ConfigManager.getInstance(); // Get the same instance

config1.setConfig('theme', 'dark'); // Set a configuration value
console.log(config2.getConfig('theme')); // Get the configuration value (shared instance)
console.log(config1 === config2); // Verify that both variables reference the same instance

// Factory pattern for creating different types of users
class BasicUser {
    constructor(name) {
        this.name = name; // User's name
        this.permissions = ['read']; // Basic user permissions
    }
}

class AdminUser {
    constructor(name) {
        this.name = name; // User's name
        this.permissions = ['read', 'write', 'delete']; // Admin user permissions
    }
}

class ModeratorUser {
    constructor(name) {
        this.name = name; // User's name
        this.permissions = ['read', 'write']; // Moderator user permissions
    }
}

class UserFactory {
    static createUser(type, name) {
        switch (type.toLowerCase()) {
            case 'basic':
                return new BasicUser(name); // Create a basic user
            case 'admin':
                return new AdminUser(name); // Create an admin user
            case 'moderator':
                return new ModeratorUser(name); // Create a moderator user
            default:
                throw new Error(`User type ${type} not supported`); // Handle unsupported user types
        }
    }
}

const user1 = UserFactory.createUser('basic', 'John'); // Create a basic user
const user2 = UserFactory.createUser('admin', 'Jane'); // Create an admin user

console.log(user1.permissions); // Log the permissions of the basic user
console.log(user2.permissions); // Log the permissions of the admin user
