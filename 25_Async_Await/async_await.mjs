// Using Promises
function getUser(id) {
    // Returns a Promise that resolves with a user object after 1 second
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: id, name: 'John' }); // Simulated user data
        }, 1000); // Simulate delay
    });
}

// Promise way
getUser(1) // Call the function with user ID 1
    .then(user => console.log(user)); // Log the user object when the Promise resolves

// Async/await way
async function displayUser() {
    // Async function to fetch and display user data
    const user = await getUser(1); // Wait for the Promise to resolve
    console.log(user); // Log the user object
}

displayUser(); // Call the async function

// Regular function
async function getData() {
    // Placeholder for async function code
}

// Arrow function
getData = async () => {
    // Placeholder for async function code
};

// Method in a class or object
const obj = {
    async getData() {
        // Placeholder for async function code
    }
};

async function greet() {
    // Async function that returns a string wrapped in a Promise
    return 'Hello'; // Automatically wrapped in a resolved Promise
}

// These are equivalent:
greet().then(message => console.log(message)); // Logs 'Hello' using Promise chaining
console.log(await greet()); // Logs 'Hello' using await (must be inside an async function)

function getUserData(id) {
    // Returns a Promise that resolves or rejects based on the ID
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id < 0) {
                reject(new Error('Invalid ID')); // Reject if ID is invalid
            } else {
                resolve({ id: id, name: 'John' }); // Resolve with user data
            }
        }, 1000); // Simulate delay
    });
}

async function fetchUserData(id) {
    // Async function to fetch user data with error handling
    try {
        console.log('Fetching user data...'); // Log start of operation
        const user = await getUserData(id); // Wait for user data
        console.log('User:', user); // Log the user data
    } catch (error) {
        console.log('Error:', error.message); // Log any errors
    } finally {
        console.log('Operation complete'); // Always log completion
    }
}

// Try with valid and invalid IDs
fetchUserData(1); // Fetch user data with valid ID
fetchUserData(-1); // Fetch user data with invalid ID (triggers error)

async function getDataSequentially() {
    // Async function to perform sequential operations
    console.log('Starting sequential operations...'); // Log start

    // These run one after another
    const result1 = await operation1(); // Wait for operation1 to complete
    console.log('Result 1:', result1); // Log result of operation1

    const result2 = await operation2(result1); // Wait for operation2 to complete
    console.log('Result 2:', result2); // Log result of operation2

    const result3 = await operation3(result2); // Wait for operation3 to complete
    console.log('Result 3:', result3); // Log result of operation3

    return result3; // Return final result
}

async function getDataParallel() {
    // Async function to perform parallel operations
    console.log('Starting parallel operations...'); // Log start

    // These run at the same time
    const results = await Promise.all([
        operation1(), // Start operation1
        operation2(), // Start operation2
        operation3()  // Start operation3
    ]);

    console.log('All results:', results); // Log all results
    return results; // Return all results
}

// Helper functions for the example
function operation1() {
    // Simulates an asynchronous operation
    return new Promise(resolve =>
        setTimeout(() => resolve('Result 1'), 1000)); // Resolves after 1 second
}

function operation2() {
    // Simulates an asynchronous operation
    return new Promise(resolve =>
        setTimeout(() => resolve('Result 2'), 1000)); // Resolves after 1 second
}

function operation3() {
    // Simulates an asynchronous operation
    return new Promise(resolve =>
        setTimeout(() => resolve('Result 3'), 1000)); // Resolves after 1 second
}

// Run these functions separately to see the difference
getDataSequentially(); // Runs operations sequentially
getDataParallel(); // Runs operations in parallel

async function processUserData(userId) {
    // Async function to process user data
    try {
        // Get user
        const user = await getUser(userId); // Wait for user data
        console.log('Got user:', user); // Log user data

        // Get their posts in parallel with their friends
        const [posts, friends] = await Promise.all([
            getUserPosts(userId), // Fetch user posts
            getUserFriends(userId) // Fetch user friends
        ]);

        // Process the data
        const processedData = {
            user, // User data
            posts, // User posts
            friends, // User friends
            timestamp: new Date() // Current timestamp
        };

        // Save the results
        await saveProcessedData(processedData); // Wait for save operation
        console.log('Data processed and saved!'); // Log success

        return processedData; // Return processed data

    } catch (error) {
        console.error('Error processing user data:', error); // Log error
        throw error; // Re-throw to handle it in the calling function
    }
}

// Helper functions (simulated)
function getUser(id) {
    // Simulates fetching user data
    return new Promise(resolve =>
        setTimeout(() => resolve({ id, name: 'John' }), 1000)); // Resolves after 1 second
}

function getUserPosts(userId) {
    // Simulates fetching user posts
    return new Promise(resolve =>
        setTimeout(() => resolve(['Post 1', 'Post 2']), 1000)); // Resolves after 1 second
}

function getUserFriends(userId) {
    // Simulates fetching user friends
    return new Promise(resolve =>
        setTimeout(() => resolve(['Friend 1', 'Friend 2']), 1000)); // Resolves after 1 second
}

function saveProcessedData(data) {
    // Simulates saving processed data
    return new Promise(resolve =>
        setTimeout(() => resolve('Saved'), 1000)); // Resolves after 1 second
}

// Using the function
processUserData(1) // Process user data for user ID 1
    .then(result => console.log('Final result:', result)) // Log final result
    .catch(error => console.error('Failed:', error)); // Log any errors

// Wrong
async function example() {
    const result = getData(); // Oops! Forgot await
    console.log(result); // Logs Promise object, not the data
}

// Correct
async function example() {
    const result = await getData(); // Wait for the Promise to resolve
    console.log(result); // Logs the actual data
}

// Wrong
function example() {
    const data = await getData(); // Error: await only valid in async function
}

// Correct
async function example() {
    const data = await getData(); // Wait for the Promise to resolve
}

// Wrong
async function example() {
    const data = await riskyOperation(); // Might throw error!
}

// Correct
async function example() {
    try {
        const data = await riskyOperation(); // Wait for the operation
    } catch (error) {
        console.error('Something went wrong:', error); // Handle the error
    }
}

// Not clear
async function getData() {}

// Better
async function fetchUserProfile() {}

// Example of error handling and re-throwing
async function processData() {
    try {
        const data = await fetchData(); // Fetch data
        return processResult(data); // Process and return result
    } catch (error) {
        logError(error); // Log the error
        throw new Error('Data processing failed: ' + error.message); // Re-throw with additional context
    }
}

// Sequential (slower)
const users = await getUsers(); // Fetch users
const posts = await getPosts(); // Fetch posts

// Parallel (faster)
const [users, posts] = await Promise.all([
    getUsers(), // Fetch users
    getPosts()  // Fetch posts
]);
