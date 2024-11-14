## SOLUTIONS 

### Alternate Solution
```js
let users = {
  Alan: { age: 27, online: true },
  Jeff: { age: 32, online: true },
  Sarah: { age: 48, online: true },
  Ryan: { age: 19, online: true} 
};

function isEveryoneHere(userObj) {
  return ["Alan", "Jeff", "Sarah", "Ryan"]
    .every(name => userObj.hasOwnProperty(name));
}
```
### Code Explanation
- Uses an array with all of the names which should be present in the object.
- The `every` method is used to validate all of names used in conjunction with the `hasOwnProperty` method result in a value of `true` being returned during each iteration.
- If at least one name is not found using the `hasOwnProperty` method, the `every` method returns `false`.

### REFERENCE LINKS
- [Array.prototype.every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

