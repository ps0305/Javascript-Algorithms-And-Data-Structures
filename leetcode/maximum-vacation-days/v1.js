/**
 * @param {number[][]} flights
 * @param {number[][]} days
 * @return {number}
 */
var maxVacationDays = function(flights, days) {
  const n = flights.length;
  const k = days[0].length;
  const dp = new Array(k).fill(null).map(() => new Array(n).fill(-Infinity));
  dp[0][0] = days[0][0];
  for (let p = 1; p < n; p++) {
    dp[0][p] = flights[0][p] ? days[p][0] : -Infinity;
  }
  let max = 0;
  for (let i = 1; i < k; i++) {
    for (let p = 0; p < n; p++) {
      for (let q = 0; q < n; q++) {
        const val =
          flights[q][p] === 1 || p === q ? (i - 1 >= 0 ? dp[i - 1][q] : 0) + days[p][i] : -Infinity;
        dp[i][p] = Math.max(dp[i][p], val);
        max = Math.max(max, dp[i][p]);
      }
    }
  }
  return max;
};
