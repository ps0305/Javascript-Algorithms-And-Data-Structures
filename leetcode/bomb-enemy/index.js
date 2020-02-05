/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  const m = grid.length;
  const n = grid[0].length;
  let max = 0;
  let nEnemiesInRow = 0;
  const nEnemiesInCol = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (j === 0 || grid[i][j - 1] === 'W') {
        nEnemiesInRow = 0;
        for (let k = j; k < n && grid[i][k] !== 'W'; k++) {
          nEnemiesInRow += grid[i][k] === 'E' ? 1 : 0;
        }
      }
      if (i === 0 || grid[i - 1][j] === 'W') {
        nEnemiesInCol[j] = 0;
        for (let k = i; k < m && grid[k][j] !== 'W'; k++) {
          nEnemiesInCol[j] += grid[k][j] === 'E' ? 1 : 0;
        }
      }
      if (grid[i][j] === '0') {
        max = Math.max(max, nEnemiesInRow + nEnemiesInCol[j]);
      }
    }
  }
  return max;
};
