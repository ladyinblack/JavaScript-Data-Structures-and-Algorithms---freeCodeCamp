// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Combine Arrays with the Spread Operator</h1>`;

/** TODO:
 * We have defined a function, spreadOut, that returns the variable sentence.  Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'function'].
 
 function spreadOut() {
   let fragment = ['to', 'code'];
   let sentence;       // Change this line 
   return sentence;
 }
 
 console.log(spreadOut());
 */

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
  return sentence;
}

console.log(spreadOut());
