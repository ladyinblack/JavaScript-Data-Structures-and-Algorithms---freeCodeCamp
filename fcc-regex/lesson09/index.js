// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Match Letters of the Alphabet</h1>`;

/** TODO:
 * Match all the letters in the string quoteSample.
 * NOTE: Be sure to match both uppercase and lowercase letters.
 
 let quoteSample = "The quick brown fox jumps over hte lazy dog."
 let alphabetRegex = /change/;       // Change this line 
 let result = alphabetRegex;       // Change this line 
 */

let quoteSample = 'The quick brown fox jumps over hte lazy dog.';
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

console.log(result);
