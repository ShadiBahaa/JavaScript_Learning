// Select the element with the ID 'main-title'
let mainTitle = document.getElementById('main-title');
console.log(mainTitle); // Log the selected element to the console

// Change the color of the main title to blue to verify the selection
mainTitle.style.color = 'blue';

// Try to select an element with the ID 'not-here' (which doesn't exist)
let nonExistent = document.getElementById('not-here');
console.log(nonExistent); // Logs null because the element doesn't exist

// Select all elements with the class 'box' (returns an HTMLCollection, which is live-updating)
let boxes = document.getElementsByClassName('box');
console.log(boxes); // Log the HTMLCollection of elements with the class 'box'

// Loop through all elements with the class 'box' and change their border color to red
for (let box of boxes) {
    box.style.borderColor = 'red';
}

// Select all elements with the class 'special' (also returns an HTMLCollection)
let specialElements = document.getElementsByClassName('special');
// Loop through all 'special' elements and set their border to a green dashed style
for (let element of specialElements) {
    element.style.border = '2px dashed green';
}

// Select all <p> elements (returns an HTMLCollection)
let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs); // Log the HTMLCollection of <p> elements

// Loop through all <p> elements and change their font size to 32px
for (let p of paragraphs) {
    p.style.fontSize = '32px';
}

// Select the element with the ID 'container' using querySelector
let container = document.querySelector('#container');
// Add padding of 100px to the container element
container.style.padding = '100px';

// Select the first element with the class 'box' using querySelector
let firstBox = document.querySelector('.box');
// Change the background color of the first box to light blue
firstBox.style.backgroundColor = 'lightblue';

// Select the first <li> element with the class 'special' using querySelector
let specialItem = document.querySelector('li.special');
// Change the text color of the selected <li> element to red
specialItem.style.color = 'red';

// Select the first <p> element inside the element with the ID 'container'
let boxParagraph = document.querySelector('#container p');

// Select all elements with the class 'box' using querySelectorAll (returns a static NodeList)
let allBoxes = document.querySelectorAll('.box');
// Loop through all selected boxes and set their margin to 100px
allBoxes.forEach(box => {
    box.style.margin = '100px';
});

// Select all elements with the class 'special' inside the element with the ID 'list'
let specialListItems = document.querySelectorAll('#list .special');
// Loop through all selected elements and set their font weight to bold
specialListItems.forEach(item => {
    item.style.fontWeight = 'bold';
});

// Re-select all elements with the class 'box' using getElementsByClassName
boxes = document.getElementsByClassName('box');
// HTMLCollection does not have a forEach method, so this won't work:
// boxes.forEach(box => {...})

// Convert the HTMLCollection to an array and loop through it to set padding for each box
Array.from(boxes).forEach(box => {
    box.style.padding = '20px';
});

// Try to select an element with the ID 'some-id'
let element = document.getElementById('some-id');
// Check if the element exists before applying styles
if (element) {
    element.style.color = 'red'; // Change the text color to red if the element exists
} else {
    console.log('Element not found!'); // Log a message if the element doesn't exist
}
