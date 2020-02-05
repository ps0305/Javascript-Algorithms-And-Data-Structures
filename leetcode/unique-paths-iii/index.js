/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const visited = [...new Array(m)].map(() => new Array(n).fill(false));
  const nWalks = count(grid, m, n);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        return dfs(grid, m, n, nWalks + 1, [i, j], 0, visited, 0);
      }
    }
  }
};

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function dfs(grid, m, n, nWalks, p, selected, visited, output) {
  if (selected >= nWalks || grid[p[0]][p[1]] === 2) {
    if (selected >= nWalks && grid[p[0]][p[1]] === 2) {
      return output + 1;
    }
    return output;
  }
  for (const [di, dj] of dirs) {
    const i = p[0] + di;
    const j = p[1] + dj;
    // prettier-ignore
    const shouldVisit = isValid(i, j, m, n) &&
      (grid[i][j] === 0 || grid[i][j] === 2) &&
      !visited[i][j];
    if (shouldVisit) {
      visited[i][j] = true;
      output = dfs(grid, m, n, nWalks, [i, j], selected + 1, visited, output);
      visited[i][j] = false;
    }
  }
  return output;
}

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}

function count(grid, m, n) {
  let output = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        output += 1;
      }
    }
  }
  return output;
}
