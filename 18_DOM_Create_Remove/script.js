// Create a new heading
let newHeading = document.createElement('h3'); // Create a new <h3> element
newHeading.textContent = 'New Section'; // Set the text content of the <h3> element to "New Section"

// Get the first paragraph in container1
let firstParagraph = container1.getElementsByTagName('p')[0]; // Select the first <p> element inside container1

// Insert the heading before the paragraph
container1.insertBefore(newHeading, firstParagraph); // Insert the new heading before the first paragraph in container1

// Get containers
container1 = document.getElementById('container1'); // Get the element with the ID 'container1'
let container2 = document.getElementById('container2'); // Get the element with the ID 'container2'

// Get the button we created earlier
let button = container1.querySelector('button'); // Select the first <button> element inside container1

// Move it to container2
if (button) { // Check if the button exists
    container2.appendChild(button); // Move the button from container1 to container2
    // The button will move from container1 to container2
}

// Get the image we created
let image = document.querySelector('img'); // Select the first <img> element in the document
if (image) { // Check if the image exists
    image.remove(); // Remove the image from the DOM
    // The image should disappear
}

// Get container and paragraph
let container = document.getElementById('container2'); // Get the element with the ID 'container2'
let paragraph = container.querySelector('p'); // Select the first <p> element inside container2

if (paragraph) { // Check if the paragraph exists
    container.removeChild(paragraph); // Remove the paragraph from container2
    // The paragraph in container2 should disappear
}

// Create a new list
let ul = document.createElement('ul'); // Create a new <ul> element
container2.appendChild(ul); // Append the <ul> element to container2

// Function to add a new item
function addListItem(text) { // Define a function to add a new list item
    let li = document.createElement('li'); // Create a new <li> element
    li.textContent = text; // Set the text content of the <li> element to the provided text

    // Add a delete button
    let deleteButton = document.createElement('button'); // Create a new <button> element
    deleteButton.textContent = ' x '; // Set the text content of the button to " x "
    deleteButton.style.marginLeft = '10px'; // Add some margin to the left of the button

    /* When clicked, remove the list item. This is an event that we will cover in 
    the next section!*/
    deleteButton.onclick = function() { // Add an onclick event listener to the button
        li.remove(); // Remove the <li> element when the button is clicked
    };

    li.appendChild(deleteButton); // Append the delete button to the <li> element
    ul.appendChild(li); // Append the <li> element to the <ul> element
}

// Add some items
addListItem('First item'); // Add a list item with the text "First item"
addListItem('Second item'); // Add a list item with the text "Second item"
addListItem('Third item'); // Add a list item with the text "Third item"

// Bad
// document.querySelector('#nonexistent').remove();  // Will throw error
// Attempting to remove a non-existent element directly will throw an error

// Good
let element = document.querySelector('#nonexistent'); // Try to select an element with the ID 'nonexistent'
if (element) { // Check if the element exists
    element.remove(); // Remove the element if it exists
}

// Bad
// container.appendChild('Some text');  // Will throw error
// Attempting to append a string directly will throw an error

// Good
let textNode = document.createTextNode('Some text'); // Create a text node with the content "Some text"
container.appendChild(textNode); // Append the text node to the container
// Or better:
let p = document.createElement('p'); // Create a new <p> element
p.textContent = 'Some text'; // Set the text content of the <p> element to "Some text"
container.appendChild(p); // Append the <p> element to the container
