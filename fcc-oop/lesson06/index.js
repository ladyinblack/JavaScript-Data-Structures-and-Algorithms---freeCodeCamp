// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Use a Constructor to Create Objects</h1>`;

/** TODO:
 * Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.
 * 
 
 function Dog() {
   this.name = "Rupert";
   this.color  = "brown";
   this.numLegs = 4;
 }
 // Only change code below this line 
 */

function Dog() {
  this.name = 'Rupert';
  this.color = 'brown';
  this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog();
