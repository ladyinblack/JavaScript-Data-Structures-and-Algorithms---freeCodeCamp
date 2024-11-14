### Alternate Solution (ES6)
If using ES6, the same can be rewritten as:
```js
let funModule = ( () => {
  return {
    isCuteMixin: (obj) => {
      obj.isCute = () => { true; };
    },
    singMixin: (obj) => {
      obj.sing = () => { 
        console.log("Singing to an awesome tune");
      }
    }
  }
})();
```
