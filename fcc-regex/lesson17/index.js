// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Match Ending String Patterns</h1>`;

/** TODO:
 * Use the anchor character ($) to match the string caboose at the end of the string caboose.
 
 let caboose = "The last car on a train is the caboose";
 let lastRegex = /change/;     // Change this line 
 let result = lastRegex.test(caboose);
 */

let caboose = 'The last car on a train is the caboose';
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

console.log(result);
