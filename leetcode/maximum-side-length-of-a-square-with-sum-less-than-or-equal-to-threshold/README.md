# README

## Algorithm

```js
[
  [1, 1, 3, 2, 4, 3, 2],
  [1, 1, 3, 2, 4, 3, 2],
  [1, 1, 3, 2, 4, 3, 2],
];
```

Minimum possible length is `1`
Maximum possible length is `Math.min(m, n)`

So the maximum valid length is between min and max.

If 2 is a valid length, then any number less than 2 is also a valid length.
If 4 is not a valid length, then any number greater than 4 is also not a valid length.
So suppose that index number is length. Value is valid or not. Then we can see following result.

```js
[true, true, true, false, false];
```

So we can use binary search to find the first invalid length.
