// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Boo who</h1>`;

/** TODO:
 * Check if a value is classified as a boolean primitive.  Return `true` or `false`.
 * Boolean primitives are `true` or `false`.
 * 
 
 function booWho(bool) {
   return bool;
 }
 
 booWho(null);
 */

function booWho(bool) {
  return typeof(bool) == typeof(true);
}

console.log(booWho(null));
console.log(booWho(true));
console.log(booWho(false));
console.log(booWho([1, 2, 3]));
console.log(booWho([].slice));
console.log(booWho({ a: 1 }));
console.log(booWho(1));
console.log(booWho(NaN));
console.log(booWho('a'));
console.log(booWho('true'));
console.log(booWho('false'));
