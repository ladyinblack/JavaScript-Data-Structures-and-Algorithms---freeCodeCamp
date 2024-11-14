// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Check if an Object has a Property</h1>`;

/** TODO:
 * Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.
 
 let users = {
   Alan: {
     age: 27,
     online: true 
   },
   Jeff: {
     age: 32,
     online: true 
   },
   Sarah: {
     age: 48,
     online: true 
   },
   Ryan: {
     age: 19,
     online: true 
   }
 };
 
 function isEveryoneHere(userObj) {
   // Only change code below this line 
 
   // Only change code above this line 
 }
 
 console.log(isEveryoneHere(users));
 */

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  if (
    userObj.hasOwnProperty('Alan') &&
    userObj.hasOwnProperty('Jeff') &&
    userObj.hasOwnProperty('Sarah') &&
    userObj.hasOwnProperty('Ryan')
  ) {
    return true;
  }
  return false;
  // Only change code above this line
}

console.log(isEveryoneHere(users));
