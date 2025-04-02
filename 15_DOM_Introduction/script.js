// Log the entire document object to the console for inspection
console.log(document);

// Get the main div element by its ID 'main'
let mainDiv = document.getElementById('main');

// Log the parent element of the main div to the console
console.log('Parent element:', mainDiv.parentElement);

// Log the first child element of the main div to the console
console.log('First child:', mainDiv.firstElementChild);

// Log all child elements of the main div as an HTMLCollection
console.log('All children:', mainDiv.children);

// Log the number of child elements inside the main div
console.log('Number of children:', mainDiv.children.length);

// Reassign the mainDiv variable to the element with ID 'main' (redundant, as it was already assigned earlier)
mainDiv = document.getElementById('main');

// Log all child nodes (including text nodes, comments, etc.) of the main div
console.log('Child Nodes:', mainDiv.childNodes);

// Log only the child elements (excluding text nodes, comments, etc.) of the main div
console.log('Child Elements:', mainDiv.children);

// Change the text color of the first <h1> element on the page to blue
document.querySelector('h1').style.color = 'blue';

// Change the background color of the first paragraph with the class 'highlight' to yellow
let highlightedPara = document.querySelector('.highlight');
highlightedPara.style.backgroundColor = 'yellow';

// Append the text ' (modified)' to the content of the first <li> element on the page
document.querySelector('li').textContent += ' (modified)';
