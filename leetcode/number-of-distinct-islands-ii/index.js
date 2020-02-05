/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands2 = function(grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  const m = grid.length;
  const n = grid[0].length;
  const visited = [...new Array(m)].map(() => new Array(n).fill(false));
  const islands = new Set();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && grid[i][j] === 1) {
        const island = dfs(grid, m, n, [i, j], visited);
        const key = createKey(island);
        islands.add(key);
      }
    }
  }
  return islands.size;
};

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function dfs(grid, m, n, [x, y], visited, output = []) {
  visited[x][y] = true;
  output.push([x, y]);
  for (const [di, dj] of dirs) {
    const i = x + di;
    const j = y + dj;
    if (isValid(i, j, m, n) && !visited[i][j] && grid[i][j] === 1) {
      dfs(grid, m, n, [i, j], visited, output);
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

function createKey(island) {
  const shapes = [...new Array(8)].map(() => []);
  for (const [x, y] of island) {
    const result = transform(x, y);
    for (let i = 0; i < shapes.length; i++) {
      shapes[i].push(result[i]);
    }
  }
  const output = [];
  for (const shape of shapes) {
    sort(shape);
    for (const [x, y] of shape) {
      output.push([x - shape[0][0], y - shape[0][1]]);
    }
  }
  return sort(output).join(',');
}

function transform(x, y) {
  return [[x, y], [x, -y], [-x, y], [-x, -y], [y, x], [-y, x], [y, -x], [-y, -x]];
}

function sort(arr) {
  return arr.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
}
