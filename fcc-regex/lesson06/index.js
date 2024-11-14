// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Find More Than the First Match</h1>`;

/** TODO:
 * Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.
 * NOTE: You can have multiple flags on your regex like /search/gi.
 
 let twinkleStar = 'Twinkle, twinkle, little star';
 let starRegex = /change/; // Change this line
 let result = twinkleStar; // Change this line
 */

let twinkleStar = 'Twinkle, twinkle, little star';
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

console.log(result);
