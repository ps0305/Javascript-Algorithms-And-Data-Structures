# README

## Algorithm

Main idea is to use an array of heights to model filled blocks like skyline problem. For example,

```js
const n = 11;
const m = 13;
const heights = [7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0];
```

`heights` represents a square of size 7 is already filled at `0`.

```js
const n = 11;
const m = 13;
const heights = [7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6];
```

`heights` represents a square of size 7 at 0 and a square of size 6 at 7.

So next we are going to fill the whole block with backtracking. We try every possibilities and return minimum. Of course there should be some optimizations to speed up.

We maintain a `min`, if `nSquares` > `min`, no need to go any furthur.

For any state of heights, there could be many combinations that lead to the same state. So we can maintain a cache to know the minimum value of the same state. If nSquares of the same state is already less than nSquares, no need to go any furthur. For example, a square of 8 can come from two squares of 4 or one square of 8.

So how do we fill with squares ? We fill from bottom left. For each iteration, we find the position to fill. The position should be the index with minimum height. The size should be min of `n - heights[i]` and `end - i`. For example,

```js
const n = 11;
const m = 9;
const heights = [2, 2, 2, 2, 1, 1, 3, 3, 3];
const [start, maxSquareSize] = findPosition(n, m, heights);
// 4, 2
```
