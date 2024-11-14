// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Ignore Case While Matching</h1>`;

/** TODO:
 * Write a regex fccRegex to match freeCodeCamp, no matter its case.  Your regex should not match any abbreviations or variations with spaces.
 
 let myString = 'freeCodeCamp';
 let fccRegex = /change/; // Change this line
 let result = fccRegex.test(myString);
 */

let myString = 'freeCodeCamp';
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);

console.log(result);
