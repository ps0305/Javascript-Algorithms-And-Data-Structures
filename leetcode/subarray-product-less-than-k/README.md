# README

## Algorithm

```js
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
k = 100;

subarray = [1, 2, 3, 4];
// => [[1,2,3,4], [2,3,4], [3,4], [4]]
```

1. If a subarray product is less than k, then all of its subarrays are less than k.
2. Number of subarrays containing last element is equal to the length of subarray.

Iterate over array, for each element, we find the longest valid subarray containing ith element. Because of property 2, we can add `subarray.length` to output.
