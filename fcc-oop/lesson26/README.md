# js-skqm9o

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-skqm9o)

### [Use an IIFE to Create a Module](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-an-iife-to-create-a-module)

## HINTS
### Hint 1
Both `Mixin`'s must be wrapped in a new `funModule` so an easy starting point is to comment out all the code so far.
```js
/*
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
```
Then below start writing your new `funModule` code.  Inside the new module, you need to write a return statement to return both `Mixin` code blocks.  Simply copy both original `Mixin` code blocks into your new module code, but remember to separate both mixins with a `,`.

