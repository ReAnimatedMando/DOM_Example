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
