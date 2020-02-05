/**
 * @param {number[][]} flights
 * @param {number[][]} days
 * @return {number}
 */
var maxVacationDays = function(flights, days) {
  const n = flights.length;
  const k = days[0].length;
  let dp = new Array(n).fill(-Infinity);
  for (let i = 0; i < k; i++) {
    const next = new Array(n).fill(-Infinity);
    for (let p = 0; p < n; p++) {
      for (let q = 0; q < n; q++) {
        next[p] = Math.max(next[p], helper({ dp, flights, days, i, p, q }));
      }
    }
    dp = next;
  }
  return Math.max(...dp);
};

function helper({ dp, flights, days, i, p, q }) {
  if (i === 0) {
    return p === 0 || flights[0][p] ? days[p][i] : -Infinity;
  }
  if (flights[q][p] || p === q) {
    return dp[q] + days[p][i];
  }
  return -Infinity;
}
