// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Understand the Immediately Invoked Function Expression (IIFE)</h1>`;

/** TODO:
 * Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).
 * 
 function makeNest() {
   console.log("A cozy nest is ready");
 }
 makeNest();
 */

(function () {
  console.log('A cozy nest is ready');
})();
