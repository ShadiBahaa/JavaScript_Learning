// Get the element with the ID 'text-content'
let textElement = document.getElementById('text-content');

// Log the current text content of the element to the console
console.log(textElement.textContent);  // Outputs: "This is some text we'll modify."

// Change the text content of the element to a new string
textElement.textContent = "This text has been changed!";
// The text displayed on the page will now be updated

// Append additional text to the existing content of the element
textElement.textContent += " Added more text!";
// The text content will now include the new appended text

// Get the element with the ID 'html-content'
let htmlElement = document.getElementById('html-content');

// Log the current inner HTML of the element to the console
console.log(htmlElement.innerHTML);  // Outputs the HTML structure, including tags

// Change the inner HTML of the element to include bold and italic text
htmlElement.innerHTML = "This text is <strong>bold</strong> and this is <em>italic</em>.";
// The element will now display formatted text with bold and italic styles

// Append additional HTML content to the existing inner HTML
htmlElement.innerHTML += " <span style='color: blue;'>Blue text added!</span>";
// A new span with blue-colored text will be added to the element

// Get the image element with the ID 'demo-img'
let imgElement = document.getElementById('demo-img');
// Get the link element with the ID 'demo-link'
let linkElement = document.getElementById('demo-link');

// Log the 'src' attribute of the image element to the console
console.log(imgElement.getAttribute('src'));
// Log the 'href' attribute of the link element to the console
console.log(linkElement.getAttribute('href'));

// Set a new 'href' attribute for the link element
linkElement.setAttribute('href', '<https://www.example.com>');
// The link will now point to the specified URL

// Check if the image element has an 'alt' attribute and log the result
console.log(imgElement.hasAttribute('alt'));  // Outputs: true if 'alt' exists, false otherwise

// Remove the 'href' attribute from the link element
linkElement.removeAttribute('href');
// The link will no longer be clickable

// Change the 'src' attribute of the image element using direct property access
imgElement.src = '<https://via.placeholder.com/250>';  // Sets a new image source
// Change the 'alt' attribute of the image element using direct property access
imgElement.alt = 'A placeholder image';  // Sets a new alt text for the image

// Get the element with the ID 'style-box'
let styleBox = document.getElementById('style-box');

// Set the background color of the element to light blue
styleBox.style.backgroundColor = 'lightblue';
// Set the border of the element to a 2px solid blue line
styleBox.style.border = '2px solid blue';
// Set the border radius of the element to 10px for rounded corners
styleBox.style.borderRadius = '10px';

// Set the top margin of the element to 100px (camelCase for CSS properties with dashes)
styleBox.style.marginTop = '100px';

// Get the computed styles of the element
let computedStyle = window.getComputedStyle(styleBox);
// Log the computed background color of the element to the console
console.log(computedStyle.backgroundColor);  // Outputs the computed background color

// Get the element with the ID 'class-demo'
let classDemo = document.getElementById('class-demo');

// Add the 'highlight' class to the element
classDemo.classList.add('highlight');
// The element will now have styles associated with the 'highlight' class

// Remove the 'highlight' class from the element
classDemo.classList.remove('highlight');
// The styles associated with the 'highlight' class will be removed

// Toggle the 'highlight' class on the element (add if missing, remove if present)
classDemo.classList.toggle('highlight');
// Clicking multiple times will toggle the class on and off

// Check if the element has the 'highlight' class and log the result
console.log(classDemo.classList.contains('highlight'));  // Outputs: true or false

// Add multiple classes ('success' and 'highlight') to the element
classDemo.classList.add('success', 'highlight');
// The element will now have styles associated with both classes

// Replace the 'success' class with the 'error' class
classDemo.classList.replace('success', 'error');
// The element's styles will change from 'success' to 'error'
