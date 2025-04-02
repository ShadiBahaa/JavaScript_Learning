// Get the button element with the ID 'clickButton'
const button = document.getElementById('clickButton');

// Get the box element with the ID 'hoverBox'
const box = document.getElementById('hoverBox');

// Get the display area element with the ID 'displayArea'
const displayArea = document.getElementById('displayArea');

// Function to update the text content of the display area
function showMessage(text) {
    displayArea.textContent = text; // Set the display area's text to the provided message
}

// Add a click event listener to the button
button.addEventListener('click', () => {
    showMessage('Button clicked!'); // Display a message when the button is clicked
});

// Add a mouseover event listener to the box
box.addEventListener('mouseover', () => {
    showMessage('Mouse is over the box'); // Display a message when the mouse is over the box
    box.classList.add('highlight'); // Add a 'highlight' class to the box for styling
});

// Add a mouseout event listener to the box
box.addEventListener('mouseout', () => {
    showMessage('Mouse left the box'); // Display a message when the mouse leaves the box
    box.classList.remove('highlight'); // Remove the 'highlight' class from the box
});

// Get the input field element with the ID 'inputField'
const inputField = document.getElementById('inputField');

// Add a keydown event listener to the input field
inputField.addEventListener('keydown', (event) => {
    showMessage(`Key pressed: ${event.key}`); // Display the key pressed in the input field
});

// Add a keyup event listener to the input field
inputField.addEventListener('keyup', () => {
    showMessage('Key released'); // Display a message when a key is released
});

// Add a focus event listener to the input field
inputField.addEventListener('focus', () => {
    showMessage('Input field is focused'); // Display a message when the input field gains focus
});

// Add a blur event listener to the input field
inputField.addEventListener('blur', () => {
    showMessage('Input field lost focus'); // Display a message when the input field loses focus
});

// Add an event listener for when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    showMessage('Document is ready!'); // Display a message when the DOM is ready
});

// Add an event listener for when the entire page (including images) is fully loaded
window.addEventListener('load', () => {
    showMessage('Page is fully loaded!'); // Display a message when the page is fully loaded
});

// Reassign the button variable to the element with the ID 'clickButton' (redundant, as it was already assigned earlier)
button = document.getElementById('clickButton');

// Assign an onclick event handler to the button
button.onclick = () => {
    showMessage('Clicked using event handler'); // Display a message when the button is clicked
};

// Replace the previous onclick event handler with a new one
button.onclick = () => {
    showMessage('New handler replaced the old one'); // Display a new message when the button is clicked
};
