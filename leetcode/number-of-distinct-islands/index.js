/**
 * @param {number[][]} grid
 * @return {number}
 */

/*
  - DFS at each position if not yet visited.
  - For each DFS, return encoded path using direction.
    - Encoded path should be unique for the same shape
  - Count one if for each encoded path is unique.
*/

const dirs = [[-1, 0, 1], [0, 1, 2], [1, 0, 3], [0, -1, 4]];

const dfs = (grid, visited, i, j, dir, m, n, path = []) => {
  if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0 || visited[i][j]) {
    return path;
  }
  visited[i][j] = true;
  path.push(dir);
  for (let k = 0; k < dirs.length; k++) {
    const [di, dj, d] = dirs[k];
    dfs(grid, visited, i + di, j + dj, d, m, n, path);
  }
  path.push(0);
  return path;
};

const encode = (arr) => {
  arr.reverse();
  let output = 0;
  while (arr.length) {
    output = output * 10 + arr.pop();
  }
  return output;
};

var numDistinctIslands = function(grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  const m = grid.length;
  const n = grid[0].length;
  const visited = [...new Array(m)].map(() => new Array(n).fill(false));
  const hash = {};
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        const result = encode(dfs(grid, visited, i, j, 0, m, n));
        if (!hash[result]) {
          hash[result] = true;
          count += 1;
        }
      }
    }
  }
  return count;
};
