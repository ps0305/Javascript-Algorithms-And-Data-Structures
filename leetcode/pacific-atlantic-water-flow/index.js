/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = new Array(m).fill(null).map(() => new Array(n).fill(null).map(() => new Set()));
  const q1 = [
    ...new Array(n).fill(null).map((_, j) => [0, j]),
    ...new Array(m).fill(null).map((_, i) => [i, 0]),
  ];
  bfs(matrix, m, n, q1, dp, '1');
  const q2 = [
    ...new Array(n).fill(null).map((_, j) => [m - 1, j]),
    ...new Array(m).fill(null).map((_, i) => [i, n - 1]),
  ];
  bfs(matrix, m, n, q2, dp, '2');
  const output = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dp[i][j].size >= 2) {
        output.push([i, j]);
      }
    }
  }
  return output;
};

function bfs(matrix, m, n, queue, dp, mark) {
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  while (queue.length) {
    const [x, y] = queue.shift();
    dp[x][y].add(mark);
    for (const [di, dj] of dirs) {
      const i = x + di;
      const j = y + dj;
      if (isValid(m, n, i, j) && matrix[i][j] >= matrix[x][y] && !dp[i][j].has(mark)) {
        queue.push([i, j]);
      }
    }
  }
}

function isValid(m, n, i, j) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
