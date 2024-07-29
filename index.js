// ADDING ITEMS TO START AND END OF LIST
let list = document.getElementsByTagName('ul')[0];  // Get the <ul> element

// ADD NEW ITEM TO END OF LIST
let newItemLast = document.createdElement('li');    // Create element
let newTextLast = document.createTextNode('cream'); // Create text node
newItemLast.appendChild(newTextLast);               // Add text node to element
list.appendChild(newItemLast);                      // Add element end of list

// ADD NEW ITEM START OF LIST
let newItemFirst = document.createElement('li');   // Create element
let newTextFirst = document.createTextNode('kale'); // Create text node
newItemFirst.appendChild(newTextFirst);             // Add text node to element
list.insertBefore(newItemFirst, list.firstChild);   // Add element to list

let listItems = document.querySelectorAll('li');    // All <li> elements

// ADD A CLASS OF COOL TO ALL LIST ITEMS
let i;
for (i = 0; i < listItems.length; i++) {            // Loop through elements
    listItems[i].className = 'cool';                // Change class to cool
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
let heading = document.querySelector('h2');         // h2 element
let headingText = heading.firstChild.nodeValue;     // h2 text
let totalItems = listItems.length;                  // no. of <li> elements
let newHeading = headingText + '<span>' + totalItems + '<span>';    // Content
heading.innerHTML = newHeading;                     // Update h2
