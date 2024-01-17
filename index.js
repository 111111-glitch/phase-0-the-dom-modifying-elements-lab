// Write your code here!

// Assuming there is an existing main#main element in index.html
const mainElement = document.getElementById('main');
mainElement.remove();

// Create a new header element
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = "YOUR-NAME is the champion";

// Append the new header to the document body or another appropriate location
document.body.appendChild(newHeader);
