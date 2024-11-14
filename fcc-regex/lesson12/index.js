// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Match Characters that Occur One or More Times</h1>`;

/** TODO:
 * You want to find matches when the letter s occurs one or more times in Mississippi.  Write a regex that uses the + sign.
 
 let difficultSpelling = "Mississippi";
 let myRegex = /change/;     // Change this line 
 let result = difficultSpelling.match(myRegex);
 */

let difficultSpelling = 'Mississippi';
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);

console.log(result);
