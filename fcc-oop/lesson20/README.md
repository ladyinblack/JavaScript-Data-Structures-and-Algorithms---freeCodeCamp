# js-3y1zcq

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-3y1zcq)

### [Reset an Inherited Constructor Property](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/reset-an-inherited-constructor-property)

## PROBLEM EXPLANATION
The `duck` and `beagle` objects have been programmed to inherit the `supertypes` constructor properties.  To overwrite this two lines of code will have to be written to set the constructors to the desired constructor `Bird` and `Dog`.  The following code demonstrates how this can be achieved.
```js
Bird.prototype.constructor = Bird;
```

