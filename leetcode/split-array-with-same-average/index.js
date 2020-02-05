/**
 * @param {number[]} A
 * @return {boolean}
 */
var splitArraySameAverage = function(A) {
  const sum = A.reduce((acc, cur) => acc + cur, 0);
  const n = A.length;
  if (!isSplittable(sum, n)) {
    return false;
  }
  const dp = createCombinationSum(A, n, Math.ceil(n / 2));
  for (let k = 1; k <= n / 2; k++) {
    if ((sum * k) % n === 0 && dp[k].has((sum * k) / n)) {
      return true;
    }
  }
  return false;
};

function isSplittable(sum, n) {
  for (let k = 1; k <= n / 2; k++) {
    if ((sum * k) % n === 0) {
      return true;
    }
  }
  return false;
}

function createCombinationSum(arr, n, k) {
  let dp = [...new Array(k + 1)].map(() => new Set());
  dp[0].add(0);
  for (let i = 1; i <= n; i++) {
    const next = [...new Array(k + 1)].map(() => new Set());
    next[0].add(0);
    for (let j = 1; j <= k; j++) {
      concat(next[j], dp[j], [...dp[j - 1]].map((val) => val + arr[i - 1]));
    }
    dp = next;
  }
  return dp;
}

function concat(target, ...args) {
  for (const set of args) {
    for (const el of set) {
      target.add(el);
    }
  }
}
