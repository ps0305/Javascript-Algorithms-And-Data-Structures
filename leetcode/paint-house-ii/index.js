/**
 * @param {number[][]} costs
 * @return {number}
 */
/*
  dp[i][j] = costs[i][j] + min { dp[i - 1][k], for k in costs.length and k !== j }
*/
var minCostII = function(costs) {
  if (!costs.length || !costs[0].length) {
    return 0;
  }
  const m = costs.length;
  const n = costs[0].length;
  // min values of pre house
  let pre = [[0, -1], [0, -1]];
  for (let i = 0; i < m; i++) {
    const min = [[Infinity, -1], [Infinity, -1]];
    for (let j = 0; j < n; j++) {
      const value = costs[i][j] + (j !== pre[0][1] ? pre[0][0] : pre[1][0]);
      if (value < min[0][0]) {
        min[1][0] = min[0][0];
        min[1][1] = min[0][1];
        min[0][0] = value;
        min[0][1] = j;
      } else if (value < min[1][0]) {
        min[1][0] = value;
        min[1][1] = j;
      }
    }
    pre = min;
  }
  return pre[0][0];
};
