Awesome! You have just learned a ton about arrays! This has been a fairly high level overview, 
and there is plenty more to learn about working with arrays, much of which you will see in later sections. 
But before moving on to looking at Objects, lets take one more look, 
and see how arrays can become a bit more complex than what we have seen in previous challenges.

One of the most powerful features when thinking of arrays as data structures, is that arrays can contain, 
or even be completely made up of other arrays. We have seen arrays that contain arrays in previous challenges, 
but fairly simple ones. However, arrays can contain an infinite depth of arrays that can contain other arrays, 
each with their own arbitrary levels of depth, and so on. In this way, an array can very quickly become very complex data structure, 
known as a multi-dimensional, or nested array. Consider the following example:

```js
let nestedArray = [ // top, or first level - the outer most array
  ['deep'], // an array within an array, 2 levels of depth
  [
    ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
  ],
  [
    [
      ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
    ],
    [
      [
        ['deepest-est?'] // an array nested 5 levels deep
      ]
    ]
  ]
];
```
While this example may seem convoluted, this level of complexity is not unheard of, or even unusual, 
when dealing with large amounts of data.

However, we can still very easily access the deepest levels of an array this complex with bracket notation:

console.log(nestedArray[2][1][0][0][0]);
// logs: deepest-est?
And now that we know where that piece of data is, we can reset it if we need to:

nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
// now logs: deeper still

We have defined a variable, myNestedArray, set equal to an array. 
Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, 
so that it has exactly five levels of depth (remember, the outer-most array is level 1). 
Somewhere on the third level, include the string 'deep', on the fourth level, include the string 'deeper', 
and on the fifth level, include the string 'deepest'.

```js
let myNestedArray = [
    // change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    [['loop'],['deep'], ['shift', 6, 7, 1000, 'method']],
    [[['concat'],['deeper'], [false, true, 'spread', 'array']],
    [[['mutate', 1327.98],['deepest', 'splice', 'slice', 'push']]
    ]]
    // change code above this line
  ];
