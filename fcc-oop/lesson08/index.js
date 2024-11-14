// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Verify an Object's Constructor with instanceof</h1>`;

/** TODO:
 * Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms.  Then, use instanceof to verify that it is an instance of House.
 * 
 
 function House(numBedrooms) {
   this.numBedrooms = numBedrooms;
 }
 
 // Only change code below this line 
 */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
/* Created with using constructor */
let myHouse = new House(3);
console.log(myHouse instanceof House);

/* Created without using constructor */
let myHouse1 = {
  numBedrooms: 3,
};
console.log(myHouse1 instanceof House);
