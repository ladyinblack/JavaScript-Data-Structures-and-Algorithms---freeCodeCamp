// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Make Code More Reusable with the this Keyword</h1>`;

/** TODO:
 * Modify the dog.sayLegs method to remove any references to dog.  Use the duck example for guidance.
 *
 
 let dog = {
   name: 'Spot',
   numLegs: 4,
   sayLegs: function () {
     return 'This dog has ' + dog.numLegs + ' legs.';
   },
 };
 dog.sayLegs();
 */

let dog = {
  name: 'Spot',
  numLegs: 4,
  sayLegs: function () {
    return 'This dog has ' + this.numLegs + ' legs.';
  },
};
console.log(dog.sayLegs());
