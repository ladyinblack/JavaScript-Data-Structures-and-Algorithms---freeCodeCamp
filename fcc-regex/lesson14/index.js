// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Find Characters with Lazy Matching</h1>`;

/** TODO:
 * Find the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>".  Remember the wildcard . in a regular expression matches any character.
 
 let text = '<h1>Winter is coming</h1>';
 let myRegex = /<.*>/; // Change this line
 let result = text.match(myRegex);
 */

let text = '<h1>Winter is coming</h1>';
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);

console.log(result);
