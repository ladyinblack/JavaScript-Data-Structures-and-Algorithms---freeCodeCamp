// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Use Closure to Protect Properties Within an Object from Being Modified Externally</h1>`;

/** TODO:
 * Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight 15.
 * 
 function Bird() {
   this.weight = 15;
 
 
 }
 */

function Bird() {
  let weight = 15;

  this.getWeight = function () {
    return weight;
  };
}

let daffy = new Bird();
console.log(daffy.getWeight());
