# js-2evzkm

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-2evzkm)

### [Match Whitespace](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-whitespace)

## PROBLEM EXPLANATION
To finish this challenge, it's necessary to use the `/s` character class in your regexp pattern.

`\s` matches a single white space character. (including space, tab, form feed, line feed and other Unicode spaces).

For example:
```js
/\s\w*/;
// matches " bar" in "foo bar".
```
**Important:** Characters are case sensitive in regexp.  `\S` matches a single character other than white space.
