/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
  const rows = {};
  const cols = {};
  for (const [i, j] of indices) {
    rows[i] = (rows[i] || 0) + 1;
    cols[j] = (cols[j] || 0) + 1;
  }
  let nOdds = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const total = (rows[i] || 0) + (cols[j] || 0);
      nOdds += total % 2;
    }
  }
  return nOdds;
};
