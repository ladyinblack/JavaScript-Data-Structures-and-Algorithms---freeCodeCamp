// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Access an Array's Contents Using Bracket Notation</h1>`;

/** TODO:
 * In order to complete this challenge, set the 2nd position (index 1) of myArray to anything you want, besides the letter b.
 
 let myArray = ["a", "b", "c", "d"];
 // Only change code below this line 
 
 // Only change code above this line 
 console.log(myArray);
 */

let myArray = ['a', 'b', 'c', 'd'];
// Only change code below this line
myArray[1] = 'Sue';
// Only change code above this line
console.log(myArray);
