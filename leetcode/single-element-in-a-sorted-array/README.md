# README

## Algoritm

```js
// index 0,1,2, 3,4, 5,6,7,8
[1, 2, 2, 3, 3, 4, 4, 5, 5];
```

Use binary search to find it. For every iteration, `m` points to the index of first element of the middle pair. In the above case, `m` is equal to `3`. Then check the length of left side and right side. In the above case, left length is 3, right length is 6. If a single element exists, the length of that side should be odd number. So we can narrow down the search space to the side with length of odd number.
