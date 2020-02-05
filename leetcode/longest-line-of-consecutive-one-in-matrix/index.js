/**
 * @param {number[][]} M
 * @return {number}
 */
const dirs = [[0, 1], [1, 1], [1, 0], [1, -1]];

var longestLine = function(M) {
  if (!M.length || !M[0].length) {
    return 0;
  }
  const m = M.length;
  const n = M[0].length;
  const visited = new Set();
  let max = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const key = createKey(i, j, m, n);
      if (!visited.has(key) && M[i][j] === 1) {
        for (const [di, dj] of dirs) {
          max = Math.max(max, helper(M, m, n, i, j, di, dj, visited));
        }
      }
    }
  }
  return max;
};

function helper(M, m, n, i, j, di, dj, visited) {
  let x = i;
  let y = j;
  let max = 0;
  while (isValid(x, y, m, n) && M[x][y] === 1) {
    x += di;
    y += dj;
    max += 1;
  }
  return max;
}

function createKey(i, j, m, n) {
  return n * i + j;
}

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
