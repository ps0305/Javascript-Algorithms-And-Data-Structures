# README

## Algorithm

Define helper as a function returning maximum score that first player can get. So score2 is equal to sum - score1.

```js
const score1 = helper(i, j);
const score2 = sum - score1;
```

```js
helper(i, j) = Math.max(
  nums[i] + Math.min(helper(i + 1, j - 1), helper(i + 2, j)),
  nums[j] + Math.min(helper(i + 1, j - 1), helper(i, j - 2)),
);
```

Because every player plays to maximize his score, player1 can get only minimum in next round.
