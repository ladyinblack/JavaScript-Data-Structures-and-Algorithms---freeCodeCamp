// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Match Literal Strings</h1>`;

/** TODO:
 * Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.
 
 let waldoIsHiding = 'Somewhere Waldo is hiding in this text.';
 let waldoRegex = /search/; // Change this line
 let result = waldoRegex.test(waldoIsHiding);
 */

let waldoIsHiding = 'Somewhere Waldo is hiding in this text.';
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

console.log(result);
