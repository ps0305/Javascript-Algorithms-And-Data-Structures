# README

## Algorithm

We are looking for k closet elements to x. If x is in the range of sorted array,
it would be between arr[i] ~ arr[i + k]. So we can use binary search to guess the
value of arr[i] and move left right pointer depending on the result of comparison.

```js
const mid = Math.floor((left + right) / 2);
// [arr[mid],...,x,...,arr[mid + k]]
```

```js
if (x - arr[mid] > arr[mid + k] - x) {
  // move mid toward right to get closer to x
  left = mid + 1;
} else {
  // move mid toward left to get further to x
  right = mid;
}
```
