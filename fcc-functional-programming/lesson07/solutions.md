## ALTERNATE SOLUTIONS 

### Solution 1
```js
const ratings = watchList.map(item => ({
    title: item["Title"],
    rating: item["imdbRating"]
}));
```

### Code Explanation
Using ES6 notation, each `item` in array is processed to extract `title` and `rating`.  Parentheses are needed to return an object.


### Solution 2
```js
const rating = watchList.map(({
    Title: title,
    imdbRating: rating
}) => ({ title, rating }));
```

### Code Explanation
Using parameter destructuring, the `title` and `rating` are extracted and returned in an object.  Parentheses are needed to return an object.


### Reference Links
- MDN: [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) 
- MDN: [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

