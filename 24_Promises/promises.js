// Function to simulate toasting bread
function toastBread() {
    return new Promise((resolve, reject) => {
        console.log('Starting to toast bread...'); // Log the start of the process

        setTimeout(() => {
            // Simulate success case
            resolve('Toasted bread'); // Resolve the promise with a success message

            // Uncomment the line below to simulate a failure case
            // reject('Toaster is broken!');
        }, 2000); // Simulate a 2-second delay
    });
}

// Using the toastBread Promise
toastBread()
    .then(result => console.log(result)) // Log the success result
    .catch(error => console.log('Error:', error)); // Log any errors

console.log('Doing other things while bread is toasting...'); // Demonstrate asynchronous behavior

// Creating Promises in different states
const pendingPromise = new Promise((resolve, reject) => {
    // This Promise stays pending because resolve/reject is never called
});

const fulfilledPromise = new Promise((resolve, reject) => {
    resolve('Success!'); // Immediately resolve the promise
});

const rejectedPromise = new Promise((resolve, reject) => {
    reject('Something went wrong'); // Immediately reject the promise
}).catch(error => {
    console.log('Caught error:', error); // Handle the rejection
});

console.log('Pending Promise:', pendingPromise); // Log the pending promise
console.log('Fulfilled Promise:', fulfilledPromise); // Log the fulfilled promise
console.log('Rejected Promise:', rejectedPromise); // Log the rejected promise

// Function to simulate fetching a user from a database
function getUser(id) {
    return new Promise((resolve, reject) => {
        console.log(`Looking up user ${id} in database...`); // Log the lookup process

        setTimeout(() => {
            // Simulate a 90% success rate
            if (Math.random() > 0.1) {
                const user = {
                    id: id,
                    name: 'John Doe',
                    email: 'john@example.com'
                };
                resolve(user); // Resolve with user data
            } else {
                reject(new Error('Failed to fetch user')); // Reject with an error
            }
        }, 1500); // Simulate a 1.5-second delay
    });
}

// Using the getUser Promise
getUser(1)
    .then(user => {
        console.log('Got user:', user); // Log the user data
    })
    .catch(error => {
        console.log('Error:', error.message); // Log any errors
    })
    .finally(() => {
        console.log('Operation completed (success or failure)'); // Log completion
    });

// Function to simulate fetching a user
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: id, name: 'John' }); // Resolve with user data
        }, 1000); // Simulate a 1-second delay
    });
}

// Function to simulate fetching posts for a user
function getUserPosts(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: `${user.name}'s Post 1` },
                { id: 2, title: `${user.name}'s Post 2` }
            ]); // Resolve with an array of posts
        }, 1000); // Simulate a 1-second delay
    });
}

// Using Promise chaining to fetch user and their posts
getUser(1)
    .then(user => {
        console.log('Got user:', user); // Log the user data
        return getUserPosts(user); // Fetch the user's posts
    })
    .then(posts => {
        console.log('Got posts:', posts); // Log the posts
    })
    .catch(error => {
        console.log('Error:', error); // Handle any errors
    });

// Using Promise.all to wait for multiple promises to resolve
let promise1 = Promise.resolve(3); // A resolved promise with value 3
let promise2 = new Promise(resolve => setTimeout(() => resolve(42), 1000)); // Resolves after 1 second
let promise3 = Promise.resolve('foo'); // A resolved promise with value 'foo'

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log('All promises completed:', values); // Log all resolved values
    });

// Using Promise.race to get the fastest promise
promise1 = new Promise(resolve => setTimeout(() => resolve('Quick'), 1000)); // Resolves in 1 second
promise2 = new Promise(resolve => setTimeout(() => resolve('Slow'), 2000)); // Resolves in 2 seconds

Promise.race([promise1, promise2])
    .then(result => {
        console.log('Fastest promise was:', result); // Log the fastest resolved value
    });

// Using Promise.allSettled to handle all promises regardless of their outcome
const promises = [
    Promise.resolve(1), // A resolved promise
    Promise.reject('error'), // A rejected promise
    new Promise(resolve => setTimeout(() => resolve(3), 1000)) // Resolves after 1 second
];

Promise.allSettled(promises)
    .then(results => {
        console.log('All promises settled:', results); // Log the status and value/reason of each promise
    });

// Function to simulate a risky operation
function riskyOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('Success!'); // Resolve with success
            } else {
                reject(new Error('Operation failed')); // Reject with an error
            }
        }, 1000); // Simulate a 1-second delay
    });
}

// Handling errors at different stages of a Promise chain
riskyOperation()
    .then(result => {
        console.log('First then:', result); // Log the result
        throw new Error('Error in first then'); // Simulate an error
    })
    .catch(error => {
        console.log('First catch:', error.message); // Handle the error
        return 'Recovered from error'; // Recover and return a value
    })
    .then(result => {
        console.log('Second then:', result); // Log the recovered value
    })
    .catch(error => {
        console.log('Final catch:', error.message); // Handle any remaining errors
    });

// Examples of good and bad Promise practices

// Bad: Not returning the result of doSomething
somePromise().then(result => {
    doSomething(result);
});

// Good: Returning the result of doSomething
somePromise().then(result => {
    return doSomething(result);
});

// Bad: Not handling errors
somePromise().then(handleSuccess);

// Good: Handling errors with a catch block
somePromise()
    .then(handleSuccess)
    .catch(handleError);

// Bad: Nesting Promises
somePromise().then(result => {
    return anotherPromise().then(newResult => {
        // Nested Promises
    });
});

// Good: Flattening the Promise chain
somePromise()
    .then(result => anotherPromise())
    .then(newResult => {
        // Flat Promise chain
    });
