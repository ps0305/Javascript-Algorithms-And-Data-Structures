/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const [nTotal, servers, rows, cols] = createServers(grid, m, n);
  for (let i = 0; i < m; i++) {
    if (rows[i].length >= 2) {
      for (const key of rows[i]) {
        servers.delete(key);
      }
    }
  }
  for (let j = 0; j < n; j++) {
    if (cols[j].length >= 2) {
      for (const key of cols[j]) {
        servers.delete(key);
      }
    }
  }
  return nTotal - servers.size;
};

function createServers(grid, m, n) {
  const servers = new Set();
  const rows = new Array(m).fill(null).map(() => []);
  const cols = new Array(n).fill(null).map(() => []);
  let nTotal = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const key = createKey(m, n, i, j);
        rows[i].push(key);
        cols[j].push(key);
        servers.add(key);
        nTotal += 1;
      }
    }
  }
  return [nTotal, servers, rows, cols];
}

function createKey(m, n, i, j) {
  return n * i + j;
}
