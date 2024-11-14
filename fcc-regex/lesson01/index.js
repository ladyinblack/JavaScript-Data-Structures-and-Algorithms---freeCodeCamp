// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Using the Test Method</h1>`;

/** TODO:
 * Apply the regex myRegex on the string myString using the .test() method.
 
 let myString = 'Hello, World!';
 let myRegex = /Hello/;
 let result = myRegex;    // Change this line
 */

let myString = 'Hello, World!';
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

console.log(result);
