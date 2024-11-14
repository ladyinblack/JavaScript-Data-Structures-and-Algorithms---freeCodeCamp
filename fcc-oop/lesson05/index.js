// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Define a Constructor Function</h1>`;

/** TODO:
 * Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, and a number, respectively.
 *
 */

function Dog() {
  this.name = 'Fido';
  this.color = 'blue';
  this.numLegs = 4;
}
