// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Use an IIFE to Create a Module</h1>`;

/** TODO:
 * Create a module named funModule to wrap the two mixins isCuteMixin and singMixin.  funModule should return an object.
 * 
 let isCuteMixin = function(obj) {
   obj.isCute = function() {
     return true;
   };
 };
 let singMixin = function(obj) {
   obj.sing = function() {
     console.log("Singing to an awesome tune");
   };
 };
 */

function Bird() {
  let weight = 15;

  this.getWeight = function () {
    return weight;
  };
}

let daffy = new Bird();
console.log(daffy.getWeight());

let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log('Singing to an awesome tune');
      };
    },
  };
})();

funModule.isCuteMixin(daffy);
console.log(daffy.isCute());
funModule.singMixin(daffy);
daffy.sing();
