// Define the API URL for fetching todos from a placeholder API
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// Initialize the state to store todos. This acts as the central data store for the app.
let todoState = [];

// Define a key for storing todos in localStorage
const STORAGE_KEY = 'todos-app';

// Initialize the current filter to 'all' (show all todos by default)
let currentFilter = 'all';

// Save the current state of todos to localStorage
function saveToLocalStorage() {
    // Convert the todoState array to a JSON string and store it in localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todoState));
}

// Load todos from localStorage. If no data exists, return an empty array.
function loadFromLocalStorage() {
    // Retrieve the stored JSON string and parse it back into an array
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

// Show a loading message while data is being fetched or processed
function showLoading() {
    // Display the loading message and hide any error messages
    document.getElementById('loadingMessage').style.display = 'block';
    document.getElementById('errorMessage').style.display = 'none';
}

// Hide the loading message once the operation is complete
function hideLoading() {
    // Hide the loading message
    document.getElementById('loadingMessage').style.display = 'none';
}

// Display an error message to the user and hide it after 3 seconds
function showError(message) {
    // Set the error message text and display the error element
    const errorElement = document.getElementById('errorMessage');
    errorElement.textContent = message;
    errorElement.style.display = 'block';

    // Automatically hide the error message after 3 seconds
    setTimeout(() => {
        errorElement.style.display = 'none';
    }, 3000);
}

// Fetch todos from the API or localStorage and update the state
async function fetchTodos() {
    showLoading(); // Show loading indicator
    try {
        // Attempt to load todos from localStorage
        let todos = loadFromLocalStorage();

        // If no todos are found in localStorage, fetch them from the API
        if (todos.length === 0) {
            const response = await fetch(API_URL);

            // Check if the API response is successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Parse the response JSON and limit the todos to the first 10
            todos = await response.json();
            todos = todos.slice(0, 10);

            // Save the fetched todos to localStorage
            saveToLocalStorage();
        }

        // Update the state with the fetched todos
        todoState = todos;
        return todoState;
    } catch (error) {
        // Show an error message if fetching fails
        showError('Failed to load todos. Please refresh the page.');
        return [];
    } finally {
        // Hide the loading indicator and update the active todo count
        hideLoading();
        updateTodoCount();
    }
}

// Filter todos based on the selected filter ('all', 'active', 'completed')
function filterTodos(filter = currentFilter) {
    currentFilter = filter; // Update the current filter

    // Highlight the active filter button in the UI
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });

    // Filter the todos based on the selected filter
    const filteredTodos = todoState.filter(todo => {
        if (filter === 'active') return !todo.completed; // Show only active todos
        if (filter === 'completed') return todo.completed; // Show only completed todos
        return true; // Show all todos
    });

    // Render the filtered todos in the UI
    renderTodoList(filteredTodos);
}

// Create a DOM element for a single todo item
function createTodoElement(todo) {
    // Create a container div for the todo item
    const todoElement = document.createElement('div');
    todoElement.className = `todo-item ${todo.completed ? 'completed' : ''}`; // Add 'completed' class if applicable
    todoElement.id = `todo-${todo.id}`; // Set a unique ID for the todo element

    // Use semantic HTML for the todo item
    todoElement.innerHTML = `
        <span class="todo-text">${todo.title}</span>
        <div class="todo-actions">
            <button class="btn btn-toggle" data-action="toggle">
                ${todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button class="btn btn-delete" data-action="delete">
                Delete
            </button>
        </div>
    `;

    return todoElement; // Return the created DOM element
}

// Update the DOM for a single todo item when its data changes
function updateTodoElement(todo) {
    // Find the existing todo element in the DOM
    const todoElement = document.getElementById(`todo-${todo.id}`);
    if (todoElement) {
        // Create a new element with updated data and replace the old one
        const newTodoElement = createTodoElement(todo);
        todoElement.replaceWith(newTodoElement);
    }
}

// Render the list of todos in the DOM
function renderTodoList(todos = todoState) {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = ""; // Clear the existing list

    // If no todos exist, display a message
    if (todos.length === 0) {
        todoList.innerHTML = "<p>No todos found.</p>";
        return;
    }

    // Create and append each todo element to the list
    todos.forEach((todo) => {
        const todoElement = createTodoElement(todo);
        todoList.appendChild(todoElement);
    });
}

// Update the count of active (incomplete) todos in the UI
function updateTodoCount() {
    // Count the number of active todos
    const activeCount = todoState.filter(todo => !todo.completed).length;

    // Update the UI with the active todo count
    document.getElementById('todoCount').textContent =
        `${activeCount} item${activeCount !== 1 ? 's' : ''} left`;
}

// Clear all completed todos from the state and UI
function clearCompleted() {
    // Filter out completed todos and delete them one by one
    const completedTodos = todoState.filter(todo => todo.completed);

    completedTodos.forEach(async todo => {
        await deleteTodo(todo);
    });
}

// Handle actions (toggle or delete) on a todo item using event delegation
function handleTodoAction(event) {
    // Check if a button was clicked
    const button = event.target.closest('button');
    if (!button) return;

    // Determine the action type ('toggle' or 'delete') and the associated todo
    const action = button.dataset.action;
    const todoElement = button.closest('.todo-item');
    const todoId = parseInt(todoElement.id.replace('todo-', ''));
    const todo = todoState.find(t => t.id === todoId);

    if (!todo) return;

    // Perform the appropriate action
    if (action === 'toggle') {
        toggleTodoStatus(todo);
    } else if (action === 'delete') {
        deleteTodo(todo);
    }
}

// Toggle the completion status of a todo and update the UI
async function toggleTodoStatus(todo) {
    const todoElement = document.getElementById(`todo-${todo.id}`);
    const toggleButton = todoElement.querySelector('.btn-toggle');
    toggleButton.disabled = true; // Disable the button to prevent multiple clicks

    try {
        // Send a PATCH request to update the todo's completion status
        const response = await fetch(`${API_URL}/${todo.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                completed: !todo.completed
            })
        });

        if (!response.ok) throw new Error('Failed to update todo');

        // Update the todo's completion status in the state
        todo.completed = !todo.completed;
        updateTodoElement(todo); // Update the UI
        saveToLocalStorage(); // Save the updated state to localStorage
        updateTodoCount(); // Update the count of active todos
        filterTodos(); // Reapply the current filter
    } catch (error) {
        // Show an error message if the update fails
        showError('Failed to update todo. Please try again.');
        toggleButton.disabled = false; // Re-enable the button
    }
}

// Delete a todo from the state and UI
async function deleteTodo(todo) {
    const todoElement = document.getElementById(`todo-${todo.id}`);
    todoElement.classList.add('deleting'); // Add a 'deleting' class for animation

    try {
        // Send a DELETE request to remove the todo
        const response = await fetch(`${API_URL}/${todo.id}`, {
            method: 'DELETE'
        });

        if (!response.ok) throw new Error('Failed to delete todo');

        // Remove the todo from the state
        todoState = todoState.filter(t => t.id !== todo.id);

        // Fade out and remove the todo element from the DOM
        todoElement.style.opacity = '0';
        setTimeout(() => {
            todoElement.remove();
            if (todoState.length === 0) {
                document.getElementById('todoList').innerHTML =
                    '<p>No todos found.</p>';
            }
        }, 300);
        saveToLocalStorage(); // Save the updated state to localStorage
        updateTodoCount(); // Update the count of active todos
    } catch (error) {
        // Show an error message if the deletion fails
        showError('Failed to delete todo. Please try again.');
        todoElement.classList.remove('deleting'); // Remove the 'deleting' class
    }
}

// Initialize the form for adding new todos
function initializeForm() {
    const form = document.getElementById('todoForm');
    const input = document.getElementById('todoInput');

    // Handle form submission to create a new todo
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission

        const todoText = input.value.trim(); // Get the input value

        // Validate the input length
        if (todoText.length < 3) {
            alert('Todo must be at least 3 characters long');
            return;
        }

        await createTodo(todoText); // Create a new todo
        input.value = ''; // Clear the input field
    });
}

// Create a new todo and add it to the state and UI
async function createTodo(todoText) {
    const submitButton = document.getElementById('submitButton');
    submitButton.disabled = true; // Disable the submit button
    submitButton.classList.add('loading'); // Add a loading class

    try {
        // Prepare the new todo object
        const newTodo = {
            title: todoText,
            completed: false,
            userId: 1
        };

        // Send a POST request to create the new todo
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTodo)
        });

        if (!response.ok) {
            throw new Error('Failed to create todo');
        }

        // Parse the response and simulate a unique ID
        const createdTodo = await response.json();
        const simulatedTodo = {
            ...createdTodo,
            id: Date.now(),
        };

        // Add the new todo to the state and render it in the UI
        todoState.unshift(simulatedTodo);
        const todoElement = createTodoElement(simulatedTodo);
        const todoList = document.getElementById('todoList');

        todoElement.style.opacity = '0'; // Add with animation
        todoList.insertBefore(todoElement, todoList.firstChild);
        requestAnimationFrame(() => {
            todoElement.style.opacity = '1';
        });
        saveToLocalStorage(); // Save the updated state to localStorage
        updateTodoCount(); // Update the count of active todos
        filterTodos(); // Reapply the current filter
    } catch (error) {
        // Show an error message if the creation fails
        showError('Failed to create todo. Please try again.');
    } finally {
        submitButton.disabled = false; // Re-enable the submit button
        submitButton.classList.remove('loading'); // Remove the loading class
    }
}

// Initialize the app by setting up event listeners and loading initial data
function initializeApp() {
    initializeForm(); // Set up the form for adding todos

    // Set up filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => filterTodos(btn.dataset.filter));
    });

    // Set up the "Clear Completed" button
    document.getElementById('clearCompleted').addEventListener('click', clearCompleted);

    // Set up event delegation for todo actions
    document.getElementById('todoList').addEventListener('click', handleTodoAction);

    // Load initial todos and render them
    fetchTodos().then(() => {
        filterTodos('all'); // Apply the default filter
        updateTodoCount(); // Update the count of active todos
    });
}

// Wait for the DOM to load before initializing the app
document.addEventListener('DOMContentLoaded', initializeApp);
