# js-8qo4jh

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-8qo4jh)

### [Modify an Object Nested Within an Object](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/modify-an-object-nested-within-an-object)

## PROBLEM EXPLANATION
- Remember the object you want to change is two levels deep, `dot-notation` is easier to use in this instance.
- Simply define the object and then use `dot-notation` to access the second object and finally the final element you wish to modify.

### Example
```js
let myObject = {
  level_1: "outside",
  first_level_object: {
    level_2: "2 levels deep",
    second_level_object: {
      level_3: "3 levels deep"
    }
  }
};
// The following line of code will modify the data found in level_2.
myObject.first_level_object.level_2 = "level-2 has been reached";
```
