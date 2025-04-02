// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use forEach to iterate over the array and log each number
numbers.forEach(function(number) {
    console.log(number); // Logs each number in the array
});

// Use map with an arrow function to create a new array with each number multiplied by 2
numbers.map(number => number * 2); // Returns a new array [2, 4, 6, 8, 10]

// Define a regular function that logs a greeting message
function greet(name) {
    console.log(`Hello, ${name}!`); // Logs a greeting message with the provided name
}

// Define a function that takes another function as an argument (callback)
function executeGreeting(callbackFn) {
    callbackFn('John'); // Calls the callback function with 'John' as the argument
}

// Pass the greet function as a callback to executeGreeting
executeGreeting(greet);  // Outputs: Hello, John!

// Log a message to indicate the start of the program
console.log('Starting...');

// Use setTimeout to delay execution of a function by 2 seconds
setTimeout(function() {
    console.log('2 seconds have passed!'); // Logs a message after 2 seconds
}, 2000);

// Log a message to indicate the end of the program
console.log('Finishing...');

// Outputs:
// Starting...
// Finishing...
// (2 seconds later) 2 seconds have passed!

// Define a function to simulate making breakfast with nested callbacks
function makeBreakfast() {
    console.log('Starting breakfast preparation...'); // Logs the start of breakfast preparation

    setTimeout(() => {
        console.log('1. Toasting bread...'); // Logs the start of toasting bread

        setTimeout(() => {
            console.log('2. Bread is toasted! Adding butter...'); // Logs the completion of toasting and start of adding butter

            setTimeout(() => {
                console.log('3. Butter added! Making eggs...'); // Logs the completion of adding butter and start of making eggs

                setTimeout(() => {
                    console.log('4. Eggs are ready! Breakfast is served!'); // Logs the completion of breakfast preparation
                }, 2000);  // Simulates the time taken to cook eggs
            }, 1000);  // Simulates the time taken to add butter
        }, 2000);  // Simulates the time taken to toast bread
    }, 1000);  // Simulates the initial preparation time
}

// Call the makeBreakfast function to simulate breakfast preparation
makeBreakfast();

// Define a function to simulate fetching a user from a database
function getUser(id, callback) {
    console.log(`Fetching user ${id} from database...`); // Logs the start of user fetching

    // Simulate a delay for fetching user data
    setTimeout(() => {
        // Simulate a user object
        const user = {
            id: id,
            name: 'John Doe',
            email: 'john@example.com'
        };

        // Pass the user data to the callback function
        callback(user);
    }, 1500); // Simulates a 1.5-second delay
}

// Define a function to simulate fetching posts for a user
function getUserPosts(userId, callback) {
    console.log(`Fetching posts for user ${userId}...`); // Logs the start of fetching posts

    setTimeout(() => {
        // Simulate an array of posts
        const posts = [
            { id: 1, title: 'Post 1' },
            { id: 2, title: 'Post 2' }
        ];

        // Pass the posts data to the callback function
        callback(posts);
    }, 1500); // Simulates a 1.5-second delay
}

// Use the getUser function to fetch a user and then fetch their posts
getUser(1, function(user) {
    console.log('Got user:', user); // Logs the fetched user

    // Fetch the user's posts
    getUserPosts(user.id, function(posts) {
        console.log('Got posts:', posts); // Logs the fetched posts
    });
});

// Redefine the getUser function to include error handling
function getUser(id, successCallback, errorCallback) {
    console.log(`Fetching user ${id}...`); // Logs the start of user fetching

    setTimeout(() => {
        // Simulate a random success or error
        if (Math.random() > 0.5) {
            // Simulate a successful fetch
            const user = { id: id, name: 'John' };
            successCallback(user); // Call the success callback with the user data
        } else {
            // Simulate an error
            errorCallback(new Error('Failed to fetch user')); // Call the error callback with an error object
        }
    }, 1000); // Simulates a 1-second delay
}

// Use the getUser function with success and error callbacks
getUser(1,
    // Success callback
    (user) => {
        console.log('Success:', user); // Logs the fetched user on success
    },
    // Error callback
    (error) => {
        console.log('Error:', error.message); // Logs the error message on failure
    }
);

// Example of deeply nested callbacks (callback hell)
getUser(1, (user) => {
    getUserPosts(user.id, (posts) => {
        getPostComments(posts[0].id, (comments) => {
            getCommentAuthor(comments[0].id, (author) => {
                console.log('Finally got the author!', author); // Logs the author data
            }, (error) => {
                console.log('Error getting author:', error); // Logs an error if fetching the author fails
            });
        }, (error) => {
            console.log('Error getting comments:', error); // Logs an error if fetching comments fails
        });
    }, (error) => {
        console.log('Error getting posts:', error); // Logs an error if fetching posts fails
    });
}, (error) => {
    console.log('Error getting user:', error); // Logs an error if fetching the user fails
});

// Example of attaching an event listener to a button
// Instead of writing the callback inline
button.addEventListener('click', function() {
    // 50 lines of code here...
});

// Better approach: Define the callback function separately
function handleClick() {
    // Handle click logic
}
button.addEventListener('click', handleClick); // Attach the event listener with the named function

// Example of unclear callback function
getData(function(d) {});

// Better approach: Use a named function for clarity
getData(function handleUserData(userData) {});

// Define a function to process data with success and error callbacks
function processData(data, successCb, errorCb) {
    if (!data) {
        // Call the error callback if no data is provided
        errorCb(new Error('No data provided'));
        return;
    }
    // Call the success callback with the data
    successCb(data);
}