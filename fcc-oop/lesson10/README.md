# js-fjcyu6

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-fjcyu6)

### [Use Prototype Properties to Reduce Duplicate Code](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-prototype-properties-to-reduce-duplicate-code)

## PROBLEM EXPLANATION
The `prototype` property allows you to add new properties to an object constructor from outside the original code block.  The prototype property also allows you to add new functions to the objects constructor.  The following code demonstrates how to use `.prototype` on an object to create a new property in the constructor.

**Example:**
```js
Obj.prototype.newProperty = "New Property!";
```
Using this logic, simply create a new `prototype` property for `numLegs`.  The test cases can be passed by replacing the `Bird` object with the `Dog` object in the example given - `Bird.prototype.numLegs = 2;`.

