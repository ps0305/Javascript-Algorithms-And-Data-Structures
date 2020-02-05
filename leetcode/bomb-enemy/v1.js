/**
 * @param {character[][]} grid
 * @return {number}
 */
/*
  Time Complexity: O(m * n)
  Space Complexity: O(m * n)
*/
var maxKilledEnemies = function(grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  const m = grid.length;
  const n = grid[0].length;
  const dp = [...new Array(m)].map(() => [...new Array(n)].map(() => new Array(4).fill(0)));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j][0] = helper(grid, m, n, dp, i, j, 0);
      dp[i][j][3] = helper(grid, m, n, dp, i, j, 3);
    }
  }
  let max = 0;
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      dp[i][j][1] = helper(grid, m, n, dp, i, j, 1);
      dp[i][j][2] = helper(grid, m, n, dp, i, j, 2);
      if (grid[i][j] === '0') {
        const sum = dp[i][j].reduce((acc, cur) => acc + cur, 0);
        max = Math.max(max, sum);
      }
    }
  }
  return max;
};

function helper(grid, m, n, dp, i, j, dir) {
  if (grid[i][j] === 'W') {
    return 0;
  }
  const pre = (() => {
    if (dir === 0) {
      return i - 1 >= 0 ? dp[i - 1][j][dir] : 0;
    } else if (dir === 3) {
      return j - 1 >= 0 ? dp[i][j - 1][dir] : 0;
    } else if (dir === 1) {
      return j + 1 < n ? dp[i][j + 1][dir] : 0;
    } else if (dir === 2) {
      return i + 1 < m ? dp[i + 1][j][dir] : 0;
    }
  })();
  const cur = grid[i][j] === 'E' ? 1 : 0;
  return pre + cur;
}
