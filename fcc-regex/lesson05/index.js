// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Extract Matches</h1>`;

/** TODO:
 * Apply the .match() method to extract the string coding.
 
 let extractStr = "Extract the word 'coding' from this string.";
 let codingRegex = /change/; // Change this line
 let result = extractStr; // Change this line
 */

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

console.log(result);
