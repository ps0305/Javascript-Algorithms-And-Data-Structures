/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
/*
  dp[k][i][j] = dp[k - 1][x][y] * 1 / 8, for dir of 8 dirs
*/
const dirs = [[-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1]];

var knightProbability = function(N, K, r, c) {
  if (K === 0) {
    return 1;
  }
  const m = N;
  const n = N;
  const dp = [...new Array(K + 1)].map(() => [...new Array(m)].map(() => new Array(n).fill(0)));
  for (const [di, dj] of dirs) {
    const i = r + di;
    const j = c + dj;
    if (isValid(i, j, m, n)) {
      dp[1][i][j] = 1 / 8;
    }
  }
  for (let k = 2; k <= K; k++) {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        for (const [di, dj] of dirs) {
          const x = i + di;
          const y = j + dj;
          if (isValid(x, y, m, n)) {
            dp[k][i][j] += (dp[k - 1][x][y] * 1) / 8;
          }
        }
      }
    }
  }
  let output = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      output += dp[K][i][j];
    }
  }
  return output;
};

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
