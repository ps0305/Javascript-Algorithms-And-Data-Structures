# README

## Algorithm

```js
// prettier-ignore
const arr = [
  [[0, 0], [3, 2], [5, 0]],
  [[0, 0], [2, 1], [6, 10]],
  [[0, 0]],
]
```

For each position in the array, we store an array of `[snapId, val]`.

set:
Use `lowerBound` to find that at position `index`, is `snapId` exists ?
If not, push `[snapId, val]` to that position.
Else set `val` to it.

get:
Use `lowerBound` to find `snapId` that is equal to or greater than `snap_id`.
