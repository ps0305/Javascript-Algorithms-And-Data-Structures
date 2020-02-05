/**
 * @param {number} n
 * @return {number}
 */
const M = 10 ** 9 + 7;

var checkRecord = function(n) {
  return helper(n);
};

function helper(n, nA = 0, nL = 0, memo = {}) {
  const key = createKey(n, nA, nL);
  if (key in memo) {
    return memo[key];
  }
  if (nA > 1 || nL > 2) {
    return 0;
  }
  if (n <= 0) {
    return 1;
  }
  // prettier-ignore
  const sum = helper(n - 1, nA + 1, 0, memo)
    + helper(n - 1, nA, nL + 1, memo)
    + helper(n - 1, nA, 0, memo);
  memo[key] = sum % M;
  return memo[key];
}

function createKey(...args) {
  return args.join(':');
}
