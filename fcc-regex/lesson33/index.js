// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Remove Whitespace from Start and End</h1>`;

/** TODO:
 * Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.
 * NOTE: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.
 
 let hello = "   Hello, World!  ";
 let wsRegex = /change/;     // Change this line 
 let result = hello;       // Change this line 
 */

let hello = '   Hello, World!  ';
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line

console.log(hello.length);
console.log(result);
console.log(result.length);
