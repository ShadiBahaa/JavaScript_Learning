// Get the input element with the ID 'nameInput'
let nameInput = document.getElementById('nameInput');

// Add an event listener for the 'keydown' event on the input element
nameInput.addEventListener('keydown', (event) => {
    // Log the entire event object to inspect its properties
    console.log('Event object:', event);

    // Log the key that was pressed
    console.log('Key pressed:', event.key);

    // Log the target element that triggered the event
    console.log('Target element:', event.target);

    // Log the type of event that occurred
    console.log('Type of event:', event.type);

    // Log the current value of the input field
    console.log('Current input value:', event.target.value);
});

// Add an event listener for the 'input' event on the input element
nameInput.addEventListener('input', (event) => {
    // Get the current value of the input field using the event target
    const value1 = event.target.value;

    // Get the current value of the input field directly from the element
    const value2 = nameInput.value;

    // Log the value entered by the user
    console.log('User typed:', value1);
});

// Get the form element and other related elements by their IDs
let form = document.getElementById('myForm');
nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');

// Add an event listener for the 'submit' event on the form
form.addEventListener('submit', (event) => {
    let isValid = true; // Flag to track form validity

    // Prevent the default form submission behavior
    event.preventDefault();

    // Hide any previous error messages
    nameError.style.display = 'none';
    emailError.style.display = 'none';

    // Validate the name input field
    if (nameInput.value.trim() === '') {
        nameError.style.display = 'block'; // Show error message
        isValid = false; // Mark form as invalid
    }

    // Perform basic email validation (check for '@' symbol)
    if (!emailInput.value.includes('@')) {
        emailError.style.display = 'block'; // Show error message
        isValid = false; // Mark form as invalid
    }

    // If the form is valid, log a success message
    if (isValid) {
        console.log('Form is valid, sending data...');
        // Typically, you would send the form data to a server here
    }
});

// Get the custom context menu element by its ID
const customMenu = document.getElementById('customMenu');

// Add an event listener to hide the custom menu when clicking anywhere on the document
document.addEventListener('click', () => {
    customMenu.style.display = 'none'; // Hide the custom menu
});

// Get the modal and container elements by their IDs
let modal = document.getElementById('simpleModal');
let container = document.getElementById('mainContainer');

// Add an event listener for clicks on the modal
modal.addEventListener('click', (event) => {
    console.log('Modal clicked'); // Log when the modal is clicked
});

// Add an event listener for clicks on the container
container.addEventListener('click', () => {
    console.log('Container clicked'); // Log when the container is clicked
});

// Add an event listener for clicks on the document body
document.body.addEventListener('click', () => {
    console.log('Body clicked'); // Log when the body is clicked
});

// Add another event listener for clicks on the modal
modal.addEventListener('click', (event) => {
    // Stop the click event from propagating to parent elements
    event.stopPropagation();
    console.log('Modal clicked, event stopped here');
});

// Add an event listener for clicks on the document
document.addEventListener('click', () => {
    console.log('Document clicked - modal should close'); // Log when the document is clicked
});

// Add an event listener to the container for event delegation
container.addEventListener('click', (event) => {
    // Check if the clicked element has the 'delete-btn' class
    if (event.target.classList.contains('delete-btn')) {
        // Stop the event from propagating to parent elements
        event.stopPropagation();

        // Remove the parent element of the clicked delete button
        event.target.parentElement.remove();
        return; // Exit the function
    }

    // Check if the clicked element has the 'item' class
    if (event.target.classList.contains('item')) {
        // Log when an item is clicked (not triggered if delete button is clicked)
        console.log('Item clicked');
    }
});

// Add an event listener for the 'input' event on the name input field
nameInput.addEventListener("input", (event) => {
    // Log the current value of the input field
    console.log("Current value:", event.target.value);

    // Log the same value using the input element directly
    console.log("Same value:", nameInput.value);

    // Validate the input length
    if (event.target.value.length < 3) {
        nameError.textContent = "Name must be at least 3 characters"; // Show error message
        nameError.style.display = "block";
    } else {
        nameError.style.display = "none"; // Hide error message
    }

    // Transform the input value to uppercase
    event.target.value = event.target.value.toUpperCase();
});

// Add an event listener for the 'change' event on the name input field
nameInput.addEventListener("change", (event) => {
    // Log the final value when the input loses focus
    console.log("Final value:", event.target.value);
});

// Add an event listener for the 'keyup' event on the name input field
nameInput.addEventListener("keyup", (event) => {
    // Check if the 'Enter' key was pressed
    if (event.key === "Enter") {
        // Log the value of the input field
        console.log("Enter pressed, value is:", event.target.value);
    }
});

// Add an event listener for the 'submit' event on the form
form.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
});
