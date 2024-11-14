// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Generate an Array of All Object Keys with Object.keys()</h1>`;

/** TODO:
 * Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.
 
 let users = {
   Alan: {
     age: 27,
     online: false,
   },
   Jeff: {
     age: 32,
     online: true,
   },
   Sarah: {
     age: 48,
     online: false,
   },
   Ryan: {
     age: 19,
     online: true,
   },
 };
 
 function getArrayOfUsers(obj) {
   // Only change code below this line 
 
   // Only change code above this line 
 }
 
 console.log(getArrayOfUsers(users));
 */

let users = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(obj);
  // Only change code above this line
}

console.log(getArrayOfUsers(users));
