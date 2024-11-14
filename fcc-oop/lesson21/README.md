# js-otrufu

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-otrufu)

### [Add Methods After Inheritance](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/add-methods-after-inheritance)

## PROBLEM EXPLANATION
Just like the following example, a new instance of an object - `Dog` - must becreated and the `prototype` must be set.
```js
function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```
Then a new function - `bark()` - must be aded to the `Dog` prototype.

