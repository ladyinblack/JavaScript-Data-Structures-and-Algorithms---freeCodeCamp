# js-o6bwzt

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-o6bwzt)

### [Use Closure to Protect Properties Within an Object from Being Modified Externally](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-closure-to-protect-properties-within-an-object-from-being-modified-externally)

## PROBLEM EXPLANATION
Just like in the example given, rather than declaring the `weight` variable with the `this` keyword, the `let` keyword must be used to declare it as a private variable.  This way it can only be accessed inside the `Bird` function.  The `getWeight` method must then be added inside the `Bird` function to acess the `weight` variable.

