# js-uwqsak

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-uwqsak)

### [Specify Upper and Lower Number of Matches](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/specify-upper-and-lower-number-of-matches)

## PROBLEM EXPLANATION
Remember `/a{2,4}/` will return `true` as long ast here are between two or four `a`'s together.  It will return `true` for any string that has more than four `a`'s together as well.

All these strings will return `true`:
```js
let threeAs = "aaa";
let fourAs = "aaaa";
let sevenAs = "aaaaaaa";

let myRegex = /a{2,4}/;
myRegex.test(threeAs);      // true
myRegex.test(fourAs);       // true
myRegex.test(sevenAs);      // true
```

## HINTS
Remember to use `\s` after `Oh{3,6}` to include a white space, followed by `no` to pass all test cases.  All test cases are written using a capital O, however the test cases could also be passed by using `ignore-case`: `/oh{3,6}\sno/i`.
