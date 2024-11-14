// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Add Key-Value Pairs to JavaScript Objects</h1>`;

/** TODO:
 * A foods object has been created with three entries.  Using the syntax of your choice, add three more entries to it: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.
 
 let foods = {
   apples: 25,
   oranges: 32,
   plums: 28
 };
 
 // Only change code below this line 
 
 // Only change code above this line 
 
 console.log(foods);
 */

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

// Only change code below this line
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
// Only change code above this line

console.log(foods);
