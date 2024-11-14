# js-pgpvkx

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-pgpvkx)

### [Set the Child's Prototype to an Instance of the Parent](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/set-the-childs-prototype-to-an-instance-of-the-parent)

## PROBLEM EXPLANATION
This challenge is no different from the last challenge, in the fact that you must create an object which inherits from the `supertype`.  Only this time the subtype `Dog` will inherit the `Animal` supertype.

Simply create a new instance of `Dog.prototype` like the following example.

```js
Bird.prototype = Object.create(Animal.prototype);
```

