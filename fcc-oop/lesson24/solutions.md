### Alternate Solution 1
In ES6 syntax we can make the function a bit less verbose:
```js
function Bird() {
  let weight = 15;
  this.getWeight = () => weight;
}
```
