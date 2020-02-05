/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
  let n = 0;
  let sum = 0;
  const map = { 0: 1 };
  for (const num of A) {
    sum += num;
    const r = sum % K >= 0 ? sum % K : (sum % K) + K;
    n += map[r] || 0;
    map[r] = (map[r] || 0) + 1;
  }
  return n;
};
