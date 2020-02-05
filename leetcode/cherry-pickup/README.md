# README

## Algorithm

Two people started at (0, 0) toward (n - 1, n - 1)

`dp[i][j][x]` => represents max value of one at (i, j) and the other at (x, y)

Since two people walk at the same speed, we have this equation.

```
i + j = x + y
```

So if we have i, j and x, then we can derive y.

Each person comes to its current location from either top or left. So there are 4 possible combinations, .i.e, `(top, top)`, `(top, left)`, `(left, top)`, `(left, left)`

```
dp[i][j][x] = grid[i][j] + grid[x][y] + max of {(top, top), (top, left), (left, top), (left, left)}
```

One thing to notice, `if (i, j) === (x, y)`, `grid[i][j] + grid[x][y]` will be added twice. So we need to check that case.

```
dp[i][j][x] = !(i === j && x === y) ? grid[i][j] + grid[x][y] : grid[i][j] + max of {(top, top), (top, left), (left, top), (left, left)}
```
