/**
 * @param {number[]} A
 * @return {boolean}
 */
var splitArraySameAverage = function(A) {
  A.sort((a, b) => a - b);
  const maxAvg = A.reduce((acc, cur) => acc + cur, 0) / A.length;
  return dfs(A, maxAvg);
};

function dfs(arr, maxAvg, start = 0, avg = 0, n = 0) {
  if (start >= arr.length || (n > 0 && avg === maxAvg) || avg > maxAvg) {
    return avg === maxAvg && n < arr.length - 1;
  }
  for (let i = start; i < arr.length; i++) {
    if (i > start && arr[i] === arr[i - 1]) continue;
    if (dfs(arr, maxAvg, i + 1, (avg * n + arr[i]) / (n + 1), n + 1)) {
      return true;
    }
  }
  return false;
}
