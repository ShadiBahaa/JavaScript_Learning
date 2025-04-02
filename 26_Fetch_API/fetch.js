// Basic GET request
fetch('https://jsonplaceholder.typicode.com/posts/1') // Send a GET request to fetch the post with ID 1
    .then(response => response.json())  // Convert the response to JSON format
    .then(data => console.log(data))    // Log the parsed JSON data to the console
    .catch(error => console.error('Error:', error)); // Log any errors that occur during the fetch process

// Same request using async/await
async function getPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Send a GET request asynchronously
        const data = await response.json(); // Convert the response to JSON format
        console.log(data); // Log the parsed JSON data to the console
    } catch (error) {
        console.error('Error:', error); // Log any errors that occur during the fetch process
    }
}

getPost(); // Call the async function to execute the GET request

// Function to examine the response object
async function examineResponse() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Send a GET request to fetch the post with ID 1

    console.log('Status:', response.status);  // Log the HTTP status code (e.g., 200 for success)
    console.log('OK?', response.ok);          // Log whether the response was successful (true/false)
    console.log('Status Text:', response.statusText); // Log the status text (e.g., "OK")
    console.log('Headers:', response.headers); // Log the response headers object
}

examineResponse(); // Call the function to examine the response object

// Function to create a new post using a POST request
async function createPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST', // Specify the HTTP method as POST for creating a resource
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
            },
            body: JSON.stringify({ // Convert the data to a JSON string for the request body
                title: 'My Post', // Title of the new post
                body: 'This is my new post', // Content of the new post
                userId: 1 // ID of the user creating the post
            })
        });

        const data = await response.json(); // Convert the response to JSON format
        console.log('Created post:', data); // Log the created post data to the console
    } catch (error) {
        console.error('Error creating post:', error); // Log any errors that occur during the POST request
    }
}

createPost(); // Call the function to create a new post

// Function to update an existing post using a PUT request
async function updatePost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT', // Specify the HTTP method as PUT for updating a resource
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
            },
            body: JSON.stringify({ // Convert the updated data to a JSON string for the request body
                id: 1, // ID of the post being updated
                title: 'Updated Title', // Updated title of the post
                body: 'Updated content', // Updated content of the post
                userId: 1 // ID of the user updating the post
            })
        });

        const data = await response.json(); // Convert the response to JSON format
        console.log('Updated post:', data); // Log the updated post data to the console
    } catch (error) {
        console.error('Error updating post:', error); // Log any errors that occur during the PUT request
    }
}

updatePost(); // Call the function to update the post

// Function to delete a post using a DELETE request
async function deletePost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE' // Specify the HTTP method as DELETE for removing a resource
        });

        if (response.ok) { // Check if the response indicates success
            console.log('Post deleted successfully'); // Log a success message to the console
        } else {
            console.log('Failed to delete post'); // Log a failure message to the console
        }
    } catch (error) {
        console.error('Error deleting post:', error); // Log any errors that occur during the DELETE request
    }
}

deletePost(); // Call the function to delete the post

// Function to fetch data with error handling
async function fetchWithErrorHandling(url) {
    try {
        const response = await fetch(url); // Send a GET request to the specified URL

        // Check if the response was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Throw an error if the response is not OK
        }

        const data = await response.json(); // Convert the response to JSON format
        return data; // Return the parsed JSON data
    } catch (error) {
        if (error.name === 'TypeError') { // Check if the error is a network or CORS issue
            console.log('Network error or CORS issue'); // Log a specific message for network or CORS errors
        } else {
            console.log('Other error:', error.message); // Log other types of errors
        }
        throw error; // Re-throw the error to handle it in the calling function
    }
}

// Using the error handling function to fetch data safely
async function getDataSafely() {
    try {
        const data = await fetchWithErrorHandling('https://jsonplaceholder.typicode.com/posts/1'); // Fetch data safely using the error handling function
        console.log('Data:', data); // Log the fetched data to the console
    } catch (error) {
        console.error('Failed to get data:', error); // Log any errors that occur during the fetch process
    }
}

getDataSafely(); // Call the function to fetch data safely

// Function to fetch posts with query parameters
async function getPostsWithParams() {
    // Creating URL with parameters
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts'; // Base URL for fetching posts
    const params = new URLSearchParams({ // Create query parameters
        userId: 1, // Filter posts by user ID
        _limit: 5 // Limit the number of posts to 5
    });

    try {
        const response = await fetch(`${baseUrl}?${params}`); // Send a GET request with query parameters
        const data = await response.json(); // Convert the response to JSON format
        console.log('Posts:', data); // Log the fetched posts to the console
    } catch (error) {
        console.error('Error:', error); // Log any errors that occur during the fetch process
    }
}

getPostsWithParams(); // Call the function to fetch posts with parameters

// Function to fetch a post and its comments in parallel
async function getPostAndComments(postId) {
    try {
        // Fetch the post and its comments simultaneously using Promise.all
        const [postResponse, commentsResponse] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`), // Fetch the post by its ID
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`) // Fetch the comments for the post
        ]);

        // Parse both responses into JSON format
        const post = await postResponse.json(); // Parse the post data from the response
        const comments = await commentsResponse.json(); // Parse the comments data from the response

        // Return an object containing both the post and its comments
        return {
            post, // The post data
            comments // The comments data
        };
    } catch (error) {
        console.error('Error fetching post and comments:', error); // Log any errors that occur during the fetch process
        throw error; // Re-throw the error to allow further handling by the caller
    }
}

// Using the function to fetch a post and its comments
getPostAndComments(1) // Fetch the post with ID 1 and its associated comments
    .then(data => {
        console.log('Post:', data.post); // Log the fetched post data to the console
        console.log('Comments:', data.comments); // Log the fetched comments data to the console
    })
    .catch(error => console.error('Error:', error)); // Handle and log any errors that occur during the fetch process

// Function to fetch data with basic error handling
async function fetchData(url) {
    try {
        const response = await fetch(url); // Send a GET request to the specified URL
        if (!response.ok) throw new Error('Network response was not ok'); // Check if the response is OK; throw an error if not
        return await response.json(); // Parse and return the response as JSON
    } catch (error) {
        console.error('Error:', error); // Log any errors that occur during the fetch process
        throw error; // Re-throw the error to allow further handling by the caller
    }
}

// GET for retrieving data
// POST for creating new data
// PUT/PATCH for updating data
// DELETE for removing data

const headers = {
    'Content-Type': 'application/json', // Specify the content type as JSON for the request
    // Add any other required headers
};

// Function to fetch data and manage loading state
async function fetchWithStatus() {
    let isLoading = true; // Initialize a loading state variable to true
    try {
        // Show loading state
        console.log('Loading...'); // Log a message indicating that data is being loaded

        const response = await fetch(url); // Fetch data from the given URL
        const data = await response.json(); // Parse the response as JSON

        // Handle success
        console.log('Data loaded:', data); // Log the successfully loaded data
    } catch (error) {
        // Handle error
        console.error('Error loading data:', error); // Log any errors that occur during the fetch process
    } finally {
        // Always hide loading state
        isLoading = false; // Set the loading state to false
        console.log('Loading finished'); // Log a message indicating that loading is complete
    }
}
